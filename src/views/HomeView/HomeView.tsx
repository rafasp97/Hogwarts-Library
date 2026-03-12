"use client";
import Image from "next/image";
import styles from "./HomeView.module.scss";
import Header from "@/componets/Header/Header";
import Backgrounds from "@/componets/Backgrounds/Backgrounds";
import SelectHouse from "@/componets/SelectHouse/SelectHouse";

export default function HomeView() {

  return (
    <div  className={styles.homeview}>
      <div className={styles.container}>
        <Backgrounds/>
        <Header/>
        <SelectHouse/>
        <Image
          src="/images/logo1.png"
          alt="Hogwarts Library Logo"
          width={800} 
          height={400} 
          className={styles.logo}
        />
        <p>Discover the Secrets of the Magical World of Harry Potter.</p>
      </div>
    </div>
  );
}