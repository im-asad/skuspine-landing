import type { MetadataRoute } from "next";
import { ALTERNATIVES } from "@/components/site/alternatives";
import { SITE_URL } from "@/components/site/seo";

/** Every public page. Add new pages here. No dates: Google only trusts lastmod when it is kept accurate. */
const PATHS = ["/", "/demo", ...ALTERNATIVES.map((a) => `/alternatives/${a.slug}`), "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({ url: `${SITE_URL}${path}` }));
}
