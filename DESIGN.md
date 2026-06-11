# Design

> Visual system for Moonlighters. Strategic context lives in `PRODUCT.md`.
> Register: **brand**. Voice: **clinical · credible · practical**, executed with
> **Superhuman-inspired** craft (premium, focused, cinematic dark).

## Theme

Night identity, Superhuman craft. An indigo-navy canvas with a violet-sky
atmospheric hero backdrop, resolving on a deep-teal closing band. Three
deliberate accents, each with one job:

- **violet** — brand / action (CTAs, links, focus)
- **teal** — the closing chord (the page's resolving CTA band)
- **amber** — evidence / data only (the circadian chart, the live clock)

The body stays dark (the audience is night workers; we "earn the dark"), so
Superhuman's white body is reinterpreted as a deep-indigo body — the hero/body
polarity is carried by the atmospheric hero vs. the flat deep body.

## Color

WCAG AA on the canvas. Hex tokens (Superhuman-derived) in `app/globals.css`.

| Token | Value | Role |
|---|---|---|
| `--night` | `#0f0d20` | page canvas (deep indigo) |
| `--night-2` | `#1b1938` | hero / raised sections (Superhuman primary) |
| `--surface` | `#232149` | cards |
| `--surface-2` | `#2b2858` | hover / inset |
| `--line` | `#322e4d` | hairline borders |
| `--line-strong` | `#463f63` | emphasized rules |
| `--ink` | `#f3f2f9` | primary text |
| `--ink-2` | `#bcbac9` | secondary text |
| `--muted` | `#8b88a3` | captions / labels |
| `--violet` | `#c9b4fa` | brand / action |
| `--violet-deep` | `#ab8ff4` | action hover |
| `--teal-deep` | `#0e3030` | closing CTA band |
| `--teal-mid` | `#155555` | chrome inside the band |
| `--amber` | `#f4bd57` | evidence / data only |

The hero uses `.hero-atmosphere`: a radial violet → sky wash over `--night-2`.

## Typography

**Inter Variable** (Superhuman's recommended substitute), used at **sub-default
weights** — 460 body / 540 display — via Tailwind `font-[460]` / `font-[540]`,
with tight display leading (~1.0) and negative tracking (−0.022em). This
in-between weight is the typographic signature; avoid 400/500/700.

- Hero display: `clamp(2.6rem, 6.4vw, 4.25rem)`, weight 540, leading ~1.
- Section heads: `clamp(1.8rem, 4vw, 2.6rem)`, weight 540.
- Body: 16–18px, weight 460, leading 1.5.
- **JetBrains Mono** — data system only: live clock, statistics, citations,
  chart and section labels (`.data`, `.label`). Moonlighters' evidence voice.

## Components

- **Hero** — claim left, circadian chart right, over the violet-sky atmosphere.
  Primary CTA is a violet **pill** (pill is hero/nav-only, Superhuman rule).
- **Buttons** — `primary`/`pill` violet (8px radius / full); `ghost` outline;
  `onTeal` light-on-teal for the closing band. Label weight 600.
- **CircadianChart** — body-clock-vs-shift evidence; amber shift band + low
  marker. Pure SVG, draws in once.
- **TabooCard** — verdict flip-card (claim → FALSE + amber-flagged evidence).
- **ArticleRow** — editorial index row; violet hover.
- **WaitlistSection** — full-bleed deep-teal closing band with the one CTA.
- **SiteNav / SiteFooter** — full-width; logo aligns to the content's left edge.

## Layout

- Content is **left-aligned** (not centered), capped at `max-w-5xl`; nav and
  footer span full width.
- Generous editorial section padding (80–128px); the teal band gets the most air.
- Card radius capped at 12px; pills only for buttons.

## Motion

- `.reveal-enter` — single on-load fade-and-rise; content visible at rest, never
  scroll-gated (nothing ships blank). Chart curve draws in on load.
- All motion disabled under `prefers-reduced-motion`.

## Bans honored

No section eyebrows, no glass, no identical card grids, no gradient text. The
only gradient is the hero's atmospheric backdrop (Superhuman's depth medium),
used once and purposefully.
