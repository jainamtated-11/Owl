import { Container } from "@/components/ui/Container";
import { TabooGrid } from "@/components/taboo/TabooGrid";
import { Reveal } from "@/components/motion/Reveal";
import { tabooCards } from "@/content/taboo-cards";

/** Landing-page preview of the "Taboo or Not" feature (first three cards). */
export function TabooPreview() {
  return (
    <section id="taboo" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <Reveal className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-amber">
            Taboo or Not
          </p>
          <h2 className="mt-4 font-serif text-3xl text-moonlight sm:text-4xl">
            The myths about night work, flipped.
          </h2>
          <p className="mt-4 text-lavender">
            Tap a card to turn a common stigma into the truth — and the science
            behind it.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <TabooGrid cards={tabooCards.slice(0, 3)} />
        </Reveal>
      </Container>
    </section>
  );
}
