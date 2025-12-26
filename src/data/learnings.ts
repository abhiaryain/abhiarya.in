import type { Icons } from "@/components/icons";

export type LEARNINGS = {
  title: string;
  description: string;
  date: string;
  url: string;
  icon: Icons;
};

export const LEARNINGS_DATA: LEARNINGS[] = [
  {
    title: "What is Operating System?",
    description:
      "An operating system is a software that manages computer hardware and software.",
    date: "Oct 2023",
    url: "https://learnings.abhiarya.in/what-is-operating-system",
    icon: "kafka",
  },
];
