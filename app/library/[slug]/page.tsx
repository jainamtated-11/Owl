import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { getArticleBySlug, getArticleSlugs } from "@/lib/content";

// Pre-render every article at build time; 404 anything not listed here.
export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.meta.title,
    description: article.meta.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const { Content, meta } = article;

  return (
    <Container className="py-16 sm:py-20">
      <Link
        href="/library"
        className="text-sm text-lavender transition-colors hover:text-amber"
      >
        ← Back to the Library
      </Link>

      <header className="mt-8 max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-amber">
          {meta.category}
        </p>
        <h1 className="font-serif text-4xl leading-tight text-moonlight sm:text-5xl">
          {meta.title}
        </h1>
        {meta.readingTime ? (
          <p className="text-sm text-muted">{meta.readingTime} read</p>
        ) : null}
      </header>

      <article className="prose prose-night mt-12 max-w-2xl">
        <Content />
      </article>
    </Container>
  );
}
