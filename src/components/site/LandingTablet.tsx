"use client";

import { useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import HeroMedia from "./HeroMedia";
import type { LayoutProps } from "./Landing";
import {
  BENEFITS,
  CARRIERS,
  CARRIERS_BODY,
  CARRIERS_NOTE,
  COMING_SOON_STORES,
  EXCEPTIONS_BODY,
  EYEBROW,
  LIVE_STORES,
  ORDER_FLOW,
  REGIONS,
  REGIONS_BODY,
  REGIONS_NOTE,
  REPLACE_BODY,
  RETURNS_INTRO,
  RETURNS_POINTS,
  SETUP_STEPS,
  STORES_BODY,
  SUBHEAD,
} from "./landingContent";
import { APP_URL, CONTACT_EMAIL, FooterTablet, INK, LIME, Logo, MONO } from "./shared";
import { ThemeToggle } from "./ThemeProvider";

const MARGIN_LINE = "0,96 34,92 68,98 101,80 135,84 169,66 203,70 236,48 270,40 290,30";
const MARGIN_LOSS_LINE = "0,70 34,76 68,72 101,88 135,94 169,104 203,100 236,110 270,112 290,114";

const headerButton: CSSProperties = { width: 40, height: 40, padding: 0, borderRadius: 8, background: "var(--surf)", border: "1px solid var(--line2)", color: "var(--fg)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" };
const sectionTitle: CSSProperties = { margin: 0, fontFamily: MONO, fontSize: 40, fontWeight: 700, letterSpacing: "-0.05em" };
const clone: CSSProperties = { WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone" };
const benefitCard: CSSProperties = { background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 14, padding: 22, display: "flex", flexDirection: "column", gap: 16 };
const visual: CSSProperties = { borderRadius: 12, background: "var(--card)", border: "1px solid var(--line)", padding: 18, boxSizing: "border-box", fontFamily: MONO, fontSize: 12, display: "flex", flexDirection: "column" };
const subHeading: CSSProperties = { display: "flex", alignItems: "center", gap: 12, fontFamily: MONO, fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--fg)" };
const subHeadingNumber: CSSProperties = { background: LIME, color: INK, fontSize: 12, padding: "3px 8px", borderRadius: 4 };
const stageRow: CSSProperties = { display: "flex", padding: "0 0 8px 0" };
const stagePill: CSSProperties = { fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.12em", padding: "3px 9px", border: "1px solid var(--line2)", borderRadius: 999, background: "var(--card)" };
const supportCard: CSSProperties = { background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 14, padding: 24, display: "flex", flexDirection: "column", gap: 18 };
const storeRow: CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderTop: "1px solid var(--line)" };
const menuLink: CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "26px 0", borderBottom: "1px solid var(--line)", fontFamily: MONO, fontSize: 30, fontWeight: 700, letterSpacing: "-0.04em" };
const bigButton: CSSProperties = { display: "flex", alignItems: "center", justifyContent: "center", height: 52, borderRadius: 10, fontSize: 16, fontWeight: 600 };

export function Highlight({ children, padding = "0 10px", radius = 7 }: { children: ReactNode; padding?: string; radius?: number }) {
  return <span style={{ background: LIME, color: INK, padding, borderRadius: radius, ...clone }}>{children}</span>;
}

function SectionHeading({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <h2 style={{ ...sectionTitle, ...style }}>
      <Highlight>{children}</Highlight>
    </h2>
  );
}

/** One step on the order timeline. `byTeam` marks steps your team or delivery partner do. */
export function TimelineStep({ n, title, body, last = false, byTeam = false }: { n: number; title: string; body: string; last?: boolean; byTeam?: boolean }) {
  return (
    <div style={{ display: "flex", gap: 14 }}>
      <div style={{ width: 40, flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: 40,
            height: 40,
            flexShrink: 0,
            borderRadius: 20,
            boxSizing: "border-box",
            ...(byTeam ? { background: "var(--card)", border: "2px solid var(--fg)", color: "var(--fg)" } : { background: LIME, border: `1.5px solid ${INK}`, color: INK }),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: MONO,
            fontSize: 15,
            fontWeight: 700,
          }}
        >
          {n}
        </div>
        {!last && <div style={{ flexGrow: 1, width: 2, background: "var(--fg)", margin: "4px 0" }} />}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4, padding: last ? "8px 0 4px" : "8px 0 22px" }}>
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>{title}</h3>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: "var(--muted)" }}>{body}</p>
      </div>
    </div>
  );
}

