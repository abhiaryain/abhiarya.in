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
    <Badge
      asChild
      variant={"outline"}
      className={cn(
        "group",
        "text-muted-foreground",
        "bg-accent/50 hover:bg-accent",
        "rounded-sm transition-[background]",
        "border-muted-foreground border-dashed [&>svg]:size-3",
        "focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
        className,
      )}
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener"
        onClick={() => track(`${name}_badge_clicked`)}
      >
        <Icon className="mr-0.5" /> {name}
      </Link>
    </Badge>
  );
}
