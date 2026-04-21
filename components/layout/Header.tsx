"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { href: "/tjenester", label: "Tjenester", hasDropdown: true },
  { href: "/terapeuter", label: "Terapeuter" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/priser", label: "Priser" },
  { href: "/artikler", label: "Artikler" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-sm shadow-soft border-b border-line"
          : "bg-paper border-b border-line"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-10 h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col leading-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss-700 rounded"
          aria-label={site.name}
        >
          <span className="font-serif text-lg font-semibold text-ink leading-tight">
            Hole Fysioterapi
          </span>
          <span className="text-xs text-ink-muted">og Helseklinikk</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Hovedmeny" className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href} className="relative">
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    pathname.startsWith("/tjenester")
                      ? "text-moss-700 bg-moss-50"
                      : "text-ink-muted hover:text-ink hover:bg-bone"
                  }`}
                  aria-expanded={servicesOpen}
                >
                  {link.label}
                  <svg className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div
                    className="absolute left-0 top-full mt-1 w-60 rounded-2xl bg-paper shadow-pop border border-line p-2"
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/tjenester/${s.slug}`}
                        className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm text-ink-muted hover:bg-bone hover:text-ink transition-colors"
                      >
                        <span aria-hidden="true">{s.icon}</span>
                        {s.nav}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-moss-700 bg-moss-50"
                    : "text-ink-muted hover:text-ink hover:bg-bone"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/bestill-time"
            className="rounded-full bg-moss-600 px-5 h-10 flex items-center text-sm font-medium text-paper hover:bg-moss-700 transition-colors shadow-soft"
          >
            Bestill time
          </Link>
          <a
            href={`tel:${site.phone.tel}`}
            className="rounded-full bg-terra-500 px-5 h-10 flex items-center gap-2 text-sm font-medium text-white hover:bg-terra-700 transition-colors shadow-soft"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
            </svg>
            {site.phone.display}
          </a>
        </div>

        {/* Mobile nav trigger */}
        <MobileNav />
      </div>
    </header>
  );
}
