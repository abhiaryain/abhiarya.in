"use client";

import { track } from "@vercel/analytics";
import { ExperienceCard } from "@/components/experience/experience-card";
import { FadeItem } from "@/components/ui-custom/fade";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionLink,
  SectionTitle,
} from "@/components/ui-custom/section";
import { EXPERIENCE_DATA } from "@/data/experience";
import { PERSONAL_DATA } from "@/data/personal";
import { SOCIAL_DATA } from "@/data/social";

export function Experience() {
  return (
    <Section>
      <SectionHeader>
        <FadeItem>
          <SectionTitle>Experience</SectionTitle>
        </FadeItem>
        <FadeItem>
          <SectionTitle className="text-xs">
            <SectionLink
              href={
                SOCIAL_DATA.find((social) => social.name.toLowerCase() === "x")
                  ?.url ?? `https://github.com/${PERSONAL_DATA.github}`
              }
              onClick={() => track("available_for_new_opportunities_clicked")}
              className="gap-1"
            >
              <div className="size-2 flex-none overflow-hidden rounded-full bg-green-500" />
              <p className="hidden sm:inline">
                Available for new opportunities
              </p>
              <p className="inline sm:hidden">Available</p>
            </SectionLink>
          </SectionTitle>
        </FadeItem>
      </SectionHeader>
      <SectionContent>
        {EXPERIENCE_DATA.filter((experience) => experience.featured).map(
          (experience) => (
            <ExperienceCard
              key={experience.company}
              company={experience.company}
              position={experience.position}
              shortPosition={experience.shortPosition}
              location={experience.location}
              startDate={experience.startDate}
              endDate={experience.endDate}
              url={experience.url}
              links={experience.links}
              icon={experience.icon}
              featured={experience.featured}
            />
          ),
        )}
      </SectionContent>
    </Section>
  );
}
