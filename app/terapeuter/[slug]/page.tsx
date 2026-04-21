import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { therapists, getTherapist } from "@/lib/therapists";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/services";
import { personLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { site } from "@/lib/site";
import Link from "next/link";

export function generateStaticParams() {
  return therapists.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = getTherapist(slug);
  if (!t) return {};
  return buildMetadata({
    title: `${t.name} — ${t.role}`,
    description: t.metaDescription,
    path: `/terapeuter/${t.slug}`,
  });
}

export default async function TerapeutPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const therapist = getTherapist(slug);
  if (!therapist) notFound();

  const relatedServices = services.filter((s) =>
    therapist.serviceSlug.includes(s.slug)
  );

  return (
    <>
      <JsonLd json={personLd(therapist)} />

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <Breadcrumbs
            crumbs={[
              { name: "Hjem", path: "/" },
              { name: "Terapeuter", path: "/terapeuter" },
              { name: therapist.name, path: `/terapeuter/${therapist.slug}` },
            ]}
          />

          <div className="grid gap-12 lg:grid-cols-3 lg:items-start">
            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="relative h-80 w-full overflow-hidden rounded-3xl bg-moss-100 shadow-soft mb-6">
                <Image
                  src={therapist.photo}
                  alt={`${therapist.name}, ${therapist.role} ved Hole Fysioterapi`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="rounded-2xl bg-bone p-5 flex flex-col gap-3">
                <div>
                  <p className="text-xs text-ink-muted mb-1">Direktelinje</p>
                  <a
                    href={`tel:${therapist.phone.tel}`}
                    className="text-lg font-semibold text-terra-500 link-underline"
                  >
                    {therapist.phone.display}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-ink-muted mb-1">Klinikk</p>
                  <p className="text-sm text-ink">{site.address.street}, {site.address.zip} {site.address.city}</p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-moss-600">
                {therapist.role}
              </p>
              <h1 className="font-serif text-[clamp(2rem,3vw+1rem,3rem)] font-semibold text-ink leading-tight mb-4">
                {therapist.name}
              </h1>
              <p className="text-lg text-ink-muted leading-relaxed mb-8">
                {therapist.bio}
              </p>

              <div className="mb-8">
                <h2 className="font-serif text-xl font-semibold text-ink mb-3">Spesialiteter</h2>
                <div className="flex flex-wrap gap-2">
                  {therapist.specialties.map((s) => (
                    <Badge key={s} variant="moss">{s}</Badge>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="font-serif text-xl font-semibold text-ink mb-3">Godkjenninger</h2>
                <ul className="flex flex-col gap-2">
                  {therapist.credentials.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-ink-muted">
                      <svg className="h-4 w-4 text-moss-600 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {relatedServices.length > 0 && (
                <div>
                  <h2 className="font-serif text-xl font-semibold text-ink mb-3">Tilknyttede tjenester</h2>
                  <div className="flex flex-wrap gap-3">
                    {relatedServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/tjenester/${s.slug}`}
                        className="inline-flex items-center gap-2 rounded-full border border-moss-600 px-4 h-9 text-sm text-moss-700 hover:bg-moss-50 transition-colors"
                      >
                        <span aria-hidden="true">{s.icon}</span>
                        {s.nav}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        heading={`Bestill time hos ${therapist.name}`}
        body={`Ring direkte på ${therapist.phone.display} eller bruk kontaktskjemaet nedenfor.`}
      />
    </>
  );
}
