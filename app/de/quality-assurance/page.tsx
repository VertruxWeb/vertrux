import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/atoms/JsonLd';
import QualityAssuranceClient from '@/components/pages/QualityAssuranceClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/quality-assurance', 'de');
}

export default function Page() {
  return (
    <>
      <JsonLd path="/quality-assurance" />
      <QualityAssuranceClient locale="de" />
    </>
  );
}
