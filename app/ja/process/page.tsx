import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import ProcessPageClient from '@/components/pages/ProcessPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/process', 'ja');
}

export default function Page() {
  return <ProcessPageClient locale="ja" />;
}
