import Image from "next/image";
import styles from "./CharactersView.module.scss";
import Card from "@/componets/Card/Card";
import { LazyLaoding } from "@/utils/LazyLoading";
import { useCharacters } from "@/hooks/useCaracters";

export default function CharactersView() {
  const { characters, loading, error } = useCharacters();

  return (
    <main className={styles.charactersView} id="characters">
      <h1>CARACTERS</h1>
      <p className={styles.p}>Meet the Wizards, Witches, and Magical Creatures of Hogwarts.</p>

      <section className={styles.charactersSection}>
        {loading && <p className={styles.statusMessage}>Carregando personagens...</p>}
        {error && <p className={styles.statusMessage}>Erro: {error}</p>}

        <div className={styles.grid}>
          {!loading && !error && characters.map((character, index) => (
            <LazyLaoding key={index}>
              <Card {...character}/>
            </LazyLaoding>
          ))}
        </div>
      </section>
    </main>
  );
}