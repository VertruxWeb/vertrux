import type { Metadata } from 'next';
import FrProductPageClient from '@/components/pages/FrProductPageClient';

export const metadata: Metadata = {
  title: 'Isolat de CBD ≥99,5% Pureté | Cannabidiol Pharmaceutique | Vetrux CBD',
  description: 'Isolat de CBD de qualité pharmaceutique avec ≥99,5% de pureté (HPLC), THC non détecté. Poudre cristalline blanche, CAS 13956-29-1, SH 2907299020. Produit au Yunnan selon les normes cGMP. Demandes de gros bienvenues — FOB Kunming, CIF, DDP.',
};

export default function FrCbdIsolatePage() {
  return <FrProductPageClient />;
}
