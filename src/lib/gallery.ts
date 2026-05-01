// src/lib/gallery.ts
// Single source of truth for the Gallery sector pages (3 locales × 4 sectors).

export type Locale = 'en' | 'de' | 'fr'

export type GalleryImage = { src: string; alt: string }

export interface GallerySectorContent {
  /** Eyebrow text shown above the sector title (e.g. "Sector 01 — Architectural Excellence"). */
  label: string
  /** Big heading. */
  title: string
  /** One-paragraph intro shown in the hero. */
  description: string
  /** Short blurb (≤120 chars) shown on the index card. */
  cardBlurb: string
  /** Stat block label. */
  statLabel: string
  /** Stat block value. */
  statValue: string
  /** Stat block sub-line. */
  statSub: string
  /** CTA on the index card. */
  cta: string
}

export interface GallerySector {
  /** URL slug, identical across locales. */
  slug: 'campus' | 'cultivation' | 'extraction' | 'products'
  /** Sector code shown in eyebrow ("01", "02", …). */
  code: string
  /** Cover image used on the index card. */
  cover: GalleryImage
  /** Image grid for the sector subpage. */
  images: GalleryImage[]
  /** Localized copy. */
  content: Record<Locale, GallerySectorContent>
}

const sectors: GallerySector[] = [
  // ─── Sector 01 ─── Main Campus & Infrastructure ───────────────────────────
  {
    slug: 'campus',
    code: '01',
    cover: { src: '/images/gallery/campus-aerial.png', alt: 'Aerial view of VETRUX industrial campus with surrounding mountains' },
    images: [
      { src: '/images/gallery/campus-aerial.png', alt: 'Aerial view of VETRUX industrial campus with surrounding mountains' },
      { src: '/images/gallery/campus-buildings.webp', alt: 'Campus buildings with landscaped grounds' },
      { src: '/images/gallery/processing-workshop.webp', alt: 'Modern processing workshop exterior' },
    ],
    content: {
      en: {
        label: 'Sector 01 — Architectural Excellence',
        title: 'Main Campus & Infrastructure',
        description:
          'Our production site in Yunnan houses extraction, processing, and quality-control equipment — supporting CBD raw material operations.',
        cardBlurb: 'Industrial campus in Chuxiong, Yunnan — production, processing, and QC under one roof.',
        statLabel: 'Location',
        statValue: 'Chuxiong, Yunnan',
        statSub: 'Production Site',
        cta: 'Enter Sector',
      },
      de: {
        label: 'Sektor 01 — Architektonische Exzellenz',
        title: 'Hauptcampus & Infrastruktur',
        description:
          'Unser Produktionsstandort in Yunnan beherbergt Extraktions-, Verarbeitungs- und Qualitätskontrollanlagen — speziell für integrierte CBD-Rohstoffproduktion.',
        cardBlurb: 'Industriecampus in Chuxiong, Yunnan — Produktion, Verarbeitung und QK unter einem Dach.',
        statLabel: 'Anlagenstandort',
        statValue: 'Chuxiong, Yunnan',
        statSub: 'Produktionsstandort',
        cta: 'Bereich Betreten',
      },
      fr: {
        label: 'Secteur 01 — Excellence architecturale',
        title: 'Campus principal & Infrastructure',
        description:
          "Notre site de production au Yunnan abrite les équipements d'extraction, de traitement et de contrôle qualité — soutenant les opérations liées aux matières premières CBD.",
        cardBlurb: "Campus industriel à Chuxiong, Yunnan — production, traitement et contrôle qualité sous un même toit.",
        statLabel: 'Localisation',
        statValue: 'Chuxiong, Yunnan',
        statSub: 'Site de production',
        cta: 'Entrer dans le Secteur',
      },
    },
  },

  // ─── Sector 02 ─── Planting Base & Cultivation ───────────────────────────
  {
    slug: 'cultivation',
    code: '02',
    cover: { src: '/images/gallery/cultivation-field.jpg', alt: 'Hemp field under hoop-house frame structures' },
    images: [
      { src: '/images/gallery/cultivation-field.jpg', alt: 'Hemp field under hoop-house frame structures' },
      { src: '/images/gallery/cultivation-base-wide.jpg', alt: 'Wide view of cultivation base with mountain backdrop' },
      { src: '/images/gallery/cultivation-base-rows.jpg', alt: 'Rows of tall hemp plants in greenhouse frames' },
      { src: '/images/planting/flowering-greenhouse.jpg', alt: 'Flowering hemp in controlled greenhouse environment' },
      { src: '/images/planting/flowering-cola-closeup.jpg', alt: 'Close-up of flowering hemp cola' },
    ],
    content: {
      en: {
        label: 'Sector 02 — Raw Material Purity',
        title: 'Planting Base & Cultivation',
        description:
          'Cultivation and breeding center in Yunnan province — from seed selection through growing management — supporting standardized and traceable raw material production.',
        cardBlurb: 'Yunnan cultivation base — standardized growing and full seed-to-harvest traceability.',
        statLabel: 'Cultivation',
        statValue: 'Chuxiong Base',
        statSub: 'Yunnan Province',
        cta: 'Enter Sector',
      },
      de: {
        label: 'Sektor 02 — Rohstoffreinheit',
        title: 'Anbaubasis & Kultivierung',
        description:
          'Anbau- und Zuchtzentrum in der Provinz Yunnan — von der Sortenauswahl bis zum Anbaumanagement — für standardisierte, rückverfolgbare Rohstoffproduktion.',
        cardBlurb: 'Anbaubasis in Yunnan — standardisierter Anbau und vollständige Saatgut-bis-Ernte-Rückverfolgbarkeit.',
        statLabel: 'Anbau',
        statValue: 'Basis Chuxiong',
        statSub: 'Provinz Yunnan',
        cta: 'Bereich Betreten',
      },
      fr: {
        label: 'Secteur 02 — Pureté des matières premières',
        title: 'Base de culture & Cultivation',
        description:
          'Centre de culture et de sélection dans la province du Yunnan — de la sélection des semences à la gestion de la culture — soutenant une production de matières premières standardisée et traçable.',
        cardBlurb: 'Base de culture du Yunnan — culture standardisée et traçabilité complète semence-à-récolte.',
        statLabel: 'Culture',
        statValue: 'Base de Chuxiong',
        statSub: 'Province du Yunnan',
        cta: 'Entrer dans le Secteur',
      },
    },
  },

  // ─── Sector 03 ─── Extraction & Refinement ───────────────────────────────
  {
    slug: 'extraction',
    code: '03',
    cover: { src: '/images/equipment/extraction-tanks.jpg', alt: 'Stainless steel extraction tank array' },
    images: [
      { src: '/images/equipment/extraction-tanks.jpg', alt: 'Stainless steel extraction tank array' },
      { src: '/images/equipment/chromatography-upper.jpg', alt: 'Chromatography column upper section' },
      { src: '/images/equipment/concentrator-system.jpg', alt: 'Industrial concentrator system' },
      { src: '/images/equipment/hplc-system.jpg', alt: 'HPLC analytical system for quality control' },
      { src: '/images/equipment/automation-control.jpg', alt: 'Automated process control panel' },
      { src: '/images/equipment/solvent-recovery-tower.jpg', alt: 'Solvent recovery tower' },
    ],
    content: {
      en: {
        label: 'Sector 03 — Technical Precision',
        title: 'Extraction & Refinement',
        description:
          'Professional extraction facility equipped with extraction tanks, chromatography columns, concentrators, and analytical systems for CBD processing.',
        cardBlurb: '20 extraction tanks, 26 chromatography columns, in-house HPLC — full process under one roof.',
        statLabel: 'Extraction Tanks',
        statValue: '20 Units',
        statSub: '26 Chromatography Columns',
        cta: 'Enter Sector',
      },
      de: {
        label: 'Sektor 03 — Technische Präzision',
        title: 'Extraktion & Raffination',
        description:
          'Professionelle Extraktionsanlage ausgestattet mit Extraktionstanks, Chromatographiesäulen, Konzentratoren und Analysesystemen für die CBD-Verarbeitung.',
        cardBlurb: '20 Extraktionstanks, 26 Chromatographiesäulen, hauseigene HPLC — vollständiger Prozess unter einem Dach.',
        statLabel: 'Extraktionstanks',
        statValue: '20 Einheiten',
        statSub: '26 Chromatographiesäulen',
        cta: 'Bereich Betreten',
      },
      fr: {
        label: 'Secteur 03 — Précision technique',
        title: 'Extraction & Raffinage',
        description:
          "Installation d'extraction professionnelle équipée de cuves d'extraction, colonnes de chromatographie, concentrateurs et systèmes analytiques pour le traitement du CBD.",
        cardBlurb: "20 cuves d'extraction, 26 colonnes de chromatographie, HPLC interne — chaîne complète sous un même toit.",
        statLabel: "Cuves d'extraction",
        statValue: '20 Unités',
        statSub: '26 Colonnes de chromatographie',
        cta: 'Entrer dans le Secteur',
      },
    },
  },

  // ─── Sector 04 ─── Product & Laboratory ──────────────────────────────────
  {
    slug: 'products',
    code: '04',
    cover: { src: '/images/products/cbd-crystal-closeup.jpg', alt: 'Close-up of high-purity CBD crystalline isolate' },
    images: [
      { src: '/images/products/cbd-crystal-closeup.jpg', alt: 'Close-up of high-purity CBD crystalline isolate' },
      { src: '/images/products/cbd-crystal-lab.jpg', alt: 'CBD isolate in laboratory setting' },
      { src: '/images/products/cbd-packaging-foil.jpg', alt: 'CBD isolate in sealed foil packaging' },
      { src: '/images/products/cbd-shipping-box.jpg', alt: 'Product shipping box ready for export' },
    ],
    content: {
      en: {
        label: 'Sector 04 — Product & Quality',
        title: 'Product & Laboratory',
        description:
          'In-house HPLC analytical capability supports quality management. Product documentation may be provided according to order requirements.',
        cardBlurb: '≥99.9% purity CBD isolate — verified, packaged, and export-ready.',
        statLabel: 'Product',
        statValue: 'CBD Isolate',
        statSub: 'Purity: ≥99.9%',
        cta: 'Enter Sector',
      },
      de: {
        label: 'Sektor 04 — Produkt & Qualität',
        title: 'Produkt & Labor',
        description:
          'Hauseigene HPLC-Analytik unterstützt das Qualitätsmanagement. Produktdokumentation kann je nach Bestellanforderungen bereitgestellt werden.',
        cardBlurb: 'CBD-Isolat ≥99,9 % Reinheit — verifiziert, verpackt und exportbereit.',
        statLabel: 'Produkt',
        statValue: 'CBD-Isolat',
        statSub: 'Reinheit: ≥99,9 %',
        cta: 'Bereich Betreten',
      },
      fr: {
        label: 'Secteur 04 — Produit & Qualité',
        title: 'Produit & Laboratoire',
        description:
          "Capacité analytique HPLC en interne pour la gestion qualité. La documentation produit peut être fournie selon les exigences de commande.",
        cardBlurb: 'Isolat CBD ≥99,9 % de pureté — vérifié, conditionné et prêt à l’export.',
        statLabel: 'Produit',
        statValue: 'Isolat de CBD',
        statSub: 'Pureté : ≥99,9%',
        cta: 'Entrer dans le Secteur',
      },
    },
  },
]

