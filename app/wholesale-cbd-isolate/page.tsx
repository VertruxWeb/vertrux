import type { Metadata } from 'next';
import { buildMetadata, getSeoMetadata } from '@/lib/seo';
import WholesaleCbdIsolateClient from '@/components/pages/WholesaleCbdIsolateClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/wholesale-cbd-isolate');
}

export default function WholesaleCbdIsolatePage() {
  const seo = getSeoMetadata('/wholesale-cbd-isolate');
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
      <WholesaleCbdIsolateClient />
    </>
  );
}
