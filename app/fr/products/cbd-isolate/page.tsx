import type { Metadata } from 'next';
import FrProductPageClient from '@/components/pages/FrProductPageClient';

export const metadata: Metadata = {
  title: 'Isolat CBD | Apercu produit | Vetrux CBD',
  description: 'Isolat CBD avec une pureté ≥99,9%. Conditionnement: sacs PE 5 kg, sacs aluminium 5 kg, cartons export. Documentation selon les exigences de commande.',
  keywords: 'isolat CBD, matiere premiere CBD, conditionnement CBD, fournisseur CBD',
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
    title: 'Isolat CBD | Vetrux CBD',
    description: 'Isolat CBD avec une pureté ≥99,9%. Documentation selon les exigences de commande.',
    url: 'https://www.vetrux.tech/fr/products/cbd-isolate',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/images/products/cbd-crystal-closeup.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isolat CBD | Vetrux CBD',
    description: 'Isolat CBD avec une pureté ≥99,9%. Documentation selon les exigences de commande.',
  },
};

export default function FrCbdIsolatePage() {
  return <FrProductPageClient />;
}
