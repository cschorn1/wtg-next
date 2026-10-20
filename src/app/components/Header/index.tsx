import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/">
        World Tour Guide
      </Link>
      <nav className={styles.nav} aria-label="Navegação principal">
        <Link href="/">Início</Link>
        <Link href="/destinos">Destinos</Link>
      </nav>
    </header>
  );
}
