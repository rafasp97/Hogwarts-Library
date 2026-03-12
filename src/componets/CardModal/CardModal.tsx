import Image from "next/image";
import styles from "./CardModal.module.scss";
import { ICardModal } from "@/interface/CardModal.Interface";
import { useWindowSize } from "@/hooks/useWindowsSize";
import { useState } from "react";

export default function CardModal({ character, onClose }: ICardModal) {
  const imageSrc = character.image || "/images/no-image.png";
  const { width } = useWindowSize();

  const formatLabel = (key: string) => {
    return key
      .replace(/([A-Z])/g, " $1") 
      .replace(/^./, (str) => str.toUpperCase()); 
  }

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

              const allowedFields = ["dateOfBirth", "house", "patronus", "actor", "alive"];
              if (!allowedFields.includes(key)) return null;

              const displayValue =
                key === "alive"
                  ? value
                    ? "Yes"
                    : "No"
                  : value ? value : 'Not Informed';

              const extraClass = key === "house" ? styles.houseHighlight : "";

              return (
                <div key={key} className={`${styles.gridItem} ${extraClass}`}>
                  <p className={styles.field}>{formatLabel(key)}</p>
                  <p className={styles.value}>{displayValue}</p>
                </div>
              );
            })}
          </div>
        </div>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
}