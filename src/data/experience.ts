import type { Icons } from "@/components/icons";
import type { Tag } from "@/types";

export type Experience = {
  company: string;
  /* 
    position: The full job title or role displayed across the site.  
    Example: Software Development Engineer  
  */
  position: string;

  /* 
    shortPosition: A shortened version of the position, used on smaller screens or compact layouts.  
    Example: SDE  
  */
  shortPosition: string;
  location: string;
  startDate: string;
  endDate: string;
  url: string;
  links: Tag[];
  icon: Icons;
  featured: boolean;
};

export const EXPERIENCE_DATA = [
  {
    company: "Mithila Stack",
    position: "Software Development Engineer",
    shortPosition: "SDE",
    location: "Remote",
    startDate: "Oct 2023",
    endDate: "Sep 2024",
    url: "https://mithilastack.com",
    links: [
      {
        name: "Github",
        icon: "github",
        url: "https://github.com/mithilastack",
      },
    ],
    icon: "mithila",
    featured: true,
  },
  {
    company: "Aaensa Tech",
    position: "Software Development Engineer Intern",
    shortPosition: "SDE",
    location: "Gurugram",
    startDate: "Jun 2023",
    endDate: "Sep 2023",
    url: "https://aaensa.com",
    links: [],
    icon: "aaensa",
    featured: false,
  },
] as const satisfies readonly Experience[];
