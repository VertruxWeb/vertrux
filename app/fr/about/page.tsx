import type { Metadata } from 'next';
import FrAboutPageClient from '@/components/pages/FrAboutPageClient';

export const metadata: Metadata = {
  title: 'À propos — Vetrux CBD | Fabricant d\'isolat de CBD à Chuxiong, Yunnan',
  description: 'VETRUX est la marque internationale de Vetrux Biotechnology (Chuxiong) Co., Ltd. — fabricant d\'isolat de CBD verticalement intégré et fournisseur d\'extraits botaniques au Yunnan, Chine.',
};

export default function FrAboutPage() {
  return <FrAboutPageClient />;
}
