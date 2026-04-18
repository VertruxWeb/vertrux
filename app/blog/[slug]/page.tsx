import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata, getSeoMetadata } from '@/lib/seo';
import { articles, getArticleBySlug } from '@/content/articles';
import ArticlePageClient from '@/components/pages/ArticlePageClient';

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildMetadata(`/blog/${slug}`);
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const seo = getSeoMetadata(`/blog/${slug}`);
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
      <ArticlePageClient meta={article.meta} content={article.content} />
    </>
  );
}
