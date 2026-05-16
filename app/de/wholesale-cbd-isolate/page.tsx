import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/atoms/JsonLd';
import WholesaleCbdIsolateClient from '@/components/pages/WholesaleCbdIsolateClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/wholesale-cbd-isolate', 'de');
}

export default function Page() {
  return (
    <>
      <JsonLd path="/wholesale-cbd-isolate" />
      <WholesaleCbdIsolateClient locale="de" />
    </>
  );
}
