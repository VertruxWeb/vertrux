import { getSeoMetadata } from '@/lib/seo';

export function JsonLd({ path }: { path: string }) {
  const seo = getSeoMetadata(path);
  const jsonLd = seo.jsonLd;
  if (!jsonLd) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd]),
      }}
    />
  );
}
