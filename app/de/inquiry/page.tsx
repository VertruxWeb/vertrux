import type { Metadata } from 'next';
import DeInquiryPageClient from '@/components/pages/DeInquiryPageClient';

export const metadata: Metadata = {
  title: 'Anfrage | B2B Grosshandel CBD-Isolat | Vetrux CBD',
  description: 'B2B-Grosshandelsanfrage fuer CBD-Rohstoffe und OEM/ODM-Dienstleistungen von Vetrux CBD.',
  keywords: 'CBD Isolat Grosshandelsanfrage, CBD Isolat Angebot, B2B CBD Lieferant Kontakt',
  alternates: {
    canonical: 'https://www.vetrux.tech/de/inquiry',
    languages: {
      en: 'https://www.vetrux.tech/inquiry',
      de: 'https://www.vetrux.tech/de/inquiry',
      fr: 'https://www.vetrux.tech/fr/inquiry',
      'x-default': 'https://www.vetrux.tech/inquiry',
    },
  },
  openGraph: {
    title: 'Anfrage',
    description: 'B2B-Grosshandelsanfrage fuer CBD-Rohstoffe und OEM/ODM-Dienstleistungen von Vetrux CBD.',
    url: 'https://www.vetrux.tech/de/inquiry',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/hero/facility-hero.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anfrage',
    description: 'B2B-Grosshandelsanfrage fuer CBD-Rohstoffe und OEM/ODM-Dienstleistungen von Vetrux CBD.',
  },
};

export default function DeInquiryPage() {
  return <DeInquiryPageClient />;
}
