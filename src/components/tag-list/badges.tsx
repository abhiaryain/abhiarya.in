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
      className={cn("focus-visible:outline-none group")}
    >
      <Badge
        variant={"outline"}
        className={cn(
          "bg-accent/50 hover:bg-accent transition-[background] border-muted-foreground rounded-sm border-dashed [&>svg]:size-3",
          "group-focus-visible:ring-ring group-focus-visible:ring-2 group-focus-visible:border-transparent",
          className,
        )}
      >
        <Icon className={cn("mr-0.5")} /> {name}
      </Badge>
    </Link>
  );
}
