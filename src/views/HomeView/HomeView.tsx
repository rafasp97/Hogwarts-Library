import Image from "next/image";
import styles from "./HomeView.module.scss";
import Header from "@/componets/Header/Header";

export default function HomeView() {
  return (
    <div  className={styles.homeview}>
      <Header/>
      <div  className={styles.logoContainer}>
        <Image
          src="/images/logo1.png"
          alt="Hogwarts Library Logo"
          width={800} 
          height={400} 
          className={styles.logo}
        />
      </div>

    </div>
  );
}