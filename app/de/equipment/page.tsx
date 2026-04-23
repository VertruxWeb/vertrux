import type { Metadata } from 'next';
import DeEquipmentPageClient from '@/components/pages/DeEquipmentPageClient';

export const metadata: Metadata = {
  title: 'Industrielle Extraktionsanlage & Ausrüstung | cGMP-Produktion | Vetrux CBD',
  description: 'Industrielle CBD-Extraktions- und Reinigungsanlage in Chuxiong, Yunnan. 20×6m³ Extraktionstanks, 26×700L Chromatographiesäulen, HPLC Thermo UltiMate 3000, Siemens-Automatisierung. Über 80 Ausrüstungseinheiten unter cGMP-Standards.',
};

export default function DeEquipmentPage() {
  return <DeEquipmentPageClient />;
}
