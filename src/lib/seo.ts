import type { Metadata } from 'next';
import { articles } from '../content/articles';

export interface SeoMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const defaultImage = '/images/hero/facility-hero.webp';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vetrux Biotechnology (Chuxiong) Co., Ltd.',
  legalName: 'Vetrux Biotechnology (Chuxiong) Co., Ltd.',
  alternateName: ['VETRUX', 'Vetrux CBD', '蔚萃生物科技（楚雄）有限公司'],
  url: 'https://www.vetrux.tech',
  logo: 'https://www.vetrux.tech/favicon.svg',
  description:
    'Vetrux Biotechnology (Chuxiong) Co., Ltd. operates the VETRUX brand — a vertically integrated CBD raw material manufacturer based in Chuxiong, Yunnan, China. Services include CBD raw material sales, OEM/ODM, and technical support.',
  foundingDate: '2026',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Office in Seedling Base, Tapu Second Group',
    addressLocality: 'Chuxiong',
    addressRegion: 'Yunnan Province',
    postalCode: '675000',
    addressCountry: 'CN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'inquiry@vetrux.tech',
    availableLanguage: ['English', 'German', 'French', 'Chinese'],
  },
  sameAs: [
    'https://www.vetrux.tech/about',
  ],
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'CBD Isolate',
  description:
    'CBD isolate with ≥99.9% purity. Available in 5 kg PE bags and 5 kg aluminum foil bags, packed in export cartons. Supporting documentation provided according to order requirements.',
  brand: { '@type': 'Brand', name: 'VETRUX' },
  manufacturer: {
    '@type': 'Organization',
    name: 'Vetrux Biotechnology (Chuxiong) Co., Ltd.',
    url: 'https://www.vetrux.tech',
  },
  category: 'CBD Raw Materials',
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Packaging', value: '5 kg PE bags / 5 kg Aluminum Foil bags / Export Cartons' },
  ],
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'Vetrux Biotechnology (Chuxiong) Co., Ltd.' },
    url: 'https://www.vetrux.tech/inquiry',
  },
};

