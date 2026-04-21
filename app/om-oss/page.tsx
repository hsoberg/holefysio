import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

export const metadata: Metadata = buildMetadata({
  title: "Om oss — Hole Fysioterapi og Helseklinikk",
  description:
    "Les om Hole Fysioterapi og Helseklinikk — lokal, tverrfaglig helseklinikk på Vik Torg, Røyse. HELFO-godkjent, NFF-membre, tett samarbeid med fastleger.",
  path: "/om-oss",
});

export default function OmOssPage() {
  return (
    <>
      <section className="bg-paper py-20 md:py-28">
        <Container>
          <Breadcrumbs
            crumbs={[
              { name: "Hjem", path: "/" },
              { name: "Om oss", path: "/om-oss" },
            ]}
          />
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-moss-600">
                Hvem er vi?
              </p>
              <h1 className="font-serif text-[clamp(2rem,3vw+1rem,3rem)] font-semibold text-ink leading-tight mb-6">
                En lokal klinikk — med hjertet i Hole
              </h1>
              <div className="prose text-ink-muted">
                <p>
                  Hole Fysioterapi og Helseklinikk er en lokal, tverrfaglig
                  klinikk på Vik Torg, midt i Hole kommune. Vi har tett kontakt
                  med kommunehelsetjenesten og de interkommunale
                  fastlegekontorene, slik at du får trygg og sammenhengende
                  behandling — fra første vurdering til du er tilbake i full
                  aktivitet.
                </p>
                <p>
                  Vi samler fysioterapi, manuellterapi, ultralyddiagnostikk,
                  psykomotorisk fysioterapi og psykolog under ett tak. Denne
                  tverrfaglige tilnærmingen betyr at terapeutene kan samarbeide
                  direkte, dele kunnskap og gi deg en helhetlig behandlingsplan
                  — ikke bare behandle symptomet.
                </p>
                <p>
                  Vi er stolt av å være en lokal ressurs for innbyggerne i Hole,
                  Røyse, Vik og det øvrige Ringerike-området.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-[450px] w-full overflow-hidden rounded-3xl shadow-pop">
              <Image
                src="/hole fysioterapi.png"
                alt="Hole Fysioterapi og Helseklinikk — Vik Torg, Røyse"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-bone py-20 md:py-28" aria-labelledby="values-heading">
        <Container>
          <AnimatedSection className="mb-14 max-w-xl">
            <h2 id="values-heading" className="font-serif text-[clamp(1.75rem,2.4vw+0.6rem,2.5rem)] font-semibold text-ink leading-tight mb-4">
              Hva vi tror på
            </h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🤝",
                title: "Tett samarbeid",
                body: "Vi samarbeider tett med fastleger og kommunehelsetjenesten. Pasienten er alltid i sentrum av all kommunikasjon.",
              },
              {
                icon: "🔍",
                title: "Hele mennesket",
                body: "Plager i kroppen henger ofte sammen med livet ellers. Vi ser deg som en helhet — ikke bare symptomet du kom inn med.",
              },
              {
                icon: "🏘️",
                title: "Lokal tilstedeværelse",
                body: "Vi er her i Hole — kjenner kommunen, kjenner folk, og er stolt av å gi et godt helsetilbud nær der du bor.",
              },
              {
                icon: "📚",
                title: "Faglig spesialkompetanse",
                body: "Alle terapeutene holder seg oppdatert og har spesialkompetanse innen sine felt. Du får hjelp av fagfolk som vet hva de holder på med.",
              },
              {
                icon: "⏱️",
                title: "Rask tilgjengelighet",
                body: "Vi prøver alltid å finne tid til deg uten lang ventetid. Ring eller skriv — vi hjelper deg.",
              },
              {
                icon: "💳",
                title: "Frikortordningen",
                body: "Vi godtar frikort hos fysioterapeut, manuellterapeut og psykomotorisk fysioterapeut. Helsehjelp skal være tilgjengelig for alle.",
              },
            ].map((v, i) => (
              <AnimatedSection key={v.title} delay={(i % 3) * 100 as 100 | 200 | 300 | 400 | 0} className="rounded-2xl bg-paper p-7 shadow-soft">
                <span className="text-3xl mb-4 block" aria-hidden="true">{v.icon}</span>
                <h3 className="font-serif text-lg font-semibold text-ink mb-2">{v.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{v.body}</p>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
