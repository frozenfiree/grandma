import type { Metadata } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// Editorial grotesk (display + text) — the "House Publisher" voice.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Serif — reserved for editorial pull-quotes / warmth accents only.
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

// Mono — all numbers, metadata, and status. Tabular figures.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.grandmashive.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Grandma's Hive — the owned-engine operating partner",
    template: "%s — Grandma's Hive",
  },
  description:
    "Marketing fails at the build, not the strategy. Grandma's Hive embeds as your marketing function and builds the products, media, and audience you keep — and we prove it by shipping our own.",
  openGraph: {
    title: "Grandma's Hive — the owned-engine operating partner",
    description:
      "We embed as your marketing function and build the owned products, media, and audience you keep. We eat our own cooking.",
    url: SITE_URL,
    siteName: "Grandma's Hive",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grandma's Hive — the owned-engine operating partner",
    description:
      "Marketing fails at the build, not the strategy. We build the owned engine you keep — and we run our own.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="bg-paper text-ink flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
