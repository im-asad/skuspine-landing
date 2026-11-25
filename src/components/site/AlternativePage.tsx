import type { Metadata } from "next";
import Link from "next/link";
import { ALTERNATIVES } from "./alternatives";
import DemoLink from "./DemoLink";
import { pageMetadata } from "./seo";
import SubpageLayout from "./SubpageLayout";

const find = (slug: string) => ALTERNATIVES.find((a) => a.slug === slug)!;

export function alternativeMetadata(slug: string): Metadata {
  const { title, description, ogTitle } = find(slug);
  return pageMetadata({ title, description, ogTitle, path: `/alternatives/${slug}` });
}

/** Template shared by the pages in src/app/alternatives. */
export default function AlternativePage({ slug }: { slug: string }) {
  const page = find(slug);
  const others = ALTERNATIVES.filter((a) => a.slug !== page.slug);

  return (
    <SubpageLayout
      path={`/alternatives/${page.slug}`}
      tag="Compare"
      meta={`skuspine and ${page.product}`}
      h1={page.h1}
      intro={page.intro}
      actions={
        <DemoLink className="alt-demo" location="alternative_page">
          Book a demo →
        </DemoLink>
      }
    >
      <div className="alt-body">
        <section>
          <h2>{page.advantagesHeading}</h2>
          <div className="alt-cards">
            {page.advantages.map((a) => (
              <div key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>skuspine and {page.product}, side by side</h2>
          <table className="alt-table">
            <thead>
              <tr>
                <td />
                <th scope="col">skuspine</th>
                <th scope="col">{page.product}</th>
              </tr>
            </thead>
            <tbody>
              {page.comparison.map(([feature, us, them]) => (
                <tr key={feature}>
                  <th scope="row">{feature}</th>
                  <td data-label="skuspine">{us}</td>
                  <td data-label={page.product}>{them}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="alt-note">
            Details about {page.product} come from its own website, checked {page.checked}, and may have changed:{" "}
            {page.sources.map((s, i) => (
              <span key={s.href}>
                {i > 0 && ", "}
                <a href={s.href} rel="nofollow noopener">
                  {s.label}
                </a>
              </span>
            ))}
            . {page.product} is a trademark of its owner. skuspine is not affiliated with it.
          </p>
        </section>

        <section>
          <h2>What we plan to build next</h2>
          <p className="alt-lead">These are not available yet.</p>
          <div className="alt-cards alt-cards-3">
            {page.planned.map((p) => (
              <div key={p.title}>
                <span className="alt-planned">Planned</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Where {page.product} has the edge</h2>
          <div className="alt-cards">
            {page.edge.map((e) => (
              <div key={e.title}>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Which one fits</h2>
          <div className="alt-cards">
            <div>
              <h3>skuspine is a good fit if</h3>
              <ul>
                {page.fitUs.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{page.product} may suit you better if</h3>
              <ul>
                {page.fitThem.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <nav className="alt-others" aria-label="Other comparisons">
          Also comparing:
          {others.map((o) => (
            <Link key={o.slug} href={`/alternatives/${o.slug}`}>
              {o.linkText}
            </Link>
          ))}
        </nav>
      </div>
    </SubpageLayout>
  );
}
