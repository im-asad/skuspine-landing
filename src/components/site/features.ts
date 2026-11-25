/**
 * Everything on the features page. House style: no em dashes.
 * Only list features customers can use. Everything else belongs in PLANNED.
 */
type Feature = { title: string; body: string };

/** Sample screen beside a group: label, value, and whether the row is highlighted. */
type SampleRow = [label: string, value: string, strong?: true];

type FeatureGroup = {
  id: string;
  /** Short name for the list of topics at the top. */
  nav: string;
  /** Heading: the plain part, then the highlighted part. */
  heading: [string, string];
  lead: string;
  sample: SampleRow[];
  features: Feature[];
};

export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    id: "orders",
    nav: "Orders",
    heading: ["Shopify order", "management"],
    lead: "Every order arrives on its own, complete, and only once.",
    sample: [
      ["SHP-88412", "stock held"],
      ["SHP-88413", "label bought"],
      ["SHP-88414", "tracking sent", true],
    ],
    features: [
      { title: "Automatic order import", body: "Shopify orders appear as they are placed. If the same order is sent twice, it is still counted once." },
      { title: "Missed order checks", body: "Orders and stock are compared with Shopify every fifteen minutes, so one that slipped through is found and brought in." },
      { title: "Order history from day one", body: "Past orders are imported when you connect, so your reports do not start empty." },
      { title: "Orders that arrive as files", body: "PDF, CSV and spreadsheet orders are read into the same flow. Anything unclear is held for you to confirm instead of being guessed." },
      { title: "One order workspace", body: "Search and filter every order, and see each step it went through and when." },
      { title: "Automation rate", body: "See what share of your orders shipped without anyone touching them, day by day." },
    ],
  },
  {
    id: "routing",
    nav: "Routing rules",
    heading: ["Order routing and", "shipping rules automation"],
    lead: "Write down how you ship once. skuspine follows it on every order.",
    sample: [
      ["UK, under 2kg", "cheapest tracked", true],
      ["UK, next day", "Warehouse 1"],
      ["No rule matches", "hold for review"],
    ],
    features: [
      { title: "Rules that fit how you ship", body: "Match on product, destination, weight, size, order value, service level or stock location, in the order you choose." },
      { title: "Warehouse, carrier and service", body: "Each rule picks where the order ships from, who delivers it and how fast, or holds it for a person." },
      { title: "Test before you switch on", body: "Try a new rule on recent orders and read the decision, and the reason for it, on each one." },
      { title: "No silent guesses", body: "An order that matches nothing uses your default or waits. It is never shipped on an assumption." },
      { title: "Rule history", body: "Who changed a rule, when they changed it, and what is different now." },
    ],
  },
  {
    id: "shipping",
    nav: "Labels and dispatch",
    heading: ["Batch shipping", "label software"],
    lead: "From a list of orders to printed labels on one screen.",
    sample: [
      ["Batch of orders", "240"],
      ["Labels bought", "239"],
      ["Sent to exceptions", "1"],
      ["Ready to pick", "239", true],
    ],
    features: [
      { title: "Rate shopping", body: "Rates are compared across the carriers you enabled, and the best one under your rules is picked." },
      { title: "Labels in batches", body: "Select orders, then buy every label in one action. One problem order steps aside and the rest carry on." },
      { title: "Never two labels by mistake", body: "If buying a label is interrupted and tried again, you get the original label back and do not pay twice." },
      { title: "Pick lists and packing slips", body: "Pick lists are grouped by stock location, with a packing slip for every order." },
      { title: "Scan to confirm", body: "Your warehouse confirms each parcel by scan, or a whole batch at once." },
      { title: "Customs documents", body: "Filled in from your product details for orders that cross a border." },
      { title: "More than one parcel", body: "Split an order across several packages under a single shipment." },
      { title: "Void a label", body: "Cancel a label, and the order goes back to the dispatch list, ready to ship again." },
      { title: "Tracking sent back", body: "The tracking number is written to the Shopify order. Nobody copies and pastes." },
    ],
  },
  {
    id: "exceptions",
    nav: "Exceptions",
    heading: ["One queue for", "order exceptions"],
    lead: "Your team makes decisions. It does not go looking for problems.",
    sample: [
      ["Address not verified", "2"],
      ["Carrier rejected", "1"],
      ["Customer left a note", "1"],
      ["Back on its way", "done", true],
    ],
    features: [
      { title: "Every blocked order in one place", body: "Bad addresses, rejected parcels, stock conflicts, fraud holds from Shopify and customer notes all land in the same queue." },
      { title: "The full picture attached", body: "Each one comes with what went wrong and the actions you can take." },
      { title: "Picks up where it stopped", body: "Resolve it, and the order continues from the same step with nothing to key in again." },
      { title: "Your own rules for stopping", body: "Choose what counts as an exception, and loosen it as your confidence grows." },
      { title: "Team tools", body: "Assign an exception to someone and see how long it has waited." },
      { title: "Resolve together", body: "Clear exceptions that share a cause in one go." },
    ],
  },
  {
    id: "inventory",
    nav: "Inventory",
    heading: ["Shopify inventory", "management"],
    lead: "One stock record, held the moment something sells.",
    sample: [
      ["Warehouse 1", "8"],
      ["Warehouse 2", "6"],
      ["Reserved", "- 2"],
      ["Available on Shopify", "12", true],
    ],
    features: [
      { title: "Prevent overselling", body: "Stock is reserved as the order arrives. Two people cannot both buy the last unit." },
      { title: "Multi location inventory", body: "Stock by warehouse, with your choice of which one is used first." },
      { title: "Bundles and kits", body: "A bundle sells from its components, and shows as sold out when one of them runs out." },
      { title: "Stock check every fifteen minutes", body: "Counts are compared with Shopify, differences are corrected and logged, and you are warned about a likely oversell." },
      { title: "Adjustments with a reason", body: "Every manual change records who made it, when and why." },
    ],
  },
  {
    id: "returns",
    nav: "Returns",
    heading: ["Ecommerce returns", "management"],
    lead: "Know why products come back, and what happened to them.",
    sample: [
      ["Reason", "quality defect"],
      ["Original order", "SHP-88412"],
      ["Decision", "restock"],
      ["Back in stock", "1", true],
    ],
    features: [
      { title: "Returns sorted by reason", body: "Defect, change of mind, delivery damage, wrong item or not as described, with a review step for unclear ones." },
      { title: "Restock, refurbish or write off", body: "Record the decision, and stock updates to match." },
      { title: "Matched to the order", body: "Every return is linked to the order it came from." },
      { title: "Defect alerts", body: "Set a limit and hear about it when a product's defects go over." },
    ],
  },
  {
    id: "team",
    nav: "Team and setup",
    heading: ["Team roles and", "guided setup"],
    lead: "From sign up to your first automatic order, step by step.",
    sample: [
      ["Store connected", "✓"],
      ["Products imported", "✓"],
      ["Carriers added", "✓"],
      ["First order shipped", "✓", true],
    ],
    features: [
      { title: "Roles for your team", body: "Give each person the access they need. Warehouse staff can pick and dispatch without seeing your commercial details." },
      { title: "A home screen that matters", body: "Orders waiting, exceptions, stock at risk and connection health. Every number opens up." },
      { title: "Setup checklist", body: "Store, products, stock, carriers and your first rule, with progress saved." },
      { title: "Spreadsheet import", body: "Map your columns and preview the result. A file with errors is reported row by row, and none of it is saved." },
      { title: "Starter rules", body: "Suggested shipping rules based on where you sell and ship, for you to approve." },
      { title: "Help connecting", body: "We can guide the connection while you approve it in your own Shopify account. Our team never sees your login." },
    ],
  },
];

/** Names only. Not available yet. */
export const PLANNED = [
  "Purchase orders and landed cost",
  "Margin tracking",
  "Bulk pricing and promotions",
  "Supplier quality scores",
  "More stores",
  "Operations assistant",
  "Storefront assistant",
  "AI listings",
  "Product sourcing",
  "Public API and webhooks",
];
