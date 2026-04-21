import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { articles } from "@/lib/articles";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

export const metadata: Metadata = buildMetadata({
  title: "Artikler om fysioterapi og helse — Hole Fysioterapi",
  description:
    "Les faglige artikler om fysioterapi, manuellterapi, frikort og rehabilitering fra terapeutene ved Hole Fysioterapi på Vik Torg, Røyse.",
  path: "/artikler",
});

export default function ArtiklerPage() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <Breadcrumbs crumbs={[{ name: "Hjem", path: "/" }, { name: "Artikler", path: "/artikler" }]} />
        <div className="mb-14 max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-moss-600">Faglige artikler</p>
          <h1 className="font-serif text-[clamp(2rem,3vw+1rem,3rem)] font-semibold text-ink leading-tight mb-4">
            Kunnskap fra terapeutene
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed">
            Vi deler kunnskap om fysioterapi, helse og rehabilitering — slik at
            du kan ta gode valg for kroppen din.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <AnimatedSection key={article.slug} delay={(i % 3) * 100 as 100 | 200 | 300 | 400 | 0}>
              <Link
                href={`/artikler/${article.slug}`}
                className="group flex flex-col gap-4 rounded-2xl bg-bone p-6 shadow-soft hover:-translate-y-1 hover:shadow-pop transition-all duration-300"
              >
                <div className="flex flex-wrap gap-2">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="rounded-full bg-moss-100 px-2.5 py-0.5 text-xs font-medium text-moss-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-serif text-lg font-semibold text-ink leading-snug group-hover:text-moss-700 transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-ink-muted leading-relaxed line-clamp-3">
                  {article.description}
                </p>
                <div className="mt-auto flex items-center justify-between text-xs text-ink-muted">
                  <span>{article.authorName}</span>
                  <span>{article.readingTime} min lesing</span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
