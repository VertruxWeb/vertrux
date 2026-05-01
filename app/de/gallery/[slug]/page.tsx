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
  campus: 'Hauptcampus & Infrastruktur | Galerie — Vetrux CBD',
  cultivation: 'Anbaubasis & Kultivierung | Galerie — Vetrux CBD',
  extraction: 'Extraktion & Raffination | Galerie — Vetrux CBD',
  products: 'Produkt & Labor | Galerie — Vetrux CBD',
};
const descriptions: Record<string, string> = {
  campus:
    'VETRUX-Industriecampus in Chuxiong, Yunnan — Produktion, Verarbeitung und Qualitätskontrolle unter einem Dach.',
  cultivation:
    'VETRUX-Anbaubasis in Yunnan — standardisierter Hanfanbau, Zuchtzentrum und vollständige Saatgut-bis-Ernte-Rückverfolgbarkeit.',
  extraction:
    'VETRUX-Extraktionsanlage — 20 Extraktionstanks, 26 Chromatographiesäulen, 10 Konzentratoren und HPLC-Analytik.',
  products:
    'VETRUX CBD-Isolat ≥99,9 % Reinheit — Laborverifizierung, Verpackung und exportbereite Präsentation.',
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
      canonical: `${baseUrl}/de/gallery/${slug}`,
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
      url: `${baseUrl}/de/gallery/${slug}`,
      locale: 'de_DE',
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

export default async function DeGallerySectorPage({ params }: PageProps) {
  const { slug } = await params;
  const sector = getGallerySector(slug);
  if (!sector) notFound();

  return <GallerySectorPageClient locale="de" slug={slug} />;
}
