"use client";

import type { CSSProperties } from "react";
import { DEMO_EXCEPTIONS, demoRows } from "./demoData";
import { INK, LIME, MONO } from "./shared";
import { useTheme } from "./ThemeProvider";

/**
 * Hero product demo video. Set this to the file's path in /public (for example "/hero-demo.mp4")
 * to replace the animated stand-in below with the real recording.
 */
const HERO_VIDEO_SRC: string | null = null;

/** Size of the stand-in demo window at full size: 1180px wide plus its 1px borders. */
export const DEMO_WIDTH = 1182;
export const DEMO_HEIGHT = 607;

const statCard: CSSProperties = { background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 10, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 4 };
const statLabel: CSSProperties = { fontSize: 13, color: "var(--muted)" };
const statValue: CSSProperties = { fontFamily: MONO, fontSize: 24, fontWeight: 600 };
const tableGrid: CSSProperties = { display: "grid", gridTemplateColumns: "150px 100px minmax(0, 1fr) 130px 90px" };

/** The animated app mock-up, drawn at its full desktop size. */
function DemoWindow({ tick }: { tick: number }) {
  const { theme } = useTheme();
  const rows = demoRows(tick, theme === "dark", 6);
  const ordersIn = 1284 + tick;
  const exceptions = DEMO_EXCEPTIONS;

  return (
    <div style={{ width: 1180, background: "var(--surf)", border: "1px solid var(--line2)", borderRadius: 16, overflow: "hidden", boxShadow: "0 30px 70px rgba(14,15,12,0.14)", textAlign: "left" }}>
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
            <span style={{ background: "#FFB020", color: INK, borderRadius: 4, padding: "0 6px", fontSize: 12 }}>{exceptions}</span>
          </div>
          {["Inventory", "Margin", "Pricing", "Returns", "Stores"].map((item) => (
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
              <span style={statValue}>{ordersIn.toLocaleString("en-US")}</span>
            </div>
            <div style={statCard}>
              <span style={statLabel}>Auto-dispatched</span>
              <span style={statValue}>{(ordersIn - exceptions).toLocaleString("en-US")}</span>
            </div>
            <div style={statCard}>
              <span style={statLabel}>Exceptions</span>
              <span style={{ ...statValue, color: "var(--warn)" }}>{exceptions}</span>
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
            {rows.map((row, i) => (
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
  );
}

/**
 * The hero media slot. It behaves like a video on every screen size: it fills the available width
 * (up to its full size) and its height shrinks in proportion, so the whole picture scales as one.
 * The stand-in is scaled by --hz, which the script in the root layout keeps in step with the screen width.
 */
export default function HeroMedia({ tick, style }: { tick: number; style?: CSSProperties }) {
  if (HERO_VIDEO_SRC) {
    return (
      <video
        src={HERO_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="skuspine product demo"
        style={{ display: "block", width: "100%", maxWidth: DEMO_WIDTH, height: "auto", borderRadius: 16, border: "1px solid var(--line2)", boxShadow: "0 30px 70px rgba(14,15,12,0.14)", boxSizing: "border-box", ...style }}
      />
    );
  }
  return (
    <div className="hero-media" style={{ ...style }}>
      <div className="hero-media-inner">
        <DemoWindow tick={tick} />
      </div>
    </div>
  );
}
