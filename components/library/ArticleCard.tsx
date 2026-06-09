import Link from "next/link";
import type { ArticleSummary } from "@/lib/types";

/** A link card for one article in the library index. */
export function ArticleCard({ article }: { article: ArticleSummary }) {
  return (
    <Link
      href={`/library/${article.slug}`}
      className="group flex h-full flex-col gap-3 rounded-2xl border border-border-soft bg-surface/60 p-6 transition-colors hover:border-amber/40"
    >
      <span className="text-xs uppercase tracking-[0.18em] text-amber/80">
        {article.category}
      </span>
      <h3 className="font-serif text-xl leading-snug text-moonlight transition-colors group-hover:text-amber-soft">
        {article.title}
      </h3>
      <p className="text-sm leading-relaxed text-lavender">{article.excerpt}</p>
      {article.readingTime ? (
        <span className="mt-auto pt-2 text-xs text-muted">
          {article.readingTime} read
        </span>
      ) : null}
    </Link>
  );
}
