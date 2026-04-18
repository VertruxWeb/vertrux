import type { Metadata } from 'next';
import { buildMetadata, getSeoMetadata } from '@/lib/seo';
import ProductPageClient from '@/components/pages/ProductPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/products/cbd-isolate');
}

export default function ProductPage() {
  const seo = getSeoMetadata('/products/cbd-isolate');
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
      <ProductPageClient />
    </>
  );
}
