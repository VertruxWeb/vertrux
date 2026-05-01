import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';
import DeHomePageClient from '@/components/pages/DeHomePageClient';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrl();
  return {
    title: 'CBD-Rohstoffe | Vetrux CBD',
    description:
      'VETRUX — die CBD-Rohstoffmarke der Vetrux Biotechnology (Chuxiong) Co., Ltd. CBD-Rohstoffverkauf, OEM/ODM-Dienstleistungen und technische Unterstützung aus Yunnan, China.',
    keywords:
      'CBD Rohstoffe, CBD Isolat, OEM ODM CBD, CBD Lieferant, Vetrux CBD, Yunnan',
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
      title: 'CBD-Rohstoffe | Vetrux CBD',
      description: 'VETRUX — CBD-Rohstoffe, OEM/ODM und technische Unterstützung aus Yunnan, China.',
      url: `${baseUrl}/de`,
      locale: 'de_DE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'CBD-Rohstoffe | Vetrux CBD',
      description: 'VETRUX — CBD-Rohstoffe, OEM/ODM und technische Unterstützung aus Yunnan, China.',
    },
  };
}

export default function DeLandingPage() {
  return <DeHomePageClient />;
}
