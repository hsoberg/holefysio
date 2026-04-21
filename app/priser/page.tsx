import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = buildMetadata({
  title: "Priser og frikort — Hole Fysioterapi",
  description:
    "Les om priser, frikortordningen og egenandel ved Hole Fysioterapi på Røyse. Frikort godtas hos fysioterapeut, manuellterapeut og psykomotorisk fysioterapeut.",
  path: "/priser",
});

const priceFaq = [
  {
    q: "Hva koster en time hos fysioterapeut?",
    a: "Prisene følger Norsk Fysioterapeutforbunds takster. Kontakt oss på 32 15 98 20 for gjeldende priser. Har du frikort betaler du ingenting.",
  },
  {
    q: "Hva er frikortordningen?",
    a: "Frikortordningen er en HELFO-ordning som fritar deg for egenandeler etter at du har betalt et visst beløp i løpet av et kalenderår. I 2024 er frikortgrensen 3.165 kroner (frikort 1).",
  },
  {
    q: "Kan jeg bruke frikort hos alle terapeutene?",
    a: "Frikortordningen kan benyttes hos fysioterapeut, manuellterapeut og psykomotorisk fysioterapeut. Psykologtjenesten har egne refusjonsregler.",
  },
  {
    q: "Trenger jeg henvisning for å få refusjon?",
    a: "For fysioterapi trenger du normalt ikke henvisning. For manuellterapi kan du gå direkte uten henvisning og likevel få refusjon. Ta kontakt for mer informasjon om din situasjon.",
  },
  {
    q: "Hva er avbestillingsreglene?",
    a: "Timer må avbestilles senest kl 15 dagen før for å unngå faktura. Dette gjelder alle tjenester.",
  },
  {
    q: "Hva dekker HELFO-refusjon?",
    a: "HELFO-refusjon dekker deler av kostnaden for fysioterapi, manuellterapi og psykomotorisk fysioterapi. Størrelsen på refusjonen avhenger av type behandling og om du har frikort.",
  },
];

export default function PriserPage() {
  return (
    <>
      <section className="bg-paper py-20 md:py-28">
        <Container>
          <Breadcrumbs crumbs={[{ name: "Hjem", path: "/" }, { name: "Priser", path: "/priser" }]} />
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-moss-600">Priser og refusjon</p>
            <h1 className="font-serif text-[clamp(2rem,3vw+1rem,3rem)] font-semibold text-ink leading-tight mb-4">
              Priser, frikort og HELFO-refusjon
            </h1>
            <p className="speakable-answer text-lg text-ink-muted leading-relaxed mb-10">
              Vi tilpasser prisene til gjeldende HELFO-takster. Frikortordningen
              kan benyttes hos fysioterapeut, manuellterapeut og psykomotorisk
              fysioterapeut — slik at helsehjelp er tilgjengelig for alle.
            </p>

            {/* Price cards */}
            <div className="grid gap-4 sm:grid-cols-2 mb-12">
              {[
                { service: "Fysioterapi", frikort: true, ref: true, note: "Frikort godtas" },
                { service: "Manuellterapi", frikort: true, ref: true, note: "Frikort godtas" },
                { service: "Ultralyddiagnostikk", frikort: false, ref: true, note: "HELFO-refusjon" },
                { service: "Psykomotorisk fysioterapi", frikort: true, ref: true, note: "Frikort godtas" },
                { service: "Psykolog", frikort: false, ref: false, note: "Egne refusjonsregler" },
              ].map((p) => (
                <div key={p.service} className="rounded-2xl bg-bone p-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-ink text-sm">{p.service}</p>
                    <p className="text-xs text-ink-muted mt-1">{p.note}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    {p.frikort && (
                      <span className="rounded-full bg-moss-100 px-2.5 py-0.5 text-xs font-medium text-moss-700">Frikort</span>
                    )}
                    {p.ref && (
                      <span className="rounded-full bg-terra-100 px-2.5 py-0.5 text-xs font-medium text-terra-700">HELFO</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Important info */}
            <div className="rounded-2xl bg-moss-50 border border-moss-100 p-6">
              <h2 className="font-serif text-lg font-semibold text-ink mb-3">Viktig å vite</h2>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Frikortgrensen for 2024 er kr 3.165 (frikort 1).",
                  "Timer avbestilles senest kl 15 dagen før for å unngå faktura.",
                  "Vi samarbeider med kommunehelsetjenesten og kan koordinere behandling med fastlege.",
                  "Ring oss for å avklare priser og refusjon for din spesifikke situasjon.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
                    <svg className="h-4 w-4 shrink-0 text-moss-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <FaqSection items={priceFaq} heading="Spørsmål om priser og refusjon" />
      <CtaBanner heading="Usikker på hva du betaler? Ring oss." body="Vi hjelper deg å forstå hva som gjelder for deg — gratis og uforpliktende." />
    </>
  );
}
