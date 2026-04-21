import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";
import { buildMetadata } from "@/lib/seo";
import { articleLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/sections/CtaBanner";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return buildMetadata({
    title: a.title,
    description: a.description,
    path: `/artikler/${a.slug}`,
  });
}

export default async function ArtikelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  let ArticleContent: React.ComponentType | null = null;
  try {
    const mod = await import(`../../../content/artikler/${slug}.mdx`);
    ArticleContent = mod.default;
  } catch {
    ArticleContent = null;
  }

  return (
    <>
      <JsonLd json={articleLd({
        title: article.title,
        description: article.description,
        slug: article.slug,
        datePublished: article.datePublished,
        authorSlug: article.authorSlug,
        authorName: article.authorName,
      })} />

      <article className="bg-paper py-20 md:py-28">
        <Container>
          <Breadcrumbs crumbs={[
            { name: "Hjem", path: "/" },
            { name: "Artikler", path: "/artikler" },
            { name: article.title, path: `/artikler/${article.slug}` },
          ]} />

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-moss-100 px-3 py-1 text-xs font-medium text-moss-700">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-serif text-[clamp(1.75rem,3vw+0.75rem,2.75rem)] font-semibold text-ink leading-tight mb-4">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 mb-10 text-sm text-ink-muted border-b border-line pb-8">
              <span>Av {article.authorName}</span>
              <span>·</span>
              <time dateTime={article.datePublished}>
                {new Date(article.datePublished).toLocaleDateString("nb-NO", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{article.readingTime} min lesing</span>
            </div>

            {ArticleContent ? (
              <div className="prose text-ink-muted">
                <ArticleContent />
              </div>
            ) : (
              <p className="text-ink-muted italic">
                Artikkelen er under utarbeiding. Kom tilbake snart.
              </p>
            )}
          </div>
        </Container>
      </article>

      <CtaBanner
        heading="Lurer du på noe? Vi hjelper deg."
        body="Ring oss eller bruk kontaktskjemaet — vi svarer raskt."
      />
    </>
  );
}
