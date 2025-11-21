import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Container({ children }: ComponentProps<"main">) {
  return (
    <main className={cn("mx-auto max-w-2xl min-w-xs p-4 sm:py-16 md:px-0")}>
      {children}
    </main>
  );
}
