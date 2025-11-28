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
  repository,
}: PullRequest) {
  return (
    <FadeItem>
      <Card>
        <CardContent>
          <GitMerge className="size-8 shrink-0 self-center text-violet-500 dark:text-violet-400" />
          <CardLayerGroup>
            <CardLayer>
              <CardTitle className="overflow-hidden">
                <CardLink
                  href={url}
                  target="_blank"
                  rel="noopener"
                  className="truncate"
                  onClick={() => track(`open_source_pr_${title}_clicked`)}
                >
                  {title}
                </CardLink>
              </CardTitle>
              <CardTitle className="text-muted-foreground text-xs">
                {formatDistanceToNow(new Date(mergedAt), {
                  addSuffix: true,
                }).replace(/^about\s/, "")}
              </CardTitle>
            </CardLayer>
            <CardLayer className="p-0">
              <CardDescription className="truncate whitespace-nowrap p-0.5 text-xs">
                <CardLink
                  href={repository.url}
                  target="_blank"
                  rel="noopener"
                  className="inline"
                  onClick={() =>
                    track(`open_source_pr_${repository.nameWithOwner}_clicked`)
                  }
                >
                  {repository.nameWithOwner.replace("/", " / ")}
                </CardLink>
                {" / "}
                <CardLink
                  href={url}
                  className="inline"
                  onClick={() => track(`open_source_pr_${number}_clicked`)}
                >
                  {`#${number}`}
                </CardLink>
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
