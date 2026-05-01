import type { Metadata } from 'next';
import DeProductPageClient from '@/components/pages/DeProductPageClient';

export const metadata: Metadata = {
  title: 'CBD-Isolat | Produktübersicht | Vetrux CBD',
  description: 'CBD-Isolat mit ≥99,9% Reinheit. Verpackung: 5 kg PE-Beutel, 5 kg Aluminiumfolienbeutel, Exportkartons. Dokumentation nach Bestellanforderungen.',
  keywords: 'CBD Isolat, CBD Rohstoff, CBD Verpackung, CBD Lieferant',
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
    title: 'CBD-Isolat | Vetrux CBD',
    description: 'CBD-Isolat mit ≥99,9% Reinheit. Dokumentation nach Bestellanforderungen.',
    url: 'https://www.vetrux.tech/de/products/cbd-isolate',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/products/cbd-crystal-closeup.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CBD-Isolat | Vetrux CBD',
    description: 'CBD-Isolat mit ≥99,9% Reinheit. Dokumentation nach Bestellanforderungen.',
  },
};

export default function DeCbdIsolatePage() {
  return <DeProductPageClient />;
}
