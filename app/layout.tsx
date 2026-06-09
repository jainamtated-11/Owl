import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Grain } from "@/components/brand/Grain";
import { SiteNav } from "@/components/ui/SiteNav";
import { SiteFooter } from "@/components/ui/SiteFooter";

// Editorial serif for headings — intimate, magazine-like.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

// Clean sans for body.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Moonlighters — for the people who work while the world sleeps",
    template: "%s · Moonlighters",
  },
  description:
    "Honest, judgment-free education for night shift workers — your body, mind, relationships, and rights on the night shift, minus the shame.",
  openGraph: {
    title: "Moonlighters",
    description:
      "A calm corner of the internet for people who work while the world sleeps.",
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
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Grain />
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
