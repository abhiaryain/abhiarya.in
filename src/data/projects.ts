import type { Icons } from "@/components/icons";
import type { Tag } from "@/types";

export type Project = {
  name: string;
  description: string;
  url: string;
  icon: Icons;
  preview: string;
  links: Tag[];
  tags: readonly Tag[];
  featured: boolean;
};

export const PROJECT_DATA = [
  {
    name: "Currunt",
    description:
      "A unified AI powerhouse for creation, design, and automation — transforming ideas into polished results within seconds.",
    url: "https://currunt.in",
    icon: "currunt",
    preview: "/avatar.webp",
    links: [
      {
        name: "Github",
        url: "https://github.com/curruntin/currunt",
        icon: "github",
      },
      {
        name: "Website",
        url: "https://currunt.in",
        icon: "link",
      },
    ],
    tags: [
      { name: "Next", icon: "next", url: "https://nextjs.org" },
      { name: "Bun", icon: "bun", url: "https://bun.sh" },
      { name: "hono", icon: "hono", url: "https://honojs.dev" },
      { name: "AI SDK", icon: "ai-sdk", url: "https://ai-sdk.dev" },
    ],
    featured: true,
  },
  {
    name: "Learnings",
    description:
      "Learnings is a collection of tutorials and blog posts, designed to capture my ongoing learning journey and share practical insights with others.",
    url: "https://learnings.abhiarya.in",
    icon: "learnings",
    preview: "/avatar.webp",
    links: [
      {
        name: "Github",
        url: "https://github.com/abhiaryain/learnings",
        icon: "github",
      },
      {
        name: "Learnings",
        url: "https://learnings.abhiarya.in",
        icon: "link",
      },
    ],
    tags: [
      { name: "Next", icon: "next", url: "https://nextjs.org" },
      { name: "TailwindCSS", icon: "tailwind", url: "https://tailwindcss.com" },
      { name: "MDX", icon: "mdx", url: "https://mdxjs.com" },
    ],
    featured: true,
  },
] as const satisfies readonly Project[];
