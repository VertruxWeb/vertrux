import type { Metadata } from 'next';
import { articles } from '@/content/articles';
import FrInsightsPageClient from '@/components/pages/FrInsightsPageClient';

export const metadata: Metadata = {
  title: 'Blog & Perspectives | Vetrux CBD',
  description: 'Analyses industrielles, résultats de recherche et perspectives en biotechnologie végétale par Vetrux CBD.',
};

export default function FrBlogPage() {
  return <FrInsightsPageClient articles={articles} />;
}
