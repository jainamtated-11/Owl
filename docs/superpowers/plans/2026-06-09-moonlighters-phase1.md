# Moonlighters Phase 1 Implementation Plan

> **For agentic workers:** Steps use checkbox (`- [ ]`) syntax for tracking. Build top to
> bottom; run the dev server / build after each task to verify before committing.

**Goal:** Ship a launchable, mobile-first "3am desk lamp" education site for night shift
workers — landing page, "Taboo or Not" flip-cards, MDX article library, and a stubbed
waitlist.

**Architecture:** Next.js App Router + TypeScript. Content (taboo cards, MDX articles)
lives in `/content` and is read through typed loaders so it can be edited without touching
code. The waitlist POSTs to an API route whose storage is a typed stub (Phase 4 hook).
Brand/atmosphere (grain, glow, fonts) is isolated in a layout + brand components so the
look can evolve independently.

**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Framer Motion,
MDX (`next-mdx-remote` or `@next/mdx`), Fraunces + Inter via `next/font`.

---

### Task 1: Scaffold the Next.js app

**Files:**
- Create: project at `~/Desktop/PMtoAM/` (Next.js App Router, TS, Tailwind, ESLint)

- [ ] **Step 1:** Run `create-next-app` into the existing folder (keep the `docs/` dir).
  ```bash
  cd ~/Desktop/PMtoAM
  npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir=false --import-alias "@/*" --no-turbopack
  ```
- [ ] **Step 2:** Start dev server, confirm default page renders at localhost:3000.
- [ ] **Step 3:** Commit: `chore: scaffold Next.js app`.

---

### Task 2: Design tokens, fonts, and base layout (the "3am" look)

**Files:**
- Modify: `app/layout.tsx` (Fraunces + Inter via `next/font`, metadata, nav, footer, grain)
- Modify: `app/globals.css` (palette CSS vars, base dark theme, reading width)
- Create: `tailwind.config.ts` colors (midnight, charcoal, moonlight, lavender, amber)
- Create: `components/brand/Grain.tsx`, `components/brand/Glow.tsx`

- [ ] **Step 1:** Define palette as Tailwind theme tokens + CSS vars; set dark-first body bg.
- [ ] **Step 2:** Wire Fraunces (headings) and Inter (body) through `next/font/google`.
- [ ] **Step 3:** Add a fixed, low-opacity film-grain overlay component and a soft radial glow.
- [ ] **Step 4:** Set site `metadata` (title "Moonlighters", description, OG basics).
- [ ] **Step 5:** Verify look in browser; commit: `feat: base nocturnal theme + fonts`.

---

### Task 3: Global nav, footer, and "always on shift" element

**Files:**
- Create: `components/ui/SiteNav.tsx`, `components/ui/SiteFooter.tsx`
- Create: `components/brand/AlwaysOnShift.tsx` (live clock + solidarity line)
- Modify: `app/layout.tsx` (mount nav/footer)

- [ ] **Step 1:** Responsive nav (logo wordmark + crescent mark, links: Taboo, Library, Waitlist).
- [ ] **Step 2:** Footer with brand line + the recurring "Someone is always on the night shift".
- [ ] **Step 3:** `AlwaysOnShift` shows a ticking clock; gate animation on `prefers-reduced-motion`.
- [ ] **Step 4:** Verify mobile + desktop; commit: `feat: nav, footer, solidarity element`.

---

### Task 4: "Taboo or Not" data + flip-card grid

**Files:**
- Create: `content/taboo-cards.ts` (typed array: `{ id, myth, truth, science }`)
- Create: `lib/types.ts` (`TabooCard` type)
- Create: `components/taboo/TabooCard.tsx`, `components/taboo/TabooGrid.tsx`

- [ ] **Step 1:** Define `TabooCard` type and seed 6 cards in `content/taboo-cards.ts`.
- [ ] **Step 2:** Build `TabooCard` — front = myth, tap/click flips to truth + science.
      Use Framer Motion 3D flip; full keyboard + tap support; reduced-motion fallback.
- [ ] **Step 3:** `TabooGrid` renders all cards responsively (1 col mobile → 3 col desktop).
- [ ] **Step 4:** Verify flip works on touch + keyboard; commit: `feat: Taboo or Not cards`.

---

### Task 5: MDX content loader (with tests)

**Files:**
- Create: `content/articles/sleep-debt.mdx`, `relationships-night-shift.mdx`, `know-your-rights.mdx`
- Create: `lib/content.ts` (typed loader: `getAllArticles()`, `getArticleBySlug()`)
- Create: `lib/content.test.ts`

