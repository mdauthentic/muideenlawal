import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { schibstedGrotesk } from '@/fonts/font'
import './globals.css'
import { NavBar } from '@/components/NavBar';


export const metadata: Metadata = {
  title: 'Muideen Lawal',
  description: 'Portfolio website',
  themeColor: "#317EFB"
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
        <Analytics />
      </body>
    </html>
  )
}
