import "server-only";

import { env } from "@/config/server-env";
import { PERSONAL_DATA } from "@/data/personal";
import type { ActionsReturn, Edges, PullRequest } from "@/types";

const query = `
query {
  search(query: "is:pr author:${PERSONAL_DATA.github} archived:false is:merged -user:${PERSONAL_DATA.github}", type: ISSUE, first: 5) {
    edges {
      node {
        ... on PullRequest {
          id
          title
          url
          createdAt
          state
          deletions
          additions
          number
          commits {
            totalCount
          }
          changedFiles
          closedAt
          mergedAt
          author {
            login
            avatarUrl
            url
          }
          repository {
            name
            nameWithOwner
            url
            homepageUrl
            isPrivate
            isInOrganization
          }
        }
      }
    }
  }
}
`;

export async function getGithubPullRequest(): Promise<
  ActionsReturn<PullRequest[]>
> {
  const res = await fetch("https://api.github.com/graphql", {
    cache: "force-cache",
    next: { revalidate: 5 * 60 }, // 5 minutes
    method: "POST",
    body: JSON.stringify({
      query,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
    },
  });

  if (!res.ok) {
    return { error: { message: "Unable to fetch GitHub pull requests." } };
  }

  const { data } = await res.json();

  if (!data?.search?.edges) {
    return {
      error: {
        message: "GitHub response is missing expected data.",
      },
    };
  }

  const pullRequest: PullRequest[] = data.search.edges.map(
    (edge: Edges) => edge.node,
  );

  return { data: pullRequest };
}
