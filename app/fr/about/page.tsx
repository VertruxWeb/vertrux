import type { Metadata } from 'next';
import FrAboutPageClient from '@/components/pages/FrAboutPageClient';

export const metadata: Metadata = {
  title: 'A propos | Fabricant d'isolat de CBD Yunnan | Vetrux CBD',
  description: 'VETRUX est la marque internationale de Vetrux Biotechnology (Chuxiong) Co., Ltd. Fabricant d'isolat de CBD verticalement integre au Yunnan, Chine.',
  keywords: 'Vetrux CBD, fabricant CBD Chine, fabricant isolat CBD Yunnan, extraits botaniques fabricant',
  alternates: {
    canonical: 'https://www.vetrux.tech/fr/about',
    languages: {
      en: 'https://www.vetrux.tech/about',
      de: 'https://www.vetrux.tech/de/about',
      fr: 'https://www.vetrux.tech/fr/about',
      'x-default': 'https://www.vetrux.tech/about',
    },
  },
  openGraph: {
    title: 'A propos',
    description: 'VETRUX est la marque internationale de Vetrux Biotechnology (Chuxiong) Co., Ltd. Fabricant d'isolat de CBD verticalement integre au Yunnan, Chine.',
    url: 'https://www.vetrux.tech/fr/about',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/images/hero/facility-hero.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A propos',
    description: 'VETRUX est la marque internationale de Vetrux Biotechnology (Chuxiong) Co., Ltd. Fabricant d'isolat de CBD verticalement integre au Yunnan, Chine.',
  },
};

export default function FrAboutPage() {
  return <FrAboutPageClient />;
}
