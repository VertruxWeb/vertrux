// src/lib/process.ts
// Data layer for the /process ("From Seed to Isolate") page.
// Six phases × three locales (en / de / fr).
// Only Phase 03 carries the Growth Timelapse Strip.

export type Locale = 'en' | 'de' | 'fr'

export interface ProcessSubStep {
  label: string
  /** path relative to /images/process/ */
  image?: string
}

export interface ProcessPhaseContent {
  /** e.g. "Phase 01 · Seed & Nursery" */
  eyebrow: string
  title: string
  description: string
  /** CTA text, e.g. "Full cultivation details →" */
  deepDiveLabel: string
  /** link to deep-dive page (without language prefix — prefix is applied in the client) */
  deepDiveHref: string
}

export interface TimelapseStep {
  /** "Day 1", "Day 10", etc. — kept identical across locales */
  day: string
  /** Localized short caption */
  label: string
  /** Absolute public path */
  image: string
}

export interface ProcessPhase {
  /** Two-digit phase id: '01' … '06' */
  id: string
  /** URL-safe slug */
  slug: string
  /** Absolute /images/... paths rendered in the right-hand grid */
  images: string[]
  content: Record<Locale, ProcessPhaseContent>
  /** Only Phase 03 has this — the Growth Timelapse Strip */
  timelapse?: Record<Locale, TimelapseStep[]>
  /** Badge chips like "99% germination" */
  badges?: Record<Locale, string[]>
}

// ─────────────────────────────────────────────────────────────────────────────
//  Phases
// ─────────────────────────────────────────────────────────────────────────────

