import type { Metadata } from "next";
import DemoForm from "@/components/site/DemoForm";
import { SiteHeader } from "@/components/site/SiteHeader";
import { pageMetadata } from "@/components/site/seo";
import { Footer } from "@/components/site/shared";
import { SubpageJsonLd } from "@/components/site/structuredData";

export const metadata: Metadata = pageMetadata({
  title: "skuspine · Book a demo",
  description: "Book a skuspine demo: answer a few quick questions, pick a time on Calendly, and see dispatch automation for Shopify on your kind of orders.",
  path: "/demo",
});

const STEPS = [
  { title: "Tell us about your business", body: "Four short steps about your stores, your orders and what you want off your plate." },
  { title: "Pick a time on Calendly", body: "Choose a slot that suits you. Your name and email are filled in already." },
  { title: "See it on your kind of orders", body: "We walk through your channels and your kind of orders instead of a generic tour." },
];

export default function DemoPage() {
  return (
    <>
      <SiteHeader />
      <div className="desk-frame legal-frame">
        <SubpageJsonLd path="/demo" name="Book a demo" />
        <section className="legal-hero">
          <div className="legal-meta">
            <span className="legal-tag">Demo</span>
            Takes about a minute
          </div>
          <h1>
            <span className="legal-title">Book a demo</span>
          </h1>
          <p>See how skuspine automates order fulfillment for Shopify sellers, from the order coming in to tracking at the door.</p>
        </section>

        <div className="demo-body">
          <section className="demo-steps">
            <h2>What happens next</h2>
            <ol>
              {STEPS.map((s, i) => (
                <li key={s.title}>
                  <span className="legal-badge" style={{ alignSelf: "flex-start", top: 1, minWidth: 10, textAlign: "center" }}>
                    {i + 1}
                  </span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          <DemoForm />
        </div>

        <Footer openAppOnDesktop={false} />
      </div>
    </>
  );
}
