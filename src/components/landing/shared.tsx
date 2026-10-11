import type { CSSProperties } from "react";

export type Theme = "light" | "dark";

export type LandingProps = {
  tick: number;
  onToggleTheme: () => void;
};

export const APP_URL = "https://app.skuspine.com/";

export const MONO = "var(--font-plex-mono), 'IBM Plex Mono', monospace";
export const PLEX_SANS = "var(--font-plex-sans), 'IBM Plex Sans', system-ui, sans-serif";
export const INSTRUMENT_SANS = "var(--font-instrument-sans), 'Instrument Sans', system-ui, sans-serif";

/** Style object that also accepts CSS custom properties (e.g. `--bg`). */
export type VarStyle = CSSProperties & Record<`--${string}`, string>;

const pool = [
  { id: "AMZ-114-2093", ch: "Amazon", route: "Warehouse 2 · Tracked 48", m: "24.1%" },
  { id: "SHP-88412", ch: "Shopify", route: "Warehouse 1 · Express", m: "31.6%" },
  { id: "EBY-55107", ch: "eBay", route: "Address could not be verified", m: "—", ex: true },
  { id: "AMZ-114-2101", ch: "Amazon", route: "Warehouse 2 · Customs docs attached", m: "18.9%" },
  { id: "SHP-88430", ch: "Shopify", route: "Warehouse 2 · Standard", m: "27.3%" },
  { id: "EBY-55126", ch: "eBay", route: "Warehouse 1 · Tracked 24", m: "22.5%" },
  { id: "AMZ-114-2117", ch: "Amazon", route: "Warehouse 1 · Tracked 48", m: "20.4%" },
];

type RowPalette = {
  shipped: [string, string];
  pending: [string, string];
  firstRowBg: string;
  rowBg: string;
};

export type DemoRow = {
  id: string;
  ch: string;
  route: string;
  label: string;
  bg: string;
  fg: string;
  margin: string;
  rowBg: string;
};

/** Rotating sample orders shown in the hero product demo. */
export function buildDemo(tick: number, palette: RowPalette) {
  const rows: DemoRow[] = [];
  for (let i = 0; i < 6; i++) {
    const o = pool[(tick - i + pool.length * 1000) % pool.length];
    let label = "Shipped";
    let [bg, fg] = palette.shipped;
    let margin = o.m;
    if (o.ex && i >= 1) {
      label = "Exception";
      bg = "#FFE7B3";
      fg = "#7A4B00";
      margin = "—";
    } else if (i <= 2) {
      label = ["Ingested", "Routed", "Label bought"][i];
      [bg, fg] = palette.pending;
      margin = "—";
    }
    rows.push({ id: o.id, ch: o.ch, route: o.route, label, bg, fg, margin, rowBg: i === 0 ? palette.firstRowBg : palette.rowBg });
  }
  const ordersIn = 1284 + tick;
  const exceptions = 3;
  return {
    rows,
    ordersIn: ordersIn.toLocaleString("en-US"),
    dispatched: (ordersIn - exceptions).toLocaleString("en-US"),
    exceptions,
  };
}

export function Logo() {
  return (
    <a
      href="#"
      style={{ display: "flex", alignItems: "center", gap: 7, background: "#0E0F0C", padding: "8px 16px 8px 10px", borderRadius: 8 }}
      aria-label="skuspine home"
    >
      <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true">
        <rect x="4" y="12" width="4" height="40" fill="#E8EDE0" />
        <rect x="11" y="12" width="2" height="40" fill="#E8EDE0" />
        <rect x="16" y="12" width="5" height="40" fill="#E8EDE0" />
        <rect x="24" y="12" width="2" height="40" fill="#E8EDE0" />
        <rect x="29" y="2" width="6" height="60" rx="1" fill="#C6F432" />
        <rect x="38" y="12" width="2" height="40" fill="#E8EDE0" />
        <rect x="43" y="12" width="5" height="40" fill="#E8EDE0" />
        <rect x="51" y="12" width="2" height="40" fill="#E8EDE0" />
        <rect x="56" y="12" width="4" height="40" fill="#E8EDE0" />
      </svg>
      <span style={{ position: "relative", top: -1, fontFamily: MONO, fontSize: 20, fontWeight: 600, letterSpacing: "-0.04em", color: "#E8EDE0" }}>
        sku<span style={{ color: "#C6F432" }}>spine</span>
      </span>
    </a>
  );
}

