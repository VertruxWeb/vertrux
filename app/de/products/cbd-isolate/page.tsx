import type { Metadata } from 'next';
import DeProductPageClient from '@/components/pages/DeProductPageClient';

export const metadata: Metadata = {
  title: 'CBD-Kristall | Produktübersicht | Vetrux CBD',
  description: 'CBD-Kristall (CAS 13956-29-1, HS 2907299020). Verpackung: 5 kg PE-Beutel, 5 kg Aluminiumfolienbeutel, Exportkartons. Dokumentation nach Bestellanforderungen.',
  keywords: 'CBD Kristall, CBD Rohstoff, CAS 13956-29-1, CBD Verpackung, CBD Lieferant',
  alternates: {
    canonical: 'https://www.vetrux.tech/de/products/cbd-isolate',
    languages: {
      en: 'https://www.vetrux.tech/products/cbd-isolate',
      de: 'https://www.vetrux.tech/de/products/cbd-isolate',
      fr: 'https://www.vetrux.tech/fr/products/cbd-isolate',
      'x-default': 'https://www.vetrux.tech/products/cbd-isolate',
    },
  },
  openGraph: {
    title: 'CBD-Kristall | Vetrux CBD',
    description: 'CBD-Kristall (CAS 13956-29-1, HS 2907299020). Dokumentation nach Bestellanforderungen.',
    url: 'https://www.vetrux.tech/de/products/cbd-isolate',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/products/cbd-crystal-closeup.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CBD-Kristall | Vetrux CBD',
    description: 'CBD-Kristall (CAS 13956-29-1, HS 2907299020). Dokumentation nach Bestellanforderungen.',
  },
};

export default function DeCbdIsolatePage() {
  return <DeProductPageClient />;
}
