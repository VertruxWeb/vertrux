import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { articles } from '@/content/articles';
import InsightsPageClient from '@/components/pages/InsightsPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/blog', 'de');
}

export default function Page() {
  return <InsightsPageClient articles={articles} locale="de" />;
}
