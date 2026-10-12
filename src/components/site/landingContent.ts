/** Landing page copy shared by the desktop and tablet layouts. */

export const BENEFITS = [
  {
    tag: "01 · CAPACITY",
    headline: "Same team, more orders",
    body: "skuspine picks the warehouse and delivery partner for each order, creates the shipping label and sends tracking back to the marketplace. Your team only handles orders that need a decision.",
  },
  {
    tag: "02 · ACCURACY",
    headline: "Fewer wrongly packed orders",
    body: "Pick lists and packing slips come straight from the order, so the right items go in the box. Fewer refunds, no paying to ship twice, and customers who come back.",
  },
  {
    tag: "03 · PROFIT",
    headline: "Higher margins",
    body: "See which products are making or losing money in real time, not in a report at the end of the month after the money is already gone.",
  },
  {
    tag: "04 · SHIPPING",
    headline: "Lower shipping cost per order",
    body: "skuspine compares delivery partners' rates on every order and picks the most cost-effective option that still meets your delivery promise.",
  },
];

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

export const CARRIERS = ["DHL", "FedEx", "UPS", "DPD", "Royal Mail", "Evri"];

export const REGIONS = [
  ["UK", "GBP"],
  ["US", "USD"],
  ["EU", "EUR"],
];

export const LIVE_STORES = ["Amazon", "Shopify"];
export const COMING_SOON_STORES = ["eBay", "TikTok Shop", "WooCommerce", "Etsy"];
