import type { Metadata } from 'next';
import DeProductPageClient from '@/components/pages/DeProductPageClient';

export const metadata: Metadata = {
  title: 'CBD-Isolat ≥99,5% Reinheit | Pharmazeutisches Cannabidiol | Vetrux CBD',
  description: 'Pharmazeutisches CBD-Isolat mit ≥99,5% Reinheit (HPLC), THC nicht nachweisbar. CAS 13956-29-1, HS 2907299020. Hergestellt in Yunnan unter cGMP-Standards.',
  keywords: 'CBD Isolat 99,5% Reinheit, pharmazeutisches CBD Isolat, THC-freies CBD Isolat, CBD Isolat Großhandel, CBD Isolat Europa',
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
    title: 'CBD-Isolat ≥99,5% Reinheit',
    description: 'Pharmazeutisches CBD-Isolat mit ≥99,5% Reinheit (HPLC), THC nicht nachweisbar. CAS 13956-29-1, HS 2907299020. Hergestellt in Yunnan unter cGMP-Standards.',
    url: 'https://www.vetrux.tech/de/products/cbd-isolate',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/products/cbd-crystal-closeup.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CBD-Isolat ≥99,5% Reinheit',
    description: 'Pharmazeutisches CBD-Isolat mit ≥99,5% Reinheit (HPLC), THC nicht nachweisbar. CAS 13956-29-1, HS 2907299020. Hergestellt in Yunnan unter cGMP-Standards.',
  },
};

export default function DeCbdIsolatePage() {
  return <DeProductPageClient />;
}
