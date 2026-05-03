'use client'

import type { Locale } from '@/i18n/locales';

interface AboutPageClientProps {
  locale?: Locale;
}

const content: Record<string, Record<string, string>> = {
  en: {
    eyebrow: 'About Us',
    title: 'About',
    titleAccent: 'VETRUX',
    intro: 'VETRUX is the international brand operated by Vetrux Biotechnology (Chuxiong) Co., Ltd. (\u201cthe Company\u201d), a vertically integrated CBD isolate manufacturer based in Chuxiong, Yunnan Province, China. The Company specializes in CBD raw material sales, OEM/ODM services, and technical consulting.',
    missionTitle: 'Our Mission',
    missionText: 'Through rigorous quality management, standardized hemp cultivation, and professional extraction processes, VETRUX delivers reliable CBD raw materials to partners worldwide. Our vertically integrated model \u2014 from seed selection to finished product \u2014 ensures full traceability, consistent quality, and competitive pricing. We also provide OEM/ODM services and technical consulting to help our clients develop and scale their own product lines.',
    viTitle: 'Vertical Integration',
    cultivationTitle: 'Hemp Cultivation',
    cultivationText: 'Standardized cultivation base in Chuxiong, Yunnan Province, with controlled growing conditions and full seed-to-harvest traceability. Yunnan is one of China\u2019s premier regions for industrial hemp cultivation.',
    extractionTitle: 'Extraction & Purification',
    extractionText: 'Professional extraction facility equipped with 20 extraction tanks, 26 chromatography columns, 10 concentrators, and automated production systems, dedicated to CBD isolate production.',
    qcTitle: 'Quality Control',
    qcText: 'In-house quality control laboratory with HPLC instrumentation for potency and purity analysis. Every batch undergoes comprehensive testing to ensure consistent product quality and regulatory compliance.',
    oemTitle: 'OEM/ODM & Technical Consulting',
    oemText: 'Full-service OEM/ODM capabilities for custom formulations and private-label products. Technical consulting services to support clients with product development, process optimization, and regulatory guidance.',
    profileTitle: 'Company Profile',
    brand: 'VETRUX',
    brandLabel: 'Brand',
    enNameLabel: 'English Name',
    enName: 'Vetrux Biotechnology (Chuxiong) Co., Ltd.',
    cnNameLabel: 'Chinese Name',
    cnName: '\u84d4\u8403\u751f\u7269\u79d1\u6280\uff08\u695a\u96c4\uff09\u6709\u9650\u516c\u53f8',
    locationLabel: 'Location',
    location: 'Chuxiong, Yunnan Province, China',
    coreLabel: 'Core Business',
    core: 'CBD raw material sales, OEM/ODM, technical consulting',
    productsLabel: 'Products',
    products: 'CBD Isolate',
    equipmentLabel: 'Equipment',
    equipment: '20 extraction tanks, 26 chromatography columns, 10 concentrators, HPLC, automation',
    inquiryLabel: 'Inquiry Email',
    salesLabel: 'Sales Email',
  },
  de: {
    eyebrow: '\u00dcber uns',
    title: '\u00dcber',
    titleAccent: 'VETRUX',
    intro: 'VETRUX ist die internationale Marke, betrieben von Vetrux Biotechnology (Chuxiong) Co., Ltd. (\u201edas Unternehmen\u201c), einem vertikal integrierten CBD-Isolat-Hersteller mit Sitz in Chuxiong, Provinz Yunnan, China. Das Unternehmen ist spezialisiert auf den Verkauf von CBD-Rohstoffen, OEM/ODM-Dienstleistungen und technische Beratung.',
    missionTitle: 'Unsere Mission',
    missionText: 'Durch rigoroses Qualit\u00e4tsmanagement, standardisierten Hanfanbau und professionelle Extraktionsprozesse liefert VETRUX zuverl\u00e4ssige CBD-Rohstoffe an Partner weltweit. Unser vertikal integriertes Modell \u2014 von der Saatgutauswahl bis zum Endprodukt \u2014 gew\u00e4hrleistet vollst\u00e4ndige R\u00fcckverfolgbarkeit, gleichbleibende Qualit\u00e4t und wettbewerbsf\u00e4hige Preise.',
    viTitle: 'Vertikale Integration',
    cultivationTitle: 'Hanfanbau',
    cultivationText: 'Standardisierte Anbaubasis in Chuxiong, Provinz Yunnan, mit kontrollierten Wachstumsbedingungen und vollst\u00e4ndiger R\u00fcckverfolgbarkeit vom Saatgut bis zur Ernte.',
    extractionTitle: 'Extraktion & Reinigung',
    extractionText: 'Professionelle Extraktionsanlage ausgestattet mit 20 Extraktionstanks, 26 Chromatographies\u00e4ulen, 10 Konzentratoren und automatisierten Produktionssystemen.',
    qcTitle: 'Qualit\u00e4tskontrolle',
    qcText: 'Hauseigenes Qualit\u00e4tskontrolllabor mit HPLC-Instrumentierung f\u00fcr Potenz- und Reinheitsanalysen.',
    oemTitle: 'OEM/ODM & Technische Beratung',
    oemText: 'Umfassende OEM/ODM-Kapazit\u00e4ten f\u00fcr kundenspezifische Formulierungen und Eigenmarkenprodukte.',
    profileTitle: 'Unternehmensprofil',
    brand: 'VETRUX',
    brandLabel: 'Marke',
    enNameLabel: 'Englischer Name',
    enName: 'Vetrux Biotechnology (Chuxiong) Co., Ltd.',
    cnNameLabel: 'Chinesischer Name',
    cnName: '\u84d4\u8403\u751f\u7269\u79d1\u6280\uff08\u695a\u96c4\uff09\u6709\u9650\u516c\u53f8',
    locationLabel: 'Standort',
    location: 'Chuxiong, Provinz Yunnan, China',
    coreLabel: 'Kerngesch\u00e4ft',
    core: 'CBD-Rohstoffverkauf, OEM/ODM, technische Beratung',
    productsLabel: 'Produkte',
    products: 'CBD-Isolat',
    equipmentLabel: 'Ausr\u00fcstung',
    equipment: '20 Extraktionstanks, 26 Chromatographies\u00e4ulen, 10 Konzentratoren, HPLC, Automatisierung',
    inquiryLabel: 'Anfrage-E-Mail',
    salesLabel: 'Vertriebs-E-Mail',
  },
  fr: {
    eyebrow: '\u00c0 propos',
    title: '\u00c0 propos de',
    titleAccent: 'VETRUX',
    intro: "VETRUX est la marque internationale exploit\u00e9e par Vetrux Biotechnology (Chuxiong) Co., Ltd. (\u00ab la Soci\u00e9t\u00e9 \u00bb), un fabricant d'isolat CBD verticalement int\u00e9gr\u00e9 bas\u00e9 \u00e0 Chuxiong, province du Yunnan, Chine.",
    missionTitle: 'Notre Mission',
    missionText: "Gr\u00e2ce \u00e0 une gestion rigoureuse de la qualit\u00e9, une culture standardis\u00e9e du chanvre et des processus d'extraction professionnels, VETRUX fournit des mati\u00e8res premi\u00e8res CBD fiables \u00e0 des partenaires du monde entier.",
    viTitle: 'Int\u00e9gration Verticale',
    cultivationTitle: 'Culture du Chanvre',
    cultivationText: "Base de culture standardis\u00e9e \u00e0 Chuxiong, province du Yunnan, avec des conditions de croissance contr\u00f4l\u00e9es et une tra\u00e7abilit\u00e9 compl\u00e8te de la semence \u00e0 la r\u00e9colte.",
    extractionTitle: 'Extraction & Purification',
    extractionText: "Installation d'extraction professionnelle \u00e9quip\u00e9e de 20 cuves d'extraction, 26 colonnes de chromatographie, 10 concentrateurs et syst\u00e8mes de production automatis\u00e9s.",
    qcTitle: 'Contr\u00f4le Qualit\u00e9',
    qcText: "Laboratoire de contr\u00f4le qualit\u00e9 interne avec instrumentation HPLC pour l'analyse de puissance et de puret\u00e9.",
    oemTitle: 'OEM/ODM & Conseil Technique',
    oemText: "Capacit\u00e9s OEM/ODM compl\u00e8tes pour les formulations personnalis\u00e9es et les produits en marque blanche.",
    profileTitle: "Profil de l'Entreprise",
    brand: 'VETRUX',
    brandLabel: 'Marque',
    enNameLabel: 'Nom Anglais',
    enName: 'Vetrux Biotechnology (Chuxiong) Co., Ltd.',
    cnNameLabel: 'Nom Chinois',
    cnName: '\u84d4\u8403\u751f\u7269\u79d1\u6280\uff08\u695a\u96c4\uff09\u6709\u9650\u516c\u53f8',
    locationLabel: 'Localisation',
    location: 'Chuxiong, Province du Yunnan, Chine',
    coreLabel: 'Activit\u00e9 Principale',
    core: "Vente de mati\u00e8res premi\u00e8res CBD, OEM/ODM, conseil technique",
    productsLabel: 'Produits',
    products: 'Isolat de CBD',
    equipmentLabel: '\u00c9quipement',
    equipment: "20 cuves d'extraction, 26 colonnes de chromatographie, 10 concentrateurs, HPLC, automatisation",
    inquiryLabel: 'E-mail de Demande',
    salesLabel: 'E-mail Commercial',
  },
  es: {
    eyebrow: 'Sobre Nosotros',
    title: 'Sobre',
    titleAccent: 'VETRUX',
    intro: 'VETRUX es la marca internacional operada por Vetrux Biotechnology (Chuxiong) Co., Ltd. (\u201cla Empresa\u201d), un fabricante de CBD isolate verticalmente integrado con sede en Chuxiong, Provincia de Yunnan, China. La empresa se especializa en la venta de materias primas CBD, servicios OEM/ODM y consultoría técnica.',
    missionTitle: 'Nuestra Misión',
    missionText: 'A través de una rigurosa gestión de calidad, cultivo estandarizado de cáñamo y procesos de extracción profesionales, VETRUX entrega materias primas CBD fiables a socios en todo el mundo. Nuestro modelo verticalmente integrado \u2014 desde la selección de semillas hasta el producto terminado \u2014 garantiza trazabilidad completa, calidad consistente y precios competitivos.',
    viTitle: 'Integración Vertical',
    cultivationTitle: 'Cultivo de Cáñamo',
    cultivationText: 'Base de cultivo estandarizada en Chuxiong, Provincia de Yunnan, con condiciones de crecimiento controladas y trazabilidad completa de semilla a cosecha.',
    extractionTitle: 'Extracción y Purificación',
    extractionText: 'Instalación de extracción profesional equipada con 20 tanques de extracción, 26 columnas de cromatografía, 10 concentradores y sistemas de producción automatizados.',
    qcTitle: 'Control de Calidad',
    qcText: 'Laboratorio de control de calidad interno con instrumentación HPLC para análisis de potencia y pureza.',
    oemTitle: 'OEM/ODM y Consultoría Técnica',
    oemText: 'Capacidades completas de OEM/ODM para formulaciones personalizadas y productos de marca privada.',
    profileTitle: 'Perfil de la Empresa',
    brand: 'VETRUX',
    brandLabel: 'Marca',
    enNameLabel: 'Nombre en Inglés',
    enName: 'Vetrux Biotechnology (Chuxiong) Co., Ltd.',
    cnNameLabel: 'Nombre en Chino',
    cnName: '\u84d4\u8403\u751f\u7269\u79d1\u6280\uff08\u695a\u96c4\uff09\u6709\u9650\u516c\u53f8',
    locationLabel: 'Ubicación',
    location: 'Chuxiong, Provincia de Yunnan, China',
    coreLabel: 'Negocio Principal',
    core: 'Venta de materias primas CBD, OEM/ODM, consultoría técnica',
    productsLabel: 'Productos',
    products: 'CBD Isolate',
    equipmentLabel: 'Equipos',
    equipment: '20 tanques de extracción, 26 columnas de cromatografía, 10 concentradores, HPLC, automatización',
    inquiryLabel: 'Email de Consulta',
    salesLabel: 'Email de Ventas',
  },
  it: {
    eyebrow: 'Chi Siamo',
    title: 'Chi è',
    titleAccent: 'VETRUX',
    intro: 'VETRUX è il marchio internazionale gestito da Vetrux Biotechnology (Chuxiong) Co., Ltd. (\u201cla Società\u201d), un produttore di CBD isolate verticalmente integrato con sede a Chuxiong, Provincia dello Yunnan, Cina. La società è specializzata nella vendita di materie prime CBD, servizi OEM/ODM e consulenza tecnica.',
    missionTitle: 'La Nostra Missione',
    missionText: 'Attraverso una rigorosa gestione della qualità, coltivazione standardizzata della canapa e processi di estrazione professionali, VETRUX fornisce materie prime CBD affidabili a partner in tutto il mondo. Il nostro modello verticalmente integrato \u2014 dalla selezione dei semi al prodotto finito \u2014 garantisce tracciabilità completa, qualità costante e prezzi competitivi.',
    viTitle: 'Integrazione Verticale',
    cultivationTitle: 'Coltivazione della Canapa',
    cultivationText: 'Base di coltivazione standardizzata a Chuxiong, Provincia dello Yunnan, con condizioni di crescita controllate e tracciabilità completa dal seme al raccolto.',
    extractionTitle: 'Estrazione e Purificazione',
    extractionText: 'Impianto di estrazione professionale dotato di 20 serbatoi di estrazione, 26 colonne cromatografiche, 10 concentratori e sistemi di produzione automatizzati.',
    qcTitle: 'Controllo Qualità',
    qcText: 'Laboratorio di controllo qualità interno con strumentazione HPLC per analisi di potenza e purezza.',
    oemTitle: 'OEM/ODM e Consulenza Tecnica',
    oemText: 'Capacità OEM/ODM complete per formulazioni personalizzate e prodotti a marchio privato.',
    profileTitle: 'Profilo Aziendale',
    brand: 'VETRUX',
    brandLabel: 'Marchio',
    enNameLabel: 'Nome Inglese',
    enName: 'Vetrux Biotechnology (Chuxiong) Co., Ltd.',
    cnNameLabel: 'Nome Cinese',
    cnName: '\u84d4\u8403\u751f\u7269\u79d1\u6280\uff08\u695a\u96c4\uff09\u6709\u9650\u516c\u53f8',
    locationLabel: 'Sede',
    location: 'Chuxiong, Provincia dello Yunnan, Cina',
    coreLabel: 'Attività Principale',
    core: 'Vendita materie prime CBD, OEM/ODM, consulenza tecnica',
    productsLabel: 'Prodotti',
    products: 'CBD Isolate',
    equipmentLabel: 'Attrezzature',
    equipment: '20 serbatoi di estrazione, 26 colonne cromatografiche, 10 concentratori, HPLC, automazione',
    inquiryLabel: 'Email Richieste',
    salesLabel: 'Email Commerciale',
  },
  pt: {
    eyebrow: 'Sobre Nós',
    title: 'Sobre a',
    titleAccent: 'VETRUX',
    intro: 'VETRUX é a marca internacional operada pela Vetrux Biotechnology (Chuxiong) Co., Ltd. (\u201ca Empresa\u201d), um fabricante de CBD isolate verticalmente integrado com sede em Chuxiong, Província de Yunnan, China. A empresa é especializada na venda de matérias-primas CBD, serviços OEM/ODM e consultoria técnica.',
    missionTitle: 'Nossa Missão',
    missionText: 'Por meio de uma gestão rigorosa de qualidade, cultivo padronizado de cânhamo e processos de extração profissionais, a VETRUX entrega matérias-primas CBD confiáveis a parceiros em todo o mundo. Nosso modelo verticalmente integrado \u2014 da seleção de sementes ao produto acabado \u2014 garante rastreabilidade completa, qualidade consistente e preços competitivos.',
    viTitle: 'Integração Vertical',
    cultivationTitle: 'Cultivo de Cânhamo',
    cultivationText: 'Base de cultivo padronizada em Chuxiong, Província de Yunnan, com condições de crescimento controladas e rastreabilidade completa da semente à colheita.',
    extractionTitle: 'Extração e Purificação',
    extractionText: 'Instalação de extração profissional equipada com 20 tanques de extração, 26 colunas de cromatografia, 10 concentradores e sistemas de produção automatizados.',
    qcTitle: 'Controle de Qualidade',
    qcText: 'Laboratório de controle de qualidade interno com instrumentação HPLC para análise de potência e pureza.',
    oemTitle: 'OEM/ODM e Consultoria Técnica',
    oemText: 'Capacidades completas de OEM/ODM para formulações personalizadas e produtos de marca própria.',
    profileTitle: 'Perfil da Empresa',
    brand: 'VETRUX',
    brandLabel: 'Marca',
    enNameLabel: 'Nome em Inglês',
    enName: 'Vetrux Biotechnology (Chuxiong) Co., Ltd.',
    cnNameLabel: 'Nome em Chinês',
    cnName: '\u84d4\u8403\u751f\u7269\u79d1\u6280\uff08\u695a\u96c4\uff09\u6709\u9650\u516c\u53f8',
    locationLabel: 'Localização',
    location: 'Chuxiong, Província de Yunnan, China',
    coreLabel: 'Negócio Principal',
    core: 'Venda de matérias-primas CBD, OEM/ODM, consultoria técnica',
    productsLabel: 'Produtos',
    products: 'CBD Isolate',
    equipmentLabel: 'Equipamentos',
    equipment: '20 tanques de extração, 26 colunas de cromatografia, 10 concentradores, HPLC, automação',
    inquiryLabel: 'Email de Consulta',
    salesLabel: 'Email de Vendas',
  },
  ja: {
    eyebrow: '会社概要',
    title: '',
    titleAccent: 'VETRUX',
    intro: 'VETRUXは、Vetrux Biotechnology (Chuxiong) Co., Ltd.（以下「当社」）が運営する国際ブランドです。当社は中国Yunnan省Chuxiong市に拠点を置く垂直統合型CBDアイソレートメーカーであり、CBD原料販売、OEM/ODMサービス、技術コンサルティングを専門としています。',
    missionTitle: '当社のミッション',
    missionText: '厳格な品質管理、標準化されたヘンプ栽培、専門的な抽出プロセスを通じて、VETRUXは世界中のパートナーに信頼性の高いCBD原料を提供しています。種子選定から完成品までの垂直統合モデルにより、完全なトレーサビリティ、一貫した品質、競争力のある価格を実現しています。',
    viTitle: '垂直統合',
    cultivationTitle: 'ヘンプ栽培',
    cultivationText: 'Yunnan省Chuxiongの標準化された栽培基地。管理された栽培条件と種子から収穫までの完全なトレーサビリティを備えています。',
    extractionTitle: '抽出・精製',
    extractionText: '抽出タンク20基、クロマトグラフィーカラム26本、濃縮器10台、自動化生産システムを備えた専門的な抽出施設です。',
    qcTitle: '品質管理',
    qcText: 'HPLC分析機器を備えた自社品質管理ラボラトリーにて、含有量と純度の分析を実施しています。',
    oemTitle: 'OEM/ODM・技術コンサルティング',
    oemText: 'カスタム処方やプライベートラベル製品に対応するフルサービスのOEM/ODM体制を整えています。',
    profileTitle: '会社プロフィール',
    brand: 'VETRUX',
    brandLabel: 'ブランド',
    enNameLabel: '英語名',
    enName: 'Vetrux Biotechnology (Chuxiong) Co., Ltd.',
    cnNameLabel: '中国語名',
    cnName: '\u84d4\u8403\u751f\u7269\u79d1\u6280\uff08\u695a\u96c4\uff09\u6709\u9650\u516c\u53f8',
    locationLabel: '所在地',
    location: '中国 Yunnan省 Chuxiong市',
    coreLabel: '主要事業',
    core: 'CBD原料販売、OEM/ODM、技術コンサルティング',
    productsLabel: '製品',
    products: 'CBD Isolate',
    equipmentLabel: '設備',
    equipment: '抽出タンク20基、クロマトグラフィーカラム26本、濃縮器10台、HPLC、自動制御',
    inquiryLabel: 'お問い合わせメール',
    salesLabel: '営業メール',
  },
  fi: {
    eyebrow: 'Tietoa meistä',
    title: 'Tietoa',
    titleAccent: 'VETRUX',
    intro: 'VETRUX on Vetrux Biotechnology (Chuxiong) Co., Ltd:n (\u201dYhtiö\u201d) operoima kansainvälinen brändi. Yhtiö on vertikaalisesti integroitu CBD-isolaatin valmistaja, jonka kotipaikka on Chuxiong, Yunnanin maakunta, Kiina. Yhtiö on erikoistunut CBD-raaka-aineiden myyntiin, OEM/ODM-palveluihin ja tekniseen konsultointiin.',
    missionTitle: 'Missiomme',
    missionText: 'Tiukan laadunhallinnan, standardoidun hampunviljelyn ja ammattimaisten uuttoprosessien avulla VETRUX toimittaa luotettavia CBD-raaka-aineita kumppaneille maailmanlaajuisesti. Vertikaalisesti integroitu mallimme \u2014 siementen valinnasta valmiiseen tuotteeseen \u2014 takaa täydellisen jäljitettävyyden, tasaisen laadun ja kilpailukykyisen hinnoittelun.',
    viTitle: 'Vertikaalinen integraatio',
    cultivationTitle: 'Hampun viljely',
    cultivationText: 'Standardoitu viljelyalue Chuxiongissa, Yunnanin maakunnassa, kontrolloiduilla kasvuolosuhteilla ja täydellisellä jäljitettävyydellä siemenestä satoon.',
    extractionTitle: 'Uutto ja puhdistus',
    extractionText: 'Ammattimainen uuttolaitos, joka on varustettu 20 uuttosäiliöllä, 26 kromatografiakolumnilla, 10 konsentraattorilla ja automatisoiduilla tuotantojärjestelmillä.',
    qcTitle: 'Laadunvalvonta',
    qcText: 'Sisäinen laadunvalvontalaboratorio HPLC-laitteistolla pitoisuus- ja puhtausanalyyseihin.',
    oemTitle: 'OEM/ODM ja tekninen konsultointi',
    oemText: 'Kattavat OEM/ODM-valmiudet räätälöityihin formulaatioihin ja private label -tuotteisiin.',
    profileTitle: 'Yritysprofiili',
    brand: 'VETRUX',
    brandLabel: 'Brändi',
    enNameLabel: 'Englanninkielinen nimi',
    enName: 'Vetrux Biotechnology (Chuxiong) Co., Ltd.',
    cnNameLabel: 'Kiinankielinen nimi',
    cnName: '\u84d4\u8403\u751f\u7269\u79d1\u6280\uff08\u695a\u96c4\uff09\u6709\u9650\u516c\u53f8',
    locationLabel: 'Sijainti',
    location: 'Chuxiong, Yunnanin maakunta, Kiina',
    coreLabel: 'Ydinliiketoiminta',
    core: 'CBD-raaka-aineiden myynti, OEM/ODM, tekninen konsultointi',
    productsLabel: 'Tuotteet',
    products: 'CBD Isolate',
    equipmentLabel: 'Laitteet',
    equipment: '20 uuttosäiliötä, 26 kromatografiakolumnia, 10 konsentraattoria, HPLC, automaatio',
    inquiryLabel: 'Tiedustelu­sähköposti',
    salesLabel: 'Myynti­sähköposti',
  },
};

