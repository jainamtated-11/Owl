"use client";

import { useState } from "react";
import type { TabooCard as TabooCardData } from "@/lib/types";

/**
 * A single tappable flip-card. Front shows the myth; tap/click/Enter flips it to
 * reveal the truth + the science. Built as a real <button> so it's keyboard
 * accessible and announced correctly. The 3D flip is pure CSS so it degrades
 * gracefully under prefers-reduced-motion (the global rule zeroes the duration).
 */
export function TabooCard({ card }: { card: TabooCardData }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      className="group h-64 w-full [perspective:1200px] focus-visible:outline-none"
    >
      <div
        className="relative h-full w-full rounded-2xl transition-transform duration-700 ease-out [transform-style:preserve-3d] group-focus-visible:ring-2 group-focus-visible:ring-amber/70 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-midnight rounded-2xl"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front — the myth */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-border-soft bg-surface/80 p-6 text-left [backface-visibility:hidden]">
          <span className="text-xs uppercase tracking-[0.2em] text-muted">
            Taboo or not?
          </span>
          <p className="font-serif text-xl leading-snug text-moonlight">
            “{card.myth}”
          </p>
          <span className="text-sm text-amber">Tap to reveal →</span>
        </div>

        {/* Back — the truth + science */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-amber/30 bg-charcoal p-6 text-left [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <span className="text-xs uppercase tracking-[0.2em] text-amber">
            Not true
          </span>
          <p className="font-serif text-lg leading-snug text-moonlight">
            {card.truth}
          </p>
          <p className="text-sm leading-relaxed text-lavender">{card.science}</p>
        </div>
      </div>
    </button>
  );
}
