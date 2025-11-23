import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Fade, FadeItem } from "../ui-custom/fade";

type ErrorProps = {
  status: number;
  message: string;
  btn: string;
};

export function ErrorPage({ status, message, btn }: ErrorProps) {
  return (
    <Fade
      className={cn(
        "flex flex-col items-center justify-center p-4",
        "min-h-[calc(100vh-2rem)] w-full sm:min-h-[calc(100vh-8rem)]",
        "text-center",
      )}
    >
      <FadeItem>
        <h1
          className={cn(
            "font-extrabold text-7xl sm:text-9xl",
            status >= 500 && "text-destructive",
          )}
        >
          {status}
        </h1>
      </FadeItem>
      <FadeItem>
        <p className="mt-2 mb-6 text-lg text-muted-foreground">{message}</p>
      </FadeItem>
      <FadeItem>
        <Button
          asChild
          className={cn(
            "flex items-center justify-center gap-2",
            "bg-accent hover:bg-accent/80",
            "text-accent-foreground",
          )}
          aria-label="go-to-home"
        >
          <Link href="/">
            {btn} <ArrowRight />
          </Link>
        </Button>
      </FadeItem>
    </Fade>
  );
}
