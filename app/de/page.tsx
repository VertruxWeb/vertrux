import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';
import DeHomePageClient from '@/components/pages/DeHomePageClient';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrl();
  return {
    title: 'CBD-Isolat Großhandel | Pharmazeutische Qualität ≥99,5% — Vetrux CBD',
    description:
      'Vetrux CBD ist die Handelsmarke von 蔚萃生物科技（楚雄）有限公司 für vertikal integrierte CBD-Isolat-Herstellung in China. Pharmazeutische Qualität ≥99,5% Reinheit, THC-frei. Großhandelspreise mit DDP-Lieferung nach Europa.',
    keywords:
      'CBD Isolat Großhandel, CBD Isolat kaufen, CBD Isolat Hersteller, pharmazeutisches CBD Isolat, THC-freies CBD Isolat, CBD Isolat Europa, CBD Isolat Lieferant',
    alternates: {
      canonical: `${baseUrl}/de`,
      languages: {
        'en': `${baseUrl}`,
        'de': `${baseUrl}/de`,
        'fr': `${baseUrl}/fr`,
        'x-default': `${baseUrl}`,
      },
    },
    openGraph: {
      title: 'CBD-Isolat Großhandel | Pharmazeutische Qualität — Vetrux CBD',
      description: 'Pharmazeutisches CBD-Isolat ≥99,5% Reinheit, THC-frei. DDP-Lieferung nach Europa.',
      url: `${baseUrl}/de`,
      locale: 'de_DE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'CBD-Isolat Großhandel | Pharmazeutische Qualität — Vetrux CBD',
      description: 'Pharmazeutisches CBD-Isolat ≥99,5% Reinheit, THC-frei. DDP-Lieferung nach Europa.',
    },
  };
}

export default function DeLandingPage() {
  return <DeHomePageClient />;
}
