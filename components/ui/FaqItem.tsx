"use client";

interface FaqItemProps {
  q: string;
  a: string;
}

export function FaqItem({ q, a }: FaqItemProps) {
  return (
    <details className="group border-b border-line py-1">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 font-medium text-ink hover:text-moss-700 transition-colors duration-200">
        <span className="speakable-answer font-serif text-lg">{q}</span>
        <svg
          className="h-5 w-5 shrink-0 text-moss-600 transition-transform duration-300 group-open:rotate-45"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </summary>
      <div className="pb-5 pr-8 text-ink-muted leading-relaxed">{a}</div>
    </details>
  );
}
