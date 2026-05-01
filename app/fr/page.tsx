import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';
import FrHomePageClient from '@/components/pages/FrHomePageClient';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrl();
  return {
    title: 'Matières Premières CBD | Vetrux CBD',
    description:
      'VETRUX — la marque de matières premières CBD exploitée par Vetrux Biotechnology (Chuxiong) Co., Ltd. Vente de matières premières CBD, services OEM/ODM et support technique depuis le Yunnan, Chine.',
    keywords:
      'matières premières CBD, isolat CBD, OEM ODM CBD, fournisseur CBD, Vetrux CBD, Yunnan',
    alternates: {
      canonical: `${baseUrl}/fr`,
      languages: {
        'en': `${baseUrl}`,
        'de': `${baseUrl}/de`,
        'fr': `${baseUrl}/fr`,
        'x-default': `${baseUrl}`,
      },
    },
    openGraph: {
      title: 'Matières Premières CBD | Vetrux CBD',
      description: 'VETRUX — matières premières CBD, OEM/ODM et support technique depuis le Yunnan, Chine.',
      url: `${baseUrl}/fr`,
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Matières Premières CBD | Vetrux CBD',
      description: 'VETRUX — matières premières CBD, OEM/ODM et support technique depuis le Yunnan, Chine.',
    },
  };
}

export default function FrLandingPage() {
  return <FrHomePageClient />;
}
