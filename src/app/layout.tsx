import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { ibmSans, clashGrotesk, firaCode } from '@/fonts/font'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Muideen Lawal',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ibmSans.variable} ${clashGrotesk.variable} ${firaCode.variable}`}>
        <NavBar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
