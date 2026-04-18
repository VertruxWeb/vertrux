import type { Metadata } from 'next';
import { buildMetadata, getSeoMetadata } from '@/lib/seo';
import InquiryPageClient from '@/components/pages/InquiryPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/inquiry');
}

export default function InquiryPage() {
  const seo = getSeoMetadata('/inquiry');
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
      <InquiryPageClient />
    </>
  );
}
