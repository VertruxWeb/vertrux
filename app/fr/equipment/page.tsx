import type { Metadata } from 'next';
import FrEquipmentPageClient from '@/components/pages/FrEquipmentPageClient';

export const metadata: Metadata = {
  title: 'Installation d\'Extraction Industrielle & Équipements | Production cGMP | Vetrux CBD',
  description: 'Installation industrielle d\'extraction et de purification de CBD à Chuxiong, Yunnan. 20×6m³ cuves d\'extraction, 26×700L colonnes de chromatographie, HPLC Thermo UltiMate 3000, automatisation Siemens. Plus de 80 unités d\'équipement sous normes cGMP.',
};

export default function FrEquipmentPage() {
  return <FrEquipmentPageClient />;
}
