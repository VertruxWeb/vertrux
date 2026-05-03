import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import GalleryPageClient from '@/components/pages/GalleryPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/gallery', 'de');
}

export default function Page() {
  return <GalleryPageClient locale="de" />;
}
