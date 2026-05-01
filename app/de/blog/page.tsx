import type { Metadata } from 'next';
import { articles } from '@/content/articles';
import DeInsightsPageClient from '@/components/pages/DeInsightsPageClient';

export const metadata: Metadata = {
  title: 'Blog & Einblicke | CBD Branchenanalyse | Vetrux CBD',
  description: 'Branchenanalysen, Forschungsergebnisse und Einblicke in CBD-Biotechnologie von Vetrux CBD.',
  keywords: 'CBD Extraktionstechnologie, CBD Compliance Standards, CBD Branchenanalyse, CBD Lieferkette',
  alternates: {
    canonical: 'https://www.vetrux.tech/de/blog',
    languages: {
      en: 'https://www.vetrux.tech/blog',
      de: 'https://www.vetrux.tech/de/blog',
      fr: 'https://www.vetrux.tech/fr/blog',
      'x-default': 'https://www.vetrux.tech/blog',
    },
  },
  openGraph: {
    title: 'Blog & Einblicke',
    description: 'Branchenanalysen, Forschungsergebnisse und Einblicke in CBD-Biotechnologie von Vetrux CBD.',
    url: 'https://www.vetrux.tech/de/blog',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Einblicke',
    description: 'Branchenanalysen, Forschungsergebnisse und Einblicke in CBD-Biotechnologie von Vetrux CBD.',
  },
};

export default function DeBlogPage() {
  return <DeInsightsPageClient articles={articles} />;
}
