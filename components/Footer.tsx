import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="dot-pattern" aria-hidden="true" />
      <div className="footer-grid">
        <div className="footer-brand">
          <Image src="/assets/logo/logo-blanc.png" alt="Atelier Romain" width={180} height={55} />
          <p>Atelier d’architecture en Provence. Une architecture juste, sensible et vivante.</p>
        </div>
        <div>
          <p className="footer-label">Navigation</p>
          <Link href="/projets">Projets</Link>
          <Link href="/atelier">L’atelier</Link>
          <Link href="/prestations">Prestations</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <p className="footer-label">À découvrir</p>
          <Link href="/actualites" className="secondary-link">Actualités & conseils</Link>
          <Link href="/prestations#permis" className="secondary-link">Permis de construire</Link>
          <Link href="/prestations#renovation" className="secondary-link">Rénovation</Link>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Atelier Romain</span><span>Provence · France</span></div>
    </footer>
  );
}
