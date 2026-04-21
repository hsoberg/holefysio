import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

export const metadata: Metadata = buildMetadata({
  title: "Tjenester — Hole Fysioterapi og Helseklinikk",
  description:
    "Oversikt over alle tjenester ved Hole Fysioterapi: fysioterapi, manuellterapi, ultralyddiagnostikk, psykomotorisk fysioterapi og psykolog på Røyse.",
  path: "/tjenester",
});

export default function TjenesterPage() {
  return (
    <>
      <section className="bg-paper py-20 md:py-28">
        <Container>
          <Breadcrumbs
            crumbs={[
              { name: "Hjem", path: "/" },
              { name: "Tjenester", path: "/tjenester" },
            ]}
          />
          <div className="mb-14 max-w-xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-moss-600">
              Tjenestene våre
            </p>
            <h1 className="font-serif text-[clamp(2rem,3vw+1rem,3rem)] font-semibold text-ink leading-tight mb-4">
              Alt under ett tak — på Vik Torg, Røyse
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed">
              Som tverrfaglig klinikk kan vi se hele deg. Terapeutene
              samarbeider tett, slik at du alltid får riktig hjelp fra første
              time.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={(i % 3) * 100 as 100 | 200 | 300 | 400 | 0}>
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
