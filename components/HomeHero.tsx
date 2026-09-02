"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Arrow } from "./Arrow";

const slides = [
  ["/assets/projects/lisle/1.png", "L’Isle-sur-la-Sorgue"],
  ["/assets/projects/cereste/1.png", "Céreste"],
  ["/assets/projects/pernes/1.png", "Pernes-les-Fontaines"],
  ["/assets/projects/lagnes/1.png", "Lagnes"],
  ["/assets/projects/coustellet/1.png", "Coustellet"],
];

export function HomeHero() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <section className="home-hero">
      <div className="home-hero-copy">
        <p className="eyebrow light">Atelier d’architecture · Provence</p>
        <h1>Architecture<br />juste.<br /><span>Vivante.</span></h1>
        <Link href="/projets" className="text-link light">Découvrir nos projets <Arrow /></Link>
      </div>
      <div className="home-carousel">
        <div className="slides">
          {slides.map(([src, alt], index) => <Image key={src} src={src} alt={alt} fill priority={index === 0} sizes="(max-width: 900px) 100vw, 50vw" className={index === active ? "active" : ""} />)}
        </div>
        <div className="carousel-controls">
          <div>{slides.map(([, alt], index) => <button key={alt} onClick={() => setActive(index)} className={index === active ? "active" : ""} aria-label={`Afficher ${alt}`} />)}</div>
          <span>{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}
