import type { Metadata } from 'next';
import { buildMetadata, getSeoMetadata } from '@/lib/seo';
import CbdIsolateManufacturerClient from '@/components/pages/CbdIsolateManufacturerClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/cbd-isolate-manufacturer');
}

export default function CbdIsolateManufacturerPage() {
  const seo = getSeoMetadata('/cbd-isolate-manufacturer');
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
      <CbdIsolateManufacturerClient />
    </>
  );
}
