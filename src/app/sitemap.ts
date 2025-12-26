import type { MetadataRoute } from "next";
import { PERSONAL_DATA } from "@/data/personal";
import { getBaseURL } from "@/lib/base-url";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = await getBaseURL();

  const routes = ["", "/projects"].map((route) => ({
    url: `${baseURL}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    images: [`${baseURL}${PERSONAL_DATA.image}`],
  })) as MetadataRoute.Sitemap;

  return routes;
}
