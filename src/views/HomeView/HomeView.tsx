import Image from "next/image";
import styles from "./HomeView.module.scss";

export default function HomeView() {
  return (
    <div  className={styles.homeview}>
      <Image
        src="/images/logo.png"
        alt="Hogwarts Library Logo"
        width={800} 
        height={400} 
        className={styles.logo}
      />
    </div>
  );
}