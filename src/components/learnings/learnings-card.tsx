import { track } from "@vercel/analytics";
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
import type { LEARNINGS } from "@/data/learnings";

export function LearningCard({
  title,
  description,
  date,
  url,
  icon,
}: LEARNINGS) {
  return (
    <FadeItem>
      <Card>
        <CardContent>
          <CardIcon
            icon={icon}
            className="size-8 self-center text-muted-foreground"
          />
          <CardLayerGroup>
            <CardLayer>
              <CardTitle className="overflow-hidden">
                <CardLink
                  href={url}
                  onClick={() =>
                    track(`learnings_${title.split(" ").join("_")}_clicked`)
                  }
                  className="truncate"
                >
                  {title}
                </CardLink>
              </CardTitle>
              <CardTitle className="text-xs">{date}</CardTitle>
            </CardLayer>
            <CardLayer className="py-0">
              <CardDescription className="line-clamp-1">
                {description}
              </CardDescription>
            </CardLayer>
          </CardLayerGroup>
        </CardContent>
      </Card>
    </FadeItem>
  );
}
