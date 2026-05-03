import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import ProductPageClient from '@/components/pages/ProductPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/products/cbd-isolate', 'de');
}

export default function Page() {
  return <ProductPageClient locale="de" />;
}
