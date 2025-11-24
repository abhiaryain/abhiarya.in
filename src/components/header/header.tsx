"use client";

import { track } from "@vercel/analytics";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { AvatarComponent } from "@/components/avatar/avatar-component";
import { Social } from "@/components/socials/social";
import { FadeItem } from "@/components/ui-custom/fade";
import { PERSONAL_DATA } from "@/data/personal";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex-1 space-y-1.5">
        <FadeItem className="flex sm:hidden">
          <AvatarComponent />
        </FadeItem>
        <FadeItem>
          <h1 className="whitespace-nowrap font-bold text-2xl">
            {PERSONAL_DATA.name}
          </h1>
        </FadeItem>
        <FadeItem>
          <p className="text-pretty font-mono text-muted-foreground text-sm sm:max-w-md">
            {PERSONAL_DATA.bio}
          </p>
        </FadeItem>
        <FadeItem>
          <p className="text-pretty font-mono text-muted-foreground text-xs">
            <Link
              className={cn(
                "inline-flex gap-x-1.5",
                "rounded-xs align-baseline leading-none",
                "hover:text-blue-400 hover:underline",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
                "focus-visible:ring-offset-4 focus-visible:ring-offset-background",
              )}
              href={PERSONAL_DATA.address.url}
              rel="noopener"
              target="_blank"
              onClick={() => track("header_address_clicked")}
            >
              <MapPin className="size-3" />
              {`${PERSONAL_DATA.address.state}, ${PERSONAL_DATA.address.country}`}
            </Link>
          </p>
        </FadeItem>
        <FadeItem className="mb-2">
          <Social />
        </FadeItem>
      </div>
      <FadeItem className="hidden sm:flex">
        <AvatarComponent />
      </FadeItem>
    </div>
  );
}
