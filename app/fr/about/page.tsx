import type { Metadata } from 'next';
import FrAboutPageClient from '@/components/pages/FrAboutPageClient';

export const metadata: Metadata = {
  title: 'A propos de Vetrux CBD | Profil entreprise',
  description: 'VETRUX est la marque CBD de Vetrux Biotechnology (Chuxiong) Co., Ltd. Matieres premieres CBD, OEM/ODM, support technique et extraits botaniques depuis le Yunnan, Chine.',
  keywords: 'Vetrux CBD, fabricant CBD Chine, matieres premieres CBD Yunnan, extraits botaniques',
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
    title: 'A propos de Vetrux CBD',
    description: 'VETRUX — matieres premieres CBD, OEM/ODM, support technique et extraits botaniques depuis le Yunnan, Chine.',
    url: 'https://www.vetrux.tech/fr/about',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/images/hero/facility-hero.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A propos de Vetrux CBD',
    description: 'VETRUX — matieres premieres CBD, OEM/ODM, support technique et extraits botaniques depuis le Yunnan, Chine.',
  },
};

export default function FrAboutPage() {
  return <FrAboutPageClient />;
}
