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
        <FadeItem>{PERSONAL_DATA.about}</FadeItem>
      </SectionContent>
    </Section>
  );
}
