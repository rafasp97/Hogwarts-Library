import styles from "./Footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div  className={styles.logoContainer}>
        <Image
          src="/images/logo1.png"
          alt="Hogwarts Library Logo"
          width={800} 
          height={400} 
          className={styles.logo}
        />
      </div>
      <div className={styles.text}>
        <p>© 2026 Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}