"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useMount } from "@/hooks/use-mount";
import { cn } from "@/lib/utils";

export function ThemeSwitcherCompact() {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useMount();

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      onClick={toggleTheme}
      className={cn(
        "flex items-center justify-center",
        "bg-transparent transition-colors hover:bg-accent",
        "size-8 cursor-pointer rounded-md text-muted-foreground",
        "&:[svg]:size-4",
      )}
      aria-label="toggle-theme"
    >
      {resolvedTheme === "dark" ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
