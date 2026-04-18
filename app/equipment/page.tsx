import type { Metadata } from 'next';
import { buildMetadata, getSeoMetadata } from '@/lib/seo';
import EquipmentPageClient from '@/components/pages/EquipmentPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/equipment');
}

export default function EquipmentPage() {
  const seo = getSeoMetadata('/equipment');
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
      <EquipmentPageClient />
    </>
  );
}
