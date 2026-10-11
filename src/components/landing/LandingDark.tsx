import type { CSSProperties } from "react";
import {
  APP_URL,
  BENEFITS,
  buildDemo,
  Logo,
  MARGIN_LINE,
  MARGIN_LOSS_LINE,
  MONO,
  ORDER_FLOW_DOTS,
  ORDER_FLOW_STEPS,
  PLEX_SANS,
  REGIONS,
  RETURNS_POINTS,
  SETUP_STEPS,
  SIDEBAR_ITEMS,
  SLIP_ITEMS,
  SunIcon,
  VOLUME_OPTIONS,
  type LandingProps,
  type VarStyle,
} from "./shared";

const tokens: VarStyle = {
  "--bg": "#0E0F0C",
  "--surf": "#151711",
  "--card": "#F3F5EE",
  "--line": "#2A2E24",
  "--line2": "#3A3F32",
  "--fg": "#E8EDE0",
  "--muted": "#8A9180",
  "--muted2": "#C9CFBF",
  "--accent": "#C6F432",
  "--warn": "#FFB020",
};

const statCard: CSSProperties = { background: "#FFFFFF", border: "1px solid #E3E7DA", borderRadius: 10, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 4 };
const statLabel: CSSProperties = { fontSize: 13, color: "#565C4B" };
const statValue: CSSProperties = { fontFamily: MONO, fontSize: 26, fontWeight: 600 };
const tableGrid: CSSProperties = { display: "grid", gridTemplateColumns: "150px 100px minmax(0, 1fr) 130px 90px" };
const benefitVisual: CSSProperties = { height: 200, borderRadius: 12, boxSizing: "border-box", fontFamily: MONO, fontSize: 12 };
const flowLabel: CSSProperties = { position: "absolute", top: 0, width: 200, textAlign: "center", fontFamily: MONO, fontSize: 12, letterSpacing: "0.12em", color: "var(--accent)" };
const storeRow: CSSProperties = { display: "flex", justifyContent: "space-between", padding: "13px 0", borderTop: "1px solid #E3E7DA" };
const carrierBox: CSSProperties = { height: 56, border: "1.5px dashed #8A9180", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" };
const formLabel: CSSProperties = { fontFamily: MONO, fontSize: 13, color: "#C9CFBF" };
const formField: CSSProperties = { height: 50, padding: "0 14px", background: "#151711", border: "1px solid #3A3F32", borderRadius: 6, color: "#E8EDE0", fontSize: 16, fontFamily: "inherit" };
const fieldWrap: CSSProperties = { display: "flex", flexDirection: "column", gap: 8 };
const footerLink: CSSProperties = { color: "var(--muted2)" };

function BenefitVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div style={{ ...benefitVisual, background: "var(--bg)", border: "1px solid var(--line)", padding: 20, display: "flex", flexDirection: "column", justifyContent: "center", gap: 18, color: "var(--muted)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span>before · per person</span>
          <div style={{ width: 56, height: 34, background: "repeating-linear-gradient(90deg, var(--muted) 0 4px, transparent 4px 9px)" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ color: "var(--accent)" }}>with skuspine · per person</span>
          <div style={{ width: 150, height: 34, background: "repeating-linear-gradient(90deg, var(--accent) 0 4px, transparent 4px 9px)" }} />
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div style={{ ...benefitVisual, background: "var(--card)", color: "#0E0F0C", padding: 18, display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", letterSpacing: "0.1em", color: "#565C4B" }}>
          <span>PACKING SLIP</span>
          <span>#2093</span>
        </div>
        <div style={{ borderTop: "1.5px dashed #8A9180" }} />
        {SLIP_ITEMS.map((item) => (
          <div key={item} style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{item}</span>
            <span style={{ color: "#4F6B00", fontWeight: 600 }}>✓</span>
          </div>
        ))}
        <div style={{ flexGrow: 1 }} />
        <div style={{ height: 30, background: "repeating-linear-gradient(90deg, #0E0F0C 0 2px, transparent 2px 4px, #0E0F0C 4px 7px, transparent 7px 9px, #0E0F0C 9px 10px, transparent 10px 13px)" }} />
      </div>
    );
  }
  if (index === 2) {
    return (
      <div style={{ ...benefitVisual, background: "var(--bg)", border: "1px solid var(--line)", padding: 18, display: "flex", flexDirection: "column", gap: 10, color: "var(--muted)" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>margin by sku</span>
          <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--accent)" }}>
            <span style={{ width: 7, height: 7, borderRadius: 4, background: "#C6F432", animation: "ssPulse 1.6s ease-in-out infinite" }} />
            live
          </span>
        </div>
        <svg width="152" height="110" viewBox="0 0 172 120" aria-hidden="true" style={{ display: "block" }}>
          <line x1="0" y1="30" x2="172" y2="30" strokeWidth="1" style={{ stroke: "var(--line)" }} />
          <line x1="0" y1="60" x2="172" y2="60" strokeWidth="1" style={{ stroke: "var(--line)" }} />
          <line x1="0" y1="90" x2="172" y2="90" strokeWidth="1" style={{ stroke: "var(--line)" }} />
          <polyline points={MARGIN_LINE} fill="none" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: "var(--accent)" }} />
          <polyline points={MARGIN_LOSS_LINE} fill="none" strokeWidth="2" strokeDasharray="4 4" strokeLinejoin="round" style={{ stroke: "var(--warn)" }} />
          <circle cx="172" cy="30" r="4" style={{ fill: "var(--accent)" }} />
        </svg>
        <div style={{ display: "flex", gap: 14 }}>
          <span style={{ color: "var(--accent)" }}>— keep</span>
          <span style={{ color: "var(--warn)" }}>- - fix or drop</span>
        </div>
      </div>
    );
  }
  const rate: CSSProperties = { display: "flex", justifyContent: "space-between", padding: "10px 12px", border: "1px solid var(--line)", borderRadius: 6, color: "var(--muted)" };
  return (
    <div style={{ ...benefitVisual, background: "var(--bg)", border: "1px solid var(--line)", padding: 18, display: "flex", flexDirection: "column", justifyContent: "center", gap: 10, fontSize: 13 }}>
      <div style={{ fontSize: 12, color: "var(--muted)" }}>rates · order #2093</div>
      <div style={rate}>
        <span>partner A</span>
        <span>$8.20</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", background: "#C6F432", color: "#0E0F0C", borderRadius: 6, fontWeight: 600 }}>
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

export default function LandingDark({ tick, onToggleTheme }: LandingProps) {
  const demo = buildDemo(tick, {
    shipped: ["#EEF7D0", "#3E5400"],
    pending: ["#E3E7DA", "#3A3F32"],
    firstRowBg: "#FBFDF1",
    rowBg: "#FFFFFF",
  });

  return (
    <div className="ss-dark" style={{ ...tokens, background: "var(--bg)", minWidth: 1440 }}>
      <div style={{ width: 1440, margin: "0 auto", background: "var(--bg)", color: "var(--fg)", fontFamily: PLEX_SANS, display: "flex", flexDirection: "column" }}>
        {/* Hero */}
        <section style={{ background: "linear-gradient(#C6F432 0, #C6F432 74%, var(--bg) 74%)", color: "#0E0F0C", paddingBottom: 0 }}>
          <header style={{ height: 88, padding: "0 72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Logo />
            <nav style={{ display: "flex", gap: 36, fontFamily: MONO, fontSize: 15, fontWeight: 500 }}>
              <a href="#how">how it works</a>
              <a href="#support">channels &amp; carriers</a>
              <a href="#demo">book a demo</a>
            </nav>
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: MONO, fontSize: 15, fontWeight: 600 }}>
              <button
                type="button"
                onClick={onToggleTheme}
                aria-label="Switch to light mode"
                title="Switch to light mode"
                style={{ width: 46, height: 46, padding: 0, borderRadius: 4, background: "transparent", border: "2px solid #0E0F0C", color: "#0E0F0C", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
              >
                <SunIcon />
              </button>
              <a href={APP_URL} style={{ padding: "12px 20px", borderRadius: 4, border: "2px solid #0E0F0C" }}>
                open app →
              </a>
              <a href="#demo" style={{ background: "#0E0F0C", color: "#C6F432", padding: "14px 22px", borderRadius: 4 }}>
                book a demo
              </a>
            </div>
          </header>

          <div style={{ padding: "88px 72px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 30, textAlign: "center" }}>
            <div style={{ fontFamily: MONO, fontSize: 15, fontWeight: 500 }}>{"// for multi-channel e-commerce businesses"}</div>
            <h1 style={{ margin: 0, fontFamily: MONO, fontSize: 68, fontWeight: 700, letterSpacing: "-0.055em", lineHeight: 1.04, whiteSpace: "nowrap" }}>
              Order fulfillment on autopilot.
            </h1>
            <p style={{ margin: 0, fontSize: 20, lineHeight: 1.55, maxWidth: 1000, fontWeight: 500 }}>
              Ship 10x the orders with the same team. No copying addresses, no buying labels, no chasing tracking numbers. skuspine runs it for every order, autonomously.
            </p>
            <div style={{ display: "flex", gap: 14, fontFamily: MONO, fontSize: 16, fontWeight: 600 }}>
              <a href="#demo" style={{ background: "#0E0F0C", color: "#C6F432", padding: "18px 28px", borderRadius: 4 }}>
                book a demo →
              </a>
              <a href="#how" style={{ padding: "18px 28px", borderRadius: 4, border: "2px solid #0E0F0C" }}>
                see how it works
              </a>
            </div>

            {/* Product demo */}
            <div style={{ marginTop: 36, width: 1120, background: "#0E0F0C", borderRadius: 16, padding: 12, boxSizing: "border-box", boxShadow: "0 40px 90px rgba(14,15,12,0.35)", textAlign: "left" }}>
              <div style={{ height: 36, padding: "0 10px", display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: MONO, fontSize: 12, color: "#8A9180" }}>
                <div style={{ display: "flex", gap: 7 }}>
                  {[0, 1, 2].map((i) => (
                    <span key={i} style={{ width: 10, height: 10, borderRadius: 5, background: "#3A3F32" }} />
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#C6F432" }}>
                  <span style={{ width: 8, height: 8, borderRadius: 4, background: "#C6F432", animation: "ssPulse 1.6s ease-in-out infinite" }} />
                  product demo · sample data
                </div>
              </div>
              <div style={{ height: 560, background: "#F7F8F4", borderRadius: 8, display: "flex", overflow: "hidden", color: "#0E0F0C" }}>
                <div style={{ width: 200, background: "#FFFFFF", borderRight: "1px solid #E3E7DA", padding: "22px 14px", display: "flex", flexDirection: "column", gap: 4, fontSize: 14 }}>
                  <div style={{ padding: "0 4px 18px" }}>
                    <span style={{ display: "inline-block", fontFamily: MONO, fontSize: 15, fontWeight: 600, background: "#0E0F0C", color: "#E8EDE0", padding: "5px 10px", borderRadius: 6 }}>
                      sku<span style={{ color: "#C6F432" }}>spine</span>
                    </span>
                  </div>
                  <div style={{ padding: "9px 10px", borderRadius: 6, background: "#0E0F0C", color: "#FFFFFF" }}>Orders</div>
                  <div style={{ padding: "9px 10px", display: "flex", justifyContent: "space-between" }}>
                    Exceptions
                    <span style={{ background: "#FFE7B3", color: "#7A4B00", borderRadius: 4, padding: "0 6px", fontSize: 12 }}>{demo.exceptions}</span>
                  </div>
                  {SIDEBAR_ITEMS.map((item) => (
                    <div key={item} style={{ padding: "9px 10px" }}>
                      {item}
                    </div>
                  ))}
                </div>
                <div style={{ flexGrow: 1, padding: "24px 26px", display: "flex", flexDirection: "column", gap: 18 }}>
                  <div style={{ fontSize: 20, fontWeight: 600 }}>Today</div>
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
                      <span style={{ ...statValue, color: "#7A4B00" }}>{demo.exceptions}</span>
                    </div>
                    <div style={{ background: "#C6F432", borderRadius: 10, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 4 }}>
                      <span style={{ fontSize: 13 }}>Margin today</span>
                      <span style={statValue}>23.8%</span>
                    </div>
                  </div>
                  <div style={{ background: "#FFFFFF", border: "1px solid #E3E7DA", borderRadius: 10, overflow: "hidden", fontSize: 14 }}>
                    <div style={{ ...tableGrid, padding: "11px 18px", background: "#F3F5EE", color: "#565C4B", fontSize: 12, fontFamily: MONO }}>
                      <span>ORDER</span>
                      <span>CHANNEL</span>
                      <span>ROUTE</span>
                      <span>STATUS</span>
                      <span style={{ textAlign: "right" }}>MARGIN</span>
                    </div>
                    {demo.rows.map((row, i) => (
                      <div key={i} style={{ ...tableGrid, padding: "13px 18px", borderTop: "1px solid #E3E7DA", alignItems: "center", background: row.rowBg }}>
                        <span style={{ fontFamily: MONO }}>{row.id}</span>
                        <span>{row.ch}</span>
                        <span style={{ color: "#3A3F32" }}>{row.route}</span>
                        <span>
                          <span style={{ background: row.bg, color: row.fg, padding: "3px 8px", borderRadius: 4, fontSize: 12 }}>{row.label}</span>
                        </span>
                        <span style={{ textAlign: "right", fontFamily: MONO }}>{row.margin}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ height: 4, margin: "10px 4px 2px", background: "#2A2E24", borderRadius: 2, overflow: "hidden" }}>
                <div style={{ height: 4, background: "#C6F432", animation: "ssDemoProgress 14s linear infinite" }} />
              </div>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section style={{ padding: "136px 72px 128px", display: "flex", flexDirection: "column", gap: 64 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 48 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ fontFamily: MONO, fontSize: 15, color: "var(--accent)" }}>{"// what you get"}</div>
              <h2 style={{ margin: 0, fontFamily: MONO, fontSize: 50, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1.08 }}>
                What changes when
                <br />
                skuspine runs your back office.
              </h2>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 20 }}>
            {BENEFITS.map((b, i) => (
              <div key={b.tag} style={{ background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 18, padding: 40, display: "grid", gridTemplateColumns: "minmax(0, 1fr) 190px", gap: 28, alignItems: "center", minHeight: 340, boxSizing: "border-box" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
                  <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.12em", color: "var(--muted)" }}>{b.tag}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div style={{ fontFamily: MONO, fontSize: 28, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.2, color: "var(--accent)" }}>{b.headline}</div>
                    <h3 style={{ margin: 0, fontSize: 22, fontWeight: 600, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--muted2)" }}>{b.body}</p>
                  </div>
                </div>
                <BenefitVisual index={i} />
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" style={{ padding: "120px 64px", background: "var(--surf)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 72 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 48 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ fontFamily: MONO, fontSize: 14, color: "var(--accent)" }}>{"// how it works"}</div>
              <h2 style={{ margin: 0, fontFamily: MONO, fontSize: 46, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.12 }}>
                Set it up once.
                <br />
                Then every order runs itself.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontFamily: MONO, fontSize: 13, color: "var(--muted2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 14, height: 14, borderRadius: 7, background: "#C6F432" }} />
                done by skuspine
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 14, height: 14, borderRadius: 7, border: "1.5px solid var(--fg)", boxSizing: "border-box" }} />
                done by your team or delivery partner
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.14em", color: "var(--muted)" }}>GETTING STARTED</div>
            <div style={{ display: "flex", alignItems: "stretch", background: "var(--card)", color: "#0E0F0C", borderRadius: 14, overflow: "hidden" }}>
              {SETUP_STEPS.map((s, i) => (
                <div key={s.title} style={{ flex: "1 1 0", padding: "22px 24px", display: "flex", flexDirection: "column", gap: 6, borderRight: i < 3 ? "1px solid #C9CFBF" : undefined }}>
                  <span style={{ fontFamily: MONO, fontSize: 13, color: "#4F6B00", fontWeight: 600 }}>{i + 1}</span>
                  <span style={{ fontSize: 17, fontWeight: 600 }}>{s.title}</span>
                  <span style={{ fontSize: 14, color: "#3A3F32" }}>{s.body}</span>
                </div>
              ))}
              <div style={{ width: 170, flexShrink: 0, background: "#C6F432", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MONO, fontSize: 16, fontWeight: 600 }}>you&apos;re live →</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.14em", color: "var(--muted)" }}>THEN, FOR EVERY ORDER</div>
            <div style={{ position: "relative", width: 1312, height: 516 }}>
              <div style={{ ...flowLabel, left: 0 }}>ORDER IN</div>
              <div style={{ position: "absolute", left: 377, top: 20, width: 558, height: 1, background: "var(--line2)" }} />
              <div style={{ ...flowLabel, left: 556 }}>FULFILMENT</div>
              <div style={{ ...flowLabel, left: 1112 }}>DELIVERY</div>

              <div style={{ position: "absolute", left: 100, top: 79, width: 1112, height: 3, background: "#C6F432" }} />

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
                      ...(byTeam ? { background: "var(--surf)", border: "2px solid var(--fg)", boxSizing: "border-box" } : { background: "#C6F432", color: "#0E0F0C" }),
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
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: "var(--muted2)" }}>{s.body}</p>
                </div>
              ))}

              <svg width="1312" height="120" viewBox="0 0 1312 120" aria-hidden="true" style={{ position: "absolute", left: 0, top: 236 }}>
                <path d="M516 6 L516 74" fill="none" strokeWidth="2" strokeDasharray="6 6" style={{ stroke: "var(--warn)" }} />
                <path d="M1212 6 L1212 74" fill="none" strokeWidth="2" strokeDasharray="6 6" style={{ stroke: "var(--fg)" }} />
                <circle cx="516" cy="6" r="5" style={{ fill: "var(--warn)" }} />
                <circle cx="1212" cy="6" r="5" style={{ fill: "var(--fg)" }} />
              </svg>

              <div style={{ position: "absolute", left: 0, top: 310, width: 620, height: 196, boxSizing: "border-box", border: "1.5px dashed var(--warn)", borderRadius: 14, padding: "28px 30px", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.1em", color: "var(--warn)" }}>IF SOMETHING BLOCKS AN ORDER</div>
                <h3 style={{ margin: 0, fontSize: 22, fontWeight: 600 }}>One queue. Your team decides.</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--muted2)" }}>
                  A wrong address, a delivery partner rejection or a stock conflict lands in one exception queue with everything needed to decide. Once your team makes the call, the order picks up exactly where it stopped.
                </p>
              </div>

              <div style={{ position: "absolute", left: 652, top: 310, width: 660, height: 196, boxSizing: "border-box", background: "var(--card)", color: "#0E0F0C", borderRadius: 14, padding: "28px 30px", display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.1em", color: "#4F6B00", fontWeight: 600 }}>IF IT COMES BACK · RETURNS AND REFUNDS</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "14px 28px" }}>
                  {RETURNS_POINTS.map(([strong, rest]) => (
                    <div key={strong} style={{ display: "flex", gap: 10 }}>
                      <span style={{ fontFamily: MONO, color: "#4F6B00", fontWeight: 600 }}>↺</span>
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
        <section id="support" style={{ padding: "120px 72px", background: "#F3F5EE", color: "#0E0F0C", display: "flex", flexDirection: "column", alignItems: "center", gap: 56 }}>
          <h2 style={{ margin: 0, fontFamily: MONO, fontSize: 48, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1.08, textAlign: "center" }}>Works where you sell and ship.</h2>
          <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24 }}>
            <div style={{ background: "#FFFFFF", border: "1.5px solid #0E0F0C", borderRadius: 10, padding: 36, display: "flex", flexDirection: "column", gap: 22 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ fontFamily: MONO, fontSize: 14, color: "#4F6B00", fontWeight: 600 }}>stores</div>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "#3A3F32" }}>Orders, stock and prices from every marketplace you sell on.</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", fontFamily: MONO, fontSize: 18 }}>
                {["amazon", "shopify", "ebay"].map((s) => (
                  <div key={s} style={storeRow}>
                    <span>{s}</span>
                    <span style={{ fontSize: 12, background: "#C6F432", padding: "3px 8px" }}>live</span>
                  </div>
                ))}
                {["tiktok shop", "woocommerce", "etsy"].map((s, i) => (
                  <div key={s} style={{ ...storeRow, color: "#565C4B", ...(i === 2 ? { borderBottom: "1px solid #E3E7DA" } : {}) }}>
                    <span>{s}</span>
                    <span style={{ fontSize: 12 }}>next</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "#FFFFFF", border: "1.5px solid #0E0F0C", borderRadius: 10, padding: 36, display: "flex", flexDirection: "column", gap: 22 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ fontFamily: MONO, fontSize: 14, color: "#4F6B00", fontWeight: 600 }}>delivery partners</div>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "#3A3F32" }}>One carrier network: rates compared, labels bought and tracking sent back automatically.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10, fontFamily: MONO, fontSize: 15, color: "#565C4B" }}>
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={i} style={carrierBox}>
                    [carrier]
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.55, color: "#3A3F32" }}>Customs documents generated for every cross-border shipment.</div>
            </div>
            <div style={{ background: "#0E0F0C", color: "#E8EDE0", borderRadius: 10, padding: 36, display: "flex", flexDirection: "column", gap: 22 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ fontFamily: MONO, fontSize: 14, color: "#C6F432", fontWeight: 600 }}>regions</div>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "#C9CFBF" }}>Sell and ship across borders, with cost and margin in the right currency.</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, fontFamily: MONO }}>
                {REGIONS.map(([region, currency]) => (
                  <div key={region} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "16px 18px", border: "1px solid #3A3F32", borderRadius: 8 }}>
                    <span style={{ fontSize: 26, fontWeight: 600 }}>{region}</span>
                    <span style={{ fontSize: 14, color: "#8A9180" }}>{currency}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.55, color: "#C9CFBF" }}>Multi-currency margin, tax jurisdictions and customs handled per order.</div>
            </div>
          </div>
        </section>

        {/* Book a demo */}
        <section id="demo" style={{ padding: "120px 72px", background: "#C6F432", color: "#0E0F0C", display: "flex", flexDirection: "column", alignItems: "center", gap: 44 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18, textAlign: "center" }}>
            <h2 style={{ margin: 0, fontFamily: MONO, fontSize: 80, fontWeight: 700, letterSpacing: "-0.065em", lineHeight: 1 }}>Book a demo.</h2>
            <p style={{ margin: 0, fontSize: 20, fontWeight: 500, maxWidth: 600, lineHeight: 1.5 }}>30 minutes. Bring one of your channels and watch your own orders flow through.</p>
          </div>
          <form style={{ width: 640, background: "#0E0F0C", color: "#E8EDE0", borderRadius: 14, padding: 40, boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
              <div style={fieldWrap}>
                <label htmlFor="ss-name" style={formLabel}>full name</label>
                <input id="ss-name" type="text" placeholder="Jane Smith" style={formField} />
              </div>
              <div style={fieldWrap}>
                <label htmlFor="ss-email" style={formLabel}>work email</label>
                <input id="ss-email" type="email" placeholder="jane@store.com" style={formField} />
              </div>
            </div>
            <div style={fieldWrap}>
              <label htmlFor="ss-store" style={formLabel}>store or company website</label>
              <input id="ss-store" type="url" placeholder="https://" style={formField} />
            </div>
            <div style={fieldWrap}>
              <label htmlFor="ss-volume" style={formLabel}>orders per month</label>
              <select id="ss-volume" style={formField}>
                {VOLUME_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <button type="button" style={{ height: 56, marginTop: 6, background: "#C6F432", color: "#0E0F0C", border: 0, borderRadius: 6, fontFamily: MONO, fontSize: 17, fontWeight: 600, cursor: "pointer" }}>
              book my demo →
            </button>
          </form>
        </section>

        <footer style={{ flexGrow: 1, padding: "36px 72px 44px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", fontFamily: MONO, fontSize: 13, color: "var(--muted)" }}>
          <span>© 2026 skuspine</span>
          <div style={{ display: "flex", gap: 28 }}>
            <a href={APP_URL} style={footerLink}>open app</a>
            <a href="#" style={footerLink}>privacy</a>
            <a href="#" style={footerLink}>terms</a>
            <a href="#" style={footerLink}>[CONTACT EMAIL]</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
