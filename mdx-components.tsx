import type { MDXComponents } from "mdx/types";

// Global MDX component overrides. Most article styling is handled by the
// Tailwind `prose` wrapper in app/library/[slug]/page.tsx, so this stays light.
// Add element overrides here (e.g. custom `a`, `img`) if you need them later.
const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return components;
}
