import type { MetadataRoute } from "next";
import { getBaseURL } from "@/lib/base-url";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseURL = await getBaseURL();

  return {
    rules: [
      {
        userAgent: "*",
        crawlDelay: 60 * 60 * 24, // 1 day
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
