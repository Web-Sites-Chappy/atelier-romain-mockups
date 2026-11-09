import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { RichText } from "@/components/RichText";
import { getAtelier, getServices, toParagraphs } from "@/lib/content";

export function generateMetadata(): Metadata {
  const content = getAtelier();
  return { title: content.metaTitle, description: content.metaDescription };
}

export default function AtelierPage() {
  const content = getAtelier();
  const services = getServices();
  return <>
    <section className="split-hero">
      <div className="split-hero-image"><Image src={content.heroImage} alt={content.heroImageAlt} fill priority sizes="(max-width: 800px) 100vw, 50vw" /></div>
      <div><p className="eyebrow light">{content.heroEyebrow}</p><h1><RichText>{content.heroTitle}</RichText></h1></div>
    </section>
    <section className="stats">{content.stats.map((stat) => <div key={stat.label}><strong>{stat.number}</strong><span>{stat.label}</span></div>)}</section>
    <section className="atelier-intro section-pad">
      <div>
        <p className="eyebrow">{content.introEyebrow}</p>
        <h2><RichText>{content.introTitle}</RichText></h2>
        {toParagraphs(content.introText).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <Link href="/projets" className="text-link">{content.introLink} <Arrow /></Link>
      </div>
      <div className="atelier-intro-image"><Image src={content.introImage} alt={content.introImageAlt} fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
    </section>
    <section className="philosophy section-pad">
      <p className="eyebrow light">{content.philosophyEyebrow}</p>
      <h2><RichText>{content.philosophyTitle}</RichText></h2>
      <div className="pillars">{content.pillars.map((pillar) => <article key={pillar.number}><span>{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.text}</p></article>)}</div>
    </section>
    <section className="process section-pad">
      <div><p className="eyebrow">{content.processEyebrow}</p><h2>{content.processTitle}</h2><p>{content.processText}</p></div>
      <ol>{content.processSteps.map((step) => <li key={step}>{step}</li>)}</ol>
    </section>
    <section id="prestations" className="services-list section-pad">
      <p className="eyebrow">{content.servicesEyebrow}</p>
      {services.map((service) => <article id={service.id} key={service.id}><span>{service.number}</span><h2>{service.title}</h2><p>{service.text}</p></article>)}
    </section>
    <div className="cta-band"><strong>{content.ctaText}</strong><Link href="/contact">{content.ctaLink} <Arrow /></Link></div>
  </>;
}
