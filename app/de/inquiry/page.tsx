import type { Metadata } from 'next';
import DeInquiryPageClient from '@/components/pages/DeInquiryPageClient';

export const metadata: Metadata = {
  title: 'Anfrage | Vetrux CBD',
  description: 'Stellen Sie eine B2B-Großhandelsanfrage für CBD-Rohstoffe, OEM/ODM-Dienstleistungen und botanische Extrakte von Vetrux CBD.',
};

export default function DeInquiryPage() {
  return <DeInquiryPageClient />;
}
