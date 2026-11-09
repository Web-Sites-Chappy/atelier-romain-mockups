import type { Metadata } from "next";
import { RichText } from "@/components/RichText";
import { getContact } from "@/lib/content";

export function generateMetadata(): Metadata {
  const content = getContact();
  return { title: content.metaTitle, description: content.metaDescription };
}

export default function ContactPage() {
  const content = getContact();
  return <>
    <header className="page-hero contact-hero"><p className="eyebrow">{content.eyebrow}</p><h1><RichText>{content.title}</RichText></h1><p className="page-intro">{content.intro}</p></header>
    <section className="contact-layout section-pad">
      <div>
        <p className="eyebrow">{content.formEyebrow}</p>
        <a className="contact-email" href={`mailto:${content.email}`}>{content.email}</a>
        <p>
          {content.addressLines.map((line) => <span key={line}>{line}<br /></span>)}
          <a href={`tel:${content.phoneHref}`}>{content.phone}</a>
        </p>
      </div>
      <form>
        <label>Nom<input name="name" autoComplete="name" /></label>
        <label>Email<input type="email" name="email" autoComplete="email" /></label>
        <label>Téléphone<input type="tel" name="phone" autoComplete="tel" /></label>
        <label>Votre projet<select name="project">{content.projectOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label>Quelques mots sur votre projet<textarea name="message" rows={5} /></label>
        <button type="submit" className="button">{content.submitLabel} <Arrow /></button>
      </form>
    </section>
  </>;
}

function Arrow() { return <span aria-hidden="true">→</span>; }
