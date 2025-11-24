import { track } from "@vercel/analytics";
import { icons } from "@/components/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardIcon,
  CardLayer,
  CardLayerGroup,
  CardLink,
  CardTitle,
} from "@/components/ui-custom/card";
import { FadeItem } from "@/components/ui-custom/fade";
import type { Experience } from "@/data/experience";

export function ExperienceCard({
  company,
  position,
  shortPosition,
  location,
  startDate,
  endDate,
  url,
  links,
  icon,
}: Experience) {
  return (
    <FadeItem>
      <Card>
        <CardContent>
          <CardIcon icon={icon} />
          <CardLayerGroup>
            <CardLayer>
              <CardTitle className="overflow-hidden">
                <CardLink
                  href={url}
                  onClick={() => track(`experience_${company}_clicked`)}
                  className="truncate"
                >
                  {company}
                </CardLink>
                {links.map((link) => {
                  const Icon = icons[link.icon];
                  return (
                    <CardLink
                      key={link.name}
                      href={link.url}
                      onClick={() =>
                        track(`experience_${company}_${link.name}_clicked`)
                      }
                    >
                      <Icon />
                      <span className="sr-only">
                        {`${company.split(" ").join("_")}_${link.name}`}
                      </span>
                    </CardLink>
                  );
                })}
              </CardTitle>
              <CardTitle className="text-xs">{location} </CardTitle>
            </CardLayer>
            <CardLayer className="gap-4 overflow-hidden py-0">
              <CardDescription className="hidden truncate sm:block">
                {position}
              </CardDescription>
              <CardDescription className="flex sm:hidden">
                {shortPosition}
              </CardDescription>
              <CardDescription className="whitespace-nowrap text-end font-mono text-xs">{`${startDate} - ${endDate}`}</CardDescription>
            </CardLayer>
          </CardLayerGroup>
        </CardContent>
      </Card>
    </FadeItem>
  );
}
