import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Footer, MONO } from "./shared";
import { LegalHeader } from "./SiteHeader";

type LegalPageProps = {
  title: string;
  intro: string;
  toc: [id: string, label: string][];
  seeAlso: { href: string; label: string };
  children: ReactNode;
};

/** One numbered section of a legal page. Spacing switches at the tablet breakpoint via the legal-* classes. */
export function LegalSection({ id, n, title, children }: { id: string; n: number; title: string; children: ReactNode }) {
  return (
    <section id={id} className="legal-section">
      <h2>
        <span className="legal-badge">{String(n).padStart(2, "0")}</span>
        <span>{title}</span>
      </h2>
      <div className="legal-copy">{children}</div>
    </section>
  );
}

export const P = ({ children }: { children: ReactNode }) => <p style={{ margin: 0 }}>{children}</p>;

export const List = ({ items }: { items: ReactNode[] }) => (
  <ul className="legal-list">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const number = (i: number) => String(i + 1).padStart(2, "0");
const tocHeading: CSSProperties = { fontFamily: MONO, fontSize: 12, letterSpacing: "0.1em", color: "var(--muted)" };

/** Table-of-contents link used by the tablet and mobile layouts. */
function TocLinkTablet({ id, label, i }: { id: string; label: string; i: number }) {
  return (
    <a href={`#${id}`} style={{ display: "flex", gap: 12, padding: "9px 0", borderTop: "1px solid var(--line)", fontSize: 15, color: "var(--muted2)" }}>
      <span style={{ fontFamily: MONO, fontSize: 12, color: "var(--muted)", width: 22, flexShrink: 0, paddingTop: 2 }}>{number(i)}</span>
      {label}
    </a>
  );
}

export default function LegalPage({ title, intro, toc, seeAlso, children }: LegalPageProps) {
  const half = Math.ceil(toc.length / 2);
  return (
    <div className="desk-frame legal-frame">
      <LegalHeader />

      <section className="legal-hero">
        <div className="legal-meta">
          <span className="legal-tag">Legal</span>
          Last updated: October 2026
        </div>
        <h1>
          <span className="legal-title">{title}</span>
        </h1>
        <p>{intro}</p>
      </section>

      <div className="legal-body">
        <nav className="only-desktop" aria-label="On this page" style={{ display: "flex", flexDirection: "column", padding: 24, background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 14 }}>
          <div style={{ ...tocHeading, marginBottom: 10 }}>ON THIS PAGE</div>
          {toc.map(([id, label], i) => (
            <a key={id} href={`#${id}`} style={{ display: "flex", gap: 12, padding: "7px 0", color: "var(--muted2)", fontSize: 14, lineHeight: 1.4 }}>
              <span style={{ fontFamily: MONO, fontSize: 12, color: "var(--muted)", width: 22, flexShrink: 0, paddingTop: 1 }}>{number(i)}</span>
              <span>{label}</span>
            </a>
          ))}
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--line)", fontSize: 14, color: "var(--muted)" }}>
            See also:{" "}
            <Link href={seeAlso.href} style={{ color: "var(--fg)", textDecoration: "underline" }}>
              {seeAlso.label}
            </Link>
          </div>
        </nav>
        <div className="only-tablet" style={{ padding: "32px 40px 0" }}>
          <nav aria-label="On this page" style={{ background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 24px 14px" }}>
            <div style={{ ...tocHeading, marginBottom: 8 }}>ON THIS PAGE</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "0 28px" }}>
              {[toc.slice(0, half), toc.slice(half)].map((column, c) => (
                <div key={c}>
                  {column.map(([id, label], i) => (
                    <TocLinkTablet key={id} id={id} label={label} i={c * half + i} />
                  ))}
                </div>
              ))}
            </div>
          </nav>
        </div>
        <div className="only-mobile" style={{ padding: "20px 20px 0" }}>
          <details style={{ background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 12, padding: "0 18px" }}>
            <summary style={{ listStyle: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", fontFamily: MONO, fontSize: 13, letterSpacing: "0.08em", fontWeight: 600 }}>
              ON THIS PAGE · {toc.length} SECTIONS<span style={{ fontSize: 16 }}>▾</span>
            </summary>
            <div style={{ display: "flex", flexDirection: "column", paddingBottom: 10 }}>
              {toc.map(([id, label], i) => (
                <TocLinkTablet key={id} id={id} label={label} i={i} />
              ))}
            </div>
          </details>
        </div>
        <article className="lg legal-article">
          {children}
          <div className="legal-seealso only-tablet-and-mobile">
            See also: <Link href={seeAlso.href}>{seeAlso.label}</Link>
          </div>
        </article>
      </div>

      <Footer openAppOnDesktop={false} />
    </div>
  );
}