const staticPageSeo: Record<string, SeoMetadata> = {
  '/': {
    title: 'CBD Raw Materials | Vetrux CBD',
    description:
      'VETRUX — the CBD raw material brand operated by Vetrux Biotechnology (Chuxiong) Co., Ltd., based in Yunnan, China. CBD raw material sales, OEM/ODM services, and technical support.',
    canonicalPath: '/',
    image: defaultImage,
    type: 'website',
    keywords:
      'CBD raw materials, CBD isolate, OEM ODM CBD, CBD supplier, Vetrux CBD, Yunnan',
    jsonLd: [organizationJsonLd, productJsonLd],
  },
  '/products/cbd-isolate': {
    title: 'CBD Isolate | Product Overview — Vetrux CBD',
    description:
      'CBD isolate with ≥99.9% purity. Packaging: 5 kg PE bags, 5 kg aluminum foil bags, export cartons. Supporting documentation available according to order requirements.',
    canonicalPath: '/products/cbd-isolate',
    image: '/images/products/cbd-crystal-closeup.jpg',
    type: 'website',
    keywords:
      'CBD isolate, CBD raw material, bulk CBD, CBD packaging',
    jsonLd: [productJsonLd],
  },
  '/equipment': {
    title: 'Equipment Configuration | Extraction & Processing Facility — Vetrux CBD',
    description:
      'Vetrux CBD equipment configuration: 20 extraction tanks, 26 chromatography columns, 10 concentrators, HPLC analytical system (Thermo UltiMate 3000), and Siemens automation. Chuxiong, Yunnan.',
    canonicalPath: '/equipment',
    image: '/images/equipment/chromatography-column-700L.webp',
    type: 'website',
    keywords:
      'CBD extraction equipment, chromatography columns, extraction tanks, HPLC system, Siemens automation',
    jsonLd: [organizationJsonLd],
  },
  '/planting': {
    title: 'Cultivation & Breeding Center | Standardized Planting System — Vetrux CBD',
    description:
      'Vetrux operates a cultivation and breeding center in Chuxiong, Yunnan Province. Standardized, traceable cultivation system focused on quality consistency.',
    canonicalPath: '/planting',
    image: '/images/planting/flowering-cola-closeup.jpg',
    type: 'website',
    keywords:
      'hemp cultivation Yunnan, CBD hemp farming, standardized cultivation, seed selection, traceable planting system',
    jsonLd: [organizationJsonLd],
  },
  '/gallery': {
    title: 'Facility Gallery | Production Site & Cultivation Base — Vetrux CBD',
    description:
      'Visual overview of Vetrux CBD production site and cultivation base in Chuxiong, Yunnan — equipment, planting, and product visuals.',
    canonicalPath: '/gallery',
    image: '/images/hero/facility-hero.webp',
    type: 'website',
    keywords: 'CBD facility gallery, extraction equipment photos, hemp cultivation base',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: 'Vetrux CBD Facility Gallery',
      description:
        'Visual overview of Vetrux CBD production site and cultivation base in Chuxiong, Yunnan.',
      publisher: {
        '@type': 'Organization',
        name: 'Vetrux CBD',
        url: 'https://www.vetrux.tech',
      },
    },
  },
  '/gallery/campus': {
    title: 'Main Campus & Infrastructure | Gallery — Vetrux CBD',
    description:
      'VETRUX industrial campus in Chuxiong, Yunnan — production, processing, and quality-control infrastructure under one roof.',
    canonicalPath: '/gallery/campus',
    image: '/images/gallery/campus-aerial.png',
    type: 'website',
    keywords: 'CBD facility campus, Vetrux Yunnan production site, CBD manufacturing infrastructure',
  },
  '/gallery/cultivation': {
    title: 'Planting Base & Cultivation | Gallery — Vetrux CBD',
    description:
      'VETRUX cultivation base in Yunnan province — standardized hemp growing, breeding center, and full seed-to-harvest traceability.',
    canonicalPath: '/gallery/cultivation',
    image: '/images/gallery/cultivation-field.jpg',
    type: 'website',
    keywords: 'hemp cultivation base, Yunnan hemp farm, CBD raw material cultivation, traceable hemp growing',
  },
  '/gallery/extraction': {
    title: 'Extraction & Refinement | Gallery — Vetrux CBD',
    description:
      'VETRUX extraction facility — 20 extraction tanks, 26 chromatography columns, 10 concentrators, and HPLC analytical systems.',
    canonicalPath: '/gallery/extraction',
    image: '/images/equipment/extraction-tanks.jpg',
    type: 'website',
    keywords: 'CBD extraction facility, chromatography columns, extraction tanks, HPLC system, CBD refinement',
  },
  '/gallery/products': {
    title: 'Product & Laboratory | Gallery — Vetrux CBD',
    description:
      'VETRUX CBD isolate at ≥99.9% purity — laboratory verification, packaging, and export-ready presentation.',
    canonicalPath: '/gallery/products',
    image: '/images/products/cbd-crystal-closeup.jpg',
    type: 'website',
    keywords: 'CBD isolate product, CBD packaging, CBD laboratory, ≥99.9% purity CBD isolate',
  },
  '/process': {
    title: 'From Seed to Isolate | Our Process — Vetrux CBD',
    description:
      'Six controlled phases from Yunma-13 cultivation to ≥99.9% pharmaceutical-grade CBD isolate. Traceable, verified, export-ready — manufactured by VETRUX in Chuxiong, Yunnan.',
    canonicalPath: '/process',
    image: '/images/process/growth-day-120-mature.jpg',
    type: 'website',
    keywords:
      'CBD manufacturing process, seed to isolate, CBD extraction process, hemp cultivation Yunnan, CBD isolate production',
    jsonLd: [organizationJsonLd],
  },
  '/inquiry': {
    title: 'B2B Inquiry | CBD Raw Materials & OEM/ODM — Vetrux CBD',
    description:
      'Contact Vetrux CBD for CBD raw material supply, OEM/ODM cooperation, and technical support inquiries.',
    canonicalPath: '/inquiry',
    image: defaultImage,
    type: 'website',
    keywords:
      'CBD inquiry, CBD raw material supply, OEM ODM CBD, B2B CBD contact',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'B2B Inquiry — Vetrux CBD',
      description:
        'Contact Vetrux CBD for CBD raw material supply, OEM/ODM cooperation, and technical support inquiries.',
      publisher: organizationJsonLd,
    },
  },
  '/blog': {
    title: 'Blog & Insights | CBD Industry Knowledge — Vetrux CBD',
    description:
      'Articles on CBD industry topics, extraction technology, compliance considerations, and supply chain knowledge.',
    canonicalPath: '/blog',
    image: defaultImage,
    type: 'website',
    keywords:
      'CBD industry insights, CBD extraction technology, CBD compliance, CBD supply chain',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Vetrux CBD Blog',
      description:
        'Articles on CBD industry topics, extraction technology, compliance considerations, and supply chain knowledge.',
      publisher: organizationJsonLd,
      url: 'https://www.vetrux.tech/blog',
    },
  },
  '/wholesale-cbd-isolate': {
    title: 'CBD Raw Material Supply | B2B Cooperation — Vetrux CBD',
    description:
      'Vetrux CBD supplies CBD raw materials for B2B cooperation. OEM/ODM services, technical support, and flexible supply arrangements.',
    canonicalPath: '/wholesale-cbd-isolate',
    image: '/images/products/cbd-packaging-foil.jpg',
    type: 'website',
    keywords:
      'wholesale CBD, bulk CBD supply, CBD raw material, B2B CBD cooperation, CBD OEM ODM',
    jsonLd: [productJsonLd],
  },
  '/quality-assurance': {
    title: 'Quality Management & Documentation Support — Vetrux CBD',
    description:
      'Vetrux quality management approach: in-house HPLC testing capability, documentation support including COA, SDS, and test reports available according to order requirements.',
    canonicalPath: '/quality-assurance',
    image: '/images/equipment/chromatography-column-700L.webp',
    type: 'website',
    keywords:
      'CBD quality management, CBD documentation, COA, SDS, HPLC testing, quality control',
    jsonLd: [organizationJsonLd],
  },
  '/cbd-isolate-manufacturer': {
    title: 'Company Profile | CBD Raw Materials — Vetrux CBD',
    description:
      'Vetrux Biotechnology (Chuxiong) Co., Ltd. — CBD raw material sales, OEM/ODM services, and technical support from Chuxiong, Yunnan.',
    canonicalPath: '/cbd-isolate-manufacturer',
    image: '/images/hero/facility-hero.webp',
    type: 'website',
    keywords:
      'CBD manufacturer China, CBD raw material supplier, Yunnan CBD, OEM ODM CBD',
    jsonLd: [organizationJsonLd, productJsonLd],
  },
  '/about': {
    title: 'About Vetrux CBD | Company Profile',
    description:
      'VETRUX — the CBD raw material brand operated by Vetrux Biotechnology (Chuxiong) Co., Ltd. CBD raw material sales, OEM/ODM, and technical support. Based in Chuxiong, Yunnan, China.',
    canonicalPath: '/about',
    image: '/images/hero/facility-hero.webp',
    type: 'website',
    keywords:
      'about Vetrux CBD, Vetrux Biotechnology, Chuxiong Yunnan, CBD brand',
    jsonLd: organizationJsonLd,
  },
  '/privacy-policy': {
    title: 'Privacy Policy — Vetrux CBD',
    description:
      'Privacy Policy for Vetrux CBD website. Learn how we collect, use, and protect your personal data when you visit our site or submit a B2B inquiry.',
    canonicalPath: '/privacy-policy',
    image: '/images/hero/facility-hero.webp',
    type: 'website',
  },
  '/terms-of-service': {
    title: 'Terms of Service — Vetrux CBD',
    description:
      'Terms of Service for the Vetrux CBD website.',
    canonicalPath: '/terms-of-service',
    image: '/images/hero/facility-hero.webp',
    type: 'website',
  },
};

