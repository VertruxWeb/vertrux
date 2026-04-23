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
  name: 'Vetrux CBD',
  url: 'https://www.vetrux.tech',
  logo: 'https://www.vetrux.tech/favicon.svg',
  description:
    'Vetrux Biotechnology (Chuxiong) Co., Ltd. — CBD raw material supplier, OEM/ODM services, and botanical extract manufacturer in Yunnan, China. Specializing in CBD isolate (≥99.5% purity, THC-free) produced via ethanol extraction and chromatographic purification. Also supplying anthocyanins, steviol glycosides, and hemp seed globulin.',
  foundingDate: '2020',
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
    availableLanguage: ['English', 'Chinese'],
  },
  areaServed: [
    { '@type': 'Continent', name: 'Europe' },
    { '@type': 'Place', name: 'Global' },
  ],
  sameAs: [
    'https://www.vetrux.tech/about',
  ],
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'CBD Isolate (≥99.5% Purity)',
  description:
    'Pharmaceutical-grade CBD isolate powder, ≥99.5% purity, THC-free (non-detect), white crystalline powder. Produced via ethanol extraction and chromatographic purification. Available in 5 kg PE bags, 5 kg aluminum foil bags, and export cartons. CAS 13956-29-1, HS 2907299020.',
  brand: { '@type': 'Brand', name: 'Vetrux CBD' },
  manufacturer: {
    '@type': 'Organization',
    name: 'Vetrux CBD',
    url: 'https://www.vetrux.tech',
  },
  category: 'CBD Isolate',
  material: 'Cannabidiol (CBD)',
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Purity', value: '≥99.5%' },
    { '@type': 'PropertyValue', name: 'THC Content', value: 'Non-detect (ND)' },
    { '@type': 'PropertyValue', name: 'CAS Number', value: '13956-29-1' },
    { '@type': 'PropertyValue', name: 'Molecular Formula', value: 'C₂₁H₃₀O₂' },
    { '@type': 'PropertyValue', name: 'Molecular Weight', value: '314.46 g/mol' },
    { '@type': 'PropertyValue', name: 'Appearance', value: 'White crystalline powder' },
    { '@type': 'PropertyValue', name: 'Extraction Method', value: 'Ethanol Extraction + Chromatographic Purification' },
    { '@type': 'PropertyValue', name: 'Shelf Life', value: '24 months' },
    { '@type': 'PropertyValue', name: 'Packaging', value: '5 kg PE bags / 5 kg Aluminum Foil bags / Export Cartons' },
    { '@type': 'PropertyValue', name: 'HS Code', value: '2907299020' },
    { '@type': 'PropertyValue', name: 'Certifications', value: 'ISO 9001:2015, GMP, HACCP' },
  ],
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    eligibleRegion: { '@type': 'Continent', name: 'Europe' },
    seller: { '@type': 'Organization', name: 'Vetrux CBD' },
    url: 'https://www.vetrux.tech/inquiry',
    priceValidUntil: '2026-12-31',
  },
  datePublished: '2025-01-01',
  dateModified: new Date().toISOString().split('T')[0],
};

