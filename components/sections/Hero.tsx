import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-paper"
      aria-label="Velkomstbanner"
    >
      {/* Background tonal shape */}
      <div
        className="absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, #D7E0CF 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div className="max-w-xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.14em] text-moss-600">
              Lokal helseklinikk — Vik Torg, Røyse
            </p>
            <h1 className="font-serif text-[clamp(2.25rem,4vw+1rem,3.75rem)] font-semibold leading-[1.05] tracking-tight text-ink mb-6">
              Tverrfaglig fysioterapi og helsehjelp på Røyse{" "}
              <span className="text-moss-600">— med tid til å se hele deg.</span>
            </h1>
            <p className="text-lg leading-relaxed text-ink-muted mb-8 max-w-lg speakable-answer">
              Hole Fysioterapi og Helseklinikk samler fysioterapi,
              manuellterapi, ultralyddiagnostikk, psykomotorisk fysioterapi og
              psykolog under ett tak. Vi kjenner kroppen, kommunen og hverdagen
              din — slik at du kommer raskere tilbake til det du er glad i.
            </p>

            {/* Trust row */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mb-10 text-sm text-ink-muted">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-moss-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Frikortordning
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-moss-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Ingen venteliste
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-moss-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                4 spesialister under ett tak
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/bestill-time"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-moss-600 px-8 py-0 font-medium text-paper shadow-soft hover:bg-moss-700 transition-colors text-base"
              >
                Bestill time
              </Link>
              <a
                href={`tel:${site.phone.tel}`}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-terra-500 px-8 py-0 font-medium text-white shadow-soft hover:bg-terra-700 transition-colors text-base"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                </svg>
                Ring {site.phone.display}
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-pop">
              <Image
                src="/hole fysioterapi.png"
                alt="Hole Fysioterapi og Helseklinikk — Vik Torg, Røyse"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-paper shadow-pop px-6 py-4 flex items-center gap-4">
              <div className="flex">
                {["★", "★", "★", "★", "★"].map((s, i) => (
                  <span key={i} className="text-terra-500 text-sm" aria-hidden="true">{s}</span>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">5.0 på Google</p>
                <p className="text-xs text-ink-muted">Fra pasienter i Hole</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