export function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

export const ORDER_FLOW_STEPS = [
  { left: 0, width: 200, title: "Order in, stock reserved", body: "The item is held on every channel, so it can't sell twice." },
  { left: 267, width: 220, title: "Best route picked", body: "Your rules choose the warehouse and delivery partner, after comparing rates." },
  { left: 546, width: 220, title: "Label and slip created", body: "Shipping label bought. Pick list and packing slip print in your warehouse." },
  { left: 825, width: 220, title: "Packed and collected", body: "Your team packs from the slip. The delivery partner collects." },
  { left: 1102, width: 210, title: "Tracked to the door", body: "Tracking sent to marketplace and customer. Margin calculated." },
];

export const ORDER_FLOW_DOTS = [72, 349, 628, 907, 1184];

export const SETUP_STEPS = [
  { title: "Sign up and subscribe", body: "Pick a plan, create your account." },
  { title: "Connect your stores", body: "Amazon, Shopify, eBay. Products and stock sync in." },
  { title: "Add warehouses and partners", body: "Where you ship from, who delivers." },
  { title: "Set your shipping rules", body: "e.g. UK under 2kg → cheapest tracked." },
];

export const RETURNS_POINTS: [string, string][] = [
  ["Logged with a reason", ", matched to the original order."],
  ["Restocked", " on every channel, or written off if damaged."],
  ["Refund and return postage", " taken off that order's margin."],
  ["Supplier flagged", " when returns for a product keep rising."],
];

export const BENEFITS = [
  {
    tag: "01 · CAPACITY",
    headline: "Same team, more orders",
    title: "More orders processed per back-office staff member",
    body: "skuspine picks the warehouse and delivery partner for each order, creates the shipping label and sends tracking back to the marketplace. Your team only handles orders that need a decision.",
  },
  {
    tag: "02 · ACCURACY",
    headline: "Right items, every box",
    title: "Fewer wrongly packed orders and refunds",
    body: "Pick lists and packing slips come straight from the order, so the right items go in the box. Fewer refunds, no paying to ship twice, and customers who come back.",
  },
  {
    tag: "03 · PROFIT",
    headline: "Live margin by product",
    title: "Higher margins",
    body: "See which products are making or losing money in real time, not in a report at the end of the month after the money is already gone.",
  },
  {
    tag: "04 · SHIPPING",
    headline: "Cheapest partner, every order",
    title: "Lower shipping cost per order",
    body: "skuspine compares delivery partners' rates on every order and picks the most cost-effective option that still meets your delivery promise.",
  },
];

export const MARGIN_LINE = "0,96 20,92 40,98 60,80 80,84 100,66 120,70 140,48 160,40 172,30";
export const MARGIN_LOSS_LINE = "0,70 20,76 40,72 60,88 80,94 100,104 120,100 140,110 160,112 172,114";
export const SLIP_ITEMS = ["SKU-1042 ×2", "SKU-2210 ×1", "BUNDLE-07 ×1"];
export const VOLUME_OPTIONS = ["Under 1,000", "1,000 – 10,000", "10,000 – 50,000", "50,000+"];
export const SIDEBAR_ITEMS = ["Inventory", "Margin", "Pricing", "Returns"];
export const REGIONS = [
  ["UK", "GBP"],
  ["US", "USD"],
  ["EU", "EUR"],
];
