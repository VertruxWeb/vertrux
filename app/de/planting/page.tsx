import type { Metadata } from 'next';
import DePlantingPageClient from '@/components/pages/DePlantingPageClient';

export const metadata: Metadata = {
  title: 'Anbau & Zucht | Hanfanbau Chuxiong, Yunnan | Vetrux CBD',
  description: 'Vetrux betreibt ein eigenes Anbau- und Zuchtzentrum in Chuxiong, Yunnan. Vollstaendige Rueckverfolgbarkeit vom Saatgut bis zum CBD-Isolat.',
  keywords: 'Hanfanbau Yunnan, CBD Hanfanbau, vertikale Integration CBD, Saatgut bis Isolat',
  alternates: {
    canonical: 'https://www.vetrux.tech/de/planting',
    languages: {
      en: 'https://www.vetrux.tech/planting',
      de: 'https://www.vetrux.tech/de/planting',
      fr: 'https://www.vetrux.tech/fr/planting',
      'x-default': 'https://www.vetrux.tech/planting',
    },
  },
  openGraph: {
    title: 'Anbau & Zucht',
    description: 'Vetrux betreibt ein eigenes Anbau- und Zuchtzentrum in Chuxiong, Yunnan. Vollstaendige Rueckverfolgbarkeit vom Saatgut bis zum CBD-Isolat.',
    url: 'https://www.vetrux.tech/de/planting',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/planting/flowering-cola-closeup.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anbau & Zucht',
    description: 'Vetrux betreibt ein eigenes Anbau- und Zuchtzentrum in Chuxiong, Yunnan. Vollstaendige Rueckverfolgbarkeit vom Saatgut bis zum CBD-Isolat.',
  },
};

export default function DePlantingPage() {
  return <DePlantingPageClient />;
}
