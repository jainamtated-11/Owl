"use client";

import { useEffect, useState } from "react";
import { PAD, plot, alertness, x, y, toAxisHour } from "@/lib/circadian";

/**
 * Live "you are here" marker. Plots the current local time onto the alertness
 * curve and updates every second, tying the "someone is on shift right now"
 * line to the evidence. Renders nothing until mounted (avoids hydration
 * mismatch); the static chart is fully legible without it. The group is
 * aria-hidden so the per-second updates don't spam screen readers (the chart's
 * own aria-label already describes the live marker).
 */
export function ChartNowMarker() {
  const [hour24, setHour24] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setHour24(
        d.getHours() + d.getMinutes() / 60 + d.getSeconds() / 3600,
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  if (hour24 === null) return null;

  const h = toAxisHour(hour24);
  const cx = x(h);
  const cy = y(alertness(hour24));

  return (
    <g aria-hidden="true">
      <line
        x1={cx}
        y1={PAD.top}
        x2={cx}
        y2={PAD.top + plot.h}
        stroke="var(--color-violet)"
        strokeWidth="1"
        opacity="0.5"
      />
      {/* soft pulse */}
      <circle cx={cx} cy={cy} r="9" fill="var(--color-violet)" opacity="0.18">
        <animate
          attributeName="r"
          values="5;11;5"
          dur="2.4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.28;0;0.28"
          dur="2.4s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx={cx}
        cy={cy}
        r="4"
        fill="var(--color-violet)"
        stroke="var(--color-night-2)"
        strokeWidth="1.5"
      />
      <text
        x={cx}
        y={PAD.top - 8}
        textAnchor="middle"
        className="data"
        fontSize="11"
        fill="var(--color-violet)"
      >
        you, now
      </text>
    </g>
  );
}
