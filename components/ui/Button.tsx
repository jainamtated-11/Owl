import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  // The amber CTA is the single signal — used sparingly.
  primary: "bg-amber text-night hover:bg-amber-deep",
  ghost: "border border-line text-ink hover:border-line-strong hover:text-amber",
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
