import { SITE_DESCRIPTION } from "./landingContent";
import { CONTACT_EMAIL } from "./shared";

/**
 * Structured data (JSON-LD) for search engines. Only state what visitors can also see on the site:
 * no ratings, prices, addresses or social profiles until they are real and published.
 */
const SITE_URL = "https://www.skuspine.com";
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#software`;

type Thing = { "@type": string } & Record<string, unknown>;

function JsonLd({ graph }: { graph: Thing[] }) {
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

/** Who runs the site. Included on every page. */
export function SiteJsonLd() {
  return (
    <JsonLd
      graph={[
        {
          "@type": "Organization",
          "@id": ORGANIZATION_ID,
          name: "skuspine",
          url: `${SITE_URL}/`,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/apple-icon.png`, width: 180, height: 180 },
          email: CONTACT_EMAIL,
        },
        { "@type": "WebSite", "@id": WEBSITE_ID, name: "skuspine", url: `${SITE_URL}/`, inLanguage: "en", publisher: { "@id": ORGANIZATION_ID } },
      ]}
    />
  );
}

/** The product, for the landing page. */
export function HomeJsonLd() {
  return (
    <JsonLd
      graph={[
        {
          "@type": "WebPage",
          "@id": `${SITE_URL}/#webpage`,
          url: `${SITE_URL}/`,
          name: "skuspine · Order fulfillment on autopilot",
          description: SITE_DESCRIPTION,
          inLanguage: "en",
          isPartOf: { "@id": WEBSITE_ID },
          about: { "@id": APP_ID },
        },
        {
          "@type": "SoftwareApplication",
          "@id": APP_ID,
          name: "skuspine",
          url: `${SITE_URL}/`,
          description: SITE_DESCRIPTION,
          applicationCategory: "BusinessApplication",
          applicationSubCategory: "Ecommerce order fulfillment software",
          operatingSystem: "Web",
          publisher: { "@id": ORGANIZATION_ID },
          audience: { "@type": "BusinessAudience", audienceType: "Shopify sellers" },
          featureList: [
            "Automated order routing across warehouses",
            "Delivery partner rate comparison and shipping rules",
            "Automatic shipping label buying",
            "Pick lists and packing slips",
            "Shopify inventory sync",
            "Tracking sent back automatically",
            "Profit per order and SKU level profitability",
            "Exception queue for blocked orders",
            "Returns and refunds management",
          ],
        },
      ]}
    />
  );
}

/** A legal page and its place under the home page. */
export function LegalJsonLd({ path, name }: { path: `/${string}`; name: string }) {
  const url = `${SITE_URL}${path}`;
  return (
    <JsonLd
      graph={[
        { "@type": "WebPage", "@id": `${url}#webpage`, url, name, inLanguage: "en", isPartOf: { "@id": WEBSITE_ID }, breadcrumb: { "@id": `${url}#breadcrumb` } },
        {
          "@type": "BreadcrumbList",
          "@id": `${url}#breadcrumb`,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "skuspine", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name, item: url },
          ],
        },
      ]}
    />
  );
}
