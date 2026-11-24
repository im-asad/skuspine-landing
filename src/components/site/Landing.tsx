"use client";

import { useEffect, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { clickLocation, track } from "./analytics";
import DemoForm from "./DemoForm";
import HeroMedia from "./HeroMedia";
import { BENEFITS, CARRIERS, COMING_SOON_STORES, LIVE_STORES, REGIONS, RETURNS_POINTS, SETUP_STEPS } from "./landingContent";
import LandingMobile from "./LandingMobile";
import LandingTablet from "./LandingTablet";
import { APP_URL, Footer, INK, LIME, Logo, MONO } from "./shared";
import { ThemeToggle } from "./ThemeProvider";
import { useEngagementTracking } from "./useEngagementTracking";

const ORDER_FLOW_DOTS = [72, 349, 628, 907, 1184];

const ORDER_FLOW_STEPS = [
  { left: 0, width: 200, title: "Order in, stock reserved", body: "The item is held on every channel, so it can't sell twice." },
  { left: 267, width: 220, title: "Best route picked", body: "Your rules choose the warehouse and delivery partner, after comparing rates." },
  { left: 546, width: 220, title: "Label and slip created", body: "Shipping label bought. Pick list and packing slip print in your warehouse." },
  { left: 825, width: 220, title: "Packed and collected", body: "Your team packs from the slip. The delivery partner collects." },
  { left: 1102, width: 210, title: "Tracked to the door", body: "Tracking sent to marketplace and customer. Margin calculated." },
];

const MARGIN_LINE = "0,96 20,92 40,98 60,80 80,84 100,66 120,70 140,48 160,40 172,30";
const MARGIN_LOSS_LINE = "0,70 20,76 40,72 60,88 80,94 100,104 120,100 140,110 160,112 172,114";

const pill: CSSProperties = { fontFamily: MONO, fontSize: 12, letterSpacing: "0.1em", padding: "5px 10px", border: "1px solid var(--line2)", borderRadius: 999, background: "var(--card)" };
const benefitVisual: CSSProperties = { height: 200, borderRadius: 12, background: "var(--card)", border: "1px solid var(--line)", boxSizing: "border-box", fontFamily: MONO, fontSize: 12 };
const flowPill: CSSProperties = { fontFamily: MONO, fontSize: 11, letterSpacing: "0.12em", padding: "3px 9px", border: "1px solid var(--line2)", borderRadius: 999, background: "var(--card)" };
const subHeading: CSSProperties = { display: "flex", alignItems: "center", gap: 12, fontFamily: MONO, fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--fg)" };
const subHeadingNumber: CSSProperties = { background: LIME, color: INK, fontSize: 13, padding: "3px 8px", borderRadius: 4 };
const card: CSSProperties = { background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 14, padding: 34, display: "flex", flexDirection: "column", gap: 22 };
const storeRow: CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderTop: "1px solid var(--line)" };

function Highlight({ children, padding = "0 10px", radius = 6 }: { children: ReactNode; padding?: string; radius?: number }) {
  return <span style={{ background: LIME, padding, borderRadius: radius, color: INK }}>{children}</span>;
}

function BenefitVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div style={{ ...benefitVisual, padding: 20, display: "flex", flexDirection: "column", justifyContent: "center", gap: 18, color: "var(--muted)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span>before · per person</span>
          <div style={{ width: 56, height: 34, background: "repeating-linear-gradient(90deg, #A9B09E 0 4px, transparent 4px 9px)" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ color: "var(--fg)" }}>with skuspine · per person</span>
          <div style={{ width: 150, height: 34, background: "repeating-linear-gradient(90deg, var(--fg) 0 4px, transparent 4px 9px)" }} />
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div style={{ ...benefitVisual, padding: 18, display: "flex", flexDirection: "column", gap: 10 }}>
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
        <div style={{ flexGrow: 1 }} />
        <div style={{ height: 30, background: "repeating-linear-gradient(90deg, var(--fg) 0 2px, transparent 2px 4px, var(--fg) 4px 7px, transparent 7px 9px, var(--fg) 9px 10px, transparent 10px 13px)" }} />
      </div>
    );
  }
  if (index === 2) {
    return (
      <div style={{ ...benefitVisual, padding: 18, display: "flex", flexDirection: "column", gap: 10, color: "var(--muted)" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>margin by sku</span>
          <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--fg)" }}>
            <span style={{ width: 7, height: 7, borderRadius: 4, background: "var(--olive)", animation: "ssPulse 1.6s ease-in-out infinite" }} />
            live
          </span>
        </div>
        <svg width="152" height="110" viewBox="0 0 172 120" aria-hidden="true" style={{ display: "block" }}>
          <line x1="0" y1="30" x2="172" y2="30" strokeWidth="1" style={{ stroke: "var(--grid)" }} />
          <line x1="0" y1="60" x2="172" y2="60" strokeWidth="1" style={{ stroke: "var(--grid)" }} />
          <line x1="0" y1="90" x2="172" y2="90" strokeWidth="1" style={{ stroke: "var(--grid)" }} />
          <polygon points={`${MARGIN_LINE} 172,120 0,120`} fill={LIME} fillOpacity="0.55" />
          <polyline points={MARGIN_LINE} fill="none" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: "var(--fg)" }} />
          <polyline points={MARGIN_LOSS_LINE} fill="none" strokeWidth="2" strokeDasharray="4 4" strokeLinejoin="round" style={{ stroke: "var(--warn)" }} />
        </svg>
        <div style={{ display: "flex", gap: 14 }}>
          <span style={{ color: "var(--fg)" }}>- keep</span>
          <span style={{ color: "var(--warn)" }}>- - fix or drop</span>
        </div>
      </div>
    );
  }
  const rate: CSSProperties = { display: "flex", justifyContent: "space-between", padding: "10px 12px", border: "1px solid var(--line)", borderRadius: 6, color: "var(--muted)" };
  return (
    <div style={{ ...benefitVisual, padding: 18, display: "flex", flexDirection: "column", justifyContent: "center", gap: 10, fontSize: 13 }}>
      <div style={{ fontSize: 12, color: "var(--muted)" }}>rates · order #2093</div>
      <div style={rate}>
        <span>partner A</span>
        <span>$8.20</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", background: LIME, borderRadius: 6, fontWeight: 600, color: INK }}>
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

export type LayoutProps = { tick: number; openForm: (e: MouseEvent) => void };

/** The landing page. Desktop and tablet layouts are both rendered and CSS shows the one that fits the screen. */
export default function Landing() {
  const [tick, setTick] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  useEngagementTracking();

  useEffect(() => {
    const timer = setInterval(() => setTick((t) => t + 1), 1400);
    return () => clearInterval(timer);
  }, []);

  // Section links like /#how point at the desktop sections; on tablet or mobile, jump to the visible copy instead.
  useEffect(() => {
    const id = decodeURIComponent(location.hash.slice(1));
    const target = id && document.getElementById(id);
    if (!target || target.offsetParent !== null) return;
    const visible = [`${id}-tablet`, `${id}-mobile`].map((alt) => document.getElementById(alt)).find((el) => el && el.offsetParent !== null);
    visible?.scrollIntoView();
  }, []);

  const openForm = (e: MouseEvent) => {
    e.preventDefault();
    track("demo_open", { button_location: clickLocation(e.currentTarget, "hero") });
    setFormOpen(true);
  };

  return (
    <>
      <div className="only-desktop">
        <div className="desk-frame">
          <LandingDesktop tick={tick} openForm={openForm} />
        </div>
      </div>
      <div className="only-tablet">
        <LandingTablet tick={tick} openForm={openForm} />
      </div>
      <div className="only-mobile">
        <LandingMobile tick={tick} openForm={openForm} />
      </div>
      {formOpen && <DemoForm onClose={() => setFormOpen(false)} />}
    </>
  );
}

function LandingDesktop({ tick, openForm }: LayoutProps) {

  return (
    <>
      <header style={{ height: 84, padding: "0 72px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--line)" }}>
        <Logo />
        <nav style={{ display: "flex", gap: 36, fontSize: 16, fontWeight: 500, color: "var(--muted2)" }}>
          <a href="#how" style={{ color: "var(--muted2)" }}>
            How it works
          </a>
          <a href="#support" style={{ color: "var(--muted2)" }}>
            Channels &amp; carriers
          </a>
          <a href="#" onClick={openForm} style={{ color: "var(--muted2)" }}>
            Book a demo
          </a>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, fontWeight: 500 }}>
          <ThemeToggle />
          <a href={APP_URL} style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 18px", borderRadius: 6, background: "var(--surf)", border: "1px solid var(--line2)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--fg)" }}>
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <path d="M10 17l5-5-5-5" />
              <path d="M15 12H3" />
            </svg>
            Open app
          </a>
          <a href="#" onClick={openForm} style={{ padding: "12px 20px", borderRadius: 6, background: LIME, color: INK }}>
            Book a demo
          </a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "96px 72px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 28, textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 14px", background: "var(--surf)", border: "1px solid var(--line2)", borderRadius: 999, fontSize: 14, color: "var(--muted2)" }}>
          <span style={{ fontFamily: MONO, fontSize: 12, background: LIME, padding: "2px 7px", borderRadius: 4, color: INK }}>BETA</span>
          For Multi-Channel E-Commerce Businesses
        </div>
        <h1 style={{ margin: 0, fontFamily: MONO, fontSize: 64, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1.16, whiteSpace: "nowrap" }}>
          <Highlight padding="0 12px" radius={8}>
            Order fulfillment on autopilot.
          </Highlight>
        </h1>
        <p style={{ margin: 0, fontSize: 20, lineHeight: 1.55, maxWidth: 1000, color: "var(--muted2)" }}>
          Ship 10x the orders with the same team. No copying addresses, no buying labels, no chasing tracking numbers. skuspine runs it for every order, autonomously.
        </p>
        <div style={{ display: "flex", gap: 12, fontSize: 17, fontWeight: 600 }}>
          <a href="#" onClick={openForm} style={{ background: LIME, padding: "16px 26px", borderRadius: 8, color: INK }}>
            Book a demo →
          </a>
          <a href="#how" style={{ padding: "16px 26px", borderRadius: 8, background: "var(--surf)", border: "1px solid var(--line2)" }}>
            See how it works
          </a>
        </div>

        {/* Product demo (plays as a video once one is added) */}
        <HeroMedia tick={tick} style={{ marginTop: 40 }} />
      </section>

      {/* What you get */}
      <section style={{ padding: "140px 72px 120px", display: "flex", flexDirection: "column", gap: 56 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <h2 style={{ margin: 0, fontFamily: MONO, fontSize: 48, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1.22 }}>
              <Highlight>What you get</Highlight>
            </h2>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 20 }}>
          {BENEFITS.map((b, i) => (
            <div key={b.tag} style={{ background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 16, padding: 40, display: "grid", gridTemplateColumns: "minmax(0, 1fr) 190px", gap: 28, alignItems: "center", minHeight: 340, boxSizing: "border-box" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div style={{ display: "flex" }}>
                  <span style={pill}>{b.tag}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ fontFamily: MONO, fontSize: 28, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.45 }}>
                    <span style={{ background: LIME, padding: "2px 8px", borderRadius: 6, WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone", color: INK }}>{b.headline}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--muted)" }}>{b.body}</p>
                </div>
              </div>
              <BenefitVisual index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" style={{ padding: "120px 64px", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 64 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <h2 style={{ margin: 0, fontFamily: MONO, fontSize: 46, fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1.24 }}>
              <Highlight>How it works</Highlight>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14, color: "var(--muted2)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 14, height: 14, borderRadius: 7, background: LIME, border: `1.5px solid ${INK}`, boxSizing: "border-box", color: INK }} />
              done by skuspine
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 14, height: 14, borderRadius: 7, background: "var(--card)", border: "1.5px solid var(--fg)", boxSizing: "border-box" }} />
              done by your team or delivery partner
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={subHeading}>
            <span style={subHeadingNumber}>01</span>Getting started: set it up once
          </div>
          <div style={{ display: "flex", alignItems: "stretch", background: "var(--panel)", color: "#E8EDE0", borderRadius: 14, overflow: "hidden" }}>
            {SETUP_STEPS.map((s, i) => (
              <div key={s.title} style={{ flex: "1 1 0", padding: "22px 24px", display: "flex", flexDirection: "column", gap: 6, borderRight: i < 3 ? "1px solid #2A2E24" : undefined }}>
                <span style={{ fontFamily: MONO, fontSize: 13, color: LIME, fontWeight: 600 }}>{i + 1}</span>
                <span style={{ fontSize: 17, fontWeight: 600 }}>{s.title}</span>
                <span style={{ fontSize: 14, color: "#A9B09E" }}>{s.body}</span>
              </div>
            ))}
            <div style={{ width: 170, flexShrink: 0, background: LIME, color: INK, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MONO, fontSize: 16, fontWeight: 600 }}>you&apos;re live →</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ ...subHeading, marginBottom: 24 }}>
            <span style={subHeadingNumber}>02</span>Then skuspine takes over every order, autonomously
          </div>
          <div style={{ position: "relative", width: 1312, height: 516 }}>
            <div style={{ position: "absolute", left: 50, top: 0, width: 100, display: "flex", justifyContent: "center" }}>
              <span style={flowPill}>ORDER IN</span>
            </div>
            <div style={{ position: "absolute", left: 377, top: 12, width: 558, height: 1, background: "var(--line2)" }} />
            <div style={{ position: "absolute", left: 576, top: 0, width: 160, display: "flex", justifyContent: "center" }}>
              <span style={flowPill}>FULFILMENT</span>
            </div>
            <div style={{ position: "absolute", left: 1152, top: 0, width: 120, display: "flex", justifyContent: "center" }}>
              <span style={flowPill}>DELIVERY</span>
            </div>

            <div style={{ position: "absolute", left: 100, top: 79, width: 1112, height: 2, background: "var(--fg)" }} />

            {ORDER_FLOW_DOTS.map((left, i) => {
              const byTeam = i === 3;
              return (
                <div
                  key={left}
                  style={{
                    position: "absolute",
                    left,
                    top: 52,
                    width: 56,
                    height: 56,
                    borderRadius: 28,
                    ...(byTeam ? { background: "var(--card)", border: "2px solid var(--fg)" } : { background: LIME, border: `2px solid ${INK}`, color: INK }),
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: MONO,
                    fontSize: 17,
                    fontWeight: 700,
                  }}
                >
                  {i + 1}
                </div>
              );
            })}

            {ORDER_FLOW_STEPS.map((s) => (
              <div key={s.title} style={{ position: "absolute", left: s.left, top: 128, width: s.width, display: "flex", flexDirection: "column", gap: 6, textAlign: "center" }}>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600 }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: "var(--muted)" }}>{s.body}</p>
              </div>
            ))}

            <svg width="1312" height="120" viewBox="0 0 1312 120" aria-hidden="true" style={{ position: "absolute", left: 0, top: 236 }}>
              <path d="M516 6 L516 74" fill="none" strokeWidth="2" strokeDasharray="6 6" style={{ stroke: "var(--warn)" }} />
              <path d="M1212 6 L1212 74" fill="none" strokeWidth="2" strokeDasharray="6 6" style={{ stroke: "var(--fg)" }} />
              <circle cx="516" cy="6" r="5" style={{ fill: "var(--warn)" }} />
              <circle cx="1212" cy="6" r="5" style={{ fill: "var(--fg)" }} />
            </svg>

            <div style={{ position: "absolute", left: 0, top: 310, width: 620, height: 196, boxSizing: "border-box", background: "var(--warnbg)", border: "1.5px dashed var(--warn)", borderRadius: 14, padding: "28px 30px", display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.1em", color: "var(--warntext)", fontWeight: 600 }}>IF SOMETHING BLOCKS AN ORDER</div>
              <h3 style={{ margin: 0, fontSize: 22, fontWeight: 600 }}>One queue. Your team decides.</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--muted2)" }}>
                A wrong address, a delivery partner rejection or a stock conflict lands in one exception queue with everything needed to decide. Once your team makes the call, the order picks up exactly where it stopped.
              </p>
            </div>

            <div style={{ position: "absolute", left: 652, top: 310, width: 660, height: 196, boxSizing: "border-box", background: "var(--card)", border: "1px solid var(--line2)", borderRadius: 14, padding: "28px 30px", display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex" }}>
                <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.1em", fontWeight: 600, background: LIME, padding: "3px 8px", borderRadius: 4, color: INK }}>IF IT COMES BACK · RETURNS AND REFUNDS</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "14px 28px" }}>
                {RETURNS_POINTS.map(([strong, rest]) => (
                  <div key={strong} style={{ display: "flex", gap: 10 }}>
                    <span style={{ fontFamily: MONO, color: "var(--olive)", fontWeight: 600 }}>↺</span>
                    <span style={{ fontSize: 15, lineHeight: 1.5 }}>
                      <strong>{strong}</strong>
                      {rest}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channels & carriers */}
      <section id="support" style={{ padding: "120px 72px", display: "flex", flexDirection: "column", alignItems: "center", gap: 56 }}>
        <h2 style={{ margin: 0, fontFamily: MONO, fontSize: 48, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1.2, textAlign: "center" }}>
          Works where you <Highlight>sell and ship.</Highlight>
        </h2>
        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20 }}>
          <div style={card}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontSize: 20, fontWeight: 600 }}>Stores</div>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "var(--muted)" }}>Orders, stock and prices from every marketplace you sell on.</p>
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
          <div style={card}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontSize: 20, fontWeight: 600 }}>Delivery partners</div>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "var(--muted)" }}>One carrier network: rates compared, labels bought and tracking sent back automatically.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10, fontSize: 14, color: "var(--muted)" }}>
              {CARRIERS.map((c) => (
                <div key={c} style={{ height: 54, background: "var(--card)", border: "1px solid var(--line)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em", color: "var(--fg)" }}>
                  {c}
                </div>
              ))}
            </div>
            <div style={{ fontSize: 15, lineHeight: 1.55, color: "var(--muted)" }}>More carriers available on request. Customs documents generated for every cross-border shipment.</div>
          </div>
          <div style={card}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontSize: 20, fontWeight: 600 }}>Regions</div>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "var(--muted)" }}>Sell and ship across borders, with cost and margin in the right currency.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontFamily: MONO }}>
              {REGIONS.map(([region, currency]) => (
                <div key={region} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", background: "var(--card)", border: "1px solid var(--line)", borderRadius: 10 }}>
                  <span style={{ fontSize: 24, fontWeight: 700 }}>
                    <Highlight padding="0 6px" radius={4}>
                      {region}
                    </Highlight>
                  </span>
                  <span style={{ fontSize: 14, color: "var(--muted)" }}>{currency}</span>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 15, lineHeight: 1.55, color: "var(--muted)" }}>Multi-currency margin, tax jurisdictions and customs handled per order.</div>
          </div>
        </div>
      </section>

      <Footer showOpenApp />
    </>
  );
}
