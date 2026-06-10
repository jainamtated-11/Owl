"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { isValidEmail } from "@/lib/waitlist";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Email capture form. Validates client-side, POSTs to /api/waitlist, and shows
 * loading / success / error states. On success it swaps to a confirmation.
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
      <div className="rounded-xl border border-amber/35 bg-night-2 p-6 text-center">
        <p className="text-lg font-semibold text-ink">You&apos;re on the list.</p>
        <p className="mt-2 text-sm text-ink-2">
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
        className="w-full flex-1 rounded-md border border-line bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-muted focus-visible:border-amber focus-visible:outline-none"
      />
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Joining…" : "Join the waitlist"}
      </Button>
      {message ? (
        <p role="alert" className="basis-full text-sm text-amber sm:order-last">
          {message}
        </p>
      ) : null}
    </form>
  );
}