function getContent(locale: string): Record<string, string> {
  return content[locale] ?? content.en;
}

export default function AboutPageClient({ locale = 'en' }: AboutPageClientProps) {
  const t = getContent(locale);

  return (
    <div className="bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-6">{t.eyebrow}</p>
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-on-background tracking-tight leading-[1.0] mb-6">
          {t.title} <span className="italic text-primary">{t.titleAccent}</span>
        </h1>
        <p className="text-[15px] text-on-surface-variant leading-relaxed max-w-2xl mb-16">
          {t.intro}
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">{t.missionTitle}</h2>
          <p className="text-[15px] text-on-surface-variant leading-relaxed mb-4">
            {t.missionText}
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">{t.viTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-low p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200">
              <h3 className="text-[15px] font-serif font-medium text-on-background tracking-tight mb-2">{t.cultivationTitle}</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">{t.cultivationText}</p>
            </div>
            <div className="bg-surface-container-low p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200">
              <h3 className="text-[15px] font-serif font-medium text-on-background tracking-tight mb-2">{t.extractionTitle}</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">{t.extractionText}</p>
            </div>
            <div className="bg-surface-container-low p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200">
              <h3 className="text-[15px] font-serif font-medium text-on-background tracking-tight mb-2">{t.qcTitle}</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">{t.qcText}</p>
            </div>
            <div className="bg-surface-container-low p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200">
              <h3 className="text-[15px] font-serif font-medium text-on-background tracking-tight mb-2">{t.oemTitle}</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">{t.oemText}</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">{t.profileTitle}</h2>
          <div className="bg-surface-container-low p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[15px]">
              <div>
                <dt className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">{t.brandLabel}</dt>
                <dd className="text-on-background">{t.brand}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">{t.enNameLabel}</dt>
                <dd className="text-on-background">{t.enName}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">{t.cnNameLabel}</dt>
                <dd className="text-on-background">{t.cnName}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">{t.locationLabel}</dt>
                <dd className="text-on-background">{t.location}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">{t.coreLabel}</dt>
                <dd className="text-on-background">{t.core}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">{t.productsLabel}</dt>
                <dd className="text-on-background">{t.products}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">{t.equipmentLabel}</dt>
                <dd className="text-on-background">{t.equipment}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">{t.inquiryLabel}</dt>
                <dd>
                  <a href="mailto:inquiry@vetrux.tech" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors duration-200">
                    inquiry@vetrux.tech
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">{t.salesLabel}</dt>
                <dd>
                  <a href="mailto:sales@vetrux.tech" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors duration-200">
                    sales@vetrux.tech
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </div>
  );
}
