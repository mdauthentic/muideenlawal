import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { schibstedGrotesk } from '@/fonts/font'
import './globals.css'
import { NavBar } from '@/components/NavBar';


export const metadata: Metadata = {
  title: 'Muideen Lawal',
  description: 'Portfolio website',
  themeColor: "#bce4f5"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${schibstedGrotesk.variable} antialiased`}>
        <NavBar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
