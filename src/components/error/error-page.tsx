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
        "flex flex-col items-center justify-center min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-8rem)] w-full flex-1 p-4 text-center",
      )}
    >
      <FadeItem>
        <h1
          className={cn(
            "text-7xl font-extrabold sm:text-9xl",
            status >= 500 ? "text-destructive" : "",
          )}
        >
          {status}
        </h1>
      </FadeItem>
      <FadeItem>
        <p className={cn("text-muted-foreground mt-2 mb-6 text-lg")}>
          {message}
        </p>
      </FadeItem>
      <FadeItem>
        <Link href="/" passHref>
          <Button
            asChild
            className={cn(
              "bg-accent text-accent-foreground hover:bg-accent/80 flex items-center justify-center gap-2",
            )}
            aria-label="go-to-home"
          >
            <span>
              {btn} <ArrowRight />
            </span>
          </Button>
        </Link>
      </FadeItem>
    </Fade>
  );
}
