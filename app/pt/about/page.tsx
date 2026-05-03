import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import AboutPageClient from '@/components/pages/AboutPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/about', 'pt');
}

export default function Page() {
  return <AboutPageClient locale="pt" />;
}
