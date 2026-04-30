import type { Metadata } from 'next';
import FrEquipmentPageClient from '@/components/pages/FrEquipmentPageClient';

export const metadata: Metadata = {
  title: 'Configuration des equipements | Installation de traitement | Vetrux CBD',
  description: 'Configuration des equipements Vetrux CBD: 20 cuves, 26 colonnes de chromatographie, 10 concentrateurs, systeme HPLC et automatisation Siemens. Chuxiong, Yunnan.',
  keywords: 'equipement extraction CBD, colonnes chromatographie, cuves extraction, systeme HPLC, automatisation Siemens',
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
    title: 'Configuration des equipements | Vetrux CBD',
    description: 'Installation de traitement equipee de cuves, colonnes de chromatographie, concentrateurs et systemes analytiques.',
    url: 'https://www.vetrux.tech/fr/equipment',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Configuration des equipements | Vetrux CBD',
    description: 'Installation de traitement equipee de cuves, colonnes de chromatographie, concentrateurs et systemes analytiques.',
  },
};

export default function FrEquipmentPage() {
  return <FrEquipmentPageClient />;
}
