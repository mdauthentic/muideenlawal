import type { Metadata, Viewport } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Geist_Mono, Chivo } from "next/font/google";
import './globals.css'


export const metadata: Metadata = {
  title: 'Muideen Lawal',
  description: 'Portfolio website',
}

export const viewport: Viewport = {
  themeColor: "#bce4f5"
}

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${chivo.variable} ${geistMono.variable} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
