import { GitPullRequestCreateArrow, WifiOff } from "lucide-react";
import { useTheme } from "next-themes";
import { cloneElement, useEffect, useRef, useState } from "react";
import { type Activity, ActivityCalendar } from "react-activity-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { ErrorCard } from "@/components/error/error-card";
import { THEMES } from "@/components/open-source/themes";
import { FadeItem } from "@/components/ui-custom/fade";
import type { ActionsReturn } from "@/types";
import "react-activity-calendar/tooltips.css";

export function ActivityCalendarComponent({
  activities,
  color,
}: {
  activities: ActionsReturn<Activity[]>;
  color?: keyof typeof THEMES;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const { data, error } = activities;

  useEffect(() => {
    const container = containerRef.current;
    setMounted(true);
    if (!container) return;
    container.children[0].scrollBy({
      left: container.children[0].scrollWidth,
      behavior: "smooth",
    });
    container.children[0].setAttribute("tabindex", "-1");
  }, []);

  const { resolvedTheme } = useTheme();

  const theme = color ? THEMES[color] : undefined;

  return (
    <FadeItem className="rounded-lg border-2 border-border p-4 md:rounded-none md:border-none md:border-none md:p-0">
      {error && (
        <ErrorCard className="text-destructive">
          <WifiOff />
          <span>{error.message}</span>
        </ErrorCard>
      )}

      {data && data.length > 0 && (
        <>
          <div className="flex justify-center overflow-hidden">
            <ActivityCalendar
              blockSize={11}
              fontSize={12}
              blockMargin={2}
              labels={{
                totalCount: "{{count}} contributions in the last year",
              }}
              theme={theme}
              colorScheme={
                mounted
                  ? (resolvedTheme as "light" | "dark" | undefined)
                  : undefined
              }
              data={data}
              ref={containerRef}
              renderBlock={(block, activity) =>
                cloneElement(block, {
                  "data-tooltip-id": "react-tooltip",
                  "data-tooltip-html": `${activity.count} activities on ${activity.date}`,
                  tabIndex: -1,
                })
              }
            />
            <ReactTooltip id="react-tooltip" />
          </div>

          <div className="mt-2 block text-center md:hidden">
            <p className="text-muted-foreground text-xs">
              ← Scroll to view older contributions
            </p>
          </div>
        </>
      )}

      {data && data.length === 0 && (
        // <ErrorCard
        //   message={"No contributions found..."}
        //   icon={<GitPullRequestArrow className="size-5" />}
        //   level="info"
        // />
        <ErrorCard className="text-muted-foreground">
          <GitPullRequestCreateArrow />
          <span>No contributions found...</span>
        </ErrorCard>
      )}
    </FadeItem>
  );
}
