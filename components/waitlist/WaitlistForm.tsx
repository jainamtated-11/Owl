"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { isValidEmail } from "@/lib/waitlist";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Email capture form. Validates client-side, POSTs to /api/waitlist, and shows
 * loading / success / error states. On success it swaps to a warm confirmation.
 */
export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

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
      <div className="rounded-2xl border border-amber/30 bg-charcoal p-6 text-center">
        <p className="font-serif text-xl text-moonlight">You&apos;re on the list.</p>
        <p className="mt-2 text-sm text-lavender">
          We&apos;ll reach out when there&apos;s something worth your while —
          never spam, never at the wrong hour.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-3 sm:flex-row"
    >
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
        className="w-full flex-1 rounded-full border border-border-soft bg-surface/70 px-5 py-2.5 text-sm text-moonlight placeholder:text-muted focus-visible:border-amber/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/40"
      />
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Joining…" : "Join the waitlist"}
      </Button>
      {message ? (
        <p
          role="alert"
          className="basis-full text-sm text-amber-soft sm:order-last"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
