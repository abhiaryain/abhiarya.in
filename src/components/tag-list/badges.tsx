"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import type { ComponentProps } from "react";
import { icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Tag } from "@/types";

export function Badges({
  name,
  icon,
  url,
  className,
}: Tag & ComponentProps<typeof Badge>) {
  const Icon = icons[icon];
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener"
      onClick={() => track(`${name}_badge_clicked`)}
      className="group focus-visible:outline-none"
    >
      <Badge
        variant={"outline"}
        className={cn(
          "bg-accent/50 hover:bg-accent",
          "rounded-sm transition-[background]",
          "border-muted-foreground border-dashed [&>svg]:size-3",
          "group-focus-visible:border-transparent group-focus-visible:ring-2 group-focus-visible:ring-ring/50",
          className,
        )}
      >
        <Icon className="mr-0.5" /> {name}
      </Badge>
    </Link>
  );
}

// group-hover:saturate-100 sm:saturate-0 - on icon
