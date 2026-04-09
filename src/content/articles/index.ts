// src/content/articles/index.ts
// Central registry of all insight articles with metadata

export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  size?: 'normal' | 'large';
}

export const articles: Article[] = [
  {
    slug: 'botanical-biotechnology-innovation-whitepaper',
    category: 'Special Report',
    title: 'Innovation in Botanical Biotechnology',
    excerpt:
      'A comprehensive whitepaper examining the convergence of precision agriculture, supercritical extraction, and pharmaceutical-grade QA systems in modern CBD manufacturing.',
    date: '2024',
    readTime: '12 Min Read',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80&auto=format&fit=crop',
    size: 'large',
  },
  {
    slug: 'global-cbd-extraction-standards-2024',
    category: 'Regulatory',
    title: 'Global CBD Extraction Standards: A 2024 Compliance Guide',
    excerpt:
      'An analysis of diverging regulatory frameworks across the EU, US, and APAC markets and what they mean for wholesale CBD suppliers.',
    date: 'Dec 2024',
    readTime: '8 Min Read',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&q=80&auto=format&fit=crop',
    size: 'normal',
  },
  {
    slug: 'esg-decarbonizing-cannabis-supply-chain',
    category: 'Sustainability',
    title: 'ESG Initiatives: Decarbonizing the Cannabis Extract Supply Chain',
    excerpt:
      'How Yunnan Vertrux achieved carbon neutrality through biomass recycling, solar integration, and closed-loop CO₂ recapture systems.',
    date: 'Nov 2024',
    readTime: '12 Min Read',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80&auto=format&fit=crop',
    size: 'normal',
  },
  {
    slug: 'co2-vs-ethanol-extraction-comparison',
    category: 'Technology',
    title: 'Supercritical CO₂ vs. Ethanol Extraction: A Technical Comparison',
    excerpt:
      'Purity profiles, scalability, solvent residues, and terpene preservation — a rigorous head-to-head comparison for industrial buyers.',
    date: 'Oct 2024',
    readTime: '10 Min Read',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80&auto=format&fit=crop',
    size: 'normal',
  },
  {
    slug: 'apac-cbd-market-outlook-2025',
    category: 'Market',
    title: 'APAC CBD Market Outlook 2025: Opportunities for B2B Importers',
    excerpt:
      'Data-driven analysis of growth corridors in Japan, South Korea, Australia, and Southeast Asian markets entering 2025.',
    date: 'Sep 2024',
    readTime: '6 Min Read',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80&auto=format&fit=crop',
    size: 'normal',
  },
];

// Map of slug → raw markdown content (loaded via Vite's ?raw import)
// These are imported statically so no async fetch is needed at runtime.
import regulatoryMd from './global-cbd-extraction-standards-2024.md?raw';
import esgMd from './esg-decarbonizing-cannabis-supply-chain.md?raw';
import techMd from './co2-vs-ethanol-extraction-comparison.md?raw';
import marketMd from './apac-cbd-market-outlook-2025.md?raw';
import whitepaperMd from './botanical-biotechnology-innovation-whitepaper.md?raw';

export const articleContent: Record<string, string> = {
  'global-cbd-extraction-standards-2024': regulatoryMd,
  'esg-decarbonizing-cannabis-supply-chain': esgMd,
  'co2-vs-ethanol-extraction-comparison': techMd,
  'apac-cbd-market-outlook-2025': marketMd,
  'botanical-biotechnology-innovation-whitepaper': whitepaperMd,
};
