import type { Metadata } from "next";
import { site } from "./site";

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = new URL(opts.path, site.url).toString();
  const image = opts.image ?? `${site.url}/opengraph-image`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: site.name,
      locale: "nb_NO",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: opts.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
    ...(opts.noIndex && { robots: { index: false, follow: false } }),
  };
}
