import Image from "next/image";
import styles from "./HouseView.module.scss";
import { flags } from "@/utils/flags";

export default function HouseView() {

  return (
    <div className={styles.houseview}>
      <div className={styles.logoContainer}>
        <Image
          src="/images/houses.png"
          alt="Hogwarts Library Logo"
          width={300}
          height={300}
          className={styles.logo}
        />
      </div>

      <section className={styles.flagsSection}>
        <div className={styles.flagsWrapper}>
          {flags.map((flag) => (
            <div className={styles.flagItem} key={flag.name}>
              <Image
                src={flag.src}
                alt={`${flag.name} flag`}
                width={300}
                height={300}
                className={styles.flag}
              />
              <h2>{flag.name}</h2>
              <p>{flag.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}