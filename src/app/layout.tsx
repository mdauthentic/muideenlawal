import type { Metadata, Viewport } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { funnelSans } from '@/fonts/font'
import './globals.css'
import { Navigation } from '@/components/Navigation';
import Quote from '@/components/Quote';
import { Footer } from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Muideen Lawal',
  description: 'Portfolio website',
}

export const viewport: Viewport = {
  themeColor: "#bce4f5"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${funnelSans.variable} antialiased`}>
        <Navigation />
        {children}
        <Quote />
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
