import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";

export const metadata: Metadata = { title: "Actualités & conseils", description: "Conseils de l’Atelier Romain sur la rénovation, l’architecture et les démarches de projet en Provence." };
const articles = [
  ["Conseils", "Permis de construire en Provence : les étapes à anticiper", "Comprendre les études, délais et pièces nécessaires avant de déposer un dossier."],
  ["Rénovation", "Rénover une maison ancienne sans perdre son caractère", "Confort, lumière, matériaux : trouver le juste équilibre entre patrimoine et usages contemporains."],
  ["Extension", "Comment agrandir sa maison ?", "Les premières questions à se poser avant de choisir entre extension et surélévation."],
];
export default function NewsPage() {
  return <>
    <header className="page-hero news-hero"><p className="eyebrow">Journal de l’atelier</p><h1>Actualités<br /><em>& conseils.</em></h1><p className="page-intro">Des repères concrets pour mieux comprendre un projet d’architecture.</p></header>
    <section className="articles section-pad">{articles.map(([tag, title, text]) => <article key={title}><p className="eyebrow">{tag}</p><h2>{title}</h2><p>{text}</p><Link href="/contact" className="text-link">Nous poser une question <Arrow /></Link></article>)}</section>
  </>;
}
