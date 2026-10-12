import Link from "next/link";
import type { CSSProperties } from "react";

export type Theme = "light" | "dark";

export const APP_URL = "https://app.skuspine.com/";
export const CONTACT_EMAIL = "getintouch@skuspine.com";
export const CALENDLY_URL = "https://calendly.com/skuspine/30min";

export const MONO = "var(--font-plex-mono), 'IBM Plex Mono', monospace";
export const SANS = "var(--font-instrument-sans), 'Instrument Sans', system-ui, sans-serif";

export const LIME = "#C6F432";
export const INK = "#0E0F0C";

/** Style object that also accepts CSS custom properties (e.g. `--bg`). */
export type VarStyle = CSSProperties & Record<`--${string}`, string>;

export const THEME_TOKENS: Record<Theme, VarStyle> = {
  light: {
    "--bg": "#E8ECE1",
    "--surf": "#F4F5EF",
    "--card": "#FFFFFF",
    "--line": "#D5D9CC",
    "--line2": "#C9CFBF",
    "--fg": "#0E0F0C",
    "--muted": "#5B6052",
    "--muted2": "#3A3F32",
    "--olive": "#4F6B00",
    "--grid": "#E3E6DB",
    "--warn": "#C25E00",
    "--warntext": "#9A4A00",
    "--warnbg": "#FFF6E6",
    "--panel": "#0E0F0C",
  },
  dark: {
    "--bg": "#0E0F0C",
    "--surf": "#151711",
    "--card": "#1B1E17",
    "--line": "#2A2E24",
    "--line2": "#3A3F32",
    "--fg": "#E8EDE0",
    "--muted": "#A9B09E",
    "--muted2": "#C9CFBF",
    "--olive": "#C6F432",
    "--grid": "#2A2E24",
    "--warn": "#FFB020",
    "--warntext": "#FFB020",
    "--warnbg": "#221B0E",
    "--panel": "#1B1E17",
  },
};

export function Logo({ href = "#" }: { href?: string }) {
  return (
    <Link
      href={href}
      style={{ display: "flex", alignItems: "center", gap: 7, background: INK, padding: "8px 16px 8px 10px", borderRadius: 8 }}
      aria-label="skuspine home"
    >
      <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true">
        <rect x="4" y="12" width="4" height="40" fill="#E8EDE0" />
        <rect x="11" y="12" width="2" height="40" fill="#E8EDE0" />
        <rect x="16" y="12" width="5" height="40" fill="#E8EDE0" />
        <rect x="24" y="12" width="2" height="40" fill="#E8EDE0" />
        <rect x="29" y="2" width="6" height="60" rx="1" fill={LIME} />
        <rect x="38" y="12" width="2" height="40" fill="#E8EDE0" />
        <rect x="43" y="12" width="5" height="40" fill="#E8EDE0" />
        <rect x="51" y="12" width="2" height="40" fill="#E8EDE0" />
        <rect x="56" y="12" width="4" height="40" fill="#E8EDE0" />
      </svg>
      <span style={{ position: "relative", top: -1, fontFamily: MONO, fontSize: 20, fontWeight: 600, letterSpacing: "-0.04em", color: "#E8EDE0" }}>
        sku<span style={{ color: LIME }}>spine</span>
      </span>
    </Link>
  );
}

/** Shared footer used by the landing and legal pages. */
export function Footer({ showOpenApp }: { showOpenApp: boolean }) {
  const link: CSSProperties = { color: "var(--muted2)" };
  return (
    <footer style={{ flexGrow: 1, margin: "0 72px", padding: "28px 0 44px", borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "flex-start", fontSize: 14, color: "var(--muted)" }}>
      <span style={{ fontFamily: MONO, fontSize: 13 }}>© 2026 skuspine</span>
      <div style={{ display: "flex", gap: 28 }}>
        {showOpenApp && (
          <a href={APP_URL} style={link}>
            Open app
          </a>
        )}
        <Link href="/privacy" style={link}>
          Privacy policy
        </Link>
        <Link href="/terms" style={link}>
          Terms of service
        </Link>
        <a href={`mailto:${CONTACT_EMAIL}`} style={link}>
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  );
}
