"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { isValidEmail } from "@/lib/waitlist";

type Status = "idle" | "submitting" | "success" | "error";
type Tone = "night" | "teal";

const toneStyles = {
  night: {
    input:
      "border-line bg-surface text-ink placeholder:text-muted focus-visible:border-violet",
    success: "border-violet/30 bg-surface",
    successText: "text-ink-2",
    error: "text-violet",
    button: "primary" as const,
  },
  teal: {
    input:
      "border-teal-mid bg-teal-mid/50 text-ink placeholder:text-on-teal-mute focus-visible:border-ink",
    success: "border-teal-mid bg-teal-mid/50",
    successText: "text-on-teal-mute",
    error: "text-ink",
    button: "onTeal" as const,
  },
};

/**
 * Email capture form. Validates client-side, POSTs to /api/waitlist, and shows
 * loading / success / error states. `tone` adapts it to the night surface or
 * the closing teal band.
 */
export function WaitlistForm({ tone = "night" }: { tone?: Tone }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const s = toneStyles[tone];

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("That doesn't look like a valid email — mind checking it?");
      return;
    }

    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("Something went wrong on our end. Please try again in a moment.");
    }
  }

  if (status === "success") {
    return (
      <div className={`rounded-xl border p-6 ${s.success}`}>
        <p className="text-lg font-[540] text-ink">You&apos;re on the list.</p>
        <p className={`mt-2 text-sm ${s.successText}`}>
          We&apos;ll reach out when there&apos;s something worth your while —
          never spam, never at the wrong hour.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        aria-invalid={status === "error"}
        className={`w-full flex-1 rounded-md border px-4 py-2.5 text-sm focus-visible:outline-none ${s.input}`}
      />
      <Button type="submit" variant={s.button} disabled={status === "submitting"}>
        {status === "submitting" ? "Joining…" : "Join the waitlist"}
      </Button>
      {message ? (
        <p role="alert" className={`basis-full text-sm ${s.error} sm:order-last`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
