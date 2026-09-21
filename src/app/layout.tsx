import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/portfolio/site-chrome";

export const metadata: Metadata = {
  title: "Muideen Lawal",
  description:
    "Muideen Lawal — software engineer and researcher in Paris. Leading measurement software at C12 and building apps for iOS and Mac.",
};

export const viewport: Viewport = {
  themeColor: "#f8f8f2",
};

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-paper text-ink scheme-light">
      <body
        className={`${geist.variable} ${geistMono.variable} flex min-h-dvh flex-col bg-paper font-sans text-ink antialiased`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
        <SpeedInsights />
      </body>
    </html>
  );
}
