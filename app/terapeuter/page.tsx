import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { therapists } from "@/lib/therapists";
import { TherapistCard } from "@/components/ui/TherapistCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

export const metadata: Metadata = buildMetadata({
  title: "Terapeutene våre — Hole Fysioterapi",
  description:
    "Møt terapeutene ved Hole Fysioterapi: fysioterapeut, manuellterapeut, psykomotorisk fysioterapeut og psykolog på Vik Torg, Røyse.",
  path: "/terapeuter",
});

export default function TerapeuterPage() {
  return (
    <>
      <section className="bg-paper py-20 md:py-28">
        <Container>
          <Breadcrumbs
            crumbs={[
              { name: "Hjem", path: "/" },
              { name: "Terapeuter", path: "/terapeuter" },
            ]}
          />
          <div className="mb-14 max-w-xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-moss-600">
              Terapeutene våre
            </p>
            <h1 className="font-serif text-[clamp(2rem,3vw+1rem,3rem)] font-semibold text-ink leading-tight mb-4">
              Menneskene bak Hole Fysioterapi
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed">
              Fire dedikerte fagpersoner med spesialkompetanse — og en felles
              interesse for at du skal ha det bra.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {therapists.map((t, i) => (
              <AnimatedSection key={t.slug} delay={(i % 4) * 100 as 100 | 200 | 300 | 400 | 0}>
                <TherapistCard therapist={t} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
