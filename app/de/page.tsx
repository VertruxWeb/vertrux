import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';
import DeHomePageClient from '@/components/pages/DeHomePageClient';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrl();
  return {
    title: 'CBD-Rohstoffe & Botanische Extrakte — Vetrux CBD',
    description:
      'VETRUX ist die CBD-Produktmarke von 蔚萃生物科技（楚雄）有限公司. CBD-Rohstoffverkauf, OEM/ODM-Dienstleistungen, technische Unterstützung und botanische Extraktlösungen aus Yunnan, China.',
    keywords:
      'CBD Rohstoffe, CBD Kristall, OEM ODM CBD, botanische Extrakte, CBD Lieferant, Vetrux CBD, Yunnan',
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
      title: 'CBD-Rohstoffe & Botanische Extrakte — Vetrux CBD',
      description: 'VETRUX — CBD-Rohstoffe, OEM/ODM, technische Unterstützung und botanische Extrakte aus Yunnan, China.',
      url: `${baseUrl}/de`,
      locale: 'de_DE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'CBD-Rohstoffe & Botanische Extrakte — Vetrux CBD',
      description: 'VETRUX — CBD-Rohstoffe, OEM/ODM, technische Unterstützung und botanische Extrakte aus Yunnan, China.',
    },
  };
}

export default function DeLandingPage() {
  return <DeHomePageClient />;
}
