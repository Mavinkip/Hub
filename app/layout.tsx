import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Upcyclers Creative Hub | Mathare, Nairobi',
  description:
    'A women- and youth-led social enterprise in Mathare, Nairobi transforming textile waste into handcrafted products. Promoting circular economy and sustainable livelihoods.',
  keywords: [
    'upcycling', 'Mathare', 'Nairobi', 'sustainable fashion',
    'circular economy', 'SDG 12', 'women empowerment', 'Faith Adoyo',
    'textile waste', 'MESH Soko', 'handcrafted'
  ],
  openGraph: {
    title: 'Upcyclers Creative Hub | Mathare, Nairobi',
    description: 'Turning textile waste into worth — women-led, community-rooted, SDG 12 aligned.',
    type: 'website',
    locale: 'en_KE',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Upcyclers Creative Hub',
  description: 'Women- and youth-led social enterprise transforming textile waste into handcrafted products in Mathare, Nairobi.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mathare',
    addressRegion: 'Nairobi',
    addressCountry: 'KE',
  },
  founder: { '@type': 'Person', name: 'Faith Adoyo' },
  sameAs: ['https://meshsoko.com'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-cream text-[#1a1a1a] overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
