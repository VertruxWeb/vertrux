import type { Metadata } from 'next';
import FrAboutPageClient from '@/components/pages/FrAboutPageClient';

export const metadata: Metadata = {
  title: 'A propos de Vetrux CBD | Profil entreprise',
  description: 'VETRUX — la marque de matières premières CBD exploitée par Vetrux Biotechnology (Chuxiong) Co., Ltd. Matières premières CBD, OEM/ODM et support technique depuis le Yunnan, Chine.',
  keywords: 'Vetrux CBD, fabricant CBD Chine, matieres premieres CBD Yunnan, fournisseur isolat CBD',
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
    description: 'VETRUX — matieres premieres CBD, OEM/ODM et support technique depuis le Yunnan, Chine.',
    url: 'https://www.vetrux.tech/fr/about',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/images/hero/facility-hero.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A propos de Vetrux CBD',
    description: 'VETRUX — matieres premieres CBD, OEM/ODM et support technique depuis le Yunnan, Chine.',
  },
};

export default function FrAboutPage() {
  return <FrAboutPageClient />;
}
