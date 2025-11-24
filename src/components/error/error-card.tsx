import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function ErrorCard({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 sm:flex-row",
        "rounded-lg px-4 py-16",
        "border-2 border-border",
        "text-center",
        "**:[svg]:size-10 **:[svg]:sm:size-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
