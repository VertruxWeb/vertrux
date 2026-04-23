import type { Metadata } from 'next';
import DePlantingPageClient from '@/components/pages/DePlantingPageClient';

export const metadata: Metadata = {
  title: 'Anbau & Zucht — Vetrux CBD | Hanfanbau in Chuxiong, Yunnan',
  description: 'Vetrux betreibt ein eigenes Anbau- und Zuchtzentrum in Chuxiong, Yunnan — Höhenhanfanbau mit vollständiger Rückverfolgbarkeit vom Saatgut bis zum CBD-Isolat.',
};

export default function DePlantingPage() {
  return <DePlantingPageClient />;
}
