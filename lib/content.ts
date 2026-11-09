import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const contentRoot = path.join(process.cwd(), "content");

function readJson<T>(...segments: string[]): T {
  return JSON.parse(readFileSync(path.join(contentRoot, ...segments), "utf8")) as T;
}

/** Divide un texto de content/*.json en párrafos. Una línea en blanco separa párrafos. */
export const toParagraphs = (text: string): string[] =>
  text.split(/\n{2,}/).map((paragraph) => paragraph.trim()).filter(Boolean);

export type ProjectField = { label: string; value: string };
export type ProjectSection = { heading: string; text: string };
export type ProjectImage = { src: string; alt: string };

/**
 * Un proyecto de content/projects/<slug>.json.
 * `label` es la etiqueta corta ("Maison individuelle · En consultation") de la ficha y las tarjetas.
 * `fields` solo lleva los datos conocidos: un dato que falta no se incluye y no se muestra.
 */
export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  label: string;
  location: string;
  order: number;
  fields: ProjectField[];
  sections: ProjectSection[];
  images: ProjectImage[];
};

export type Service = { id: string; number: string; title: string; text: string };

export type HomeContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroLink: string;
  heroSlides: { image: string; alt: string }[];
  manifestoEyebrow: string;
  manifestoTitle: string;
  featuredEyebrow: string;
  featuredProject: string;
  atelierTeaserEyebrow: string;
  atelierTeaserTitle: string;
  atelierTeaserLink: string;
  serviceTeaserEyebrow: string;
  serviceTeaserTitle: string;
  serviceTeaserText: string;
  serviceTeaserLink: string;
};

export type AtelierContent = {
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  heroEyebrow: string;
  heroTitle: string;
  stats: { number: string; label: string }[];
  introEyebrow: string;
  introTitle: string;
  introText: string;
  introLink: string;
  introImage: string;
  introImageAlt: string;
  philosophyEyebrow: string;
  philosophyTitle: string;
  pillars: { number: string; title: string; text: string }[];
  processEyebrow: string;
  processTitle: string;
  processText: string;
  processSteps: string[];
  servicesEyebrow: string;
  ctaText: string;
  ctaLink: string;
};

export type ProjectsPageContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
};

export type ContactContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  formEyebrow: string;
  email: string;
  addressLines: string[];
  phone: string;
  phoneHref: string;
  projectOptions: string[];
  submitLabel: string;
};

export type NewsContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  linkLabel: string;
  articles: { tag: string; title: string; text: string }[];
};

/** Lee content/projects/*.json. El nombre del archivo es el slug de la URL. */
export function getProjects(): Project[] {
  const directory = path.join(contentRoot, "projects");
  return readdirSync(directory)
    .filter((file) => file.endsWith(".json"))
    .map((file) => ({
      ...readJson<Omit<Project, "slug">>("projects", file),
      slug: file.replace(/\.json$/, ""),
    }))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || a.slug.localeCompare(b.slug));
}

export const getProject = (slug: string): Project | undefined =>
  getProjects().find((project) => project.slug === slug);

export const getServices = (): Service[] => readJson<{ services: Service[] }>("site", "services.json").services;
export const getHome = () => readJson<HomeContent>("site", "home.json");
export const getAtelier = () => readJson<AtelierContent>("site", "atelier.json");
export const getProjectsPage = () => readJson<ProjectsPageContent>("site", "projets.json");
export const getContact = () => readJson<ContactContent>("site", "contact.json");
export const getNews = () => readJson<NewsContent>("site", "actualites.json");
