import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact", description: "Contactez l’Atelier Romain pour votre projet d’architecture en Provence." };
export default function ContactPage() {
  return <>
    <header className="page-hero contact-hero"><p className="eyebrow">Contact</p><h1>Votre projet<br /><em>commence ici.</em></h1><p className="page-intro">Racontez-nous votre lieu, vos besoins et vos envies. Nous vous répondrons pour organiser un premier échange.</p></header>
    <section className="contact-layout section-pad"><div><p className="eyebrow">Écrivez-nous</p><a className="contact-email" href="mailto:contact@atelier-romain.fr">contact@atelier-romain.fr</a><p>Provence-Alpes-Côte d’Azur<br />Sur rendez-vous</p></div><form><label>Nom<input name="name" autoComplete="name" /></label><label>Email<input type="email" name="email" autoComplete="email" /></label><label>Votre projet<select name="project"><option>Rénovation</option><option>Extension / surélévation</option><option>Construction neuve</option><option>Aménagement intérieur</option><option>Autre</option></select></label><label>Quelques mots<textarea name="message" rows={5} /></label><button type="submit" className="button">Envoyer la demande <Arrow /></button></form></section>
  </>;
}

function Arrow() { return <span aria-hidden="true">→</span>; }
