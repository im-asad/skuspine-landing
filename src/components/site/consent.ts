import { cookies } from "next/headers";
import { CONSENT_COOKIE, type Consent } from "./analytics";

/** Saved analytics choice, or null if the visitor hasn't chosen yet. */
export async function getConsent(): Promise<Consent | null> {
  const value = (await cookies()).get(CONSENT_COOKIE)?.value;
  return value === "granted" || value === "denied" ? value : null;
}