export const gallerySectors = sectors
export const gallerySlugs = sectors.map((s) => s.slug) as readonly GallerySector['slug'][]

export function getGallerySector(slug: string): GallerySector | undefined {
  return sectors.find((s) => s.slug === slug)
}

export function getAdjacentGallerySectors(slug: string): {
  prev: GallerySector
  next: GallerySector
} | null {
  const idx = sectors.findIndex((s) => s.slug === slug)
  if (idx === -1) return null
  const prev = sectors[(idx - 1 + sectors.length) % sectors.length]
  const next = sectors[(idx + 1) % sectors.length]
  return { prev, next }
}

/** Index-page strings (the /gallery hub itself). */
export const galleryIndexStrings: Record<Locale, {
  eyebrow: string
  titleLine1: string
  titleLine2: string
  intro: string
  imagesCountSuffix: string
}> = {
  en: {
    eyebrow: 'Visual Documentation',
    titleLine1: 'Vertical Integration.',
    titleLine2: 'From Seed to Solution.',
    intro:
      'Visual overview of our Chuxiong, Yunnan operations — from cultivation base through extraction facility to product and packaging.',
    imagesCountSuffix: 'images',
  },
  de: {
    eyebrow: 'Visuelle Dokumentation',
    titleLine1: 'Vertikale Integration.',
    titleLine2: 'Vom Saatgut zur Lösung.',
    intro:
      'Visuelle Übersicht unserer Anlagen in Chuxiong, Yunnan — von der Anbaubasis über die Extraktionsanlage bis zu Produkt und Verpackung.',
    imagesCountSuffix: 'Bilder',
  },
  fr: {
    eyebrow: 'Documentation visuelle',
    titleLine1: 'Intégration verticale.',
    titleLine2: 'De la graine à la solution.',
    intro:
      'Aperçu visuel de nos installations à Chuxiong, Yunnan — de la base de culture à l’installation d’extraction, en passant par le produit et le conditionnement.',
    imagesCountSuffix: 'images',
  },
}

/** Strings for the prev/next nav at the bottom of each sector page. */
export const sectorNavStrings: Record<Locale, {
  previous: string
  next: string
  backToOverview: string
}> = {
  en: { previous: 'Previous', next: 'Next', backToOverview: 'All Sectors' },
  de: { previous: 'Vorherig', next: 'Nächster', backToOverview: 'Alle Bereiche' },
  fr: { previous: 'Précédent', next: 'Suivant', backToOverview: 'Tous les secteurs' },
}
