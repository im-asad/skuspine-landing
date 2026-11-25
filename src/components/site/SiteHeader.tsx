"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import DemoLink from "./DemoLink";
import { APP_URL, CONTACT_EMAIL, Logo } from "./shared";
import { ThemeToggle } from "./ThemeProvider";

function MenuButton({ label, expanded, onClick, path }: { label: string; expanded?: boolean; onClick: () => void; path: string }) {
  return (
    <button type="button" aria-label={label} aria-expanded={expanded} onClick={onClick} className="menu-button only-tablet-and-mobile">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <path d={path} />
      </svg>
    </button>
  );
}

function AppIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--fg)" }}>
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <path d="M10 17l5-5-5-5" />
      <path d="M15 12H3" />
    </svg>
  );
}

/** Full-screen navigation for tablet and mobile. */
function Menu({ onClose }: { onClose: () => void }) {
  const arrow: ReactNode = <span style={{ color: "var(--muted)" }}>→</span>;
  return (
    <div className="menu only-tablet-and-mobile">
      <header className="site-header">
        <Logo />
        <div className="site-actions">
          <ThemeToggle />
          <MenuButton label="Close menu" onClick={onClose} path="M6 6l12 12M18 6L6 18" />
        </div>
      </header>
      <nav aria-label="Main">
        <Link href="/features" onClick={onClose} className="menu-link">
          Features{arrow}
        </Link>
        <Link href="/how-it-works" onClick={onClose} className="menu-link">
          How it works{arrow}
        </Link>
        <Link href="/integrations" onClick={onClose} className="menu-link">
          Integrations{arrow}
        </Link>
        <DemoLink className="menu-link" onClick={onClose}>
          Book a demo{arrow}
        </DemoLink>
        <div style={{ flexGrow: 1 }} />
        <div className="menu-actions">
          <a href={APP_URL} className="menu-app">
            <AppIcon size={17} className="only-mobile" />
            Open app
          </a>
          <DemoLink className="menu-demo" onClick={onClose}>
            Book a demo →
          </DemoLink>
        </div>
        <a href={`mailto:${CONTACT_EMAIL}`} className="menu-email">
          {CONTACT_EMAIL}
        </a>
      </nav>
    </div>
  );
}

/**
 * The site header: links on desktop, a menu button on tablet and mobile. Styled in site.css.
 * It scales itself, so keep it outside any other desk-frame.
 */
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="desk-frame hero-frame">
        <header className="site-header">
          <Logo />
          <nav className="site-nav only-desktop">
            <Link href="/features">Features</Link>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/integrations">Integrations</Link>
            <DemoLink>Book a demo</DemoLink>
          </nav>
          <div className="site-actions">
            <ThemeToggle />
            <a href={APP_URL} className="site-button only-desktop">
              <AppIcon size={16} />
              Open app
            </a>
            <DemoLink className="site-demo">Book a demo</DemoLink>
            <MenuButton label="Open menu" expanded={menuOpen} onClick={() => setMenuOpen(true)} path="M4 7h16M4 12h16M4 17h16" />
          </div>
        </header>
      </div>
      {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
    </>
  );
}

/** The simpler header of the legal pages. */
export function LegalHeader() {
  return (
    <header className="site-header">
      <Logo />
      <div className="site-actions">
        <ThemeToggle />
        <Link href="/" aria-label="Back to skuspine" className="site-button site-back">
          <span>
            ← <span className="site-back-text">Back to skuspine</span>
          </span>
        </Link>
      </div>
    </header>
  );
}
