import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/content";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://atelier-romain.fr";
  return ["", "/projets", "/atelier", "/actualites", "/contact", ...getProjects().map((p) => `/projets/${p.slug}`)].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
