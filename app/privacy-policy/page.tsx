import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/atoms/JsonLd';
import PrivacyPolicyClient from '@/components/pages/PrivacyPolicyClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/privacy-policy');
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd path="/privacy-policy" />
      <PrivacyPolicyClient locale="en" />
    </>
  );
}
