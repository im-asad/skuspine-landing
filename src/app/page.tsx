import type { Metadata } from "next";
import Landing from "@/components/site/Landing";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/components/site/landingContent";
import { pageMetadata } from "@/components/site/seo";
import { HomeJsonLd } from "@/components/site/structuredData";

export const metadata: Metadata = pageMetadata({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  ogTitle: "skuspine: Shopify Order Fulfillment, Automated",
  ogDescription: "Ship 10x the orders with the same team. Automated routing, batch labels, and inventory sync, built for Shopify sellers.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <Landing />
    </>
  );
}