- [ ] **Step 1:** Write failing tests: `getAllArticles()` returns 3 typed entries sorted by
      date; `getArticleBySlug('sleep-debt')` returns matching frontmatter; unknown slug → null.
- [ ] **Step 2:** Run tests, confirm they fail.
- [ ] **Step 3:** Implement loader reading `content/articles/*.mdx` frontmatter
      (`title, category, excerpt, date, slug`). Configure MDX rendering.
- [ ] **Step 4:** Write the 3 placeholder articles with the 5 categories represented.
- [ ] **Step 5:** Run tests, confirm pass; commit: `feat: typed MDX content loader + articles`.

---

### Task 6: Education library (index + article pages)

**Files:**
- Create: `app/library/page.tsx` (index grouped by category)
- Create: `app/library/[slug]/page.tsx` (renders MDX; 404 on unknown slug)
- Create: `components/library/ArticleCard.tsx`, `components/library/CategoryNav.tsx`

- [ ] **Step 1:** Index lists articles grouped under the 5 categories using the loader.
- [ ] **Step 2:** `[slug]` page renders MDX with editorial type + comfortable reading width.
- [ ] **Step 3:** Unknown slug calls `notFound()`; empty category renders gracefully.
- [ ] **Step 4:** Verify routing + reading view; commit: `feat: education library`.

---

### Task 7: Waitlist API + form (with validation tests)

**Files:**
- Create: `app/api/waitlist/route.ts` (POST; validates; calls `storeSignup` stub)
- Create: `lib/waitlist.ts` (`isValidEmail`, `storeSignup` typed stub w/ Phase 4 TODO)
- Create: `lib/waitlist.test.ts`
- Create: `components/waitlist/WaitlistForm.tsx` (validated, loading, success, error states)

- [ ] **Step 1:** Write failing tests for `isValidEmail` (valid/invalid cases).
- [ ] **Step 2:** Run tests, confirm fail.
- [ ] **Step 3:** Implement `isValidEmail` + `storeSignup` stub (logs + clear `// TODO Phase 4`).
- [ ] **Step 4:** Run tests, confirm pass.
- [ ] **Step 5:** API route: validate body, 400 on bad email, 200 + friendly JSON on success.
- [ ] **Step 6:** `WaitlistForm` — client validation, disabled/loading submit, success state, error.
- [ ] **Step 7:** Verify submit happy + error paths; commit: `feat: waitlist API + form`.

---

### Task 8: Landing page assembly

**Files:**
- Modify: `app/page.tsx`
- Create: `components/sections/Hero.tsx`, `Mission.tsx`, `TabooPreview.tsx`, `LibraryPreview.tsx`

- [ ] **Step 1:** Hero: "For the people who keep the world running while it sleeps" + amber CTA.
- [ ] **Step 2:** Short mission section; slow fade-in (reduced-motion safe).
- [ ] **Step 3:** `TabooPreview` shows 3 cards from the grid; `LibraryPreview` shows 3 articles.
- [ ] **Step 4:** Embed `WaitlistForm` near the bottom.
- [ ] **Step 5:** Verify full scroll on mobile + desktop; commit: `feat: landing page`.

---

### Task 9: 404 page + polish pass

**Files:**
- Create: `app/not-found.tsx`
- Modify: brand/motion details as needed

- [ ] **Step 1:** Tasteful on-brand 404 ("This page is off the clock") with link home.
- [ ] **Step 2:** Audit: contrast, keyboard nav, `prefers-reduced-motion`, mobile spacing.
- [ ] **Step 3:** Commit: `feat: 404 + accessibility/polish pass`.

---

### Task 10: README + Phase 2/3 hooks documentation

**Files:**
- Create: `README.md`

- [ ] **Step 1:** Document: how to run (`npm run dev`), how to add a taboo card, how to add
      an MDX article, where the waitlist storage stub + Phase 2/3/4 hooks live.
- [ ] **Step 2:** Run `npm run build` to confirm a clean production build.
- [ ] **Step 3:** Commit: `docs: README + phase hooks`.

---

## Self-review notes
- Spec coverage: landing (T8), Taboo or Not (T4), library + MDX (T5/T6), waitlist (T7),
  global nav/footer/grain/solidarity (T2/T3), 404 (T9), README/hooks (T10) — all covered.
- Tests applied where logic exists (content loader T5, email validation T7); visual
  components verified via dev server/build rather than forced unit tests.
- Type `TabooCard` (T4) and loader signatures (T5) referenced consistently downstream.
