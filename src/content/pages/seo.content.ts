// src/content/pages/seo.content.ts
// Centralized SEO metadata per page per locale.
// English is the source of truth; all locales have real translations.

import type { Locale } from '@/i18n/locales';

export interface PageSeoContent {
  title: string;
  description: string;
  keywords?: string;
}

type SeoContentMap = Record<string, Record<Locale, PageSeoContent>>;

export const pageSeoContent: SeoContentMap = {
  '/': {
    en: {
      title: 'CBD Isolate Manufacturer in China | Bulk B2B Supplier | Vetrux',
      description: 'Vetrux supplies bulk CBD isolate for B2B buyers from Yunnan, China, with OEM/ODM support, in-house quality control, and buyer documentation support.',
      keywords: 'CBD isolate manufacturer China, bulk CBD isolate supplier, B2B CBD isolate, CBD isolate OEM ODM, Vetrux CBD, Yunnan',
    },
    de: {
      title: 'CBD-Rohstoffe | Vetrux CBD',
      description: 'VETRUX — die CBD-Rohstoffmarke der Vetrux Biotechnology (Chuxiong) Co., Ltd. CBD-Rohstoffverkauf, OEM/ODM-Dienstleistungen und technische Unterstützung aus Yunnan, China.',
      keywords: 'CBD Rohstoffe, CBD Isolat, OEM ODM CBD, CBD Lieferant, Vetrux CBD, Yunnan',
    },
    fr: {
      title: 'Matières Premières CBD | Vetrux CBD',
      description: 'VETRUX — la marque de matières premières CBD exploitée par Vetrux Biotechnology (Chuxiong) Co., Ltd. Vente de matières premières CBD, services OEM/ODM et support technique depuis le Yunnan, Chine.',
      keywords: 'matières premières CBD, isolat CBD, OEM ODM CBD, fournisseur CBD, Vetrux CBD, Yunnan',
    },
    es: {
      title: 'Fabricante de CBD Isolate en China | Proveedor B2B a Granel | Vetrux',
      description: 'Vetrux suministra CBD isolate a granel para compradores B2B desde Yunnan, China, con soporte OEM/ODM, control de calidad interno y documentación para compradores.',
      keywords: 'fabricante CBD isolate China, proveedor CBD isolate a granel, CBD isolate B2B, CBD isolate OEM ODM, Vetrux CBD, Yunnan',
    },
    it: {
      title: "Produttore di CBD Isolate in Cina | Fornitore B2B all'Ingrosso | Vetrux",
      description: "Vetrux fornisce CBD isolate all'ingrosso per acquirenti B2B dallo Yunnan, Cina, con supporto OEM/ODM, controllo qualità interno e documentazione per acquirenti.",
      keywords: 'produttore CBD isolate Cina, fornitore CBD isolate ingrosso, CBD isolate B2B, CBD isolate OEM ODM, Vetrux CBD, Yunnan',
    },
    pt: {
      title: 'Fabricante de CBD Isolate na China | Fornecedor B2B a Granel | Vetrux',
      description: 'A Vetrux fornece CBD isolate a granel para compradores B2B a partir de Yunnan, China, com suporte OEM/ODM, controle de qualidade interno e documentação para compradores.',
      keywords: 'fabricante CBD isolate China, fornecedor CBD isolate granel, CBD isolate B2B, CBD isolate OEM ODM, Vetrux CBD, Yunnan',
    },
    ja: {
      title: 'CBD アイソレート製造メーカー（中国）| B2B バルク供給 | Vetrux',
      description: 'Vetruxは中国・Yunnanより、B2Bバイヤー向けにバルクCBDアイソレートを供給しています。OEM/ODMサポート、自社品質管理、購入者向け書類対応に対応いたします。',
      keywords: 'CBD アイソレート メーカー 中国, CBD アイソレート バルク供給, B2B CBD アイソレート, CBD OEM ODM, Vetrux CBD, Yunnan',
    },
    fi: {
      title: 'CBD-isolaatin valmistaja Kiinassa | B2B-tukkutoimittaja | Vetrux',
      description: 'Vetrux toimittaa CBD-isolaattia tukkuerissä B2B-ostajille Yunnanista, Kiinasta. Tarjoamme OEM/ODM-tukea, sisäistä laadunvalvontaa ja ostajadokumentaatiota.',
      keywords: 'CBD-isolaatti valmistaja Kiina, CBD-isolaatti tukkutoimittaja, B2B CBD-isolaatti, CBD OEM ODM, Vetrux CBD, Yunnan',
    },
  },

  '/products/cbd-isolate': {
    en: {
      title: 'CBD Isolate Specifications | Bulk CBD Isolate | Vetrux',
      description: 'CBD isolate product information, packaging formats, documentation support, and B2B inquiry options for qualified bulk buyers.',
      keywords: 'CBD isolate specifications, bulk CBD isolate, CBD isolate packaging, CBD isolate COA, CBD isolate SDS',
    },
    de: {
      title: 'CBD-Isolat Spezifikationen | Großhandel CBD-Isolat | Vetrux',
      description: 'CBD-Isolat Produktinformationen, Verpackungsformate, Dokumentationsunterstützung und B2B-Anfragemöglichkeiten für qualifizierte Großabnehmer.',
      keywords: 'CBD Isolat Spezifikationen, Großhandel CBD Isolat, CBD Isolat Verpackung, CBD Isolat COA',
    },
    fr: {
      title: 'Spécifications Isolat CBD | Isolat CBD en Gros | Vetrux',
      description: "Informations produit isolat CBD, formats d'emballage, support documentaire et options de demande B2B pour acheteurs en gros qualifiés.",
      keywords: 'spécifications isolat CBD, isolat CBD en gros, emballage isolat CBD, COA isolat CBD',
    },
    es: {
      title: 'Especificaciones CBD Isolate | CBD Isolate a Granel | Vetrux',
      description: 'Información de producto CBD isolate, formatos de embalaje, soporte documental y opciones de consulta B2B para compradores a granel cualificados.',
      keywords: 'especificaciones CBD isolate, CBD isolate a granel, embalaje CBD isolate, COA CBD isolate',
    },
    it: {
      title: "Specifiche CBD Isolate | CBD Isolate all'Ingrosso | Vetrux",
      description: "Informazioni prodotto CBD isolate, formati di confezionamento, supporto documentale e opzioni di richiesta B2B per acquirenti all'ingrosso qualificati.",
      keywords: 'specifiche CBD isolate, CBD isolate ingrosso, confezionamento CBD isolate, COA CBD isolate',
    },
    pt: {
      title: 'Especificações CBD Isolate | CBD Isolate a Granel | Vetrux',
      description: 'Informações do produto CBD isolate, formatos de embalagem, suporte documental e opções de consulta B2B para compradores a granel qualificados.',
      keywords: 'especificações CBD isolate, CBD isolate granel, embalagem CBD isolate, COA CBD isolate',
    },
    ja: {
      title: 'CBD アイソレート仕様 | バルク CBD アイソレート | Vetrux',
      description: 'CBDアイソレートの製品情報、包装形態、書類サポート、および認定バルクバイヤー向けB2Bお問い合わせオプションをご案内いたします。',
      keywords: 'CBD アイソレート 仕様, バルク CBD アイソレート, CBD アイソレート 包装, CBD アイソレート COA',
    },
    fi: {
      title: 'CBD-isolaatin tekniset tiedot | CBD-isolaatti tukkuerissä | Vetrux',
      description: 'CBD-isolaatin tuotetiedot, pakkausmuodot, dokumentaatiotuki ja B2B-kyselyvaihtoehdot päteville tukkuostajille.',
      keywords: 'CBD-isolaatti tekniset tiedot, CBD-isolaatti tukkuerä, CBD-isolaatti pakkaus, CBD-isolaatti COA',
    },
  },

  '/process': {
    en: {
      title: 'From Seed to Isolate | Our Process — Vetrux CBD',
      description: 'Controlled phases from Yunma-13 cultivation to CBD isolate workflows, with cultivation, extraction, purification, quality-control, and packaging support in Chuxiong, Yunnan.',
      keywords: 'CBD manufacturing process, seed to isolate, CBD extraction process, hemp cultivation Yunnan, CBD isolate production',
    },
    de: {
      title: 'Vom Saatgut zum Isolat | Unser Prozess — Vetrux CBD',
      description: 'Sechs kontrollierte Phasen — vom Yunma-13 Anbau bis zum ≥99,9 % pharmazeutischen CBD-Isolat. VETRUX, Chuxiong, Yunnan.',
      keywords: 'CBD Herstellung, CBD Prozess, CBD Extraktion, CBD Anbau Yunnan, CBD Isolat Produktion',
    },
    fr: {
      title: "De la Graine à l'Isolat | Notre Procédé — Vetrux CBD",
      description: "Six phases contrôlées — de la culture Yunma-13 à l'isolat CBD pharmaceutique ≥99,9 %. VETRUX, Chuxiong, Yunnan.",
      keywords: 'fabrication CBD, procédé CBD, extraction CBD, culture CBD Yunnan, production isolat CBD',
    },
    es: {
      title: 'De la Semilla al Aislado | Nuestro Proceso — Vetrux CBD',
      description: 'Fases controladas desde el cultivo de Yunma-13 hasta los flujos de trabajo de CBD isolate, con cultivo, extracción, purificación, control de calidad y soporte de embalaje en Chuxiong, Yunnan.',
      keywords: 'proceso fabricación CBD, semilla a aislado, proceso extracción CBD, cultivo cáñamo Yunnan, producción CBD isolate',
    },
    it: {
      title: "Dal Seme all'Isolato | Il Nostro Processo — Vetrux CBD",
      description: "Fasi controllate dalla coltivazione di Yunma-13 ai flussi di lavoro del CBD isolate, con coltivazione, estrazione, purificazione, controllo qualità e supporto confezionamento a Chuxiong, Yunnan.",
      keywords: "processo produzione CBD, dal seme all'isolato, processo estrazione CBD, coltivazione canapa Yunnan, produzione CBD isolate",
    },
    pt: {
      title: 'Da Semente ao Isolado | Nosso Processo — Vetrux CBD',
      description: 'Fases controladas desde o cultivo de Yunma-13 até os fluxos de trabalho de CBD isolate, com cultivo, extração, purificação, controle de qualidade e suporte de embalagem em Chuxiong, Yunnan.',
      keywords: 'processo fabricação CBD, semente ao isolado, processo extração CBD, cultivo cânhamo Yunnan, produção CBD isolate',
    },
    ja: {
      title: '種子からアイソレートへ | 製造プロセス — Vetrux CBD',
      description: 'Yunma-13の栽培からCBDアイソレート製造までの管理された工程。Chuxiong, Yunnanにおける栽培、抽出、精製、品質管理、包装をご紹介いたします。',
      keywords: 'CBD 製造プロセス, 種子からアイソレート, CBD 抽出プロセス, ヘンプ栽培 Yunnan, CBD アイソレート生産',
    },
    fi: {
      title: 'Siemenestä isolaattiin | Prosessimme — Vetrux CBD',
      description: 'Hallitut vaiheet Yunma-13-viljelystä CBD-isolaatin tuotantoon: viljely, uutto, puhdistus, laadunvalvonta ja pakkaus Chuxiongissa, Yunnanissa.',
      keywords: 'CBD-valmistusprosessi, siemenestä isolaattiin, CBD-uuttoprosessi, hampun viljely Yunnan, CBD-isolaatin tuotanto',
    },
  },

  '/gallery': {
    en: {
      title: 'Facility Gallery | Production Site & Cultivation Base — Vetrux CBD',
      description: 'Visual overview of Vetrux CBD production site and cultivation base in Chuxiong, Yunnan — equipment, planting, and product visuals.',
      keywords: 'CBD facility gallery, extraction equipment photos, hemp cultivation base',
    },
    de: {
      title: 'Anlagengalerie | Produktionsstandort & Anbaubasis — Vetrux CBD',
      description: 'Visuelle Übersicht des Vetrux CBD Produktionsstandorts und der Anbaubasis in Chuxiong, Yunnan.',
      keywords: 'CBD Anlagengalerie, Extraktionsausrüstung Fotos, Hanf Anbaubasis',
    },
    fr: {
      title: 'Galerie des Installations | Site de Production & Base de Culture — Vetrux CBD',
      description: "Aperçu visuel du site de production et de la base de culture Vetrux CBD à Chuxiong, Yunnan.",
      keywords: "galerie installations CBD, photos équipement extraction, base culture chanvre",
    },
    es: {
      title: 'Galería de Instalaciones | Sitio de Producción y Base de Cultivo — Vetrux CBD',
      description: 'Vista visual del sitio de producción y la base de cultivo de Vetrux CBD en Chuxiong, Yunnan.',
      keywords: 'galería instalaciones CBD, fotos equipos extracción, base cultivo cáñamo',
    },
    it: {
      title: 'Galleria Impianti | Sito di Produzione e Base di Coltivazione — Vetrux CBD',
      description: 'Panoramica visiva del sito di produzione e della base di coltivazione Vetrux CBD a Chuxiong, Yunnan.',
      keywords: 'galleria impianti CBD, foto attrezzature estrazione, base coltivazione canapa',
    },
    pt: {
      title: 'Galeria de Instalações | Local de Produção e Base de Cultivo — Vetrux CBD',
      description: 'Visão geral visual do local de produção e da base de cultivo da Vetrux CBD em Chuxiong, Yunnan.',
      keywords: 'galeria instalações CBD, fotos equipamentos extração, base cultivo cânhamo',
    },
    ja: {
      title: '施設ギャラリー | 生産拠点・栽培基地 — Vetrux CBD',
      description: 'Chuxiong, YunnanにあるVetrux CBDの生産拠点および栽培基地の写真をご覧いただけます。',
      keywords: 'CBD 施設ギャラリー, 抽出設備 写真, ヘンプ栽培基地',
    },
    fi: {
      title: 'Laitosgalleria | Tuotantolaitos ja viljelyalue — Vetrux CBD',
      description: 'Visuaalinen katsaus Vetrux CBD:n tuotantolaitokseen ja viljelyalueeseen Chuxiongissa, Yunnanissa.',
      keywords: 'CBD-laitosgalleria, uuttolaitteet kuvat, hampun viljelyalue',
    },
  },

  '/inquiry': {
    en: {
      title: 'B2B Inquiry | CBD Raw Materials & OEM/ODM — Vetrux CBD',
      description: 'Contact Vetrux CBD for CBD raw material supply, OEM/ODM cooperation, and technical support inquiries.',
      keywords: 'CBD inquiry, CBD raw material supply, OEM ODM CBD, B2B CBD contact',
    },
    de: {
      title: 'B2B-Anfrage | CBD-Rohstoffe & OEM/ODM — Vetrux CBD',
      description: 'Kontaktieren Sie Vetrux CBD für CBD-Rohstoffversorgung, OEM/ODM-Kooperation und technische Unterstützung.',
      keywords: 'CBD Anfrage, CBD Rohstoffversorgung, OEM ODM CBD, B2B CBD Kontakt',
    },
    fr: {
      title: 'Demande B2B | Matières Premières CBD & OEM/ODM — Vetrux CBD',
      description: 'Contactez Vetrux CBD pour la fourniture de matières premières CBD, la coopération OEM/ODM et les demandes de support technique.',
      keywords: 'demande CBD, fourniture matières premières CBD, OEM ODM CBD, contact B2B CBD',
    },
    es: {
      title: 'Consulta B2B | Materias Primas CBD y OEM/ODM — Vetrux CBD',
      description: 'Contacte con Vetrux CBD para suministro de materias primas CBD, cooperación OEM/ODM y consultas de soporte técnico.',
      keywords: 'consulta CBD, suministro materias primas CBD, OEM ODM CBD, contacto B2B CBD',
    },
    it: {
      title: 'Richiesta B2B | Materie Prime CBD e OEM/ODM — Vetrux CBD',
      description: 'Contattate Vetrux CBD per la fornitura di materie prime CBD, cooperazione OEM/ODM e richieste di supporto tecnico.',
      keywords: 'richiesta CBD, fornitura materie prime CBD, OEM ODM CBD, contatto B2B CBD',
    },
    pt: {
      title: 'Consulta B2B | Matérias-Primas CBD e OEM/ODM — Vetrux CBD',
      description: 'Entre em contato com a Vetrux CBD para fornecimento de matérias-primas CBD, cooperação OEM/ODM e consultas de suporte técnico.',
      keywords: 'consulta CBD, fornecimento matérias-primas CBD, OEM ODM CBD, contato B2B CBD',
    },
    ja: {
      title: 'B2Bお問い合わせ | CBD原料・OEM/ODM — Vetrux CBD',
      description: 'CBD原料の供給、OEM/ODM協力、技術サポートに関するお問い合わせはVetrux CBDまでご連絡ください。',
      keywords: 'CBD お問い合わせ, CBD 原料供給, OEM ODM CBD, B2B CBD 連絡先',
    },
    fi: {
      title: 'B2B-tiedustelu | CBD-raaka-aineet ja OEM/ODM — Vetrux CBD',
      description: 'Ota yhteyttä Vetrux CBD:hen CBD-raaka-aineiden toimituksesta, OEM/ODM-yhteistyöstä ja teknisen tuen tiedusteluista.',
      keywords: 'CBD-tiedustelu, CBD-raaka-aineiden toimitus, OEM ODM CBD, B2B CBD yhteydenotto',
    },
  },

  '/about': {
    en: {
      title: 'About Vetrux CBD | Company Profile',
      description: 'VETRUX — the CBD raw material brand operated by Vetrux Biotechnology (Chuxiong) Co., Ltd. CBD raw material sales, OEM/ODM, and technical support. Based in Chuxiong, Yunnan, China.',
      keywords: 'about Vetrux CBD, Vetrux Biotechnology, Chuxiong Yunnan, CBD brand',
    },
    de: {
      title: 'Über Vetrux CBD | Unternehmensprofil',
      description: 'VETRUX — die CBD-Rohstoffmarke der Vetrux Biotechnology (Chuxiong) Co., Ltd. CBD-Rohstoffverkauf, OEM/ODM und technische Unterstützung. Sitz in Chuxiong, Yunnan, China.',
      keywords: 'über Vetrux CBD, Vetrux Biotechnology, Chuxiong Yunnan, CBD Marke',
    },
    fr: {
      title: 'À Propos de Vetrux CBD | Profil de l\'Entreprise',
      description: 'VETRUX — la marque de matières premières CBD exploitée par Vetrux Biotechnology (Chuxiong) Co., Ltd. Vente, OEM/ODM et support technique. Basée à Chuxiong, Yunnan, Chine.',
      keywords: 'à propos Vetrux CBD, Vetrux Biotechnology, Chuxiong Yunnan, marque CBD',
    },
    es: {
      title: 'Sobre Vetrux CBD | Perfil de la Empresa',
      description: 'VETRUX — la marca de materias primas CBD operada por Vetrux Biotechnology (Chuxiong) Co., Ltd. Venta de materias primas CBD, OEM/ODM y soporte técnico. Con sede en Chuxiong, Yunnan, China.',
      keywords: 'sobre Vetrux CBD, Vetrux Biotechnology, Chuxiong Yunnan, marca CBD',
    },
    it: {
      title: 'Chi Siamo | Profilo Aziendale — Vetrux CBD',
      description: 'VETRUX — il marchio di materie prime CBD gestito da Vetrux Biotechnology (Chuxiong) Co., Ltd. Vendita materie prime CBD, OEM/ODM e supporto tecnico. Sede a Chuxiong, Yunnan, Cina.',
      keywords: 'chi siamo Vetrux CBD, Vetrux Biotechnology, Chuxiong Yunnan, marchio CBD',
    },
    pt: {
      title: 'Sobre a Vetrux CBD | Perfil da Empresa',
      description: 'VETRUX — a marca de matérias-primas CBD operada pela Vetrux Biotechnology (Chuxiong) Co., Ltd. Venda de matérias-primas CBD, OEM/ODM e suporte técnico. Sediada em Chuxiong, Yunnan, China.',
      keywords: 'sobre Vetrux CBD, Vetrux Biotechnology, Chuxiong Yunnan, marca CBD',
    },
    ja: {
      title: 'Vetrux CBDについて | 会社概要',
      description: 'VETRUX — Vetrux Biotechnology (Chuxiong) Co., Ltd.が運営するCBD原料ブランド。CBD原料販売、OEM/ODM、技術サポート。中国・Yunnan省Chuxiong市に拠点を置いています。',
      keywords: 'Vetrux CBD 会社概要, Vetrux Biotechnology, Chuxiong Yunnan, CBD ブランド',
    },
    fi: {
      title: 'Tietoa Vetrux CBD:stä | Yritysprofiili',
      description: 'VETRUX — Vetrux Biotechnology (Chuxiong) Co., Ltd:n operoima CBD-raaka-ainebrändi. CBD-raaka-aineiden myynti, OEM/ODM ja tekninen tuki. Toimipaikka: Chuxiong, Yunnan, Kiina.',
      keywords: 'tietoa Vetrux CBD, Vetrux Biotechnology, Chuxiong Yunnan, CBD-brändi',
    },
  },

  '/equipment': {
    en: {
      title: 'Equipment Configuration | Extraction & Processing Facility — Vetrux CBD',
      description: 'Vetrux CBD equipment configuration: 20 extraction tanks, 26 chromatography columns, 10 concentrators, HPLC analytical system (Thermo UltiMate 3000), and Siemens automation. Chuxiong, Yunnan.',
      keywords: 'CBD extraction equipment, chromatography columns, extraction tanks, HPLC system, Siemens automation',
    },
    de: {
      title: 'Anlagenkonfiguration | Extraktions- & Verarbeitungsanlage — Vetrux CBD',
      description: 'Vetrux CBD Anlagenkonfiguration: 20 Extraktionstanks, 26 Chromatographiesäulen, 10 Konzentratoren, HPLC-Analysesystem und Siemens-Automatisierung. Chuxiong, Yunnan.',
      keywords: 'CBD Extraktionsausrüstung, Chromatographiesäulen, Extraktionstanks, HPLC System, Siemens Automatisierung',
    },
    fr: {
      title: "Configuration des Équipements | Installation d'Extraction & Traitement — Vetrux CBD",
      description: "Configuration des équipements Vetrux CBD : 20 cuves d'extraction, 26 colonnes de chromatographie, 10 concentrateurs, système analytique HPLC et automatisation Siemens. Chuxiong, Yunnan.",
      keywords: "équipement extraction CBD, colonnes chromatographie, cuves extraction, système HPLC, automatisation Siemens",
    },
    es: {
      title: 'Configuración de Equipos | Instalación de Extracción y Procesamiento — Vetrux CBD',
      description: 'Configuración de equipos Vetrux CBD: 20 tanques de extracción, 26 columnas de cromatografía, 10 concentradores, sistema analítico HPLC y automatización Siemens. Chuxiong, Yunnan.',
      keywords: 'equipos extracción CBD, columnas cromatografía, tanques extracción, sistema HPLC',
    },
    it: {
      title: 'Configurazione Attrezzature | Impianto di Estrazione e Lavorazione — Vetrux CBD',
      description: 'Configurazione attrezzature Vetrux CBD: 20 serbatoi di estrazione, 26 colonne cromatografiche, 10 concentratori, sistema analitico HPLC e automazione Siemens. Chuxiong, Yunnan.',
      keywords: 'attrezzature estrazione CBD, colonne cromatografia, serbatoi estrazione, sistema HPLC',
    },
    pt: {
      title: 'Configuração de Equipamentos | Instalação de Extração e Processamento — Vetrux CBD',
      description: 'Configuração de equipamentos Vetrux CBD: 20 tanques de extração, 26 colunas de cromatografia, 10 concentradores, sistema analítico HPLC e automação Siemens. Chuxiong, Yunnan.',
      keywords: 'equipamentos extração CBD, colunas cromatografia, tanques extração, sistema HPLC',
    },
    ja: {
      title: '設備構成 | 抽出・加工施設 — Vetrux CBD',
      description: 'Vetrux CBDの設備構成：抽出タンク20基、クロマトグラフィーカラム26本、濃縮器10台、HPLC分析システム、Siemens自動制御。Chuxiong, Yunnan。',
      keywords: 'CBD 抽出設備, クロマトグラフィーカラム, 抽出タンク, HPLC システム',
    },
    fi: {
      title: 'Laitekokoonpano | Uutto- ja käsittelylaitos — Vetrux CBD',
      description: 'Vetrux CBD:n laitekokoonpano: 20 uuttosäiliötä, 26 kromatografiakolumnia, 10 konsentraattoria, HPLC-analyysijärjestelmä ja Siemens-automaatio. Chuxiong, Yunnan.',
      keywords: 'CBD-uuttolaitteet, kromatografiakolumnit, uuttosäiliöt, HPLC-järjestelmä',
    },
  },

  '/planting': {
    en: {
      title: 'Cultivation & Breeding Center | Standardized Planting System — Vetrux CBD',
      description: 'Vetrux operates a cultivation and breeding center in Chuxiong, Yunnan Province. Standardized, traceable cultivation system focused on quality consistency.',
      keywords: 'hemp cultivation Yunnan, CBD hemp farming, standardized cultivation, seed selection, traceable planting system',
    },
    de: {
      title: 'Anbau- & Zuchtzentrum | Standardisiertes Anbausystem — Vetrux CBD',
      description: 'Vetrux betreibt ein Anbau- und Zuchtzentrum in Chuxiong, Provinz Yunnan. Standardisiertes, rückverfolgbares Anbausystem mit Fokus auf Qualitätskonsistenz.',
      keywords: 'Hanfanbau Yunnan, CBD Hanfanbau, standardisierter Anbau, Saatgutauswahl, rückverfolgbares Anbausystem',
    },
    fr: {
      title: 'Centre de Culture & Sélection | Système de Culture Standardisé — Vetrux CBD',
      description: 'Vetrux exploite un centre de culture et de sélection à Chuxiong, province du Yunnan. Système de culture standardisé et traçable axé sur la constance de la qualité.',
      keywords: 'culture chanvre Yunnan, culture CBD, culture standardisée, sélection semences, système culture traçable',
    },
    es: {
      title: 'Centro de Cultivo y Mejora | Sistema de Plantación Estandarizado — Vetrux CBD',
      description: 'Vetrux opera un centro de cultivo y mejora en Chuxiong, Provincia de Yunnan. Sistema de cultivo estandarizado y trazable centrado en la consistencia de calidad.',
      keywords: 'cultivo cáñamo Yunnan, cultivo CBD, cultivo estandarizado, sistema plantación trazable',
    },
    it: {
      title: 'Centro di Coltivazione e Selezione | Sistema di Coltivazione Standardizzato — Vetrux CBD',
      description: 'Vetrux gestisce un centro di coltivazione e selezione a Chuxiong, Provincia dello Yunnan. Sistema di coltivazione standardizzato e tracciabile incentrato sulla costanza qualitativa.',
      keywords: 'coltivazione canapa Yunnan, coltivazione CBD, coltivazione standardizzata, sistema coltivazione tracciabile',
    },
    pt: {
      title: 'Centro de Cultivo e Melhoramento | Sistema de Plantio Padronizado — Vetrux CBD',
      description: 'A Vetrux opera um centro de cultivo e melhoramento em Chuxiong, Província de Yunnan. Sistema de cultivo padronizado e rastreável focado na consistência de qualidade.',
      keywords: 'cultivo cânhamo Yunnan, cultivo CBD, cultivo padronizado, sistema plantio rastreável',
    },
    ja: {
      title: '栽培・育種センター | 標準化栽培システム — Vetrux CBD',
      description: 'Vetruxは中国Yunnan省Chuxiongにて栽培・育種センターを運営しています。品質の一貫性を重視した標準化・トレーサブルな栽培システムです。',
      keywords: 'ヘンプ栽培 Yunnan, CBD ヘンプ農業, 標準化栽培, トレーサブル栽培システム',
    },
    fi: {
      title: 'Viljely- ja jalostuskeskus | Standardoitu viljelyjärjestelmä — Vetrux CBD',
      description: 'Vetrux operoi viljely- ja jalostuskeskusta Chuxiongissa, Yunnanin maakunnassa. Standardoitu ja jäljitettävä viljelyjärjestelmä, joka keskittyy laadun johdonmukaisuuteen.',
      keywords: 'hampun viljely Yunnan, CBD-hampun viljely, standardoitu viljely, jäljitettävä viljelyjärjestelmä',
    },
  },

  '/blog': {
    en: {
      title: 'Blog & Insights | CBD Industry Knowledge — Vetrux CBD',
      description: 'Articles on CBD industry topics, extraction technology, compliance considerations, and supply chain knowledge.',
      keywords: 'CBD industry insights, CBD extraction technology, CBD compliance, CBD supply chain',
    },
    de: {
      title: 'Blog & Einblicke | CBD-Branchenwissen — Vetrux CBD',
      description: 'Artikel zu CBD-Branchenthemen, Extraktionstechnologie, Compliance-Überlegungen und Lieferkettenwissen.',
      keywords: 'CBD Brancheneinblicke, CBD Extraktionstechnologie, CBD Compliance, CBD Lieferkette',
    },
    fr: {
      title: 'Blog & Perspectives | Connaissances Industrie CBD — Vetrux CBD',
      description: "Articles sur les sujets de l'industrie CBD, la technologie d'extraction, les considérations de conformité et les connaissances de la chaîne d'approvisionnement.",
      keywords: "perspectives industrie CBD, technologie extraction CBD, conformité CBD, chaîne approvisionnement CBD",
    },
    es: {
      title: 'Blog y Perspectivas | Conocimiento de la Industria CBD — Vetrux CBD',
      description: 'Artículos sobre temas de la industria CBD, tecnología de extracción, consideraciones de cumplimiento y conocimiento de la cadena de suministro.',
      keywords: 'perspectivas industria CBD, tecnología extracción CBD, cumplimiento CBD, cadena suministro CBD',
    },
    it: {
      title: "Blog e Approfondimenti | Conoscenze sull'Industria CBD — Vetrux CBD",
      description: "Articoli su temi dell'industria CBD, tecnologia di estrazione, considerazioni sulla conformità e conoscenze sulla catena di fornitura.",
      keywords: 'approfondimenti industria CBD, tecnologia estrazione CBD, conformità CBD, catena fornitura CBD',
    },
    pt: {
      title: 'Blog e Insights | Conhecimento da Indústria CBD — Vetrux CBD',
      description: 'Artigos sobre temas da indústria CBD, tecnologia de extração, considerações de conformidade e conhecimento da cadeia de suprimentos.',
      keywords: 'insights indústria CBD, tecnologia extração CBD, conformidade CBD, cadeia suprimentos CBD',
    },
    ja: {
      title: 'ブログ・インサイト | CBD業界ナレッジ — Vetrux CBD',
      description: 'CBD業界のトピック、抽出技術、コンプライアンスに関する考察、サプライチェーンの知見に関する記事をご紹介いたします。',
      keywords: 'CBD 業界インサイト, CBD 抽出技術, CBD コンプライアンス, CBD サプライチェーン',
    },
    fi: {
      title: 'Blogi ja näkemykset | CBD-alan tietämys — Vetrux CBD',
      description: 'Artikkeleita CBD-alan aiheista, uuttoteknologiasta, vaatimustenmukaisuudesta ja toimitusketjun tietämyksestä.',
      keywords: 'CBD-alan näkemykset, CBD-uuttoteknologia, CBD-vaatimustenmukaisuus, CBD-toimitusketju',
    },
  },
};

export function getPageSeo(path: string, locale: Locale): PageSeoContent {
  const pageContent = pageSeoContent[path];
  if (!pageContent) {
    return {
      title: 'Vetrux CBD — CBD Raw Materials',
      description: 'VETRUX — the CBD raw material brand operated by Vetrux Biotechnology (Chuxiong) Co., Ltd., based in Yunnan, China.',
    };
  }
  return pageContent[locale] ?? pageContent.en;
}
