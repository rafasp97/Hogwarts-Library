import Image from "next/image";
import styles from "./HouseView.module.scss";
import { flags } from "@/utils/flags";
import { useState, useEffect, useRef } from "react";
import { useWindowSize } from "@/hooks/useWindowsSize";

export default function HouseView() {
  const [index, setIndex] = useState(0);
  const { width } = useWindowSize();
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % flags.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + flags.length) % flags.length);
  };

  useEffect(() => {
    if (!sliderRef.current || width > 1024) return;

    const slider = sliderRef.current;

    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const containerWidth = slider.offsetWidth;
      let newIndex = Math.round(scrollLeft / containerWidth);
      newIndex = Math.max(0, Math.min(newIndex, flags.length - 1));

      setIndex((prevIndex) => {
        if (prevIndex !== newIndex) return newIndex;
        return prevIndex;
      });
    };

    slider.addEventListener("scroll", handleScroll);

    return () => slider.removeEventListener("scroll", handleScroll);
  }, [width]);

  return (
    <main className={styles.houseview} id="houses">
      <header className={styles.logoContainer}>
        <Image
          src="/images/houses1.png"
          alt="Hogwarts Library Logo"
          width={300}
          height={300}
          className={styles.logo}
        />
      </header>
      <section>
        <div className={styles.flagsSlider} ref={sliderRef}>
          <div
            className={styles.flagsWrapper}
            style={{ 
              transform: width > 640 ? `translateX(-${index * 100}%)` : undefined 
            }}
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
            {width > 864 ? flags[index].extension : ""}
          </p>
          {width > 640 &&
            <div className={styles.controls}>
              <button onClick={prev}>◀</button>
              <button onClick={next}>▶</button>
            </div>
          }
        </div>
      </section>
    </main>
  );
}