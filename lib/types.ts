/** Shared types for Moonlighters content. */

/** A "Taboo or Not" flip-card: a myth on the front, the truth on the back. */
export interface TabooCard {
  id: string;
  /** The stigma/myth shown on the front of the card. */
  myth: string;
  /** The honest correction shown on the back. */
  truth: string;
  /** One-line, science-backed explanation under the truth. */
  science: string;
}

/** The five education categories. Order here is the order shown in the library. */
export const ARTICLE_CATEGORIES = [
  "Sleep & Body",
  "Mental Health",
  "Relationships & Social Life",
  "Your Rights & Money",
  "Staying Safe",
] as const;

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number];

/** Frontmatter-style metadata each article .mdx file exports as `metadata`. */
export interface ArticleMeta {
  title: string;
  category: ArticleCategory;
  excerpt: string;
  /** ISO date string, e.g. "2026-06-01". Used for sorting. */
  date: string;
  /** Estimated read time, e.g. "5 min". */
  readingTime?: string;
}

/** Article metadata plus its URL slug (derived from the filename). */
export interface ArticleSummary extends ArticleMeta {
  slug: string;
}
