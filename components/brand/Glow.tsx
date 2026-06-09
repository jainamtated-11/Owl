/**
 * A soft, warm "lamp" glow you can drop behind a section to evoke the single
 * desk lamp lit at 3am. Decorative only.
 */
export function Glow({
  className = "",
  tone = "amber",
}: {
  className?: string;
  tone?: "amber" | "moon";
}) {
  const color =
    tone === "amber" ? "rgba(244,184,96,0.18)" : "rgba(124,138,214,0.16)";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 rounded-full blur-3xl ${className}`}
      style={{ background: `radial-gradient(circle, ${color}, transparent 70%)` }}
    />
  );
}
