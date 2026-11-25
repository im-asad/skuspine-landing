import type { Metadata } from "next";

export const SITE_URL = "https://www.skuspine.com";

/** Title, description, canonical address and social sharing tags for a page. Every page sets its own, because Next replaces openGraph rather than merging it. */
export function pageMetadata({ title, description, ogTitle = title, ogDescription = description, path }: { title: string; description: string; ogTitle?: string; ogDescription?: string; path: `/${string}` }): Metadata {
  const image = { url: "/og-image.png", width: 1200, height: 630, alt: "skuspine: Order fulfillment on autopilot." };
  return {
    title,
    description,
    // Links with tracking parameters such as ?utm_source= count as this page.
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: "skuspine", url: path, title: ogTitle, description: ogDescription, images: [image] },
    twitter: { card: "summary_large_image", title: ogTitle, description: ogDescription, images: [image] },
  };
}
