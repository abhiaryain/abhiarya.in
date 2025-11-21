import type { Icons } from "@/components/icons";

export type Social = {
  name: string;
  url: string;
  username: string;
  icon: Icons;
  withText: boolean;
};

export const SOCIAL_DATA = [
  {
    name: "career.abhiarya@gmail.com",
    url: "mailto:career.abhiarya@gmail.com",
    username: "career.abhiarya@gmail.com",
    icon: "email",
    withText: false,
  },
  {
    name: "Phone",
    url: "tel:+919546458806",
    username: "+919546458806",
    icon: "phone",
    withText: false,
  },
  {
    name: "GitHub",
    url: "https://github.com/abhiaryain",
    username: "abhiaryain",
    icon: "github",
    withText: false,
  },
  {
    name: "Leetcode",
    url: "https://leetcode.com/abhiaryain",
    username: "abhiaryain",
    icon: "leetcode",
    withText: false,
  },
  {
    name: "X",
    url: "https://x.com/abhiaryain",
    username: "abhiaryain",
    icon: "x",
    withText: false,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/abhiaryain",
    username: "abhiaryain",
    icon: "linkedin",
    withText: false,
  },
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/1kyc47uffptmaDb_305eemX14j8ophm5M/view?usp=sharing",
    username: "abhiarya",
    icon: "resume",
    withText: true,
  },
] as const satisfies readonly Social[];
