import { Container } from "@/components/ui/Container";
import { TabooGrid } from "@/components/taboo/TabooGrid";
import { Reveal } from "@/components/motion/Reveal";
import { tabooCards } from "@/content/taboo-cards";

/** "Taboo or Not" — claims you've heard, checked against the evidence. */
export function TabooPreview() {
  return (
    <section id="taboo" className="scroll-mt-16 border-b border-line py-20 sm:py-28">
      <Container>
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] text-ink">
              Taboo, or not?
            </h2>
            <p className="mt-3 max-w-md text-ink-2">
              Six things night workers get told. Tap each to see the verdict,
              and the evidence behind it.
            </p>
          </div>
          <span className="data hidden text-xs text-muted sm:block">
            {String(tabooCards.length).padStart(2, "0")} claims · tap to flip
          </span>
        </Reveal>
        <TabooGrid cards={tabooCards} />
      </Container>
    </section>
  );
}
