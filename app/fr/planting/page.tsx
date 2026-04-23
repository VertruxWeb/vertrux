import type { Metadata } from 'next';
import FrPlantingPageClient from '@/components/pages/FrPlantingPageClient';

export const metadata: Metadata = {
  title: 'Culture & Selection | Culture de chanvre Chuxiong, Yunnan | Vetrux CBD',
  description: 'Vetrux exploite son propre centre de culture et de selection a Chuxiong, Yunnan. Tracabilite complete de la semence a l'isolat de CBD.',
  keywords: 'culture chanvre Yunnan, culture CBD chanvre, integration verticale CBD, tracabilite semence isolat',
  alternates: {
    canonical: 'https://www.vetrux.tech/fr/planting',
    languages: {
      en: 'https://www.vetrux.tech/planting',
      de: 'https://www.vetrux.tech/de/planting',
      fr: 'https://www.vetrux.tech/fr/planting',
      'x-default': 'https://www.vetrux.tech/planting',
    },
  },
  openGraph: {
    title: 'Culture & Selection',
    description: 'Vetrux exploite son propre centre de culture et de selection a Chuxiong, Yunnan. Tracabilite complete de la semence a l'isolat de CBD.',
    url: 'https://www.vetrux.tech/fr/planting',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/images/planting/flowering-cola-closeup.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Culture & Selection',
    description: 'Vetrux exploite son propre centre de culture et de selection a Chuxiong, Yunnan. Tracabilite complete de la semence a l'isolat de CBD.',
  },
};

export default function FrPlantingPage() {
  return <FrPlantingPageClient />;
}
