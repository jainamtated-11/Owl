import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ArticleRow } from "@/components/library/ArticleRow";
import { getAllArticles } from "@/lib/content";
import { ARTICLE_CATEGORIES } from "@/lib/types";

export const metadata: Metadata = {
  title: "Library",
  description:
    "Evidence-based, judgment-free articles about life on the night shift — sleep, mind, relationships, rights, and safety.",
};

export default async function LibraryPage() {
  const articles = await getAllArticles();

  return (
    <Container className="py-16 sm:py-20">
      <header className="max-w-2xl">
        <h1 className="text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.02] text-ink">
          Everything they never told you about working nights.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-2">
          Short, evidence-based reads, organized by what&apos;s actually on your
          mind. No lectures, just the realities of the night shift and what
          helps.
        </p>
      </header>

      <div className="mt-16 space-y-14">
        {ARTICLE_CATEGORIES.map((category) => {
          const inCategory = articles.filter((a) => a.category === category);
          return (
            <section key={category} aria-labelledby={`cat-${category}`}>
              <div className="flex items-baseline justify-between border-b border-line-strong pb-3">
                <h2 id={`cat-${category}`} className="text-xl font-[540] text-ink">
                  {category}
                </h2>
                <span className="data text-xs text-muted">
                  {String(inCategory.length).padStart(2, "0")}
                </span>
              </div>
              {inCategory.length > 0 ? (
                <div>
                  {inCategory.map((article) => (
                    <ArticleRow key={article.slug} article={article} />
                  ))}
                </div>
              ) : (
                <p className="py-6 text-sm text-muted">
                  More pieces in this section are on the way.
                </p>
              )}
            </section>
          );
        })}
      </div>
    </Container>
  );
}
