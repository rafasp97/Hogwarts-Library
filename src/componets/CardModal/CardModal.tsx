import Image from "next/image";
import styles from "./CardModal.module.scss";
import { ICardModal } from "@/interface/CardModal.Interface";
import { useWindowSize } from "@/hooks/useWindowsSize";
import { months, paramsDetails } from "@/utils/constans";

export default function CardModal({ character, onClose }: ICardModal) {
  const imageSrc = character.image || "/images/no-image.png";
  const { width } = useWindowSize();

  const formatLabel = (key: string) => {
    return key
      .replace(/([A-Z])/g, " $1") 
      .replace(/^./, (str) => str.toUpperCase()); 
  }

  const formatValue = (key: string, value: string | boolean | undefined): string => {
    if (!value && key !== "alive") return "Not Informed";

    switch (key) {
      case "alive":
        return value ? "Yes" : "No";
      case "dateOfBirth":
        return typeof value === "string" ? formatDate(value) : "Not Informed";
      default:
        return String(value);
    }
  };

const formatDate = (value: string): string => {
  const [day, month, year] = value.split("-").map(Number);

  if (!month || month < 1 || month > 12) return value;

  return `${day} ${months[month - 1]} ${year}`;
};

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()} 
      >
        <h2 className={styles.name}>{character.name}</h2>
        <div className={styles.container}>
          { width > 640 && 
            <figure>
              <Image src={imageSrc} className={styles.image} alt={character.name} width={300} height={400} />
            </figure> 
          }
          <div className={styles.detailsGrid}>
            {Object.entries(character).map(([key, value]) => {

              if (!paramsDetails.includes(key)) return null;

              const houseStyles =
                key === "house"
                  ? `${styles.houseHighlight} ${styles[value.toLowerCase()]}`
                  : "";

              return (
                <div key={key} className={`${styles.gridItem}`}>
                  <p className={styles.field}>{formatLabel(key)}</p>
                  <p className={`${styles.value} ${houseStyles}`}>{formatValue(key, value)}</p>
                </div>
              );
            })}
          </div>
        </div>
        <button className={styles.closeButton} onClick={onClose}>
          <Image src="/images/close.png" alt={character.name} width={30} height={40} />
        </button>
      </div>
    </div>
  );
}