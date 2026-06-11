"use client";

import { useState } from "react";
import type { TabooCard as TabooCardData } from "@/lib/types";

/**
 * A tappable flip-card framed as a verdict. Front states the common claim; tap
 * to flip to the verdict ("FALSE") plus the cited evidence. Real <button> for
 * keyboard + screen-reader support; the CSS 3D flip degrades to an instant
 * swap under prefers-reduced-motion (global rule zeroes the duration).
 */
export function TabooCard({ card }: { card: TabooCardData }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      className="group h-64 w-full text-left transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 [perspective:1200px] focus-visible:outline-none"
    >
      <div
        className="relative h-full w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front — the claim */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-xl border border-line bg-surface p-6 [backface-visibility:hidden] group-hover:border-line-strong">
          <span className="label">The claim</span>
          <p className="text-lg font-medium leading-snug text-ink">
            “{card.myth}”
          </p>
          <span className="data text-xs text-amber">true or false? →</span>
        </div>

        {/* Back — verdict + evidence */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-xl border border-amber/35 bg-night-2 p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <span className="data text-xs font-semibold uppercase tracking-[0.14em] text-amber">
            False
          </span>
          <p className="text-base font-medium leading-snug text-ink">
            {card.truth}
          </p>
          <p className="border-t border-line pt-3 text-[0.8125rem] leading-relaxed text-ink-2">
            {card.science}
          </p>
        </div>
      </div>
    </button>
  );
}
