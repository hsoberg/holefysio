import Image from "next/image";
import Link from "next/link";
import type { Therapist } from "@/lib/therapists";

export function TherapistCard({ therapist }: { therapist: Therapist }) {
  return (
    <div className="flex flex-col rounded-2xl bg-paper shadow-soft overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-pop">
      <div className="relative h-64 bg-moss-100">
        <Image
          src={therapist.photo}
          alt={`${therapist.name}, ${therapist.role}`}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-moss-600 mb-1">
            {therapist.role}
          </p>
          <h3 className="font-serif text-xl font-semibold text-ink leading-tight">
            {therapist.name}
          </h3>
        </div>
        <p className="text-sm text-ink-muted leading-relaxed line-clamp-3">
          {therapist.bio}
        </p>
        <div className="flex gap-3 mt-auto pt-2">
          <Link
            href={`/terapeuter/${therapist.slug}`}
            className="text-sm font-medium text-moss-600 link-underline"
          >
            Les mer
          </Link>
          <span className="text-line">·</span>
          <a
            href={`tel:${therapist.phone.tel}`}
            className="text-sm font-medium text-terra-500 link-underline"
          >
            Ring direkte
          </a>
        </div>
      </div>
    </div>
  );
}
