import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#home">HOME</a>
        <a href="#houses">HOUSES</a>
        <a href="#characters">CHARACTERS</a>
      </nav>
    </header>
  );
}