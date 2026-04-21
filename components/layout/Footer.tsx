import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-moss-900 text-paper/80 mt-auto">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="font-serif text-xl font-semibold text-paper leading-tight block">
                Hole Fysioterapi
              </span>
              <span className="text-sm text-paper/60">og Helseklinikk</span>
            </Link>
            <p className="text-sm leading-relaxed text-paper/70 mb-6">
              Lokal, tverrfaglig helseklinikk på Vik Torg, Røyse — for deg i
              Hole og Ringerike.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-paper/10 px-3 py-1 text-xs text-paper/80">HELFO</span>
              <span className="rounded-full bg-paper/10 px-3 py-1 text-xs text-paper/80">Frikort</span>
              <span className="rounded-full bg-paper/10 px-3 py-1 text-xs text-paper/80">NFF</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-paper/50">
              Tjenester
            </h3>
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/tjenester/${s.slug}`}
                    className="text-sm text-paper/70 link-underline hover:text-paper transition-colors"
                  >
                    {s.nav}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-paper/50">
              Nettsted
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/om-oss", label: "Om oss" },
                { href: "/terapeuter", label: "Terapeuter" },
                { href: "/priser", label: "Priser og frikort" },
                { href: "/artikler", label: "Artikler" },
                { href: "/kontakt", label: "Kontakt" },
                { href: "/bestill-time", label: "Bestill time" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-paper/70 link-underline hover:text-paper transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-paper/50">
              Kontakt
            </h3>
            <address className="not-italic flex flex-col gap-3">
              <div>
                <p className="text-xs text-paper/50 mb-1">Adresse</p>
                <p className="text-sm text-paper/80">
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}
                  <br />
                  {site.address.country}
                </p>
              </div>
              <div>
                <p className="text-xs text-paper/50 mb-1">Telefon</p>
                <a
                  href={`tel:${site.phone.tel}`}
                  className="text-sm text-paper/80 link-underline hover:text-paper"
                >
                  {site.phone.display}
                </a>
              </div>
              <div>
                <p className="text-xs text-paper/50 mb-1">E-post</p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-paper/80 link-underline hover:text-paper"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-xs text-paper/50 mb-1">Åpningstider</p>
                <p className="text-sm text-paper/80">{site.hoursDisplay}</p>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-paper/10 pt-8 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs text-paper/40">
            © {year} {site.name}. Alle rettigheter forbeholdt.
          </p>
          <p className="text-xs text-paper/40">
            Frikortordning hos fysioterapeut, manuellterapeut og psykomotorisk fysioterapeut. Avbestilling senest kl 15 dagen før.
          </p>
        </div>
      </Container>
    </footer>
  );
}
