import type { Metadata } from 'next';
import FrEquipmentPageClient from '@/components/pages/FrEquipmentPageClient';

export const metadata: Metadata = {
  title: 'Installation d'Extraction Industrielle | Production cGMP | Vetrux CBD',
  description: 'Installation industrielle d'extraction et de purification de CBD a Chuxiong, Yunnan. 20x6m3 cuves, 26x700L colonnes de chromatographie, automatisation Siemens.',
  keywords: 'installation extraction CBD, extraction industrielle, chromatographie purification CBD, equipement fabrication CBD',
  alternates: {
    canonical: 'https://www.vetrux.tech/fr/equipment',
    languages: {
      en: 'https://www.vetrux.tech/equipment',
      de: 'https://www.vetrux.tech/de/equipment',
      fr: 'https://www.vetrux.tech/fr/equipment',
      'x-default': 'https://www.vetrux.tech/equipment',
    },
  },
  openGraph: {
    title: 'Installation d'Extraction Industrielle',
    description: 'Installation industrielle d'extraction et de purification de CBD a Chuxiong, Yunnan. 20x6m3 cuves, 26x700L colonnes de chromatographie, automatisation Siemens.',
    url: 'https://www.vetrux.tech/fr/equipment',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/images/equipment/chromatography-column-700L.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Installation d'Extraction Industrielle',
    description: 'Installation industrielle d'extraction et de purification de CBD a Chuxiong, Yunnan. 20x6m3 cuves, 26x700L colonnes de chromatographie, automatisation Siemens.',
  },
};

export default function FrEquipmentPage() {
  return <FrEquipmentPageClient />;
}
