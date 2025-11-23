import { FadeItem } from "@/components/ui-custom/fade";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/ui-custom/section";
import { PERSONAL_DATA } from "@/data/personal";

export function About() {
  return (
    <Section className="gap-2">
      <SectionHeader>
        <FadeItem>
          <SectionTitle>About me</SectionTitle>
        </FadeItem>
      </SectionHeader>
      <SectionContent>
        <FadeItem>
          <p className="font-mono text-muted-foreground text-sm leading-6">
            {PERSONAL_DATA.about}
          </p>
        </FadeItem>
      </SectionContent>
    </Section>
  );
}
