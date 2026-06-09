/**
 * Waitlist helpers. The storage here is a deliberate Phase 1 stub — see the
 * TODO in `storeSignup`. Keeping validation in a pure function makes it trivial
 * to test and reuse on both the client and the server.
 */

/** Conservative email check — good enough for a signup form. */
export function isValidEmail(email: string): boolean {
  const value = email.trim();
  if (value.length < 3 || value.length > 254) return false;
  // Single @, non-empty local part, a dot in the domain, no whitespace.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export interface SignupResult {
  ok: boolean;
}

/**
 * Persist a waitlist signup.
 *
 * TODO (Phase 4): replace this stub with a real integration — e.g. an email
 * provider (Resend, ConvertKit) or a database (Supabase/Postgres). The route
 * contract (POST { email } -> { ok }) should not need to change.
 */
export async function storeSignup(email: string): Promise<SignupResult> {
  // For now we just log on the server so you can see signups during dev.
  console.log(`[waitlist] new signup (stubbed, not persisted): ${email}`);
  return { ok: true };
}
