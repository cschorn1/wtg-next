import styles from "./HeroDestino.module.css";

type HeroDestinoProps = {
  titulo: string;
  imagem: string;
};

export default function HeroDestino({ titulo, imagem }: HeroDestinoProps) {
  return (
    <header
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(rgb(0 0 0 / 58%), rgb(0 0 0 / 58%)), url("${imagem}")`,
      }}
    >
      <h1>{titulo}</h1>
    </header>
  );
}
