import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { HomeHero } from "@/components/HomeHero";
import { Reveal } from "@/components/Reveal";
import { RichText } from "@/components/RichText";
import { getHome, getProject, getProjects } from "@/lib/content";

export default function Home() {
  const content = getHome();
  const featured = getProject(content.featuredProject) ?? getProjects()[0];
  const region = featured.location.split(",").pop()?.trim() ?? featured.location;
  return <>
    <HomeHero eyebrow={content.heroEyebrow} title={content.heroTitle} linkLabel={content.heroLink} slides={content.heroSlides} />
    <div className="brand-divider" aria-hidden="true" />
    <section className="manifesto content-narrow">
      <Reveal><p className="eyebrow">{content.manifestoEyebrow}</p><h2><RichText>{content.manifestoTitle}</RichText></h2></Reveal>
    </section>
    <section className="featured section-pad">
      <Reveal><p className="eyebrow">{content.featuredEyebrow}</p></Reveal>
      <Reveal className="featured-card">
        <Link href={`/projets/${featured.slug}`} className="featured-image"><Image src={featured.images[0].src} alt={featured.images[0].alt} fill sizes="(max-width: 800px) 100vw, 55vw" /></Link>
        <div className="featured-copy"><p className="eyebrow">{featured.label}</p><h2>{featured.shortTitle}</h2><p>{region}</p><Link href={`/projets/${featured.slug}`} className="text-link">Voir le projet <Arrow /></Link></div>
      </Reveal>
      <Link href="/projets" className="text-link align-right">Voir tous les projets <Arrow /></Link>
    </section>
    <section className="atelier-teaser">
      <Reveal><p className="eyebrow light">{content.atelierTeaserEyebrow}</p><h2>{content.atelierTeaserTitle}</h2><Link href="/atelier" className="text-link light">{content.atelierTeaserLink} <Arrow /></Link></Reveal>
      <div className="dot-square" aria-hidden="true" />
    </section>
    <section className="service-teaser section-pad">
      <p className="eyebrow">{content.serviceTeaserEyebrow}</p><div><h2><RichText>{content.serviceTeaserTitle}</RichText></h2><p>{content.serviceTeaserText}</p><Link href="/atelier#prestations" className="button">{content.serviceTeaserLink} <Arrow /></Link></div>
    </section>
  </>;
}
