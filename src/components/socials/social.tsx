"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import { icons } from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SOCIAL_DATA } from "@/data/social";
import { cn } from "@/lib/utils";

export function Social() {
  return (
    <div className="flex gap-1 pt-1">
      <TooltipProvider>
        {SOCIAL_DATA.map((social) => {
          const Icon = icons[social.icon];
          return (
            <Tooltip key={social.name}>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener"
                  aria-label={social.name}
                  className={cn(
                    "inline-flex items-center justify-center gap-2",
                    "rounded-md transition-colors",
                    "text-muted-foreground hover:text-accent-foreground",
                    "hover:bg-accent",
                    "border border-border",
                    "whitespace-nowrap font-medium text-sm",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
                    "[&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0",
                    social.withText ? "px-2" : "size-8",
                  )}
                  onClick={() => track(`social_${social.name}_clicked`)}
                >
                  <Icon
                    // Github icon is a bit smaller than the others so we need to make it a bit smaller
                    className={social.icon === "github" ? "size-5" : "size-4"}
                  />
                  <span
                    className={cn("hidden", social.withText && "sm:inline")}
                  >
                    {social.name}
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">
                {social.name}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </TooltipProvider>
    </div>
  );
}
