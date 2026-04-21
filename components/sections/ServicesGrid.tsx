import { services } from "@/lib/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

export function ServicesGrid() {
  return (
    <section aria-labelledby="services-heading" className="py-20 md:py-28 lg:py-36 bg-bone">
      <Container>
        <AnimatedSection className="mb-14 max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-moss-600">
            Våre tjenester
          </p>
          <h2
            id="services-heading"
            className="font-serif text-[clamp(1.75rem,2.4vw+0.6rem,2.5rem)] font-semibold text-ink leading-tight mb-4"
          >
            Alt du trenger — under ett tak på Røyse
          </h2>
          <p className="text-ink-muted leading-relaxed">
            Som tverrfaglig klinikk kan vi se hele deg. Terapeutene samarbeider
            tett, slik at du alltid får riktig hjelp fra første time.
          </p>
        </AnimatedSection>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedSection key={service.slug} delay={(i % 3) * 100 as 100 | 200 | 300 | 400 | 0}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
