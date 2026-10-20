import Image from "next/image";
import Link from "next/link";
import styles from "./CardDestino.module.css";

type CardDestinoProps = {
  slug: string;
  nome: string;
  local: string;
  imagem: string;
  descricao: string;
  idioma: string;
  moeda: string;
};

export default function CardDestino({
  slug,
  nome,
  local,
  imagem,
  descricao,
  idioma,
  moeda,
}: CardDestinoProps) {
  return (
    <Link className={styles.card} href={`/destinos/${slug}`}>
      <Image
        className={styles.image}
        src={imagem}
        alt={`Paisagem de ${nome}`}
        width={640}
        height={420}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{nome}</h2>
        <p className={styles.location}>
          <strong>Local:</strong> {local}
        </p>
        <p className={styles.description}>{descricao}</p>
        <div className={styles.details}>
          <p>
            <strong>Idioma:</strong> {idioma}
          </p>
          <p>
            <strong>Moeda:</strong> {moeda}
          </p>
        </div>
      </div>
    </Link>
  );
}
