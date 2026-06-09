"use client";

import { useEffect, useState } from "react";

/**
 * "Someone is always on the night shift" — a quiet solidarity element with a
 * live ticking clock. Renders the time only after mount to avoid a server/client
 * hydration mismatch. The colon blink is the only motion, and it's disabled
 * under prefers-reduced-motion via the global CSS rule.
 */
export function AlwaysOnShift({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = now
    ? now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : "--:--";

  return (
    <div
      className={`inline-flex items-center gap-2 text-sm text-lavender ${className}`}
    >
      <span className="relative flex h-2 w-2" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber/60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
      </span>
      <span>
        Someone is always on the night shift.{" "}
        <span className="text-muted tabular-nums" suppressHydrationWarning>
          It&apos;s {time} where you are.
        </span>
      </span>
    </div>
  );
}
