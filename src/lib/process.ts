// src/lib/process.ts
// Data layer for the /process ("From Seed to Isolate") page.
// Six phases × three locales (en / de / fr).
// Only Phase 03 carries the Growth Timelapse Strip.

import type { Locale } from '@/i18n/locales'
export type { Locale }

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
      es: {
        eyebrow: 'Fase 01 · Semilla y Vivero',
        title: 'Selección de Cultivar y Propagación',
        description: 'Técnicas de propagación por semilla y esqueje líderes en la industria, que garantizan una tasa de supervivencia de hasta el 99% y un 100% de plantas femeninas en la propagación por esqueje.',
        detailedSteps: [
          { title: '1. Propagación por Semilla', text: 'Selección de semillas Yunma-13 aprobadas (THC < 0,3%). Las semillas se secan al sol y se recubren antes de la siembra para prevenir plagas. Se cultivan en bandejas alveoladas con nuestro sustrato propio, logrando una tasa de emergencia del 99%.' },
          { title: '2. Propagación por Esqueje', text: 'Plantas seleccionadas de alto contenido y fenotipo ideal sirven como plantas madre. Los esquejes se podan, insertan y enraízan en nuestro sustrato propio, garantizando un 100% de plantas femeninas con un desarrollo radicular superior al de los sustratos del mercado.' }
        ],
        deepDiveLabel: 'Detalles completos de cultivo',
        deepDiveHref: '/planting',
      },
      it: {
        eyebrow: 'Fase 01 · Seme e Vivaio',
        title: 'Selezione del Cultivar e Propagazione',
        description: 'Tecniche di propagazione per seme e talea leader nel settore, che garantiscono un tasso di sopravvivenza fino al 99% e il 100% di piante femminili nella propagazione per talea.',
        detailedSteps: [
          { title: '1. Propagazione per Seme', text: 'Selezione di semi Yunma-13 approvati (THC < 0,3%). I semi vengono essiccati al sole e rivestiti prima della semina per prevenire i parassiti. Coltivati in vassoi alveolati con il nostro substrato proprietario, raggiungendo un tasso di emergenza del 99%.' },
          { title: '2. Propagazione per Talea', text: 'Piante selezionate ad alto contenuto e fenotipo ideale fungono da piante madri. Le talee vengono potate, inserite e radicate nel nostro substrato proprietario, garantendo il 100% di piante femminili con uno sviluppo radicale superiore rispetto ai substrati di mercato.' }
        ],
        deepDiveLabel: 'Dettagli completi sulla coltivazione',
        deepDiveHref: '/planting',
      },
      pt: {
        eyebrow: 'Fase 01 · Semente e Viveiro',
        title: 'Seleção de Cultivar e Propagação',
        description: 'Técnicas de propagação por semente e estaca líderes na indústria, garantindo uma taxa de sobrevivência de até 99% e 100% de plantas femininas na propagação por estaca.',
        detailedSteps: [
          { title: '1. Propagação por Semente', text: 'Seleção de sementes Yunma-13 aprovadas (THC < 0,3%). As sementes são secas ao sol e revestidas antes do plantio para prevenir pragas. Cultivadas em bandejas alveoladas com nosso substrato próprio, alcançando uma taxa de emergência de 99%.' },
          { title: '2. Propagação por Estaca', text: 'Plantas selecionadas de alto teor e fenótipo ideal servem como matrizes. As estacas são podadas, inseridas e enraizadas em nosso substrato próprio, garantindo 100% de plantas femininas com desenvolvimento radicular superior ao dos substratos do mercado.' }
        ],
        deepDiveLabel: 'Detalhes completos do cultivo',
        deepDiveHref: '/planting',
      },
      ja: {
        eyebrow: 'フェーズ 01 · 種子・育苗',
        title: '品種選定と繁殖',
        description: '業界をリードする種子・挿し木繁殖技術により、最大99%の生存率と挿し木繁殖における100%の雌株を実現しています。',
        detailedSteps: [
          { title: '1. 種子繁殖', text: '認可済みYunma-13種子（THC < 0.3%）を選定。播種前に天日乾燥とコーティングを施し、病害虫を予防します。当社独自の基質を使用したプラグトレイで栽培し、99%の発芽率を達成しています。' },
          { title: '2. 挿し木繁殖', text: '高含有量・理想的な表現型の選抜株を母株として使用。挿し木は剪定・挿入後、当社独自の基質で発根させ、市販基質と比較して優れた根系発達を持つ100%雌株を保証します。' }
        ],
        deepDiveLabel: '栽培の詳細を見る',
        deepDiveHref: '/planting',
      },
      fi: {
        eyebrow: 'Vaihe 01 · Siemen ja taimitarha',
        title: 'Lajikkeen valinta ja lisäys',
        description: 'Alan johtavat siemen- ja pistokaslistäystekniikat, jotka takaavat jopa 99 %:n eloonjäämisasteen ja 100 % naaraskasveja pistokaslistäyksessä.',
        detailedSteps: [
          { title: '1. Siemenlisäys', text: 'Hyväksyttyjen Yunma-13-siementen valinta (THC < 0,3 %). Siemenet aurinko­kuivataan ja päällystetään ennen kylvöä tuholaisten ehkäisemiseksi. Kasvatetaan kenno­alustoilla omalla kasvualustallamme, jolloin saavutetaan 99 %:n itävyys.' },
          { title: '2. Pistokaslistäys', text: 'Korkean pitoisuuden ja ihanteellisen fenotyypin kasvit toimivat emokasvina. Pistokkaat leikataan, istutetaan ja juurrutetaan omalla kasvualustallamme, mikä takaa 100 % naaraskasveja ja markkinoiden kasvualustoja paremman juuriston kehityksen.' }
        ],
        deepDiveLabel: 'Viljelyn yksityiskohdat',
        deepDiveHref: '/planting',
      },
    },
    badges: {
      en: ['Yunma-13 Approved Cultivar', '99% Germination Rate', '100% Female via Cutting'],
      de: ['Yunma-13 Zugelassene Sorte', '99% Keimrate', '100% Weiblich durch Stecklinge'],
      fr: ['Cultivar Yunma-13 Approuvé', 'Taux de germination 99%', '100% Femelle par bouturage'],
      es: ['Cultivar Yunma-13 Aprobado', 'Tasa de Germinación 99%', '100% Femeninas por Esqueje'],
      it: ['Cultivar Yunma-13 Approvato', 'Tasso di Germinazione 99%', '100% Femminili da Talea'],
      pt: ['Cultivar Yunma-13 Aprovado', 'Taxa de Germinação 99%', '100% Femininas por Estaca'],
      ja: ['Yunma-13 認可品種', '発芽率99%', '挿し木で100%雌株'],
      fi: ['Yunma-13 hyväksytty lajike', '99 % itävyys', '100 % naaras pistokkaista'],
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
      es: {
        eyebrow: 'Fase 02 · Preparación del Campo',
        title: 'Preparación del Terreno e Irrigación',
        description: 'Basándonos en años de experiencia en la gestión del cultivo de cáñamo industrial, hemos establecido estándares estrictos para la preparación del terreno y los sistemas de agua y fertilización.',
        detailedSteps: [
          { title: '1. Labranza y Caballones', text: 'El terreno se labra y se dispone en caballones con un control preciso del espaciado entre hileras y plantas, personalizado según el calendario de siembra y las condiciones específicas del suelo.' },
          { title: '2. Sistema de Irrigación', text: 'Se instalan redes de irrigación avanzadas para garantizar una distribución uniforme del agua, adaptándose y optimizando el rendimiento en diversos terrenos complejos.' }
        ],
        deepDiveLabel: 'Ver base de cultivo',
        deepDiveHref: '/planting',
      },
      it: {
        eyebrow: 'Fase 02 · Preparazione del Campo',
        title: 'Preparazione del Terreno e Irrigazione',
        description: 'Basandoci su anni di esperienza nella gestione della coltivazione di canapa industriale, abbiamo stabilito standard rigorosi per la preparazione del terreno e i sistemi idrici e di fertilizzazione.',
        detailedSteps: [
          { title: '1. Aratura e Rincalzatura', text: 'Il terreno viene accuratamente arato e rincalzato con un controllo preciso della spaziatura tra file e piante, personalizzato in base al calendario di semina e alle condizioni specifiche del suolo.' },
          { title: '2. Sistema di Irrigazione', text: 'Vengono installate reti di irrigazione avanzate per garantire una distribuzione uniforme dell\'acqua, adattandosi e ottimizzando su vari terreni complessi.' }
        ],
        deepDiveLabel: 'Vedi base di coltivazione',
        deepDiveHref: '/planting',
      },
      pt: {
        eyebrow: 'Fase 02 · Preparação do Campo',
        title: 'Preparação do Solo e Irrigação',
        description: 'Com base em anos de experiência na gestão do cultivo de cânhamo industrial, estabelecemos padrões rigorosos para a preparação do solo e os sistemas de água e fertilização.',
        detailedSteps: [
          { title: '1. Aração e Encanteiramento', text: 'O solo é cuidadosamente arado e preparado em canteiros com controle preciso do espaçamento entre fileiras e plantas, personalizado de acordo com o cronograma de plantio e as condições específicas do solo.' },
          { title: '2. Sistema de Irrigação', text: 'Redes de irrigação avançadas são instaladas para garantir a distribuição uniforme da água, adaptando-se e otimizando o desempenho em diversos terrenos complexos.' }
        ],
        deepDiveLabel: 'Ver base de cultivo',
        deepDiveHref: '/planting',
      },
      ja: {
        eyebrow: 'フェーズ 02 · 圃場準備',
        title: '土壌・灌漑整備',
        description: '長年の産業用ヘンプ栽培管理の経験に基づき、土壌準備および水・肥料システムに関する厳格な基準を確立しています。',
        detailedSteps: [
          { title: '1. 耕起・畝立て', text: '播種スケジュールと土壌条件に合わせ、列間・株間を精密に制御しながら丁寧に耕起・畝立てを行います。' },
          { title: '2. 灌漑システム', text: '均一な水分供給を保証する先進的な灌漑ネットワークを設置し、さまざまな複雑な地形に対応・最適化しています。' }
        ],
        deepDiveLabel: '栽培基地を見る',
        deepDiveHref: '/planting',
      },
      fi: {
        eyebrow: 'Vaihe 02 · Pellon valmistelu',
        title: 'Maan ja kastelun valmistelu',
        description: 'Vuosien teollisen hampun viljelykokemuksen pohjalta olemme luoneet tiukat standardit maan valmistelulle sekä vesi- ja lannoitusjärjestelmille.',
        detailedSteps: [
          { title: '1. Muokkaus ja penkkien teko', text: 'Maa muokataan ja penkit tehdään huolellisesti tarkalla rivi- ja taimivälien hallinnalla, räätälöitynä istutusaikataulun ja maaperän olosuhteiden mukaan.' },
          { title: '2. Kastelujärjestelmä', text: 'Edistykselliset kasteluverkostot asennetaan takaamaan tasainen vedenjako, mukautuen ja optimoiden eri maastotyypeille.' }
        ],
        deepDiveLabel: 'Katso viljelyalue',
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
      es: {
        eyebrow: 'Fase 03 · Ciclo de Crecimiento',
        title: 'Recorrido de 120 Días en Campo',
        description: 'El ciclo completo abarca aproximadamente de 3 a 10 meses. Cumplimos estrictamente con las regulaciones nacionales para garantizar que el THC se mantenga por debajo del 0,3%.',
        detailedSteps: [
          { title: '1. Trasplante', text: 'La densidad de plantación se ajusta cuidadosamente según las diferentes regiones y los tiempos precisos de siembra.' },
          { title: '2. Gestión de Campo', text: 'El progreso del crecimiento se monitorea de forma constante en hitos clave (10, 20, 30, 45, 65, 100 días) hasta la madurez óptima a los 120 días.' }
        ],
        deepDiveLabel: 'Desglose detallado por zona',
        deepDiveHref: '/planting',
      },
      it: {
        eyebrow: 'Fase 03 · Ciclo di Crescita',
        title: 'Percorso di 120 Giorni in Campo',
        description: 'L\'intero ciclo si estende da circa 3 a 10 mesi. Rispettiamo rigorosamente le normative nazionali per garantire che il THC rimanga inferiore allo 0,3%.',
        detailedSteps: [
          { title: '1. Trapianto', text: 'La densità di impianto viene attentamente regolata in base alle diverse regioni e ai tempi precisi di semina.' },
          { title: '2. Gestione del Campo', text: 'I progressi della crescita vengono monitorati costantemente nei traguardi chiave (10, 20, 30, 45, 65, 100 giorni) fino alla maturità ottimale a 120 giorni.' }
        ],
        deepDiveLabel: 'Dettaglio per zona',
        deepDiveHref: '/planting',
      },
      pt: {
        eyebrow: 'Fase 03 · Ciclo de Crescimento',
        title: 'Jornada de 120 Dias no Campo',
        description: 'O ciclo completo abrange aproximadamente de 3 a 10 meses. Cumprimos rigorosamente as regulamentações nacionais para garantir que o THC permaneça abaixo de 0,3%.',
        detailedSteps: [
          { title: '1. Transplante', text: 'A densidade de plantio é cuidadosamente ajustada com base nas diferentes regiões e nos tempos precisos de plantio.' },
          { title: '2. Gestão de Campo', text: 'O progresso do crescimento é monitorado de forma consistente nos marcos-chave (10, 20, 30, 45, 65, 100 dias) até a maturidade ideal aos 120 dias.' }
        ],
        deepDiveLabel: 'Detalhamento por zona',
        deepDiveHref: '/planting',
      },
      ja: {
        eyebrow: 'フェーズ 03 · 成長サイクル',
        title: '120日間のフィールドジャーニー',
        description: '全サイクルは約3〜10か月に及びます。国の規制を厳格に遵守し、THCが0.3%未満であることを確保しています。',
        detailedSteps: [
          { title: '1. 移植', text: '地域や正確な植付時期に基づき、植付密度を慎重に調整しています。' },
          { title: '2. 圃場管理', text: '主要なマイルストーン（10、20、30、45、65、100日目）で成長の進捗を一貫して監視し、120日目の最適な成熟を目指します。' }
        ],
        deepDiveLabel: 'ゾーン別の詳細',
        deepDiveHref: '/planting',
      },
      fi: {
        eyebrow: 'Vaihe 03 · Kasvusykli',
        title: '120 päivän peltojakso',
        description: 'Koko sykli kestää noin 3–10 kuukautta. Noudatamme tiukasti kansallisia säädöksiä varmistaen, että THC pysyy alle 0,3 %:n.',
        detailedSteps: [
          { title: '1. Istutus', text: 'Istutustiheys säädetään huolellisesti eri alueiden ja tarkkojen istutusajankohtien mukaan.' },
          { title: '2. Pellon hallinta', text: 'Kasvun etenemistä seurataan johdonmukaisesti avainvaiheissa (10, 20, 30, 45, 65, 100 päivää) optimaaliseen kypsyyteen 120 päivässä.' }
        ],
        deepDiveLabel: 'Vyöhykekohtaiset tiedot',
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
      es: [
        { day: 'Day 1',   label: 'Post-trasplante',        image: '/images/process/growth-day-01-post-transplant.jpg' },
        { day: 'Day 10',  label: 'Establecimiento radicular', image: '/images/process/growth-day-10.jpg' },
        { day: 'Day 20',  label: 'Crecimiento vegetativo',  image: '/images/process/growth-day-20.jpg' },
        { day: 'Day 30',  label: 'Formación de dosel',      image: '/images/process/growth-day-30.jpg' },
        { day: 'Day 45',  label: 'Pre-floración',           image: '/images/process/growth-day-45.jpg' },
        { day: 'Day 65',  label: 'Floración activa',        image: '/images/process/growth-day-65.jpg' },
        { day: 'Day 100', label: 'Pico de CBD',             image: '/images/process/growth-day-100.jpg' },
        { day: 'Day 120', label: 'Listo para cosecha',      image: '/images/process/growth-day-120-mature.jpg' },
      ],
      it: [
        { day: 'Day 1',   label: 'Post-trapianto',          image: '/images/process/growth-day-01-post-transplant.jpg' },
        { day: 'Day 10',  label: 'Radicamento',             image: '/images/process/growth-day-10.jpg' },
        { day: 'Day 20',  label: 'Crescita vegetativa',     image: '/images/process/growth-day-20.jpg' },
        { day: 'Day 30',  label: 'Formazione chioma',       image: '/images/process/growth-day-30.jpg' },
        { day: 'Day 45',  label: 'Pre-fioritura',           image: '/images/process/growth-day-45.jpg' },
        { day: 'Day 65',  label: 'Fioritura attiva',        image: '/images/process/growth-day-65.jpg' },
        { day: 'Day 100', label: 'Picco CBD',               image: '/images/process/growth-day-100.jpg' },
        { day: 'Day 120', label: 'Pronto per il raccolto',  image: '/images/process/growth-day-120-mature.jpg' },
      ],
      pt: [
        { day: 'Day 1',   label: 'Pós-transplante',         image: '/images/process/growth-day-01-post-transplant.jpg' },
        { day: 'Day 10',  label: 'Estabelecimento radicular', image: '/images/process/growth-day-10.jpg' },
        { day: 'Day 20',  label: 'Crescimento vegetativo',  image: '/images/process/growth-day-20.jpg' },
        { day: 'Day 30',  label: 'Formação de copa',        image: '/images/process/growth-day-30.jpg' },
        { day: 'Day 45',  label: 'Pré-floração',            image: '/images/process/growth-day-45.jpg' },
        { day: 'Day 65',  label: 'Floração ativa',          image: '/images/process/growth-day-65.jpg' },
        { day: 'Day 100', label: 'Pico de CBD',             image: '/images/process/growth-day-100.jpg' },
        { day: 'Day 120', label: 'Pronto para colheita',    image: '/images/process/growth-day-120-mature.jpg' },
      ],
      ja: [
        { day: 'Day 1',   label: '移植後',                   image: '/images/process/growth-day-01-post-transplant.jpg' },
        { day: 'Day 10',  label: '活着期',                   image: '/images/process/growth-day-10.jpg' },
        { day: 'Day 20',  label: '栄養成長期',               image: '/images/process/growth-day-20.jpg' },
        { day: 'Day 30',  label: '樹冠形成期',               image: '/images/process/growth-day-30.jpg' },
        { day: 'Day 45',  label: '開花前期',                 image: '/images/process/growth-day-45.jpg' },
        { day: 'Day 65',  label: '開花盛期',                 image: '/images/process/growth-day-65.jpg' },
        { day: 'Day 100', label: 'CBDピーク',                image: '/images/process/growth-day-100.jpg' },
        { day: 'Day 120', label: '収穫適期',                 image: '/images/process/growth-day-120-mature.jpg' },
      ],
      fi: [
        { day: 'Day 1',   label: 'Istutuksen jälkeen',      image: '/images/process/growth-day-01-post-transplant.jpg' },
        { day: 'Day 10',  label: 'Juurtuminen',             image: '/images/process/growth-day-10.jpg' },
        { day: 'Day 20',  label: 'Vegetatiivinen kasvu',    image: '/images/process/growth-day-20.jpg' },
        { day: 'Day 30',  label: 'Latvuston muodostuminen', image: '/images/process/growth-day-30.jpg' },
        { day: 'Day 45',  label: 'Esikukinta',              image: '/images/process/growth-day-45.jpg' },
        { day: 'Day 65',  label: 'Aktiivinen kukinta',      image: '/images/process/growth-day-65.jpg' },
        { day: 'Day 100', label: 'CBD-huippu',              image: '/images/process/growth-day-100.jpg' },
        { day: 'Day 120', label: 'Sadonkorjuuvalmis',       image: '/images/process/growth-day-120-mature.jpg' },
      ],
    },
    badges: {
      en: ['120-Day Cycle', 'THC < 0.3%', 'Weekly Monitoring'],
      de: ['120-Tage-Zyklus', 'THC < 0,3%', 'Wöchentliches Monitoring'],
      fr: ['Cycle de 120 jours', 'THC < 0,3%', 'Suivi hebdomadaire'],
      es: ['Ciclo de 120 Días', 'THC < 0,3%', 'Monitoreo Semanal'],
      it: ['Ciclo di 120 Giorni', 'THC < 0,3%', 'Monitoraggio Settimanale'],
      pt: ['Ciclo de 120 Dias', 'THC < 0,3%', 'Monitoramento Semanal'],
      ja: ['120日サイクル', 'THC < 0.3%', '週次モニタリング'],
      fi: ['120 päivän sykli', 'THC < 0,3 %', 'Viikoittainen seuranta'],
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
        description: "Récoltée à maturité optimale et séchée à l'air sous conditions contrôlées afin de préserver l'intégrité des cannabinoïdes. La fleur et le feuillage sont séparés puis préparés pour l'extraction.",
        detailedSteps: [
          { title: 'Récolte', text: 'Les plantes matures sont soigneusement récoltées à leur niveau maximal de CBD.' },
          { title: 'Séchage & Séparation', text: 'La biomasse est séchée à l\'air dans des environnements contrôlés. Les fleurs et les feuilles sont ensuite séparées des tiges et préparées pour la phase d\'extraction.' }
        ],
        deepDiveLabel: 'Voir le site de culture',
        deepDiveHref: '/planting',
      },
      es: {
        eyebrow: 'Fase 04 · Cosecha y Secado',
        title: 'Cosecha en el Punto Máximo de Potencia',
        description: 'Cosechado en la madurez óptima y secado al aire en condiciones controladas para preservar la integridad de los cannabinoides. El material de flor y hoja se separa y prepara para la extracción.',
        detailedSteps: [
          { title: 'Cosecha', text: 'Las plantas maduras se cosechan cuidadosamente en los niveles máximos de potencia de CBD.' },
          { title: 'Secado y Separación', text: 'La biomasa se seca al aire en ambientes controlados. Los materiales de flor y hoja se separan de los tallos y se preparan para la fase de extracción.' }
        ],
        deepDiveLabel: 'Ver base de cultivo',
        deepDiveHref: '/planting',
      },
      it: {
        eyebrow: 'Fase 04 · Raccolta e Essiccazione',
        title: 'Raccolta al Picco di Potenza',
        description: 'Raccolto a maturità ottimale ed essiccato all\'aria in condizioni controllate per preservare l\'integrità dei cannabinoidi. Il materiale di fiori e foglie viene separato e preparato per l\'estrazione.',
        detailedSteps: [
          { title: 'Raccolta', text: 'Le piante mature vengono raccolte con cura ai livelli massimi di potenza del CBD.' },
          { title: 'Essiccazione e Separazione', text: 'La biomassa viene essiccata all\'aria in ambienti controllati. I materiali di fiori e foglie vengono poi separati dagli steli e preparati per la fase di estrazione.' }
        ],
        deepDiveLabel: 'Vedi base di coltivazione',
        deepDiveHref: '/planting',
      },
      pt: {
        eyebrow: 'Fase 04 · Colheita e Secagem',
        title: 'Colheita no Pico de Potência',
        description: 'Colhido na maturidade ideal e seco ao ar em condições controladas para preservar a integridade dos canabinoides. O material de flor e folha é separado e preparado para a extração.',
        detailedSteps: [
          { title: 'Colheita', text: 'As plantas maduras são cuidadosamente colhidas nos níveis máximos de potência de CBD.' },
          { title: 'Secagem e Separação', text: 'A biomassa é seca ao ar em ambientes controlados. Os materiais de flor e folha são então separados dos caules e preparados para a fase de extração.' }
        ],
        deepDiveLabel: 'Ver base de cultivo',
        deepDiveHref: '/planting',
      },
      ja: {
        eyebrow: 'フェーズ 04 · 収穫・乾燥',
        title: '最高効力時の収穫',
        description: '最適な成熟期に収穫し、カンナビノイドの完全性を保つため管理された条件下で自然乾燥させます。花と葉の素材を分離し、抽出に向けて準備します。',
        detailedSteps: [
          { title: '収穫', text: '成熟した植物をCBD含有量がピークに達した時点で丁寧に収穫します。' },
          { title: '乾燥・分離', text: 'バイオマスを管理された環境で自然乾燥させます。花と葉の素材を茎から分離し、抽出工程に向けて準備します。' }
        ],
        deepDiveLabel: '栽培基地を見る',
        deepDiveHref: '/planting',
      },
      fi: {
        eyebrow: 'Vaihe 04 · Sadonkorjuu ja kuivaus',
        title: 'Sadonkorjuu huippupitoisuudessa',
        description: 'Korjataan optimaalisessa kypsyydessä ja ilmakuivataan kontrolloiduissa olosuhteissa kannabinoidien eheyden säilyttämiseksi. Kukka- ja lehtimateriaali erotetaan ja valmistellaan uuttoa varten.',
        detailedSteps: [
          { title: 'Sadonkorjuu', text: 'Kypsät kasvit korjataan huolellisesti CBD-pitoisuuden huipputasolla.' },
          { title: 'Kuivaus ja erottelu', text: 'Biomassa ilmakuivataan kontrolloiduissa ympäristöissä. Kukka- ja lehtimateriaalit erotetaan varsista ja valmistellaan uuttovaiheeseen.' }
        ],
        deepDiveLabel: 'Katso viljelyalue',
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
      es: {
        eyebrow: 'Fase 05 · Extracción y Purificación',
        title: 'De la Biomasa al Aislado ≥99,9%',
        description: 'Nuestro proceso de extracción principal se basa en la extracción avanzada con etanol y una rigurosa cromatografía en columna para alcanzar una pureza líder en la industria.',
        detailedSteps: [
          { title: '1. Pretratamiento de Materia Prima', text: 'El material seco de flores y hojas se tritura finamente hasta el tamaño de partícula óptimo para la extracción.' },
          { title: '2. Extracción con Etanol', text: 'Se utiliza etanol al 60% en una proporción de solvente de 7x para la extracción por reflujo. Este proceso se repite 3 veces, con cada pasada de 2 horas de duración.' },
          { title: '3. Separación y Concentración', text: 'Los residuos de biomasa se filtran. El líquido se somete a concentración al vacío a 50-60°C para recuperar el etanol, obteniendo un extracto crudo concentrado.' },
          { title: '4. Purificación y Refinamiento', text: 'Los extractos crudos que contienen pigmentos y lípidos se someten a una purificación profunda: desparafinado mediante reposo a baja temperatura y filtración; cromatografía en columna con resina de adsorción macroporosa (serie HPD) con elución gradiente de etanol para aislar específicamente el CBD; y finalmente, cristalización en un sistema de solvente específico para obtener CBD con pureza >99%.' }
        ],
        deepDiveLabel: 'Especificaciones completas de equipos',
        deepDiveHref: '/equipment',
      },
      it: {
        eyebrow: 'Fase 05 · Estrazione e Purificazione',
        title: 'Dalla Biomassa all\'Isolato ≥99,9%',
        description: 'Il nostro processo di estrazione principale si basa sull\'estrazione avanzata con etanolo e una rigorosa cromatografia su colonna per raggiungere una purezza leader nel settore.',
        detailedSteps: [
          { title: '1. Pretrattamento della Materia Prima', text: 'Il materiale essiccato di fiori e foglie viene finemente macinato fino alla granulometria ottimale per l\'estrazione.' },
          { title: '2. Estrazione con Etanolo', text: 'L\'etanolo al 60% viene utilizzato con un rapporto solvente di 7x per l\'estrazione a riflusso. Il processo viene ripetuto 3 volte, con ogni passaggio della durata di 2 ore.' },
          { title: '3. Separazione e Concentrazione', text: 'I residui di biomassa vengono filtrati. Il liquido viene quindi sottoposto a concentrazione sotto vuoto a 50-60°C per recuperare l\'etanolo, ottenendo un estratto grezzo concentrato.' },
          { title: '4. Purificazione e Raffinazione', text: 'Gli estratti grezzi contenenti pigmenti e lipidi vengono sottoposti a purificazione profonda: decerazione mediante riposo a bassa temperatura e filtrazione; cromatografia su colonna con resina di adsorbimento macroporosa (serie HPD) con eluizione a gradiente di etanolo per isolare specificamente il CBD; e infine, cristallizzazione in un sistema solvente specifico per ottenere CBD con purezza >99%.' }
        ],
        deepDiveLabel: 'Specifiche complete delle attrezzature',
        deepDiveHref: '/equipment',
      },
      pt: {
        eyebrow: 'Fase 05 · Extração e Purificação',
        title: 'Da Biomassa ao Isolado ≥99,9%',
        description: 'Nosso processo de extração principal baseia-se na extração avançada com etanol e cromatografia em coluna rigorosa para alcançar pureza líder na indústria.',
        detailedSteps: [
          { title: '1. Pré-tratamento da Matéria-Prima', text: 'O material seco de flores e folhas é finamente triturado até o tamanho de partícula ideal para a extração.' },
          { title: '2. Extração com Etanol', text: 'Etanol a 60% é utilizado em uma proporção de solvente de 7x para extração por refluxo. O processo é repetido 3 vezes, com cada passagem durando 2 horas.' },
          { title: '3. Separação e Concentração', text: 'Os resíduos de biomassa são filtrados. O líquido é então submetido à concentração a vácuo a 50-60°C para recuperar o etanol, produzindo um extrato bruto concentrado.' },
          { title: '4. Purificação e Refinamento', text: 'Os extratos brutos contendo pigmentos e lipídios passam por purificação profunda: desparafinação por repouso a baixa temperatura e filtração; cromatografia em coluna com resina de adsorção macroporosa (série HPD) com eluição gradiente de etanol para isolar especificamente o CBD; e finalmente, cristalização em um sistema de solvente específico para obter CBD com pureza >99%.' }
        ],
        deepDiveLabel: 'Especificações completas dos equipamentos',
        deepDiveHref: '/equipment',
      },
      ja: {
        eyebrow: 'フェーズ 05 · 抽出・精製',
        title: 'バイオマスから純度≥99.9%のアイソレートへ',
        description: '当社の中核的な抽出プロセスは、先進的なエタノール抽出と厳密なカラムクロマトグラフィーに基づき、業界をリードする純度を実現しています。',
        detailedSteps: [
          { title: '1. 原料前処理', text: '乾燥した花と葉の素材を、抽出に最適な粒度まで微粉砕します。' },
          { title: '2. エタノール抽出', text: '60%エタノールを7倍の溶媒比で還流抽出に使用します。このプロセスを3回繰り返し、各回2時間行います。' },
          { title: '3. 分離・濃縮', text: 'バイオマス残渣をろ過します。液体を50-60°Cで真空濃縮してエタノールを回収し、濃縮粗抽出物を得ます。' },
          { title: '4. 精製・結晶化', text: '色素や脂質を含む粗抽出物を深度精製します：低温静置とろ過による脱ろう、マクロポーラス吸着樹脂（HPDシリーズ）によるカラムクロマトグラフィーでエタノールグラジエント溶出によりCBDを選択的に分離、最後に特定の溶媒系での結晶化により純度>99%のCBDを取得します。' }
        ],
        deepDiveLabel: '設備仕様の詳細',
        deepDiveHref: '/equipment',
      },
      fi: {
        eyebrow: 'Vaihe 05 · Uutto ja puhdistus',
        title: 'Biomassasta ≥99,9 %:n isolaattiin',
        description: 'Ydinuuttoprosessimme perustuu edistyneeseen etanoliuuttoon ja tiukkaan kolonnkromatografiaan alan johtavan puhtauden saavuttamiseksi.',
        detailedSteps: [
          { title: '1. Raaka-aineen esikäsittely', text: 'Kuivattu kukka- ja lehtimateriaali jauhetaan hienoksi optimaaliseen partikkelikokoon uuttoa varten.' },
          { title: '2. Etanoliuutto', text: '60-prosenttista etanolia käytetään 7-kertaisella liuotinsuhteella refluksiuuttoon. Prosessi toistetaan 3 kertaa, kukin kesto 2 tuntia.' },
          { title: '3. Erotus ja konsentrointi', text: 'Biomassajäännös suodatetaan. Neste konsentroidaan tyhjiössä 50–60 °C:ssa etanolin talteenottamiseksi, jolloin saadaan väkevä raakaute.' },
          { title: '4. Puhdistus ja jalostus', text: 'Pigmenttejä ja lipidejä sisältävät raakauutteet käyvät läpi syväpuhdistuksen: vahanpoisto matalassa lämpötilassa lepuuttamalla ja suodattamalla; kolonnkromatografia makrohuokoisella adsorptiohartsilla (HPD-sarja) gradienttietanolieluutiolla CBD:n eristämiseksi; ja lopuksi kiteytys tietyssä liuotinjärjestelmässä >99 %:n puhtauden CBD:n saamiseksi.' }
        ],
        deepDiveLabel: 'Laitteiden täydelliset tekniset tiedot',
        deepDiveHref: '/equipment',
      },
    },
    badges: {
      en: ['3-Pass Extraction', '26 Chromatography Columns', '≥99.9% Purity'],
      de: ['3-fache Extraktion', '26 Chromatographiesäulen', '≥99,9% Reinheit'],
      fr: ['Extraction en 3 passes', '26 colonnes de chromatographie', 'Pureté ≥99,9%'],
      es: ['Extracción en 3 Pasadas', '26 Columnas de Cromatografía', 'Pureza ≥99,9%'],
      it: ['Estrazione in 3 Passaggi', '26 Colonne Cromatografiche', 'Purezza ≥99,9%'],
      pt: ['Extração em 3 Passagens', '26 Colunas de Cromatografia', 'Pureza ≥99,9%'],
      ja: ['3回抽出', 'クロマトグラフィーカラム26本', '純度≥99.9%'],
      fi: ['3-kertainen uutto', '26 kromatografiakolumnia', 'Puhtaus ≥99,9 %'],
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
        deepDiveLabel: "Détails de l'assurance qualité",
        deepDiveHref: '/quality-assurance',
      },
      es: {
        eyebrow: 'Fase 06 · QC y Embalaje',
        title: 'Verificado, Sellado, Listo para Exportación',
        description: 'Cada lote se somete a un riguroso control de calidad para garantizar consistencia y seguridad de grado farmacéutico.',
        detailedSteps: [
          { title: 'Equipos de Análisis', text: 'Utilizamos equipos de Cromatografía Líquida de Alta Resolución (HPLC) internos para el perfilado preciso de cannabinoides y análisis de potencia.' },
          { title: 'Embalaje', text: 'El producto se empaqueta de forma segura en bolsas de PE de 5 kg o bolsas de papel de aluminio, luego se sella en cajas de exportación acompañadas de la documentación completa del lote (COA, SDS disponibles según requisitos del pedido).' }
        ],
        deepDiveLabel: 'Detalles de aseguramiento de calidad',
        deepDiveHref: '/quality-assurance',
      },
      it: {
        eyebrow: 'Fase 06 · QC e Confezionamento',
        title: 'Verificato, Sigillato, Pronto per l\'Esportazione',
        description: 'Ogni lotto viene sottoposto a un rigoroso controllo qualità per garantire consistenza e sicurezza di grado farmaceutico.',
        detailedSteps: [
          { title: 'Attrezzature di Analisi', text: 'Utilizziamo internamente attrezzature di Cromatografia Liquida ad Alte Prestazioni (HPLC) per la profilazione precisa dei cannabinoidi e l\'analisi della potenza.' },
          { title: 'Confezionamento', text: 'Il prodotto viene confezionato in modo sicuro in sacchi di PE da 5 kg o sacchi in foglio di alluminio, quindi sigillato in cartoni da esportazione accompagnati dalla documentazione completa del lotto (COA, SDS disponibili secondo i requisiti dell\'ordine).' }
        ],
        deepDiveLabel: 'Dettagli garanzia qualità',
        deepDiveHref: '/quality-assurance',
      },
      pt: {
        eyebrow: 'Fase 06 · QC e Embalagem',
        title: 'Verificado, Selado, Pronto para Exportação',
        description: 'Cada lote passa por um rigoroso controle de qualidade para garantir consistência e segurança de grau farmacêutico.',
        detailedSteps: [
          { title: 'Equipamentos de Análise', text: 'Utilizamos equipamentos de Cromatografia Líquida de Alta Eficiência (HPLC) internos para o perfil preciso de canabinoides e análise de potência.' },
          { title: 'Embalagem', text: 'O produto é embalado com segurança em sacos de PE de 5 kg ou sacos de folha de alumínio, depois selado em caixas de exportação acompanhadas da documentação completa do lote (COA, SDS disponíveis conforme requisitos do pedido).' }
        ],
        deepDiveLabel: 'Detalhes de garantia de qualidade',
        deepDiveHref: '/quality-assurance',
      },
      ja: {
        eyebrow: 'フェーズ 06 · 品質管理・包装',
        title: '検証済み、密封済み、輸出対応',
        description: 'すべてのバッチが厳格な品質管理を受け、医薬品グレードの一貫性と安全性を確保しています。',
        detailedSteps: [
          { title: '分析機器', text: '自社内にHPLC（高速液体クロマトグラフィー）分析機器を備え、正確なカンナビノイドプロファイリングと含有量分析を行っています。' },
          { title: '包装', text: '製品は5 kg PEバッグまたはアルミ箔バッグに安全に包装され、輸出用カートンに密封されます。完全なバッチドキュメント（COA、SDSは注文要件に応じて提供可能）が付属します。' }
        ],
        deepDiveLabel: '品質保証の詳細',
        deepDiveHref: '/quality-assurance',
      },
      fi: {
        eyebrow: 'Vaihe 06 · Laadunvalvonta ja pakkaus',
        title: 'Varmennettu, sinetöity, vientivalmis',
        description: 'Jokainen erä käy läpi tiukan laadunvalvonnan lääketeollisuuden tason johdonmukaisuuden ja turvallisuuden varmistamiseksi.',
        detailedSteps: [
          { title: 'Testauslaitteet', text: 'Käytämme sisäisesti HPLC-testauslaitteita (korkean suorituskyvyn nestekromatografia) tarkkoihin kannabinoidimäärityksiin ja pitoisuusanalyyseihin.' },
          { title: 'Pakkaus', text: 'Tuote pakataan turvallisesti 5 kg:n PE-pusseihin tai alumiinifolio­pusseihin ja sinetöidään vientilaatikoihin täydellisen eräkohtaisen dokumentaation kera (COA, SDS saatavilla tilausvaatimusten mukaan).' }
        ],
        deepDiveLabel: 'Laadunvarmistuksen tiedot',
        deepDiveHref: '/quality-assurance',
      },
    },
    badges: {
      en: ['HPLC Verified', '5 kg PE / Foil', 'COA per Batch'],
      de: ['HPLC-geprüft', '5 kg PE / Folie', 'CoA je Charge'],
      fr: ['Vérifié par HPLC', '5 kg PE / Aluminium', 'COA par lot'],
      es: ['Verificado por HPLC', '5 kg PE / Aluminio', 'COA por Lote'],
      it: ['Verificato HPLC', '5 kg PE / Alluminio', 'COA per Lotto'],
      pt: ['Verificado por HPLC', '5 kg PE / Alumínio', 'COA por Lote'],
      ja: ['HPLC検証済み', '5 kg PE / アルミ箔', 'バッチごとのCOA'],
      fi: ['HPLC-varmennettu', '5 kg PE / folio', 'COA erää kohti'],
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
    titleLine2: "à l'isolat.",
    subtitle:
      "Six phases. Une chaîne traçable. Chaque lot est cultivé, extrait et vérifié au Yunnan — depuis les cultivars Yunma-13 agréés jusqu'à un isolat de CBD de qualité pharmaceutique ≥99,9%.",
    kpis: [
      { value: '120 j', label: 'Cycle de croissance' },
      { value: '≥99,9%', label: 'Pureté finale' },
      { value: 'HPLC', label: 'Lot vérifié' },
      { value: '6', label: 'Phases contrôlées' },
    ],
    ctaLabel: 'Envoyer une demande',
  },
  es: {
    eyebrow: 'Nuestro Proceso',
    titleLine1: 'De la Semilla',
    titleLine2: 'al Aislado.',
    subtitle:
      'Seis fases. Una cadena trazable. Cada lote cultivado, extraído y verificado en Yunnan — desde cultivares Yunma-13 aprobados por el gobierno hasta CBD isolate de grado farmacéutico con pureza ≥99,9%.',
    kpis: [
      { value: '120 d', label: 'Ciclo de Crecimiento' },
      { value: '≥99,9%', label: 'Pureza Final' },
      { value: 'HPLC', label: 'Lote Verificado' },
      { value: '6', label: 'Fases Controladas' },
    ],
    ctaLabel: 'Enviar Consulta',
  },
  it: {
    eyebrow: 'Il Nostro Processo',
    titleLine1: 'Dal Seme',
    titleLine2: "all'Isolato.",
    subtitle:
      'Sei fasi. Una catena tracciabile. Ogni lotto coltivato, estratto e verificato nello Yunnan — dai cultivar Yunma-13 approvati dal governo al CBD isolate di grado farmaceutico con purezza ≥99,9%.',
    kpis: [
      { value: '120 g', label: 'Ciclo di Crescita' },
      { value: '≥99,9%', label: 'Purezza Finale' },
      { value: 'HPLC', label: 'Lotto Verificato' },
      { value: '6', label: 'Fasi Controllate' },
    ],
    ctaLabel: 'Invia Richiesta',
  },
  pt: {
    eyebrow: 'Nosso Processo',
    titleLine1: 'Da Semente',
    titleLine2: 'ao Isolado.',
    subtitle:
      'Seis fases. Uma cadeia rastreável. Cada lote cultivado, extraído e verificado em Yunnan — desde cultivares Yunma-13 aprovados pelo governo até CBD isolate de grau farmacêutico com pureza ≥99,9%.',
    kpis: [
      { value: '120 d', label: 'Ciclo de Crescimento' },
      { value: '≥99,9%', label: 'Pureza Final' },
      { value: 'HPLC', label: 'Lote Verificado' },
      { value: '6', label: 'Fases Controladas' },
    ],
    ctaLabel: 'Enviar Consulta',
  },
  ja: {
    eyebrow: '製造プロセス',
    titleLine1: '種子から',
    titleLine2: 'アイソレートへ。',
    subtitle:
      '6つのフェーズ。1つのトレーサブルチェーン。すべてのバッチをYunnanで栽培・抽出・検証 — 政府認可のYunma-13品種から純度≥99.9%の医薬品グレードCBDアイソレートまで。',
    kpis: [
      { value: '120日', label: '成長サイクル' },
      { value: '≥99.9%', label: '最終純度' },
      { value: 'HPLC', label: 'バッチ検証' },
      { value: '6', label: '管理フェーズ' },
    ],
    ctaLabel: 'お問い合わせ',
  },
  fi: {
    eyebrow: 'Prosessimme',
    titleLine1: 'Siemenestä',
    titleLine2: 'isolaattiin.',
    subtitle:
      'Kuusi vaihetta. Yksi jäljitettävä ketju. Jokainen erä viljellään, uutetaan ja varmennetaan Yunnanissa — hallituksen hyväksymistä Yunma-13-lajikkeista ≥99,9 %:n lääketeollisuuden tason CBD-isolaattiin.',
    kpis: [
      { value: '120 pv', label: 'Kasvusykli' },
      { value: '≥99,9 %', label: 'Loppupuhtaus' },
      { value: 'HPLC', label: 'Erä varmennettu' },
      { value: '6', label: 'Hallitut vaiheet' },
    ],
    ctaLabel: 'Lähetä tiedustelu',
  },
}
