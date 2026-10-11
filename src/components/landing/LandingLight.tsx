import type { CSSProperties, ReactNode } from "react";
import {
  APP_URL,
  BENEFITS,
  buildDemo,
  INSTRUMENT_SANS,
  Logo,
  MARGIN_LINE,
  MARGIN_LOSS_LINE,
  MONO,
  MoonIcon,
  ORDER_FLOW_DOTS,
  ORDER_FLOW_STEPS,
  REGIONS,
  RETURNS_POINTS,
  SETUP_STEPS,
  SIDEBAR_ITEMS,
  SLIP_ITEMS,
  VOLUME_OPTIONS,
  type LandingProps,
  type VarStyle,
} from "./shared";

const tokens: VarStyle = {
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
};

const LIME = "#C6F432";
const INK = "#0E0F0C";

const statCard: CSSProperties = { background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 10, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 4 };
const statLabel: CSSProperties = { fontSize: 13, color: "var(--muted)" };
const statValue: CSSProperties = { fontFamily: MONO, fontSize: 24, fontWeight: 600 };
const tableGrid: CSSProperties = { display: "grid", gridTemplateColumns: "150px 100px minmax(0, 1fr) 130px 90px" };
const pill: CSSProperties = { fontFamily: MONO, fontSize: 12, letterSpacing: "0.1em", padding: "5px 10px", border: "1px solid var(--line2)", borderRadius: 999, background: "var(--card)" };
const benefitVisual: CSSProperties = { height: 200, borderRadius: 12, background: "var(--card)", border: "1px solid var(--line)", boxSizing: "border-box", fontFamily: MONO, fontSize: 12 };
const flowPill: CSSProperties = { fontFamily: MONO, fontSize: 11, letterSpacing: "0.12em", padding: "3px 9px", border: "1px solid var(--line2)", borderRadius: 999, background: "var(--card)" };
const sectionEyebrow: CSSProperties = { fontFamily: MONO, fontSize: 12, letterSpacing: "0.14em", color: "var(--muted)" };
const card: CSSProperties = { background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 14, padding: 34, display: "flex", flexDirection: "column", gap: 22 };
const storeRow: CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderTop: "1px solid var(--line)" };
const carrierBox: CSSProperties = { height: 54, background: "var(--card)", border: "1.5px dashed #A9B09E", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" };
const formLabel: CSSProperties = { fontSize: 14, fontWeight: 500 };
const formField: CSSProperties = { height: 48, padding: "0 14px", background: "var(--card)", border: "1px solid var(--line2)", borderRadius: 8, color: "var(--fg)", fontSize: 16, fontFamily: "inherit" };
const fieldWrap: CSSProperties = { display: "flex", flexDirection: "column", gap: 8 };
const footerLink: CSSProperties = { color: "var(--muted2)" };

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
        {SLIP_ITEMS.map((item) => (
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
          <span style={{ color: "var(--fg)" }}>— keep</span>
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

export default function LandingLight({ tick, onToggleTheme }: LandingProps) {
  const demo = buildDemo(tick, {
    shipped: ["#EAF5C4", "#3E5400"],
    pending: ["#E3E6DB", "#3A3F32"],
    firstRowBg: "#F6FBE3",
    rowBg: "#F4F5EF",
  });

  return (
    <div className="ss-light" style={{ ...tokens, background: "var(--bg)", minWidth: 1440 }}>
      <div style={{ width: 1440, margin: "0 auto", background: "var(--bg)", color: "var(--fg)", fontFamily: INSTRUMENT_SANS, display: "flex", flexDirection: "column" }}>
        <header style={{ height: 84, padding: "0 72px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--line)" }}>
          <Logo />
          <nav style={{ display: "flex", gap: 36, fontSize: 16, fontWeight: 500, color: "var(--muted2)" }}>
            <a href="#how" style={{ color: "var(--muted2)" }}>How it works</a>
            <a href="#support" style={{ color: "var(--muted2)" }}>Channels &amp; carriers</a>
            <a href="#demo" style={{ color: "var(--muted2)" }}>Book a demo</a>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, fontWeight: 500 }}>
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Switch to dark mode"
              title="Switch to dark mode"
              style={{ width: 44, height: 44, padding: 0, borderRadius: 6, background: "var(--surf)", border: "1px solid var(--line2)", color: "var(--fg)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
            >
              <MoonIcon />
            </button>
            <a href={APP_URL} style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 18px", borderRadius: 6, background: "var(--surf)", border: "1px solid var(--line2)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--fg)" }}>
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <path d="M10 17l5-5-5-5" />
                <path d="M15 12H3" />
              </svg>
              Open app
            </a>
            <a href="#demo" style={{ padding: "12px 20px", borderRadius: 6, background: LIME, color: INK }}>
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
            <Highlight padding="0 12px" radius={8}>Order fulfillment on autopilot.</Highlight>
          </h1>
          <p style={{ margin: 0, fontSize: 20, lineHeight: 1.55, maxWidth: 1000, color: "var(--muted2)" }}>
            Ship 10x the orders with the same team. No copying addresses, no buying labels, no chasing tracking numbers. skuspine runs it for every order, autonomously.
          </p>
          <div style={{ display: "flex", gap: 12, fontSize: 17, fontWeight: 600 }}>
            <a href="#demo" style={{ background: LIME, padding: "16px 26px", borderRadius: 8, color: INK }}>
              Book a demo →
            </a>
            <a href="#how" style={{ padding: "16px 26px", borderRadius: 8, background: "var(--surf)", border: "1px solid var(--line2)" }}>
              See how it works
            </a>
          </div>

          {/* Product demo */}
          <div style={{ marginTop: 40, width: 1180, background: "var(--surf)", border: "1px solid var(--line2)", borderRadius: 16, overflow: "hidden", boxShadow: "0 30px 70px rgba(14,15,12,0.14)", textAlign: "left" }}>
            <div style={{ height: 40, padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--line)", fontFamily: MONO, fontSize: 12, color: "var(--muted)" }}>
              <div style={{ display: "flex", gap: 7 }}>
                {[0, 1, 2].map((i) => (
                  <span key={i} style={{ width: 10, height: 10, borderRadius: 5, background: "var(--line2)" }} />
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: 4, background: "var(--olive)", animation: "ssPulse 1.6s ease-in-out infinite" }} />
                product demo · sample data
              </div>
            </div>
            <div style={{ height: 560, display: "flex" }}>
              <div style={{ width: 210, background: "var(--panel)", color: "#C9CFBF", padding: "22px 12px", display: "flex", flexDirection: "column", gap: 4, fontSize: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 8px 18px", marginBottom: 8, borderBottom: "1px solid #2A2E24" }}>
                  <span style={{ fontFamily: MONO, fontSize: 15, fontWeight: 600, color: "#E8EDE0" }}>
                    sku<span style={{ color: LIME }}>spine</span>
                  </span>
                  <span style={{ fontFamily: MONO, fontSize: 10, background: LIME, color: INK, padding: "1px 5px", borderRadius: 3 }}>BETA</span>
                </div>
                <div style={{ padding: "9px 10px", borderRadius: 6, background: LIME, color: INK, fontWeight: 500 }}>Orders</div>
                <div style={{ padding: "9px 10px", display: "flex", justifyContent: "space-between" }}>
                  Exceptions
                  <span style={{ background: "#FFB020", color: "var(--fg)", borderRadius: 4, padding: "0 6px", fontSize: 12 }}>{demo.exceptions}</span>
                </div>
                {[...SIDEBAR_ITEMS, "Stores"].map((item) => (
                  <div key={item} style={{ padding: "9px 10px" }}>
                    {item}
                  </div>
                ))}
              </div>
              <div style={{ flexGrow: 1, background: "var(--bg)", padding: "24px 26px", display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontFamily: MONO, fontSize: 22, fontWeight: 700, background: LIME, padding: "2px 10px", borderRadius: 5, color: INK }}>Today</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 12 }}>
                  <div style={statCard}>
                    <span style={statLabel}>Orders in</span>
                    <span style={statValue}>{demo.ordersIn}</span>
                  </div>
                  <div style={statCard}>
                    <span style={statLabel}>Auto-dispatched</span>
                    <span style={statValue}>{demo.dispatched}</span>
                  </div>
                  <div style={statCard}>
                    <span style={statLabel}>Exceptions</span>
                    <span style={{ ...statValue, color: "var(--warn)" }}>{demo.exceptions}</span>
                  </div>
                  <div style={statCard}>
                    <span style={statLabel}>Margin today</span>
                    <span style={statValue}>
                      <span style={{ background: LIME, padding: "0 6px", borderRadius: 4, color: INK }}>23.8%</span>
                    </span>
                  </div>
                </div>
                <div style={{ background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 10, overflow: "hidden", fontSize: 14 }}>
                  <div style={{ ...tableGrid, padding: "11px 18px", color: "var(--muted)", fontSize: 13 }}>
                    <span>Order</span>
                    <span>Channel</span>
                    <span>Route</span>
                    <span>Status</span>
                    <span style={{ textAlign: "right" }}>Margin</span>
                  </div>
                  {demo.rows.map((row, i) => (
                    <div key={i} style={{ ...tableGrid, padding: "13px 18px", borderTop: "1px solid var(--line)", alignItems: "center", background: row.rowBg }}>
                      <span style={{ fontFamily: MONO }}>{row.id}</span>
                      <span>{row.ch}</span>
                      <span style={{ color: "var(--muted2)" }}>{row.route}</span>
                      <span>
                        <span style={{ background: row.bg, color: row.fg, padding: "3px 9px", borderRadius: 999, fontSize: 12 }}>{row.label}</span>
                      </span>
                      <span style={{ textAlign: "right", fontFamily: MONO }}>{row.margin}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ height: 4, background: "var(--line)" }}>
              <div style={{ height: 4, background: LIME, animation: "ssDemoProgress 14s linear infinite", color: INK }} />
            </div>
          </div>
        </section>

        {/* What you get */}
        <section style={{ padding: "140px 72px 120px", display: "flex", flexDirection: "column", gap: 56 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 48 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ fontSize: 15, color: "var(--muted)" }}>What you get</div>
              <h2 style={{ margin: 0, fontFamily: MONO, fontSize: 48, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1.22 }}>
                What changes when
                <br />
                <Highlight>skuspine runs your back office.</Highlight>
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
                    <h3 style={{ margin: 0, fontSize: 22, fontWeight: 600, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--muted)" }}>{b.body}</p>
                  </div>
                </div>
                <BenefitVisual index={i} />
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" style={{ padding: "120px 64px", background: "var(--surf)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 64 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 48 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ fontSize: 15, color: "var(--muted)" }}>How it works</div>
              <h2 style={{ margin: 0, fontFamily: MONO, fontSize: 46, fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1.24 }}>
                Set it up once.
                <br />
                <Highlight>Then every order runs itself.</Highlight>
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
            <div style={sectionEyebrow}>GETTING STARTED</div>
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
            <div style={sectionEyebrow}>THEN, FOR EVERY ORDER</div>
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
                {["Amazon", "Shopify", "eBay"].map((s) => (
                  <div key={s} style={storeRow}>
                    <span>{s}</span>
                    <span style={{ fontSize: 12, background: LIME, padding: "2px 9px", borderRadius: 999, color: INK }}>live</span>
                  </div>
                ))}
                {["TikTok Shop", "WooCommerce", "Etsy"].map((s) => (
                  <div key={s} style={{ ...storeRow, color: "var(--muted)" }}>
                    <span>{s}</span>
                    <span style={{ fontSize: 12, border: "1px solid var(--line2)", background: "var(--card)", padding: "2px 9px", borderRadius: 999 }}>next</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={card}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ fontSize: 20, fontWeight: 600 }}>Delivery partners</div>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "var(--muted)" }}>One carrier network: rates compared, labels bought and tracking sent back automatically.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10, fontFamily: MONO, fontSize: 14, color: "var(--muted)" }}>
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={i} style={carrierBox}>
                    [carrier]
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.55, color: "var(--muted)" }}>Customs documents generated for every cross-border shipment.</div>
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
                      <Highlight padding="0 6px" radius={4}>{region}</Highlight>
                    </span>
                    <span style={{ fontSize: 14, color: "var(--muted)" }}>{currency}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.55, color: "var(--muted)" }}>Multi-currency margin, tax jurisdictions and customs handled per order.</div>
            </div>
          </div>
        </section>

        {/* Book a demo */}
        <section id="demo" style={{ margin: "0 72px 96px", padding: "88px 72px", background: "var(--panel)", color: "#E8EDE0", borderRadius: 24, display: "grid", gridTemplateColumns: "minmax(0, 1fr) 560px", gap: 64, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ margin: 0, fontFamily: MONO, fontSize: 72, fontWeight: 700, letterSpacing: "-0.06em", lineHeight: 1.1 }}>
              <Highlight padding="0 14px" radius={8}>Book a demo.</Highlight>
            </h2>
            <p style={{ margin: 0, fontSize: 20, lineHeight: 1.5, color: "#C9CFBF", maxWidth: 520 }}>30 minutes. Bring one of your channels and watch your own orders flow through.</p>
          </div>
          <form style={{ background: "var(--surf)", color: "var(--fg)", borderRadius: 16, padding: 36, boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 14 }}>
              <div style={fieldWrap}>
                <label htmlFor="v2-name" style={formLabel}>Full name</label>
                <input id="v2-name" type="text" placeholder="Jane Smith" style={formField} />
              </div>
              <div style={fieldWrap}>
                <label htmlFor="v2-email" style={formLabel}>Work email</label>
                <input id="v2-email" type="email" placeholder="jane@store.com" style={formField} />
              </div>
            </div>
            <div style={fieldWrap}>
              <label htmlFor="v2-store" style={formLabel}>Store or company website</label>
              <input id="v2-store" type="url" placeholder="https://" style={formField} />
            </div>
            <div style={fieldWrap}>
              <label htmlFor="v2-volume" style={formLabel}>Orders per month</label>
              <select id="v2-volume" style={formField}>
                {VOLUME_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <button type="button" style={{ height: 54, marginTop: 4, background: LIME, color: INK, border: 0, borderRadius: 8, fontFamily: "inherit", fontSize: 17, fontWeight: 600, cursor: "pointer" }}>
              Book my demo →
            </button>
          </form>
        </section>

        <footer style={{ flexGrow: 1, margin: "0 72px", padding: "28px 0 44px", borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "flex-start", fontSize: 14, color: "var(--muted)" }}>
          <span style={{ fontFamily: MONO, fontSize: 13 }}>© 2026 skuspine</span>
          <div style={{ display: "flex", gap: 28 }}>
            <a href={APP_URL} style={footerLink}>Open app</a>
            <a href="#" style={footerLink}>Privacy</a>
            <a href="#" style={footerLink}>Terms</a>
            <a href="#" style={footerLink}>[CONTACT EMAIL]</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
