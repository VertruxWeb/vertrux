import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';
import FrHomePageClient from '@/components/pages/FrHomePageClient';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrl();
  return {
    title: 'Matières Premières CBD & Extraits Botaniques — Vetrux CBD',
    description:
      'VETRUX est la marque CBD de 蔚萃生物科技（楚雄）有限公司. Vente de matières premières CBD, services OEM/ODM, support technique et extraits botaniques depuis le Yunnan, Chine.',
    keywords:
      'matières premières CBD, cristal CBD, OEM ODM CBD, extraits botaniques, fournisseur CBD, Vetrux CBD, Yunnan',
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
      title: 'Matières Premières CBD & Extraits Botaniques — Vetrux CBD',
      description: 'VETRUX — matières premières CBD, OEM/ODM, support technique et extraits botaniques depuis le Yunnan, Chine.',
      url: `${baseUrl}/fr`,
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Matières Premières CBD & Extraits Botaniques — Vetrux CBD',
      description: 'VETRUX — matières premières CBD, OEM/ODM, support technique et extraits botaniques depuis le Yunnan, Chine.',
    },
  };
}

export default function FrLandingPage() {
  return <FrHomePageClient />;
}
