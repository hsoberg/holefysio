import { reviews, aggregateRating } from "@/lib/reviews";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { Rating } from "@/components/ui/Rating";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

export function ReviewsSection() {
  return (
    <section aria-labelledby="reviews-heading" className="py-20 md:py-28 lg:py-36 bg-bone">
      <Container>
        <AnimatedSection className="mb-14 text-center max-w-lg mx-auto">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-moss-600">
            Hva pasientene sier
          </p>
          <h2
            id="reviews-heading"
            className="font-serif text-[clamp(1.75rem,2.4vw+0.6rem,2.5rem)] font-semibold text-ink leading-tight mb-4"
          >
            Stolt av tilbakemeldingene vi får
          </h2>
          <div className="flex items-center justify-center gap-3">
            <Rating value={aggregateRating.ratingValue} />
            <span className="text-sm font-semibold text-ink">
              {aggregateRating.ratingValue.toFixed(1)}
            </span>
            <span className="text-sm text-ink-muted">
              ({aggregateRating.reviewCount} anmeldelser på Google)
            </span>
          </div>
        </AnimatedSection>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 3).map((review, i) => (
            <AnimatedSection key={review.id} delay={(i % 3) * 100 as 100 | 200 | 300 | 400 | 0}>
              <ReviewCard review={review} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
