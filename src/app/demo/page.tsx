import type { Metadata } from "next";
import DemoForm from "@/components/site/DemoForm";
import { pageMetadata } from "@/components/site/seo";
import SubpageLayout from "@/components/site/SubpageLayout";

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
    <SubpageLayout path="/demo" tag="Demo" meta="Takes about a minute" h1="Book a demo" intro="See how skuspine automates order fulfillment for Shopify sellers, from the order coming in to tracking at the door.">
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
    </SubpageLayout>
  );
}
