import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { RichText } from "@/components/RichText";
import { getNews } from "@/lib/content";

export function generateMetadata(): Metadata {
  const content = getNews();
  return { title: content.metaTitle, description: content.metaDescription };
}

export default function NewsPage() {
  const content = getNews();
  return <>
    <header className="page-hero news-hero"><p className="eyebrow">{content.eyebrow}</p><h1><RichText>{content.title}</RichText></h1><p className="page-intro">{content.intro}</p></header>
    <section className="articles section-pad">{content.articles.map((article) => <article key={article.title}><p className="eyebrow">{article.tag}</p><h2>{article.title}</h2><p>{article.text}</p><Link href="/contact" className="text-link">{content.linkLabel} <Arrow /></Link></article>)}</section>
  </>;
}
