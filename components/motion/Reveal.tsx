"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Slow, gentle fade-and-rise as content enters the viewport. Deliberately
 * understated — the brand motion is "breathing," never jarring. Users with
 * prefers-reduced-motion get the content with no transform (handled by the
 * global CSS rule that zeroes durations).
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
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
