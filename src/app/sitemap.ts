import type { MetadataRoute } from "next";
import { PERSONAL_DATA } from "@/data/personal";
import { getDomain } from "@/lib/domain";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = await getDomain();

  const url = new URL(domain);
  const routes = ["", "/projects"].map((route) => ({
    url: `${url}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    images: [`${domain}/${PERSONAL_DATA.image}`],
  })) as MetadataRoute.Sitemap;

  return routes;
}
