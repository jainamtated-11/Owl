# Moonlighters

A calm, judgment-free education platform for night shift workers — honest information
about your body, mind, and life on the night shift, minus the shame. Built for India's
night workers.

This is **Phase 1: the Education MVP** — a landing page, the "Taboo or Not" interactive
feature, an MDX-backed article library, and an email waitlist. Community and a wellness-kit
shop come in later phases; the architecture leaves hooks for them.

---

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (dark-first; theme tokens live in `app/globals.css`)
- **MDX** for articles (`@next/mdx`)
- **Motion** (`motion/react`) for subtle animation
- Fraunces (serif headings) + Inter (body) via `next/font`

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/                    # routes (App Router)
  page.tsx              # landing page
  library/              # article index + [slug] article pages
  api/waitlist/         # waitlist POST endpoint (stubbed storage)
  not-found.tsx         # on-brand 404
components/
  brand/                # logo, film grain, glow, "always on shift" element
  taboo/                # Taboo or Not flip-card + grid
  library/              # article card
  sections/             # landing-page sections
  ui/                   # nav, footer, button, container
  motion/               # Reveal (gentle fade-in)
content/
  taboo-cards.ts        # the flip-card data — edit here
  articles/*.mdx        # the articles — add/edit here
lib/
  types.ts              # shared types + the 5 article categories
  content.ts            # typed MDX loader
  waitlist.ts           # email validation + storage stub
```

## Editing content (no code required)

**Add a "Taboo or Not" card:** open `content/taboo-cards.ts` and add an object with a
unique `id`, the `myth`, the `truth`, and a one-line `science` note.

**Add an article:** drop a new `.mdx` file in `content/articles/`. The filename becomes
the URL slug. Start it with a `metadata` export, then write the body in Markdown/MDX:

```mdx
export const metadata = {
  title: "Your Title",
  category: "Sleep & Body", // must be one of the 5 categories in lib/types.ts
  excerpt: "One-sentence summary for the cards.",
  date: "2026-06-10",        // ISO date, used for sorting (newest first)
  readingTime: "5 min",      // optional
};

Your article body goes here. **Markdown** works, and so do React components.
```

The five categories (and their display order) are defined in `lib/types.ts`
(`ARTICLE_CATEGORIES`). Add a new one there if you need it.

## Design language

The whole site aims for the feeling of **a single desk lamp lit at 3am**: midnight-indigo
base, moonlight blue/lavender text, and one warm amber accent used sparingly. All color and
font tokens live in `app/globals.css` (`:root` + the `@theme inline` block). Motion is slow
and gentle, and everything respects `prefers-reduced-motion`.

## Where the later-phase hooks are

- **Waitlist storage (Phase 4):** `lib/waitlist.ts` → `storeSignup()` is a stub that just
  logs. Replace its body with a real email provider (Resend, ConvertKit) or database
  (Supabase/Postgres). The API contract (`POST /api/waitlist { email } -> { ok }`) shouldn't
  need to change.
- **Phase 2 (community):** planned "Night Notes" wall, Resources hub, article reactions.
- **Phase 3 (commerce):** Wellness Kits showcase + B2B employer inquiries.

See `docs/superpowers/specs/` and `docs/superpowers/plans/` for the full design and build
plan.
