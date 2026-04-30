import type { Metadata } from 'next';
import FrPlantingPageClient from '@/components/pages/FrPlantingPageClient';

export const metadata: Metadata = {
  title: 'Centre de culture et de selection | Systeme de culture standardise | Vetrux CBD',
  description: 'Vetrux exploite un centre de culture et de selection a Chuxiong, Yunnan. Systeme de culture standardise et tracable.',
  keywords: 'culture chanvre Yunnan, culture CBD chanvre, systeme culture standardise, selection semences, tracabilite',
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
    title: 'Centre de culture et de selection | Vetrux CBD',
    description: 'Systeme de culture standardise et tracable a Chuxiong, Yunnan.',
    url: 'https://www.vetrux.tech/fr/planting',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centre de culture et de selection | Vetrux CBD',
    description: 'Systeme de culture standardise et tracable a Chuxiong, Yunnan.',
  },
};

export default function FrPlantingPage() {
  return <FrPlantingPageClient />;
}
