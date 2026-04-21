import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { medicalProcedureLd, faqPageLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { therapists } from "@/lib/therapists";
import { TherapistCard } from "@/components/ui/TherapistCard";

const SLUG = "psykolog";

export const metadata: Metadata = (() => {
  const s = getService(SLUG);
  if (!s) return {};
  return buildMetadata({ title: `${s.title} | Hole Fysioterapi`, description: s.metaDescription, path: `/tjenester/${SLUG}` });
})();

export default function PsykologPage() {
  const service = getService(SLUG);
  if (!service) notFound();
  const relatedTherapists = therapists.filter((t) => service.therapistSlugs.includes(t.slug));

  return (
    <>
      <JsonLd json={medicalProcedureLd(service)} />
      <JsonLd json={faqPageLd(service.faq)} />
      <section className="bg-paper py-20 md:py-28">
        <Container>
          <Breadcrumbs crumbs={[{ name: "Hjem", path: "/" }, { name: "Tjenester", path: "/tjenester" }, { name: service.title, path: `/tjenester/${SLUG}` }]} />
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-moss-600">{service.title}</p>
              <h1 className="font-serif text-[clamp(2rem,3vw+1rem,3rem)] font-semibold text-ink leading-tight mb-4">{service.h1}</h1>
              <p className="speakable-answer text-lg text-ink-muted leading-relaxed mb-8">{service.leadAnswer}</p>
              <div className="mb-8 flex flex-wrap gap-2">
                {service.audiences.map((a) => <span key={a} className="rounded-full bg-moss-50 px-3 py-1 text-xs font-medium text-moss-700">{a}</span>)}
              </div>
              <div className="prose text-ink-muted mb-8"><p>{service.intro}</p></div>
              <div className="rounded-2xl bg-bone p-6 mb-8">
                <h2 className="font-serif text-xl font-semibold text-ink mb-4">Dette tilbyr vi</h2>
                <ul className="flex flex-col gap-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-ink-muted">
                      <svg className="h-5 w-5 shrink-0 text-moss-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl bg-bone p-6 shadow-soft">
                <h2 className="font-serif text-lg font-semibold text-ink mb-4">Bestill time</h2>
                {relatedTherapists.map((t) => (
                  <div key={t.slug} className="mb-4 last:mb-0">
                    <p className="text-sm font-medium text-ink">{t.name}</p>
                    <p className="text-xs text-ink-muted mb-2">{t.role}</p>
                    <a href={`tel:${t.phone.tel}`} className="inline-flex items-center gap-2 text-sm font-medium text-terra-500 link-underline">Ring {t.phone.display}</a>
                  </div>
                ))}
                <div className="mt-6 border-t border-line pt-5">
                  <a href="/kontakt" className="flex h-11 w-full items-center justify-center rounded-full bg-moss-600 text-sm font-medium text-paper hover:bg-moss-700 transition-colors">Kontaktskjema</a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {relatedTherapists.length > 0 && (
        <section className="bg-bone py-16 md:py-20">
          <Container>
            <h2 className="font-serif text-2xl font-semibold text-ink mb-8">Møt din terapeut</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedTherapists.map((t) => <AnimatedSection key={t.slug}><TherapistCard therapist={t} /></AnimatedSection>)}
            </div>
          </Container>
        </section>
      )}
      <FaqSection items={service.faq} heading="Vanlige spørsmål om psykolog" />
      <CtaBanner heading="Ta det første steget — du trenger ikke å stå i det alene" body="Ring oss eller bruk kontaktskjemaet. Vi svarer raskt." />
    </>
  );
}
