import CardDestino from "../components/CardDestino";
import Grid from "../components/Grid";
import HeroDestino from "../components/HeroDestino";
import destinos from "@/lib/destinos.json";
import styles from "./page.module.css";

export default function DestinosPage() {
  return (
    <>
      <HeroDestino
        titulo="Destinos para sua próxima viagem"
        imagem="/images/hero-home.jpeg"
      />
      <main className={styles.page}>
        <Grid>
          {destinos.map((destino) => (
            <CardDestino key={destino.id} {...destino} />
          ))}
        </Grid>
      </main>
    </>
  );
}