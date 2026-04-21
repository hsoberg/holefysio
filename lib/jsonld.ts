import { site } from "./site";
import { services, type Service } from "./services";
import { therapists, type Therapist } from "./therapists";
import { reviews, aggregateRating } from "./reviews";

function escape(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

export function localBusinessLd(): string {
  const ld = {
    "@context": "https://schema.org",
    "@type": ["Physiotherapy", "MedicalBusiness", "LocalBusiness"],
    "@id": `${site.url}/#clinic`,
    name: site.name,
    url: site.url,
    telephone: site.phone.tel,
    email: site.email,
    image: `${site.url}/hole%20fysioterapi.png`,
    logo: `${site.url}/hole%20fysioterapi.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.zip,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Hole kommune" },
      { "@type": "AdministrativeArea", name: "Ringerike" },
      { "@type": "Place", name: "Røyse" },
      { "@type": "Place", name: "Hønefoss" },
      { "@type": "Place", name: "Vik" },
    ],
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.dayOfWeek}`,
      opens: h.opens,
      closes: h.closes,
    })),
    priceRange: "$$",
    sameAs: [site.gbpUrl],
    medicalSpecialty: ["Physiotherapy", "SportsMedicine"],
    availableService: services.map((s) => ({
      "@type": "MedicalProcedure",
      "@id": `${site.url}/tjenester/${s.slug}/#service`,
      name: s.title,
    })),
    employee: therapists.map((t) => ({
      "@type": "Person",
      "@id": `${site.url}/terapeuter/${t.slug}/#person`,
      name: t.name,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating,
      worstRating: aggregateRating.worstRating,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: r.text,
      datePublished: r.date,
      itemReviewed: { "@id": `${site.url}/#clinic` },
    })),
  };
  return escape(ld);
}

export function personLd(t: Therapist): string {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/terapeuter/${t.slug}/#person`,
    name: t.name,
    jobTitle: t.role,
    telephone: t.phone.tel,
    image: `${site.url}${t.photo}`,
    worksFor: { "@id": `${site.url}/#clinic` },
    knowsAbout: t.specialties,
    url: `${site.url}/terapeuter/${t.slug}`,
  };
  return escape(ld);
}

export function medicalProcedureLd(s: Service): string {
  const ld = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${site.url}/tjenester/${s.slug}/#service`,
    name: s.title,
    description: s.intro,
    url: `${site.url}/tjenester/${s.slug}`,
    procedureType: "https://schema.org/PhysicalExam",
    provider: { "@id": `${site.url}/#clinic` },
  };
  return escape(ld);
}

export function faqPageLd(items: { q: string; a: string }[]): string {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return escape(ld);
}

export function breadcrumbLd(
  crumbs: { name: string; path: string }[]
): string {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.path}`,
    })),
  };
  return escape(ld);
}

export function articleLd(opts: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  authorSlug: string;
  authorName: string;
}): string {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: `${site.url}/artikler/${opts.slug}`,
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    author: {
      "@type": "Person",
      "@id": `${site.url}/terapeuter/${opts.authorSlug}/#person`,
      name: opts.authorName,
    },
    publisher: { "@id": `${site.url}/#clinic` },
    image: `${site.url}/images/artikler/${opts.slug}.jpg`,
  };
  return escape(ld);
}
