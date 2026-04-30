import type { Metadata } from 'next';
import FrGalleryPageClient from '@/components/pages/FrGalleryPageClient';

export const metadata: Metadata = {
  title: 'Galerie | Site de production et base de culture | Vetrux CBD',
  description: 'Apercu visuel du site de production et de la base de culture Vetrux CBD a Chuxiong, Yunnan.',
  keywords: 'galerie installation CBD, photos equipement extraction, base culture chanvre',
  alternates: {
    canonical: 'https://www.vetrux.tech/fr/gallery',
    languages: {
      en: 'https://www.vetrux.tech/gallery',
      de: 'https://www.vetrux.tech/de/gallery',
      fr: 'https://www.vetrux.tech/fr/gallery',
      'x-default': 'https://www.vetrux.tech/gallery',
    },
  },
  openGraph: {
    title: 'Galerie | Vetrux CBD',
    description: 'Apercu visuel du site de production et de la base de culture Vetrux CBD a Chuxiong, Yunnan.',
    url: 'https://www.vetrux.tech/fr/gallery',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galerie | Vetrux CBD',
    description: 'Apercu visuel du site de production et de la base de culture Vetrux CBD a Chuxiong, Yunnan.',
  },
};

export default function FrGalleryPage() {
  return <FrGalleryPageClient />;
}
