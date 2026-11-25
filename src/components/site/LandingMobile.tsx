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
import { BenefitVisual, Highlight, Stage, TimelineStep } from "./LandingTablet";
import { APP_URL, CONTACT_EMAIL, FooterMobile, INK, LIME, Logo, MONO } from "./shared";
import { ThemeToggle } from "./ThemeProvider";

const headerButton: CSSProperties = { width: 40, height: 40, padding: 0, borderRadius: 8, background: "var(--surf)", border: "1px solid var(--line2)", color: "var(--fg)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" };
const sectionTitle: CSSProperties = { margin: 0, fontFamily: MONO, fontSize: 30, fontWeight: 700, letterSpacing: "-0.05em" };
const bigButton: CSSProperties = { display: "flex", alignItems: "center", justifyContent: "center", height: 52, borderRadius: 10, fontSize: 16, fontWeight: 600 };
const subHeading: CSSProperties = { display: "flex", alignItems: "flex-start", gap: 10, fontFamily: MONO, fontSize: 17, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.35, color: "var(--fg)" };
const subHeadingNumber: CSSProperties = { flexShrink: 0, background: LIME, color: INK, fontSize: 12, padding: "2px 7px", borderRadius: 4, position: "relative", top: 2 };
const supportCard: CSSProperties = { background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 14, padding: 24, display: "flex", flexDirection: "column", gap: 18 };
const storeRow: CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderTop: "1px solid var(--line)" };
const menuLink: CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", borderBottom: "1px solid var(--line)", fontFamily: MONO, fontSize: 22, fontWeight: 700, letterSpacing: "-0.03em" };

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 style={sectionTitle}>
      <Highlight padding="0 8px" radius={6}>
        {children}
      </Highlight>
    </h2>
  );
}

function SubHeading({ n, children, style }: { n: string; children: ReactNode; style?: CSSProperties }) {
  return (
    <div style={{ ...subHeading, ...style }}>
      <span style={subHeadingNumber}>{n}</span>
      <span>{children}</span>
    </div>
  );
}

