import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Takk for din henvendelse — Hole Fysioterapi",
  robots: { index: false, follow: false },
};

export default function TakkPage() {
  return (
    <section className="bg-paper py-32 md:py-40">
      <Container>
        <div className="max-w-lg mx-auto text-center">
          <div className="h-16 w-16 rounded-full bg-moss-100 flex items-center justify-center mx-auto mb-6">
            <svg className="h-8 w-8 text-moss-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-serif text-3xl font-semibold text-ink mb-4">Takk for din henvendelse!</h1>
          <p className="text-lg text-ink-muted leading-relaxed mb-8">
            Vi har mottatt meldingen din og tar kontakt snarest mulig. Har du
            det travelt, ring oss direkte på{" "}
            <a href="tel:+4732159820" className="text-terra-500 font-medium link-underline">
              32 15 98 20
            </a>
            .
          </p>
          <Link
            href="/"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-moss-600 px-7 font-medium text-paper hover:bg-moss-700 transition-colors text-sm"
          >
            Tilbake til forsiden
          </Link>
        </div>
      </Container>
    </section>
  );
}
