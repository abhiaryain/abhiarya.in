import type { MetadataRoute } from "next";
import { getDomain } from "@/lib/domain";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const domain = await getDomain();

  return {
    rules: [
      {
        userAgent: "*",
        crawlDelay: 60 * 60 * 24, // 1 day
      },
    ],
    sitemap: `${domain}/sitemap.xml`,
  };
}
