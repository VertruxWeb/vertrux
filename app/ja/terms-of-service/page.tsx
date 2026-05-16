import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/atoms/JsonLd';
import TermsOfServiceClient from '@/components/pages/TermsOfServiceClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/terms-of-service', 'ja');
}

export default function Page() {
  return (
    <>
      <JsonLd path="/terms-of-service" />
      <TermsOfServiceClient locale="ja" />
    </>
  );
}
