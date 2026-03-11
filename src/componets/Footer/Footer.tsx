import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Hogwarts Library. Todos os direitos reservados.</p>
      <nav className={styles.nav}>
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#contact">Contato</a>
      </nav>
    </footer>
  );
}