import type { Metadata } from 'next';
import DeEquipmentPageClient from '@/components/pages/DeEquipmentPageClient';

export const metadata: Metadata = {
  title: 'Industrielle Extraktionsanlage | cGMP-Produktion | Vetrux CBD',
  description: 'CBD-Extraktions- und Reinigungsanlage in Chuxiong, Yunnan. 20x6m3 Extraktionstanks, 26x700L Chromatographiesaulen, Siemens-Automatisierung.',
  keywords: 'CBD Extraktionsanlage, industrielle Extraktionsanlage, Chromatographie CBD Reinigung, Ethanol Extraktion CBD',
  alternates: {
    canonical: 'https://www.vetrux.tech/de/equipment',
    languages: {
      en: 'https://www.vetrux.tech/equipment',
      de: 'https://www.vetrux.tech/de/equipment',
      fr: 'https://www.vetrux.tech/fr/equipment',
      'x-default': 'https://www.vetrux.tech/equipment',
    },
  },
  openGraph: {
    title: 'Industrielle Extraktionsanlage',
    description: 'CBD-Extraktions- und Reinigungsanlage in Chuxiong, Yunnan. 20x6m3 Extraktionstanks, 26x700L Chromatographiesaulen, Siemens-Automatisierung.',
    url: 'https://www.vetrux.tech/de/equipment',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/equipment/chromatography-column-700L.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrielle Extraktionsanlage',
    description: 'CBD-Extraktions- und Reinigungsanlage in Chuxiong, Yunnan. 20x6m3 Extraktionstanks, 26x700L Chromatographiesaulen, Siemens-Automatisierung.',
  },
};

export default function DeEquipmentPage() {
  return <DeEquipmentPageClient />;
}
