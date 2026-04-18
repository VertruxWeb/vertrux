import type { Metadata } from 'next';
import { buildMetadata, getSeoMetadata } from '@/lib/seo';
import PlantingPageClient from '@/components/pages/PlantingPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/planting');
}

export default function PlantingPage() {
  const seo = getSeoMetadata('/planting');
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
      <PlantingPageClient />
    </>
  );
}
