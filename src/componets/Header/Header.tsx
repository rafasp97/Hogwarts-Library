import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { animate } from "framer-motion";
import Image from "next/image";

export default function Header() {

  const [showScrollTop, setShowScrollTop] = useState(false) ;

  const handleScroll = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;

    animate(window.scrollY, targetPosition, {
      duration: 1.2,
      onUpdate(value) {
        window.scrollTo(0, value);
      },
      ease: [0.25, 0.1, 0.25, 1],
    });
  };

  const scrollToTop = () => {
    animate(window.scrollY, 0, {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate(value) {
        window.scrollTo(0, value);
      },
    });
  };

  useEffect(() => {
    let ticking = false;
    console.log('teste');
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <nav className={styles.nav}>
          <a href="#home" onClick={() => handleScroll("home")}>HOME</a>
          <a href="#houses" onClick={() => handleScroll("houses")}>HOUSES</a>
          <a href="#characters" onClick={() => handleScroll("characters")}>CHARACTERS</a>
        </nav>
        {showScrollTop && (
          <div className={styles.scrollToTop} onClick={scrollToTop}>
            <Image src="/images/magic.png" alt="icon" width={50} height={50} />
          </div>
        )}
      </div>
    </header>
  );
}