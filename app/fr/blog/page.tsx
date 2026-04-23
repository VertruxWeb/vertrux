import type { Metadata } from 'next';
import { articles } from '@/content/articles';
import FrInsightsPageClient from '@/components/pages/FrInsightsPageClient';

export const metadata: Metadata = {
  title: 'Blog & Perspectives | Analyse Industrie CBD | Vetrux CBD',
  description: 'Analyses industrielles, resultats de recherche et perspectives en biotechnologie vegetale par Vetrux CBD.',
  keywords: 'technologie extraction CBD, normes conformite CBD, analyse industrie CBD, chaine approvisionnement CBD',
  alternates: {
    canonical: 'https://www.vetrux.tech/fr/blog',
    languages: {
      en: 'https://www.vetrux.tech/blog',
      de: 'https://www.vetrux.tech/de/blog',
      fr: 'https://www.vetrux.tech/fr/blog',
      'x-default': 'https://www.vetrux.tech/blog',
    },
  },
  openGraph: {
    title: 'Blog & Perspectives',
    description: 'Analyses industrielles, resultats de recherche et perspectives en biotechnologie vegetale par Vetrux CBD.',
    url: 'https://www.vetrux.tech/fr/blog',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Perspectives',
    description: 'Analyses industrielles, resultats de recherche et perspectives en biotechnologie vegetale par Vetrux CBD.',
  },
};

export default function FrBlogPage() {
  return <FrInsightsPageClient articles={articles} />;
}
