import { GitMerge, WifiOff } from "lucide-react";
import { ErrorCard } from "@/components/error/error-card";
import { PullRequestCard } from "@/components/open-source/pull-request-card";
import { FadeItem } from "@/components/ui-custom/fade";
import type { ActionsReturn, PullRequest } from "@/types";

export function PullRequestComponent({
  pullRequest,
}: {
  pullRequest: ActionsReturn<PullRequest[]>;
}) {
  const { data, error } = pullRequest;

  return (
    <>
      <FadeItem>
        {error && (
          <ErrorCard className="text-destructive">
            <WifiOff />
            <span>{error.message}</span>
          </ErrorCard>
        )}
      </FadeItem>

      {data &&
        data.length > 0 &&
        data?.map((pr) => (
          <PullRequestCard
            key={pr.id}
            id={pr.id}
            title={pr.title}
            url={pr.url}
            createdAt={pr.createdAt}
            state={pr.state}
            deletions={pr.deletions}
            additions={pr.additions}
            number={pr.number}
            commits={pr.commits}
            changedFiles={pr.changedFiles}
            closedAt={pr.closedAt}
            mergedAt={pr.mergedAt}
            author={pr.author}
            repository={pr.repository}
          />
        ))}

      <FadeItem>
        {data && data.length === 0 && (
          <ErrorCard className="text-muted-foreground">
            <GitMerge />
            <span>No pull requests have been merged yet</span>
          </ErrorCard>
        )}
      </FadeItem>
    </>
  );
}
