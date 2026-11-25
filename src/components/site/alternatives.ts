/**
 * The "X alternative" pages. House style: no em dashes.
 * Facts about other products come from their own websites (see `sources`). Check them again before changing `checked`.
 * Anything not built yet belongs in `planned`, which is labelled as such on the page.
 */
type Point = { title: string; body: string };

type Alternative = {
  slug: string;
  product: string;
  /** Link text on other pages. */
  linkText: string;
  title: string;
  description: string;
  ogTitle: string;
  h1: string;
  intro: string;
  advantagesHeading: string;
  advantages: Point[];
  /** Dimension, skuspine, the other product. */
  comparison: [string, string, string][];
  planned: Point[];
  /** Where the other product is ahead. */
  edge: Point[];
  fitUs: string[];
  fitThem: string[];
  sources: { label: string; href: string }[];
  checked: string;
};

const CHANNELS = "Shopify live. Amazon, eBay, TikTok Shop, WooCommerce and Etsy coming soon.";
const PRICING = "In beta. Ask us in a demo.";

export const ALTERNATIVES: Alternative[] = [
  {
    slug: "linnworks",
    product: "Linnworks",
    linkText: "Linnworks alternative",
    title: "Linnworks Alternative for Shopify Sellers | skuspine",
    description: "Looking for a Linnworks alternative? skuspine runs Shopify dispatch automation, inventory sync, batch labels and returns management in one system.",
    ogTitle: "A Linnworks Alternative Built for Shopify",
    h1: "The Linnworks Alternative for Shopify Sellers",
    intro: "Linnworks centralizes order routing, stock syncing and shipping workflows. skuspine goes deep on one store: it takes a Shopify order from checkout to the door, and stops only when a person is needed.",
    advantagesHeading: "What you get with skuspine",
    advantages: [
      { title: "Rules you can test first", body: "Run a new routing rule on recent orders and read the decision on each one, with the reason, before you switch it on." },
      { title: "Exceptions that resume", body: "A blocked order waits in one queue with what went wrong and the actions you can take. Decide, and it continues from the same step." },
      { title: "Stock held at the sale", body: "Items are reserved as the order arrives, counts are compared with Shopify every fifteen minutes, and bundles follow their components." },
      { title: "Orders that arrive as files", body: "Orders in PDF, CSV or spreadsheet form are read into the same dispatch flow. Uncertain fields go to the exception queue instead of being keyed in again." },
    ],
    comparison: [
      ["Core", "One database for orders, stock, shipments and returns", "A hub connecting inventory, orders, warehouses, listings and shipping carriers"],
      ["Profit and margin", "Planned. Not available yet.", "Profitability per SKU and channel. Ad spend and profit analytics through the Conjura integration."],
      ["Automation", "Order routing rules you can test on past orders, and one queue for anything blocked", "Rules Engine with unlimited rules"],
      ["AI", "Reads orders that arrive as files. An operations assistant and storefront widget are planned.", "Spotlight AI finds repetitive manual work and recommends which rules to set up"],
      ["Sales channels", CHANNELS, "100+ channels, including Amazon, eBay, Walmart, Shopify and TikTok Shop"],
      ["Shipping", "DHL, FedEx, UPS, DPD, Royal Mail and Evri", "70+ shipping providers and aggregators, including Amazon Shipping, FedEx and Royal Mail"],
      ["Pricing", PRICING, "By quote, tiered by monthly orders"],
    ],
    planned: [
      { title: "An operations assistant", body: "Ask about held orders, stock or suppliers in plain English. Permissions follow each person's role, and every action is proposed for a person to approve." },
      { title: "A storefront widget", body: "Answers presale questions from live stock, points shoppers to another channel when an item is sold out, and collects restock requests." },
      { title: "Margin tracking", body: "Net margin on each order after landed cost, fees, shipping and returns, with a minimum you can set." },
    ],
    edge: [
      { title: "More connections", body: "100+ channels and 70+ shipping providers, ready today. We go deeper on fewer channels first." },
      { title: "A mature platform", body: "Established warehouse and inventory management, with profitability per SKU and channel. skuspine is in beta." },
    ],
    fitUs: ["Shopify is your main or only store", "You want orders to ship without someone reading each one", "Some of your orders arrive as PDF or spreadsheet files"],
    fitThem: ["You need many marketplaces connected today", "You need detailed warehouse management or profit reporting now"],
    sources: [
      { label: "linnworks.com", href: "https://www.linnworks.com/" },
      { label: "pricing", href: "https://www.linnworks.com/pricing/" },
      { label: "Rules Engine", href: "https://www.linnworks.com/features/rules-engine/" },
      { label: "Spotlight AI", href: "https://www.linnworks.com/promo/spotlight-ai" },
      { label: "Conjura integration", href: "https://www.linnworks.com/integrations/conjura/" },
    ],
    checked: "November 2026",
  },
  {
    slug: "veeqo",
    product: "Veeqo",
    linkText: "Veeqo alternative",
    title: "Veeqo Alternative: Shopify Order Fulfillment | skuspine",
    description: "Compare skuspine to Veeqo: automated order routing, batch shipping labels, inventory sync and returns for Shopify sellers, all in one system.",
    ogTitle: "A Veeqo Alternative Built for Shopify",
    h1: "The Veeqo Alternative for Shopify Sellers",
    intro: "Veeqo is Amazon's shipping and inventory software. skuspine is a back office for Shopify sellers, where orders are routed, labeled and tracked on their own and only the odd ones reach your team.",
    advantagesHeading: "Built around the Shopify order",
    advantages: [
      { title: "Order routing by your rules", body: "Rules pick the warehouse and the cheapest delivery partner that meets your promise. An order that matches nothing is never shipped on a guess." },
      { title: "Stock in more than one place", body: "Stock is kept by warehouse, with your choice of which is used first, and bundles sell from the parts they are made of." },
      { title: "Batch labels, packed right", body: "Labels are bought in batches, with pick lists and packing slips straight from the orders. One problem order does not hold up the rest." },
      { title: "A place for the odd ones", body: "Bad addresses, rejected parcels and customer notes wait together, so your team handles decisions and nothing else." },
    ],
    comparison: [
      ["Core", "Back office combining order routing, dispatch, stock and returns", "Amazon's shipping and inventory management software"],
      ["Stock", "Reserved as the order arrives, kept by warehouse, with bundles", "Inventory sync across channels"],
      ["Profit", "Planned. Not available yet.", "Profit Analyzer brings together sales, fees, COGS and ad spend, including Shopify and eBay"],
      ["Rules", "Choose the warehouse and delivery partner, or hold an order for review", "Assign shipping services and stock allocation by criteria you choose"],
      ["Labels", "Bought in batches, with pick lists and packing slips", "Bulk ship up to 100 orders in one click"],
      ["UK carriers", "DPD, Royal Mail and Evri, plus DHL, FedEx and UPS", "Royal Mail, Evri and DPD, plus Amazon Shipping and FedEx"],
      ["Sales channels", CHANNELS, "Amazon, Shopify, eBay, WooCommerce, TikTok Shop, Etsy and more"],
      ["Pricing", PRICING, "Shipping features free. Inventory plan from £17 a month including VAT."],
    ],
    planned: [
      { title: "A storefront widget", body: "Shoppers get answers from live stock, and a route to another channel or a restock list when something is sold out." },
      { title: "Listing help", body: "Listings written for each platform, informed by the questions customers keep asking." },
      { title: "Landed cost and profit", body: "Freight and duty in the cost of your stock, and what each order made after it." },
    ],
    edge: [
      { title: "Price", body: "Veeqo's shipping features are free. It makes a commission on labels bought through it." },
      { title: "More channels, and profit figures", body: "Amazon, eBay, Etsy and others connect today, and Profit Analyzer is available. Our first channel is Shopify and profit reporting is planned." },
    ],
    fitUs: ["Shopify is where your orders come from", "You ship from more than one warehouse", "You would rather not run orders on software owned by a marketplace"],
    fitThem: ["You sell on Amazon, eBay or Etsy and need them connected today", "Free shipping software or profit figures are your first priority"],
    sources: [
      { label: "veeqo.com", href: "https://www.veeqo.com/gb" },
      { label: "pricing", href: "https://www.veeqo.com/gb/pricing" },
      { label: "integrations", href: "https://www.veeqo.com/gb/integrations" },
      { label: "Profit Analyzer", href: "https://www.veeqo.com/profit-analyzer" },
      { label: "automation rules", href: "https://help.veeqo.com/en/articles/6349113-automation-rules" },
    ],
    checked: "November 2026",
  },
  {
    slug: "shipstation-uk",
    product: "ShipStation",
    linkText: "ShipStation alternative",
    title: "ShipStation Alternative UK for Shopify | skuspine",
    description: "A ShipStation alternative built for UK Shopify sellers: Royal Mail integration, Evri and DPD shipping automation, inventory sync and returns.",
    ogTitle: "The ShipStation Alternative for UK Shopify Sellers",
    h1: "The ShipStation Alternative for UK Shopify Sellers",
    intro: "ShipStation is shipping software: carriers, automations and discounts in one login. skuspine starts with UK shipping for Shopify, then carries on to stock, returns and the orders that need a decision.",
    advantagesHeading: "UK shipping, and the work around it",
    advantages: [
      { title: "Royal Mail, Evri and DPD", body: "Royal Mail integration for Shopify, plus Evri and DPD shipping automation for UK deliveries. Set a rule such as under 2kg, cheapest tracked, and it runs on every order." },
      { title: "Customs without the typing", body: "Documents for orders leaving the UK are filled in from your product details." },
      { title: "Stopped before the label", body: "An address that fails or an order with no matching rule waits for your team before you pay for postage." },
      { title: "Returns that restock", body: "Each return is sorted by reason, matched to its sale, then restocked, refurbished or written off, and stock follows." },
    ],
    comparison: [
      ["Core", "Back office for dispatch, inventory, exceptions and returns", "Shipping software with carriers, automations and discounts in one login"],
      ["UK carriers", "Royal Mail, Evri and DPD, plus DHL, FedEx and UPS", "200+ carriers, including Royal Mail, Evri, UPS and DPD"],
      ["Rates", "Compared on every order by your shipping rules", "Finds the cheapest, fastest or best-value option"],
      ["Profit", "Planned. Not available yet.", "Advanced dashboards for profitability, warehouse and inventory are among its plan features"],
      ["Order handling", "Shipped by rule, with one queue for anything blocked", "Orders prioritized by filters, tags and stores"],
      ["Returns", "Sorted by reason, matched to the order, then restocked or written off", "A branded return process"],
      ["Connections", CHANNELS, "400+ integrations, including Shopify, WooCommerce, Amazon, eBay, Etsy and TikTok Shop"],
    ],
    planned: [
      { title: "An operations assistant", body: "Plain English answers about orders on hold, costs and suppliers, with each person seeing only what their role allows." },
      { title: "A storefront widget", body: "Presale answers from live stock, with a route to another channel when an item is sold out." },
      { title: "Profit on every parcel", body: "Carrier charges, stock cost and refunds taken off each sale." },
    ],
    edge: [
      { title: "More carriers and integrations", body: "200+ carriers and 400+ integrations, with UK labels available without your own carrier contract." },
      { title: "Shipping depth", body: "If labels and carrier rates are all you need, ShipStation is built for exactly that." },
    ],
    fitUs: ["You sell on Shopify and deliver mostly in the UK", "You want stock and returns next to shipping", "You want problem orders stopped before they ship"],
    fitThem: ["You ship from many stores and marketplaces today", "You only need labels and carrier rates, or you need profit dashboards today"],
    sources: [
      { label: "shipstation.com/uk", href: "https://www.shipstation.com/uk/" },
      { label: "shipping integrations", href: "https://www.shipstation.com/en-gb/fulfillment/shipping/shipping-integrations/" },
      { label: "pricing", href: "https://www.shipstation.com/uk/pricing/" },
    ],
    checked: "November 2026",
  },
];
