"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/tjenester", label: "Tjenester" },
  { href: "/terapeuter", label: "Terapeuter" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/priser", label: "Priser" },
  { href: "/artikler", label: "Artikler" },
  { href: "/kontakt", label: "Kontakt" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Lukk meny" : "Åpne meny"}
        className="flex md:hidden h-10 w-10 items-center justify-center rounded-lg text-ink hover:bg-moss-50 transition-colors"
      >
        {open ? (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-16 z-40 flex flex-col bg-paper p-6 md:hidden overflow-y-auto"
        >
          <nav aria-label="Mobilmeny">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-2 rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-moss-50 text-moss-700"
                        : "text-ink hover:bg-bone"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 border-t border-line pt-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-moss-600">
              Tjenester
            </p>
            <ul className="flex flex-col gap-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/tjenester/${s.slug}`}
                    className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-ink-muted hover:bg-bone hover:text-ink transition-colors"
                  >
                    <span aria-hidden="true">{s.icon}</span>
                    {s.nav}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <a
              href={`tel:${site.phone.tel}`}
              className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-terra-500 text-white font-medium text-base shadow-soft"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              Ring {site.phone.display}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
