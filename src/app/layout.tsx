import type { Metadata } from "next";
import Layout from "./components/Layout";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "World Tour Guide",
  description: "Inspire-se para sua próxima viagem e conheça destinos especiais.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
