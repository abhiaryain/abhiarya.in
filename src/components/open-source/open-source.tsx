"use client";

import { track } from "@vercel/analytics";
import type { Activity } from "react-activity-calendar";
import { ActivityCalendarComponent } from "@/components/open-source/activity-calendar";
import { PullRequestComponent } from "@/components/open-source/pull-request";
import { FadeItem } from "@/components/ui-custom/fade";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionLink,
  SectionTitle,
} from "@/components/ui-custom/section";
import { PERSONAL_DATA } from "@/data/personal";
import type { ActionsReturn, PullRequest } from "@/types";

export function OpenSource({
  pullRequest,
  activities,
}: {
  pullRequest: ActionsReturn<PullRequest[]>;
  activities: ActionsReturn<Activity[]>;
}) {
  return (
    <Section>
      <SectionHeader>
        <FadeItem>
          <SectionTitle>Open source journey</SectionTitle>
        </FadeItem>
        <FadeItem>
          <SectionTitle className="text-xs">
            <SectionLink
              href={`https://github.com/pulls?q=is:pr+author:${PERSONAL_DATA.github}+archived:false+is:closed`}
              onClick={() => track("see_all_open_source_pull_requests_clicked")}
            >
              See More
              <span className="sr-only">All Open Source Pull Requests</span>
            </SectionLink>
          </SectionTitle>
        </FadeItem>
      </SectionHeader>
      <SectionContent className="gap-2">
        <ActivityCalendarComponent activities={activities} />
        <PullRequestComponent pullRequest={pullRequest} />
      </SectionContent>
    </Section>
  );
}
