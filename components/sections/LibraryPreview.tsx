import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ArticleRow } from "@/components/library/ArticleRow";
import { Reveal } from "@/components/motion/Reveal";
import { getAllArticles } from "@/lib/content";

/** Landing preview of the library, as an editorial index. */
export async function LibraryPreview() {
  const articles = (await getAllArticles()).slice(0, 3);

  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] text-ink">
            Read up before your next shift.
          </h2>
          <ButtonLink href="/library" variant="ghost">
            Open the library
          </ButtonLink>
        </Reveal>
        <Reveal delay={0.1} className="border-b border-line">
          {articles.map((article) => (
            <ArticleRow key={article.slug} article={article} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
