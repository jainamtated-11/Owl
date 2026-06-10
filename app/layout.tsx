import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/ui/SiteNav";
import { SiteFooter } from "@/components/ui/SiteFooter";

// One workhorse family, used across headings and body with weight contrast.
const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

// Data only: the live clock, statistics, citations, and small labels.
const mono = JetBrains_Mono({
  variable: "--font-mono-data",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Moonlighters · for the people who work while the world sleeps",
    template: "%s · Moonlighters",
  },
  description:
    "Evidence-based, judgment-free education for night shift workers: what the night actually does to your body, mind, and rights, and what helps.",
  openGraph: {
    title: "Moonlighters",
    description:
      "Evidence-based, judgment-free education for people who work while the world sleeps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-night text-ink">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
