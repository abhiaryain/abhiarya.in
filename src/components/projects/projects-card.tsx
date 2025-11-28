"use client";

import { track } from "@vercel/analytics";
import { Eye, EyeClosed } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
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
  const [openPreview, setOpenPreview] = useState(false);

  function togglePreview(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    setOpenPreview(!openPreview);
  }

  return (
    <FadeItem>
      <Card>
        <AnimatePresence>
          {openPreview && (
            <CardHeader>
              <motion.div
                initial={{ opacity: 0, height: 0, transformOrigin: "bottom" }}
                animate={{
                  opacity: 1,
                  height: openPreview ? "auto" : 0,
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  marginBottom: 0,
                }}
                transition={{ duration: 1 }}
                className="overflow-hidden rounded-xl"
              >
                <Image
                  src={preview}
                  width={64}
                  height={64}
                  alt={name}
                  className="aspect-video w-full shrink-0 rounded-xl transition-all group-hover:saturate-100 sm:saturate-0"
                />
              </motion.div>
            </CardHeader>
          )}
        </AnimatePresence>
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
                {preview && (
                  <CardLink href="#" onClick={togglePreview}>
                    {openPreview ? (
                      <EyeClosed className="size-4 text-muted-foreground hover:text-blue-400" />
                    ) : (
                      <Eye className="size-4 text-muted-foreground hover:text-blue-400" />
                    )}
                    <span className="sr-only">Preview</span>
                  </CardLink>
                )}
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