export function Stage({ children }: { children: ReactNode }) {
  return (
    <div style={stageRow}>
      <span style={stagePill}>{children}</span>
    </div>
  );
}

export function BenefitVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div style={{ ...visual, gap: 14, color: "var(--muted)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span>before · per person</span>
          <div style={{ width: 56, height: 30, background: "repeating-linear-gradient(90deg, #A9B09E 0 4px, transparent 4px 9px)" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ color: "var(--fg)" }}>with skuspine · per person</span>
          <div style={{ width: "100%", height: 30, background: "repeating-linear-gradient(90deg, var(--fg) 0 4px, transparent 4px 9px)" }} />
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div style={{ ...visual, gap: 9 }}>
        <div style={{ display: "flex", justifyContent: "space-between", letterSpacing: "0.1em", color: "var(--muted)" }}>
          <span>PACKING SLIP</span>
          <span>#2093</span>
        </div>
        <div style={{ borderTop: "1.5px dashed #A9B09E" }} />
        {["SKU-1042 ×2", "SKU-2210 ×1", "BUNDLE-07 ×1"].map((item) => (
          <div key={item} style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{item}</span>
            <span style={{ background: LIME, padding: "0 5px", borderRadius: 3, fontWeight: 600, color: INK }}>✓</span>
          </div>
        ))}
        <div style={{ height: 26, marginTop: 6, background: "repeating-linear-gradient(90deg, var(--fg) 0 2px, transparent 2px 4px, var(--fg) 4px 7px, transparent 7px 9px, var(--fg) 9px 10px, transparent 10px 13px)" }} />
      </div>
    );
  }
  if (index === 2) {
    return (
      <div style={{ ...visual, gap: 10, color: "var(--muted)" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>margin by sku</span>
          <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--fg)" }}>
            <span style={{ width: 7, height: 7, borderRadius: 4, background: "var(--olive)", animation: "ssPulse 1.6s ease-in-out infinite" }} />
            live
          </span>
        </div>
        <svg width="100%" height="110" viewBox="0 0 290 120" preserveAspectRatio="none" aria-hidden="true" style={{ display: "block" }}>
          <line x1="0" y1="30" x2="290" y2="30" strokeWidth="1" style={{ stroke: "var(--grid)" }} />
          <line x1="0" y1="60" x2="290" y2="60" strokeWidth="1" style={{ stroke: "var(--grid)" }} />
          <line x1="0" y1="90" x2="290" y2="90" strokeWidth="1" style={{ stroke: "var(--grid)" }} />
          <polygon points={`${MARGIN_LINE} 290,120 0,120`} fill={LIME} fillOpacity="0.55" />
          <polyline points={MARGIN_LINE} fill="none" strokeWidth="2.5" strokeLinejoin="round" style={{ stroke: "var(--fg)" }} />
          <polyline points={MARGIN_LOSS_LINE} fill="none" strokeWidth="2" strokeDasharray="4 4" style={{ stroke: "var(--warn)" }} />
        </svg>
        <div style={{ display: "flex", gap: 14 }}>
          <span style={{ color: "var(--fg)" }}>- keep</span>
          <span style={{ color: "var(--warn)" }}>- - fix or drop</span>
        </div>
      </div>
    );
  }
  const rate: CSSProperties = { display: "flex", justifyContent: "space-between", padding: "9px 12px", borderRadius: 6, border: "1px solid var(--line)", color: "var(--muted)" };
  return (
    <div style={{ ...visual, gap: 8, fontSize: 13 }}>
      <div style={{ fontSize: 12, color: "var(--muted)" }}>rates · order #2093</div>
      <div style={rate}>
        <span>partner A</span>
        <span>$8.20</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "9px 12px", borderRadius: 6, background: LIME, color: INK, fontWeight: 600 }}>
        <span>partner B ✓</span>
        <span>$6.10</span>
      </div>
      <div style={rate}>
        <span>partner C</span>
        <span>$7.45</span>
      </div>
    </div>
  );
}

