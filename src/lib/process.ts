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
  /** Detailed sub-steps for the flowchart layout */
  detailedSteps?: { title: string; text: string }[]
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
        description: 'Industry-leading seed and cutting propagation techniques ensuring up to 99% survival rate and 100% female plants for cutting propagation.',
        detailedSteps: [
          { title: '1. Seed Propagation', text: 'Selection of approved Yunma-13 seeds (THC < 0.3%). Seeds are sun-dried and coated before planting to prevent pests. Cultivated in plug trays using our proprietary substrate, achieving a 99% emergence rate.' },
          { title: '2. Cutting Propagation', text: 'Selected high-content, ideal-phenotype plants serve as mother stock. Cuttings are pruned, inserted, and rooted in our proprietary substrate, guaranteeing 100% female plants with superior root development compared to market substrates.' }
        ],
        deepDiveLabel: 'Full cultivation details',
        deepDiveHref: '/planting',
      },
      de: {
        eyebrow: 'Phase 01 · Saatgut & Anzucht',
        title: 'Sortenauswahl & Vermehrung',
        description: 'Branchenführende Samen- und Stecklingsvermehrungstechniken, die eine Überlebensrate von bis zu 99% und 100% weibliche Pflanzen bei der Stecklingsvermehrung gewährleisten.',
        detailedSteps: [
          { title: '1. Samenvermehrung', text: 'Auswahl von zugelassenen Yunma-13 Samen (THC < 0,3%). Die Samen werden vor dem Pflanzen sonnengetrocknet und beschichtet, um Schädlinge zu vermeiden. Die Anzucht in Multitopfplatten mit unserem speziellen Substrat erreicht eine Keimrate von 99%.' },
          { title: '2. Stecklingsvermehrung', text: 'Ausgewählte Pflanzen mit hohem Wirkstoffgehalt und idealem Phänotyp dienen als Mutterpflanzen. Stecklinge werden geschnitten, gesteckt und in unserem proprietären Substrat verwurzelt. Dies garantiert 100% weibliche Pflanzen mit überlegener Wurzelentwicklung im Vergleich zu handelsüblichen Substraten.' }
        ],
        deepDiveLabel: 'Alle Anbaudetails',
        deepDiveHref: '/planting',
      },
      fr: {
        eyebrow: 'Phase 01 · Semence & Pépinière',
        title: 'Sélection de cultivar & propagation',
        description: 'Techniques de propagation par graines et boutures à la pointe de l\'industrie, garantissant un taux de survie allant jusqu\'à 99% et 100% de plantes femelles pour le bouturage.',
        detailedSteps: [
          { title: '1. Propagation par semis', text: 'Sélection de graines Yunma-13 approuvées (THC < 0,3%). Les graines sont séchées au soleil et enrobées avant la plantation pour prévenir les parasites. Cultivées en plateaux alvéolés avec notre substrat exclusif, avec un taux de levée de 99%.' },
          { title: '2. Propagation par bouturage', text: 'Des plantes sélectionnées pour leur teneur élevée et leur phénotype idéal servent de pieds-mères. Les boutures sont taillées, insérées et enracinées dans notre substrat exclusif, garantissant 100% de plantes femelles avec un développement racinaire supérieur à celui des substrats du marché.' }
        ],
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
      '/images/process/transplant-field.jpg',
      '/images/process/transplant-field-2.jpg',
    ],
    content: {
      en: {
        eyebrow: 'Phase 02 · Field Preparation',
        title: 'Land & Irrigation Setup',
        description: 'Based on years of industrial hemp cultivation management experience, we have established strict standards for land preparation and water/fertilizer systems.',
        detailedSteps: [
          { title: '1. Tillage & Ridging', text: 'Land is carefully tilled and ridged with precise row and plant spacing control, customized according to the planting schedule and specific soil conditions.' },
          { title: '2. Irrigation System', text: 'Advanced irrigation networks are installed to guarantee uniform water distribution, accommodating and optimizing across various complex terrains.' }
        ],
        deepDiveLabel: 'View cultivation base',
        deepDiveHref: '/planting',
      },
      de: {
        eyebrow: 'Phase 02 · Feldvorbereitung',
        title: 'Boden- und Bewässerungsaufbau',
        description: 'Basierend auf jahrelanger Erfahrung im Anbau von Nutzhanf haben wir strenge Standards für die Bodenbearbeitung sowie Wasser- und Düngesysteme etabliert.',
        detailedSteps: [
          { title: '1. Bodenbearbeitung & Dammkultur', text: 'Das Land wird sorgfältig gepflügt und in Dämmen angelegt, wobei der Reihen- und Pflanzenabstand präzise kontrolliert und auf den Pflanzplan und die spezifischen Bodenbedingungen abgestimmt wird.' },
          { title: '2. Bewässerungssystem', text: 'Fortschrittliche Bewässerungsnetzwerke werden installiert, um eine gleichmäßige Wasserverteilung zu gewährleisten und sich an verschiedene komplexe Geländestrukturen anzupassen.' }
        ],
        deepDiveLabel: 'Anbaustandort ansehen',
        deepDiveHref: '/planting',
      },
      fr: {
        eyebrow: 'Phase 02 · Préparation du champ',
        title: 'Préparation du sol & irrigation',
        description: 'Forts de plusieurs années d\'expérience dans la gestion de la culture du chanvre industriel, nous avons établi des normes strictes pour la préparation des terres et les systèmes d\'eau et d\'engrais.',
        detailedSteps: [
          { title: '1. Labourage et buttage', text: 'La terre est soigneusement labourée et buttée avec un contrôle précis de l\'espacement des rangs et des plants, personnalisé en fonction du calendrier de plantation et des conditions spécifiques du sol.' },
          { title: '2. Système d\'irrigation', text: 'Des réseaux d\'irrigation avancés sont installés pour garantir une distribution uniforme de l\'eau, s\'adaptant et optimisant la culture sur divers terrains complexes.' }
        ],
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
      '/images/process/growth-day-01-post-transplant.jpg',
      '/images/process/growth-day-10.jpg',
      '/images/process/growth-day-20.jpg',
      '/images/process/growth-day-30.jpg',
      '/images/process/growth-day-45.jpg',
      '/images/process/growth-day-65.jpg',
      '/images/process/growth-day-100.jpg',
      '/images/process/growth-day-120-mature.jpg',
    ],
    content: {
      en: {
        eyebrow: 'Phase 03 · Growth Cycle',
        title: '120-Day Field Journey',
        description: 'The entire cycle spans approximately 3 to 10 months. We strictly comply with national regulations ensuring THC remains below 0.3%.',
        detailedSteps: [
          { title: '1. Transplanting', text: 'Planting density is carefully adjusted based on different regions and precise planting times.' },
          { title: '2. Field Management', text: 'Growth progress is monitored consistently across key milestones (10, 20, 30, 45, 65, 100 days) until optimal maturity at 120 days.' }
        ],
        deepDiveLabel: 'Detailed zone breakdown',
        deepDiveHref: '/planting',
      },
      de: {
        eyebrow: 'Phase 03 · Wachstumszyklus',
        title: '120 Tage auf dem Feld',
        description: 'Der gesamte Zyklus dauert etwa 3 bis 10 Monate. Wir halten uns strikt an nationale Vorschriften, um sicherzustellen, dass der THC-Gehalt unter 0,3% bleibt.',
        detailedSteps: [
          { title: '1. Umpflanzen', text: 'Die Pflanzdichte wird sorgfältig an die verschiedenen Regionen und den genauen Pflanzzeitpunkt angepasst.' },
          { title: '2. Feldmanagement', text: 'Der Wachstumsfortschritt wird konsequent an wichtigen Meilensteinen (10, 20, 30, 45, 65, 100 Tage) bis zur optimalen Reife bei 120 Tagen überwacht.' }
        ],
        deepDiveLabel: 'Detaillierte Zonenübersicht',
        deepDiveHref: '/planting',
      },
      fr: {
        eyebrow: 'Phase 03 · Cycle de croissance',
        title: 'Parcours de 120 jours au champ',
        description: 'Le cycle entier s\'étend de 3 à 10 mois. Nous respectons strictement les réglementations nationales pour garantir que le THC reste inférieur à 0,3%.',
        detailedSteps: [
          { title: '1. Transplantation', text: 'La densité de plantation est soigneusement ajustée en fonction des différentes régions et du moment précis de la plantation.' },
          { title: '2. Gestion du champ', text: 'Les progrès de la croissance sont suivis de manière constante lors des étapes clés (10, 20, 30, 45, 65, 100 jours) jusqu\'à la maturité optimale à 120 jours.' }
        ],
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
        description: 'Harvested at optimal maturity and air-dried under controlled conditions to preserve cannabinoid integrity. Flower and leaf material is separated and prepared for extraction.',
        detailedSteps: [
          { title: 'Harvesting', text: 'Mature plants are carefully harvested at peak CBD potency levels.' },
          { title: 'Drying & Separation', text: 'Biomass is air-dried in controlled environments. Flower and leaf materials are then separated from the stalks and prepared for the extraction phase.' }
        ],
        deepDiveLabel: 'View cultivation base',
        deepDiveHref: '/planting',
      },
      de: {
        eyebrow: 'Phase 04 · Ernte & Trocknung',
        title: 'Ernte bei maximalem Wirkstoffgehalt',
        description: 'Geerntet bei optimaler Reife und unter kontrollierten Bedingungen luftgetrocknet, um die Integrität der Cannabinoide zu bewahren. Blüten- und Blattmaterial wird getrennt und für die Extraktion vorbereitet.',
        detailedSteps: [
          { title: 'Ernte', text: 'Reife Pflanzen werden zum Zeitpunkt des höchsten CBD-Gehalts sorgfältig geerntet.' },
          { title: 'Trocknung & Trennung', text: 'Die Biomasse wird unter kontrollierten Bedingungen luftgetrocknet. Blüten- und Blattmaterial wird dann von den Stängeln getrennt und für die Extraktionsphase vorbereitet.' }
        ],
        deepDiveLabel: 'Anbaustandort ansehen',
        deepDiveHref: '/planting',
      },
      fr: {
        eyebrow: 'Phase 04 · Récolte & Séchage',
        title: 'Récolte au pic de puissance',
        description: 'Récoltée à maturité optimale et séchée à l’air sous conditions contrôlées afin de préserver l’intégrité des cannabinoïdes. La fleur et le feuillage sont séparés puis préparés pour l’extraction.',
        detailedSteps: [
          { title: 'Récolte', text: 'Les plantes matures sont soigneusement récoltées à leur niveau maximal de CBD.' },
          { title: 'Séchage & Séparation', text: 'La biomasse est séchée à l\'air dans des environnements contrôlés. Les fleurs et les feuilles sont ensuite séparées des tiges et préparées pour la phase d\'extraction.' }
        ],
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
      '/images/process/extraction-tanks.jpg',
      '/images/process/concentrator-2000l.jpg',
      '/images/process/chromatography-upper.jpg',
    ],
    content: {
      en: {
        eyebrow: 'Phase 05 · Extraction & Purification',
        title: 'From Biomass to ≥99.9% Isolate',
        description: 'Our core extraction process relies on advanced ethanol extraction and rigorous column chromatography to achieve industry-leading purity.',
        detailedSteps: [
          { title: '1. Raw Material Pre-treatment', text: 'Dried flower and leaf material is finely crushed to the optimal particle size for extraction.' },
          { title: '2. Ethanol Extraction', text: '60% ethanol is utilized at a 7x solvent ratio for reflux extraction. This process is repeated 3 times, with each pass lasting 2 hours.' },
          { title: '3. Separation & Concentration', text: 'Biomass residue is filtered out. The liquid is then subjected to vacuum concentration at 50-60°C to recover the ethanol, yielding a potent crude extract.' },
          { title: '4. Purification & Refining', text: 'Crude extracts containing pigments and lipids undergo deep purification: Dewaxing via low-temperature resting and filtration; Column Chromatography utilizing macroporous adsorption resin (HPD series) with gradient ethanol elution to specifically isolate CBD; and finally, Crystallization in a specific solvent system to obtain >99% pure CBD.' }
        ],
        deepDiveLabel: 'Full equipment specifications',
        deepDiveHref: '/equipment',
      },
      de: {
        eyebrow: 'Phase 05 · Extraktion & Aufreinigung',
        title: 'Von der Biomasse zum ≥99,9%-Isolat',
        description: 'Unser Kernextraktionsprozess stützt sich auf fortschrittliche Ethanolextraktion und strenge Säulenchromatographie, um eine branchenführende Reinheit zu erreichen.',
        detailedSteps: [
          { title: '1. Vorbehandlung des Rohmaterials', text: 'Getrocknetes Blüten- und Blattmaterial wird fein gemahlen, um die optimale Partikelgröße für die Extraktion zu erreichen.' },
          { title: '2. Ethanolextraktion', text: '60%iges Ethanol wird in einem 7-fachen Lösungsmittelverhältnis für die Rückflussextraktion verwendet. Dieser Prozess wird 3-mal wiederholt, wobei jeder Durchgang 2 Stunden dauert.' },
          { title: '3. Trennung & Konzentration', text: 'Biomassereste werden herausgefiltert. Die Flüssigkeit wird dann bei 50-60°C vakuumkonzentriert, um das Ethanol zurückzugewinnen, was einen starken Rohextrakt ergibt.' },
          { title: '4. Aufreinigung & Raffination', text: 'Rohextrakte, die Pigmente und Lipide enthalten, durchlaufen eine Tiefenaufreinigung: Entwachsung durch Ruhen bei niedrigen Temperaturen und Filtration; Säulenchromatographie unter Verwendung von makroporösem Adsorptionsharz (HPD-Serie) mit gradueller Ethanolelution zur spezifischen Isolierung von CBD; und schließlich Kristallisation in einem speziellen Lösungsmittelsystem, um >99% reines CBD zu erhalten.' }
        ],
        deepDiveLabel: 'Vollständige Anlagenspezifikationen',
        deepDiveHref: '/equipment',
      },
      fr: {
        eyebrow: 'Phase 05 · Extraction & Purification',
        title: 'De la biomasse à un isolat ≥99,9%',
        description: 'Notre processus d\'extraction principal repose sur une extraction avancée à l\'éthanol et une chromatographie sur colonne rigoureuse pour atteindre une pureté de premier plan.',
        detailedSteps: [
          { title: '1. Prétraitement de la matière première', text: 'Le matériel de feuilles et de fleurs séchées est finement broyé jusqu\'à obtenir la granulométrie optimale pour l\'extraction.' },
          { title: '2. Extraction à l\'éthanol', text: 'L\'éthanol à 60% est utilisé à un ratio de solvant de 7x pour l\'extraction à reflux. Ce processus est répété 3 fois, chaque passage durant 2 heures.' },
          { title: '3. Séparation et concentration', text: 'Les résidus de biomasse sont filtrés. Le liquide est ensuite soumis à une concentration sous vide à 50-60°C pour récupérer l\'éthanol, produisant un extrait brut puissant.' },
          { title: '4. Purification et raffinage', text: 'Les extraits bruts contenant des pigments et des lipides subissent une purification profonde : Déparaffinage par repos à basse température et filtration ; Chromatographie sur colonne utilisant une résine d\'adsorption macroporeuse (série HPD) avec élution à l\'éthanol en gradient pour isoler spécifiquement le CBD ; et enfin, Cristallisation dans un système de solvant spécifique pour obtenir du CBD pur à >99%.' }
        ],
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
      '/images/process/hplc-system.jpg',
    ],
    content: {
      en: {
        eyebrow: 'Phase 06 · QC & Packaging',
        title: 'Verified, Sealed, Export-Ready',
        description: 'Every batch undergoes rigorous quality control to ensure pharmaceutical-grade consistency and safety.',
        detailedSteps: [
          { title: 'Testing Equipment', text: 'We utilize High-Performance Liquid Chromatography (HPLC) testing equipment in-house for precise cannabinoid profiling and potency analysis.' },
          { title: 'Packaging', text: 'Product is securely packaged in 5 kg PE bags or aluminum foil bags, then sealed in export cartons accompanied by full batch documentation (COA, SDS available per order requirements).' }
        ],
        deepDiveLabel: 'Quality assurance details',
        deepDiveHref: '/quality-assurance',
      },
      de: {
        eyebrow: 'Phase 06 · QC & Verpackung',
        title: 'Geprüft, versiegelt, exportbereit',
        description: 'Jede Charge durchläuft eine strenge Qualitätskontrolle, um Konsistenz und Sicherheit auf pharmazeutischem Niveau zu gewährleisten.',
        detailedSteps: [
          { title: 'Prüfgeräte', text: 'Wir nutzen im eigenen Haus Hochleistungsflüssigkeitschromatographie (HPLC) Prüfgeräte für präzise Cannabinoid-Profilierung und Wirkstoffanalysen.' },
          { title: 'Verpackung', text: 'Das Produkt wird sicher in 5-kg-PE-Beuteln oder Aluminiumfolienbeuteln verpackt und dann in Exportkartons versiegelt, begleitet von der vollständigen Chargendokumentation (COA, Sicherheitsdatenblatt je nach Bestellanforderung verfügbar).' }
        ],
        deepDiveLabel: 'Details zur Qualitätssicherung',
        deepDiveHref: '/quality-assurance',
      },
      fr: {
        eyebrow: 'Phase 06 · QC & Conditionnement',
        title: 'Vérifié, scellé, prêt à exporter',
        description: 'Chaque lot subit un contrôle qualité rigoureux pour garantir une constance et une sécurité de qualité pharmaceutique.',
        detailedSteps: [
          { title: 'Équipement de test', text: 'Nous utilisons en interne des équipements de test de Chromatographie en Phase Liquide à Haute Performance (HPLC) pour un profilage précis des cannabinoïdes et une analyse de la puissance.' },
          { title: 'Emballage', text: 'Le produit est solidement emballé dans des sacs en PE de 5 kg ou des sacs en papier d\'aluminium, puis scellé dans des cartons d\'exportation accompagnés de la documentation complète du lot (COA, FDS disponibles selon les exigences de la commande).' }
        ],
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