export const processPhases: ProcessPhase[] = [
  // ── Phase 01 — Seed & Nursery ──────────────────────────────────────────────
  {
    id: '01',
    slug: 'nursery',
    images: [
      '/images/process/seed-selection-yunma13.jpg',
      '/images/process/seed-coating.jpg',
      '/images/process/plug-tray-nursery.jpg',
      '/images/process/plug-tray-nursery-2.jpg',
      '/images/process/cutting-mother-plant.jpg',
      '/images/process/cutting-pruning.jpg',
      '/images/process/cutting-insertion.jpg',
      '/images/process/cutting-root-system.jpg',
      '/images/process/cutting-substrate-comparison.jpg',
    ],
    content: {
      en: {
        eyebrow: 'Phase 01 · Seed & Nursery',
        title: 'Cultivar Selection & Propagation',
        description:
          'We use Yunma-13, a government-approved cultivar with THC < 0.3%. Two propagation methods: seed-based (99% germination in proprietary substrate) and cutting-based (100% female plants from selected mother stock). Our proprietary substrate outperforms market alternatives in root development.',
        deepDiveLabel: 'Full cultivation details',
        deepDiveHref: '/planting',
      },
      de: {
        eyebrow: 'Phase 01 · Saatgut & Anzucht',
        title: 'Sortenauswahl & Vermehrung',
        description:
          'Wir arbeiten mit Yunma-13, einer staatlich zugelassenen Sorte mit THC < 0,3%. Zwei Vermehrungsmethoden: samenbasiert (99% Keimrate in unserem eigenen Substrat) und stecklingsbasiert (100% weibliche Pflanzen aus ausgewählten Mutterpflanzen). Unser proprietäres Substrat übertrifft handelsübliche Alternativen in der Wurzelentwicklung.',
        deepDiveLabel: 'Alle Anbaudetails',
        deepDiveHref: '/planting',
      },
      fr: {
        eyebrow: 'Phase 01 · Semence & Pépinière',
        title: 'Sélection de cultivar & propagation',
        description:
          'Nous utilisons Yunma-13, un cultivar agréé par les autorités avec un taux de THC < 0,3%. Deux méthodes de propagation : par semis (99% de germination dans notre substrat exclusif) et par bouturage (100% de plantes femelles issues de pieds-mères sélectionnés). Notre substrat propriétaire surpasse les alternatives du marché en matière de développement racinaire.',
        deepDiveLabel: 'Tous les détails de culture',
        deepDiveHref: '/planting',
      },
    },
    badges: {
      en: ['Yunma-13 Approved Cultivar', '99% Germination Rate', '100% Female via Cutting'],
      de: ['Yunma-13 Zugelassene Sorte', '99% Keimrate', '100% Weiblich durch Stecklinge'],
      fr: ['Cultivar Yunma-13 Approuvé', 'Taux de germination 99%', '100% Femelle par bouturage'],
    },
  },

  // ── Phase 02 — Land Preparation ────────────────────────────────────────────
  {
    id: '02',
    slug: 'land-prep',
    images: [
      '/images/process/land-tillage.jpg',
      '/images/process/irrigation-system.jpg',
    ],
    content: {
      en: {
        eyebrow: 'Phase 02 · Field Preparation',
        title: 'Land & Irrigation Setup',
        description:
          'Precision tillage with controlled row spacing. Drip irrigation systems ensure uniform water delivery across varied terrain — critical for consistent cannabinoid profiles.',
        deepDiveLabel: 'View cultivation base',
        deepDiveHref: '/planting',
      },
      de: {
        eyebrow: 'Phase 02 · Feldvorbereitung',
        title: 'Boden- und Bewässerungsaufbau',
        description:
          'Präzisionsbodenbearbeitung mit kontrollierten Reihenabständen. Tropfbewässerungssysteme sorgen für eine gleichmäßige Wasserversorgung in wechselndem Gelände — entscheidend für konstante Cannabinoid-Profile.',
        deepDiveLabel: 'Anbaustandort ansehen',
        deepDiveHref: '/planting',
      },
      fr: {
        eyebrow: 'Phase 02 · Préparation du champ',
        title: 'Préparation du sol & irrigation',
        description:
          'Travail du sol de précision avec des espacements de rang maîtrisés. Le système d’irrigation au goutte-à-goutte garantit une distribution d’eau uniforme sur des terrains variés — essentiel pour des profils cannabinoïdes constants.',
        deepDiveLabel: 'Voir le site de culture',
        deepDiveHref: '/planting',
      },
    },
  },

  // ── Phase 03 — Transplant & Growth Cycle ───────────────────────────────────
  {
    id: '03',
    slug: 'growth',
    images: [
      '/images/process/transplant-field.jpg',
      '/images/process/transplant-field-2.jpg',
    ],
    content: {
      en: {
        eyebrow: 'Phase 03 · Growth Cycle',
        title: '120-Day Field Journey',
        description:
          'From transplant to harvest-ready maturity in 120 days. Density-adjusted planting, weekly field monitoring, and precise harvest timing ensure optimal CBD concentration with THC well below the 0.3% threshold.',
        deepDiveLabel: 'Detailed zone breakdown',
        deepDiveHref: '/planting',
      },
      de: {
        eyebrow: 'Phase 03 · Wachstumszyklus',
        title: '120 Tage auf dem Feld',
        description:
          'Von der Pflanzung bis zur Erntereife in 120 Tagen. Dichtegeregelte Pflanzung, wöchentliches Feldmonitoring und präzise Erntezeitpunkte sichern eine optimale CBD-Konzentration bei THC deutlich unterhalb der 0,3%-Grenze.',
        deepDiveLabel: 'Detaillierte Zonenübersicht',
        deepDiveHref: '/planting',
      },
      fr: {
        eyebrow: 'Phase 03 · Cycle de croissance',
        title: 'Parcours de 120 jours au champ',
        description:
          'De la transplantation à la maturité de récolte en 120 jours. Densité de plantation ajustée, surveillance hebdomadaire et moment de récolte précis garantissent une concentration optimale en CBD, avec un THC bien en deçà du seuil de 0,3%.',
        deepDiveLabel: 'Détails par zone',
        deepDiveHref: '/planting',
      },
    },
    timelapse: {
      en: [
        { day: 'Day 1',   label: 'Post-transplant',    image: '/images/process/growth-day-01-post-transplant.jpg' },
        { day: 'Day 10',  label: 'Root establishment', image: '/images/process/growth-day-10.jpg' },
        { day: 'Day 20',  label: 'Vegetative growth',  image: '/images/process/growth-day-20.jpg' },
        { day: 'Day 30',  label: 'Canopy forming',     image: '/images/process/growth-day-30.jpg' },
        { day: 'Day 45',  label: 'Pre-flowering',      image: '/images/process/growth-day-45.jpg' },
        { day: 'Day 65',  label: 'Active flowering',   image: '/images/process/growth-day-65.jpg' },
        { day: 'Day 100', label: 'Peak CBD',           image: '/images/process/growth-day-100.jpg' },
        { day: 'Day 120', label: 'Harvest ready',      image: '/images/process/growth-day-120-mature.jpg' },
      ],
      de: [
        { day: 'Day 1',   label: 'Nach der Pflanzung',    image: '/images/process/growth-day-01-post-transplant.jpg' },
        { day: 'Day 10',  label: 'Wurzelanwachsen',       image: '/images/process/growth-day-10.jpg' },
        { day: 'Day 20',  label: 'Vegetatives Wachstum',  image: '/images/process/growth-day-20.jpg' },
        { day: 'Day 30',  label: 'Bestand schließt sich', image: '/images/process/growth-day-30.jpg' },
        { day: 'Day 45',  label: 'Vorblüte',              image: '/images/process/growth-day-45.jpg' },
        { day: 'Day 65',  label: 'Volle Blüte',           image: '/images/process/growth-day-65.jpg' },
        { day: 'Day 100', label: 'CBD-Höchstwert',        image: '/images/process/growth-day-100.jpg' },
        { day: 'Day 120', label: 'Erntereif',             image: '/images/process/growth-day-120-mature.jpg' },
      ],
      fr: [
        { day: 'Day 1',   label: 'Après transplantation',    image: '/images/process/growth-day-01-post-transplant.jpg' },
        { day: 'Day 10',  label: 'Enracinement',             image: '/images/process/growth-day-10.jpg' },
        { day: 'Day 20',  label: 'Croissance végétative',    image: '/images/process/growth-day-20.jpg' },
        { day: 'Day 30',  label: 'Formation de la canopée',  image: '/images/process/growth-day-30.jpg' },
        { day: 'Day 45',  label: 'Pré-floraison',            image: '/images/process/growth-day-45.jpg' },
        { day: 'Day 65',  label: 'Pleine floraison',         image: '/images/process/growth-day-65.jpg' },
        { day: 'Day 100', label: 'Pic de CBD',               image: '/images/process/growth-day-100.jpg' },
        { day: 'Day 120', label: 'Prête à récolter',         image: '/images/process/growth-day-120-mature.jpg' },
      ],
    },
    badges: {
      en: ['120-Day Cycle', 'THC < 0.3%', 'Weekly Monitoring'],
      de: ['120-Tage-Zyklus', 'THC < 0,3%', 'Wöchentliches Monitoring'],
      fr: ['Cycle de 120 jours', 'THC < 0,3%', 'Suivi hebdomadaire'],
    },
  },

  // ── Phase 04 — Harvest & Drying ────────────────────────────────────────────
  {
    id: '04',
    slug: 'harvest',
    images: [
      '/images/process/harvest-drying.jpg',
      '/images/process/harvest-drying-2.jpg',
      '/images/process/growth-day-120-mature-2.jpg',
    ],
    content: {
      en: {
        eyebrow: 'Phase 04 · Harvest & Drying',
        title: 'Harvest at Peak Potency',
        description:
          'Harvested at optimal maturity and air-dried under controlled conditions to preserve cannabinoid integrity. Flower and leaf material is separated and prepared for extraction.',
        deepDiveLabel: 'View cultivation base',
        deepDiveHref: '/planting',
      },
      de: {
        eyebrow: 'Phase 04 · Ernte & Trocknung',
        title: 'Ernte bei maximalem Wirkstoffgehalt',
        description:
          'Geerntet bei optimaler Reife und unter kontrollierten Bedingungen luftgetrocknet, um die Integrität der Cannabinoide zu bewahren. Blüten- und Blattmaterial wird getrennt und für die Extraktion vorbereitet.',
        deepDiveLabel: 'Anbaustandort ansehen',
        deepDiveHref: '/planting',
      },
      fr: {
        eyebrow: 'Phase 04 · Récolte & Séchage',
        title: 'Récolte au pic de puissance',
        description:
          'Récoltée à maturité optimale et séchée à l’air sous conditions contrôlées afin de préserver l’intégrité des cannabinoïdes. La fleur et le feuillage sont séparés puis préparés pour l’extraction.',
        deepDiveLabel: 'Voir le site de culture',
        deepDiveHref: '/planting',
      },
    },
  },

  // ── Phase 05 — Extraction & Purification ──────────────────────────────────
  {
    id: '05',
    slug: 'extraction',
    images: [
      '/images/process/pretreatment-biomass.jpg',
      '/images/equipment/extraction-tanks.jpg',
      '/images/equipment/concentrator-2000l.jpg',
      '/images/equipment/chromatography-upper.jpg',
    ],
    content: {
      en: {
        eyebrow: 'Phase 05 · Extraction & Purification',
        title: 'From Biomass to ≥99.9% Isolate',
        description:
          'Five sub-stages: (1) Biomass dried and ground to optimal particle size. (2) 60% ethanol reflux extraction — 3 passes × 2 hours × 7× solvent ratio. (3) Vacuum concentration at 50–60°C recovers ethanol. (4) Winterization removes waxes; column chromatography (HPD resin, 26 columns) isolates CBD via gradient elution. (5) Crystallization yields ≥99.9% pure CBD isolate.',
        deepDiveLabel: 'Full equipment specifications',
        deepDiveHref: '/equipment',
      },
      de: {
        eyebrow: 'Phase 05 · Extraktion & Aufreinigung',
        title: 'Von der Biomasse zum ≥99,9%-Isolat',
        description:
          'Fünf Teilschritte: (1) Biomasse wird getrocknet und auf optimale Partikelgröße gemahlen. (2) Rückfluss-Extraktion mit 60% Ethanol — 3 Durchgänge × 2 Stunden × 7-faches Lösungsmittelverhältnis. (3) Vakuumkonzentration bei 50–60°C führt das Ethanol zurück. (4) Winterisierung entfernt Wachse; die Säulenchromatographie (HPD-Harz, 26 Säulen) isoliert CBD mittels Gradientenelution. (5) Kristallisation liefert reines CBD-Isolat mit ≥99,9%.',
        deepDiveLabel: 'Vollständige Anlagenspezifikationen',
        deepDiveHref: '/equipment',
      },
      fr: {
        eyebrow: 'Phase 05 · Extraction & Purification',
        title: 'De la biomasse à un isolat ≥99,9%',
        description:
          'Cinq sous-étapes : (1) la biomasse est séchée et broyée à la granulométrie optimale. (2) Extraction par reflux à l’éthanol 60% — 3 passages × 2 heures × ratio solvant 7×. (3) Concentration sous vide à 50–60°C pour récupérer l’éthanol. (4) Winterisation pour éliminer les cires ; chromatographie sur colonnes (résine HPD, 26 colonnes) pour isoler le CBD par élution en gradient. (5) Cristallisation produisant un isolat de CBD pur à ≥99,9%.',
        deepDiveLabel: 'Spécifications complètes des équipements',
        deepDiveHref: '/equipment',
      },
    },
    badges: {
      en: ['3-Pass Extraction', '26 Chromatography Columns', '≥99.9% Purity'],
      de: ['3-fache Extraktion', '26 Chromatographiesäulen', '≥99,9% Reinheit'],
      fr: ['Extraction en 3 passes', '26 colonnes de chromatographie', 'Pureté ≥99,9%'],
    },
  },

  // ── Phase 06 — QC & Packaging ─────────────────────────────────────────────
  {
    id: '06',
    slug: 'qc-packaging',
    images: [
      '/images/equipment/hplc-system.jpg',
      '/images/products/cbd-crystal-closeup.jpg',
      '/images/products/cbd-packaging-foil.jpg',
      '/images/products/cbd-shipping-box.jpg',
    ],
    content: {
      en: {
        eyebrow: 'Phase 06 · QC & Packaging',
        title: 'Verified, Sealed, Export-Ready',
        description:
          'Every batch undergoes in-house HPLC cannabinoid profiling and potency analysis before release. Product is packaged in 5 kg PE bags or aluminum foil bags, sealed in export cartons with full batch documentation (COA, SDS available per order requirements).',
        deepDiveLabel: 'Quality assurance details',
        deepDiveHref: '/quality-assurance',
      },
      de: {
        eyebrow: 'Phase 06 · QC & Verpackung',
        title: 'Geprüft, versiegelt, exportbereit',
        description:
          'Jede Charge durchläuft vor der Freigabe eine hauseigene HPLC-Cannabinoid-Profilierung und Wirkstoffanalyse. Das Produkt wird in 5-kg-PE-Beuteln oder Aluminium-Folienbeuteln abgefüllt und in Exportkartons versiegelt — einschließlich vollständiger Chargendokumentation (CoA, SDS auf Anfrage).',
        deepDiveLabel: 'Details zur Qualitätssicherung',
        deepDiveHref: '/quality-assurance',
      },
      fr: {
        eyebrow: 'Phase 06 · QC & Conditionnement',
        title: 'Vérifié, scellé, prêt à exporter',
        description:
          'Chaque lot fait l’objet d’un profil cannabinoïde et d’une analyse de puissance HPLC en interne avant libération. Le produit est conditionné en sacs PE de 5 kg ou en sachets aluminium, scellé dans des cartons d’export avec la documentation complète du lot (COA, FDS selon les exigences de la commande).',
        deepDiveLabel: 'Détails de l’assurance qualité',
        deepDiveHref: '/quality-assurance',
      },
    },
    badges: {
      en: ['HPLC Verified', '5 kg PE / Foil', 'COA per Batch'],
      de: ['HPLC-geprüft', '5 kg PE / Folie', 'CoA je Charge'],
      fr: ['Vérifié par HPLC', '5 kg PE / Aluminium', 'COA par lot'],
    },
  },
]