/** Full-screen navigation shown when the mobile menu button is pressed. */
function MobileMenu({ onClose, openForm }: { onClose: () => void; openForm: (e: MouseEvent) => void }) {
  const bookDemo = (e: MouseEvent) => {
    onClose();
    openForm(e);
  };
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 40, background: "var(--bg)", display: "flex", flexDirection: "column", overflowY: "auto" }}>
      <header style={{ height: 64, flexShrink: 0, padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--line)", background: "var(--bg)" }}>
        <Logo small />
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <ThemeToggle compact />
          <button type="button" aria-label="Close menu" onClick={onClose} style={headerButton}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </header>
      <nav aria-label="Main" style={{ flexGrow: 1, padding: "12px 20px 32px", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
        <a href="#how-mobile" onClick={onClose} style={menuLink}>
          How it works<span style={{ color: "var(--muted)" }}>→</span>
        </a>
        <a href="#support-mobile" onClick={onClose} style={menuLink}>
          Channels &amp; carriers<span style={{ color: "var(--muted)" }}>→</span>
        </a>
        <a href="#" onClick={bookDemo} style={menuLink}>
          Book a demo<span style={{ color: "var(--muted)" }}>→</span>
        </a>
        <div style={{ flexGrow: 1 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <a href={APP_URL} style={{ ...bigButton, background: "var(--surf)", border: "1px solid var(--line2)", gap: 8 }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--fg)" }}>
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <path d="M10 17l5-5-5-5" />
              <path d="M15 12H3" />
            </svg>
            Open app
          </a>
          <a href="#" onClick={bookDemo} style={{ ...bigButton, background: LIME, color: INK }}>
            Book a demo →
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} style={{ textAlign: "center", paddingTop: 10, fontSize: 14, color: "var(--muted)" }}>
            {CONTACT_EMAIL}
          </a>
        </div>
      </nav>
    </div>
  );
}

export default function LandingMobile({ tick, openForm }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <header style={{ height: 64, flexShrink: 0, padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--line)", background: "var(--bg)" }}>
        <Logo small />
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <ThemeToggle compact />
          <button type="button" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)} style={headerButton}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "40px 20px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 11px 5px 6px", background: "var(--surf)", border: "1px solid var(--line2)", borderRadius: 999, fontSize: 12, color: "var(--muted2)" }}>
          <span style={{ fontFamily: MONO, fontSize: 10, background: LIME, padding: "2px 6px", borderRadius: 999, color: INK }}>BETA</span>
          {EYEBROW}
        </div>
        <h1 style={{ margin: 0, fontFamily: MONO, fontSize: 32, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1.32 }}>
          <Highlight padding="0 8px" radius={7}>
            Order fulfillment
          </Highlight>
          <br />
          <Highlight padding="0 8px" radius={7}>
            on autopilot.
          </Highlight>
        </h1>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--muted2)" }}>
          {SUBHEAD}
        </p>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
          <a href="#" onClick={openForm} style={{ ...bigButton, background: LIME, color: INK }}>
            Book a demo →
          </a>
          <a href="#how-mobile" style={{ ...bigButton, background: "var(--surf)", border: "1px solid var(--line2)" }}>
            See how it works
          </a>
        </div>

        {/* Product demo (plays as a video once one is added) */}
        <HeroMedia tick={tick} style={{ marginTop: 8 }} />
      </section>

      {/* What you get */}
      <section style={{ padding: "64px 20px 56px", display: "flex", flexDirection: "column", gap: 24 }}>
        <SectionHeading>What you get</SectionHeading>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {BENEFITS.map((b, i) => (
            <div key={b.tag} style={{ background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 14, padding: 22, display: "flex", flexDirection: "column", gap: 16 }}>
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
      <section id="how-mobile" style={{ padding: "64px 20px", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
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

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <SubHeading n="01">Getting started: set it up once</SubHeading>
          <div style={{ background: "var(--panel)", borderRadius: 14, overflow: "hidden" }}>
            {SETUP_STEPS.map((s, i) => (
              <div key={s.title} style={{ padding: "16px 18px", display: "flex", gap: 14, borderBottom: i < 3 ? "1px solid #2A2E24" : undefined }}>
                <span style={{ fontFamily: MONO, fontSize: 13, fontWeight: 600, color: LIME, paddingTop: 2 }}>{i + 1}</span>
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <span style={{ fontSize: 16, fontWeight: 600, color: "#E8EDE0" }}>{s.title}</span>
                  <span style={{ fontSize: 13.5, color: "#A9B09E", lineHeight: 1.45 }}>{s.body}</span>
                </div>
              </div>
            ))}
            <div style={{ background: LIME, color: INK, padding: "16px 18px", fontFamily: MONO, fontSize: 15, fontWeight: 600 }}>you&apos;re live →</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <SubHeading n="02" style={{ marginBottom: 22 }}>
            Then skuspine takes over every order, autonomously
          </SubHeading>
          <Stage>ORDER IN</Stage>
          <TimelineStep n={1} {...ORDER_FLOW[0]} />
          <Stage>FULFILMENT</Stage>
          <TimelineStep n={2} {...ORDER_FLOW[1]} />
          <TimelineStep n={3} {...ORDER_FLOW[2]} />
          <TimelineStep n={4} {...ORDER_FLOW[3]} byTeam />
          <Stage>DELIVERY</Stage>
          <TimelineStep n={5} {...ORDER_FLOW[4]} last />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ background: "var(--warnbg)", border: "1.5px dashed var(--warn)", borderRadius: 14, padding: 22, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ fontFamily: MONO, fontSize: 11.5, letterSpacing: "0.1em", color: "var(--warntext)", fontWeight: 600 }}>IF SOMETHING BLOCKS AN ORDER</div>
            <h3 style={{ margin: 0, fontSize: 19, fontWeight: 600 }}>One queue. Your team decides.</h3>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)" }}>
              {EXCEPTIONS_BODY}
            </p>
          </div>
          <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 22, display: "flex", flexDirection: "column", gap: 14 }}>
            <h3 style={{ margin: 0, fontFamily: MONO, fontSize: 11.5, letterSpacing: "0.1em", lineHeight: 1.5, color: "var(--olive)", fontWeight: 600 }}>IF IT COMES BACK · RETURNS AND REFUNDS</h3>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)" }}>{RETURNS_INTRO}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14.5, lineHeight: 1.5 }}>
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
      <section id="support-mobile" style={{ padding: "64px 20px", display: "flex", flexDirection: "column", gap: 24 }}>
        <h2 style={{ ...sectionTitle, lineHeight: 1.4 }}>
          Works where you{" "}
          <Highlight padding="0 8px" radius={6}>
            sell and ship.
          </Highlight>
        </h2>
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
        <div style={supportCard}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 19, fontWeight: 600 }}>Regions</div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--muted)" }}>{REGIONS_BODY}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
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
          <div style={{ fontSize: 14, lineHeight: 1.55, color: "var(--muted)" }}>{REGIONS_NOTE}</div>
        </div>
      </section>

      {/* Replacing your stack */}
      <section style={{ padding: "0 20px 64px" }}>
        <div style={{ background: "var(--panel)", color: "#E8EDE0", borderRadius: 14, padding: 22, display: "flex", flexDirection: "column", gap: 16, fontSize: 15, lineHeight: 1.6 }}>
          <h2 style={{ ...sectionTitle, fontSize: 26, lineHeight: 1.4 }}>
            Replacing{" "}
            <Highlight padding="0 8px" radius={6}>
              your stack
            </Highlight>
          </h2>
          <p style={{ margin: 0, color: "#C9CFBF" }}>{REPLACE_BODY[0]}</p>
          <p style={{ margin: 0, fontWeight: 600 }}>{REPLACE_BODY[1]}</p>
        </div>
      </section>

      <FooterMobile />

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} openForm={openForm} />}
    </div>
  );
}
