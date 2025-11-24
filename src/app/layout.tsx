import "@/app/globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Container } from "@/components/container/container";
import { OneKo } from "@/components/oneko/oneko";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { Fade } from "@/components/ui-custom/fade";
import { EXPERIENCE_DATA } from "@/data/experience";
import { PERSONAL_DATA } from "@/data/personal";
import { PROJECT_DATA } from "@/data/projects";
import { SOCIAL_DATA } from "@/data/social";
import { getDomain } from "@/lib/domain";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  // We can use `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}` to get the production URL of the project on Vercel
  const domain = await getDomain();

  return {
    metadataBase: new URL(domain),
    title: {
      default: PERSONAL_DATA.nickname,
      template: `%s | ${PERSONAL_DATA.nickname}`,
    },
    description: PERSONAL_DATA.summary,
    applicationName: PERSONAL_DATA.nickname,
    authors: [
      { name: PERSONAL_DATA.nickname, url: new URL(domain) },
      { name: PERSONAL_DATA.name, url: new URL(domain) },
    ],
    keywords: Array.from(
      new Set([
        PERSONAL_DATA.name,
        PERSONAL_DATA.name.split(" ")[0],
        PERSONAL_DATA.nickname,
        PERSONAL_DATA.nickname.split(" ")[0],
        PERSONAL_DATA.nickname.split(" ").join(""),
        PERSONAL_DATA.title,
        PERSONAL_DATA.github,
        PERSONAL_DATA.portfolio,
        ...PERSONAL_DATA.phones,
        ...PERSONAL_DATA.emails,
        ...EXPERIENCE_DATA.map((experience) => experience.company),
        ...EXPERIENCE_DATA.map((experience) => experience.position),
        ...EXPERIENCE_DATA.map((experience) => experience.shortPosition),
        ...SOCIAL_DATA.map((social) => social.username),
        ...PROJECT_DATA.map((project) => project.name),
      ]),
    ),
    referrer: "strict-origin-when-cross-origin",
    creator: PERSONAL_DATA.nickname,
    publisher: PERSONAL_DATA.nickname,
    openGraph: {
      url: new URL(domain),
      siteName: PERSONAL_DATA.nickname,
      // TODO: Add og:video support
      type: "website",
      emails: PERSONAL_DATA.emails,
      phoneNumbers: PERSONAL_DATA.phones,
      countryName: PERSONAL_DATA.address.country,
      locale: "en_IN",
      ttl: 60 * 60 * 24,
    },
    twitter: {
      siteId: "1859480388193701888",
      creator: `@${PERSONAL_DATA.twitter}`,
      creatorId: "1859480388193701888",
    },
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
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
            <Fade>{children}</Fade>
          </Container>
          <OneKo />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
