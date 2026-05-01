import type { Metadata } from 'next';
import { buildMetadata, getSeoMetadata } from '@/lib/seo';
import ProcessPageClient from '@/components/pages/ProcessPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/process');
}

export default function ProcessPage() {
  const seo = getSeoMetadata('/process');
  const jsonLd = seo.jsonLd;
  return (
    <>
      {jsonLd && (
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd]) }}
        />
      )}
      <ProcessPageClient locale="en" />
    </>
  );
}
