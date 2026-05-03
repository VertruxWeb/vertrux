import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import PlantingPageClient from '@/components/pages/PlantingPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/planting', 'fi');
}

export default function Page() {
  return <PlantingPageClient locale="fi" />;
}
