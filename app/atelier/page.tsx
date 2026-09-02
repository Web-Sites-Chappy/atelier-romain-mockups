import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";

export const metadata: Metadata = { title: "L’atelier", description: "Découvrez l’Atelier Romain, atelier d’architecture en Provence et son approche sensible, locale et sur mesure." };

export default function AtelierPage() {
  return <>
    <section className="split-hero">
      <div className="split-hero-image"><Image src="/assets/projects/cereste/1.png" alt="Architecture en Provence" fill priority sizes="(max-width: 800px) 100vw, 50vw" /></div>
      <div><p className="eyebrow light">L’atelier</p><h1>Une architecture<br /><em>sensible</em> et<br />contextuelle.</h1></div>
    </section>
    <section className="stats">{[["18+", "Années d’expérience"], ["120", "Projets réalisés"], ["4", "Typologies d’espaces"], ["100%", "Honoraires à prix fixe"]].map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}</section>
    <section className="atelier-intro section-pad"><div><p className="eyebrow">Notre histoire</p><h2>Atelier Romain —<br /><em>architectes</em><br />en Provence.</h2><p>Fondé il y a plus de dix-huit ans, Atelier Romain accompagne ses clients dans la conception et la réalisation d’espaces qui leur ressemblent. Chaque projet naît d’une écoute attentive et d’une rigueur technique au service de l’usage.</p><p>Ancrés dans le territoire provençal, nous en maîtrisons les contraintes climatiques, les réglementations spécifiques et la richesse du patrimoine bâti.</p><Link href="/projets" className="text-link">Voir nos réalisations <Arrow /></Link></div><div className="atelier-intro-image"><Image src="/assets/projects/coustellet/1.png" alt="Projet de l’Atelier Romain à Coustellet" fill sizes="(max-width: 800px) 100vw, 45vw" /></div></section>
    <section className="philosophy section-pad"><p className="eyebrow light">Notre philosophie</p><h2>Nous concevons des espaces qui <em>transforment le quotidien</em> — des lieux où esthétique, fonctionnalité et durabilité ne font qu’un.</h2><div className="pillars">{[["01", "Écoute et sur-mesure", "Vos usages, contraintes et aspirations guident chacune de nos décisions."], ["02", "Ancrage territorial", "La lumière, la pierre, le vent et la végétation deviennent partenaires du projet."], ["03", "Transparence", "Des honoraires définis clairement avant le démarrage de chaque mission."]].map(([n, title, body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="process section-pad"><div><p className="eyebrow">Notre méthode</p><h2>Un accompagnement complet.</h2><p>De l’esquisse au chantier, chaque étape est jalonnée de points de validation pour que le projet reste le vôtre.</p></div><ol>{["Diagnostic & écoute", "Esquisse & avant-projet", "Permis & autorisations", "Chantier & livraison"].map((step) => <li key={step}>{step}</li>)}</ol></section>
    <div className="cta-band"><strong>Un projet en tête ?</strong><Link href="/contact">Parlons-en <Arrow /></Link></div>
  </>;
}
