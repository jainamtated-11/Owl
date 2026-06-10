/**
 * Circadian alertness vs. the night-shift work window.
 *
 * The brand's central piece of evidence. Alertness tracks core body temperature:
 * it peaks in the early evening and bottoms out around 04:30 (the "circadian
 * low"). The amber band is a typical 22:00–06:00 shift, sitting right on top of
 * that trough — the whole problem with night work, shown rather than asserted.
 *
 * The time axis runs 18:00 → 18:00 (next day) so the night shift reads as one
 * contiguous band centered over the low, instead of split across midnight.
 *
 * Pure SVG, server-rendered. The curve draws itself in once via CSS; the global
 * prefers-reduced-motion rule lands it fully drawn with no animation.
 */
const W = 720;
const H = 300;
const PAD = { top: 28, right: 24, bottom: 36, left: 24 };
const plot = { w: W - PAD.left - PAD.right, h: H - PAD.top - PAD.bottom };

const AXIS_START = 18; // 18:00
const AXIS_SPAN = 24; // hours shown

// Alertness model: peak ~16:30, trough ~04:30. Range 0..1.
function alertness(hour: number): number {
  return 0.5 + 0.42 * Math.cos((2 * Math.PI * (hour - 16.5)) / 24);
}

const x = (hour: number) =>
  PAD.left + ((hour - AXIS_START) / AXIS_SPAN) * plot.w;
const y = (a: number) => PAD.top + (1 - a) * plot.h;

const samples = Array.from({ length: 97 }, (_, i) => {
  const hour = AXIS_START + (i / 96) * AXIS_SPAN;
  return { hour, a: alertness(hour) };
});

const curve = samples
  .map((p, i) => `${i === 0 ? "M" : "L"}${x(p.hour).toFixed(1)} ${y(p.a).toFixed(1)}`)
  .join(" ");

// Shift window: 22:00 → 06:00 (i.e. hour 22 → 30), now contiguous.
const SHIFT_START = 22;
const SHIFT_END = 30;
const trough = samples.reduce((lo, p) => (p.a < lo.a ? p : lo), samples[0]);

const hourTicks = [18, 24, 30, 36, 42];
const fmtHour = (h: number) => `${String(h % 24).padStart(2, "0")}:00`;

export function CircadianChart() {
  const curveLen = 1500;

  return (
    <figure className="w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="A 24-hour alertness curve that peaks in the early evening and bottoms out around 04:30. A typical 22:00 to 06:00 night shift, shaded in amber, sits directly over that low point."
      >
        {/* shift window band */}
        <rect
          x={x(SHIFT_START)}
          y={PAD.top}
          width={x(SHIFT_END) - x(SHIFT_START)}
          height={plot.h}
          fill="var(--color-amber)"
          opacity="0.09"
        />
        <line
          x1={x(SHIFT_START)}
          y1={PAD.top}
          x2={x(SHIFT_START)}
          y2={PAD.top + plot.h}
          stroke="var(--color-amber)"
          strokeWidth="1"
          opacity="0.4"
        />
        <line
          x1={x(SHIFT_END)}
          y1={PAD.top}
          x2={x(SHIFT_END)}
          y2={PAD.top + plot.h}
          stroke="var(--color-amber)"
          strokeWidth="1"
          opacity="0.4"
        />
        <text
          x={(x(SHIFT_START) + x(SHIFT_END)) / 2}
          y={PAD.top + 14}
          textAnchor="middle"
          className="label"
          fontSize="11"
          fill="var(--color-amber)"
          style={{ letterSpacing: "0.14em" }}
        >
          YOUR SHIFT
        </text>

        {/* baseline + hour ticks */}
        <line
          x1={PAD.left}
          y1={PAD.top + plot.h}
          x2={PAD.left + plot.w}
          y2={PAD.top + plot.h}
          stroke="var(--color-line)"
          strokeWidth="1"
        />
        {hourTicks.map((h) => (
          <g key={h}>
            <line
              x1={x(h)}
              y1={PAD.top + plot.h}
              x2={x(h)}
              y2={PAD.top + plot.h + 5}
              stroke="var(--color-line)"
              strokeWidth="1"
            />
            <text
              x={x(h)}
              y={PAD.top + plot.h + 22}
              textAnchor="middle"
              className="data"
              fontSize="11"
              fill="var(--color-muted)"
            >
              {fmtHour(h)}
            </text>
          </g>
        ))}

        {/* alertness curve */}
        <path
          d={curve}
          fill="none"
          stroke="var(--color-ink-2)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            strokeDasharray: curveLen,
            strokeDashoffset: curveLen,
            animation: "draw-curve 1.8s var(--ease-out-quint) forwards",
          }}
        />

        {/* circadian low marker */}
        <line
          x1={x(trough.hour)}
          y1={y(trough.a)}
          x2={x(trough.hour)}
          y2={PAD.top + plot.h}
          stroke="var(--color-amber)"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.6"
        />
        <circle cx={x(trough.hour)} cy={y(trough.a)} r="4.5" fill="var(--color-amber)" />
        <text
          x={x(trough.hour)}
          y={y(trough.a) + 24}
          textAnchor="middle"
          className="data"
          fontSize="11"
          fill="var(--color-amber)"
        >
          circadian low · 04:30
        </text>

        <style>{`@keyframes draw-curve { to { stroke-dashoffset: 0; } }`}</style>
      </svg>
      <figcaption className="mt-3 text-sm text-muted">
        Alertness tracks your body clock, bottoming out near 04:30, right when
        the night shift needs you most.
      </figcaption>
    </figure>
  );
}
