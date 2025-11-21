import type { Icons } from "@/components/icons";
import type { Tag } from "@/types";

export type Project = {
  name: string;
  description: string;
  url: string;
  icon: Icons;
  github: string;
  tags: readonly Tag[];
  featured: boolean;
};

export const PROJECT_DATA = [
  {
    name: "Learnings",
    description:
      "Learnings is a collection of tutorials and blog posts, designed to capture my ongoing learning journey and share practical insights with others.",
    url: "https://learnings.abhiarya.in",
    icon: "learnings",
    github: "https://github.com/abhiaryain/learnings",
    tags: [
      { name: "Next", icon: "next", url: "https://nextjs.org" },
      { name: "TailwindCSS", icon: "tailwind", url: "https://tailwindcss.com" },
      { name: "MDX", icon: "mdx", url: "https://mdxjs.com" },
    ],
    featured: true,
  },
] as const satisfies readonly Project[];
