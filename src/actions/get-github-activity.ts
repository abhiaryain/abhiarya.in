import "server-only";

import type { Activity } from "react-activity-calendar";
import { env } from "@/config/server-env";
import { PERSONAL_DATA } from "@/data/personal";
import type { ActionsReturn, Week } from "@/types";

const query = `
query {
  user(login: "${PERSONAL_DATA.github}") {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            color
            contributionCount
            date
          }
        }
      }
    }
  }
}
`;

function getLevel(count: number) {
  if (count === 0) return 0;
  if (count <= 5) return 1;
  if (count <= 10) return 2;
  if (count <= 20) return 3;
  return 4;
}

export async function getGithubActivity(): Promise<ActionsReturn<Activity[]>> {
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
    return { error: { message: "Unable to fetch GitHub activity." } };
  }

  const { data } = await res.json();

  if (!data?.user?.contributionsCollection?.contributionCalendar?.weeks) {
    return { error: { message: "GitHub response is missing expected data." } };
  }

  let contributions: Activity[] =
    data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
      (week: Week) =>
        week.contributionDays.map((day) => ({
          date: day.date,
          count: day.contributionCount,
          level: getLevel(day.contributionCount),
        })),
    );

  // Removed older contributions to keep the calendar clean
  if (contributions.length > 350) {
    contributions = contributions.slice(contributions.length - 350);
  }

  return { data: contributions };
}
