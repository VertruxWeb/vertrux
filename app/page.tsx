import type { Metadata } from 'next';
import { buildMetadata, getSeoMetadata } from '@/lib/seo';
import HomePageClient from '@/components/pages/HomePageClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/');
}

export default function HomePage() {
  const seo = getSeoMetadata('/');
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
      <HomePageClient />
    </>
  );
}
