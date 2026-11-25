import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ALTERNATIVES } from "./alternatives";
import {
  BENEFITS,
  CARRIERS,
  CARRIERS_BODY,
  CARRIERS_NOTE,
  COMING_SOON_STORES,
  EXCEPTIONS_BODY,
  HEADINGS,
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
} from "./landingContent";
import "./site.css";

/**
 * Everything between the hero and the footer. Each section is in the page once; site.css adapts it
 * to desktop (over 1024px), tablet (600px to 1024px) and mobile (under 600px).
 */
export default function LandingSections() {
  return (
    <>
      <Benefits />
      <How />
      <Support />
      <Replace />
    </>
  );
}

function Heading({ text, className }: { text: readonly [string, string]; className?: string }) {
  return (
    <h2 className={`ls-h2 ${className ?? ""}`}>
      {text[0]} <span className="ls-hl">{text[1]}</span>
    </h2>
  );
}

/* ---------- Benefits ---------- */

function MarginChart({ className, width, height, viewBox, right, preserve, line, loss }: { className: string; width: string; height: string; viewBox: string; right: number; preserve?: string; line: string; loss: string }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} preserveAspectRatio={preserve} aria-hidden="true" style={{ display: "block" }}>
      {[30, 60, 90].map((y) => (
        <line key={y} x1="0" y1={y} x2={right} y2={y} strokeWidth="1" style={{ stroke: "var(--grid)" }} />
      ))}
      <polygon points={`${line} ${right},120 0,120`} fill="#C6F432" fillOpacity="0.55" />
      <polyline points={line} fill="none" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap={preserve ? undefined : "round"} style={{ stroke: "var(--fg)" }} />
      <polyline points={loss} fill="none" strokeWidth="2" strokeDasharray="4 4" strokeLinejoin={preserve ? undefined : "round"} style={{ stroke: "var(--warn)" }} />
    </svg>
  );
}

const BENEFIT_VISUALS: ReactNode[] = [
  <div key="capacity" className="ls-visual ls-v-capacity">
    <div>
      <span>before · per person</span>
      <div className="ls-bars ls-bars-before" />
    </div>
    <div>
      <span style={{ color: "var(--fg)" }}>with skuspine · per person</span>
      <div className="ls-bars ls-bars-after" />
    </div>
  </div>,
  <div key="accuracy" className="ls-visual ls-v-slip">
    <div className="ls-between" style={{ letterSpacing: "0.1em", color: "var(--muted)" }}>
      <span>PACKING SLIP</span>
      <span>#2093</span>
    </div>
    <div style={{ borderTop: "1.5px dashed #A9B09E" }} />
    {["SKU-1042 ×2", "SKU-2210 ×1", "BUNDLE-07 ×1"].map((item) => (
      <div key={item} className="ls-between">
        <span>{item}</span>
        <span className="ls-tick">✓</span>
      </div>
    ))}
    <div className="ls-slip-space" />
    <div className="ls-barcode" />
  </div>,
  <div key="profit" className="ls-visual ls-v-margin">
    <div className="ls-between">
      <span>margin by sku</span>
      <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--fg)" }}>
        <span style={{ width: 7, height: 7, borderRadius: 4, background: "var(--olive)", animation: "ssPulse 1.6s ease-in-out infinite" }} />
        live
      </span>
    </div>
    <MarginChart
      className="only-desktop"
      width="152"
      height="110"
      viewBox="0 0 172 120"
      right={172}
      line="0,96 20,92 40,98 60,80 80,84 100,66 120,70 140,48 160,40 172,30"
      loss="0,70 20,76 40,72 60,88 80,94 100,104 120,100 140,110 160,112 172,114"
    />
    <MarginChart
      className="only-tablet-and-mobile"
      width="100%"
      height="110"
      viewBox="0 0 290 120"
      preserve="none"
      right={290}
      line="0,96 34,92 68,98 101,80 135,84 169,66 203,70 236,48 270,40 290,30"
      loss="0,70 34,76 68,72 101,88 135,94 169,104 203,100 236,110 270,112 290,114"
    />
    <div style={{ display: "flex", gap: 14 }}>
      <span style={{ color: "var(--fg)" }}>- keep</span>
      <span style={{ color: "var(--warn)" }}>- - fix or drop</span>
    </div>
  </div>,
  <div key="shipping" className="ls-visual ls-v-rates">
    <div style={{ fontSize: 12, color: "var(--muted)" }}>rates · order #2093</div>
    <div className="ls-rate">
      <span>partner A</span>
      <span>$8.20</span>
    </div>
    <div className="ls-rate ls-rate-best">
      <span>partner B ✓</span>
      <span>$6.10</span>
    </div>
    <div className="ls-rate">
      <span>partner C</span>
      <span>$7.45</span>
    </div>
  </div>,
];

