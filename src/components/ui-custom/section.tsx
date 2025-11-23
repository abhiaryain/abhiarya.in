import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      data-slot="section"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="section-header"
      className={cn("flex items-center justify-between", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function SectionContent({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="section-content"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function SectionTitle({
  children,
  className,
  ...props
}: ComponentProps<"h2">) {
  return (
    <h2
      data-slot="section-title"
      className={cn(
        "flex flex-row items-center gap-2",
        "font-semibold",
        "**:[svg]:size-4.5",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function SectionLinkTitle({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      data-slot="section-link-title"
      className={cn(
        "flex flex-row items-center gap-2",
        "hover:text-blue-400",
        "rounded-xs",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        "**:[svg]:size-4.5",
        className,
      )}
      rel="noopener"
      target="_blank"
      {...props}
    >
      {children}
    </Link>
  );
}
