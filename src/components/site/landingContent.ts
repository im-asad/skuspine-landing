/** Landing page copy shared by the desktop, tablet and mobile layouts. House style: no em dashes. */

/** Search result title and description, also used in the structured data. */
export const SITE_TITLE = "Shopify Dispatch Automation & Order Fulfillment | skuspine";

export const SITE_DESCRIPTION =
  "Automate Shopify order fulfillment: smart order routing, batch shipping labels, inventory sync, and shipping rules automation. Book a demo today.";

export const EYEBROW = "E-Commerce Back Office Software for Shopify Sellers";

export const SUBHEAD =
  "Autonomous order fulfillment, inventory sync, and returns in one system. Scale your Shopify brand 10x with the same team. ";

/** Section headings: the plain part, then the highlighted part. */
export const HEADINGS = {
  benefits: ["Automate", "order fulfillment"],
  how: ["How", "skuspine works"],
  support: ["Multi carrier shipping", "for Shopify"],
  replace: ["The Linnworks, Veeqo and ShipStation", "alternative"],
} as const;

export const BENEFITS = [
  {
    tag: "01 · CAPACITY",
    headline: "Same team, more orders",
    body: "Automated order routing software: skuspine picks the warehouse and delivery partner, buys the label in batches, and sends tracking back automatically. Your team only touches orders that need a decision.",
  },
  {
    tag: "02 · ACCURACY",
    headline: "Fewer wrongly packed orders",
    body: "Pick lists and packing slips come straight from the order: fewer picking and packing errors, fewer refunds, no paying to ship twice.",
  },
  {
    tag: "03 · INVENTORY",
    headline: "Never sell what you don't have",
    body: "Shopify inventory sync that holds stock the moment it sells, across warehouses and bundles. Prevent overselling without keeping a second count.",
  },
  {
    tag: "04 · SHIPPING",
    headline: "Lower shipping cost per order",
    body: "Shipping rules automation compares every delivery partner's rates per order: Royal Mail integration for Shopify, plus Evri and DPD shipping automation for UK deliveries. Picks the cheapest option that still meets your delivery promise.",
  },
];

export const SETUP_STEPS = [
  { title: "Sign up and subscribe", body: "Pick a plan, create your account." },
  { title: "Connect your store", body: "Shopify today, Amazon and eBay coming soon. Stock syncs in and stays honest the moment an order comes through." },
  { title: "Add warehouses and partners", body: "Where you ship from, who delivers." },
  { title: "Set your shipping rules", body: "e.g. UK under 2kg, cheapest tracked. This is shipping rules automation." },
];

export const STORES_BODY =
  "Shopify inventory sync that keeps stock and prices honest, with dispatch automation built in. Amazon and eBay are next: same adapter framework, nothing to redo.";

export const CARRIERS_BODY =
  "One carrier network: rates compared, labels bought, tracking sent back automatically. Royal Mail integration for Shopify, plus Evri and DPD shipping automation for UK deliveries.";

export const CARRIERS = ["DHL", "FedEx", "UPS", "DPD", "Royal Mail", "Evri"];

export const CARRIERS_NOTE = "More carriers available on request. Customs documents generated for every cross-border shipment.";

export const REGIONS_BODY = "Sell and ship across borders, with each order in the right currency.";

export const REGIONS = [
  ["UK", "GBP"],
  ["US", "USD"],
  ["EU", "EUR"],
];

export const REGIONS_NOTE = "Multi-currency orders, tax jurisdictions and customs handled per order: Shopify order management software for UK ecommerce sellers trading internationally.";

export const LIVE_STORES = ["Shopify"];
export const COMING_SOON_STORES = ["Amazon", "eBay", "TikTok Shop", "WooCommerce", "Etsy"];

export const REPLACE_BODY = [
  "Most teams we talk to run a shipping tool, an inventory tool and a returns spreadsheet that don't agree by month end: often Linnworks, Veeqo or ShipStation, stitched together with exports. skuspine replaces all three with one database instead of three tools connected by files.",
  "Looking for a Linnworks alternative, a Veeqo alternative, or a ShipStation alternative UK sellers can actually trust? This is it.",
];