function Benefits() {
  return (
    <section className="ls-benefits">
      <Heading text={HEADINGS.benefits} />
      <div className="ls-benefit-grid">
        {BENEFITS.map((b, i) => (
          <div key={b.tag} className="ls-benefit">
            <div className="ls-benefit-text">
              <div style={{ display: "flex" }}>
                <span className="ls-tag">{b.tag}</span>
              </div>
              <div className="ls-benefit-copy">
                <h3>
                  <span>{b.headline}</span>
                </h3>
                <p>{b.body}</p>
              </div>
            </div>
            {BENEFIT_VISUALS[i]}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */

/** Desktop positions on the 1312px timeline: each step's dot, and the text under it. */
const STEP_POSITIONS = [
  { dot: 72, text: 0, width: 200 },
  { dot: 349, text: 267, width: 220 },
  { dot: 628, text: 546, width: 220 },
  { dot: 907, text: 825, width: 220 },
  { dot: 1184, text: 1102, width: 210 },
];

/** One step on the order timeline. Step 4 is done by your team or delivery partner; the rest by skuspine. */
function Step({ n }: { n: 1 | 2 | 3 | 4 | 5 }) {
  const { title, body } = ORDER_FLOW[n - 1];
  const { dot, text, width } = STEP_POSITIONS[n - 1];
  const position = { "--dot": `${dot}px`, "--text": `${text}px`, "--text-width": `${width}px` } as CSSProperties;
  return (
    <div className={`ls-step ls-step-${n}`} style={position}>
      <div className="ls-rail">
        <div className={n === 4 ? "ls-dot ls-dot-team" : "ls-dot"}>{n}</div>
        <div className="ls-line" />
      </div>
      <div className="ls-step-text">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}

function Stage({ at, children }: { at: "in" | "mid" | "out"; children: ReactNode }) {
  return (
    <div className={`ls-stage ls-stage-${at}`}>
      <span>{children}</span>
    </div>
  );
}

function SubHeading({ n, className, children }: { n: string; className?: string; children: ReactNode }) {
  return (
    <div className={`ls-sub ${className ?? ""}`}>
      <span className="ls-sub-n">{n}</span>
      <span>{children}</span>
    </div>
  );
}

function How() {
  return (
    <section id="how" className="ls-how">
      <div className="ls-how-head">
        <Heading text={HEADINGS.how} />
        <div className="ls-legend">
          <div>
            <span className="ls-legend-dot" style={{ background: "#C6F432", borderColor: "#0E0F0C" }} />
            done by skuspine
          </div>
          <div>
            <span className="ls-legend-dot" style={{ background: "var(--card)", borderColor: "var(--fg)" }} />
            done by your team or delivery partner
          </div>
        </div>
      </div>

      <div className="ls-setup">
        <SubHeading n="01">Getting started: set it up once</SubHeading>
        <div className="ls-setup-panel">
          <div className="ls-setup-steps">
            {SETUP_STEPS.map((s, i) => (
              <div key={s.title} className="ls-setup-step">
                <span className="ls-setup-n">{i + 1}</span>
                <div className="ls-setup-text">
                  <span className="ls-setup-title">{s.title}</span>
                  <span className="ls-setup-body">{s.body}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="ls-setup-live">you&apos;re live →</div>
        </div>
      </div>

      <div className="ls-flow">
        <SubHeading n="02" className="ls-flow-sub">
          Then skuspine takes over every order, autonomously
        </SubHeading>
        <div className="ls-flow-area">
          <div className="ls-flow-rule ls-flow-rule-mid" />
          <div className="ls-flow-rule ls-flow-rule-main" />
          <svg className="ls-flow-links only-desktop" width="1312" height="150" viewBox="0 0 1312 150" aria-hidden="true">
            <path d="M516 6 L516 104" fill="none" strokeWidth="2" strokeDasharray="6 6" style={{ stroke: "var(--warn)" }} />
            <path d="M1212 6 L1212 104" fill="none" strokeWidth="2" strokeDasharray="6 6" style={{ stroke: "var(--fg)" }} />
            <circle cx="516" cy="6" r="5" style={{ fill: "var(--warn)" }} />
            <circle cx="1212" cy="6" r="5" style={{ fill: "var(--fg)" }} />
          </svg>

          <div className="ls-steps">
            <div className="ls-steps-col">
              <Stage at="in">ORDER IN</Stage>
              <Step n={1} />
              <Stage at="mid">FULFILMENT</Stage>
              <Step n={2} />
              <Step n={3} />
            </div>
            <div className="ls-steps-col">
              <div className="ls-steps-space" />
              <Step n={4} />
              <Stage at="out">DELIVERY</Stage>
              <Step n={5} />
            </div>
          </div>

          <div className="ls-boxes">
            <div className="ls-box ls-box-blocked">
              <div className="ls-box-label">IF SOMETHING BLOCKS AN ORDER</div>
              <h3>One queue. Your team decides.</h3>
              <p>{EXCEPTIONS_BODY}</p>
            </div>
            <div className="ls-box ls-box-returns">
              <h3 className="ls-returns-label">
                <span>IF IT COMES BACK · RETURNS AND REFUNDS</span>
              </h3>
              <p>{RETURNS_INTRO}</p>
              <div className="ls-returns">
                {RETURNS_POINTS.map(([strong, rest]) => (
                  <div key={strong}>
                    <span className="ls-returns-icon">↺</span>
                    <span className="ls-returns-text">
                      <strong>{strong}</strong>
                      {rest}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Channels & carriers ---------- */

function Support() {
  return (
    <section id="support" className="ls-support">
      <Heading text={HEADINGS.support} />
      <div className="ls-cards">
        <div className="ls-card">
          <div className="ls-card-title">Stores</div>
          <p>{STORES_BODY}</p>
          <div className="ls-stores">
            {LIVE_STORES.map((s) => (
              <div key={s}>
                <span>{s}</span>
                <span className="ls-live">live</span>
              </div>
            ))}
            {COMING_SOON_STORES.map((s) => (
              <div key={s} style={{ color: "var(--muted)" }}>
                <span>{s}</span>
                <span className="ls-soon">coming soon</span>
              </div>
            ))}
          </div>
        </div>
        <div className="ls-card">
          <div className="ls-card-title">Delivery partners</div>
          <p>{CARRIERS_BODY}</p>
          <div className="ls-carriers">
            {CARRIERS.map((c) => (
              <div key={c}>{c}</div>
            ))}
          </div>
          <div className="ls-note">{CARRIERS_NOTE}</div>
        </div>
        <div className="ls-card ls-card-regions">
          <div className="ls-card-title">Regions</div>
          <p>{REGIONS_BODY}</p> <div className="ls-note">{REGIONS_NOTE}</div>
          <div className="ls-regions">
            {REGIONS.map(([region, currency]) => (
              <div key={region}>
                <span className="ls-region">
                  <span>{region}</span>
                </span>
                <span className="ls-currency">{currency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Replacing your stack ---------- */

/** Turns phrases such as "Veeqo alternative" into links to their pages. */
function linkAlternatives(text: string) {
  return text.split(new RegExp(`(${ALTERNATIVES.map((a) => a.linkText).join("|")})`)).map((part) => {
    const page = ALTERNATIVES.find((a) => a.linkText === part);
    return page ? (
      <Link key={part} href={`/alternatives/${page.slug}`} className="ls-replace-link">
        {part}
      </Link>
    ) : (
      part
    );
  });
}

function Replace() {
  return (
    <section className="ls-replace">
      <div className="ls-replace-panel">
        <Heading text={HEADINGS.replace} />
        <div className="ls-replace-text">
          <p style={{ color: "#C9CFBF" }}>{REPLACE_BODY[0]}</p>
          <p style={{ fontWeight: 600 }}>{linkAlternatives(REPLACE_BODY[1])}</p>
        </div>
      </div>
    </section>
  );
}
