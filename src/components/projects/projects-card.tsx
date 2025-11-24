"use client";

import { track } from "@vercel/analytics";
import { icons } from "@/components/icons";
import { TagList } from "@/components/tag-list/tag-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardIcon,
  CardLayer,
  CardLayerGroup,
  CardLink,
  CardTitle,
} from "@/components/ui-custom/card";
import { FadeItem } from "@/components/ui-custom/fade";
import type { Project } from "@/data/projects";

export function ProjectCard({
  name,
  icon,
  description,
  links,
  url,
  tags,
}: Project) {
  return (
    <FadeItem>
      <Card>
        <CardContent>
          <CardIcon
            icon={icon}
            className="mt-1 size-10 text-muted-foreground"
          />
          <CardLayerGroup>
            <CardLayer>
              <CardTitle className="overflow-hidden">
                <CardLink
                  href={url}
                  onClick={() => track(`project_${name}_clicked`)}
                  className="truncate"
                >
                  {name}
                </CardLink>
              </CardTitle>
              <CardTitle>
                {links.map((link) => {
                  const Icon = icons[link.icon];
                  return (
                    <CardLink
                      key={link.name}
                      href={link.url}
                      onClick={() => track(`project_${name}_clicked`)}
                    >
                      <Icon />
                      <span className="sr-only">
                        {`${name.split(" ").join("_")}_${link.name}`}
                      </span>
                    </CardLink>
                  );
                })}
              </CardTitle>
            </CardLayer>
            <CardLayer className="py-0">
              <CardDescription className="line-clamp-2">
                {description}
              </CardDescription>
            </CardLayer>
          </CardLayerGroup>
        </CardContent>
        <CardFooter className="p-2">
          <TagList tags={tags} project />
        </CardFooter>
      </Card>
    </FadeItem>
  );
}
