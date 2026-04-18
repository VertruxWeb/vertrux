import type { Metadata } from 'next';
import { buildMetadata, getSeoMetadata } from '@/lib/seo';
import QualityAssuranceClient from '@/components/pages/QualityAssuranceClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/quality-assurance');
}

export default function QualityAssurancePage() {
  const seo = getSeoMetadata('/quality-assurance');
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
      <QualityAssuranceClient />
    </>
  );
}
