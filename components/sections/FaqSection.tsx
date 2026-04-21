import { FaqItem } from "@/components/ui/FaqItem";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageLd } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";

interface FaqSectionProps {
  items: { q: string; a: string }[];
  heading?: string;
  className?: string;
}

export function FaqSection({
  items,
  heading = "Ofte stilte spørsmål",
  className = "",
}: FaqSectionProps) {
  return (
    <section
      aria-labelledby="faq-heading"
      className={`py-20 md:py-28 bg-paper ${className}`}
    >
      <JsonLd json={faqPageLd(items)} />
      <Container>
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-moss-600">
              Spørsmål og svar
            </p>
            <h2
              id="faq-heading"
              className="font-serif text-[clamp(1.75rem,2.4vw+0.6rem,2.5rem)] font-semibold text-ink leading-tight"
            >
              {heading}
            </h2>
          </div>
          <div className="lg:col-span-2">
            {items.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
