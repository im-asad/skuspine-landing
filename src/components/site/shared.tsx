import Link from "next/link";
import type { CSSProperties } from "react";
import CookieSettingsButton from "./CookieSettingsButton";
import "./site.css";

export type Theme = "light" | "dark";

export const APP_URL = "https://app.skuspine.com/";
export const CONTACT_EMAIL = "getintouch@skuspine.com";
export const CALENDLY_URL = "https://calendly.com/skuspine/30min";

export const MONO = "var(--font-plex-mono), 'IBM Plex Mono', monospace";
export const SANS = "var(--font-instrument-sans), 'Instrument Sans', system-ui, sans-serif";

export const LIME = "#C6F432";
export const INK = "#0E0F0C";

/** Style object that also accepts CSS custom properties (e.g. `--bg`). */
type VarStyle = CSSProperties & Record<`--${string}`, string>;

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

/** Logo lockup. Its size follows the screen; see site.css. */
export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="skuspine home">
      <svg viewBox="0 0 64 64" aria-hidden="true">
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
      <span>
        sku<span style={{ color: LIME }}>spine</span>
      </span>
    </Link>
  );
}

/** The footer on every page. Only tablet and mobile show "Open app" when `openAppOnDesktop` is false. Styled in site.css. */
export function Footer({ openAppOnDesktop = true }: { openAppOnDesktop?: boolean }) {
  const link: CSSProperties = { color: "var(--muted2)" };
  return (
    <footer className="site-footer">
      <div className="site-footer-links">
        <a href={APP_URL} style={link} className={openAppOnDesktop ? undefined : "only-tablet-and-mobile"}>
          Open app
        </a>
        <Link href="/privacy" style={link}>
          Privacy policy
        </Link>
        <Link href="/terms" style={link}>
          Terms of service
        </Link>
        <CookieSettingsButton style={link} />
      </div>
      <a href={`mailto:${CONTACT_EMAIL}`} className="site-footer-email">
        {CONTACT_EMAIL}
      </a>
      <span className="site-footer-copy">© 2026 skuspine</span>
    </footer>
  );
}
