import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import EquipmentPageClient from '@/components/pages/EquipmentPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/equipment', 'pt');
}

export default function Page() {
  return <EquipmentPageClient locale="pt" />;
}
