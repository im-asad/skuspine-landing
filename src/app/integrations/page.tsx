import type { Metadata } from "next";
import Link from "next/link";
import DemoLink from "@/components/site/DemoLink";
import { CARRIERS, COMING_SOON_STORES, LIVE_STORES, REGIONS } from "@/components/site/landingContent";
import { DemoPanel, Faq, PageHeading } from "@/components/site/PageParts";
import { pageMetadata } from "@/components/site/seo";
import { CONTACT_EMAIL } from "@/components/site/shared";
import SubpageLayout from "@/components/site/SubpageLayout";

export const metadata: Metadata = pageMetadata({
  title: "Shopify Shipping and Store Integrations | skuspine",
  description: "Connect Shopify with Royal Mail, DPD, Evri, DHL, FedEx and UPS. See which stores and delivery partners skuspine supports today, and what comes next.",
  path: "/integrations",
});

/** What each store sells through. Stores without an entry show their name only. */
const STORE_NOTES: Record<string, string> = {
  Amazon: "Orders you ship yourself",
  eBay: "Marketplace listings",
  "TikTok Shop": "Social storefront",
  WooCommerce: "WordPress stores",
  Etsy: "Handmade and vintage",
};

const CARRIER_NOTES: Record<string, string> = {
  DHL: "Worldwide express and parcels",
  FedEx: "Worldwide express and parcels",
  UPS: "Worldwide express and parcels",
  DPD: "UK and European parcels",
  "Royal Mail": "UK letters and parcels",
  Evri: "UK parcels",
};

const SHOPIFY_SYNC = [
  ["In", "Orders, as they are placed"],
  ["In", "Products and stock"],
  ["Out", "Reserved and updated stock"],
  ["Out", "Prices"],
  ["Out", "Tracking for every parcel"],
];

const FLOW = [
  { name: "Your store", items: ["Orders", "Products", "Stock"] },
  { name: "skuspine", items: ["Reserves stock", "Compares rates", "Follows your rules", "Flags exceptions"] },
  { name: "Delivery partner", items: ["Labels", "Customs documents", "Collection"] },
];

const REGION_NAMES: Record<string, string> = { UK: "United Kingdom", US: "United States", EU: "European Union" };

const FAQ = [
  { q: "Do I need my own carrier accounts?", a: "It depends on the delivery partner. Labels are billed by the partner or under your own carrier account, as you set it up. We will go through the options for your carriers in a demo." },
  { q: "When will Amazon and eBay be ready?", a: "They are next after Shopify. Book a demo and tell us where you sell, so we can let you know when your channel opens." },
  {
    q: "How are my store and carrier connections protected?",
    a: (
      <>
        Access tokens are stored encrypted, are never written to logs and are not visible to our staff. Our <Link href="/privacy">privacy policy</Link> has the detail.
      </>
    ),
  },
  { q: "Will I need to set up again when a new store opens?", a: "No. New channels use the same adapter framework, so your warehouses, delivery partners and rules stay as they are." },
  {
    q: "What if you do not support my carrier?",
    a: (
      <>
        More carriers are available on request. Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and tell us which one.
      </>
    ),
  },
];

export default function IntegrationsPage() {
  return (
    <SubpageLayout
      path="/integrations"
      tag="Integrations"
      meta={`${LIVE_STORES.length} store live · ${CARRIERS.length} delivery partners`}
      h1="Shopify and courier integrations"
      intro="Connect your Shopify store on one side and your delivery partners on the other. skuspine runs the orders in between."
      actions={
        <>
          <DemoLink className="alt-demo" location="integrations">
            Book a demo →
          </DemoLink>
          <Link href="/how-it-works" className="pg-secondary">
            See how it works
          </Link>
        </>
      }
    >
      <div className="alt-body">
        <section>
          <PageHeading text={["How the integrations", "work"]} lead="Orders come in from your store, parcels go out with your carriers, and tracking returns on its own." />
          <div className="pg-flow">
            {FLOW.map((f, i) => (
              <div key={f.name} className={i === 1 ? "pg-flow-node pg-flow-us" : "pg-flow-node"}>
                <h3>{f.name}</h3>
                <ul>
                  {f.items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pg-flow-back">
            <span aria-hidden="true">↺</span> Tracking goes back to your store and your customer
          </div>
        </section>

        <section>
          <PageHeading text={["Store and marketplace", "integrations"]} />
          <div className="pg-stores">
            {LIVE_STORES.map((s) => (
              <div key={s} className="pg-store-live">
                <div className="pg-store-top">
                  <h3>{s}</h3>
                  <span className="ls-live">live</span>
                </div>
                <p>Inventory sync that keeps stock and prices honest, with dispatch automation built in.</p>
                <ul>
                  {SHOPIFY_SYNC.map(([way, what]) => (
                    <li key={what}>
                      <span>{way}</span>
                      {what}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="pg-stores-soon">
              {COMING_SOON_STORES.map((s) => (
                <div key={s}>
                  <div className="pg-store-top">
                    <h3>{s}</h3>
                    <span className="ls-soon">coming soon</span>
                  </div>
                  {STORE_NOTES[s] && <p>{STORE_NOTES[s]}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <PageHeading text={["UK and worldwide", "courier integrations"]} lead="Rates compared, labels bought and tracking sent back automatically. Royal Mail integration for Shopify, plus Evri and DPD shipping automation for UK deliveries." />
          <div className="pg-carriers">
            {CARRIERS.map((c) => (
              <div key={c}>
                <h3>{c}</h3>
                {CARRIER_NOTES[c] && <p>{CARRIER_NOTES[c]}</p>}
              </div>
            ))}
          </div>
          <p className="alt-note">Store and carrier names are trademarks of their owners. Customs documents are generated for every cross-border shipment.</p>
        </section>

        <section>
          <PageHeading text={["Sell across", "borders"]} lead="Each order stays in its own currency." />
          <div className="pg-regions">
            {REGIONS.map(([region, currency]) => (
              <div key={region}>
                <span className="pg-region">{region}</span>
                <h3>{REGION_NAMES[region] ?? region}</h3>
                <span className="pg-currency">{currency}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pg-request">
          <div>
            <h2>Missing something you use?</h2>
            <p>Tell us which store or carrier you need. It helps us decide what to connect next.</p>
          </div>
          <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Integration request")}`} className="pg-secondary">
            Request an integration
          </a>
        </section>

        <Faq text={["Integration", "questions"]} items={FAQ} />

        <DemoPanel text={["Bring your", "store and carriers"]} body="Tell us where you sell and who delivers, and we will show you both running in skuspine." location="integrations" />
      </div>
    </SubpageLayout>
  );
}
