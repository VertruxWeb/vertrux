import type { Metadata } from 'next';
import { buildMetadata, getSeoMetadata } from '@/lib/seo';
import GalleryPageClient from '@/components/pages/GalleryPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/gallery');
}

export default function GalleryPage() {
  const seo = getSeoMetadata('/gallery');
  const jsonLd = seo.jsonLd;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd]),
          }}
        />
      )}
      <GalleryPageClient />
    </>
  );
}
