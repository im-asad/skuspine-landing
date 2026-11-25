import Link from "next/link";
import type { ReactNode } from "react";
import { ALTERNATIVES } from "./alternatives";
import {
  BENEFITS,
  CARRIERS,
  CARRIERS_BODY,
  CARRIERS_NOTE,
  COMING_SOON_STORES,
  HEADINGS,
  LIVE_STORES,
  REGIONS,
  REGIONS_BODY,
  REGIONS_NOTE,
  REPLACE_BODY,
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
  <div key="stock" className="ls-visual ls-v-rates">
    <div style={{ fontSize: 12, color: "var(--muted)" }}>stock · SKU-1042</div>
    <div className="ls-rate">
      <span>in stock</span>
      <span>14</span>
    </div>
    <div className="ls-rate">
      <span>reserved</span>
      <span>2</span>
    </div>
    <div className="ls-rate ls-rate-best">
      <span>to sell ✓</span>
      <span>12</span>
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
      <Link href="/features" className="ls-more-link" aria-label="View more: all skuspine features">
        View more →
      </Link>
    </section>
  );
}

/* ---------- How it works ---------- */

function SubHeading({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="ls-sub">
      <span className="ls-sub-n">{n}</span>
      <span>{children}</span>
    </div>
  );
}

function How() {
  return (
    <section id="how" className="ls-how">
      <Heading text={HEADINGS.how} />

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

      <div className="ls-more">
        <SubHeading n="02">Then skuspine takes over every order, autonomously</SubHeading>
        <Link href="/how-it-works" className="ls-more-link" aria-label="View more: how skuspine works">
          View more →
        </Link>
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
      <Link href="/integrations" className="ls-more-link" aria-label="View more: all skuspine integrations">
        View more →
      </Link>
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
