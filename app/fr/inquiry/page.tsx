import type { Metadata } from 'next';
import FrInquiryPageClient from '@/components/pages/FrInquiryPageClient';

export const metadata: Metadata = {
  title: 'Demande | Vetrux CBD',
  description: 'Soumettez une demande B2B de gros pour les matières premières CBD, services OEM/ODM et extraits botaniques de Vetrux CBD.',
};

export default function FrInquiryPage() {
  return <FrInquiryPageClient />;
}
