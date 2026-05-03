// src/lib/gallery.ts
// Single source of truth for the Gallery sector pages (3 locales × 4 sectors).

import type { Locale } from '@/i18n/locales'
export type { Locale }

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
      es: {
        label: 'Sector 01 — Excelencia Arquitectónica',
        title: 'Campus Principal e Infraestructura',
        description:
          'Nuestro sitio de producción en Yunnan alberga equipos de extracción, procesamiento y control de calidad — respaldando las operaciones de materias primas CBD.',
        cardBlurb: 'Campus industrial en Chuxiong, Yunnan — producción, procesamiento y control de calidad bajo un mismo techo.',
        statLabel: 'Ubicación',
        statValue: 'Chuxiong, Yunnan',
        statSub: 'Sitio de Producción',
        cta: 'Entrar al Sector',
      },
      it: {
        label: 'Settore 01 — Eccellenza Architettonica',
        title: 'Campus Principale e Infrastruttura',
        description:
          'Il nostro sito di produzione nello Yunnan ospita attrezzature di estrazione, lavorazione e controllo qualità — a supporto delle operazioni sulle materie prime CBD.',
        cardBlurb: 'Campus industriale a Chuxiong, Yunnan — produzione, lavorazione e controllo qualità sotto un unico tetto.',
        statLabel: 'Ubicazione',
        statValue: 'Chuxiong, Yunnan',
        statSub: 'Sito di Produzione',
        cta: 'Entra nel Settore',
      },
      pt: {
        label: 'Setor 01 — Excelência Arquitetônica',
        title: 'Campus Principal e Infraestrutura',
        description:
          'Nosso local de produção em Yunnan abriga equipamentos de extração, processamento e controle de qualidade — apoiando as operações de matérias-primas CBD.',
        cardBlurb: 'Campus industrial em Chuxiong, Yunnan — produção, processamento e controle de qualidade sob o mesmo teto.',
        statLabel: 'Localização',
        statValue: 'Chuxiong, Yunnan',
        statSub: 'Local de Produção',
        cta: 'Entrar no Setor',
      },
      ja: {
        label: 'セクター 01 — 建築の卓越性',
        title: 'メインキャンパス・インフラ',
        description:
          'Yunnanの生産拠点には、抽出、加工、品質管理設備を備え、CBD原料の一貫した生産体制を支えています。',
        cardBlurb: 'Chuxiong, Yunnanの産業キャンパス — 生産、加工、品質管理を一拠点に集約。',
        statLabel: '所在地',
        statValue: 'Chuxiong, Yunnan',
        statSub: '生産拠点',
        cta: 'セクターを見る',
      },
      fi: {
        label: 'Sektori 01 — Arkkitehtoninen erinomaisuus',
        title: 'Pääkampus ja infrastruktuuri',
        description:
          'Tuotantolaitoksemme Yunnanissa sisältää uutto-, käsittely- ja laadunvalvontalaitteet — tukien CBD-raaka-aineiden tuotantoa.',
        cardBlurb: 'Teollisuuskampus Chuxiongissa, Yunnanissa — tuotanto, käsittely ja laadunvalvonta saman katon alla.',
        statLabel: 'Sijainti',
        statValue: 'Chuxiong, Yunnan',
        statSub: 'Tuotantolaitos',
        cta: 'Siirry sektoriin',
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
      es: {
        label: 'Sector 02 — Pureza de Materia Prima',
        title: 'Base de Plantación y Cultivo',
        description:
          'Centro de cultivo y mejora en la provincia de Yunnan — desde la selección de semillas hasta la gestión del cultivo — respaldando una producción de materias primas estandarizada y trazable.',
        cardBlurb: 'Base de cultivo en Yunnan — cultivo estandarizado y trazabilidad completa de semilla a cosecha.',
        statLabel: 'Cultivo',
        statValue: 'Base Chuxiong',
        statSub: 'Provincia de Yunnan',
        cta: 'Entrar al Sector',
      },
      it: {
        label: 'Settore 02 — Purezza delle Materie Prime',
        title: 'Base di Coltivazione',
        description:
          'Centro di coltivazione e selezione nella provincia dello Yunnan — dalla selezione dei semi alla gestione della coltivazione — a supporto di una produzione di materie prime standardizzata e tracciabile.',
        cardBlurb: 'Base di coltivazione nello Yunnan — coltivazione standardizzata e tracciabilità completa dal seme al raccolto.',
        statLabel: 'Coltivazione',
        statValue: 'Base Chuxiong',
        statSub: 'Provincia dello Yunnan',
        cta: 'Entra nel Settore',
      },
      pt: {
        label: 'Setor 02 — Pureza da Matéria-Prima',
        title: 'Base de Plantio e Cultivo',
        description:
          'Centro de cultivo e melhoramento na província de Yunnan — da seleção de sementes à gestão do cultivo — apoiando uma produção de matérias-primas padronizada e rastreável.',
        cardBlurb: 'Base de cultivo em Yunnan — cultivo padronizado e rastreabilidade completa da semente à colheita.',
        statLabel: 'Cultivo',
        statValue: 'Base Chuxiong',
        statSub: 'Província de Yunnan',
        cta: 'Entrar no Setor',
      },
      ja: {
        label: 'セクター 02 — 原料の純度',
        title: '栽培基地',
        description:
          'Yunnan省の栽培・育種センター — 種子選定から栽培管理まで — 標準化されたトレーサブルな原料生産を支えています。',
        cardBlurb: 'Yunnan栽培基地 — 標準化された栽培と種子から収穫までの完全なトレーサビリティ。',
        statLabel: '栽培',
        statValue: 'Chuxiong基地',
        statSub: 'Yunnan省',
        cta: 'セクターを見る',
      },
      fi: {
        label: 'Sektori 02 — Raaka-aineen puhtaus',
        title: 'Viljelyalue ja kasvatus',
        description:
          'Viljely- ja jalostuskeskus Yunnanin maakunnassa — siementen valinnasta kasvatuksen hallintaan — tukien standardoitua ja jäljitettävää raaka-ainetuotantoa.',
        cardBlurb: 'Yunnanin viljelyalue — standardoitu kasvatus ja täydellinen jäljitettävyys siemenestä satoon.',
        statLabel: 'Viljely',
        statValue: 'Chuxiongin alue',
        statSub: 'Yunnanin maakunta',
        cta: 'Siirry sektoriin',
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
      es: {
        label: 'Sector 03 — Precisión Técnica',
        title: 'Extracción y Refinamiento',
        description:
          'Instalación de extracción profesional equipada con tanques de extracción, columnas de cromatografía, concentradores y sistemas analíticos para el procesamiento de CBD.',
        cardBlurb: '20 tanques de extracción, 26 columnas de cromatografía, HPLC interno — proceso completo bajo un mismo techo.',
        statLabel: 'Tanques de Extracción',
        statValue: '20 Unidades',
        statSub: '26 Columnas de Cromatografía',
        cta: 'Entrar al Sector',
      },
      it: {
        label: 'Settore 03 — Precisione Tecnica',
        title: 'Estrazione e Raffinazione',
        description:
          'Impianto di estrazione professionale dotato di serbatoi di estrazione, colonne cromatografiche, concentratori e sistemi analitici per la lavorazione del CBD.',
        cardBlurb: '20 serbatoi di estrazione, 26 colonne cromatografiche, HPLC interno — processo completo sotto un unico tetto.',
        statLabel: 'Serbatoi di Estrazione',
        statValue: '20 Unità',
        statSub: '26 Colonne Cromatografiche',
        cta: 'Entra nel Settore',
      },
      pt: {
        label: 'Setor 03 — Precisão Técnica',
        title: 'Extração e Refinamento',
        description:
          'Instalação de extração profissional equipada com tanques de extração, colunas de cromatografia, concentradores e sistemas analíticos para o processamento de CBD.',
        cardBlurb: '20 tanques de extração, 26 colunas de cromatografia, HPLC interno — processo completo sob o mesmo teto.',
        statLabel: 'Tanques de Extração',
        statValue: '20 Unidades',
        statSub: '26 Colunas de Cromatografia',
        cta: 'Entrar no Setor',
      },
      ja: {
        label: 'セクター 03 — 技術的精密さ',
        title: '抽出・精製',
        description:
          '抽出タンク、クロマトグラフィーカラム、濃縮器、分析システムを備えた専門的なCBD加工施設です。',
        cardBlurb: '抽出タンク20基、クロマトグラフィーカラム26本、自社HPLC — 全工程を一拠点で完結。',
        statLabel: '抽出タンク',
        statValue: '20基',
        statSub: 'クロマトグラフィーカラム26本',
        cta: 'セクターを見る',
      },
      fi: {
        label: 'Sektori 03 — Tekninen tarkkuus',
        title: 'Uutto ja jalostus',
        description:
          'Ammattimainen uuttolaitos, joka on varustettu uuttosäiliöillä, kromatografiakolumneilla, konsentraattoreilla ja analyysijärjestelmillä CBD:n käsittelyyn.',
        cardBlurb: '20 uuttosäiliötä, 26 kromatografiakolumnia, oma HPLC — koko prosessi saman katon alla.',
        statLabel: 'Uuttosäiliöt',
        statValue: '20 yksikköä',
        statSub: '26 kromatografiakolumnia',
        cta: 'Siirry sektoriin',
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
        label: "Secteur 04 — Produit & Qualit\u00e9",
        title: "Produit & Laboratoire",
        description:
          "Capacit\u00e9 analytique HPLC en interne pour la gestion qualit\u00e9. La documentation produit peut \u00eatre fournie selon les exigences de commande.",
        cardBlurb: "Isolat CBD \u226599,9 % de puret\u00e9 — v\u00e9rifi\u00e9, conditionn\u00e9 et pr\u00eat \u00e0 l'export.",
        statLabel: 'Produit',
        statValue: 'Isolat de CBD',
        statSub: "Puret\u00e9 : \u226599,9%",
        cta: 'Entrer dans le Secteur',
      },
      es: {
        label: 'Sector 04 — Producto y Calidad',
        title: 'Producto y Laboratorio',
        description:
          'La capacidad analítica HPLC interna respalda la gestión de calidad. La documentación del producto puede proporcionarse según los requisitos del pedido.',
        cardBlurb: 'CBD isolate con pureza ≥99,9% — verificado, empaquetado y listo para exportación.',
        statLabel: 'Producto',
        statValue: 'CBD Isolate',
        statSub: 'Pureza: ≥99,9%',
        cta: 'Entrar al Sector',
      },
      it: {
        label: 'Settore 04 — Prodotto e Qualità',
        title: 'Prodotto e Laboratorio',
        description:
          "La capacità analitica HPLC interna supporta la gestione della qualità. La documentazione del prodotto può essere fornita in base ai requisiti dell'ordine.",
        cardBlurb: "CBD isolate con purezza ≥99,9% — verificato, confezionato e pronto per l'esportazione.",
        statLabel: 'Prodotto',
        statValue: 'CBD Isolate',
        statSub: 'Purezza: ≥99,9%',
        cta: 'Entra nel Settore',
      },
      pt: {
        label: 'Setor 04 — Produto e Qualidade',
        title: 'Produto e Laboratório',
        description:
          'A capacidade analítica HPLC interna apoia a gestão de qualidade. A documentação do produto pode ser fornecida conforme os requisitos do pedido.',
        cardBlurb: 'CBD isolate com pureza ≥99,9% — verificado, embalado e pronto para exportação.',
        statLabel: 'Produto',
        statValue: 'CBD Isolate',
        statSub: 'Pureza: ≥99,9%',
        cta: 'Entrar no Setor',
      },
      ja: {
        label: 'セクター 04 — 製品・品質',
        title: '製品・ラボラトリー',
        description:
          '自社HPLC分析能力が品質管理を支えています。製品ドキュメントは注文要件に応じてご提供可能です。',
        cardBlurb: '純度≥99.9%のCBDアイソレート — 検証済み、包装済み、輸出対応。',
        statLabel: '製品',
        statValue: 'CBD Isolate',
        statSub: '純度: ≥99.9%',
        cta: 'セクターを見る',
      },
      fi: {
        label: 'Sektori 04 — Tuote ja laatu',
        title: 'Tuote ja laboratorio',
        description:
          'Sisäinen HPLC-analytiikkakapasiteetti tukee laadunhallintaa. Tuotedokumentaatio voidaan toimittaa tilausvaatimusten mukaisesti.',
        cardBlurb: 'CBD-isolaatti, puhtaus ≥99,9 % — varmennettu, pakattu ja vientivalmis.',
        statLabel: 'Tuote',
        statValue: 'CBD Isolate',
        statSub: 'Puhtaus: ≥99,9 %',
        cta: 'Siirry sektoriin',
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
      "Aper\u00e7u visuel de nos installations \u00e0 Chuxiong, Yunnan — de la base de culture \u00e0 l'installation d'extraction, en passant par le produit et le conditionnement.",
    imagesCountSuffix: 'images',
  },
  es: {
    eyebrow: 'Documentación Visual',
    titleLine1: 'Integración Vertical.',
    titleLine2: 'De la Semilla a la Solución.',
    intro:
      'Vista visual de nuestras operaciones en Chuxiong, Yunnan — desde la base de cultivo hasta la instalación de extracción, producto y embalaje.',
    imagesCountSuffix: 'imágenes',
  },
  it: {
    eyebrow: 'Documentazione Visiva',
    titleLine1: 'Integrazione Verticale.',
    titleLine2: 'Dal Seme alla Soluzione.',
    intro:
      "Panoramica visiva delle nostre operazioni a Chuxiong, Yunnan — dalla base di coltivazione all'impianto di estrazione, prodotto e confezionamento.",
    imagesCountSuffix: 'immagini',
  },
  pt: {
    eyebrow: 'Documentação Visual',
    titleLine1: 'Integração Vertical.',
    titleLine2: 'Da Semente à Solução.',
    intro:
      'Visão geral visual das nossas operações em Chuxiong, Yunnan — da base de cultivo à instalação de extração, produto e embalagem.',
    imagesCountSuffix: 'imagens',
  },
  ja: {
    eyebrow: 'ビジュアルドキュメンテーション',
    titleLine1: '垂直統合。',
    titleLine2: '種子からソリューションへ。',
    intro:
      'Chuxiong, Yunnanにおける当社の事業概要 — 栽培基地から抽出施設、製品、包装までをご覧いただけます。',
    imagesCountSuffix: '枚',
  },
  fi: {
    eyebrow: 'Visuaalinen dokumentaatio',
    titleLine1: 'Vertikaalinen integraatio.',
    titleLine2: 'Siemenestä ratkaisuun.',
    intro:
      'Visuaalinen katsaus toimintoihimme Chuxiongissa, Yunnanissa — viljelyalueelta uuttolaitoksen kautta tuotteeseen ja pakkaukseen.',
    imagesCountSuffix: 'kuvaa',
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
  es: { previous: 'Anterior', next: 'Siguiente', backToOverview: 'Todos los Sectores' },
  it: { previous: 'Precedente', next: 'Successivo', backToOverview: 'Tutti i Settori' },
  pt: { previous: 'Anterior', next: 'Próximo', backToOverview: 'Todos os Setores' },
  ja: { previous: '前へ', next: '次へ', backToOverview: '全セクター一覧' },
  fi: { previous: 'Edellinen', next: 'Seuraava', backToOverview: 'Kaikki sektorit' },
}
