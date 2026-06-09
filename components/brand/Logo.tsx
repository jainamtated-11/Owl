import Link from "next/link";

/**
 * Moonlighters wordmark — Fraunces serif with a small crescent-moon / lamp-glow
 * mark. Placeholder logo for Phase 1; swap freely later.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2 ${className}`}
      aria-label="Moonlighters home"
    >
      <span className="relative inline-flex h-6 w-6 items-center justify-center">
        {/* crescent with a soft amber glow, like a small lamp */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-amber/30 blur-md transition-opacity duration-700 group-hover:opacity-100 opacity-70"
        />
        <svg
          viewBox="0 0 24 24"
          className="relative h-5 w-5 text-amber"
          fill="currentColor"
          aria-hidden
        >
          <path d="M16.5 12a8 8 0 1 1-7.3-7.97 6.5 6.5 0 1 0 7.3 7.97Z" />
        </svg>
      </span>
      <span className="font-serif text-lg tracking-tight text-moonlight">
        Moonlighters
      </span>
    </Link>
  );
}
