import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import InquiryPageClient from '@/components/pages/InquiryPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/inquiry', 'fr');
}

export default function Page() {
  return <InquiryPageClient locale="fr" />;
}
