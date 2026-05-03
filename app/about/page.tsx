import type { Metadata } from 'next';
import { buildMetadata, getSeoMetadata } from '@/lib/seo';
import AboutPageClient from '@/components/pages/AboutPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/about');
}

export default function AboutPage() {
  const seo = getSeoMetadata('/about');
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
      <AboutPageClient locale="en" />
    </>
  );
}
