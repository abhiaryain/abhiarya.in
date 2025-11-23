import { ThemeSwitcher } from "@/components/theme-switcher/theme-switcher";
import { FadeItem } from "@/components/ui-custom/fade";
import { PERSONAL_DATA } from "@/data/personal";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <FadeItem className="flex items-end justify-between">
      <div className="flex flex-col gap-2 text-xs">
        <span>
          Designed &amp; Made with{" "}
          <span className="bg-muted-foreground bg-clip-text">❤️</span>
        </span>
        <span className="text-muted-foreground">{`@ ${year} ${PERSONAL_DATA.nickname}. All rights reserved.`}</span>
      </div>
      <ThemeSwitcher />
    </FadeItem>
  );
}
