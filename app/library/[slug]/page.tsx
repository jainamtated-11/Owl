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
        className="data text-xs text-muted transition-colors hover:text-amber"
      >
        ← back to the library
      </Link>

      <header className="mt-8 max-w-2xl border-b border-line pb-8">
        <div className="flex items-center gap-3">
          <span className="label">{meta.category}</span>
          {meta.readingTime ? (
            <span className="data text-xs text-muted">· {meta.readingTime}</span>
          ) : null}
        </div>
        <h1 className="mt-4 text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.08] text-ink">
          {meta.title}
        </h1>
      </header>

      <article className="prose prose-night mt-10 max-w-2xl">
        <Content />
      </article>
    </Container>
  );
}
