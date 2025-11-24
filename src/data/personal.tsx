import type { JSX } from "react";
import { TagList } from "@/components/tag-list/tag-list";
import type { Tag } from "@/types";

export type Address = {
  state: string;
  country: string;
  url: string;
};

export type Personal = {
  name: string;
  nickname: string;
  title: string;

  /* 
    avatar: The primary avatar image URL used throughout the site in AvatarComponents.  
    You can use either a local image from the `public` folder or an external image URL.  
    Example: https://avatars.githubusercontent.com/u/188953429?v=4  
  */
  avatar: string;

  /* 
  image: A fallback image for AvatarComponents, displayed while the main avatar loads or if it fails to load.  
  This should be a lightweight and reliable image to ensure faster rendering.  
  You can use either a local image from the `public` folder or an external image URL.  
  Example: /avatar.webp  
*/
  image: string;
  portfolio: string;
  github: string;
  twitter: string;
  linkedin: string;
  phones: string[];
  emails: string[];
  bio: string;
  summary: string;
  about: JSX.Element;
  address: Address;
};

const tags = [
  {
    name: "TypeScript",
    icon: "typescript",
    url: "https://www.typescriptlang.org",
  },
  {
    name: "Node",
    icon: "node",
    url: "https://nodejs.org",
  },
  {
    name: "Postgres",
    icon: "postgres",
    url: "https://www.postgresql.org",
  },
  {
    name: "Redis",
    icon: "redis",
    url: "https://redis.io",
  },
  {
    name: "Docker",
    icon: "docker",
    url: "https://www.docker.com",
  },
  {
    name: "Kafka",
    icon: "kafka",
    url: "https://kafka.apache.org",
  },
  {
    name: "AWS",
    icon: "aws",
    url: "https://aws.amazon.com",
  },
] as const satisfies readonly Tag[];

const currentProjects = [
  {
    name: "Currunt",
    icon: "currunt",
    url: "https://currunt.in",
  },
] as const satisfies readonly Tag[];

const learnings = [
  {
    name: "learnings",
    icon: "learnings",
    url: "https://learnings.abhiarya.in",
  },
] as const satisfies readonly Tag[];

export const PERSONAL_DATA = {
  name: "Abhishek Kumar",
  nickname: "Abhi Arya",
  title: "Software Engineer",
  avatar: "https://avatars.githubusercontent.com/u/245309237?v=4",
  image: "/avatar.webp",
  portfolio: "https://abhiarya.in",
  github: "abhiaryain",
  twitter: "abhiaryain",
  linkedin: "abhiaryain",
  phones: ["+919546458806", "+919162388695"],
  emails: [
    "career.abhiarya@gmail.com",
    "github.abhiarya@gmail.com",
    "self.abhiarya@gmail.com",
  ],
  bio: `Software engineer passionate about building high-quality products and contributing to open-source.`,
  summary: `Software engineer experienced in building scalable backend systems using TypeScript, Node, Redis, Kafka, Docker, AWS, and more. Currently building Currunt, while also contributing to open-source projects. When I'm not coding, I enjoy writing articles to share about my learnings.`,
  about: (
    <p className="font-mono text-muted-foreground text-sm leading-6">
      I&apos;m a software engineer experienced in building scalable backend
      systems using <TagList tags={tags} /> and more. Currently, I&apos;m
      building <TagList tags={currentProjects} /> while contributing to
      open-source projects. When I&apos;m not writing code, you&apos;ll find me
      writing articles about my <TagList tags={learnings} />
    </p>
  ),
  address: {
    state: "New Delhi",
    country: "India",
    url: "https://www.google.com/maps/place/new-delhi",
  },
} as const satisfies Personal;
