import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "pill" | "ghost" | "onTeal";

const base =
  "inline-flex items-center justify-center font-[600] text-sm transition-colors duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  // violet = brand / action
  primary: "rounded-md px-5 py-2.5 bg-violet text-night-2 hover:bg-violet-deep",
  // hero CTA: the pill is hero-only (Superhuman rule)
  pill: "rounded-full px-5 py-2.5 bg-violet text-night-2 hover:bg-violet-deep",
  ghost:
    "rounded-md px-5 py-2.5 border border-line-strong text-ink hover:border-violet hover:text-violet",
  // inside the closing teal band
  onTeal:
    "rounded-md px-5 py-2.5 bg-ink text-teal-deep hover:bg-white",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: { children: ReactNode; variant?: Variant } & ComponentProps<"button">) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
