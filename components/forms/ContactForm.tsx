"use client";

import { useState, useRef } from "react";
import { FormField } from "./FormField";
import { services } from "@/lib/services";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot */}
      <input type="text" name="website" className="hidden" tabIndex={-1} aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Navn" name="name" required placeholder="Ditt navn" />
        <FormField label="Telefon" name="phone" type="tel" required placeholder="Ditt mobilnummer" />
      </div>

      <FormField label="E-post" name="email" type="email" placeholder="din@epost.no" />

      <FormField
        label="Tjeneste"
        name="service"
        type="select"
        options={services.map((s) => ({ value: s.slug, label: s.nav }))}
      />

      <FormField
        label="Melding"
        name="message"
        type="textarea"
        placeholder="Beskriv kort hva du trenger hjelp med (valgfritt)"
      />

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-moss-600"
        />
        <label htmlFor="consent" className="text-xs text-ink-muted leading-relaxed">
          Jeg samtykker til at Hole Fysioterapi behandler mine kontaktopplysninger for å besvare henvendelsen min.
        </label>
      </div>

      <div aria-live="polite" aria-atomic="true">
        {status === "success" && (
          <div className="rounded-xl bg-moss-50 border border-moss-100 px-5 py-4 text-sm text-moss-700 font-medium">
            ✓ Takk! Vi har mottatt din henvendelse og tar kontakt snarest.
          </div>
        )}
        {status === "error" && (
          <div className="rounded-xl bg-red-50 border border-red-100 px-5 py-4 text-sm text-error font-medium">
            Noe gikk galt. Ring oss på 32 15 98 20 eller prøv igjen.
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="flex h-12 w-full items-center justify-center rounded-full bg-moss-600 font-medium text-paper shadow-soft hover:bg-moss-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
      >
        {status === "loading" ? "Sender…" : "Send melding"}
      </button>
    </form>
  );
}
