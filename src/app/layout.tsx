import type { Metadata } from 'next'
import { ibmSans, clashGrotesk } from '@/fonts/font'
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
      <body className={`${ibmSans.variable} ${clashGrotesk.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
