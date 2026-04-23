import type { Metadata } from 'next';
import DeAboutPageClient from '@/components/pages/DeAboutPageClient';

export const metadata: Metadata = {
  title: 'Über uns — Vetrux CBD | CBD-Isolat-Hersteller aus Chuxiong, Yunnan',
  description: 'VETRUX ist die internationale Marke der Vetrux Biotechnology (Chuxiong) Co., Ltd. — vertikal integrierter CBD-Isolat-Hersteller und Anbieter botanischer Extrakte in Yunnan, China.',
};

export default function DeAboutPage() {
  return <DeAboutPageClient />;
}
