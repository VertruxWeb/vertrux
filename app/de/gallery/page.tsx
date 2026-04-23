import type { Metadata } from 'next';
import DeGalleryPageClient from '@/components/pages/DeGalleryPageClient';

export const metadata: Metadata = {
  title: 'Galerie | Anlagen-Dokumentation | Vetrux CBD',
  description: 'Visuelle Dokumentation der Vetrux-Lieferkette: Anbau in Yunnan, industrielle Extraktion, pharmazeutisches CBD-Isolat.',
  keywords: 'CBD Herstellungsanlage, CBD Extraktionsanlage Fotos, CBD Labor, Hanfanbaubasis',
  alternates: {
    canonical: 'https://www.vetrux.tech/de/gallery',
    languages: {
      en: 'https://www.vetrux.tech/gallery',
      de: 'https://www.vetrux.tech/de/gallery',
      fr: 'https://www.vetrux.tech/fr/gallery',
      'x-default': 'https://www.vetrux.tech/gallery',
    },
  },
  openGraph: {
    title: 'Galerie',
    description: 'Visuelle Dokumentation der Vetrux-Lieferkette: Anbau in Yunnan, industrielle Extraktion, pharmazeutisches CBD-Isolat.',
    url: 'https://www.vetrux.tech/de/gallery',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/hero/facility-hero.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galerie',
    description: 'Visuelle Dokumentation der Vetrux-Lieferkette: Anbau in Yunnan, industrielle Extraktion, pharmazeutisches CBD-Isolat.',
  },
};

export default function DeGalleryPage() {
  return <DeGalleryPageClient />;
}
