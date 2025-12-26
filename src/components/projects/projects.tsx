"use client";

import { track } from "@vercel/analytics";
import { ProjectCard } from "@/components/projects/projects-card";
import { FadeItem } from "@/components/ui-custom/fade";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionLink,
  SectionTitle,
} from "@/components/ui-custom/section";
import { PROJECT_DATA } from "@/data/projects";

export function Projects() {
  const projects = PROJECT_DATA.filter((project) => project.featured);
  return (
    <Section>
      <SectionHeader>
        <FadeItem>
          <SectionTitle>Featured Projects</SectionTitle>
        </FadeItem>
        <FadeItem>
          <SectionTitle className="text-xs">
            <SectionLink
              href={"/projects"}
              onClick={() => track("see_all_projects_clicked")}
              target="_self"
            >
              See More
              <span className="sr-only">All Projects</span>
            </SectionLink>
          </SectionTitle>
        </FadeItem>
      </SectionHeader>
      <SectionContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              url={project.url}
              icon={project.icon}
              preview={project.preview}
              links={project.links}
              tags={project.tags}
              featured={project.featured}
            />
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}