function normalizeBaseUrl(origin: string): string {
  return origin.endsWith('/') ? origin.slice(0, -1) : origin;
}

export function getBaseUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    return normalizeBaseUrl(configured);
  }

  return 'https://www.vetrux.tech';
}

export function getSeoMetadata(pathname: string): SeoMetadata {
  if (pathname.startsWith('/blog/') && pathname !== '/blog') {
    const slug = pathname.replace('/blog/', '');
    const article = articles.find((entry) => entry.slug === slug);
    if (article) {
      return {
        title: `${article.title} | Vetrux CBD Blog`,
        description: article.excerpt,
        canonicalPath: `/blog/${article.slug}`,
        image: article.image || defaultImage,
        type: 'article',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.excerpt,
          image: article.image || defaultImage,
          datePublished: article.date,
          dateModified: article.date,
          author: {
            '@type': 'Organization',
            name: 'Vetrux CBD',
            url: 'https://www.vetrux.tech',
            description: 'Editorial team at VETRUX — technical and regulatory analysis from Vetrux Biotechnology (Chuxiong) Co., Ltd., a vertically integrated CBD raw material manufacturer.',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Vetrux CBD',
            url: 'https://www.vetrux.tech',
            logo: 'https://www.vetrux.tech/favicon.svg',
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://www.vetrux.tech/blog/${article.slug}`,
          },
        },
      };
    }
  }

  return (
    staticPageSeo[pathname] ?? {
      title: 'Vetrux CBD — CBD Raw Materials',
      description:
        'VETRUX — the CBD raw material brand operated by Vetrux Biotechnology (Chuxiong) Co., Ltd., based in Yunnan, China.',
      canonicalPath: pathname || '/',
      image: defaultImage,
      type: 'website',
    }
  );
}

export function buildMetadata(pathname: string): Metadata {
  const seo = getSeoMetadata(pathname);
  const baseUrl = getBaseUrl();
  const imageUrl = seo.image ? `${baseUrl}${seo.image}` : undefined;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: `${baseUrl}${seo.canonicalPath}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${baseUrl}${seo.canonicalPath}`,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
      type: seo.type === 'article' ? 'article' : 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}
