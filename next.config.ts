import type { NextConfig } from "next";
import { validateEnv } from "@/config/server-env";
import { SOCIAL_DATA } from "@/data/social";

validateEnv();

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  redirects: () => {
    return SOCIAL_DATA.filter((social) => social.name !== "Phone").map(
      (social) => {
        return {
          // Icons were used in the URL for better consistency.
          source: `/${social.icon.toLowerCase()}`,
          destination: social.url,
          permanent: true,
        };
      },
    );
  },
};

export default nextConfig;
