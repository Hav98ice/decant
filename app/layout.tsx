import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Decant — Fine Dining, Wine & Cocktails | Medford, Oregon',
  description:
    'Decant is an award-winning fine dining wine bar in Medford, Oregon. Founded by Jessica Cahill, certified sommelier. Wine Spectator Award of Excellence 2023–2025.',
  openGraph: {
    title: 'Decant — Fine Dining, Wine & Cocktails | Medford, Oregon',
    description: 'Award-winning fine dining and curated wine in Medford, Oregon.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable}`}
    >
      <body style={{ background: '#0A0705' }}>{children}</body>
    </html>
  )
}
