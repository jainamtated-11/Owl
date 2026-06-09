import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ArticleCard } from "@/components/library/ArticleCard";
import { Reveal } from "@/components/motion/Reveal";
import { getAllArticles } from "@/lib/content";

/** Landing-page preview of the education library (latest three articles). */
export async function LibraryPreview() {
  const articles = (await getAllArticles()).slice(0, 3);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-amber">
              The Library
            </p>
            <h2 className="mt-4 font-serif text-3xl text-moonlight sm:text-4xl">
              Read up before your next shift.
            </h2>
          </div>
          <ButtonLink href="/library" variant="ghost">
            Browse all
          </ButtonLink>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
