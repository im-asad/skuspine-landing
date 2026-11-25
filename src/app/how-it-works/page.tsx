import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import DemoLink from "@/components/site/DemoLink";
import { DemoPanel, Faq, PageHeading, Row } from "@/components/site/PageParts";
import { pageMetadata } from "@/components/site/seo";
import SubpageLayout from "@/components/site/SubpageLayout";

export const metadata: Metadata = pageMetadata({
  title: "How It Works: Shopify Dispatch Automation | skuspine",
  description: "See how skuspine runs a Shopify order: stock reserved, route picked, label bought, and tracking sent, with one queue for anything that needs a person.",
  path: "/how-it-works",
});

const SETUP = [
  { title: "Create your account", you: "Pick a plan and invite the people who handle orders, each with their own role.", done: "Your workspace is ready." },
  { title: "Connect Shopify", you: "Approve the connection from your store.", done: "Products, stock and new orders start to sync." },
  { title: "Add where you ship from", you: "Enter your warehouses and switch on the delivery partners you use.", done: "Every order now has places to ship from and ways to get there." },
  { title: "Write your rules once", you: "For example: under 2kg, cheapest tracked service.", done: "The rules run on every order from then on." },
];

const ORDER: { title: string; who: "skuspine" | "Your team" | "Delivery partner"; body: string; visual: ReactNode }[] = [
  {
    title: "The order lands and stock is held",
    who: "skuspine",
    body: "A sale on Shopify arrives as an order in skuspine. The items are reserved right away, so your store stops offering stock that has already been sold.",
    visual: (
      <>
        <Row label="Order SHP-88412" value={<b className="pg-chip">new</b>} />
        <Row label="SKU-1042 ×2" value="reserved" />
        <Row label="In the warehouse" value="14" />
        <Row label="Available on Shopify" value="12" strong />
      </>
    ),
  },
  {
    title: "Your rules choose the route",
    who: "skuspine",
    body: "skuspine compares the rates on the carrier accounts you enabled, then picks the warehouse, across multiple warehouses if you have them, and the cheapest service that still meets your delivery promise.",
    visual: (
      <>
        <Row label="Warehouse 1 · Next day" value="$8.20" />
        <Row label="Warehouse 1 · Tracked 24" value="$7.45" />
        <Row label="Warehouse 2 · Tracked 48 ✓" value="$6.10" strong />
      </>
    ),
  },
  {
    title: "Label, pick list and packing slip are made",
    who: "skuspine",
    body: "The label is bought, in batches when you have many orders, and the pick list and packing slip come straight from the order. Customs documents are generated for cross-border shipments.",
    visual: (
      <>
        <Row label="PACKING SLIP" value="#88412" />
        <div className="pg-dash" />
        <Row label="SKU-1042 ×2" value="2 items" />
        <Row label="Label" value="bought" />
        <div className="pg-barcode" />
      </>
    ),
  },
  {
    title: "Packed and handed over",
    who: "Your team",
    body: "Your team picks and packs from the slip, so the right items go in the box. The delivery partner collects.",
    visual: (
      <>
        <Row label="Picked" value={<b className="pg-chip">✓</b>} />
        <Row label="Packed" value={<b className="pg-chip">✓</b>} />
        <Row label="Collected" value={<b className="pg-chip">✓</b>} />
      </>
    ),
  },
  {
    title: "Tracking goes out, the order closes",
    who: "skuspine",
    body: "Tracking is sent to Shopify and your customer without anyone copying a number, and the order is closed.",
    visual: (
      <>
        <Row label="Tracking number" value={<b className="pg-chip">✓</b>} />
        <Row label="Sent to Shopify" value={<b className="pg-chip">✓</b>} />
        <Row label="Sent to customer" value={<b className="pg-chip">✓</b>} />
        <Row label="Order SHP-88412" value="closed" strong />
      </>
    ),
  },
];

const BLOCKED = [
  { problem: "Address could not be verified", choice: "Correct it, or ask the customer" },
  { problem: "Delivery partner rejected the parcel", choice: "Choose another service" },
  { problem: "Stock does not match the order", choice: "Ship from elsewhere, or hold" },
];

