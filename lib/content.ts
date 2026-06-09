import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";
import type { ArticleMeta, ArticleSummary } from "@/lib/types";

/**
 * Server-only content loader for the education library.
 *
 * Articles live as .mdx files in content/articles/. Each file exports a
 * `metadata` const (see content/articles/*.mdx for the shape). To add an
 * article, drop a new .mdx file in that folder — nothing else to wire up.
 *
 * (These functions use `fs`, so they only run on the server / at build time.)
 */
const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

/** Filenames (without extension) of every article. */
export function getArticleSlugs(): string[] {
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/** All article summaries, newest first. */
export async function getAllArticles(): Promise<ArticleSummary[]> {
  const slugs = getArticleSlugs();
  const articles = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = (await import(
        `@/content/articles/${slug}.mdx`
      )) as { metadata: ArticleMeta };
      return { ...metadata, slug };
    }),
  );
  // Sort by ISO date string, descending.
  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Load a single article's rendered component + metadata, or null if the slug
 * doesn't exist (so the route can call notFound()).
 */
export async function getArticleBySlug(slug: string): Promise<{
  Content: ComponentType;
  meta: ArticleSummary;
} | null> {
  try {
    const mod = (await import(`@/content/articles/${slug}.mdx`)) as {
      default: ComponentType;
      metadata: ArticleMeta;
    };
    return { Content: mod.default, meta: { ...mod.metadata, slug } };
  } catch {
    return null;
  }
}
