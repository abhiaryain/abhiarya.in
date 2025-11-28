"use client";

import { track } from "@vercel/analytics";
import Image from "next/image";
import { icons } from "@/components/icons";
import { TagList } from "@/components/tag-list/tag-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
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
  description,
  url,
  icon,
  preview,
  links,
  tags,
}: Project) {
  return (
    <FadeItem className="space-y-4">
      <Card>
        <CardHeader className="overflow-hidden rounded-md p-0">
          <Image
            src={preview}
            width={64}
            height={64}
            alt={name}
            className="aspect-video w-full shrink-0 transition-all group-hover:scale-105 group-hover:saturate-100 sm:saturate-0"
          />
        </CardHeader>
        <CardContent className="gap-0.5 px-2">
          <CardIcon icon={icon} className="size-5" />
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
          </CardLayerGroup>
        </CardContent>
        <CardFooter className="p-2 pt-0">
          <CardLayer>
            <CardDescription className="line-clamp-3">
              {description}
            </CardDescription>
          </CardLayer>
          <TagList tags={tags} project />
        </CardFooter>
      </Card>
    </FadeItem>
  );
}
