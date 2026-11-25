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
    description: "Looking for a Linnworks alternative? skuspine runs Shopify dispatch automation, inventory sync, and real time profit tracking in one system.",
    ogTitle: "A Linnworks Alternative Built for Shopify",
    h1: "The Linnworks Alternative for Shopify Sellers",
    intro: "Linnworks centralizes order routing, stock syncing and shipping workflows. skuspine combines dispatch automation with real time net margin in a single ledger, so what moved and what it earned live in the same place.",
    advantagesHeading: "What skuspine does differently",
    advantages: [
      { title: "A native net margin engine", body: "Label costs captured at purchase, settlement fees, ad spend, exchange rates and return costs sit in the same ledger as the order. No profit tool to connect and no month end spreadsheet." },
      { title: "Margin floor guardrails", body: "Set a minimum margin. Orders below it wait in the exception queue for a person to decide, and you see the margin impact of a bulk discount before it goes live." },
      { title: "Returns traced to the supplier", body: "Each return is classified by reason and traced to the purchase order and batch it came from, so suppliers are scored on what their defects cost you." },
      { title: "Orders that arrive as files", body: "Orders and supplier files in PDF, CSV or spreadsheet form are read into the same dispatch flow. Uncertain fields go to the exception queue instead of being keyed in again." },
    ],
    comparison: [
      ["Core", "One database for orders, stock batches, landed cost, ad spend, fees and returns", "A hub connecting inventory, orders, warehouses, listings and shipping carriers"],
      ["Profit and margin", "Net margin per order, SKU, channel and supplier, after landed cost, ad spend, carrier charges and returns", "Profitability per SKU and channel. Ad spend and profit analytics through the Conjura integration."],
      ["Automation", "Order routing rules with a margin floor that holds unprofitable orders", "Rules Engine with unlimited rules"],
      ["AI", "Reads order and supplier files. An operations assistant and storefront widget are planned.", "Spotlight AI finds repetitive manual work and recommends which rules to set up"],
      ["Sales channels", CHANNELS, "100+ channels, including Amazon, eBay, Walmart, Shopify and TikTok Shop"],
      ["Shipping", "DHL, FedEx, UPS, DPD, Royal Mail and Evri", "70+ shipping providers and aggregators, including Amazon Shipping, FedEx and Royal Mail"],
      ["Pricing", PRICING, "By quote, tiered by monthly orders"],
    ],
    planned: [
      { title: "An operations assistant", body: "Ask about held orders, batch landed costs or supplier defect rates in plain English. Permissions follow each person's role, and every action is proposed for a person to approve." },
      { title: "A storefront widget", body: "Answers presale questions from live stock, points shoppers to another channel when an item is sold out, and collects restock requests." },
      { title: "Product sourcing", body: "New products modeled on the same margin engine, then checked against what they really made after launch." },
    ],
    edge: [
      { title: "More connections", body: "100+ channels and 70+ shipping providers, ready today. We go deeper on fewer channels first." },
      { title: "A mature platform", body: "Established warehouse and inventory management. skuspine is in beta." },
    ],
    fitUs: ["Shopify is your main or only store", "You want to know the net margin on each order, not only by SKU or channel", "You want unprofitable orders stopped before the label is bought"],
    fitThem: ["You need many marketplaces connected today", "You need detailed warehouse management"],
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
    description: "Compare skuspine to Veeqo: automated order routing, batch shipping labels, and profit per order for Shopify sellers, all in one system.",
    ogTitle: "A Veeqo Alternative Built for Shopify",
    h1: "The Veeqo Alternative for Shopify Sellers",
    intro: "Veeqo is Amazon's multichannel shipping and inventory software. skuspine is a back office for Shopify sellers, where every order carries its own costs and margin decides what ships without a second look.",
    advantagesHeading: "Why Shopify sellers choose a margin ledger",
    advantages: [
      { title: "True landed cost", body: "Supplier freight and customs duty are allocated to each batch you receive, and the exchange rate is locked for every transaction, so stock has a real cost and not only a count." },
      { title: "Order routing that checks the margin", body: "Rules pick the warehouse and the cheapest delivery partner that meets your promise. An order under your margin floor pauses before money is spent on a label." },
      { title: "Batch labels, packed right", body: "Labels are bought in batches, with pick lists and packing slips straight from the orders." },
      { title: "Discounts you can preview", body: "Bulk pricing and promotions show their effect on margin before you commit, with a price of its own for each channel where you need one." },
    ],
    comparison: [
      ["Core", "Back office combining dispatch, landed cost and net margin", "Amazon's multichannel shipping and inventory management software"],
      ["Stock cost", "Freight and duty allocated to each receipt batch, with the exchange rate locked", "Inventory sync across channels"],
      ["Profit", "Net margin per order, SKU, channel and supplier", "Profit Analyzer brings together sales, fees, COGS and ad spend, including Shopify and eBay"],
      ["Rules", "Choose the warehouse and delivery partner, and hold orders below your margin floor", "Assign shipping services and stock allocation by criteria you choose"],
      ["Labels", "Bought in batches, with pick lists and packing slips", "Bulk ship up to 100 orders in one click"],
      ["UK carriers", "DPD, Royal Mail and Evri, plus DHL, FedEx and UPS", "Royal Mail, Evri and DPD, plus Amazon Shipping and FedEx"],
      ["Sales channels", CHANNELS, "Amazon, Shopify, eBay, WooCommerce, TikTok Shop, Etsy and more"],
      ["Pricing", PRICING, "Shipping features free. Inventory plan from £17 a month including VAT."],
    ],
    planned: [
      { title: "A storefront widget", body: "Shoppers get answers from live stock, and a route to another channel or a restock list when something is sold out." },
      { title: "Listing help", body: "Listings written for each platform, informed by the questions customers keep asking." },
      { title: "Sourcing decisions", body: "Candidates for your range, modeled on past margin and returns before you place an order." },
    ],
    edge: [
      { title: "Price", body: "Veeqo's shipping features are free. It makes a commission on labels bought through it." },
      { title: "More channels", body: "Amazon, eBay, Etsy and others connect today. Our first channel is Shopify." },
    ],
    fitUs: ["Shopify is where your orders come from", "You import stock and need freight and duty in your costs", "You would rather not run orders on software owned by a marketplace"],
    fitThem: ["You sell on Amazon, eBay or Etsy and need them connected today", "Free shipping software is your first priority"],
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
    description: "A ShipStation alternative built for UK Shopify sellers: Royal Mail integration, Evri and DPD shipping automation, plus real time margin tracking.",
    ogTitle: "The ShipStation Alternative for UK Shopify Sellers",
    h1: "The ShipStation Alternative for UK Shopify Sellers",
    intro: "ShipStation is shipping software: carriers, automations and discounts in one login. skuspine starts with UK shipping for Shopify, then carries on to what each order cost you and what it made.",
    advantagesHeading: "UK shipping, with the margin attached",
    advantages: [
      { title: "Royal Mail, Evri and DPD", body: "Royal Mail integration for Shopify, plus Evri and DPD shipping automation for UK deliveries. Set a rule such as under 2kg, cheapest tracked, and it runs on every order." },
      { title: "Margin tracking in real time", body: "The carrier charge on each parcel comes straight off that order's profit, alongside landed cost, fees, ad spend and returns." },
      { title: "Dispatch that knows the profit", body: "Each order is checked against a margin floor you set. Unprofitable ones wait in the exception queue before a label is bought." },
      { title: "Returns that score suppliers", body: "A return is restocked or written off, its postage comes off the order's margin, and it is tied back to the supplier batch it came from." },
    ],
    comparison: [
      ["Core", "Back office combining dispatch, landed cost and net margin", "Shipping software with carriers, automations and discounts in one login"],
      ["UK carriers", "Royal Mail, Evri and DPD, plus DHL, FedEx and UPS", "200+ carriers, including Royal Mail, Evri, UPS and DPD"],
      ["Rates", "Compared on every order by your shipping rules", "Finds the cheapest, fastest or best-value option"],
      ["Profit", "Net margin per order, SKU, channel and supplier", "Advanced dashboards for profitability, warehouse and inventory are among its plan features"],
      ["Margin checks", "A margin floor holds unprofitable orders before a label is bought", "Orders prioritized by filters, tags and stores"],
      ["Returns", "Logged, restocked and taken off the order's margin, then traced to the supplier", "A branded return process"],
      ["Connections", CHANNELS, "400+ integrations, including Shopify, WooCommerce, Amazon, eBay, Etsy and TikTok Shop"],
    ],
    planned: [
      { title: "An operations assistant", body: "Plain English answers about orders on hold, costs and suppliers, with each person seeing only what their role allows." },
      { title: "A storefront widget", body: "Presale answers from live stock, with a route to another channel when an item is sold out." },
      { title: "Sourcing on real margin", body: "New products judged on landed cost and returns, then compared with how they performed." },
    ],
    edge: [
      { title: "More carriers and integrations", body: "200+ carriers and 400+ integrations, with UK labels available without your own carrier contract." },
      { title: "Shipping depth", body: "If labels and carrier rates are all you need, ShipStation is built for exactly that." },
    ],
    fitUs: ["You sell on Shopify and deliver mostly in the UK", "You want stock cost, returns and margin next to shipping", "You want to stop orders that lose money before they ship"],
    fitThem: ["You ship from many stores and marketplaces today", "You only need labels and carrier rates"],
    sources: [
      { label: "shipstation.com/uk", href: "https://www.shipstation.com/uk/" },
      { label: "shipping integrations", href: "https://www.shipstation.com/en-gb/fulfillment/shipping/shipping-integrations/" },
      { label: "pricing", href: "https://www.shipstation.com/uk/pricing/" },
    ],
    checked: "November 2026",
  },
];
