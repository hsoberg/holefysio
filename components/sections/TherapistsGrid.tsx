import { therapists } from "@/lib/therapists";
import { TherapistCard } from "@/components/ui/TherapistCard";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import Link from "next/link";

export function TherapistsGrid() {
  return (
    <section aria-labelledby="therapists-heading" className="py-20 md:py-28 lg:py-36 bg-paper">
      <Container>
        <AnimatedSection className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-moss-600">
              Terapeutene våre
            </p>
            <h2
              id="therapists-heading"
              className="font-serif text-[clamp(1.75rem,2.4vw+0.6rem,2.5rem)] font-semibold text-ink leading-tight mb-4"
            >
              Møt menneskene bak klinikken
            </h2>
            <p className="text-ink-muted leading-relaxed">
              Fire dedikerte fagpersoner med spesialkompetanse — og en felles
              interesse for at du skal ha det bra.
            </p>
          </div>
          <Link
            href="/terapeuter"
            className="shrink-0 text-sm font-medium text-moss-600 link-underline"
          >
            Se alle profiler →
          </Link>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {therapists.map((therapist, i) => (
            <AnimatedSection key={therapist.slug} delay={(i % 4) * 100 as 100 | 200 | 300 | 400 | 0}>
              <TherapistCard therapist={therapist} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
