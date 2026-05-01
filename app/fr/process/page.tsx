import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';
import ProcessPageClient from '@/components/pages/ProcessPageClient';

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: "De la Graine à l'Isolat | Notre Procédé — Vetrux CBD",
  description:
    "Six phases contrôlées — de la culture Yunma-13 à l'isolat CBD pharmaceutique ≥99,9 %. VETRUX, Chuxiong, Yunnan.",
  keywords:
    'fabrication CBD, procédé CBD, extraction CBD, culture CBD Yunnan, production isolat CBD',
  alternates: {
    canonical: `${baseUrl}/fr/process`,
    languages: {
      en: `${baseUrl}/process`,
      de: `${baseUrl}/de/process`,
      fr: `${baseUrl}/fr/process`,
      'x-default': `${baseUrl}/process`,
    },
  },
  openGraph: {
    title: "De la Graine à l'Isolat | Notre Procédé — Vetrux CBD",
    description:
      "Six phases contrôlées — de la culture Yunma-13 à l'isolat CBD pharmaceutique ≥99,9 %. VETRUX, Chuxiong, Yunnan.",
    url: `${baseUrl}/fr/process`,
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: `${baseUrl}/images/process/growth-day-120-mature.jpg` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "De la Graine à l'Isolat | Notre Procédé — Vetrux CBD",
    description:
      "Six phases contrôlées — de la culture Yunma-13 à l'isolat CBD pharmaceutique ≥99,9 %. VETRUX, Chuxiong, Yunnan.",
    images: [`${baseUrl}/images/process/growth-day-120-mature.jpg`],
  },
};

export default function FrProcessPage() {
  return <ProcessPageClient locale="fr" />;
}
