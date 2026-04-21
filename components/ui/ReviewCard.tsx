import { Rating } from "./Rating";
import type { Review } from "@/lib/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex flex-col gap-4 rounded-2xl bg-paper p-6 shadow-soft">
      <Rating value={review.rating} />
      <blockquote className="text-ink-muted leading-relaxed flex-1">
        <p>"{review.text}"</p>
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-moss-100 flex items-center justify-center text-moss-700 font-semibold text-sm">
          {review.author[0]}
        </div>
        <div>
          <p className="text-sm font-medium text-ink">{review.author}</p>
          <p className="text-xs text-ink-muted">
            {review.source} ·{" "}
            {new Date(review.date).toLocaleDateString("nb-NO", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
