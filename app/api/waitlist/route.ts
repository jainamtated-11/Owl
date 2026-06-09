import { NextResponse } from "next/server";
import { isValidEmail, storeSignup } from "@/lib/waitlist";

/**
 * POST /api/waitlist  body: { email: string }
 * Validates the email and hands it to the storage stub. Returns { ok }.
 */
export async function POST(request: Request) {
  let email: unknown;
  try {
    const body = await request.json();
    email = body?.email;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (typeof email !== "string" || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  await storeSignup(email.trim());
  return NextResponse.json({ ok: true });
}
