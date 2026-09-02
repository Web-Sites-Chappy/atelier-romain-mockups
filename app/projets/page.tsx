import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projets", description: "Découvrez les projets de rénovation, extension et réhabilitation de l’Atelier Romain en Provence." };

export default function ProjectsPage() {
  return <>
    <header className="page-hero"><p className="eyebrow">Réalisations</p><h1>Des lieux pensés<br /><em>pour vivre.</em></h1><p className="page-intro">Chaque projet est une réponse singulière à un lieu, des usages et une histoire.</p></header>
    <section className="project-grid section-pad">
      {projects.map((project, index) => <Link href={`/projets/${project.slug}`} className="project-card" key={project.slug}>
        <div className="project-card-image"><Image src={`/assets/projects/${project.slug}/${project.images[0]}`} alt={project.title} fill sizes="(max-width: 800px) 100vw, 50vw" priority={index < 2} /></div>
        <div className="project-card-copy"><div><p>{project.type} · {project.year}</p><h2>{project.shortTitle}</h2></div><Arrow /></div>
      </Link>)}
    </section>
  </>;
}
