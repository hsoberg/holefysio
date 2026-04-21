import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt oss — Hole Fysioterapi",
  description:
    "Ta kontakt med Hole Fysioterapi og Helseklinikk på Vik Torg, Røyse. Ring 32 15 98 20 eller bruk kontaktskjemaet.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <Breadcrumbs crumbs={[{ name: "Hjem", path: "/" }, { name: "Kontakt", path: "/kontakt" }]} />

        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Info */}
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-moss-600">Ta kontakt</p>
            <h1 className="font-serif text-[clamp(2rem,3vw+1rem,3rem)] font-semibold text-ink leading-tight mb-4">
              Vi er her for deg
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed mb-10">
              Ring oss, send en e-post eller bruk skjemaet — vi svarer raskt og
              finner en time som passer deg.
            </p>

            <address className="not-italic flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-moss-100 flex items-center justify-center text-moss-700">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-ink-muted mb-1">Telefon</p>
                  <a href={`tel:${site.phone.tel}`} className="text-lg font-semibold text-terra-500 link-underline">
                    {site.phone.display}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-moss-100 flex items-center justify-center text-moss-700">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-ink-muted mb-1">E-post</p>
                  <a href={`mailto:${site.email}`} className="text-base font-medium text-moss-700 link-underline">
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-moss-100 flex items-center justify-center text-moss-700">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-ink-muted mb-1">Adresse</p>
                  <p className="text-base font-medium text-ink">
                    {site.address.street}, {site.address.zip} {site.address.city}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-moss-100 flex items-center justify-center text-moss-700">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-ink-muted mb-1">Åpningstider</p>
                  <p className="text-base font-medium text-ink">{site.hoursDisplay}</p>
                </div>
              </div>
            </address>

            <p className="mt-8 text-xs text-ink-muted bg-bone rounded-xl px-4 py-3 border border-line">
              <strong>Avbestilling:</strong> Timer avbestilles senest kl 15 dagen før for å unngå faktura.
            </p>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-bone p-8 shadow-soft">
            <h2 className="font-serif text-xl font-semibold text-ink mb-6">Send oss en melding</h2>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
