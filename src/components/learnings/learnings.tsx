"use client";

import { track } from "@vercel/analytics";
import { LearningCard } from "@/components/learnings/learnings-card";
import { FadeItem } from "@/components/ui-custom/fade";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionLink,
  SectionTitle,
} from "@/components/ui-custom/section";
import { LEARNINGS_DATA } from "@/data/learnings";

export function Learnings() {
  return (
    <Section>
      <SectionHeader>
        <FadeItem>
          <SectionTitle>Recent Learnings</SectionTitle>
        </FadeItem>
        <FadeItem>
          <SectionTitle className="text-xs">
            <SectionLink
              href={`https://learnings.abhiarya.in`}
              onClick={() => track("learnings_more_clicked")}
            >
              See More
              <span className="sr-only">Recent Learnings</span>
            </SectionLink>
          </SectionTitle>
        </FadeItem>
      </SectionHeader>
      <SectionContent>
        {LEARNINGS_DATA.map((learnings) => (
          <LearningCard
            key={learnings.title}
            title={learnings.title}
            description={learnings.description}
            date={learnings.date}
            url={learnings.url}
            icon={learnings.icon}
          />
        ))}
      </SectionContent>
    </Section>
  );
}
