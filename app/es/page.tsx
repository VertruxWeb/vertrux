import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import HomePageClient from '@/components/pages/HomePageClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/', 'es');
}

export default function Page() {
  return <HomePageClient locale="es" />;
}
