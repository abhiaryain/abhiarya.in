import type { MetadataRoute } from "next";
import { PERSONAL_DATA } from "@/data/personal";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: PERSONAL_DATA.nickname,
    short_name: PERSONAL_DATA.nickname.split(" ")[0],
    description: PERSONAL_DATA.summary,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
