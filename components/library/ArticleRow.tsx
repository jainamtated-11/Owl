import Link from "next/link";
import type { ArticleSummary } from "@/lib/types";

/**
 * One article as an index row: category label, title + excerpt, reading time.
 * Hairline-separated rows read as a credible table of contents — not a grid of
 * identical cards.
 */
export function ArticleRow({ article }: { article: ArticleSummary }) {
  return (
    <Link
      href={`/library/${article.slug}`}
      className="group grid gap-x-8 gap-y-2 border-t border-line py-6 transition-colors hover:bg-surface/40 sm:grid-cols-[10rem_1fr_auto] sm:px-2"
    >
      <span className="label pt-1">{article.category}</span>
      <div className="space-y-1.5">
        <h3 className="text-lg font-[540] leading-snug text-ink transition-colors group-hover:text-violet">
          {article.title}
        </h3>
        <p className="max-w-prose text-sm leading-relaxed text-ink-2">
          {article.excerpt}
        </p>
      </div>
      {article.readingTime ? (
        <span className="data pt-1 text-xs text-muted">
          {article.readingTime}
        </span>
      ) : null}
    </Link>
  );
}
