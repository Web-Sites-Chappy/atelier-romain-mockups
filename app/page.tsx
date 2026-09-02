import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { HomeHero } from "@/components/HomeHero";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return <>
    <HomeHero />
    <div className="brand-divider" aria-hidden="true" />
    <section className="manifesto content-narrow">
      <Reveal><p className="eyebrow">Notre approche</p><h2>Une architecture <em>ancrée dans son territoire</em>, attentive à la lumière, aux matières et aux usages — conçue sur mesure, pour durer.</h2></Reveal>
    </section>
    <section className="featured section-pad">
      <Reveal><p className="eyebrow">Réalisation sélectionnée</p></Reveal>
      <Reveal className="featured-card">
        <Link href="/projets/lisle" className="featured-image"><Image src="/assets/projects/lisle/1.png" alt="Projet à L’Isle-sur-la-Sorgue" fill sizes="(max-width: 800px) 100vw, 55vw" /></Link>
        <div className="featured-copy"><p className="eyebrow">Aménagement intérieur · 2024</p><h2>L’Isle-sur-<br />la-Sorgue</h2><p>Vaucluse</p><Link href="/projets/lisle" className="text-link">Voir le projet <Arrow /></Link></div>
      </Reveal>
      <Link href="/projets" className="text-link align-right">Voir tous les projets <Arrow /></Link>
    </section>
    <section className="atelier-teaser">
      <Reveal><p className="eyebrow light">L’atelier</p><h2>Un atelier à taille humaine, fondé sur la confiance et l’écoute, pour des projets qui vous ressemblent.</h2><Link href="/atelier" className="text-link light">Découvrir l’atelier <Arrow /></Link></Reveal>
      <div className="dot-square" aria-hidden="true" />
    </section>
    <section className="service-teaser section-pad">
      <p className="eyebrow">Votre projet</p><div><h2>Rénover, agrandir,<br />transformer.</h2><p>De la première esquisse au suivi du chantier, l’atelier vous accompagne à chaque étape avec une vision claire et un engagement constant.</p><Link href="/prestations" className="button">Découvrir nos prestations <Arrow /></Link></div>
    </section>
  </>;
}
