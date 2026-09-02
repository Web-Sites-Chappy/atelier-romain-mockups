import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/Arrow";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.title, description: `${project.type} à ${project.location} par l’Atelier Romain.` } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return <>
    <header className="project-hero"><p className="eyebrow">{project.type} · {project.year}</p><h1>{project.title}</h1><p>{project.location}</p></header>
    <section className="project-meta">{[["Type", project.type], ["Année", project.year], ["Lieu", project.location], ["Surface", project.surface]].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</section>
    <section className="project-story section-pad"><h2>À propos<br />du projet</h2><div>{project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
    <section className="project-gallery section-pad">{project.images.map((image, index) => <div key={image}><Image src={`/assets/projects/${project.slug}/${image}`} alt={`${project.shortTitle} — vue ${index + 1}`} width={1600} height={1100} sizes="100vw" /></div>)}</section>
    <div className="cta-band"><Link href="/projets"><Arrow reverse /> Retour aux projets</Link><Link href="/contact">Discutons de votre projet <Arrow /></Link></div>
  </>;
}
