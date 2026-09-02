import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://atelier-romain.fr"),
  title: { default: "Atelier Romain — Architecture en Provence", template: "%s — Atelier Romain" },
  description: "Atelier d’architecture en Provence spécialisé en rénovation, réhabilitation, extension et espaces sur mesure.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
