export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  type: string;
  year: string;
  location: string;
  surface: string;
  images: string[];
  description: string[];
};

export const projects: Project[] = [
  { slug: "carpentras", title: "Carpentras — Rénovation", shortTitle: "Carpentras", type: "Rénovation", year: "2024", location: "Carpentras, Vaucluse", surface: "185 m²", images: ["1.jpg", "2.png", "3.png"], description: ["La rénovation révèle les qualités d'une maison existante et l'adapte aux usages contemporains.", "Les ouvertures, la lumière et les matières naturelles recomposent un lieu de vie généreux, en dialogue avec le paysage provençal."] },
  { slug: "cereste", title: "Céreste — Réhabilitation", shortTitle: "Céreste", type: "Réhabilitation", year: "2023", location: "Céreste, Alpes-de-Haute-Provence", surface: "210 m²", images: ["1.png"], description: ["Une réhabilitation attentive au bâti ancien, à ses proportions et à sa matérialité.", "L'intervention améliore le confort et les usages sans effacer la mémoire du lieu."] },
  { slug: "coustellet", title: "Coustellet — Extension", shortTitle: "Coustellet", type: "Extension", year: "2023", location: "Coustellet, Vaucluse", surface: "65 m²", images: ["1.png", "2.png", "3.png", "4.png"], description: ["Cette extension offre à une famille un espace de vie agrandi, ouvert sur le jardin et traversant.", "Un volume sobre prolonge la maison existante. Une grande baie au sud crée une relation directe entre intérieur, terrasse et paysage."] },
  { slug: "lagnes", title: "Lagnes — Rénovation énergétique", shortTitle: "Lagnes", type: "Rénovation énergétique", year: "2022", location: "Lagnes, Vaucluse", surface: "230 m²", images: ["1.png", "2.png"], description: ["La rénovation énergétique associe performance, confort d'été et respect de l'écriture architecturale existante.", "Chaque intervention est pensée à l'échelle du bâtiment et de son climat."] },
  { slug: "lagnes2", title: "Lagnes — Surélévation", shortTitle: "Lagnes II", type: "Surélévation", year: "2024", location: "Lagnes, Vaucluse", surface: "48 m²", images: ["1.png", "2.png", "3.png", "4.png", "5.JPEG"], description: ["Une surélévation légère augmente la surface habitable tout en préservant l'emprise au sol.", "Le projet compose une silhouette nouvelle, cohérente avec son environnement et la maison d'origine."] },
  { slug: "lisle", title: "L'Isle-sur-la-Sorgue — Aménagement", shortTitle: "L'Isle-sur-la-Sorgue", type: "Aménagement intérieur", year: "2024", location: "L'Isle-sur-la-Sorgue, Vaucluse", surface: "120 m²", images: ["1.png", "2.png", "3.png"], description: ["Un aménagement intérieur conçu comme une architecture complète, où circulation, lumière et mobilier forment un ensemble.", "Les matières sobres donnent au projet une présence durable et chaleureuse."] },
  { slug: "pernes", title: "Pernes-les-Fontaines — Réhabilitation", shortTitle: "Pernes-les-Fontaines", type: "Réhabilitation", year: "2023", location: "Pernes-les-Fontaines, Vaucluse", surface: "175 m²", images: ["1.png", "2.png"], description: ["Le projet restaure les qualités d'une construction locale et lui apporte de nouveaux usages.", "Une attention particulière est portée aux détails, aux matières et à la lumière naturelle."] },
  { slug: "stcyr", title: "Saint-Cyr — ERP", shortTitle: "Saint-Cyr-sur-Mer", type: "ERP · Espaces tertiaires", year: "2023", location: "Saint-Cyr-sur-Mer, Var", surface: "340 m²", images: ["1.png", "2.png"], description: ["Des espaces professionnels lisibles, accueillants et adaptés à leurs usages quotidiens.", "Le projet articule identité, confort et exigences réglementaires propres aux établissements recevant du public."] },
  { slug: "straphael", title: "Saint-Raphaël — Reconversion industrielle", shortTitle: "Saint-Raphaël", type: "Reconversion industrielle", year: "2024", location: "Saint-Raphaël, Var", surface: "620 m²", images: ["1.png", "2.png", "3.png", "4.png"], description: ["La reconversion transforme une structure industrielle existante en un lieu contemporain et polyvalent.", "L'architecture conserve la force du volume initial tout en introduisant lumière, confort et nouveaux parcours."] },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
