import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ArticleCard } from "@/components/library/ArticleCard";
import { getAllArticles } from "@/lib/content";
import { ARTICLE_CATEGORIES } from "@/lib/types";

export const metadata: Metadata = {
  title: "Library",
  description:
    "Honest, judgment-free articles about life on the night shift — sleep, mind, relationships, rights, and safety.",
};

export default async function LibraryPage() {
  const articles = await getAllArticles();

  return (
    <Container className="py-16 sm:py-20">
      <header className="max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-amber">
          The Library
        </p>
        <h1 className="font-serif text-4xl leading-tight text-moonlight sm:text-5xl">
          Everything they never told you about working nights.
        </h1>
        <p className="text-lavender">
          Short, honest reads organized by what's actually on your mind. No
          lectures — just the realities of the night shift and what helps.
        </p>
      </header>

      <div className="mt-14 space-y-16">
        {ARTICLE_CATEGORIES.map((category) => {
          const inCategory = articles.filter((a) => a.category === category);
          return (
            <section key={category} aria-labelledby={`cat-${category}`}>
              <h2
                id={`cat-${category}`}
                className="mb-6 font-serif text-2xl text-moonlight"
              >
                {category}
              </h2>
              {inCategory.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {inCategory.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted">
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
