import type { Metadata } from "next";
import Link from "next/link";
import DemoLink from "@/components/site/DemoLink";
import { FEATURE_GROUPS, PLANNED } from "@/components/site/features";
import FeatureTopics from "@/components/site/FeatureTopics";
import { DemoPanel, Faq, PageHeading, Row } from "@/components/site/PageParts";
import { pageMetadata } from "@/components/site/seo";
import SubpageLayout from "@/components/site/SubpageLayout";

export const metadata: Metadata = pageMetadata({
  title: "Shopify Order Management Software Features | skuspine",
  description: "Explore skuspine features for Shopify: order management, order routing, batch shipping labels, multi location inventory and returns management.",
  path: "/features",
});

const TOPICS = [...FEATURE_GROUPS.map((g) => ({ id: g.id, label: g.nav })), { id: "planned", label: "Planned" }];

const FAQ = [
  { q: "Is everything on this page available today?", a: "Yes, apart from the list under planned next. skuspine is in beta, and we are adding to it." },
  {
    q: "Which stores does this work with?",
    a: (
      <>
        Shopify is live today. Amazon, eBay, TikTok Shop, WooCommerce and Etsy are coming. See the <Link href="/integrations">integrations page</Link>.
      </>
    ),
  },
  { q: "Does skuspine replace a warehouse management system?", a: "It makes pick lists, packing slips and labels, and confirms parcels by scan. It does not manage individual bins or warehouse robots." },
  { q: "Can it ship orders handled by a fulfillment company?", a: "skuspine ships the orders you fulfill yourself. Orders another company fulfills for you are not dispatched by skuspine." },
];

export default function FeaturesPage() {
  return (
    <SubpageLayout
      path="/features"
      tag="Features"
      meta="From order to return"
      h1="Shopify order management software"
      intro="Orders, stock, shipping and returns for your Shopify store, in one system."
      actions={
        <>
          <DemoLink className="alt-demo" location="features">
            Book a demo →
          </DemoLink>
          <Link href="/how-it-works" className="pg-secondary">
            See how it works
          </Link>
        </>
      }
    >
      <div className="alt-body pg-features">
        <div>
          <FeatureTopics topics={TOPICS} />
          <p className="pg-beta">Screens use sample data.</p>
        </div>

        {FEATURE_GROUPS.map((g) => (
          <section key={g.id} id={g.id} tabIndex={-1} className="pg-group">
            <div className="pg-group-intro">
              <PageHeading text={g.heading} lead={g.lead} />
              <div className="pg-visual" aria-hidden="true">
                {g.sample.map(([label, value, strong]) => (
                  <Row key={label} label={label} value={value} strong={strong} />
                ))}
              </div>
            </div>
            <ul className="pg-group-list">
              {g.features.map((f) => (
                <li key={f.title}>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section id="planned" tabIndex={-1} className="pg-group-planned">
          <PageHeading text={["What is", "planned next"]} />
          <ul className="pg-planned">
            {PLANNED.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </section>

        <Faq text={["Feature", "questions"]} items={FAQ} />

        <DemoPanel text={["See the features", "on your orders"]} body="Tell us how you ship today and we will show you the parts that matter to you." location="features" />
      </div>
    </SubpageLayout>
  );
}
