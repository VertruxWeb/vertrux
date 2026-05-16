'use client'

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Factory, Leaf, FlaskConical, Globe, CheckCircle, Truck, PackageCheck, Wrench } from 'lucide-react';
import Link from 'next/link';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import SectionLabel from '@/components/atoms/SectionLabel';
import { useReveal } from '@/hooks/useReveal';
import type { Locale } from '@/i18n/locales';

interface CbdIsolateManufacturerClientProps {
  locale?: Locale;
}

const content = {
  en: {
    badge: 'CBD Isolate Manufacturer',
    heroTitle1: 'CBD Isolate Manufacturer',
    heroTitle2: 'from China',
    heroText: 'VETRUX — a vertically integrated CBD isolate manufacturer based in Chuxiong, Yunnan, China, supporting qualified B2B buyers with bulk CBD isolate supply, OEM/ODM cooperation, packaging, and documentation support.',
    btnSubmitInquiry: 'Submit an Inquiry',
    btnViewProducts: 'View Products',
    altText: 'Vetrux CBD isolate manufacturer facility',
    capsSectionLabel: 'Manufacturing Capabilities',
    capsTitle: 'China CBD isolate manufacturer with vertical integration',
    capsDesc: 'Vertical workflows connect hemp cultivation, extraction, purification, quality-control, packaging, OEM/ODM support, and documentation discussions for B2B buyers.',
    capsFooterLink: 'View product information →',
    answersSectionLabel: 'Buyer Answers',
    answersTitle: 'CBD isolate manufacturer answers',
    metricsSectionLabel: 'Key Specifications',
    metricsTitle: 'Manufacturing capabilities at a glance',
    metricsFooterLink: 'View full product specifications →',
    marketsSectionLabel: 'Business Scope',
    marketsTitle: 'Compliance & Order Notes',
    btnContactUs: 'Contact Us',
    marketsFooter: 'Supporting documentation may be provided according to order requirements.',
    priorityServices: [
      { title: 'B2B Cooperation', desc: 'CBD raw material sales cooperation for brand clients, channel partners, trading companies, and stable procurement partners. Standard supply, long-term supply, and directed cooperation models are available.' },
      { title: 'OEM/ODM', desc: 'Raw material support, formulation development, production manufacturing, packaging design, and finished product delivery for CBD product development and launch.' },
      { title: 'Technical Support', desc: 'Cultivation management, yield and content control, extraction process optimization, cost control, product content and residue control, and cannabinoid extraction process consulting.' },
    ],
    capabilities: [
      { title: 'Cultivation & Breeding Center', desc: 'Cultivation and breeding center in Chuxiong, Yunnan Province. Standardized, traceable cultivation system focused on quality consistency.' },
      { title: 'Extraction Facility', desc: 'Professional extraction, purification, concentration, and processing equipment for CBD raw material workflows.' },
      { title: 'Analytical Capability', desc: 'In-house HPLC analytical system with automation control supporting quality management.' },
      { title: 'Quality Documents', desc: 'COA, SDS, test report, commercial invoice, packing list, and shipment document support according to actual batch and order terms.' },
      { title: 'Export Discussions', desc: 'Support for export document preparation and destination-market document review discussions with qualified B2B buyers.' },
      { title: 'Packaging', desc: '5 kg PE bags (27×60cm), 5 kg aluminum foil bags (35×50cm), export cartons (465×285×295 mm), plastic pallets with shrink wrap.' },
    ],
    differentiators: [
      { metric: 'Field', label: 'Cultivation', detail: 'Yunnan sourcing workflow' },
      { metric: 'Extract', label: 'Processing', detail: 'CBD raw material workflows' },
      { metric: 'Purify', label: 'Separation', detail: 'Chromatography workflow' },
      { metric: 'HPLC', label: 'Analytical System', detail: 'Quality control analysis' },
      { metric: 'Pack', label: 'Packaging', detail: '5 kg bulk formats' },
      { metric: 'OEM/ODM', label: 'Services', detail: 'Project cooperation support' },
    ],
    markets: [
      { region: 'Compliance Note', detail: 'Destination country import compliance — including permits, licenses, and regulatory approvals — is the buyer/importer responsibility. Documentation arranged per order terms.' },
      { region: 'Label & Use Notes', detail: 'Product labels, use statements, and customs descriptions should match actual batch, order use, and destination requirements. Special label or declaration fields should be confirmed before ordering.' },
    ],
    manufacturerAnswers: [
      { question: 'Is Vetrux a CBD isolate manufacturer?', answer: 'Yes. Vetrux Biotechnology (Chuxiong) Co., Ltd. is a China-based CBD isolate manufacturer supporting qualified B2B buyers with bulk CBD isolate, OEM/ODM cooperation, packaging, and documentation support.' },
      { question: 'What manufacturing capabilities does Vetrux operate?', answer: 'Vetrux operates connected cultivation, extraction, purification, concentration, quality-control, and packaging workflows for CBD raw materials in Chuxiong, Yunnan, China.' },
      { question: 'Does Vetrux support OEM/ODM?', answer: 'Yes. Vetrux supports OEM/ODM cooperation covering raw material support, formulation discussions, production coordination, packaging design, and finished product delivery according to project requirements.' },
      { question: 'What quality-control capabilities are available?', answer: 'Vetrux has in-house HPLC analytical capability for quality-control support. Batch-specific documents depend on actual batch, order terms, and verification results.' },
    ],
  },
  de: {
    badge: 'CBD Isolat Hersteller',
    heroTitle1: 'CBD Isolat Hersteller',
    heroTitle2: 'aus China',
    heroText: 'VETRUX — ein vertikal integrierter CBD-Isolat-Hersteller mit Sitz in Chuxiong, Yunnan, China, der qualifizierte B2B-Käufer mit CBD-Isolat-Lieferungen in großen Mengen, OEM/ODM-Kooperation, Verpackung und Dokumentationssupport unterstützt.',
    btnSubmitInquiry: 'Anfrage senden',
    btnViewProducts: 'Produkte ansehen',
    altText: 'Vetrux CBD Isolat Herstelleranlage',
    capsSectionLabel: 'Fertigungsfähigkeiten',
    capsTitle: 'China CBD Isolat Hersteller mit vertikaler Integration',
    capsDesc: 'Vertikale Workflows verbinden Hanfanbau, Extraktion, Reinigung, Qualitätskontrolle, Verpackung, OEM/ODM-Support und Dokumentationsgespräche für B2B-Käufer.',
    capsFooterLink: 'Produktinformationen ansehen →',
    answersSectionLabel: 'Käufer-Antworten',
    answersTitle: 'Antworten des CBD Isolat Herstellers',
    metricsSectionLabel: 'Wichtige Spezifikationen',
    metricsTitle: 'Fertigungsfähigkeiten auf einen Blick',
    metricsFooterLink: 'Vollständige Produktspezifikationen ansehen →',
    marketsSectionLabel: 'Geschäftsbereich',
    marketsTitle: 'Compliance & Bestellhinweise',
    btnContactUs: 'Kontaktieren Sie uns',
    marketsFooter: 'Unterstützende Dokumentation kann gemäß den Auftragsanforderungen bereitgestellt werden.',
    priorityServices: [
      { title: 'B2B-Kooperation', desc: 'CBD-Rohstoffverkaufskooperation für Markenkunden, Channel-Partner, Handelsunternehmen und stabile Beschaffungspartner. Standardlieferung, Langzeitlieferung und gezielte Kooperationsmodelle sind verfügbar.' },
      { title: 'OEM/ODM', desc: 'Rohstoffunterstützung, Formulierungsentwicklung, Produktionsfertigung, Verpackungsdesign und Fertigproduktlieferung für die CBD-Produktentwicklung und -einführung.' },
      { title: 'Technischer Support', desc: 'Anbaumanagement, Ertrags- und Gehaltskontrolle, Optimierung des Extraktionsprozesses, Kostenkontrolle, Produktgehalts- und Rückstandskontrolle sowie Beratung zum Cannabinoid-Extraktionsprozess.' },
    ],
    capabilities: [
      { title: 'Anbau- und Zuchtzentrum', desc: 'Anbau- und Zuchtzentrum in Chuxiong, Provinz Yunnan. Standardisiertes, rückverfolgbares Anbausystem mit Fokus auf Qualitätskonsistenz.' },
      { title: 'Extraktionsanlage', desc: 'Professionelle Extraktions-, Reinigungs-, Konzentrations- und Verarbeitungsausrüstung für CBD-Rohstoff-Workflows.' },
      { title: 'Analysekapazität', desc: 'Internes HPLC-Analyseystem mit Automatisierungssteuerung zur Unterstützung des Qualitätsmanagements.' },
      { title: 'Qualitätsdokumente', desc: 'COA, SDS, Testbericht, Handelsrechnung, Packliste und Versanddokumentensupport gemäß tatsächlicher Charge und Auftragsbedingungen.' },
      { title: 'Exportgespräche', desc: 'Unterstützung bei der Erstellung von Exportdokumenten und Gespräche zur Dokumentenprüfung im Zielmarkt mit qualifizierten B2B-Käufern.' },
      { title: 'Verpackung', desc: '5 kg PE-Beutel (27×60cm), 5 kg Aluminiumfolienbeutel (35×50cm), Exportkartons (465×285×295 mm), Kunststoffpaletten mit Schrumpffolie.' },
    ],
    differentiators: [
      { metric: 'Feld', label: 'Anbau', detail: 'Yunnan Beschaffungs-Workflow' },
      { metric: 'Extrakt', label: 'Verarbeitung', detail: 'CBD-Rohstoff-Workflows' },
      { metric: 'Reinigen', label: 'Trennung', detail: 'Chromatographie-Workflow' },
      { metric: 'HPLC', label: 'Analysesystem', detail: 'Qualitätskontrollanalyse' },
      { metric: 'Pack', label: 'Verpackung', detail: '5 kg Großformate' },
      { metric: 'OEM/ODM', label: 'Dienstleistungen', detail: 'Projektkooperationssupport' },
    ],
    markets: [
      { region: 'Compliance-Hinweis', detail: 'Die Einhaltung der Einfuhrbestimmungen des Ziellandes — einschließlich Genehmigungen, Lizenzen und behördlicher Zulassungen — liegt in der Verantwortung des Käufers/Importeurs. Dokumentation wird gemäß den Auftragsbedingungen bereitgestellt.' },
      { region: 'Kennzeichnungs- und Verwendungshinweise', detail: 'Produktkennzeichnungen, Verwendungshinweise und Zollbeschreibungen sollten der tatsächlichen Charge, dem Verwendungszweck und den Anforderungen des Ziellandes entsprechen. Besondere Kennzeichnungs- oder Deklarationsfelder sollten vor der Bestellung bestätigt werden.' },
    ],
    manufacturerAnswers: [
      { question: 'Ist Vetrux ein CBD Isolat Hersteller?', answer: 'Ja. Vetrux Biotechnology (Chuxiong) Co., Ltd. ist ein in China ansässiger CBD-Isolat-Hersteller, der qualifizierte B2B-Käufer mit CBD-Isolat in großen Mengen, OEM/ODM-Kooperation, Verpackung und Dokumentationssupport unterstützt.' },
      { question: 'Welche Fertigungsfähigkeiten betreibt Vetrux?', answer: 'Vetrux betreibt vernetzte Anbau-, Extraktions-, Reinigungs-, Konzentrations-, Qualitätskontroll- und Verpackungs-Workflows für CBD-Rohstoffe in Chuxiong, Yunnan, China.' },
      { question: 'Unterstützt Vetrux OEM/ODM?', answer: 'Ja. Vetrux unterstützt OEM/ODM-Kooperation, die Rohstoffunterstützung, Formulierungsgespräche, Produktionskoordination, Verpackungsdesign und Fertigproduktlieferung gemäß den Projektanforderungen umfasst.' },
      { question: 'Welche Qualitätskontrollfähigkeiten sind verfügbar?', answer: 'Vetrux verfügt über interne HPLC-Analysekapazität zur Qualitätskontrollunterstützung. Chargenspezifische Dokumente hängen von der tatsächlichen Charge, den Auftragsbedingungen und den Prüfergebnissen ab.' },
    ],
  },
  fr: {
    badge: "Fabricant d'Isolat de CBD",
    heroTitle1: "Fabricant d'Isolat de CBD",
    heroTitle2: 'en Chine',
    heroText: "VETRUX — un fabricant d'isolat de CBD verticalement intégré basé à Chuxiong, Yunnan, Chine, soutenant les acheteurs B2B qualifiés avec la fourniture d'isolat de CBD en vrac, la coopération OEM/ODM, l'emballage et le support documentaire.",
    btnSubmitInquiry: 'Soumettre une Demande',
    btnViewProducts: 'Voir les Produits',
    altText: "Installation de fabrication d'isolat de CBD Vetrux",
    capsSectionLabel: 'Capacités de Fabrication',
    capsTitle: "Fabricant d'isolat de CBD en Chine avec intégration verticale",
    capsDesc: "Les flux de travail verticaux relient la culture du chanvre, l'extraction, la purification, le contrôle qualité, l'emballage, le support OEM/ODM et les discussions documentaires pour les acheteurs B2B.",
    capsFooterLink: 'Voir les informations produit →',
    answersSectionLabel: 'Réponses aux Acheteurs',
    answersTitle: "Réponses du fabricant d'isolat de CBD",
    metricsSectionLabel: 'Spécifications Clés',
    metricsTitle: 'Capacités de fabrication en un coup d\'œil',
    metricsFooterLink: 'Voir les spécifications complètes du produit →',
    marketsSectionLabel: "Périmètre d'Activité",
    marketsTitle: 'Conformité et Notes de Commande',
    btnContactUs: 'Contactez-nous',
    marketsFooter: 'Une documentation justificative peut être fournie selon les exigences de la commande.',
    priorityServices: [
      { title: 'Coopération B2B', desc: "Coopération de vente de matières premières CBD pour les clients de marque, les partenaires de distribution, les sociétés de négoce et les partenaires d'approvisionnement stables. Des modèles de fourniture standard, de fourniture à long terme et de coopération ciblée sont disponibles." },
      { title: 'OEM/ODM', desc: "Support en matières premières, développement de formulations, fabrication en production, conception d'emballage et livraison de produits finis pour le développement et le lancement de produits CBD." },
      { title: 'Support Technique', desc: "Gestion de la culture, contrôle du rendement et de la teneur, optimisation du processus d'extraction, contrôle des coûts, contrôle de la teneur et des résidus du produit, et conseil en processus d'extraction de cannabinoïdes." },
    ],
    capabilities: [
      { title: "Centre de Culture et d'Élevage", desc: "Centre de culture et d'élevage à Chuxiong, province du Yunnan. Système de culture standardisé et traçable axé sur la cohérence de la qualité." },
      { title: "Installation d'Extraction", desc: "Équipement professionnel d'extraction, de purification, de concentration et de traitement pour les flux de travail des matières premières CBD." },
      { title: "Capacité Analytique", desc: "Système analytique HPLC interne avec contrôle d'automatisation soutenant la gestion de la qualité." },
      { title: 'Documents Qualité', desc: 'Support COA, SDS, rapport de test, facture commerciale, liste de colisage et documents d\'expédition selon le lot réel et les conditions de commande.' },
      { title: "Discussions d'Exportation", desc: "Support pour la préparation des documents d'exportation et les discussions d'examen des documents du marché de destination avec les acheteurs B2B qualifiés." },
      { title: 'Emballage', desc: 'Sacs PE de 5 kg (27×60cm), sacs en aluminium de 5 kg (35×50cm), cartons d\'exportation (465×285×295 mm), palettes en plastique avec film rétractable.' },
    ],
    differentiators: [
      { metric: 'Champ', label: 'Culture', detail: "Flux d'approvisionnement du Yunnan" },
      { metric: 'Extrait', label: 'Traitement', detail: 'Flux de matières premières CBD' },
      { metric: 'Purifier', label: 'Séparation', detail: 'Flux de chromatographie' },
      { metric: 'HPLC', label: 'Système Analytique', detail: 'Analyse de contrôle qualité' },
      { metric: 'Pack', label: 'Emballage', detail: 'Formats en vrac de 5 kg' },
      { metric: 'OEM/ODM', label: 'Services', detail: 'Support de coopération de projet' },
    ],
    markets: [
      { region: 'Note de Conformité', detail: "La conformité à l'importation dans le pays de destination — y compris les permis, licences et approbations réglementaires — relève de la responsabilité de l'acheteur/importateur. La documentation est fournie selon les conditions de commande." },
      { region: "Notes d'Étiquetage et d'Utilisation", detail: "Les étiquettes des produits, les déclarations d'utilisation et les descriptions douanières doivent correspondre au lot réel, à l'utilisation prévue et aux exigences de destination. Les champs d'étiquetage ou de déclaration spéciaux doivent être confirmés avant la commande." },
    ],
    manufacturerAnswers: [
      { question: "Vetrux est-il un fabricant d'isolat de CBD?", answer: "Oui. Vetrux Biotechnology (Chuxiong) Co., Ltd. est un fabricant d'isolat de CBD basé en Chine qui soutient les acheteurs B2B qualifiés avec de l'isolat de CBD en vrac, une coopération OEM/ODM, un emballage et un support documentaire." },
      { question: 'Quelles capacités de fabrication Vetrux exploite-t-il?', answer: 'Vetrux exploite des flux de travail connectés de culture, extraction, purification, concentration, contrôle qualité et emballage pour les matières premières CBD à Chuxiong, Yunnan, Chine.' },
      { question: "Vetrux prend-il en charge l'OEM/ODM?", answer: "Oui. Vetrux prend en charge la coopération OEM/ODM couvrant le support en matières premières, les discussions de formulation, la coordination de production, la conception d'emballage et la livraison de produits finis selon les exigences du projet." },
      { question: 'Quelles capacités de contrôle qualité sont disponibles?', answer: "Vetrux dispose d'une capacité analytique HPLC interne pour le support du contrôle qualité. Les documents spécifiques au lot dépendent du lot réel, des conditions de commande et des résultats de vérification." },
    ],
  },
  es: {
    badge: 'Fabricante de Aislado de CBD',
    heroTitle1: 'Fabricante de Aislado de CBD',
    heroTitle2: 'de China',
    heroText: 'VETRUX — un fabricante de aislado de CBD verticalmente integrado con sede en Chuxiong, Yunnan, China, que apoya a compradores B2B cualificados con suministro de aislado de CBD a granel, cooperación OEM/ODM, embalaje y soporte documental.',
    btnSubmitInquiry: 'Enviar una Consulta',
    btnViewProducts: 'Ver Productos',
    altText: 'Instalación de fabricación de aislado de CBD Vetrux',
    capsSectionLabel: 'Capacidades de Fabricación',
    capsTitle: 'Fabricante de aislado de CBD en China con integración vertical',
    capsDesc: 'Los flujos de trabajo verticales conectan el cultivo de cáñamo, la extracción, la purificación, el control de calidad, el embalaje, el soporte OEM/ODM y las discusiones documentales para compradores B2B.',
    capsFooterLink: 'Ver información del producto →',
    answersSectionLabel: 'Respuestas para Compradores',
    answersTitle: 'Respuestas del fabricante de aislado de CBD',
    metricsSectionLabel: 'Especificaciones Clave',
    metricsTitle: 'Capacidades de fabricación de un vistazo',
    metricsFooterLink: 'Ver especificaciones completas del producto →',
    marketsSectionLabel: 'Ámbito Comercial',
    marketsTitle: 'Cumplimiento y Notas de Pedido',
    btnContactUs: 'Contáctenos',
    marketsFooter: 'Se puede proporcionar documentación de respaldo según los requisitos del pedido.',
    priorityServices: [
      { title: 'Cooperación B2B', desc: 'Cooperación en venta de materias primas CBD para clientes de marca, socios de canal, empresas comerciales y socios de compras estables. Están disponibles modelos de suministro estándar, suministro a largo plazo y cooperación dirigida.' },
      { title: 'OEM/ODM', desc: 'Soporte de materias primas, desarrollo de formulaciones, fabricación de producción, diseño de embalaje y entrega de productos terminados para el desarrollo y lanzamiento de productos CBD.' },
      { title: 'Soporte Técnico', desc: 'Gestión del cultivo, control de rendimiento y contenido, optimización del proceso de extracción, control de costes, control de contenido y residuos del producto, y consultoría en procesos de extracción de cannabinoides.' },
    ],
    capabilities: [
      { title: 'Centro de Cultivo y Cría', desc: 'Centro de cultivo y cría en Chuxiong, provincia de Yunnan. Sistema de cultivo estandarizado y trazable centrado en la consistencia de la calidad.' },
      { title: 'Instalación de Extracción', desc: 'Equipo profesional de extracción, purificación, concentración y procesamiento para flujos de trabajo de materias primas CBD.' },
      { title: 'Capacidad Analítica', desc: 'Sistema analítico HPLC interno con control de automatización que respalda la gestión de calidad.' },
      { title: 'Documentos de Calidad', desc: 'Soporte de COA, SDS, informe de prueba, factura comercial, lista de empaque y documentos de envío según el lote real y los términos del pedido.' },
      { title: 'Discusiones de Exportación', desc: 'Soporte para la preparación de documentos de exportación y discusiones de revisión de documentos del mercado de destino con compradores B2B cualificados.' },
      { title: 'Embalaje', desc: 'Bolsas PE de 5 kg (27×60cm), bolsas de aluminio de 5 kg (35×50cm), cajas de exportación (465×285×295 mm), palés de plástico con film retráctil.' },
    ],
    differentiators: [
      { metric: 'Campo', label: 'Cultivo', detail: 'Flujo de trabajo de abastecimiento de Yunnan' },
      { metric: 'Extracto', label: 'Procesamiento', detail: 'Flujos de trabajo de materias primas CBD' },
      { metric: 'Purificar', label: 'Separación', detail: 'Flujo de trabajo de cromatografía' },
      { metric: 'HPLC', label: 'Sistema Analítico', detail: 'Análisis de control de calidad' },
      { metric: 'Empaque', label: 'Embalaje', detail: 'Formatos a granel de 5 kg' },
      { metric: 'OEM/ODM', label: 'Servicios', detail: 'Soporte de cooperación en proyectos' },
    ],
    markets: [
      { region: 'Nota de Cumplimiento', detail: 'El cumplimiento de importación del país de destino — incluidos permisos, licencias y aprobaciones regulatorias — es responsabilidad del comprador/importador. La documentación se proporciona según los términos del pedido.' },
      { region: 'Notas de Etiquetado y Uso', detail: 'Las etiquetas del producto, las declaraciones de uso y las descripciones aduaneras deben coincidir con el lote real, el uso del pedido y los requisitos del destino. Los campos especiales de etiquetado o declaración deben confirmarse antes de realizar el pedido.' },
    ],
    manufacturerAnswers: [
      { question: '¿Es Vetrux un fabricante de aislado de CBD?', answer: 'Sí. Vetrux Biotechnology (Chuxiong) Co., Ltd. es un fabricante de aislado de CBD con sede en China que apoya a compradores B2B cualificados con aislado de CBD a granel, cooperación OEM/ODM, embalaje y soporte documental.' },
      { question: '¿Qué capacidades de fabricación opera Vetrux?', answer: 'Vetrux opera flujos de trabajo conectados de cultivo, extracción, purificación, concentración, control de calidad y embalaje para materias primas CBD en Chuxiong, Yunnan, China.' },
      { question: '¿Vetrux admite OEM/ODM?', answer: 'Sí. Vetrux admite la cooperación OEM/ODM que cubre el soporte de materias primas, discusiones de formulación, coordinación de producción, diseño de embalaje y entrega de productos terminados según los requisitos del proyecto.' },
      { question: '¿Qué capacidades de control de calidad están disponibles?', answer: 'Vetrux cuenta con capacidad analítica HPLC interna para el soporte del control de calidad. Los documentos específicos del lote dependen del lote real, los términos del pedido y los resultados de verificación.' },
    ],
  },
  it: {
    badge: 'Produttore di Isolato di CBD',
    heroTitle1: 'Produttore di Isolato di CBD',
    heroTitle2: 'dalla Cina',
    heroText: "VETRUX — un produttore di isolato di CBD verticalmente integrato con sede a Chuxiong, Yunnan, Cina, che supporta acquirenti B2B qualificati con fornitura di isolato di CBD sfuso, cooperazione OEM/ODM, imballaggio e supporto documentale.",
    btnSubmitInquiry: 'Invia una Richiesta',
    btnViewProducts: 'Visualizza Prodotti',
    altText: 'Stabilimento di produzione isolato di CBD Vetrux',
    capsSectionLabel: 'Capacità Produttive',
    capsTitle: 'Produttore cinese di isolato di CBD con integrazione verticale',
    capsDesc: 'Flussi di lavoro verticali collegano coltivazione della canapa, estrazione, purificazione, controllo qualità, imballaggio, supporto OEM/ODM e discussioni documentali per acquirenti B2B.',
    capsFooterLink: 'Visualizza informazioni sul prodotto →',
    answersSectionLabel: 'Risposte per Acquirenti',
    answersTitle: "Risposte del produttore di isolato di CBD",
    metricsSectionLabel: 'Specifiche Chiave',
    metricsTitle: "Capacità produttive a colpo d'occhio",
    metricsFooterLink: 'Visualizza le specifiche complete del prodotto →',
    marketsSectionLabel: "Ambito d'Attività",
    marketsTitle: 'Conformità e Note sull\'Ordine',
    btnContactUs: 'Contattaci',
    marketsFooter: "La documentazione di supporto può essere fornita secondo i requisiti dell'ordine.",
    priorityServices: [
      { title: 'Cooperazione B2B', desc: "Cooperazione nella vendita di materie prime CBD per clienti di marca, partner di canale, società commerciali e partner di approvvigionamento stabili. Sono disponibili modelli di fornitura standard, fornitura a lungo termine e cooperazione mirata." },
      { title: 'OEM/ODM', desc: 'Supporto per materie prime, sviluppo di formulazioni, produzione manifatturiera, progettazione di imballaggi e consegna di prodotti finiti per lo sviluppo e il lancio di prodotti CBD.' },
      { title: 'Supporto Tecnico', desc: "Gestione della coltivazione, controllo della resa e del contenuto, ottimizzazione del processo di estrazione, controllo dei costi, controllo del contenuto e dei residui del prodotto e consulenza sul processo di estrazione dei cannabinoidi." },
    ],
    capabilities: [
      { title: 'Centro di Coltivazione e Allevamento', desc: 'Centro di coltivazione e allevamento a Chuxiong, provincia dello Yunnan. Sistema di coltivazione standardizzato e tracciabile incentrato sulla coerenza della qualità.' },
      { title: 'Impianto di Estrazione', desc: 'Attrezzatura professionale di estrazione, purificazione, concentrazione e lavorazione per i flussi di lavoro delle materie prime CBD.' },
      { title: 'Capacità Analitica', desc: 'Sistema analitico HPLC interno con controllo di automazione a supporto della gestione della qualità.' },
      { title: 'Documenti di Qualità', desc: "Supporto COA, SDS, rapporto di prova, fattura commerciale, lista di imballaggio e documenti di spedizione in base al lotto effettivo e ai termini dell'ordine." },
      { title: 'Discussioni sull\'Esportazione', desc: 'Supporto per la preparazione dei documenti di esportazione e discussioni sulla revisione dei documenti del mercato di destinazione con acquirenti B2B qualificati.' },
      { title: 'Imballaggio', desc: 'Sacchi PE da 5 kg (27×60cm), sacchi in alluminio da 5 kg (35×50cm), cartoni per esportazione (465×285×295 mm), pallet in plastica con film termoretraibile.' },
    ],
    differentiators: [
      { metric: 'Campo', label: 'Coltivazione', detail: 'Flusso di approvvigionamento Yunnan' },
      { metric: 'Estratto', label: 'Lavorazione', detail: 'Flussi di materie prime CBD' },
      { metric: 'Purifica', label: 'Separazione', detail: 'Flusso di cromatografia' },
      { metric: 'HPLC', label: 'Sistema Analitico', detail: 'Analisi di controllo qualità' },
      { metric: 'Imballo', label: 'Imballaggio', detail: 'Formati sfusi da 5 kg' },
      { metric: 'OEM/ODM', label: 'Servizi', detail: 'Supporto alla cooperazione progettuale' },
    ],
    markets: [
      { region: 'Nota di Conformità', detail: "La conformità all'importazione nel paese di destinazione — inclusi permessi, licenze e approvazioni normative — è responsabilità dell'acquirente/importatore. La documentazione è fornita secondo i termini dell'ordine." },
      { region: 'Note su Etichettatura e Uso', detail: "Le etichette dei prodotti, le dichiarazioni d'uso e le descrizioni doganali devono corrispondere al lotto effettivo, all'uso previsto e ai requisiti di destinazione. I campi speciali di etichettatura o dichiarazione devono essere confermati prima dell'ordine." },
    ],
    manufacturerAnswers: [
      { question: 'Vetrux è un produttore di isolato di CBD?', answer: "Sì. Vetrux Biotechnology (Chuxiong) Co., Ltd. è un produttore di isolato di CBD con sede in Cina che supporta acquirenti B2B qualificati con isolato di CBD sfuso, cooperazione OEM/ODM, imballaggio e supporto documentale." },
      { question: 'Quali capacità produttive opera Vetrux?', answer: 'Vetrux opera flussi di lavoro connessi di coltivazione, estrazione, purificazione, concentrazione, controllo qualità e imballaggio per materie prime CBD a Chuxiong, Yunnan, Cina.' },
      { question: 'Vetrux supporta OEM/ODM?', answer: 'Sì. Vetrux supporta la cooperazione OEM/ODM che copre il supporto per materie prime, discussioni sulla formulazione, coordinamento della produzione, progettazione di imballaggi e consegna di prodotti finiti secondo i requisiti del progetto.' },
      { question: 'Quali capacità di controllo qualità sono disponibili?', answer: "Vetrux dispone di capacità analitica HPLC interna per il supporto del controllo qualità. I documenti specifici del lotto dipendono dal lotto effettivo, dai termini dell'ordine e dai risultati delle verifiche." },
    ],
  },
  pt: {
    badge: 'Fabricante de Isolado de CBD',
    heroTitle1: 'Fabricante de Isolado de CBD',
    heroTitle2: 'da China',
    heroText: 'VETRUX — um fabricante de isolado de CBD verticalmente integrado com sede em Chuxiong, Yunnan, China, apoiando compradores B2B qualificados com fornecimento de isolado de CBD a granel, cooperação OEM/ODM, embalagem e suporte documental.',
    btnSubmitInquiry: 'Enviar uma Consulta',
    btnViewProducts: 'Ver Produtos',
    altText: 'Instalação de fabricação de isolado de CBD Vetrux',
    capsSectionLabel: 'Capacidades de Fabricação',
    capsTitle: 'Fabricante de isolado de CBD na China com integração vertical',
    capsDesc: 'Fluxos de trabalho verticais conectam o cultivo de cânhamo, extração, purificação, controle de qualidade, embalagem, suporte OEM/ODM e discussões documentais para compradores B2B.',
    capsFooterLink: 'Ver informações do produto →',
    answersSectionLabel: 'Respostas para Compradores',
    answersTitle: 'Respostas do fabricante de isolado de CBD',
    metricsSectionLabel: 'Especificações Principais',
    metricsTitle: 'Capacidades de fabricação em resumo',
    metricsFooterLink: 'Ver especificações completas do produto →',
    marketsSectionLabel: 'Âmbito de Atuação',
    marketsTitle: 'Conformidade e Notas de Pedido',
    btnContactUs: 'Entre em Contato',
    marketsFooter: 'Documentação de suporte pode ser fornecida de acordo com os requisitos do pedido.',
    priorityServices: [
      { title: 'Cooperação B2B', desc: 'Cooperação na venda de matérias-primas CBD para clientes de marca, parceiros de canal, empresas comerciais e parceiros de compras estáveis. Modelos de fornecimento padrão, fornecimento de longo prazo e cooperação direcionada estão disponíveis.' },
      { title: 'OEM/ODM', desc: 'Suporte de matérias-primas, desenvolvimento de formulação, fabricação de produção, design de embalagem e entrega de produtos acabados para o desenvolvimento e lançamento de produtos CBD.' },
      { title: 'Suporte Técnico', desc: 'Gestão do cultivo, controle de rendimento e teor, otimização do processo de extração, controle de custos, controle de teor e resíduos do produto e consultoria em processos de extração de canabinoides.' },
    ],
    capabilities: [
      { title: 'Centro de Cultivo e Melhoramento', desc: 'Centro de cultivo e melhoramento em Chuxiong, Província de Yunnan. Sistema de cultivo padronizado e rastreável focado na consistência da qualidade.' },
      { title: 'Instalação de Extração', desc: 'Equipamento profissional de extração, purificação, concentração e processamento para fluxos de trabalho de matérias-primas CBD.' },
      { title: 'Capacidade Analítica', desc: 'Sistema analítico HPLC interno com controle de automação apoiando a gestão da qualidade.' },
      { title: 'Documentos de Qualidade', desc: 'Suporte de COA, SDS, relatório de teste, fatura comercial, lista de embalagem e documentos de envio de acordo com o lote real e os termos do pedido.' },
      { title: 'Discussões de Exportação', desc: 'Suporte para preparação de documentos de exportação e discussões de revisão de documentos do mercado de destino com compradores B2B qualificados.' },
      { title: 'Embalagem', desc: 'Sacos PE de 5 kg (27×60cm), sacos de alumínio de 5 kg (35×50cm), caixas de exportação (465×285×295 mm), paletes de plástico com filme retrátil.' },
    ],
    differentiators: [
      { metric: 'Campo', label: 'Cultivo', detail: 'Fluxo de abastecimento Yunnan' },
      { metric: 'Extrato', label: 'Processamento', detail: 'Fluxos de matérias-primas CBD' },
      { metric: 'Purificar', label: 'Separação', detail: 'Fluxo de cromatografia' },
      { metric: 'HPLC', label: 'Sistema Analítico', detail: 'Análise de controle de qualidade' },
      { metric: 'Embalar', label: 'Embalagem', detail: 'Formatos a granel de 5 kg' },
      { metric: 'OEM/ODM', label: 'Serviços', detail: 'Suporte à cooperação em projetos' },
    ],
    markets: [
      { region: 'Nota de Conformidade', detail: 'A conformidade de importação do país de destino — incluindo autorizações, licenças e aprovações regulatórias — é de responsabilidade do comprador/importador. A documentação é fornecida de acordo com os termos do pedido.' },
      { region: 'Notas de Rotulagem e Uso', detail: 'Os rótulos dos produtos, declarações de uso e descrições aduaneiras devem corresponder ao lote real, ao uso do pedido e aos requisitos de destino. Campos especiais de rotulagem ou declaração devem ser confirmados antes do pedido.' },
    ],
    manufacturerAnswers: [
      { question: 'A Vetrux é uma fabricante de isolado de CBD?', answer: 'Sim. A Vetrux Biotechnology (Chuxiong) Co., Ltd. é uma fabricante de isolado de CBD com sede na China que apoia compradores B2B qualificados com isolado de CBD a granel, cooperação OEM/ODM, embalagem e suporte documental.' },
      { question: 'Quais capacidades de fabricação a Vetrux opera?', answer: 'A Vetrux opera fluxos de trabalho conectados de cultivo, extração, purificação, concentração, controle de qualidade e embalagem para matérias-primas CBD em Chuxiong, Yunnan, China.' },
      { question: 'A Vetrux apoia OEM/ODM?', answer: 'Sim. A Vetrux apoia a cooperação OEM/ODM, abrangendo suporte de matérias-primas, discussões de formulação, coordenação de produção, design de embalagem e entrega de produtos acabados de acordo com os requisitos do projeto.' },
      { question: 'Quais capacidades de controle de qualidade estão disponíveis?', answer: 'A Vetrux possui capacidade analítica HPLC interna para suporte ao controle de qualidade. Documentos específicos do lote dependem do lote real, dos termos do pedido e dos resultados da verificação.' },
    ],
  },
  ja: {
    badge: 'CBDアイソレート製造メーカー',
    heroTitle1: 'CBDアイソレート製造メーカー',
    heroTitle2: '中国拠点',
    heroText: 'VETRUX — 中国Yunnan省Chuxiongに拠点を置く、垂直統合型CBDアイソレート製造メーカーです。適格なB2Bバイヤー向けに、バルクCBDアイソレート供給、OEM/ODM協力、包装、文書サポートを提供しています。',
    btnSubmitInquiry: 'お問い合わせを送信',
    btnViewProducts: '製品を見る',
    altText: 'Vetrux CBDアイソレート製造施設',
    capsSectionLabel: '製造能力',
    capsTitle: '垂直統合を備えた中国のCBDアイソレート製造メーカー',
    capsDesc: '垂直的なワークフローが、ヘンプ栽培、抽出、精製、品質管理、包装、OEM/ODMサポート、およびB2Bバイヤー向け文書協議を結び付けます。',
    capsFooterLink: '製品情報を見る →',
    answersSectionLabel: '購入者向け回答',
    answersTitle: 'CBDアイソレート製造メーカーからの回答',
    metricsSectionLabel: '主要仕様',
    metricsTitle: '製造能力の概要',
    metricsFooterLink: '製品の全仕様を見る →',
    marketsSectionLabel: '事業範囲',
    marketsTitle: 'コンプライアンスおよび注文に関する注意事項',
    btnContactUs: 'お問い合わせ',
    marketsFooter: 'サポート文書は注文要件に応じて提供される場合があります。',
    priorityServices: [
      { title: 'B2B協力', desc: 'ブランド企業、チャネルパートナー、商社、安定した調達パートナー向けのCBD原料販売協力。標準供給、長期供給、および特定方向の協力モデルが利用可能です。' },
      { title: 'OEM/ODM', desc: 'CBD製品の開発および上市のための、原料サポート、製剤開発、生産製造、包装デザイン、完成品納品。' },
      { title: '技術サポート', desc: '栽培管理、収量および含有量管理、抽出プロセス最適化、コスト管理、製品含有量および残留物管理、カンナビノイド抽出プロセスコンサルティング。' },
    ],
    capabilities: [
      { title: '栽培・育種センター', desc: 'Yunnan省Chuxiongの栽培・育種センター。品質の一貫性に重点を置いた標準化されたトレーサブルな栽培システム。' },
      { title: '抽出施設', desc: 'CBD原料ワークフローのための専門的な抽出、精製、濃縮、加工設備。' },
      { title: '分析能力', desc: '品質管理をサポートする自動化制御付き自社HPLC分析システム。' },
      { title: '品質文書', desc: '実際のバッチおよび注文条件に応じたCOA、SDS、試験報告書、商業送り状、パッキングリスト、出荷書類のサポート。' },
      { title: '輸出協議', desc: '適格なB2Bバイヤーとの輸出文書作成サポートおよび仕向市場の文書レビュー協議。' },
      { title: '包装', desc: '5 kg PE袋（27×60cm）、5 kgアルミ箔袋（35×50cm）、輸出用カートン（465×285×295 mm）、プラスチックパレット（シュリンクラップ付き）。' },
    ],
    differentiators: [
      { metric: '圃場', label: '栽培', detail: 'Yunnan調達ワークフロー' },
      { metric: '抽出', label: '加工', detail: 'CBD原料ワークフロー' },
      { metric: '精製', label: '分離', detail: 'クロマトグラフィーワークフロー' },
      { metric: 'HPLC', label: '分析システム', detail: '品質管理分析' },
      { metric: '包装', label: '包装', detail: '5 kgバルク形式' },
      { metric: 'OEM/ODM', label: 'サービス', detail: 'プロジェクト協力サポート' },
    ],
    markets: [
      { region: 'コンプライアンス注意事項', detail: '許可、ライセンス、規制当局の承認を含む仕向国での輸入コンプライアンスは、購入者/輸入者の責任です。文書は注文条件に応じて手配されます。' },
      { region: 'ラベルおよび使用上の注意', detail: '製品ラベル、使用に関する記載、および税関記載事項は、実際のバッチ、注文用途、および仕向地要件に一致する必要があります。特別なラベルまたは申告項目は、注文前に確認が必要です。' },
    ],
    manufacturerAnswers: [
      { question: 'VetruxはCBDアイソレートの製造メーカーですか？', answer: 'はい。Vetrux Biotechnology (Chuxiong) Co., Ltd.は中国拠点のCBDアイソレート製造メーカーであり、適格なB2Bバイヤー向けに、バルクCBDアイソレート、OEM/ODM協力、包装、文書サポートを提供しています。' },
      { question: 'Vetruxはどのような製造能力を有していますか？', answer: 'Vetruxは中国Yunnan省Chuxiongにおいて、栽培、抽出、精製、濃縮、品質管理、包装の各ワークフローを連携してCBD原料の製造を行っています。' },
      { question: 'VetruxはOEM/ODMに対応していますか？', answer: 'はい。Vetruxは、原料サポート、製剤協議、生産コーディネート、包装デザイン、プロジェクト要件に応じた完成品納品を含むOEM/ODM協力に対応しています。' },
      { question: 'どのような品質管理能力がありますか？', answer: 'Vetruxは品質管理サポートのための自社HPLC分析能力を有しています。バッチ固有の文書は、実際のバッチ、注文条件、および検証結果によります。' },
    ],
  },
  fi: {
    badge: 'CBD-isolaatin valmistaja',
    heroTitle1: 'CBD-isolaatin valmistaja',
    heroTitle2: 'Kiinasta',
    heroText: 'VETRUX — vertikaalisesti integroitu CBD-isolaatin valmistaja, jonka kotipaikka on Chuxiong, Yunnan, Kiina. Tuemme päteviä B2B-ostajia CBD-isolaatin tukkuerätoimituksilla, OEM/ODM-yhteistyöllä, pakkauksella ja dokumentaatiotuella.',
    btnSubmitInquiry: 'Lähetä tiedustelu',
    btnViewProducts: 'Katso tuotteet',
    altText: 'Vetruxin CBD-isolaatin valmistuslaitos',
    capsSectionLabel: 'Valmistuskyvykkyydet',
    capsTitle: 'Kiinalainen CBD-isolaatin valmistaja vertikaalisella integraatiolla',
    capsDesc: 'Vertikaaliset työnkulut yhdistävät hampun viljelyn, uuton, puhdistuksen, laadunvalvonnan, pakkauksen, OEM/ODM-tuen ja dokumentaatiokeskustelut B2B-ostajille.',
    capsFooterLink: 'Katso tuotetiedot →',
    answersSectionLabel: 'Ostajan vastauksia',
    answersTitle: 'CBD-isolaatin valmistajan vastauksia',
    metricsSectionLabel: 'Tärkeimmät spesifikaatiot',
    metricsTitle: 'Valmistuskyvykkyydet yhdellä silmäyksellä',
    metricsFooterLink: 'Katso täydelliset tuotespesifikaatiot →',
    marketsSectionLabel: 'Liiketoiminta-alue',
    marketsTitle: 'Vaatimustenmukaisuus ja tilaushuomautukset',
    btnContactUs: 'Ota yhteyttä',
    marketsFooter: 'Tukidokumentaatio voidaan toimittaa tilausvaatimusten mukaisesti.',
    priorityServices: [
      { title: 'B2B-yhteistyö', desc: 'CBD-raaka-aineiden myyntiyhteistyötä brändiasiakkaille, kanavakumppaneille, kauppayhtiöille ja vakaille hankintakumppaneille. Saatavilla on vakiotoimituksen, pitkäaikaistoimituksen ja kohdennetun yhteistyön malleja.' },
      { title: 'OEM/ODM', desc: 'Raaka-ainetuki, formulointikehitys, tuotantovalmistus, pakkaussuunnittelu ja valmiin tuotteen toimitus CBD-tuotteiden kehitykseen ja lanseeraukseen.' },
      { title: 'Tekninen tuki', desc: 'Viljelyn hallinta, sadon ja pitoisuuden valvonta, uuttoprosessin optimointi, kustannushallinta, tuotteen pitoisuuden ja jäämien valvonta sekä kannabinoidiuuttoprosessin konsultointi.' },
    ],
    capabilities: [
      { title: 'Viljely- ja jalostuskeskus', desc: 'Viljely- ja jalostuskeskus Chuxiongissa, Yunnanin maakunnassa. Standardoitu, jäljitettävä viljelyjärjestelmä, joka keskittyy laadun johdonmukaisuuteen.' },
      { title: 'Uuttolaitos', desc: 'Ammattimaiset uutto-, puhdistus-, konsentrointi- ja käsittelylaitteet CBD-raaka-aineiden työnkuluille.' },
      { title: 'Analyyttinen kyvykkyys', desc: 'Sisäinen HPLC-analyysijärjestelmä automaatio-ohjauksella, joka tukee laadunhallintaa.' },
      { title: 'Laatuasiakirjat', desc: 'COA-, SDS-, testiraportti-, kauppalasku-, pakkausluettelo- ja lähetysasiakirjatuki todellisen erän ja tilausehtojen mukaisesti.' },
      { title: 'Vientikeskustelut', desc: 'Tuki vientiasiakirjojen valmistelulle ja kohdemarkkinoiden asiakirjatarkastuskeskusteluille pätevien B2B-ostajien kanssa.' },
      { title: 'Pakkaus', desc: '5 kg PE-pussit (27×60cm), 5 kg alumiinifoliopussit (35×50cm), vientipahvilaatikot (465×285×295 mm), muovilavat kutistekääreellä.' },
    ],
    differentiators: [
      { metric: 'Pelto', label: 'Viljely', detail: 'Yunnanin hankintatyönkulku' },
      { metric: 'Uute', label: 'Käsittely', detail: 'CBD-raaka-aineiden työnkulut' },
      { metric: 'Puhdista', label: 'Erotus', detail: 'Kromatografian työnkulku' },
      { metric: 'HPLC', label: 'Analyysijärjestelmä', detail: 'Laadunvalvonta-analyysi' },
      { metric: 'Pakkaa', label: 'Pakkaus', detail: '5 kg tukkuformaatit' },
      { metric: 'OEM/ODM', label: 'Palvelut', detail: 'Projektiyhteistyön tuki' },
    ],
    markets: [
      { region: 'Vaatimustenmukaisuusilmoitus', detail: 'Kohdemaan tuontivaatimusten noudattaminen — mukaan lukien luvat, lisenssit ja viranomaishyväksynnät — on ostajan/tuojan vastuulla. Dokumentaatio järjestetään tilausehtojen mukaisesti.' },
      { region: 'Merkintä- ja käyttöhuomautukset', detail: 'Tuotemerkintöjen, käyttöilmoitusten ja tullikuvausten on vastattava todellista erää, tilauskäyttöä ja kohdevaatimuksia. Erityiset merkintä- tai ilmoituskentät on vahvistettava ennen tilaamista.' },
    ],
    manufacturerAnswers: [
      { question: 'Onko Vetrux CBD-isolaatin valmistaja?', answer: 'Kyllä. Vetrux Biotechnology (Chuxiong) Co., Ltd. on kiinalainen CBD-isolaatin valmistaja, joka tukee päteviä B2B-ostajia CBD-isolaatin tukkuerillä, OEM/ODM-yhteistyöllä, pakkauksella ja dokumentaatiotuella.' },
      { question: 'Mitä valmistuskyvykkyyksiä Vetruxilla on?', answer: 'Vetrux operoi yhdistettyjä viljelyn, uuton, puhdistuksen, konsentroinnin, laadunvalvonnan ja pakkauksen työnkulkuja CBD-raaka-aineille Chuxiongissa, Yunnanissa, Kiinassa.' },
      { question: 'Tukeeko Vetrux OEM/ODM-palveluita?', answer: 'Kyllä. Vetrux tukee OEM/ODM-yhteistyötä, joka kattaa raaka-ainetuen, formulointikeskustelut, tuotannon koordinoinnin, pakkaussuunnittelun ja valmiin tuotteen toimituksen projektivaatimusten mukaisesti.' },
      { question: 'Mitä laadunvalvontakyvykkyyksiä on saatavilla?', answer: 'Vetruxilla on sisäinen HPLC-analyysikyvykkyys laadunvalvontatukeen. Eräkohtaiset asiakirjat riippuvat todellisesta erästä, tilausehdoista ja varmennustuloksista.' },
    ],
  },
} as const;

