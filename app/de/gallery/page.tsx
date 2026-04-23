import type { Metadata } from 'next';
import DeGalleryPageClient from '@/components/pages/DeGalleryPageClient';

export const metadata: Metadata = {
  title: 'Galerie — Vetrux CBD | Visuelle Dokumentation unserer Anlagen',
  description: 'Entdecken Sie die vollständig integrierte Lieferkette von Vetrux — vom Höhenanbau in Yunnan über industrielle Extraktion bis zum pharmazeutischen CBD-Isolat.',
};

export default function DeGalleryPage() {
  return <DeGalleryPageClient />;
}
