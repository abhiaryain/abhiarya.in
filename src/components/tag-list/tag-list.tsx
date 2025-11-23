import { Fragment } from "react";
import { Badges } from "@/components/tag-list/badges";
import type { Tag } from "@/types";

export function TagList({
  tags,
  showAndBeforeLast = false,
}: {
  tags: readonly Tag[];
  showAndBeforeLast?: boolean;
}) {
  return (
    <span className="space-x-1.5 space-y-1.5 whitespace-pre-line">
      {tags.map((tag, index) => (
        <Fragment key={tag.name}>
          <Badges {...tag} className="text-muted-foreground" />
          {showAndBeforeLast && index === tags.length - 2 && <span>and</span>}
        </Fragment>
      ))}
    </span>
  );
}
