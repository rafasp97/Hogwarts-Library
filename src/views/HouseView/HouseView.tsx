import Image from "next/image";
import styles from "./HouseView.module.scss";
import { houses } from "@/utils/constans";
import { useWindowSize } from "@/hooks/useWindowsSize";
import { useState } from "react";

export default function HouseView() {
  const { width } = useWindowSize();
  const isDesktop = width > 640;

  const [current, setCurrent] = useState(0);

  const house = houses[current];
  const reverse = isDesktop && current % 2 !== 0;

  return (
    <main className={styles.houseview} id="houses">
      <section className={styles.section}>
        <div className={`${styles.container} ${reverse ? styles.reverse : ""}`}>
          <Image
            src={house.src}
            alt={`Flag of ${house.name}`}
            width={300}
            height={300}
            className={styles.house}
          />
          <div className={styles.textContainer}>
            <h2>{house.name}</h2>
            <h3>{house.title}</h3>
            <p>{house.description}</p>
          </div>
        </div>
        <div className={styles.indicators}>
          {houses.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${current === index ? styles.active : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

      </section>
    </main>
  );
}