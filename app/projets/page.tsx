import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { RichText } from "@/components/RichText";
import { getProjects, getProjectsPage } from "@/lib/content";

export function generateMetadata(): Metadata {
  const content = getProjectsPage();
  return { title: content.metaTitle, description: content.metaDescription };
}

export default function ProjectsPage() {
  const content = getProjectsPage();
  const projects = getProjects();
  return <>
    <header className="page-hero"><p className="eyebrow">{content.eyebrow}</p><h1><RichText>{content.title}</RichText></h1><p className="page-intro">{content.intro}</p></header>
    <section className="project-grid section-pad">
      {projects.map((project, index) => <Link href={`/projets/${project.slug}`} className="project-card" key={project.slug}>
        <div className="project-card-image"><Image src={project.images[0].src} alt={project.images[0].alt} fill sizes="(max-width: 800px) 100vw, 50vw" priority={index < 2} /></div>
        <div className="project-card-copy"><div><p>{project.label}</p><h2>{project.shortTitle}</h2></div><Arrow /></div>
      </Link>)}
    </section>
  </>;
}
