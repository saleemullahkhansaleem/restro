import type { Metadata } from 'next'
import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const fontDisplay = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
})

const fontDmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'RESTRO — Smart Restaurant Management System',
  description:
    'RESTRO by Creative Garage Pvt. Ltd. is an advanced, cloud-based restaurant and table management system that streamlines operations, improves customer experience, and maximizes efficiency.',
  keywords: [
    'restaurant management system',
    'table management',
    'POS system Pakistan',
    'kitchen display system',
    'Creative Garage',
    'RESTRO',
  ],
  openGraph: {
    title: 'RESTRO — Smart Restaurant Management System',
    description:
      'Advanced cloud-based management for restaurants, cafes, food courts, and hospitality venues.',
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
      className={`${fontDisplay.variable} ${fontDmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}
