"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ServicesPage() {
  useEffect(() => {
    window.location.replace(`/atelier/${window.location.hash || "#prestations"}`);
  }, []);
  return <section className="page-hero"><h1>Nos prestations</h1><p className="page-intro">Retrouvez nos prestations et notre approche sur la page de l’atelier.</p><Link className="button" href="/atelier#prestations">Découvrir nos prestations</Link></section>;
}
