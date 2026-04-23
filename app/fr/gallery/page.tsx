import type { Metadata } from 'next';
import FrGalleryPageClient from '@/components/pages/FrGalleryPageClient';

export const metadata: Metadata = {
  title: 'Galerie | Documentation visuelle des installations | Vetrux CBD',
  description: 'Explorez la chaine d'approvisionnement integree de Vetrux: culture en haute altitude du Yunnan, extraction industrielle, isolat de CBD pharmaceutique.',
  keywords: 'installation fabrication CBD, photos installation extraction CBD, laboratoire CBD, base culture chanvre',
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
    title: 'Galerie',
    description: 'Explorez la chaine d'approvisionnement integree de Vetrux: culture en haute altitude du Yunnan, extraction industrielle, isolat de CBD pharmaceutique.',
    url: 'https://www.vetrux.tech/fr/gallery',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/images/hero/facility-hero.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galerie',
    description: 'Explorez la chaine d'approvisionnement integree de Vetrux: culture en haute altitude du Yunnan, extraction industrielle, isolat de CBD pharmaceutique.',
  },
};

export default function FrGalleryPage() {
  return <FrGalleryPageClient />;
}
