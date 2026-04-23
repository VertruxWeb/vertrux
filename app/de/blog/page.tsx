import type { Metadata } from 'next';
import { articles } from '@/content/articles';
import DeInsightsPageClient from '@/components/pages/DeInsightsPageClient';

export const metadata: Metadata = {
  title: 'Blog & Einblicke | Vetrux CBD',
  description: 'Branchenanalysen, Forschungsergebnisse und Einblicke in botanische Biotechnologie von Vetrux CBD.',
};

export default function DeBlogPage() {
  return <DeInsightsPageClient articles={articles} />;
}
