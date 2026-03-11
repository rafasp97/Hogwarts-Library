import Image from "next/image";
import styles from "./CharactersView.module.scss";
import Card from "@/componets/Card/Card";
import { LazyLaoding } from "@/utils/LazyLoading";
import { useCharacters } from "@/hooks/useCaracters";

export default function CharactersView() {
  const { characters, loading, error } = useCharacters();

  return (
    <main className={styles.charactersView}>
      <header className={styles.logoContainer}>
        <Image
          src="/images/characters.png"
          alt="Hogwarts Library Logo"
          width={300}
          height={300}
          className={styles.logo}
        />
      </header>

      <section className={styles.charactersSection}>
        {loading && <p className={styles.statusMessage}>Carregando personagens...</p>}
        {error && <p className={styles.statusMessage}>Erro: {error}</p>}

        <div className={styles.grid}>
          {!loading && !error && characters.map((character, index) => (
            <LazyLaoding key={index}>
              <Card name={character.name} image={character.image} />
            </LazyLaoding>
          ))}
        </div>
      </section>
    </main>
  );
}