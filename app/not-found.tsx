import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-paper py-32 md:py-40">
      <Container>
        <div className="max-w-lg mx-auto text-center">
          <p className="font-serif text-7xl font-semibold text-moss-100 mb-6" aria-hidden="true">404</p>
          <h1 className="font-serif text-3xl font-semibold text-ink mb-4">Siden finnes ikke</h1>
          <p className="text-lg text-ink-muted leading-relaxed mb-8">
            Vi fant ikke siden du leter etter. Den kan ha blitt flyttet eller
            slettet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex h-12 items-center rounded-full bg-moss-600 px-7 font-medium text-paper hover:bg-moss-700 transition-colors text-sm"
            >
              Tilbake til forsiden
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex h-12 items-center rounded-full border border-moss-600 px-7 font-medium text-moss-700 hover:bg-moss-50 transition-colors text-sm"
            >
              Kontakt oss
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
