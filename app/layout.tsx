import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/organisms/Navbar'
import Footer from '@/components/organisms/Footer'
import Breadcrumb from '@/components/molecules/Breadcrumb'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vetrux.tech'),
  title: {
    default: 'Wholesale CBD Isolate Supplier | Bulk CBD Isolate Manufacturer — Vetrux CBD',
    template: '%s — Vetrux CBD',
  },
  description:
    'VETRUX is the CBD product brand of Vetrux Biotechnology (Chuxiong) Co., Ltd. CBD raw material sales, OEM/ODM services, technical support, and botanical extract solutions.',
  keywords:
    'CBD raw materials, CBD crystal, OEM ODM CBD, botanical extracts, CBD supplier, Vetrux CBD, Yunnan',
  authors: [{ name: 'Vetrux CBD' }],
  robots: { index: true, follow: true },
  openGraph: {
    siteName: 'Vetrux CBD',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/facility-hero.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/facility-hero.webp'],
  },
  alternates: {
    languages: {
      'en': 'https://www.vetrux.tech',
      'de': 'https://www.vetrux.tech/de',
      'fr': 'https://www.vetrux.tech/fr',
      'x-default': 'https://www.vetrux.tech',
    },
  },
  other: {
    'geo.region': 'CN-YN',
    'geo.placename': 'Yunnan, China',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-screen flex flex-col bg-surface font-sans">
        <Navbar />
        <main className="flex-1 pt-12">
          <Breadcrumb />
          {children}
        </main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WSY6VLTBFL"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WSY6VLTBFL');
        `}</Script>
      </body>
    </html>
  )
}
