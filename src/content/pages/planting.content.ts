import type { Locale } from '@/i18n/locales';

export interface PlantingPageStrings {
  badge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroSubtitle: string;
  heroBody: string;
  tags: string[];
  overlayTitle: string;
  overlayLocation: string;
  stats: { value: string; label: string }[];
  introSection: string;
  introTitle1: string;
  introTitle2: string;
  introPara1: string;
  introPara2: string;
  introPara3: string;
  zonesSection: string;
  zonesTitle: string;
  gallerySection: string;
  galleryTitle: string;
  galleryCaption: string;
  traceSection: string;
  traceTitle1: string;
  traceTitle2: string;
  traceBody: string;
  ctaSection: string;
  ctaTitle1: string;
  ctaTitle2: string;
  ctaBody: string;
  requestQuote: string;
  viewSpecs: string;
}

const en: PlantingPageStrings = {
  badge: 'Cultivation & Breeding Center · Chuxiong, Yunnan',
  heroTitle1: 'Grown at Altitude.', heroTitle2: 'Traced to the Source.',
  heroSubtitle: 'Standardized cultivation. Traceable lineage. Yunnan terroir.',
  heroBody: 'Vetrux operates a cultivation and breeding center in Chuxiong, Yunnan Province, focused on standardized, traceable cultivation to support consistent raw material quality.',
  tags: ['Yunnan Province', 'Standardized Cultivation', 'Quality-Oriented', 'Traceable System'],
  overlayTitle: 'Cultivation & Breeding Center', overlayLocation: 'Chuxiong, Yunnan Province',
  stats: [
    { value: 'Yunnan', label: 'Cultivation Base Location' },
    { value: 'Chuxiong', label: 'Breeding Center' },
    { value: 'Standardized', label: 'Cultivation System' },
    { value: 'Traceable', label: 'Supply Chain' },
  ],
  introSection: 'Why Vertical Integration Matters',
  introTitle1: 'The Best Extracts Begin', introTitle2: 'in the Field.',
  introPara1: 'At Vetrux, cultivation management starts with quality-oriented seed selection and follows standardized processes designed to support consistent raw material quality.',
  introPara2: 'The Chuxiong base in Yunnan Province provides favorable growing conditions for hemp cultivation, supporting the production of raw materials for downstream extraction.',
  introPara3: 'From cultivar selection through cultivation management and material handoff to extraction, the system is designed around standardization and traceability.',
  zonesSection: 'Growing Zones', zonesTitle: 'Three Zones. One Controlled Process.',
  gallerySection: 'Field Documentation', galleryTitle: 'Inside the Chuxiong Cultivation Base',
  galleryCaption: 'Real photos from our Yunnan cultivation and breeding center — from seedling propagation through flowering and harvest.',
  traceSection: 'Full Traceability', traceTitle1: 'Seed-to-Isolate', traceTitle2: 'Vertical Integration',
  traceBody: "Vetrux's vertically integrated model means every gram of CBD isolate traces back to a specific greenhouse zone, harvest batch, and extraction run at our Chuxiong facility. No middlemen, no blind spots — just a fully traceable, standardized supply chain.",
  ctaSection: 'Wholesale Inquiry', ctaTitle1: 'Source Directly From', ctaTitle2: 'the Grower.',
  ctaBody: 'Skip the commodity middlemen. Talk to our team about bulk biomass supply, white-label isolate, or custom extraction contracts — all backed by our vertically integrated supply chain.',
  requestQuote: 'Request a Quote', viewSpecs: 'View Product Specs',
};

