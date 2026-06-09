import { TabooCard } from "@/components/taboo/TabooCard";
import type { TabooCard as TabooCardData } from "@/lib/types";

/** Responsive grid of flip-cards: 1 column on mobile, up to 3 on desktop. */
export function TabooGrid({ cards }: { cards: TabooCardData[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <TabooCard key={card.id} card={card} />
      ))}
    </div>
  );
}
