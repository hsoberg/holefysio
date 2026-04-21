import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

interface CtaBannerProps {
  heading?: string;
  body?: string;
  variant?: "moss" | "terra";
}

export function CtaBanner({
  heading = "Klar for å ta det første steget?",
  body = "Ring oss, send en melding eller bruk kontaktskjemaet. Vi svarer raskt og finner en tid som passer deg.",
  variant = "moss",
}: CtaBannerProps) {
  const isMoss = variant === "moss";
  return (
    <div
      className={`py-16 md:py-20 ${isMoss ? "bg-moss-600" : "bg-terra-500"}`}
    >
      <Container>
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <h2 className="font-serif text-[clamp(1.5rem,2vw+0.75rem,2.25rem)] font-semibold text-white leading-tight">
            {heading}
          </h2>
          <p className="text-white/80 text-base leading-relaxed">{body}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${site.phone.tel}`}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 font-medium text-moss-700 hover:bg-bone transition-colors shadow-soft text-sm"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              Ring {site.phone.display}
            </a>
            <Link
              href="/kontakt"
              className="inline-flex h-12 items-center rounded-full border-2 border-white/60 px-7 font-medium text-white hover:bg-white/10 transition-colors text-sm"
            >
              Send melding
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
