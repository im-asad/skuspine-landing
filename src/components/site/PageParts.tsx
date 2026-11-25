import type { ReactNode } from "react";
import DemoLink from "./DemoLink";
import "./pages.css";

/** Section heading: a plain part, then a highlighted part. */
export function PageHeading({ text, lead }: { text: [string, string]; lead?: string }) {
  return (
    <div className="pg-heading">
      <h2>
        {text[0]} <span>{text[1]}</span>
      </h2>
      {lead && <p>{lead}</p>}
    </div>
  );
}

/** One line of a sample screen. */
export function Row({ label, value, strong }: { label: ReactNode; value: ReactNode; strong?: boolean }) {
  return (
    <div className={strong ? "pg-row pg-row-strong" : "pg-row"}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

export function Faq({ text, items }: { text: [string, string]; items: { q: string; a: ReactNode }[] }) {
  return (
    <section>
      <PageHeading text={text} />
      <div className="pg-faq">
        {items.map(({ q, a }) => (
          <details key={q}>
            <summary>
              <h3>{q}</h3>
              <span aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/** Closing panel with the demo button. */
export function DemoPanel({ text, body, location }: { text: [string, string]; body: string; location: string }) {
  return (
    <section className="pg-panel">
      <PageHeading text={text} lead={body} />
      <DemoLink className="alt-demo" location={location}>
        Book a demo →
      </DemoLink>
    </section>
  );
}
