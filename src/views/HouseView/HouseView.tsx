import Image from "next/image";
import styles from "./HouseView.module.scss";
import { flags } from "@/utils/flags";
import { useState, useEffect  } from "react";

export default function HouseView() {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % flags.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + flags.length) % flags.length);
  };

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <section>
        <div className={styles.flagsSlider}>
          <div
            className={styles.flagsWrapper}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {flags.map((flag) => (
              <div key={flag.name} className={styles.flagContainer}>
                <Image
                  src={flag.src}
                  alt={`Flag of ${flag.name}`}
                  width={300}
                  height={300}
                  className={styles.flag}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.textContainer}>
          <h2>{flags[index].name}</h2>
          <p>
            {flags[index].description} 
            {width > 1024 ? flags[index].extension : ""}
          </p>
        </div>
      </section>
      <div className={styles.controls}>
        <button onClick={prev}>◀</button>
        <button onClick={next}>▶</button>
      </div>
    </div>
  );
}