type ContentLocale = typeof content.en;

function t(locale?: Locale): ContentLocale {
  const loc = locale ?? 'en';
  return (content as unknown as Record<string, ContentLocale>)[loc] ?? content.en;
}

export default function CbdIsolateManufacturerClient({ locale }: CbdIsolateManufacturerClientProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const capsRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const marketsRef = useRef<HTMLDivElement>(null);

  useReveal(heroRef, { y: 40, stagger: 0.1, start: 'top 80%' });
  useReveal(capsRef, { y: 40, stagger: 0.08, start: 'top 80%' });
  useReveal(metricsRef, { y: 40, stagger: 0.08, start: 'top 80%' });
  useReveal(marketsRef, { y: 40, stagger: 0.1, start: 'top 80%' });

  const strings = t(locale);
  const langPrefix = locale && locale !== 'en' ? `/${locale}` : '';

  return (
    <div className="bg-surface">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-card">
              <Badge variant="default" className="mb-6">{strings.badge}</Badge>
              <h1 className="text-5xl md:text-6xl font-serif font-medium text-on-background tracking-tight leading-[1.0] mb-6">
                {strings.heroTitle1}
                <br />
                <span className="italic text-primary">{strings.heroTitle2}</span>
              </h1>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-10 max-w-md">
                {strings.heroText}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href={`${langPrefix}/inquiry`}>
                  <Button variant="accent" size="lg" icon={ArrowRight}>{strings.btnSubmitInquiry}</Button>
                </Link>
                <Link href={`${langPrefix}/products/cbd-isolate`}>
                  <Button variant="outline" size="lg">{strings.btnViewProducts}</Button>
                </Link>
              </div>
            </div>
            <div className="reveal-card">
              <div className="relative w-full h-[500px]">
                <Image src="/images/vetrux_images/cbd-ethanol-extraction-tank-6m3.jpg" alt={strings.altText} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIORITY SERVICES ──────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {strings.priorityServices.map((service) => (
              <div
                key={service.title}
                className="bg-surface-container-lowest p-6 border-l-2 border-accent"
              >
                {strings.priorityServices.indexOf(service) === 0 ? <Globe size={20} className="text-primary mb-4" /> : strings.priorityServices.indexOf(service) === 1 ? <PackageCheck size={20} className="text-primary mb-4" /> : <Wrench size={20} className="text-primary mb-4" />}
                <h2 className="text-sm font-extrabold text-on-surface tracking-tighter mb-2">
                  {service.title}
                </h2>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ──────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={capsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>{strings.capsSectionLabel}</SectionLabel>
            <h2 className="text-3xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">
              {strings.capsTitle}
            </h2>
            <p className="text-[15px] text-on-surface-variant max-w-xl">
              {strings.capsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {strings.capabilities.map((cap) => (
              <div
                key={cap.title}
                tabIndex={0}
                className="reveal-card bg-surface-container-lowest p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                {strings.capabilities.indexOf(cap) === 0 ? <Leaf size={20} className="text-primary mb-4" /> : strings.capabilities.indexOf(cap) === 1 ? <Factory size={20} className="text-primary mb-4" /> : strings.capabilities.indexOf(cap) === 2 ? <FlaskConical size={20} className="text-primary mb-4" /> : strings.capabilities.indexOf(cap) === 3 ? <CheckCircle size={20} className="text-primary mb-4" /> : strings.capabilities.indexOf(cap) === 4 ? <Globe size={20} className="text-primary mb-4" /> : <Truck size={20} className="text-primary mb-4" />}
                <p className="text-sm font-extrabold text-on-surface tracking-tighter mb-2">{cap.title}</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-8">
            <p className="text-xs text-on-surface-variant">
              <Link href={`${langPrefix}/products/cbd-isolate`} className="text-accent underline">
                {strings.capsFooterLink}
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── GEO ANSWERS ───────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>{strings.answersSectionLabel}</SectionLabel>
            <h2 className="text-3xl font-serif font-medium text-on-background tracking-tight leading-[1.05]">
              {strings.answersTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {strings.manufacturerAnswers.map((item) => (
              <div key={item.question} className="bg-surface-container-lowest p-6 border-l-2 border-accent">
                <h3 className="text-sm font-extrabold text-on-surface tracking-tighter mb-2">
                  {item.question}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY METRICS ───────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={metricsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>{strings.metricsSectionLabel}</SectionLabel>
            <h2 className="text-3xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">
              {strings.metricsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {strings.differentiators.map((d) => (
              <div key={d.label} className="reveal-card bg-surface-container-lowest p-6 text-center border-l-2 border-transparent hover:border-accent transition-colors duration-200">
                <p className="text-2xl font-serif font-semibold text-primary tracking-tight mb-1">{d.metric}</p>
                <p className="text-xs font-semibold text-on-surface tracking-wider uppercase mb-1">{d.label}</p>
                <p className="text-xs text-on-surface-variant">{d.detail}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-8 text-center">
            <Link href={`${langPrefix}/products/cbd-isolate`} className="text-xs text-accent underline">
              {strings.metricsFooterLink}
            </Link>
          </div>
        </div>
      </section>

      {/* ── MARKETS SERVED ────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={marketsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>{strings.marketsSectionLabel}</SectionLabel>
            <h2 className="text-3xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">
              {strings.marketsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strings.markets.map((m) => (
              <div
                key={m.region}
                tabIndex={0}
                className="reveal-card flex gap-4 bg-surface-container-lowest p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <Globe size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-extrabold text-on-surface tracking-tighter mb-1">{m.region}</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-12 text-center">
            <Link href={`${langPrefix}/inquiry`}>
              <Button variant="accent" size="lg" icon={ArrowRight}>{strings.btnContactUs}</Button>
            </Link>
            <p className="text-xs text-on-surface-variant mt-4">
              {strings.marketsFooter}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
