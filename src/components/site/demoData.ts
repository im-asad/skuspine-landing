import { LIME } from "./shared";

/** Sample orders that rotate through the hero product demo. */
const DEMO_ORDERS = [
  { id: "AMZ-114-2093", ch: "Amazon", route: "Warehouse 2 · Tracked 48" },
  { id: "SHP-88412", ch: "Shopify", route: "Warehouse 1 · Express" },
  { id: "EBY-55107", ch: "eBay", route: "Address could not be verified", ex: true },
  { id: "AMZ-114-2101", ch: "Amazon", route: "Warehouse 2 · Customs docs attached", shortRoute: "Warehouse 2 · Customs docs" },
  { id: "SHP-88430", ch: "Shopify", route: "Warehouse 2 · Standard" },
  { id: "EBY-55126", ch: "eBay", route: "Warehouse 1 · Tracked 24" },
  { id: "AMZ-114-2117", ch: "Amazon", route: "Warehouse 1 · Tracked 48" },
];

export const DEMO_EXCEPTIONS = 3;

/** The `count` most recent demo orders at this tick, with their status colours for the current theme. */
export function demoRows(tick: number, dark: boolean, count: number) {
  const pool = DEMO_ORDERS;
  const pending = dark ? ["#2A2E24", "#C9CFBF"] : ["#E3E6DB", "#3A3F32"];
  return Array.from({ length: count }, (_, i) => {
    const o = pool[(tick - i + pool.length * 1000) % pool.length];
    let label = "Shipped";
    let [bg, fg] = dark ? ["#2B3510", LIME] : ["#EAF5C4", "#3E5400"];
    if (o.ex && i >= 1) {
      label = "Exception";
      [bg, fg] = ["#FFE7B3", "#7A4B00"];
    } else if (i <= 2) {
      label = ["Ingested", "Routed", "Label bought"][i];
      [bg, fg] = pending;
    }
    const rowBg = i === 0 ? (dark ? "#1E2414" : "#F6FBE3") : dark ? "#151711" : "#F4F5EF";
    return { id: o.id, ch: o.ch, route: o.route, shortRoute: o.shortRoute ?? o.route, label, bg, fg, rowBg };
  });
}
