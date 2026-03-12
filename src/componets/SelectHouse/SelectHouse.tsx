"use client";

import Image from "next/image";
import styles from "./SelectHouse.module.scss";
import { ballColors } from "@/utils/constans";
import { useState, useEffect } from "react";
import { useWindowSize } from "@/hooks/useWindowsSize";

export default function SelectHouse() {
  const [index, setIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setIsClient(true);
    const stored = localStorage.getItem("selectedHouse");
    if (stored) setIndex(Number(stored));
  }, []);

  const changeHouse = (i: number) => {
    setIndex(i);
    localStorage.setItem("selectedHouse", i.toString());
  };

  if (!isClient) return null;

  return (
    <div
      className={styles.selectHouse}
      style={{ display: width <= 640 ? "none" : "flex" }}
    >
      <div className={styles.ballContainer}>
        {ballColors.map((color, i) => (
          <div
            key={i}
            className={styles.ball}
            style={{ backgroundColor: color }}
            onClick={() => changeHouse(i)}
          />
        ))}
      </div>
      <div className={styles.image}>
        <Image
          src={`/images/flags/${index + 1}.png`}
          alt="Flag"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}