/** Full-screen navigation shown when the tablet menu button is pressed. */
function TabletMenu({ onClose, openForm }: { onClose: () => void; openForm: (e: MouseEvent) => void }) {
  const bookDemo = (e: MouseEvent) => {
    onClose();
    openForm(e);
  };
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 40, background: "var(--bg)", display: "flex", flexDirection: "column", overflowY: "auto" }}>
      <header style={{ height: 72, flexShrink: 0, padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--line)", background: "var(--bg)" }}>
        <Logo compact />
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <ThemeToggle compact />
          <button type="button" aria-label="Close menu" onClick={onClose} style={headerButton}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </header>
      <nav aria-label="Main" style={{ flexGrow: 1, padding: "24px 40px 48px", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
        <a href="#how-tablet" onClick={onClose} style={menuLink}>
          How it works<span style={{ color: "var(--muted)" }}>→</span>
        </a>
        <a href="#support-tablet" onClick={onClose} style={menuLink}>
          Channels &amp; carriers<span style={{ color: "var(--muted)" }}>→</span>
        </a>
        <a href="#" onClick={bookDemo} style={menuLink}>
          Book a demo<span style={{ color: "var(--muted)" }}>→</span>
        </a>
        <div style={{ flexGrow: 1 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
          <a href={APP_URL} style={{ ...bigButton, background: "var(--surf)", border: "1px solid var(--line2)", gap: 8 }}>
            Open app
          </a>
          <a href="#" onClick={bookDemo} style={{ ...bigButton, background: LIME, color: INK }}>
            Book a demo →
          </a>
        </div>
        <a href={`mailto:${CONTACT_EMAIL}`} style={{ textAlign: "center", paddingTop: 18, fontSize: 15, color: "var(--muted)" }}>
          {CONTACT_EMAIL}
        </a>
      </nav>
    </div>
  );
}

export default function LandingTablet({ tick, openForm }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <header style={{ height: 72, flexShrink: 0, padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--line)", background: "var(--bg)" }}>
        <Logo compact />
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <ThemeToggle compact />
          <a href="#" onClick={openForm} style={{ display: "flex", alignItems: "center", height: 40, padding: "0 16px", borderRadius: 8, background: LIME, color: INK, fontSize: 15, fontWeight: 600 }}>
            Book a demo
          </a>
          <button type="button" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)} style={headerButton}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "64px 40px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: 24, textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "6px 13px 6px 7px", background: "var(--surf)", border: "1px solid var(--line2)", borderRadius: 999, fontSize: 13, color: "var(--muted2)" }}>
          <span style={{ fontFamily: MONO, fontSize: 11, background: LIME, padding: "2px 7px", borderRadius: 999, color: INK }}>BETA</span>
          {EYEBROW}
        </div>
        <h1 style={{ margin: 0, fontFamily: MONO, fontSize: 54, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1.24 }}>
          <Highlight padding="0 12px" radius={9}>
            Order fulfillment
          </Highlight>
          <br />
          <Highlight padding="0 12px" radius={9}>
            on autopilot.
          </Highlight>
        </h1>
        <p style={{ margin: 0, maxWidth: 600, fontSize: 18, lineHeight: 1.6, color: "var(--muted2)" }}>
          {SUBHEAD}
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="#" onClick={openForm} style={{ ...bigButton, background: LIME, color: INK, padding: "0 26px" }}>
            Book a demo →
          </a>
          <a href="#how-tablet" style={{ ...bigButton, background: "var(--surf)", border: "1px solid var(--line2)", padding: "0 24px" }}>
            See how it works
          </a>
        </div>

        {/* Product demo (plays as a video once one is added) */}
        <HeroMedia tick={tick} style={{ marginTop: 12 }} />
      </section>

      {/* What you get */}
      <section style={{ padding: "88px 40px 80px", display: "flex", flexDirection: "column", gap: 32 }}>
        <SectionHeading>What you get</SectionHeading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16, alignItems: "stretch" }}>
          {BENEFITS.map((b, i) => (
            <div key={b.tag} style={benefitCard}>
              <div style={{ display: "flex" }}>
                <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.1em", padding: "4px 9px", border: "1px solid var(--line2)", borderRadius: 999, background: "var(--card)" }}>{b.tag}</span>
              </div>
              <div style={{ fontFamily: MONO, fontSize: 22, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.5 }}>
                <Highlight padding="2px 7px" radius={5}>
                  {b.headline}
                </Highlight>
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--muted)" }}>{b.body}</p>
              <BenefitVisual index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-tablet" style={{ padding: "88px 40px", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 40 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
          <SectionHeading>How it works</SectionHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "var(--muted2)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 13, height: 13, borderRadius: 7, background: LIME, border: `1.5px solid ${INK}`, boxSizing: "border-box" }} />
              done by skuspine
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 13, height: 13, borderRadius: 7, background: "var(--card)", border: "1.5px solid var(--fg)", boxSizing: "border-box" }} />
              done by your team or delivery partner
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={subHeading}>
            <span style={subHeadingNumber}>01</span>Getting started: set it up once
          </div>
          <div style={{ background: "var(--panel)", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              {SETUP_STEPS.map((s, i) => (
                <div
                  key={s.title}
                  style={{ padding: 20, display: "flex", flexDirection: "column", gap: 4, borderRight: i % 2 === 0 ? "1px solid #2A2E24" : undefined, borderBottom: i < 2 ? "1px solid #2A2E24" : undefined }}
                >
                  <span style={{ fontFamily: MONO, fontSize: 13, fontWeight: 600, color: LIME }}>{i + 1}</span>
                  <span style={{ fontSize: 17, fontWeight: 600, color: "#E8EDE0" }}>{s.title}</span>
                  <span style={{ fontSize: 14, color: "#A9B09E", lineHeight: 1.45 }}>{s.body}</span>
                </div>
              ))}
            </div>
            <div style={{ background: LIME, color: INK, padding: "16px 20px", fontFamily: MONO, fontSize: 16, fontWeight: 600 }}>you&apos;re live →</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ ...subHeading, marginBottom: 24 }}>
            <span style={subHeadingNumber}>02</span>Then skuspine takes over every order, autonomously
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "0 32px" }}>
            <div>
              <Stage>ORDER IN</Stage>
              <TimelineStep n={1} {...ORDER_FLOW[0]} />
              <Stage>FULFILMENT</Stage>
              <TimelineStep n={2} {...ORDER_FLOW[1]} />
              <TimelineStep n={3} {...ORDER_FLOW[2]} last />
            </div>
            <div>
              <div style={{ height: 30 }} />
              <TimelineStep n={4} {...ORDER_FLOW[3]} byTeam />
              <Stage>DELIVERY</Stage>
              <TimelineStep n={5} {...ORDER_FLOW[4]} last />
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
          <div style={{ background: "var(--warnbg)", border: "1.5px dashed var(--warn)", borderRadius: 14, padding: 24, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ fontFamily: MONO, fontSize: 11.5, letterSpacing: "0.1em", color: "var(--warntext)", fontWeight: 600 }}>IF SOMETHING BLOCKS AN ORDER</div>
            <h3 style={{ margin: 0, fontSize: 19, fontWeight: 600 }}>One queue. Your team decides.</h3>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)" }}>
              {EXCEPTIONS_BODY}
            </p>
          </div>
          <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
            <h3 style={{ margin: 0, fontFamily: MONO, fontSize: 11.5, letterSpacing: "0.1em", lineHeight: 1.5, color: "var(--olive)", fontWeight: 600 }}>IF IT COMES BACK · RETURNS AND REFUNDS</h3>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)" }}>{RETURNS_INTRO}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14.5, lineHeight: 1.5 }}>
              {RETURNS_POINTS.map(([strong, rest]) => (
                <div key={strong} style={{ display: "flex", gap: 10 }}>
                  <span style={{ fontFamily: MONO, color: "var(--olive)", fontWeight: 600 }}>↺</span>
                  <span>
                    <strong>{strong}</strong>
                    {rest}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Channels & carriers */}
      <section id="support-tablet" style={{ padding: "88px 40px", display: "flex", flexDirection: "column", gap: 32 }}>
        <h2 style={{ ...sectionTitle, lineHeight: 1.3, textAlign: "center" }}>
          Works where you <Highlight>sell and ship.</Highlight>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
          <div style={supportCard}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ fontSize: 19, fontWeight: 600 }}>Stores</div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--muted)" }}>{STORES_BODY}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", fontSize: 16 }}>
              {LIVE_STORES.map((s) => (
                <div key={s} style={storeRow}>
                  <span>{s}</span>
                  <span style={{ fontSize: 12, background: LIME, padding: "2px 9px", borderRadius: 999, color: INK }}>live</span>
                </div>
              ))}
              {COMING_SOON_STORES.map((s) => (
                <div key={s} style={{ ...storeRow, color: "var(--muted)" }}>
                  <span>{s}</span>
                  <span style={{ fontSize: 12, border: "1px solid var(--line2)", background: "var(--card)", padding: "2px 9px", borderRadius: 999 }}>coming soon</span>
                </div>
              ))}
            </div>
          </div>
          <div style={supportCard}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ fontSize: 19, fontWeight: 600 }}>Delivery partners</div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--muted)" }}>{CARRIERS_BODY}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 8 }}>
              {CARRIERS.map((c) => (
                <div key={c} style={{ height: 50, background: "var(--card)", border: "1px solid var(--line)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em", color: "var(--fg)" }}>
                  {c}
                </div>
              ))}
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.55, color: "var(--muted)" }}>{CARRIERS_NOTE}</div>
          </div>
        </div>
        <div style={supportCard}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 19, fontWeight: 600 }}>Regions</div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--muted)" }}>
              {REGIONS_BODY} {REGIONS_NOTE}
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10 }}>
            {REGIONS.map(([region, currency]) => (
              <div key={region} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "var(--card)", border: "1px solid var(--line)", borderRadius: 10 }}>
                <span style={{ fontFamily: MONO, fontSize: 20, fontWeight: 700 }}>
                  <Highlight padding="0 6px" radius={4}>
                    {region}
                  </Highlight>
                </span>
                <span style={{ fontFamily: MONO, fontSize: 13, color: "var(--muted)" }}>{currency}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Replacing your stack */}
      <section style={{ padding: "0 40px 88px" }}>
        <div style={{ background: "var(--panel)", color: "#E8EDE0", borderRadius: 14, padding: 32, display: "flex", flexDirection: "column", gap: 18, fontSize: 16, lineHeight: 1.6 }}>
          <h2 style={{ ...sectionTitle, fontSize: 34, lineHeight: 1.3 }}>
            Replacing <Highlight>your stack</Highlight>
          </h2>
          <p style={{ margin: 0, color: "#C9CFBF" }}>{REPLACE_BODY[0]}</p>
          <p style={{ margin: 0, fontWeight: 600 }}>{REPLACE_BODY[1]}</p>
        </div>
      </section>

      <FooterTablet />

      {menuOpen && <TabletMenu onClose={() => setMenuOpen(false)} openForm={openForm} />}
    </div>
  );
}
