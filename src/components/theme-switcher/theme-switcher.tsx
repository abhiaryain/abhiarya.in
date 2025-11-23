"use client";

import { MonitorIcon, MoonStarIcon, SunIcon } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import type { JSX } from "react";
import { useMount } from "@/hooks/useMount";
import { cn } from "@/lib/utils";

function ThemeOption({
  icon,
  value,
  isActive,
  onClick,
}: {
  icon: JSX.Element;
  value: string;
  isActive: boolean;
  onClick: (value: string) => void;
}) {
  return (
    <button
      className={cn(
        "group",
        "flex items-center justify-center",
        "relative size-8 rounded-full",
        "focus-visible:border-2 focus-visible:border-ring focus-visible:outline-none",
        "cursor-pointer [&_svg]:size-4",
        isActive
          ? "text-accent-foreground"
          : "text-accent-foreground/50 hover:text-accent-foreground/80",
      )}
      role="radio"
      aria-checked={isActive}
      aria-label={`Switch to ${value} theme`}
      onClick={() => onClick(value)}
    >
      {icon}
      {isActive && (
        <motion.div
          layoutId="theme-option"
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          className={cn(
            "absolute inset-0 rounded-full",
            "border-2 border-accent group-focus-visible:border-none",
          )}
        />
      )}
    </button>
  );
}

const THEME_OPTIONS = [
  {
    icon: <MonitorIcon />,
    value: "system",
  },
  {
    icon: <SunIcon />,
    value: "light",
  },
  {
    icon: <MoonStarIcon />,
    value: "dark",
  },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const mounted = useMount();
  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        "max-w-max overflow-hidden rounded-full",
        "ring-2 ring-accent ring-inset",
      )}
      role="radiogroup"
    >
      {THEME_OPTIONS.map((option) => (
        <ThemeOption
          key={option.value}
          icon={option.icon}
          value={option.value}
          isActive={theme === option.value}
          onClick={setTheme}
        />
      ))}
    </div>
  );
}
