import type { Metadata } from 'next';
import DeProductPageClient from '@/components/pages/DeProductPageClient';

export const metadata: Metadata = {
  title: 'CBD-Isolat ≥99,5% Reinheit | Pharmazeutisches Cannabidiol | Vetrux CBD',
  description: 'Pharmazeutisches CBD-Isolat mit ≥99,5% Reinheit (HPLC), THC nicht nachweisbar. Weißes kristallines Pulver, CAS 13956-29-1, HS 2907299020. Hergestellt in Yunnan unter cGMP-Standards. Großhandelsanfragen willkommen — FOB Kunming, CIF, DDP.',
};

export default function DeCbdIsolatePage() {
  return <DeProductPageClient />;
}
