# Design

> Visual system for Moonlighters. Strategic context lives in `PRODUCT.md`.
> Register: **brand**. Voice: **clinical · credible · practical**.

## Theme

Earned dark. A cool, near-neutral night with hairline structure and a single
amber signal (the lamp). The reference is a precise instrument read at 3am — not
a moody SaaS hero. No decorative glows, no glassmorphism, no film grain. Decoration
that only signals "night" is cut; structure, type, and evidence carry the brand.

## Color

OKLCH. All text meets WCAG AA on the night base. Amber is the only accent and is
used sparingly — data points, key terms, active states, and the primary CTA.

| Token | Value (OKLCH) | Role |
|---|---|---|
| `--night` | `0.165 0.012 245` | page background |
| `--night-2` | `0.195 0.013 245` | deep panel / alt section |
| `--surface` | `0.225 0.014 245` | cards, inputs |
| `--surface-2` | `0.265 0.016 245` | hover / inset |
| `--line` | `0.32 0.016 245` | hairline borders |
| `--line-strong` | `0.42 0.02 245` | emphasized rules |
| `--ink` | `0.95 0.006 240` | primary text |
| `--ink-2` | `0.79 0.018 242` | secondary text |
| `--muted` | `0.635 0.022 242` | captions / labels (AA) |
| `--amber` | `0.82 0.13 78` | signal: data, highlights, CTA |
| `--amber-deep` | `0.74 0.135 66` | CTA hover / pressed |

Strategy: **Restrained** — near-monochrome cool neutral + one accent ≤10% of surface.

## Typography

One workhorse family with weight contrast, plus a mono used strictly as a data
system. (Deliberately avoids the Fraunces/Inter reflex pairing.)

- **Hanken Grotesk** (`--font-sans`) — headings (700, letter-spacing −0.02em,
  `text-wrap: balance`) and body (400/500). Humanist grotesque: readable, calm,
  credible.
- **JetBrains Mono** (`--font-mono`) — **data only**: the live clock, statistics,
  citations, chart labels, category/section labels. `tnum` on. Reads as a clinical
  readout, never as developer costume.
- Display scale via fluid `clamp()`: hero `clamp(2.4rem, 6vw, 4rem)`, section heads
  `clamp(1.8rem, 4vw, 2.6rem)`. Body 16–18px. Hierarchy ratio ≈ 4:1.
- Utility classes: `.data` (mono + tnum), `.label` (mono, 11px, uppercase, tracked,
  muted — used sparingly, never as a per-section eyebrow).

## Components

- **CircadianChart** — the signature evidence piece. Pure SVG: a 24h alertness
  curve (18:00→18:00) with the 22:00–06:00 shift as one contiguous amber band over
  the circadian low at 04:30. Curve draws in once via CSS.
- **TabooCard** — flip-card framed as a verdict (claim → FALSE + cited evidence).
  Real `<button>`, CSS 3D flip, reduced-motion safe.
- **ArticleRow** — editorial index row (mono category label · title + excerpt ·
  mono reading time), hairline-separated. Replaces identical card grids.
- **AlwaysOnShift** — live mono clock readout ("18:07:12 · someone is on shift").
- **Button / ButtonLink** — `rounded-md`; primary = amber on night, ghost = hairline.
- **SiteNav** — solid night + single hairline rule (no blur/glass).

## Layout

- Asymmetric hero: claim left, evidence (chart) right; stacks on mobile.
- Sections separated by full hairline rules (`border-line`), not boxes.
- Card radius capped at `rounded-xl` (12px); pills only for buttons/tags.
- Responsive via flex + `grid` breakpoints; mobile-first.

## Motion

- `.reveal-enter` — single on-load fade-and-rise (`ease-out-quint`). Content is
  visible at rest; motion never gates visibility (nothing ships blank headless /
  no-JS). Card grids stagger via incremental `animation-delay`.
- Chart curve draw-in on load.
- Every animation disabled under `prefers-reduced-motion`.

## Bans honored

No section eyebrows, no decorative glows/gradients, no glassmorphism, no identical
card grids, no gradient text, em-dash cadence kept ≤2 per surface, card radius ≤12px.
