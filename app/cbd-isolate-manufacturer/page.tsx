import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/atoms/JsonLd';
import CbdIsolateManufacturerClient from '@/components/pages/CbdIsolateManufacturerClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/cbd-isolate-manufacturer');
}

export default function CbdIsolateManufacturerPage() {
  return (
    <>
      <JsonLd path="/cbd-isolate-manufacturer" />
      <CbdIsolateManufacturerClient locale="en" />
    </>
  );
}
