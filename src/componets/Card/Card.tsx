import Image from "next/image";
import styles from "./Card.module.scss";
import { ICard } from "@/interface/Card.Interface";

export default function Card({ name, image }: ICard) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 668px) 100vw"
        />
      </div>

      <span className={styles.name}>{name}</span>
    </div>
  );
}