import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';
import ProcessPageClient from '@/components/pages/ProcessPageClient';

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'Vom Saatgut zum Isolat | Unser Prozess — Vetrux CBD',
  description:
    'Sechs kontrollierte Phasen — vom Yunma-13 Anbau bis zum ≥99,9 % pharmazeutischen CBD-Isolat. VETRUX, Chuxiong, Yunnan.',
  keywords:
    'CBD Herstellung, CBD Prozess, CBD Extraktion, CBD Anbau Yunnan, CBD Isolat Produktion',
  alternates: {
    canonical: `${baseUrl}/de/process`,
    languages: {
      en: `${baseUrl}/process`,
      de: `${baseUrl}/de/process`,
      fr: `${baseUrl}/fr/process`,
      'x-default': `${baseUrl}/process`,
    },
  },
  openGraph: {
    title: 'Vom Saatgut zum Isolat | Unser Prozess — Vetrux CBD',
    description:
      'Sechs kontrollierte Phasen — vom Yunma-13 Anbau bis zum ≥99,9 % pharmazeutischen CBD-Isolat. VETRUX, Chuxiong, Yunnan.',
    url: `${baseUrl}/de/process`,
    locale: 'de_DE',
    type: 'website',
    images: [{ url: `${baseUrl}/images/process/growth-day-120-mature.jpg` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vom Saatgut zum Isolat | Unser Prozess — Vetrux CBD',
    description:
      'Sechs kontrollierte Phasen — vom Yunma-13 Anbau bis zum ≥99,9 % pharmazeutischen CBD-Isolat. VETRUX, Chuxiong, Yunnan.',
    images: [`${baseUrl}/images/process/growth-day-120-mature.jpg`],
  },
};

export default function DeProcessPage() {
  return <ProcessPageClient locale="de" />;
}
