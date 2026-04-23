import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';
import FrHomePageClient from '@/components/pages/FrHomePageClient';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrl();
  return {
    title: 'Isolat de CBD en Gros | Qualité Pharmaceutique ≥99,5% — Vetrux CBD',
    description:
      'Vetrux CBD est la marque commerciale de 蔚萃生物科技（楚雄）有限公司, fabricant d’isolat de CBD verticalement intégré en Chine. Qualité pharmaceutique ≥99,5% de pureté, sans THC. Prix de gros avec livraison DDP en Europe.',
    keywords:
      'isolat CBD gros, acheter isolat CBD, fabricant isolat CBD, isolat CBD pharmaceutique, isolat CBD sans THC, isolat CBD Europe, fournisseur isolat CBD',
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
      title: 'Isolat de CBD en Gros | Qualité Pharmaceutique — Vetrux CBD',
      description: 'Isolat de CBD pharmaceutique ≥99,5% de pureté, sans THC. Livraison DDP en Europe.',
      url: `${baseUrl}/fr`,
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Isolat de CBD en Gros | Qualité Pharmaceutique — Vetrux CBD',
      description: 'Isolat de CBD pharmaceutique ≥99,5% de pureté, sans THC. Livraison DDP en Europe.',
    },
  };
}

export default function FrLandingPage() {
  return <FrHomePageClient />;
}
