import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/" aria-label="World Tour Guide - página inicial">
        <Image
          className={styles.logo}
          src="/images/wtg-black.png"
          alt="World Tour Guide"
          width={130}
          height={87}
        />
      </Link>
      <p>©2026 World Tour Guide - Todos os direitos reservados</p>
      <div className={styles.socialLinks}>
        <p>Conecte-se com o criador:</p>
        <a
          className={styles.socialLink}
          href="https://www.linkedin.com/in/conrado-schorn/"
        >
          • LinkedIn
        </a>
        <a
          className={styles.socialLink}
          href="https://www.instagram.com/cschorn_/"
        >
          • Instagram
        </a>
      </div>
    </footer>
  );
}
