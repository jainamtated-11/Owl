"use client";

import { useEffect, useState } from "react";

/**
 * "Someone is always on the night shift" — rendered as a small instrument
 * readout rather than a sentimental line. The live, monospaced clock reinforces
 * the data voice. Time renders after mount to avoid hydration mismatch.
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
        second: "2-digit",
        hour12: false,
      })
    : "--:--:--";

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-1.5 w-1.5" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber/70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber" />
      </span>
      <span className="data text-xs text-muted" suppressHydrationWarning>
        <span className="text-ink-2">{time}</span> · someone is on shift right now
      </span>
    </div>
  );
}
