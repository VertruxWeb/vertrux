import type { Metadata } from 'next';
import { buildMetadata, getSeoMetadata } from '@/lib/seo';
import { articles } from '@/content/articles';
import InsightsPageClient from '@/components/pages/InsightsPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/blog');
}

export default function BlogPage() {
  const seo = getSeoMetadata('/blog');
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
      <InsightsPageClient articles={articles} />
    </>
  );
}
