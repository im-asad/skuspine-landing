import type { ReactNode } from "react";
import { Footer } from "./shared";
import { SiteHeader } from "./SiteHeader";
import { SubpageJsonLd } from "./structuredData";

type SubpageProps = {
  path: `/${string}`;
  tag: string;
  meta: string;
  h1: string;
  intro: string;
  /** Buttons under the intro. */
  actions?: ReactNode;
  children: ReactNode;
};

/** Header, title block and footer of every page except the landing and legal pages. */
export default function SubpageLayout({ path, tag, meta, h1, intro, actions, children }: SubpageProps) {
  return (
    <>
      <SiteHeader />
      <div className="desk-frame legal-frame">
        <SubpageJsonLd path={path} name={h1} />
        <section className="legal-hero">
          <div className="legal-meta">
            <span className="legal-tag">{tag}</span>
            {meta}
          </div>
          <h1>
            <span className="legal-title">{h1}</span>
          </h1>
          <p>{intro}</p>
          {actions && <div className="alt-actions">{actions}</div>}
        </section>

        {children}

        <Footer openAppOnDesktop={false} />
      </div>
    </>
  );
}
