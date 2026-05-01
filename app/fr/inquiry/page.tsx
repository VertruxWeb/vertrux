import type { Metadata } from 'next';
import FrInquiryPageClient from '@/components/pages/FrInquiryPageClient';

export const metadata: Metadata = {
  title: 'Demande | B2B Gros Isolat de CBD | Vetrux CBD',
  description: 'Soumettez une demande B2B de gros pour les matieres premieres CBD et services OEM/ODM de Vetrux CBD.',
  keywords: 'demande isolat CBD gros, devis isolat CBD, prix gros isolat CBD, contact fournisseur CBD B2B',
  alternates: {
    canonical: 'https://www.vetrux.tech/fr/inquiry',
    languages: {
      en: 'https://www.vetrux.tech/inquiry',
      de: 'https://www.vetrux.tech/de/inquiry',
      fr: 'https://www.vetrux.tech/fr/inquiry',
      'x-default': 'https://www.vetrux.tech/inquiry',
    },
  },
  openGraph: {
    title: 'Demande',
    description: 'Soumettez une demande B2B de gros pour les matieres premieres CBD et services OEM/ODM de Vetrux CBD.',
    url: 'https://www.vetrux.tech/fr/inquiry',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/images/hero/facility-hero.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demande',
    description: 'Soumettez une demande B2B de gros pour les matieres premieres CBD et services OEM/ODM de Vetrux CBD.',
  },
};

export default function FrInquiryPage() {
  return <FrInquiryPageClient />;
}
