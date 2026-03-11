import Image from "next/image";
import styles from "./Card.module.scss";
import { ICard } from "@/interface/Card.Interface";

export default function Card({ name, image }: ICard) {

  const imageSrc = image || "/images/placeholder.png"; 

  return (
    <article className={styles.card}>
      <figure className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={`Character ${name}`}
          width={300}
          height={400}
        />
      </figure>

      <figcaption className={styles.name}>{name}</figcaption>
    </article>
  );
}