"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Arrow } from "./Arrow";
import { RichText } from "./RichText";

type Slide = { image: string; alt: string };

export function HomeHero({ eyebrow, title, linkLabel, slides }: { eyebrow: string; title: string; linkLabel: string; slides: Slide[] }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (slides.length < 2) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, [slides.length]);
  return (
    <section className="home-hero">
      <div className="home-hero-copy">
        <p className="eyebrow light">{eyebrow}</p>
        <h1><RichText emphasis="span">{title}</RichText></h1>
        <Link href="/projets" className="text-link light">{linkLabel} <Arrow /></Link>
      </div>
      <div className="home-carousel">
        <div className="slides">
          {slides.map(({ image, alt }, index) => <Image key={image} src={image} alt={alt} fill priority={index === 0} sizes="(max-width: 900px) 100vw, 50vw" className={index === active ? "active" : ""} />)}
        </div>
        <div className="carousel-controls">
          <div>{slides.map(({ alt }, index) => <button key={alt} onClick={() => setActive(index)} className={index === active ? "active" : ""} aria-label={`Afficher ${alt}`} aria-pressed={index === active}><Image src="/assets/trame/point_sable.png" alt="" width={14} height={14} /></button>)}</div>
          <span>{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}
