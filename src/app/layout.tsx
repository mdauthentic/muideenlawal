import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Trocchi, Chivo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muideen Lawal",
  description: "Portfolio website",
};

export const viewport: Viewport = {
  themeColor: "#142218",
};

const trocchi = Trocchi({
  variable: "--font-trocchi",
  weight: "400",
  subsets: ["latin"],
});

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
});

const sligoil = localFont({
  src: "./../fonts/SligoilVF.woff2",
  variable: "--font-sligoil",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${chivo.variable} ${trocchi.variable} ${sligoil.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
