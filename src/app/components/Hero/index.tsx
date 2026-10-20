import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <main className={styles.hero}>
      <div className={styles.intro}>
        <h1>Encontre seu próximo destino</h1>
        <p>
          Inspire-se para sua próxima viagem e conheça lugares especiais pelo
          mundo.
        </p>
      </div>
      <div className={styles.ctas}>
        <Link className={styles.primary} href="/destinos">
          <span>Ver destinos</span>
        </Link>
      </div>
    </main>
  );
}
