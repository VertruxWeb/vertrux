import type { Metadata } from 'next';
import DeAboutPageClient from '@/components/pages/DeAboutPageClient';

export const metadata: Metadata = {
  title: 'Ueber uns | CBD-Isolat-Hersteller Yunnan | Vetrux CBD',
  description: 'VETRUX ist die internationale Marke der Vetrux Biotechnology (Chuxiong) Co., Ltd. Vertikal integrierter CBD-Isolat-Hersteller in Yunnan, China.',
  keywords: 'Vetrux CBD, CBD Hersteller China, CBD Isolat Hersteller Yunnan, botanische Extrakte Hersteller',
  alternates: {
    canonical: 'https://www.vetrux.tech/de/about',
    languages: {
      en: 'https://www.vetrux.tech/about',
      de: 'https://www.vetrux.tech/de/about',
      fr: 'https://www.vetrux.tech/fr/about',
      'x-default': 'https://www.vetrux.tech/about',
    },
  },
  openGraph: {
    title: 'Ueber uns',
    description: 'VETRUX ist die internationale Marke der Vetrux Biotechnology (Chuxiong) Co., Ltd. Vertikal integrierter CBD-Isolat-Hersteller in Yunnan, China.',
    url: 'https://www.vetrux.tech/de/about',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/hero/facility-hero.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ueber uns',
    description: 'VETRUX ist die internationale Marke der Vetrux Biotechnology (Chuxiong) Co., Ltd. Vertikal integrierter CBD-Isolat-Hersteller in Yunnan, China.',
  },
};

export default function DeAboutPage() {
  return <DeAboutPageClient />;
}
