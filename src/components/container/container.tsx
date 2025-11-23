import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  ...props
}: ComponentProps<"main">) {
  return (
    <main
      className={cn(
        "min-w-xs max-w-2xl",
        "mx-auto",
        "p-4 sm:py-16 md:px-0",
        className,
      )}
      {...props}
    >
      {children}
    </main>
  );
}
