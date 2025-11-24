import { track } from "@vercel/analytics";
import { formatDistanceToNow } from "date-fns";
import { GitMerge } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardLayer,
  CardLayerGroup,
  CardLink,
  CardTitle,
} from "@/components/ui-custom/card";
import { FadeItem } from "@/components/ui-custom/fade";
import type { PullRequest } from "@/types";

export function PullRequestCard({
  title,
  url,
  deletions,
  additions,
  number,
  mergedAt,
  author,
  repository,
}: PullRequest) {
  return (
    <FadeItem>
      <Card>
        <CardContent>
          <GitMerge className="size-8 self-center text-violet-500 dark:text-violet-400" />
          <CardLayerGroup>
            <CardLayer className="justify-start">
              <CardTitle className="overflow-hidden">
                <CardLink
                  href={repository.url}
                  className="truncate text-muted-foreground"
                  onClick={() =>
                    track(`open_source_pr_${repository.nameWithOwner}_clicked`)
                  }
                >
                  {repository.nameWithOwner}
                </CardLink>
                <CardLink
                  href={url}
                  className="truncate"
                  onClick={() =>
                    track(
                      `open_source_pr_#${number}_${repository.nameWithOwner}_clicked`,
                    )
                  }
                >
                  {title}
                </CardLink>
              </CardTitle>
            </CardLayer>
            <CardLayer className="p-0">
              <CardDescription className="truncate whitespace-nowrap p-0.5 text-xs">
                <CardLink
                  href={url}
                  className="inline"
                  onClick={() =>
                    track(
                      `open_source_pr_#${number}_${repository.nameWithOwner}_clicked`,
                    )
                  }
                >
                  {`#${number}`}
                </CardLink>
                {" by "}
                <CardLink
                  href={author.url}
                  className="inline"
                  onClick={() => track(`open_source_${author.login}_clicked`)}
                >
                  {author.login}
                </CardLink>
                {" was merged "}
                {formatDistanceToNow(new Date(mergedAt), {
                  addSuffix: true,
                })}
              </CardDescription>
              <CardDescription className="flex items-center justify-between gap-1 whitespace-nowrap font-semibold text-xs">
                <span className="text-green-700 dark:text-green-500">{`+${additions}`}</span>
                <span className="text-red-700 dark:text-red-500">{`-${deletions}`}</span>
              </CardDescription>
            </CardLayer>
          </CardLayerGroup>
        </CardContent>
      </Card>
    </FadeItem>
  );
}
