import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://atelier-romain.fr";
  return ["", "/projets", "/atelier", "/prestations", "/actualites", "/contact", ...projects.map((p) => `/projets/${p.slug}`)].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
