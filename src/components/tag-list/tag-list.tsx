import { Fragment } from "react";
import { Badges } from "@/components/tag-list/badges";
import { cn } from "@/lib/utils";
import type { Tag } from "@/types";

export function TagList({
  tags,
  project = false,
}: {
  tags: readonly Tag[];
  project?: boolean;
}) {
  return (
    <span
      className={cn(
        "space-x-1.5 whitespace-pre-line",
        project && "inline-flex flex-wrap gap-x-1.5 gap-y-1 space-x-0",
      )}
    >
      {tags.map((tag) => (
        <Fragment key={tag.name}>
          <Badges
            {...tag}
            className={cn(project && "group-hover:saturate-100 sm:saturate-0")}
          />
        </Fragment>
      ))}
    </span>
  );
}
