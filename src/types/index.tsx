import type { Icons } from "@/components/icons";

export type ContributionDays = {
  color: string;
  contributionCount: number;
  date: string;
};

export type Week = {
  contributionDays: ContributionDays[];
};

export type PullRequest = {
  id: string;
  title: string;
  url: string;
  createdAt: string;
  state: string;
  deletions: number;
  additions: number;
  number: number;
  commits: {
    totalCount: number;
  };
  changedFiles: number;
  closedAt: string;
  mergedAt: string;
  author: {
    login: string;
    avatarUrl: string;
    url: string;
  };
  repository: {
    name: string;
    nameWithOwner: string;
    url: string;
    homepageUrl: string;
    isPrivate: boolean;
    isInOrganization: boolean;
  };
};

export type Edges = {
  node: PullRequest;
};

export type ActionsReturn<T> = {
  error?: {
    message: string;
  };
  data?: T;
};

export type Tag = {
  name: string;
  icon: Icons;
  url: string;
};
