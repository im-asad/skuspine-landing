import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Footer, INK, LIME, Logo, MONO } from "./shared";
import { ThemeToggle } from "./ThemeProvider";

type LegalPageProps = {
  title: string;
  intro: string;
  toc: [id: string, label: string][];
  seeAlso: { href: string; label: string };
  children: ReactNode;
};

const numberBadge: CSSProperties = { fontSize: 13, fontWeight: 600, background: LIME, color: INK, padding: "2px 7px", borderRadius: 4, position: "relative", top: -3 };

/** One numbered section of a legal page. */
export function LegalSection({ id, n, title, children }: { id: string; n: number; title: string; children: ReactNode }) {
  return (
    <section id={id} style={{ display: "flex", flexDirection: "column", gap: 14, padding: "36px 0", borderTop: "1px solid var(--line)" }}>
      <h2 style={{ margin: 0, display: "flex", alignItems: "baseline", gap: 14, fontFamily: MONO, fontSize: 24, fontWeight: 700, letterSpacing: "-0.03em" }}>
        <span style={numberBadge}>{String(n).padStart(2, "0")}</span>
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 16.5, lineHeight: 1.7, color: "var(--muted2)" }}>{children}</div>
    </section>
  );
}

export const P = ({ children }: { children: ReactNode }) => <p style={{ margin: 0 }}>{children}</p>;

export const List = ({ items }: { items: ReactNode[] }) => (
  <ul style={{ margin: 0, paddingLeft: 22, display: "flex", flexDirection: "column", gap: 8 }}>
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

export default function LegalPage({ title, intro, toc, seeAlso, children }: LegalPageProps) {
  return (
    <>
      <header style={{ height: 84, flexShrink: 0, padding: "0 72px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--line)" }}>
        <Logo href="/" />
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, fontWeight: 500 }}>
          <ThemeToggle />
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 18px", borderRadius: 6, background: "var(--surf)", border: "1px solid var(--line2)" }}>
            ← Back to skuspine
          </Link>
        </div>
      </header>

      <section style={{ padding: "88px 72px 64px", display: "flex", flexDirection: "column", gap: 22, borderBottom: "1px solid var(--line)", background: "var(--surf)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: MONO, fontSize: 13, color: "var(--muted)" }}>
          <span style={{ background: LIME, color: INK, padding: "3px 8px", borderRadius: 4, fontWeight: 600 }}>Legal</span>
          Last updated: October 2026
        </div>
        <h1 style={{ margin: 0, fontFamily: MONO, fontSize: 64, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1.1 }}>
          <span style={{ background: LIME, color: INK, padding: "0 12px", borderRadius: 8 }}>{title}</span>
        </h1>
        <p style={{ margin: 0, maxWidth: 820, fontSize: 19, lineHeight: 1.6, color: "var(--muted2)" }}>{intro}</p>
      </section>

      <div style={{ padding: "40px 72px 96px", display: "grid", gridTemplateColumns: "280px minmax(0, 1fr)", gap: 96, alignItems: "start" }}>
        <nav aria-label="On this page" style={{ display: "flex", flexDirection: "column", padding: 24, background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 14 }}>
          <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.1em", color: "var(--muted)", marginBottom: 10 }}>ON THIS PAGE</div>
          {toc.map(([id, label], i) => (
            <a key={id} href={`#${id}`} style={{ display: "flex", gap: 12, padding: "7px 0", color: "var(--muted2)", fontSize: 14, lineHeight: 1.4 }}>
              <span style={{ fontFamily: MONO, fontSize: 12, color: "var(--muted)", width: 22, flexShrink: 0, paddingTop: 1 }}>{String(i + 1).padStart(2, "0")}</span>
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
        <article className="lg" style={{ maxWidth: 820 }}>
          {children}
        </article>
      </div>

      <Footer showOpenApp={false} />
    </>
  );
}
