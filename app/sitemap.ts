import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { therapists } from "@/lib/therapists";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date().toISOString();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/om-oss`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tjenester`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({
      url: `${base}/tjenester/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${base}/terapeuter`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...therapists.map((t) => ({
      url: `${base}/terapeuter/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/priser`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/bestill-time`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/artikler`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...articles.map((a) => ({
      url: `${base}/artikler/${a.slug}`,
      lastModified: a.datePublished,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
