import Hero from "./components/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <section className={styles.belowHero}>
        <h2>O mundo espera por você</h2>
        <p>
          Explore lugares especiais e encontre inspiração para sua próxima
          viagem.
        </p>
      </section>
    </div>
  );
}
