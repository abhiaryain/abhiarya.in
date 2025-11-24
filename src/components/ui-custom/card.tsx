import Link from "next/link";
import type { ComponentProps } from "react";
import { type Icons, icons } from "@/components/icons";
import { cn } from "@/lib/utils";

export function Card({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "group",
        "flex flex-col gap-2",
        "border dark:border-none",
        "rounded-lg bg-card p-2 text-card-foreground shadow-none",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("flex flex-row gap-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardLayerGroup({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-layer-group"
      className={cn(
        "flex grow flex-col justify-center overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardLayer({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-layer"
      className={cn("flex items-center justify-between gap-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className,
  ...props
}: ComponentProps<"h3">) {
  return (
    <h3
      data-slot="card-title"
      className={cn(
        "flex items-center gap-1.5 whitespace-nowrap p-0.5 font-semibold text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardIcon({
  className,
  icon,
}: {
  className?: string;
  icon: Icons;
}) {
  const Icon = icons[icon];
  return (
    <Icon
      className={cn(
        "size-11 shrink-0 rounded-sm transition-all group-hover:saturate-100 sm:saturate-0",
        className,
      )}
    />
  );
}

export function CardLink({
  href,
  children,
  className,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener"
      className={cn(
        "inline-block rounded-xs transition-colors hover:text-blue-400",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-offset-card",
        "[&_svg]:size-5 &:[&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