const staticPageSeo: Record<string, SeoMetadata> = {
  '/': {
    title: 'Wholesale CBD Isolate Supplier | Bulk CBD Isolate Manufacturer — Vetrux CBD',
    description:
      'Vetrux CBD is a vertically integrated CBD isolate manufacturer in Yunnan, China. OEM/ODM services, botanical extracts, and bulk pharmaceutical-grade CBD isolate (≥99.5% purity, THC-free) via ethanol extraction and chromatographic purification. Ton-scale capacity.',
    canonicalPath: '/',
    image: defaultImage,
    type: 'website',
    keywords:
      'CBD isolate supplier, bulk CBD isolate, wholesale CBD isolate, CBD isolate manufacturer, pharmaceutical grade CBD, THC-free CBD isolate, CBD isolate Europe, ethanol extraction, OEM ODM CBD, botanical extracts, GMP CBD manufacturer',
    jsonLd: [organizationJsonLd, productJsonLd, {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is CBD isolate and how is it different from full-spectrum CBD?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CBD isolate is the purest form of cannabidiol — a white crystalline powder containing ≥99.5% CBD with all other cannabinoids, terpenes, and plant compounds removed. Unlike full-spectrum CBD which retains THC and other cannabinoids, CBD isolate is THC non-detect (ND), making it ideal for pharmaceutical and nutraceutical formulations requiring precise dosing and regulatory compliance.',
          },
        },
        {
          '@type': 'Question',
          name: 'What certifications does Vetrux CBD hold?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vetrux operates under ISO 9001:2015, GMP, and HACCP certifications. Every batch ships with a full Certificate of Analysis (COA), Safety Data Sheet (SDS), and test reports. Export compliance documentation is provided to support destination country requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the minimum order quantity for wholesale CBD isolate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vetrux offers CBD isolate starting from 1 kg for sample and trial orders. Volume pricing begins at 5 kg, with significant discounts at 100 kg+ and ton-scale annual contracts. Standard packaging: 5 kg PE bags (27×60 cm), 5 kg aluminum foil bags (35×50 cm), and export cartons (465×285×295 mm).',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Vetrux ensure THC-free compliance for European buyers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every batch of Vetrux CBD isolate undergoes testing to confirm THC non-detect (ND) status. Our ethanol extraction and multi-stage chromatographic purification process ensures high purity. Full documentation including COA, Certificate of Origin, and SDS is provided with each shipment to support compliance with destination country regulations.',
          },
        },
        {
          '@type': 'Question',
          name: 'What shipping terms are available for European buyers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vetrux offers FOB Kunming, CIF Rotterdam, and DDP delivery to European destinations. Standard lead time is 10–14 business days from order confirmation. All shipments include batch-specific COA, Certificate of Origin, and Safety Data Sheet.',
          },
        },
      ],
    }],
  },
  '/products/cbd-isolate': {
    title: 'CBD Isolate ≥99.5% Purity — Pharmaceutical Grade | Wholesale Pricing — Vetrux CBD',
    description:
      'Pharmaceutical-grade CBD isolate with ≥99.5% purity, THC-free (non-detect). Full COA available, HPLC tested, ISO 9001 & GMP certified. Bulk packaging 1–25 kg. Request wholesale pricing for European delivery.',
    canonicalPath: '/products/cbd-isolate',
    image: '/images/products/cbd-crystal-closeup.jpg',
    type: 'website',
    keywords:
      'CBD isolate 99.5% purity, pharmaceutical grade CBD isolate, THC-free CBD isolate, CBD isolate COA, CBD isolate specification, bulk CBD isolate, CBD isolate wholesale price, CBD isolate Europe',
    jsonLd: [
      productJsonLd,
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the purity of Vetrux CBD isolate?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vetrux CBD isolate has a minimum purity of 99.5%, verified by third-party HPLC testing. Each batch comes with a full Certificate of Analysis (COA).',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Vetrux CBD isolate THC-free?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Vetrux CBD isolate is THC non-detect (ND), confirmed by GC-MS testing at accredited laboratories. It complies with EU Novel Food THC limits.',
            },
          },
          {
            '@type': 'Question',
            name: 'What certifications does Vetrux CBD isolate have?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vetrux CBD isolate is produced in an ISO 9001:2015, GMP, and HACCP certified facility. Each batch comes with a COA, SDS, and test reports.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the minimum order quantity for bulk CBD isolate?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vetrux supplies CBD isolate in 5 kg PE bags and 5 kg aluminum foil bags, packed in export cartons. For ton-scale orders, contact our wholesale team for custom logistics and DDP/CIF/FOB pricing.',
            },
          },
        ],
      },
    ],
  },
  '/equipment': {
    title: 'Industrial Extraction & Purification Facility | CBD Manufacturing Equipment — Vetrux CBD',
    description:
      'Tour Vetrux CBD\'s industrial extraction facility featuring 20 × 6m³ extraction tanks, 26 × 700L chromatography columns, 10 concentrators (2000L/h), and Siemens automation. Ethanol extraction and chromatographic purification for pharmaceutical-grade CBD isolate.',
    canonicalPath: '/equipment',
    image: '/images/equipment/chromatography-column-700L.webp',
    type: 'website',
    keywords:
      'CBD extraction equipment, industrial extraction facility, chromatography CBD purification, ethanol extraction CBD, CBD manufacturing equipment, 700L chromatography columns',
    jsonLd: [
      organizationJsonLd,
      {
        '@context': 'https://schema.org',
        '@type': 'Place',
        name: 'Vetrux CBD Extraction Facility',
        description:
          'Industrial extraction and purification facility for pharmaceutical-grade CBD isolate manufacturing. Equipped with 20 × 6m³ extraction tanks, 26 × 700L chromatography columns, 10 concentrators (2000L/h), and Siemens automation.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Office in Seedling Base, Tapu Second Group',
          addressLocality: 'Chuxiong',
          addressRegion: 'Yunnan Province',
          postalCode: '675000',
          addressCountry: 'CN',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What extraction method does Vetrux use for CBD isolate?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vetrux uses ethanol extraction followed by chromatographic purification. The facility is equipped with 20 × 6m³ extraction tanks and 26 × 700L chromatography columns, enabling efficient large-scale CBD isolation with high purity output.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the capacity of the Vetrux extraction facility?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The facility features 20 × 6m³ extraction tanks, 26 × 700L chromatography columns, 10 concentrators with 2000L/h capacity, 2 solvent recovery towers, and 10 × 5m³ ethanol storage tanks. The entire process is managed by Siemens automation. Annual production capacity is at ton-scale.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is the Vetrux facility compliant with international GMP standards?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The facility operates under ISO 9001:2015, GMP, and HACCP certifications. Facility audit documentation is available upon request for qualified B2B buyers.',
            },
          },
        ],
      },
    ],
  },
  '/planting': {
    title: 'Vertically Integrated Hemp Cultivation | Seed-to-Isolate Traceability — Vetrux CBD',
    description:
      'Vetrux operates a hemp cultivation and breeding center in Chuxiong, Yunnan Province, China. Vertically integrated seed-to-isolate traceability with dedicated nursery and planting operations.',
    canonicalPath: '/planting',
    image: '/images/planting/flowering-cola-closeup.jpg',
    type: 'website',
    keywords:
      'hemp cultivation Yunnan, CBD hemp farming, vertical integration CBD, seed to isolate traceability, controlled environment agriculture hemp, organic hemp cultivation China',
    jsonLd: [
      organizationJsonLd,
      {
        '@context': 'https://schema.org',
        '@type': 'Place',
        name: 'Vetrux CBD Hemp Cultivation Base',
        description:
          'Hemp cultivation and breeding center in Chuxiong, Yunnan Province. Vertically integrated with seed-to-isolate traceability and dedicated nursery operations.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Chuxiong',
          addressRegion: 'Yunnan Province',
          postalCode: '675000',
          addressCountry: 'CN',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Where does Vetrux grow its hemp?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vetrux operates its own hemp cultivation base in Yunnan Province, Southwest China — one of the world\'s premier regions for industrial hemp due to its altitude, climate, and biodiversity. Yunnan was the first Chinese province to legalize industrial hemp cultivation.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Vetrux use pesticides in hemp cultivation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vetrux minimizes pesticide use in its cultivation program. Every batch of CBD isolate is tested for pesticide residues to confirm compliance. Test reports are provided with each shipment.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does seed-to-isolate traceability mean?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seed-to-isolate traceability means Vetrux controls and documents every stage of production — from cultivar selection and planting, through biomass harvesting, extraction, purification, and final batch release. This vertical integration ensures consistent quality and full supply chain transparency.',
            },
          },
        ],
      },
    ],
  },
  '/gallery': {
    title: 'CBD Manufacturing Facility Gallery | Production & Laboratory — Vetrux CBD',
    description:
      'Visual tour of Vetrux CBD\'s manufacturing campus in Chuxiong, Yunnan — extraction facility, chromatography columns, planting base, and quality control operations.',
    canonicalPath: '/gallery',
    image: '/images/hero/facility-hero.webp',
    type: 'website',
    keywords: 'CBD manufacturing facility, CBD extraction facility photos, CBD laboratory, hemp cultivation base',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: 'Vetrux CBD Manufacturing Facility Gallery',
      description:
        'Visual tour of Vetrux CBD\'s manufacturing campus in Chuxiong, Yunnan — extraction facility, chromatography columns, planting base, and quality control operations.',
      publisher: {
        '@type': 'Organization',
        name: 'Vetrux CBD',
        url: 'https://www.vetrux.tech',
      },
    },
  },
  '/inquiry': {
    title: 'Request Wholesale CBD Isolate Quote | B2B Inquiry — Vetrux CBD',
    description:
      'Contact Vetrux CBD for bulk CBD isolate wholesale pricing, OEM/ODM services, botanical extracts, COA documentation, and custom logistics (DDP/CIF/FOB). Ton-scale supply available.',
    canonicalPath: '/inquiry',
    image: defaultImage,
    type: 'website',
    keywords:
      'wholesale CBD isolate inquiry, bulk CBD isolate quote, CBD isolate wholesale pricing, CBD isolate Europe delivery, B2B CBD supplier contact',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Wholesale CBD Isolate Inquiry',
      description:
        'Contact Vetrux CBD for bulk CBD isolate wholesale pricing, OEM/ODM services, botanical extracts, COA documentation, and custom logistics.',
      publisher: organizationJsonLd,
    },
  },
  '/blog': {
    title: 'CBD Industry Insights | Extraction Technology & Compliance — Vetrux CBD Blog',
    description:
      'Expert articles on CBD extraction technology, global compliance standards, supply chain optimization, and market analysis for B2B CBD isolate buyers and formulators.',
    canonicalPath: '/blog',
    image: defaultImage,
    type: 'website',
    keywords:
      'CBD extraction technology, CBD compliance standards, CBD industry analysis, CBD supply chain, CBD isolate sourcing guide',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Vetrux CBD Blog — CBD Industry Insights',
      description:
        'Expert articles on CBD extraction technology, global compliance standards, supply chain optimization, and market analysis for B2B CBD isolate buyers.',
      publisher: organizationJsonLd,
      url: 'https://www.vetrux.tech/blog',
    },
  },
  '/wholesale-cbd-isolate': {
    title: 'Wholesale CBD Isolate | Bulk Pricing & Volume Discounts — Vetrux CBD',
    description:
      'Buy wholesale CBD isolate at volume-tiered pricing. Pharmaceutical-grade ≥99.5% purity, THC-free. FOB, CIF, and DDP shipping to Europe. 1 kg to ton-scale supply from a cGMP-certified manufacturer.',
    canonicalPath: '/wholesale-cbd-isolate',
    image: '/images/products/cbd-packaging-foil.jpg',
    type: 'website',
    keywords:
      'wholesale CBD isolate, bulk CBD isolate pricing, CBD isolate wholesale price, buy CBD isolate bulk, CBD isolate volume discount, CBD isolate DDP Europe',
    jsonLd: [
      productJsonLd,
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the minimum order quantity for wholesale CBD isolate?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vetrux offers CBD isolate starting from 1 kg for sample/trial orders. Volume discounts begin at 5 kg, with significant pricing advantages at 100 kg+ and ton-scale annual contracts.',
            },
          },
          {
            '@type': 'Question',
            name: 'What shipping terms are available for wholesale CBD isolate?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vetrux offers FOB Kunming, CIF Rotterdam, and DDP delivery to European destinations. Standard lead time is 10–14 business days from order confirmation.',
            },
          },
          {
            '@type': 'Question',
            name: 'What documentation is included with wholesale CBD isolate orders?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Every shipment includes a batch-specific Certificate of Analysis (COA), Certificate of Origin, and Safety Data Sheet (SDS). GMP certificates and facility audit documentation available on request.',
            },
          },
        ],
      },
    ],
  },
  '/quality-assurance': {
    title: 'CBD Isolate Quality Assurance | cGMP Testing & Certifications — Vetrux CBD',
    description:
      'Vetrux quality assurance program for CBD isolate: ISO 9001, GMP, HACCP certifications. Analytical testing with HPLC (Thermo UltiMate 3000), GC-MS, and ICP-MS on every batch. Full COA, SDS, and test reports provided.',
    canonicalPath: '/quality-assurance',
    image: '/images/equipment/chromatography-column-700L.webp',
    type: 'website',
    keywords:
      'CBD isolate quality assurance, CBD COA testing, GMP CBD manufacturer, ISO 9001 CBD, HACCP CBD, pharmaceutical grade CBD testing, CBD heavy metals testing, CBD residual solvents',
    jsonLd: [
      organizationJsonLd,
      productJsonLd,
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What quality testing does Vetrux perform on each batch?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Every batch undergoes analytical testing: HPLC (Thermo Dionex UltiMate 3000) for CBD potency, GC-MS for THC verification (non-detect), ICP-MS for heavy metals, pesticide residue screening, and residual solvent analysis. Full test reports are provided with each batch.',
            },
          },
          {
            '@type': 'Question',
            name: 'What certifications does the Vetrux manufacturing facility hold?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vetrux holds ISO 9001:2015, GMP, and HACCP certifications. Facility audit documentation is available upon request for qualified B2B buyers.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I verify the Certificate of Analysis (COA) for my order?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Each shipment includes a batch-specific COA with cannabinoid profile (HPLC), THC content (GC-MS), heavy metals, pesticide residues, microbial limits, and residual solvents. COA samples are available upon inquiry.',
            },
          },
        ],
      },
    ],
  },
  '/cbd-isolate-manufacturer': {
    title: 'CBD Isolate Manufacturer | Seed-to-Isolate Vertical Integration — Vetrux CBD',
    description:
      'Vetrux CBD is a vertically integrated CBD isolate manufacturer with in-house hemp cultivation, ethanol extraction (20 × 6m³ tanks), chromatographic purification (26 × 700L columns), and pharmaceutical-grade QC. Supplying ≥99.5% purity, THC-free CBD isolate to B2B buyers globally.',
    canonicalPath: '/cbd-isolate-manufacturer',
    image: '/images/hero/facility-hero.webp',
    type: 'website',
    keywords:
      'CBD isolate manufacturer, CBD manufacturer China, CBD isolate factory, vertical integration CBD, ethanol extraction CBD manufacturer, pharmaceutical grade CBD manufacturer, bulk CBD isolate producer',
    jsonLd: [
      organizationJsonLd,
      productJsonLd,
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why choose a vertically integrated CBD isolate manufacturer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vertical integration means the manufacturer controls every stage from hemp cultivation to final isolate production. This ensures consistent quality, full traceability, lower contamination risk, and more competitive pricing by eliminating intermediaries. Vetrux controls seed selection, cultivation, extraction, purification, and QC in-house.',
            },
          },
          {
            '@type': 'Question',
            name: 'What makes Yunnan Province ideal for CBD manufacturing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yunnan Province was the first region in China to legalize industrial hemp cultivation. Its high altitude, subtropical climate, and rich biodiversity create optimal growing conditions for high-CBD hemp cultivars. Yunnan\'s established regulatory framework and agricultural infrastructure support large-scale, compliant hemp production.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can Vetrux provide facility audit access for B2B buyers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Vetrux welcomes facility audits from qualified B2B buyers and their third-party auditors. GMP certificates, ISO 9001 documentation, and facility audit reports are available upon request through our inquiry process.',
            },
          },
        ],
      },
    ],
  },
  '/about': {
    title: 'About Vetrux CBD | Vertically Integrated CBD Isolate Manufacturer',
    description:
      'Learn about Vetrux CBD — a vertically integrated CBD isolate manufacturer in Yunnan, China. OEM/ODM services, botanical extracts, ISO 9001, GMP, HACCP certified. Supplying pharmaceutical-grade CBD isolate (≥99.5% purity) to B2B buyers globally.',
    canonicalPath: '/about',
    image: '/images/hero/facility-hero.webp',
    type: 'website',
    keywords:
      'about Vetrux CBD, CBD isolate manufacturer China, vertically integrated CBD, Yunnan hemp manufacturer',
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
      'Terms of Service for the Vetrux CBD website. Read our terms governing the use of our B2B wholesale CBD isolate platform.',
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
            description: 'Vertically integrated CBD isolate manufacturer in Yunnan, China. ISO 9001, GMP, HACCP certified. Specializing in pharmaceutical-grade CBD isolate (≥99.5% purity) for B2B buyers.',
            sameAs: ['https://www.vetrux.tech/about'],
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
      title: 'Vetrux CBD — Wholesale CBD Isolate Manufacturer',
      description:
        'Vetrux CBD is a vertically integrated CBD isolate manufacturer supplying bulk pharmaceutical-grade CBD isolate to B2B buyers worldwide.',
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
