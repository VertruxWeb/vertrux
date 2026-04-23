import type { Metadata } from 'next';
import FrGalleryPageClient from '@/components/pages/FrGalleryPageClient';

export const metadata: Metadata = {
  title: 'Galerie — Vetrux CBD | Documentation visuelle de nos installations',
  description: 'Explorez la chaîne d\'approvisionnement entièrement intégrée de Vetrux — des bases de culture en haute altitude du Yunnan à l\'isolat de CBD de qualité pharmaceutique.',
};

export default function FrGalleryPage() {
  return <FrGalleryPageClient />;
}
