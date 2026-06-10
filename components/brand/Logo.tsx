import Link from "next/link";

/**
 * Moonlighters wordmark — a precise crescent mark + the name. No glow; the mark
 * is drawn, not lit. Amber appears only as a thin signal stroke.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Moonlighters home"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        aria-hidden
      >
        <circle cx="12" cy="12" r="9" stroke="var(--color-line-strong)" strokeWidth="1.5" />
        <path
          d="M15.5 12a8 8 0 0 1-6.4 7.84A9 9 0 0 0 9.1 4.16 8 8 0 0 1 15.5 12Z"
          fill="var(--color-amber)"
        />
      </svg>
      <span className="text-[0.95rem] font-semibold tracking-tight text-ink">
        Moonlighters
      </span>
    </Link>
  );
}
