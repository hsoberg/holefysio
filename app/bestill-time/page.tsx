import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { therapists } from "@/lib/therapists";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Bestill time — Hole Fysioterapi",
  description:
    "Bestill time hos Hole Fysioterapi på Vik Torg, Røyse. Ring 32 15 98 20 eller bruk kontaktskjemaet. Ingen venteliste.",
  path: "/bestill-time",
});

export default function BestillTimePage() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <Breadcrumbs crumbs={[{ name: "Hjem", path: "/" }, { name: "Bestill time", path: "/bestill-time" }]} />

        <div className="mb-14 max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-moss-600">Bestill time</p>
          <h1 className="font-serif text-[clamp(2rem,3vw+1rem,3rem)] font-semibold text-ink leading-tight mb-4">
            Vi finner en tid som passer deg
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed">
            Ring oss direkte eller bruk kontaktskjemaet nedenfor. Vi har som
            regel ledig tid raskt — ring for å sjekke.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3 mb-16">
          {therapists.map((t) => (
            <div key={t.slug} className="rounded-2xl bg-bone p-6 shadow-soft flex flex-col gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-moss-600 mb-1">{t.role}</p>
                <p className="font-serif text-xl font-semibold text-ink">{t.name}</p>
              </div>
              <a
                href={`tel:${t.phone.tel}`}
                className="inline-flex items-center gap-2 h-12 rounded-full bg-terra-500 px-6 text-sm font-medium text-white hover:bg-terra-700 transition-colors shadow-soft self-start"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                </svg>
                Ring {t.phone.display}
              </a>
            </div>
          ))}

          {/* General clinic number */}
          <div className="rounded-2xl bg-moss-600 p-6 shadow-soft flex flex-col gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-paper/70 mb-1">Klinikk</p>
              <p className="font-serif text-xl font-semibold text-paper">Hole Fysioterapi</p>
            </div>
            <a
              href={`tel:${site.phone.tel}`}
              className="inline-flex items-center gap-2 h-12 rounded-full bg-white px-6 text-sm font-medium text-moss-700 hover:bg-bone transition-colors shadow-soft self-start"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              Ring {site.phone.display}
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl rounded-3xl bg-bone p-8 shadow-soft">
          <h2 className="font-serif text-2xl font-semibold text-ink mb-6">Eller send oss en melding</h2>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
