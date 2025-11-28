import Link from "next/link";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/footer/footer";
import { ProjectCard } from "@/components/projects/projects-card";
import { ThemeSwitcherCompact } from "@/components/theme-switcher/theme-switcher-compact";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FadeItem } from "@/components/ui-custom/fade";
import { PROJECT_DATA } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsPage() {
  return (
    <>
      <FadeItem className="flex items-start justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  className={cn(
                    "rounded-xs",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  )}
                  href="/"
                >
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Projects</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <ThemeSwitcherCompact />
      </FadeItem>
      <div className="flex flex-col gap-8">
        <FadeItem>
          <h1 className="scroll-m-20 font-bold text-4xl tracking-tight">
            All Projects
          </h1>
        </FadeItem>
        <div className="space-y-3 py-4">
          {PROJECT_DATA.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              url={project.url}
              preview={project.preview}
              icon={project.icon}
              links={project.links}
              tags={project.tags}
              featured={project.featured}
            />
          ))}
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}
