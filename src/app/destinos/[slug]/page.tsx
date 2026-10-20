import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import HeroDestino from "../../components/HeroDestino";
import destinos from "@/lib/destinos.json";
import styles from "./page.module.css";

export function generateStaticParams() {
  return destinos.map(({ slug }) => ({ slug }));
}

export default function DestinoPage({
  params,
}: PageProps<"/destinos/[slug]">) {
  return (
    <Suspense
      fallback={
        <main className={styles.page}>
          <p>Carregando destino...</p>
        </main>
      }
    >
      <DestinoConteudo params={params} />
    </Suspense>
  );
}

async function DestinoConteudo({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destino = destinos.find((item) => item.slug === slug);

  if (!destino) {
    notFound();
  }

  return (
    <>
      <HeroDestino
        titulo={`Bem-vindo a ${destino.nome}`}
        imagem={destino.imagem}
      />
      <main className={styles.page}>
        <article className={styles.destination}>
          <Image
            className={styles.image}
            src={destino.imagem}
            alt={`Paisagem de ${destino.nome}`}
            width={640}
            height={420}
          />
          <div className={styles.summary}>
            <h2>{destino.nome}</h2>
            <p>
              <strong>Local:</strong> {destino.local}
            </p>
            <dl className={styles.facts}>
              <div>
                <dt>Idioma</dt>
                <dd>{destino.idioma}</dd>
              </div>
              <div>
                <dt>Moeda</dt>
                <dd>{destino.moeda}</dd>
              </div>
            </dl>
          </div>
          <p className={styles.description}>{destino.descricao}</p>
          <Link className={styles.backButton} href="/destinos">
            <span className={styles.arrow} aria-hidden="true">
              ←
            </span>
            <span>Voltar aos destinos</span>
          </Link>
        </article>
      </main>
    </>
  );
}
