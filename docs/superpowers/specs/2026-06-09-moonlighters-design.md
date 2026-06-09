# Moonlighters — Phase 1 Design

**Date:** 2026-06-09
**Status:** Approved (design); pending implementation plan
**Project folder:** `~/Desktop/PMtoAM/`

---

## 1. Concept

**Brand name:** Moonlighters

A calm, judgment-free platform for people who work while the world sleeps. It educates
night workers about the realities of their lifestyle — sleep, body, mental health,
relationships, rights, safety — and defuses the taboos and stigma around them.

**Strategy:** Education is the MVP. It earns trust and builds an audience cheaply; that
same audience becomes community members and wellness-kit customers in later phases.
Phase 1 ships content + one signature interactive feature, with architectural hooks left
in place for community (Phase 2), commerce (Phase 3), and a real backend (Phase 4).

**Signature feature — "Taboo or Not":** Tappable flip-cards. The front shows a common
stigma night workers face (e.g. "Napping before a shift means you're lazy"). Tapping
flips the card to reveal the truth plus a one-line, science-backed explanation. Turns the
mission into something interactive and shareable instead of a wall of articles.

**Audience:** Nurses, factory/warehouse staff, security guards, drivers, hospitality,
call-center/support workers, new parents — anyone on a nocturnal schedule. They are
tired, often on a phone, and want to feel seen, not lectured.

---

## 2. Design language

The whole site should feel like **a single desk lamp lit at 3am** — calm, nocturnal,
moody, intimate.

- **Palette:** midnight indigo / near-black charcoal base; soft moonlight pale-blue and
  lavender for text and secondary elements; **one warm amber accent** used sparingly for
  CTAs and highlights (the lamp).
- **Typography:** editorial serif for headings (**Fraunces**), clean sans for body
  (**Inter**). Generous line-height, comfortable reading width.
- **Texture:** faint film-grain overlay, soft glows, slow subtle gradients like distant
  city lights.
- **Motion:** slow fades and gentle parallax only — nothing jarring or fast. A "breathing"
  quality. Respects `prefers-reduced-motion`.
- **Quiet touch:** a recurring *"Someone is always on the night shift"* solidarity element
  (a clock/line evoking workers awake across timezones).
- **Accessibility:** high contrast for tired eyes, semantic HTML, keyboard navigable,
  reduced-motion support.

**Logo (Phase 1):** "Moonlighters" wordmark set in Fraunces with a small crescent-moon /
lamp-glow mark. Placeholder, easily swapped later.

---

## 3. Tech stack

- **Next.js (App Router) + TypeScript**
- **Tailwind CSS**, dark-mode-first
- **shadcn/ui** for base components
- **Framer Motion** for subtle animation
- **MDX** for educational content — articles live as `.mdx` files in `/content` so they
  can be edited without touching code; a typed content loader reads them
- **No database in Phase 1** — newsletter/waitlist signups POST to a simple API route with
  a clearly-marked, typed storage stub (TODO to wire a provider in Phase 4)
- **Mobile-first** and fully responsive — the audience is on phones at 3am
- No dependency outside this list is added without asking first

---

## 4. Folder structure

```
PMtoAM/
├─ app/
│  ├─ layout.tsx              # fonts, grain overlay, nav, footer
│  ├─ page.tsx                # landing
│  ├─ library/
│  │  ├─ page.tsx             # article index by category
│  │  └─ [slug]/page.tsx      # individual MDX article page
│  ├─ api/waitlist/route.ts   # POST endpoint + typed storage stub (TODO Phase 4)
│  └─ not-found.tsx           # tasteful 404
├─ components/
│  ├─ brand/                  # logo, grain overlay, glow, "always on shift" element
│  ├─ taboo/                  # flip-card + grid
│  ├─ library/                # article cards, category nav
│  ├─ waitlist/               # validated form + confirmation state
│  └─ ui/                     # shadcn primitives, nav, footer
├─ content/
│  ├─ articles/*.mdx          # 3 placeholder articles
│  └─ taboo-cards.ts          # typed array of myth/truth cards
├─ lib/                       # content loader, types, utils
└─ README.md                  # how to run, how to add articles, where Phase 2/3 hooks live
```

---

## 5. Phase 1 scope (build now)

1. **Landing page** — emotional hero ("For the people who keep the world running while it
   sleeps"), a short mission section, a live preview of the "Taboo or Not" feature, a
   preview of the article library, and an email waitlist signup.
2. **"Taboo or Not" section** — a grid of flip-cards. Front = a stigma/myth; back = the
   truth + a one-line science-backed explanation. Card data in a typed, editable array
   (`content/taboo-cards.ts`). Smooth flip animation, fully tappable on mobile.
3. **Education library** — an index page listing articles by category (Sleep & Body,
   Mental Health, Relationships & Social Life, Your Rights & Money, Staying Safe), plus
   individual article pages rendered from MDX. Includes **3 placeholder articles**.
4. **Waitlist / newsletter** — a validated email capture form that POSTs to an API route.
   Storage stubbed with a clear TODO. Friendly confirmation state.
5. **Global** — responsive nav, footer, the film-grain + glow treatment, the recurring
   "Someone is always on the night shift" solidarity element, and a tasteful 404.

---

## 6. Components (units & responsibilities)

- **Content loader (`lib/`)** — reads MDX articles from `content/articles`, returns typed
  metadata (title, category, slug, excerpt, date). Single source of truth for the library
  index and article pages. Independently testable.
- **Taboo card data (`content/taboo-cards.ts`)** — typed array of `{ id, myth, truth,
  science }`. The flip-card grid renders purely from this; editing the array is the only
  step to add cards.
- **Waitlist API + storage stub** — `app/api/waitlist/route.ts` validates the email and
  calls a typed `storeSignup()` function whose body is a stub with a Phase 4 TODO. Swapping
  the stub for a real provider/DB requires no changes to the form or route contract.
- **Brand/atmosphere components** — grain overlay, glow, logo, and solidarity element are
  isolated so the "look" can evolve without touching page logic.

---

## 7. Error handling & edge cases

- Waitlist form: client + server-side email validation; clear inline error messages;
  disabled/loading state on submit; friendly success state; graceful failure if the API
  errors.
- Article routing: unknown `[slug]` resolves to the tasteful 404.
- Motion: all animation gated behind `prefers-reduced-motion`.
- Empty/edge content states handled (e.g. category with no articles).

---

## 8. Out of scope (later phases — hooks only)

- **Phase 2** — "Night Notes" anonymous wall, Resources hub, article reactions.
- **Phase 3** — Wellness Kits showcase (D2C cards + waitlist), B2B employer inquiry page.
- **Phase 4** — real database (Supabase/Postgres), auth, Stripe checkout, email provider,
  admin/moderation.

The Phase 1 architecture (typed API stubs, content loader, isolated brand layer) is built
so these plug in without rework.

---

## 9. Success criteria

A launchable, beautiful, mobile-first education site that:
- captures emails via a working (stubbed) waitlist,
- presents the "Taboo or Not" feature interactively,
- renders an MDX-backed article library with 3 sample articles,
- feels distinctly "3am desk lamp" — not a generic template,
- is accessible and respects reduced motion,
- ships with a README explaining how to run it and add content.
