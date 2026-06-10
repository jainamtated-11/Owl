import { TabooCard } from "@/components/taboo/TabooCard";
import { Reveal } from "@/components/motion/Reveal";
import type { TabooCard as TabooCardData } from "@/lib/types";

/** Responsive grid of flip-cards that enter in a gentle sequence. */
export function TabooGrid({ cards }: { cards: TabooCardData[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, i) => (
        <Reveal key={card.id} delay={i * 0.06}>
          <TabooCard card={card} />
        </Reveal>
      ))}
    </div>
  );
}
