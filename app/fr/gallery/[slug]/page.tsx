import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { gallerySlugs, getGallerySector } from '@/lib/gallery';
import { getBaseUrl } from '@/lib/seo';
import GallerySectorPageClient from '@/components/pages/GallerySectorPageClient';

export function generateStaticParams() {
  return gallerySlugs.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const titles: Record<string, string> = {
  campus: 'Campus principal & Infrastructure | Galerie — Vetrux CBD',
  cultivation: 'Base de culture & Cultivation | Galerie — Vetrux CBD',
  extraction: 'Extraction & Raffinage | Galerie — Vetrux CBD',
  products: 'Produit & Laboratoire | Galerie — Vetrux CBD',
};
const descriptions: Record<string, string> = {
  campus:
    "Campus industriel VETRUX à Chuxiong, Yunnan — production, traitement et contrôle qualité sous un même toit.",
  cultivation:
    "Base de culture VETRUX au Yunnan — culture standardisée du chanvre, centre de sélection et traçabilité complète semence-à-récolte.",
  extraction:
    "Installation d'extraction VETRUX — 20 cuves d'extraction, 26 colonnes de chromatographie, 10 concentrateurs et systèmes analytiques HPLC.",
  products:
    "Isolat CBD VETRUX à ≥99,9 % de pureté — vérification en laboratoire, conditionnement et présentation prête à l'export.",
};
const images: Record<string, string> = {
  campus: '/images/gallery/campus-aerial.png',
  cultivation: '/images/gallery/cultivation-field.jpg',
  extraction: '/images/equipment/extraction-tanks.jpg',
  products: '/images/products/cbd-crystal-closeup.jpg',
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const baseUrl = getBaseUrl();
  const title = titles[slug] ?? 'Galerie — Vetrux CBD';
  const description = descriptions[slug] ?? '';
  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/fr/gallery/${slug}`,
      languages: {
        en: `${baseUrl}/gallery/${slug}`,
        de: `${baseUrl}/de/gallery/${slug}`,
        fr: `${baseUrl}/fr/gallery/${slug}`,
        'x-default': `${baseUrl}/gallery/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/fr/gallery/${slug}`,
      locale: 'fr_FR',
      type: 'website',
      images: [{ url: images[slug] ?? '/images/hero/facility-hero.webp' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [images[slug] ?? '/images/hero/facility-hero.webp'],
    },
  };
}

export default async function FrGallerySectorPage({ params }: PageProps) {
  const { slug } = await params;
  const sector = getGallerySector(slug);
  if (!sector) notFound();

  return <GallerySectorPageClient locale="fr" slug={slug} />;
}