const RETURNS = [
  { title: "Logged", body: "With a reason, matched to the original order." },
  { title: "Restocked", body: "Back on sale, or written off if damaged." },
  { title: "Reviewed", body: "Unclear reasons wait for a person to decide." },
  { title: "Watched", body: "You are alerted when a product's defects go over your limit." },
];

const ROLES = [
  { who: "skuspine", items: ["Imports orders and reserves stock", "Compares rates and picks the route", "Buys labels and prepares documents", "Sends tracking and closes the order"] },
  { who: "Your team", items: ["Sets the rules and keeps product details accurate", "Decides what is in the exception queue", "Picks and packs"] },
  { who: "Delivery partner", items: ["Collects the parcels", "Delivers to the door", "Handles loss, damage and delay claims"] },
];

const FAQ = [
  { q: "Can I override a decision skuspine makes?", a: "Yes. It follows the rules you set, and you can review or change a decision from the exception queue." },
  { q: "Who pays for the shipping labels?", a: "Label charges are separate from your skuspine subscription. They are billed by the delivery partner or under your own carrier account, depending on how you set it up." },
  { q: "Does skuspine refund my customers?", a: "No. Refunds stay with Shopify's checkout. skuspine records the return against its order." },
  {
    q: "Which stores and carriers can I use?",
    a: (
      <>
        Shopify is live today. The full list, including what is coming next, is on the <Link href="/integrations">integrations page</Link>.
      </>
    ),
  },
];

export default function HowItWorksPage() {
  return (
    <SubpageLayout
      path="/how-it-works"
      tag="How it works"
      meta="From sale to doorstep"
      h1="How skuspine automates Shopify orders"
      intro="Set your rules once. From then on, every Shopify order is routed, labeled and tracked on its own, and your team only steps in when something needs a person."
      actions={
        <>
          <DemoLink className="alt-demo" location="how_it_works">
            Book a demo →
          </DemoLink>
          <Link href="/integrations" className="pg-secondary">
            See integrations
          </Link>
        </>
      }
    >
      <div className="alt-body">
        <section>
          <PageHeading text={["Set up shipping rules", "once"]} lead="Four steps, and you only do them the first time." />
          <ol className="pg-setup">
            {SETUP.map((s, i) => (
              <li key={s.title}>
                <span className="pg-setup-n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.you}</p>
                <p className="pg-setup-done">→ {s.done}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <PageHeading text={["Order routing, from", "sale to doorstep"]} lead="What happens to a single sale, from checkout to the door. Figures are sample data." />
          <ol className="pg-order">
            {ORDER.map((s, i) => (
              <li key={s.title}>
                <div className="pg-rail" aria-hidden="true">
                  <span className={s.who === "skuspine" ? "pg-dot" : "pg-dot pg-dot-team"}>{i + 1}</span>
                </div>
                <div className="pg-order-text">
                  <span className={s.who === "skuspine" ? "pg-who pg-who-us" : "pg-who"}>{s.who}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
                <div className="pg-visual" aria-hidden="true">
                  {s.visual}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="pg-blocked">
          <div>
            <span className="pg-label">IF SOMETHING BLOCKS AN ORDER</span>
            <h2>One queue. Your team decides.</h2>
            <p>Most orders never need you. The ones that do wait in a single queue with the full picture beside them. Make the call, and the order carries on from where it stopped.</p>
          </div>
          <ul>
            {BLOCKED.map((b) => (
              <li key={b.problem}>
                <strong>{b.problem}</strong>
                <span>{b.choice}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <PageHeading text={["Ecommerce returns", "management"]} lead="Returns management built into the same system as the sale, not bolted on." />
          <ol className="pg-returns">
            {RETURNS.map((r) => (
              <li key={r.title}>
                <span aria-hidden="true">↺</span>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <PageHeading text={["Who does", "what"]} />
          <div className="alt-cards alt-cards-3">
            {ROLES.map((r) => (
              <div key={r.who}>
                <h3>{r.who}</h3>
                <ul>
                  {r.items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Faq text={["Order automation", "questions"]} items={FAQ} />

        <DemoPanel text={["See it on", "your orders"]} body="Tell us how you ship today and we will walk through your kind of orders, not a generic tour." location="how_it_works" />
      </div>
    </SubpageLayout>
  );
}
