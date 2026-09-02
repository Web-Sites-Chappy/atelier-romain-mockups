import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";

export const metadata: Metadata = { title: "Prestations", description: "Rénovation, extension, surélévation, permis de construire et suivi de chantier en Provence." };
const services = [
  { id: "renovation", n: "01", title: "Rénovation & réhabilitation", text: "Révéler les qualités d’un bâti existant, améliorer son confort et l’adapter à de nouveaux usages, sans effacer son histoire." },
  { id: "extension", n: "02", title: "Extension & surélévation", text: "Créer de nouveaux espaces en dialogue avec l’existant, le paysage, les règles urbaines et votre manière d’habiter." },
  { id: "construction", n: "03", title: "Construction neuve", text: "Concevoir une architecture sur mesure, bioclimatique et durable, depuis les premières intentions jusqu’à la livraison." },
  { id: "permis", n: "04", title: "Permis & autorisations", text: "Étudier la faisabilité, constituer les dossiers et suivre les échanges avec les services d’urbanisme." },
  { id: "interieur", n: "05", title: "Aménagement intérieur", text: "Repenser volumes, circulations, lumière et matières pour créer des espaces cohérents jusque dans leurs détails." },
  { id: "chantier", n: "06", title: "Suivi de chantier", text: "Consulter les entreprises, coordonner les intervenants et veiller à la qualité d’exécution jusqu’à la réception." },
];
export default function ServicesPage() {
  return <>
    <header className="page-hero services-hero"><p className="eyebrow">Prestations</p><h1>De l’idée au lieu,<br /><em>un même engagement.</em></h1><p className="page-intro">L’atelier vous accompagne à chaque étape, avec un interlocuteur unique et une mission adaptée à votre projet.</p></header>
    <section className="services-list section-pad">{services.map((service) => <article id={service.id} key={service.id}><span>{service.n}</span><h2>{service.title}</h2><p>{service.text}</p></article>)}</section>
    <section className="service-process section-pad"><p className="eyebrow light">Comment ça se passe ?</p><h2>Une méthode claire,<br />à chaque étape.</h2><div>{["Premier échange", "Étude de faisabilité", "Conception", "Autorisations", "Consultation", "Chantier & réception"].map((item, i) => <span key={item}>{String(i + 1).padStart(2, "0")} — {item}</span>)}</div></section>
    <div className="cta-band"><strong>Parlons de votre projet.</strong><Link href="/contact">Prendre rendez-vous <Arrow /></Link></div>
  </>;
}
