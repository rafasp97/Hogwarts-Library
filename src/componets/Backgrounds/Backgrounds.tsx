"use client";
import styles from "./Backgrounds.module.scss";
import { bgsHome } from "@/utils/constans";
import { useBackgroundFade } from "@/hooks/useBackgroundFade";

export default function Backgrounds() {
  
  const { currentIndex, activeLayer, bgRefs } = useBackgroundFade(bgsHome, 5000, 1.2);

  return (
    <>
      <div
        ref={bgRefs[0]}
        className={styles.background}
        style={{ backgroundImage: `url(${bgsHome[currentIndex]})`, opacity: activeLayer === 0 ? 1 : 0 }}
      />
      <div
        ref={bgRefs[1]}
        className={styles.background}
        style={{ backgroundImage: `url(${bgsHome[currentIndex]})`, opacity: activeLayer === 1 ? 1 : 0 }}
      />
    </>
  );
}