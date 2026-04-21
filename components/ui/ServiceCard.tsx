import Link from "next/link";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/tjenester/${service.slug}`}
      className="group relative flex flex-col gap-4 rounded-2xl bg-paper p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-pop"
    >
      <span className="text-3xl" role="img" aria-hidden="true">
        {service.icon}
      </span>
      <div>
        <p className="mb-1 text-xs font-medium uppercase tracking-widest text-moss-600">
          Tjeneste
        </p>
        <h3 className="font-serif text-xl font-semibold text-ink leading-tight mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-ink-muted leading-relaxed line-clamp-3">
          {service.intro}
        </p>
      </div>
      <span className="mt-auto flex items-center gap-1 text-sm font-medium text-moss-600 group-hover:gap-2 transition-all duration-200">
        Les mer
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
