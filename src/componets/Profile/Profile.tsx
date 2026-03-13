import Image from "next/image";
import styles from "./Profile.module.scss";
import { useEffect, useState } from "react";
import ProfileModal from "../ProfileModal/ProfileModal";
import { ICharacter } from "@/interface/Character.Interface";

export default function Profile(caracter: ICharacter) {

  const imageSrc = caracter.image || "/images/no-image.png"; 
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <article className={styles.card} onClick={() => setIsOpen(true)}>
        <figure className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={`Character ${caracter.name}`}
            width={300}
            height={400}
          />
        </figure>
        <figcaption className={styles.name}>{caracter.name}</figcaption>
      </article>
      {isOpen && <ProfileModal character={caracter} onClose={() => setIsOpen(false)} />}
    </>
    
  );
}