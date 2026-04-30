import type { Metadata } from 'next';
import FrProductPageClient from '@/components/pages/FrProductPageClient';

export const metadata: Metadata = {
  title: 'Cristal CBD | Apercu produit | Vetrux CBD',
  description: 'Cristal CBD (CAS 13956-29-1, SH 2907299020). Conditionnement: sacs PE 5 kg, sacs aluminium 5 kg, cartons export. Documentation selon les exigences de commande.',
  keywords: 'cristal CBD, matiere premiere CBD, CAS 13956-29-1, conditionnement CBD, fournisseur CBD',
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
    title: 'Cristal CBD | Vetrux CBD',
    description: 'Cristal CBD (CAS 13956-29-1, SH 2907299020). Documentation selon les exigences de commande.',
    url: 'https://www.vetrux.tech/fr/products/cbd-isolate',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/images/products/cbd-crystal-closeup.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cristal CBD | Vetrux CBD',
    description: 'Cristal CBD (CAS 13956-29-1, SH 2907299020). Documentation selon les exigences de commande.',
  },
};

export default function FrCbdIsolatePage() {
  return <FrProductPageClient />;
}
