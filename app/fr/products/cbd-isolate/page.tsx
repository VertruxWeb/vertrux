import type { Metadata } from 'next';
import FrProductPageClient from '@/components/pages/FrProductPageClient';

export const metadata: Metadata = {
  title: 'Isolat de CBD >=99,5% Purete | Cannabidiol Pharmaceutique | Vetrux CBD',
  description: 'Isolat de CBD de qualite pharmaceutique avec >=99,5% de purete (HPLC), THC non detecte. CAS 13956-29-1, SH 2907299020. Produit au Yunnan selon les normes cGMP.',
  keywords: 'isolat CBD purete, isolat CBD pharmaceutique, isolat CBD sans THC, isolat CBD gros, isolat CBD Europe',
  alternates: {
    canonical: 'https://www.vetrux.tech/fr/products/cbd-isolate',
    languages: {
      en: 'https://www.vetrux.tech/products/cbd-isolate',
      de: 'https://www.vetrux.tech/de/products/cbd-isolate',
      fr: 'https://www.vetrux.tech/fr/products/cbd-isolate',
      'x-default': 'https://www.vetrux.tech/products/cbd-isolate',
    },
  },
  openGraph: {
    title: 'Isolat de CBD >=99,5% Purete',
    description: 'Isolat de CBD de qualite pharmaceutique avec >=99,5% de purete (HPLC), THC non detecte. CAS 13956-29-1, SH 2907299020. Produit au Yunnan selon les normes cGMP.',
    url: 'https://www.vetrux.tech/fr/products/cbd-isolate',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/images/products/cbd-crystal-closeup.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isolat de CBD >=99,5% Purete',
    description: 'Isolat de CBD de qualite pharmaceutique avec >=99,5% de purete (HPLC), THC non detecte. CAS 13956-29-1, SH 2907299020. Produit au Yunnan selon les normes cGMP.',
  },
};

export default function FrCbdIsolatePage() {
  return <FrProductPageClient />;
}
