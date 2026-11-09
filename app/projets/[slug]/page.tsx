import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/Arrow";
import { getProject, getProjects, toParagraphs } from "@/lib/content";

export function generateStaticParams() { return getProjects().map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.metaTitle, description: project.metaDescription } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return <>
    <header className="project-hero"><p className="eyebrow">{project.label}</p><h1>{project.title}</h1><p>{project.location}</p></header>
    <section className="project-meta">{project.fields.map(({ label, value }) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</section>
    <section className="project-stories section-pad">
      {project.sections.map((section) => <article className="project-story" key={section.heading}><h2>{section.heading}</h2><div>{toParagraphs(section.text).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></article>)}
    </section>
    <section className="project-gallery section-pad">{project.images.map((image) => <div key={image.src}><Image src={image.src} alt={image.alt} width={1600} height={1100} sizes="100vw" /></div>)}</section>
    <div className="cta-band"><Link href="/projets"><Arrow reverse /> Retour aux projets</Link><Link href="/contact">Discutons de votre projet <Arrow /></Link></div>
  </>;
}