// ─────────────────────────────────────────────────────────────────────────────
//  Hero strings
// ─────────────────────────────────────────────────────────────────────────────

export const processHeroStrings: Record<
  Locale,
  {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    subtitle: string
    kpis: { value: string; label: string }[]
    ctaLabel: string
  }
> = {
  en: {
    eyebrow: 'Our Process',
    titleLine1: 'From Seed',
    titleLine2: 'to Isolate.',
    subtitle:
      'Six phases. One traceable chain. Every batch cultivated, extracted, and verified in Yunnan — from government-approved Yunma-13 cultivars to ≥99.9% pharmaceutical-grade CBD isolate.',
    kpis: [
      { value: '120 d', label: 'Growth Cycle' },
      { value: '≥99.9%', label: 'Final Purity' },
      { value: 'HPLC', label: 'Batch Verified' },
      { value: '6', label: 'Controlled Phases' },
    ],
    ctaLabel: 'Send Inquiry',
  },
  de: {
    eyebrow: 'Unser Prozess',
    titleLine1: 'Vom Samen',
    titleLine2: 'zum Isolat.',
    subtitle:
      'Sechs Phasen. Eine rückverfolgbare Kette. Jede Charge wird in Yunnan angebaut, extrahiert und geprüft — von staatlich zugelassenen Yunma-13-Sorten bis zum CBD-Isolat in ≥99,9%iger pharmazeutischer Qualität.',
    kpis: [
      { value: '120 d', label: 'Wachstumszyklus' },
      { value: '≥99,9%', label: 'Endreinheit' },
      { value: 'HPLC', label: 'Chargengeprüft' },
      { value: '6', label: 'Kontrollierte Phasen' },
    ],
    ctaLabel: 'Anfrage senden',
  },
  fr: {
    eyebrow: 'Notre processus',
    titleLine1: 'De la graine',
    titleLine2: 'à l’isolat.',
    subtitle:
      'Six phases. Une chaîne traçable. Chaque lot est cultivé, extrait et vérifié au Yunnan — depuis les cultivars Yunma-13 agréés jusqu’à un isolat de CBD de qualité pharmaceutique ≥99,9%.',
    kpis: [
      { value: '120 j', label: 'Cycle de croissance' },
      { value: '≥99,9%', label: 'Pureté finale' },
      { value: 'HPLC', label: 'Lot vérifié' },
      { value: '6', label: 'Phases contrôlées' },
    ],
    ctaLabel: 'Envoyer une demande',
  },
}
