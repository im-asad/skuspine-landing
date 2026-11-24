"use client";

import { GoogleTagManager } from "@next/third-parties/google";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { clickLocation, CONSENT_COOKIE, GTM_ID, track, type Consent } from "./analytics";
import { CookieSettingsContext } from "./CookieSettingsButton";
import { APP_URL } from "./shared";

const SIX_MONTHS = 60 * 60 * 24 * 182;

// Both choices look the same, so neither is nudged.
const choice: CSSProperties = { flex: "1 1 0", height: 44, padding: "0 18px", background: "var(--card)", color: "var(--fg)", border: "1px solid var(--line2)", borderRadius: 8, fontFamily: "inherit", fontSize: 15, fontWeight: 600, cursor: "pointer" };

/** Remove Google Analytics cookies, which may be set on this host or any parent domain. */
function clearAnalyticsCookies() {
  const parts = location.hostname.split(".");
  const domains = ["", ...parts.map((_, i) => `; domain=.${parts.slice(i).join(".")}`)];
  for (const pair of document.cookie.split("; ")) {
    const name = pair.split("=")[0];
    if (!name.startsWith("_ga")) continue;
    for (const domain of domains) document.cookie = `${name}=; path=/; max-age=0${domain}`;
  }
}

/** Asks for analytics consent, and loads Google Tag Manager only once it is given. */
export default function CookieConsent({ initialConsent, children }: { initialConsent: Consent | null; children: ReactNode }) {
  const [consent, setConsent] = useState(initialConsent);
  const [open, setOpen] = useState(initialConsent === null);
  const banner = useRef<HTMLElement>(null);

  const reopen = () => {
    setOpen(true);
    requestAnimationFrame(() => banner.current?.focus());
  };

  const choose = (next: Consent) => {
    document.cookie = `${CONSENT_COOKIE}=${next}; path=/; max-age=${SIX_MONTHS}; samesite=lax`;
    setOpen(false);
    if (next === "denied") clearAnalyticsCookies();
    // A script that is already running can't be unloaded, so start again without it.
    if (next === "denied" && consent === "granted") location.reload();
    else setConsent(next);
  };

  // One listener covers every app and email link on the site.
  useEffect(() => {
    const onClick = (e: globalThis.MouseEvent) => {
      const link = e.target instanceof Element ? e.target.closest("a") : null;
      if (!link) return;
      const button_location = clickLocation(link, "page");
      if (link.href.startsWith(APP_URL)) track("login_click", { button_location });
      else if (link.protocol === "mailto:") track("email_click", { button_location });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <CookieSettingsContext.Provider value={reopen}>
      {children}
      {open && (
        <section
          ref={banner}
          tabIndex={-1}
          aria-label="Cookie choices"
          style={{ position: "fixed", zIndex: 30, right: 16, bottom: 16, width: "min(400px, calc(100vw - 32px))", boxSizing: "border-box", padding: 20, display: "flex", flexDirection: "column", gap: 14, background: "var(--surf)", color: "var(--fg)", border: "1px solid var(--line2)", borderRadius: 14, boxShadow: "0 20px 60px rgba(14,15,12,0.25)", outline: "none" }}
        >
          <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, color: "var(--muted2)" }}>
            We&apos;d like to use analytics cookies to understand how the website is used. They stay off unless you accept.{" "}
            <Link href="/privacy#cookies" style={{ color: "var(--fg)", textDecoration: "underline" }}>
              Privacy policy
            </Link>
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <button type="button" onClick={() => choose("denied")} style={choice}>
              Reject
            </button>
            <button type="button" onClick={() => choose("granted")} style={choice}>
              Accept
            </button>
          </div>
        </section>
      )}
      {/* Skipped in development so local testing doesn't count as traffic. */}
      {consent === "granted" && process.env.NODE_ENV === "production" && <GoogleTagManager gtmId={GTM_ID} />}
    </CookieSettingsContext.Provider>
  );
}
