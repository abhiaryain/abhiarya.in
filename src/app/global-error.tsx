"use client";

import "@/app/globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import { Container } from "@/components/container/container";
import { ErrorPage } from "@/components/error/error-page";
import { OneKo } from "@/components/oneko/oneko";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { Fade } from "@/components/ui-custom/fade";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function GlobalError() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          "min-h-screen bg-background font-sans",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Container>
            <Fade>
              <ErrorPage
                status={500}
                message="We’re sorry, something went wrong on our end."
              />
            </Fade>
          </Container>
          <OneKo />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
