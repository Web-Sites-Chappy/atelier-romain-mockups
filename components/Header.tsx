"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/projets", label: "Projets" },
  { href: "/atelier", label: "L’atelier" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <Link href="/" className="brand" aria-label="Atelier Romain — Accueil">
        <Image src="/assets/logo/logo-olive.png" alt="Atelier Romain" width={180} height={55} priority />
      </Link>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Ouvrir le menu">
        <span /><span />
      </button>
      <nav className={open ? "is-open" : ""} aria-label="Navigation principale">
        {links.map((link) => {
          const active = pathname === link.href || (link.href === "/projets" && pathname.startsWith("/projets/"));
          return <Link key={link.href} href={link.href} className={active ? "active" : ""}>{link.label}</Link>;
        })}
      </nav>
      <Link href="/contact" className="header-cta">Parler de votre projet</Link>
    </header>
  );
}
