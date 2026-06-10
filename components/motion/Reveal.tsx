import type { CSSProperties, ReactNode } from "react";

/**
 * Entrance wrapper. Content is visible at rest; the `.reveal-enter` class adds a
 * single on-load fade-and-rise (defined in globals.css) that completes
 * regardless of scroll position or JS, and is disabled under reduced motion.
 *
 * Server component on purpose — no client JS, and nothing can ship blank.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const style: CSSProperties =
    delay > 0 ? { animationDelay: `${delay}s` } : {};
  return (
    <div className={`reveal-enter ${className}`} style={style}>
      {children}
    </div>
  );
}
