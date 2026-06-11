"use client";

import { useEffect, useState } from "react";
import { ShaderAnimation } from "@/components/ui/shader-animation";

type Phase = "shader" | "hidden";

const SHADER_MS = 3200; // how long the animation + wordmark holds
const FADE_MS = 750; // fade from the intro straight into the site

function webglAvailable() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl") || c.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

/**
 * First-open intro: the shader animation with the Moonlighters wordmark
 * centered, which then fades directly into the site. Shows once per session.
 * Skipped under reduced-motion or without WebGL.
 *
 * Rendered on the server as a covering black screen so the site never flashes
 * underneath before the intro takes over.
 */
export function IntroOverlay() {
  const [phase, setPhase] = useState<Phase>("shader");
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("ml_intro_seen");
    if (seen || reduce || !webglAvailable()) {
      finish();
      return;
    }
    document.body.style.overflow = "hidden";
    const t1 = window.setTimeout(() => setFading(true), SHADER_MS);
    const t2 = window.setTimeout(finish, SHADER_MS + FADE_MS);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finish() {
    document.body.style.overflow = "";
    try {
      sessionStorage.setItem("ml_intro_seen", "1");
    } catch {}
    setPhase("hidden");
  }

  if (phase === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden bg-black ${
        fading ? "pointer-events-none" : ""
      }`}
      style={{
        opacity: fading ? 0 : 1,
        transition: `opacity ${FADE_MS}ms var(--ease-out-quint)`,
      }}
    >
      <ShaderAnimation />
      {/* scrim keeps the wordmark legible over the animation */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(40% 40% at 50% 50%, rgba(0,0,0,0.6), transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="intro-word text-[clamp(2.5rem,9vw,6rem)] font-[540] tracking-[-0.03em] text-white">
          Moonlighters
        </span>
      </div>
    </div>
  );
}