export const plantingPageStrings: Record<Locale, PlantingPageStrings> = {
  en,
  de: { ...en,
    badge: 'Anbau- & Zuchtzentrum · Chuxiong, Yunnan',
    heroTitle1: 'Angebaut in der Höhe.', heroTitle2: 'Rückverfolgbar bis zur Quelle.',
    heroSubtitle: 'Standardisierter Anbau. Rückverfolgbare Herkunft. Yunnan-Terroir.',
    heroBody: 'Vetrux betreibt ein Anbau- und Zuchtzentrum in Chuxiong, Provinz Yunnan, mit Fokus auf standardisierten, rückverfolgbaren Anbau zur Unterstützung gleichbleibender Rohstoffqualität.',
    tags: ['Provinz Yunnan', 'Standardisierter Anbau', 'Qualitätsorientiert', 'Rückverfolgbares System'],
    overlayTitle: 'Anbau- & Zuchtzentrum', overlayLocation: 'Chuxiong, Provinz Yunnan',
    stats: [
      { value: 'Yunnan', label: 'Standort Anbaubasis' },
      { value: 'Chuxiong', label: 'Zuchtzentrum' },
      { value: 'Standardisiert', label: 'Anbausystem' },
      { value: 'Rückverfolgbar', label: 'Lieferkette' },
    ],
    introSection: 'Warum vertikale Integration wichtig ist',
    introTitle1: 'Die besten Extrakte beginnen', introTitle2: 'auf dem Feld.',
    introPara1: 'Bei Vetrux beginnt das Anbaumanagement mit qualitätsorientierter Saatgutauswahl und folgt standardisierten Prozessen zur Unterstützung gleichbleibender Rohstoffqualität.',
    introPara2: 'Die Basis in Chuxiong, Provinz Yunnan, bietet günstige Anbaubedingungen für den Hanfanbau und unterstützt die Produktion von Rohstoffen für die nachgelagerte Extraktion.',
    introPara3: 'Von der Sortenauswahl über das Anbaumanagement bis zur Materialübergabe an die Extraktion ist das System auf Standardisierung und Rückverfolgbarkeit ausgelegt.',
    zonesSection: 'Anbauzonen', zonesTitle: 'Drei Zonen. Ein kontrollierter Prozess.',
    gallerySection: 'Felddokumentation', galleryTitle: 'Einblick in die Anbaubasis Chuxiong',
    galleryCaption: 'Echte Fotos aus unserem Anbau- und Zuchtzentrum in Yunnan — von der Setzlingsvermehrung bis zur Blüte und Ernte.',
    traceSection: 'Vollständige Rückverfolgbarkeit', traceTitle1: 'Vom Saatgut zum Isolat', traceTitle2: 'Vertikale Integration',
    traceBody: 'Das vertikal integrierte Modell von Vetrux bedeutet, dass jedes Gramm CBD-Isolat auf eine bestimmte Gewächshauszone, Ernte-Charge und Extraktionslauf in unserer Anlage in Chuxiong zurückverfolgt werden kann.',
    ctaSection: 'Großhandelsanfrage', ctaTitle1: 'Direkt vom', ctaTitle2: 'Erzeuger beziehen.',
    ctaBody: 'Sprechen Sie mit unserem Team über Biomasse-Großlieferungen, White-Label-Isolat oder individuelle Extraktionsverträge — alles gestützt durch unsere vertikal integrierte Lieferkette.',
    requestQuote: 'Angebot anfordern', viewSpecs: 'Produktspezifikationen',
  },
  fr: { ...en,
    badge: 'Centre de culture & sélection · Chuxiong, Yunnan',
    heroTitle1: 'Cultivé en altitude.', heroTitle2: 'Tracé jusqu\'à la source.',
    heroSubtitle: 'Culture standardisée. Lignée traçable. Terroir du Yunnan.',
    heroBody: "Vetrux exploite un centre de culture et de sélection à Chuxiong, province du Yunnan, axé sur une culture standardisée et traçable pour soutenir une qualité constante des matières premières.",
    tags: ['Province du Yunnan', 'Culture standardisée', 'Orienté qualité', 'Système traçable'],
    overlayTitle: 'Centre de culture & sélection', overlayLocation: 'Chuxiong, Province du Yunnan',
    stats: [
      { value: 'Yunnan', label: 'Base de culture' },
      { value: 'Chuxiong', label: 'Centre de sélection' },
      { value: 'Standardisé', label: 'Système de culture' },
      { value: 'Traçable', label: 'Chaîne logistique' },
    ],
    introSection: "Pourquoi l'intégration verticale compte",
    introTitle1: 'Les meilleurs extraits commencent', introTitle2: 'au champ.',
    introPara1: "Chez Vetrux, la gestion de la culture commence par une sélection de semences orientée qualité et suit des processus standardisés conçus pour soutenir une qualité constante des matières premières.",
    introPara2: "La base de Chuxiong, dans la province du Yunnan, offre des conditions de culture favorables pour le chanvre, soutenant la production de matières premières pour l'extraction en aval.",
    introPara3: "De la sélection des cultivars à la gestion de la culture et au transfert des matériaux vers l'extraction, le système est conçu autour de la standardisation et de la traçabilité.",
    zonesSection: 'Zones de culture', zonesTitle: 'Trois zones. Un processus contrôlé.',
    gallerySection: 'Documentation terrain', galleryTitle: 'À l\'intérieur de la base de culture de Chuxiong',
    galleryCaption: "Photos réelles de notre centre de culture et de sélection au Yunnan — de la propagation des semis à la floraison et la récolte.",
    traceSection: 'Traçabilité complète', traceTitle1: "De la graine à l'isolat", traceTitle2: 'Intégration verticale',
    traceBody: "Le modèle verticalement intégré de Vetrux signifie que chaque gramme d'isolat CBD est traçable jusqu'à une zone de serre spécifique, un lot de récolte et un cycle d'extraction dans notre installation de Chuxiong.",
    ctaSection: 'Demande de gros', ctaTitle1: "S'approvisionner directement", ctaTitle2: 'auprès du producteur.',
    ctaBody: "Discutez avec notre équipe de l'approvisionnement en biomasse, de l'isolat en marque blanche ou de contrats d'extraction personnalisés — le tout soutenu par notre chaîne d'approvisionnement verticalement intégrée.",
    requestQuote: 'Demander un devis', viewSpecs: 'Voir les spécifications',
  },
  es: { ...en,
    badge: 'Centro de cultivo y mejora · Chuxiong, Yunnan',
    heroTitle1: 'Cultivado en altitud.', heroTitle2: 'Trazado hasta el origen.',
    heroSubtitle: 'Cultivo estandarizado. Linaje trazable. Terroir de Yunnan.',
    heroBody: 'Vetrux opera un centro de cultivo y mejora en Chuxiong, Provincia de Yunnan, enfocado en un cultivo estandarizado y trazable para respaldar una calidad consistente de materias primas.',
    tags: ['Provincia de Yunnan', 'Cultivo estandarizado', 'Orientado a la calidad', 'Sistema trazable'],
    overlayTitle: 'Centro de cultivo y mejora', overlayLocation: 'Chuxiong, Provincia de Yunnan',
    stats: [
      { value: 'Yunnan', label: 'Base de cultivo' },
      { value: 'Chuxiong', label: 'Centro de mejora' },
      { value: 'Estandarizado', label: 'Sistema de cultivo' },
      { value: 'Trazable', label: 'Cadena de suministro' },
    ],
    introSection: 'Por qué importa la integración vertical',
    introTitle1: 'Los mejores extractos comienzan', introTitle2: 'en el campo.',
    zonesSection: 'Zonas de cultivo', zonesTitle: 'Tres zonas. Un proceso controlado.',
    gallerySection: 'Documentación de campo', galleryTitle: 'Dentro de la base de cultivo de Chuxiong',
    galleryCaption: 'Fotos reales de nuestro centro de cultivo y mejora en Yunnan — desde la propagación de plántulas hasta la floración y cosecha.',
    traceSection: 'Trazabilidad completa', traceTitle1: 'De la semilla al aislado', traceTitle2: 'Integración vertical',
    ctaSection: 'Consulta mayorista', ctaTitle1: 'Abastézcase directamente', ctaTitle2: 'del productor.',
    ctaBody: 'Hable con nuestro equipo sobre suministro de biomasa a granel, aislado de marca blanca o contratos de extracción personalizados — todo respaldado por nuestra cadena de suministro verticalmente integrada.',
    requestQuote: 'Solicitar cotización', viewSpecs: 'Ver especificaciones',
  },
  it: { ...en,
    badge: 'Centro di coltivazione e selezione · Chuxiong, Yunnan',
    heroTitle1: 'Coltivato in altitudine.', heroTitle2: 'Tracciato fino alla fonte.',
    heroSubtitle: 'Coltivazione standardizzata. Lignaggio tracciabile. Terroir dello Yunnan.',
    heroBody: 'Vetrux gestisce un centro di coltivazione e selezione a Chuxiong, Provincia dello Yunnan, focalizzato su una coltivazione standardizzata e tracciabile per supportare una qualità costante delle materie prime.',
    tags: ['Provincia dello Yunnan', 'Coltivazione standardizzata', 'Orientato alla qualità', 'Sistema tracciabile'],
    overlayTitle: 'Centro di coltivazione e selezione', overlayLocation: 'Chuxiong, Provincia dello Yunnan',
    stats: [
      { value: 'Yunnan', label: 'Base di coltivazione' },
      { value: 'Chuxiong', label: 'Centro di selezione' },
      { value: 'Standardizzato', label: 'Sistema di coltivazione' },
      { value: 'Tracciabile', label: 'Catena di fornitura' },
    ],
    introSection: "Perché l'integrazione verticale conta",
    introTitle1: 'I migliori estratti iniziano', introTitle2: 'nel campo.',
    zonesSection: 'Zone di coltivazione', zonesTitle: 'Tre zone. Un processo controllato.',
    gallerySection: 'Documentazione sul campo', galleryTitle: 'Dentro la base di coltivazione di Chuxiong',
    galleryCaption: 'Foto reali dal nostro centro di coltivazione e selezione nello Yunnan — dalla propagazione delle piantine alla fioritura e al raccolto.',
    traceSection: 'Tracciabilità completa', traceTitle1: 'Dal seme all\'isolato', traceTitle2: 'Integrazione verticale',
    ctaSection: 'Richiesta ingrosso', ctaTitle1: 'Approvvigionatevi direttamente', ctaTitle2: 'dal produttore.',
    requestQuote: 'Richiedi preventivo', viewSpecs: 'Vedi specifiche',
  },
  pt: { ...en,
    badge: 'Centro de cultivo e melhoramento · Chuxiong, Yunnan',
    heroTitle1: 'Cultivado em altitude.', heroTitle2: 'Rastreado até a origem.',
    heroSubtitle: 'Cultivo padronizado. Linhagem rastreável. Terroir de Yunnan.',
    heroBody: 'A Vetrux opera um centro de cultivo e melhoramento em Chuxiong, Província de Yunnan, focado em cultivo padronizado e rastreável para apoiar a qualidade consistente das matérias-primas.',
    tags: ['Província de Yunnan', 'Cultivo padronizado', 'Orientado à qualidade', 'Sistema rastreável'],
    overlayTitle: 'Centro de cultivo e melhoramento', overlayLocation: 'Chuxiong, Província de Yunnan',
    stats: [
      { value: 'Yunnan', label: 'Base de cultivo' },
      { value: 'Chuxiong', label: 'Centro de melhoramento' },
      { value: 'Padronizado', label: 'Sistema de cultivo' },
      { value: 'Rastreável', label: 'Cadeia de suprimentos' },
    ],
    introSection: 'Por que a integração vertical importa',
    introTitle1: 'Os melhores extratos começam', introTitle2: 'no campo.',
    zonesSection: 'Zonas de cultivo', zonesTitle: 'Três zonas. Um processo controlado.',
    gallerySection: 'Documentação de campo', galleryTitle: 'Dentro da base de cultivo de Chuxiong',
    galleryCaption: 'Fotos reais do nosso centro de cultivo e melhoramento em Yunnan — da propagação de mudas à floração e colheita.',
    traceSection: 'Rastreabilidade completa', traceTitle1: 'Da semente ao isolado', traceTitle2: 'Integração vertical',
    ctaSection: 'Consulta atacado', ctaTitle1: 'Abasteça-se diretamente', ctaTitle2: 'do produtor.',
    requestQuote: 'Solicitar cotação', viewSpecs: 'Ver especificações',
  },
  ja: { ...en,
    badge: '栽培・育種センター · Chuxiong, Yunnan',
    heroTitle1: '高地で栽培。', heroTitle2: '原点まで追跡可能。',
    heroSubtitle: '標準化された栽培。追跡可能な系統。Yunnanのテロワール。',
    heroBody: 'Vetruxは中国Yunnan省Chuxiongにて栽培・育種センターを運営し、一貫した原料品質を支える標準化・トレーサブルな栽培に注力しています。',
    tags: ['Yunnan省', '標準化栽培', '品質重視', 'トレーサブルシステム'],
    overlayTitle: '栽培・育種センター', overlayLocation: 'Chuxiong, Yunnan省',
    stats: [
      { value: 'Yunnan', label: '栽培基地所在地' },
      { value: 'Chuxiong', label: '育種センター' },
      { value: '標準化', label: '栽培システム' },
      { value: 'トレーサブル', label: 'サプライチェーン' },
    ],
    introSection: '垂直統合が重要な理由',
    introTitle1: '最高の抽出物は', introTitle2: '圃場から始まります。',
    introPara1: 'Vetruxの栽培管理は品質重視の種子選定から始まり、一貫した原料品質を支える標準化されたプロセスに従っています。',
    introPara2: 'Yunnan省Chuxiongの基地は、ヘンプ栽培に適した環境を提供し、下流の抽出に向けた原料生産を支えています。',
    introPara3: '品種選定から栽培管理、抽出への素材引き渡しまで、システムは標準化とトレーサビリティを中心に設計されています。',
    zonesSection: '栽培ゾーン', zonesTitle: '3つのゾーン。1つの管理されたプロセス。',
    gallerySection: 'フィールドドキュメンテーション', galleryTitle: 'Chuxiong栽培基地の内部',
    galleryCaption: 'Yunnanの栽培・育種センターからの実際の写真 — 苗の繁殖から開花、収穫まで。',
    traceSection: '完全なトレーサビリティ', traceTitle1: '種子からアイソレートへ', traceTitle2: '垂直統合',
    traceBody: 'Vetruxの垂直統合モデルにより、すべてのCBDアイソレートはChuxiong施設の特定の温室ゾーン、収穫バッチ、抽出ランまで追跡可能です。',
    ctaSection: '卸売お問い合わせ', ctaTitle1: '生産者から', ctaTitle2: '直接調達。',
    ctaBody: 'バルクバイオマス供給、ホワイトラベルアイソレート、カスタム抽出契約について当社チームにご相談ください — すべて垂直統合サプライチェーンに支えられています。',
    requestQuote: '見積もりをリクエスト', viewSpecs: '製品仕様を見る',
  },
  fi: { ...en,
    badge: 'Viljely- ja jalostuskeskus · Chuxiong, Yunnan',
    heroTitle1: 'Kasvatettu korkeudessa.', heroTitle2: 'Jäljitetty lähteelle.',
    heroSubtitle: 'Standardoitu viljely. Jäljitettävä alkuperä. Yunnanin terroir.',
    heroBody: 'Vetrux operoi viljely- ja jalostuskeskusta Chuxiongissa, Yunnanin maakunnassa, keskittyen standardoituun ja jäljitettävään viljelyyn johdonmukaisen raaka-ainelaadun tukemiseksi.',
    tags: ['Yunnanin maakunta', 'Standardoitu viljely', 'Laatusuuntautunut', 'Jäljitettävä järjestelmä'],
    overlayTitle: 'Viljely- ja jalostuskeskus', overlayLocation: 'Chuxiong, Yunnanin maakunta',
    stats: [
      { value: 'Yunnan', label: 'Viljelyalueen sijainti' },
      { value: 'Chuxiong', label: 'Jalostuskeskus' },
      { value: 'Standardoitu', label: 'Viljelyjärjestelmä' },
      { value: 'Jäljitettävä', label: 'Toimitusketju' },
    ],
    introSection: 'Miksi vertikaalinen integraatio on tärkeää',
    introTitle1: 'Parhaat uutteet alkavat', introTitle2: 'pellolta.',
    introPara1: 'Vetruxin viljelynhallinta alkaa laatusuuntautuneesta siementen valinnasta ja noudattaa standardoituja prosesseja johdonmukaisen raaka-ainelaadun tukemiseksi.',
    introPara2: 'Chuxiongin alue Yunnanin maakunnassa tarjoaa suotuisat kasvuolosuhteet hampun viljelylle, tukien raaka-aineiden tuotantoa jatkojalostusta varten.',
    introPara3: 'Lajikkeen valinnasta viljelynhallinnan kautta materiaalin luovutukseen uuttoon, järjestelmä on suunniteltu standardoinnin ja jäljitettävyyden ympärille.',
    zonesSection: 'Viljelyvyöhykkeet', zonesTitle: 'Kolme vyöhykettä. Yksi hallittu prosessi.',
    gallerySection: 'Kenttädokumentaatio', galleryTitle: 'Chuxiongin viljelyalueen sisällä',
    galleryCaption: 'Aitoja kuvia Yunnanin viljely- ja jalostuskeskuksestamme — taimien lisäyksestä kukintaan ja sadonkorjuuseen.',
    traceSection: 'Täydellinen jäljitettävyys', traceTitle1: 'Siemenestä isolaattiin', traceTitle2: 'Vertikaalinen integraatio',
    traceBody: 'Vetruxin vertikaalisesti integroitu malli tarkoittaa, että jokainen gramma CBD-isolaattia on jäljitettävissä tiettyyn kasvihuonevyöhykkeeseen, satoerään ja uuttoajoon Chuxiongin laitoksellamme.',
    ctaSection: 'Tukkutiedustelu', ctaTitle1: 'Hanki suoraan', ctaTitle2: 'viljelijältä.',
    ctaBody: 'Keskustele tiimimme kanssa tukkubiomassatoimituksista, white label -isolaatista tai räätälöidyistä uuttosopimuksista — kaikki vertikaalisesti integroidun toimitusketjumme tukemana.',
    requestQuote: 'Pyydä tarjous', viewSpecs: 'Katso tuotetiedot',
  },
};
