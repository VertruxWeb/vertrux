import type { Metadata } from 'next';
import FrPlantingPageClient from '@/components/pages/FrPlantingPageClient';

export const metadata: Metadata = {
  title: 'Culture & Sélection — Vetrux CBD | Culture de chanvre à Chuxiong, Yunnan',
  description: 'Vetrux exploite son propre centre de culture et de sélection à Chuxiong, Yunnan — culture de chanvre en haute altitude avec traçabilité complète de la semence à l\'isolat de CBD.',
};

export default function FrPlantingPage() {
  return <FrPlantingPageClient />;
}
