import styles from "./DeathlyRelicsView.module.scss";
import Card from "@/componets/Card/Card";
import { relics } from "@/utils/constans";

export default function DeathlyRelicsView() {
  return (
    <main className={styles.deathlyRelicsView} id="featured-characters">
      <h1>DEATHLY RELICS</h1>

      <p className={styles.p}>
        The three legendary artifacts that together make one the Master of Death.
      </p>

      <section className={styles.container}>
        <div className={styles.grid}>
          {relics.map((relic, index) => (
            <Card
              key={index}
              name={relic.name}
              image={relic.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}