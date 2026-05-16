'use client'

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Package, Shield, Globe, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import SectionLabel from '@/components/atoms/SectionLabel';
import { useReveal } from '@/hooks/useReveal';
import type { Locale } from '@/i18n/locales';

interface WholesaleCbdIsolateClientProps {
  locale?: Locale;
}

const content = {
  en: {
    badge: 'Wholesale CBD Isolate',
    heroTitle1: 'Bulk CBD Isolate',
    heroTitle2: 'Supply for B2B Buyers',
    heroText: 'VETRUX supplies bulk CBD isolate with volume supply discussions, packaging options, documentation support, OEM/ODM cooperation, and inquiry process support for qualified B2B buyers from Chuxiong, Yunnan, China.',
    altText: 'Vetrux facility',
    supplySectionLabel: 'Supply by Volume Tier',
    supplyTitle: 'CBD Isolate Volume Supply',
    supplyFooter: 'Contact us to discuss cooperation arrangements suited to your requirements.',
    supplyFooterLink: 'Submit an inquiry →',
    answersSectionLabel: 'Buyer Answers',
    answersTitle: 'Bulk CBD isolate buyer answers',
    shippingSectionLabel: 'Packaging & Compliance',
    shippingTitle: 'Packaging, Documentation & Compliance',
    shippingDesc: 'Standardized packaging and documentation support arranged according to order requirements.',
    shippingFooter: 'Specific logistics and documentation arrangements depend on actual order terms.',
    shippingFooterLink: 'Contact us →',
    whySectionLabel: 'Why Vetrux',
    whyTitle: 'Built for B2B Procurement Teams',
    btnGetPricing: 'Get Wholesale Pricing',
    volumeTiers: [
      { range: 'Standard Supply', label: 'Regular Orders', discount: 'Contact for details', note: 'CBD raw materials' },
      { range: 'Long-Term Supply', label: 'Ongoing Cooperation', discount: 'Contact for details', note: 'Stable supply arrangements for recurring needs' },
      { range: 'Project-Based', label: 'Custom Cooperation', discount: 'Contact for details', note: 'Tailored to specific project requirements' },
      { range: 'OEM/ODM', label: 'Full Service', discount: 'Contact for details', note: 'Formulation, production, packaging, and delivery' },
    ],
    shippingTerms: [
      { term: 'Packaging', desc: 'PE bags 5 kg/bag (27×60cm, food grade), aluminum foil bags 5 kg/bag (35×50cm, food grade), export cartons (465×285×295mm, 2 bags/carton), plastic pallets with shrink wrap.' },
      { term: 'Documentation', desc: 'Supporting documents including COA, SDS, test reports, commercial invoices, and packing lists may be provided according to order requirements.' },
      { term: 'Compliance', desc: 'Destination country import compliance — including permits, licenses, and regulatory approvals — is the buyer/importer responsibility. Labels and declarations match actual batch and destination requirements.' },
    ],
    whyWholesale: [
      { title: 'Bulk CBD Isolate', desc: 'CBD isolate supply discussions for qualified B2B buyers from our Chuxiong, Yunnan operation.' },
      { title: 'Facility Workflow', desc: 'Cultivation, extraction, purification, quality-control, packaging, and documentation workflows for CBD raw materials.' },
      { title: 'OEM/ODM Services', desc: 'Raw material support, formulation development, production, packaging design, and finished product delivery.' },
      { title: 'Technical Support', desc: 'Cultivation management, extraction process optimization, cost control, and cannabinoid extraction consulting.' },
      { title: 'Standardized Packaging', desc: '5 kg PE bags (27×60cm), 5 kg aluminum foil bags (35×50cm), export cartons (465×285×295mm), plastic pallets.' },
    ],
    wholesaleAnswers: [
      { question: 'Can B2B buyers request bulk CBD isolate?', answer: 'Yes. Qualified B2B buyers can request bulk CBD isolate discussions, product information, packaging details, documentation support, and quote review through the Vetrux inquiry process.' },
      { question: 'What cooperation models are available?', answer: 'Vetrux supports standard supply, long-term supply discussions, project-based cooperation, and OEM/ODM services for brand clients, channel partners, trading companies, and recurring procurement teams.' },
      { question: 'What packaging is used for bulk orders?', answer: 'Bulk orders can use 5 kg PE bags or 5 kg aluminum-foil bags in export cartons, with palletization and shrink wrap arranged according to order requirements.' },
      { question: 'What should buyers prepare before requesting a quote?', answer: 'Buyers should prepare target quantity, packaging needs, document requirements, intended application, destination market, delivery timeline, and importer compliance responsibilities before requesting a quote.' },
    ],
  },
  de: {
    badge: 'CBD Isolat Großhandel',
    heroTitle1: 'CBD Isolat in großen Mengen',
    heroTitle2: 'Lieferung für B2B-Käufer',
    heroText: 'VETRUX liefert CBD Isolat in großen Mengen mit Mengenliefergesprächen, Verpackungsoptionen, Dokumentationssupport, OEM/ODM-Kooperation und Anfrageprozess-Support für qualifizierte B2B-Käufer aus Chuxiong, Yunnan, China.',
    altText: 'Vetrux Anlage',
    supplySectionLabel: 'Lieferung nach Mengenstufe',
    supplyTitle: 'CBD Isolat Mengenlieferung',
    supplyFooter: 'Kontaktieren Sie uns, um Kooperationsvereinbarungen zu besprechen, die Ihren Anforderungen entsprechen.',
    supplyFooterLink: 'Anfrage senden →',
    answersSectionLabel: 'Käufer-Antworten',
    answersTitle: 'Antworten für CBD Isolat Großabnehmer',
    shippingSectionLabel: 'Verpackung & Compliance',
    shippingTitle: 'Verpackung, Dokumentation & Compliance',
    shippingDesc: 'Standardisierte Verpackung und Dokumentationssupport, bereitgestellt gemäß den Auftragsanforderungen.',
    shippingFooter: 'Konkrete Logistik- und Dokumentationsvereinbarungen hängen von den tatsächlichen Auftragsbedingungen ab.',
    shippingFooterLink: 'Kontaktieren Sie uns →',
    whySectionLabel: 'Warum Vetrux',
    whyTitle: 'Entwickelt für B2B-Beschaffungsteams',
    btnGetPricing: 'Großhandelspreise anfordern',
    volumeTiers: [
      { range: 'Standardlieferung', label: 'Reguläre Bestellungen', discount: 'Details auf Anfrage', note: 'CBD-Rohstoffe' },
      { range: 'Langzeitlieferung', label: 'Laufende Zusammenarbeit', discount: 'Details auf Anfrage', note: 'Stabile Liefervereinbarungen für wiederkehrende Bedarfe' },
      { range: 'Projektbezogen', label: 'Individuelle Zusammenarbeit', discount: 'Details auf Anfrage', note: 'Zugeschnitten auf spezifische Projektanforderungen' },
      { range: 'OEM/ODM', label: 'Komplettservice', discount: 'Details auf Anfrage', note: 'Formulierung, Produktion, Verpackung und Lieferung' },
    ],
    shippingTerms: [
      { term: 'Verpackung', desc: 'PE-Beutel 5 kg/Beutel (27×60cm, lebensmittelecht), Aluminiumfolienbeutel 5 kg/Beutel (35×50cm, lebensmittelecht), Exportkartons (465×285×295mm, 2 Beutel/Karton), Kunststoffpaletten mit Schrumpffolie.' },
      { term: 'Dokumentation', desc: 'Unterstützende Dokumente einschließlich COA, SDS, Testberichte, Handelsrechnungen und Packlisten können gemäß den Auftragsanforderungen bereitgestellt werden.' },
      { term: 'Compliance', desc: 'Die Einhaltung der Einfuhrbestimmungen des Ziellandes — einschließlich Genehmigungen, Lizenzen und behördlicher Zulassungen — liegt in der Verantwortung des Käufers/Importeurs. Kennzeichnungen und Deklarationen entsprechen der tatsächlichen Charge und den Anforderungen des Ziellandes.' },
    ],
    whyWholesale: [
      { title: 'CBD Isolat in großen Mengen', desc: 'CBD Isolat Liefergespräche für qualifizierte B2B-Käufer aus unserem Betrieb in Chuxiong, Yunnan.' },
      { title: 'Anlagen-Workflow', desc: 'Anbau-, Extraktions-, Reinigungs-, Qualitätskontroll-, Verpackungs- und Dokumentationsworkflows für CBD-Rohstoffe.' },
      { title: 'OEM/ODM-Dienstleistungen', desc: 'Rohstoffunterstützung, Formulierungsentwicklung, Produktion, Verpackungsdesign und Fertigproduktlieferung.' },
      { title: 'Technischer Support', desc: 'Anbaumanagement, Optimierung des Extraktionsprozesses, Kostenkontrolle und Beratung zur Cannabinoid-Extraktion.' },
      { title: 'Standardisierte Verpackung', desc: '5 kg PE-Beutel (27×60cm), 5 kg Aluminiumfolienbeutel (35×50cm), Exportkartons (465×285×295mm), Kunststoffpaletten.' },
    ],
    wholesaleAnswers: [
      { question: 'Können B2B-Käufer CBD Isolat in großen Mengen anfordern?', answer: 'Ja. Qualifizierte B2B-Käufer können über den Vetrux-Anfrageprozess Gespräche über CBD Isolat in großen Mengen, Produktinformationen, Verpackungsdetails, Dokumentationssupport und Angebotsprüfung anfordern.' },
      { question: 'Welche Kooperationsmodelle sind verfügbar?', answer: 'Vetrux unterstützt Standardlieferung, Langzeitliefergespräche, projektbezogene Zusammenarbeit und OEM/ODM-Dienstleistungen für Markenkunden, Channel-Partner, Handelsunternehmen und wiederkehrende Beschaffungsteams.' },
      { question: 'Welche Verpackung wird für Großbestellungen verwendet?', answer: 'Großbestellungen können 5 kg PE-Beutel oder 5 kg Aluminiumfolienbeutel in Exportkartons verwenden, mit Palettierung und Schrumpffolie, die gemäß den Auftragsanforderungen bereitgestellt werden.' },
      { question: 'Was sollten Käufer vor der Angebotsanfrage vorbereiten?', answer: 'Käufer sollten Zielmenge, Verpackungsanforderungen, Dokumentenanforderungen, beabsichtigte Anwendung, Zielmarkt, Lieferzeitplan und die Verantwortlichkeiten des Importeurs für die Einhaltung der Vorschriften vor der Angebotsanfrage vorbereiten.' },
    ],
  },
  fr: {
    badge: "Isolat de CBD en Gros",
    heroTitle1: "Isolat de CBD en Vrac",
    heroTitle2: 'Fourniture pour Acheteurs B2B',
    heroText: "VETRUX fournit de l'isolat de CBD en vrac avec des discussions sur la fourniture en volume, des options d'emballage, un support documentaire, une coopération OEM/ODM et un support de processus de demande pour les acheteurs B2B qualifiés de Chuxiong, Yunnan, Chine.",
    altText: 'Installation Vetrux',
    supplySectionLabel: 'Fourniture par Niveau de Volume',
    supplyTitle: "Fourniture en Volume d'Isolat de CBD",
    supplyFooter: 'Contactez-nous pour discuter des accords de coopération adaptés à vos besoins.',
    supplyFooterLink: 'Soumettre une demande →',
    answersSectionLabel: 'Réponses aux Acheteurs',
    answersTitle: "Réponses pour les acheteurs d'isolat de CBD en vrac",
    shippingSectionLabel: 'Emballage et Conformité',
    shippingTitle: 'Emballage, Documentation et Conformité',
    shippingDesc: 'Emballage standardisé et support documentaire fournis selon les exigences de la commande.',
    shippingFooter: 'Les dispositions logistiques et documentaires spécifiques dépendent des conditions réelles de la commande.',
    shippingFooterLink: 'Contactez-nous →',
    whySectionLabel: 'Pourquoi Vetrux',
    whyTitle: 'Conçu pour les Équipes Achats B2B',
    btnGetPricing: 'Obtenir les Prix de Gros',
    volumeTiers: [
      { range: 'Fourniture Standard', label: 'Commandes Régulières', discount: 'Détails sur demande', note: 'Matières premières CBD' },
      { range: 'Fourniture Long Terme', label: 'Coopération Continue', discount: 'Détails sur demande', note: 'Accords de fourniture stables pour besoins récurrents' },
      { range: 'Basé sur Projet', label: 'Coopération Personnalisée', discount: 'Détails sur demande', note: 'Adapté aux exigences spécifiques du projet' },
      { range: 'OEM/ODM', label: 'Service Complet', discount: 'Détails sur demande', note: 'Formulation, production, emballage et livraison' },
    ],
    shippingTerms: [
      { term: 'Emballage', desc: 'Sacs PE 5 kg/sac (27×60cm, qualité alimentaire), sacs en aluminium 5 kg/sac (35×50cm, qualité alimentaire), cartons d\'exportation (465×285×295mm, 2 sacs/carton), palettes en plastique avec film rétractable.' },
      { term: 'Documentation', desc: 'Les documents justificatifs, y compris COA, SDS, rapports de test, factures commerciales et listes de colisage, peuvent être fournis selon les exigences de la commande.' },
      { term: 'Conformité', desc: "La conformité à l'importation dans le pays de destination — y compris les permis, licences et approbations réglementaires — relève de la responsabilité de l'acheteur/importateur. Les étiquettes et déclarations correspondent au lot réel et aux exigences de destination." },
    ],
    whyWholesale: [
      { title: "Isolat de CBD en Vrac", desc: "Discussions sur la fourniture d'isolat de CBD pour les acheteurs B2B qualifiés depuis notre exploitation de Chuxiong, Yunnan." },
      { title: 'Flux de Travail de l\'Installation', desc: 'Flux de travail de culture, extraction, purification, contrôle qualité, emballage et documentation pour les matières premières CBD.' },
      { title: 'Services OEM/ODM', desc: "Support en matières premières, développement de formulation, production, conception d'emballage et livraison de produits finis." },
      { title: 'Support Technique', desc: "Gestion de la culture, optimisation du processus d'extraction, contrôle des coûts et conseil en extraction de cannabinoïdes." },
      { title: 'Emballage Standardisé', desc: 'Sacs PE de 5 kg (27×60cm), sacs en aluminium de 5 kg (35×50cm), cartons d\'exportation (465×285×295mm), palettes en plastique.' },
    ],
    wholesaleAnswers: [
      { question: "Les acheteurs B2B peuvent-ils demander de l'isolat de CBD en vrac?", answer: "Oui. Les acheteurs B2B qualifiés peuvent demander des discussions sur l'isolat de CBD en vrac, des informations sur les produits, des détails d'emballage, un support documentaire et un examen des devis via le processus de demande Vetrux." },
      { question: 'Quels modèles de coopération sont disponibles?', answer: 'Vetrux prend en charge la fourniture standard, les discussions sur la fourniture à long terme, la coopération basée sur projet et les services OEM/ODM pour les clients de marque, les partenaires de distribution, les sociétés de négoce et les équipes d\'achat récurrentes.' },
      { question: 'Quel emballage est utilisé pour les commandes en vrac?', answer: 'Les commandes en vrac peuvent utiliser des sacs PE de 5 kg ou des sacs en aluminium de 5 kg dans des cartons d\'exportation, avec palettisation et film rétractable fournis selon les exigences de la commande.' },
      { question: 'Que doivent préparer les acheteurs avant de demander un devis?', answer: 'Les acheteurs doivent préparer la quantité cible, les besoins d\'emballage, les exigences documentaires, l\'application prévue, le marché de destination, le calendrier de livraison et les responsabilités de conformité de l\'importateur avant de demander un devis.' },
    ],
  },
  es: {
    badge: 'Aislado de CBD al por Mayor',
    heroTitle1: 'Aislado de CBD a Granel',
    heroTitle2: 'Suministro para Compradores B2B',
    heroText: 'VETRUX suministra aislado de CBD a granel con conversaciones sobre suministro por volumen, opciones de embalaje, soporte documental, cooperación OEM/ODM y soporte en el proceso de consulta para compradores B2B cualificados de Chuxiong, Yunnan, China.',
    altText: 'Instalación Vetrux',
    supplySectionLabel: 'Suministro por Nivel de Volumen',
    supplyTitle: 'Suministro por Volumen de Aislado de CBD',
    supplyFooter: 'Contáctenos para discutir acuerdos de cooperación adaptados a sus requisitos.',
    supplyFooterLink: 'Enviar una consulta →',
    answersSectionLabel: 'Respuestas para Compradores',
    answersTitle: 'Respuestas para compradores de aislado de CBD a granel',
    shippingSectionLabel: 'Embalaje y Cumplimiento',
    shippingTitle: 'Embalaje, Documentación y Cumplimiento',
    shippingDesc: 'Embalaje estandarizado y soporte documental proporcionado según los requisitos del pedido.',
    shippingFooter: 'Los acuerdos logísticos y documentales específicos dependen de los términos reales del pedido.',
    shippingFooterLink: 'Contáctenos →',
    whySectionLabel: 'Por Qué Vetrux',
    whyTitle: 'Diseñado para Equipos de Compras B2B',
    btnGetPricing: 'Obtener Precios al por Mayor',
    volumeTiers: [
      { range: 'Suministro Estándar', label: 'Pedidos Regulares', discount: 'Detalles a consultar', note: 'Materias primas CBD' },
      { range: 'Suministro a Largo Plazo', label: 'Cooperación Continua', discount: 'Detalles a consultar', note: 'Acuerdos de suministro estables para necesidades recurrentes' },
      { range: 'Basado en Proyectos', label: 'Cooperación Personalizada', discount: 'Detalles a consultar', note: 'Adaptado a los requisitos específicos del proyecto' },
      { range: 'OEM/ODM', label: 'Servicio Completo', discount: 'Detalles a consultar', note: 'Formulación, producción, embalaje y entrega' },
    ],
    shippingTerms: [
      { term: 'Embalaje', desc: 'Bolsas PE de 5 kg/bolsa (27×60cm, grado alimenticio), bolsas de aluminio de 5 kg/bolsa (35×50cm, grado alimenticio), cajas de exportación (465×285×295mm, 2 bolsas/caja), palés de plástico con film retráctil.' },
      { term: 'Documentación', desc: 'Los documentos de respaldo, incluidos COA, SDS, informes de prueba, facturas comerciales y listas de empaque, pueden proporcionarse según los requisitos del pedido.' },
      { term: 'Cumplimiento', desc: 'El cumplimiento de importación del país de destino — incluidos permisos, licencias y aprobaciones regulatorias — es responsabilidad del comprador/importador. Las etiquetas y declaraciones coinciden con el lote real y los requisitos del destino.' },
    ],
    whyWholesale: [
      { title: 'Aislado de CBD a Granel', desc: 'Conversaciones sobre suministro de aislado de CBD para compradores B2B cualificados desde nuestra operación en Chuxiong, Yunnan.' },
      { title: 'Flujo de Trabajo de la Instalación', desc: 'Flujos de trabajo de cultivo, extracción, purificación, control de calidad, embalaje y documentación para materias primas CBD.' },
      { title: 'Servicios OEM/ODM', desc: 'Soporte en materias primas, desarrollo de formulaciones, producción, diseño de embalaje y entrega de productos terminados.' },
      { title: 'Soporte Técnico', desc: 'Gestión de cultivo, optimización del proceso de extracción, control de costes y consultoría en extracción de cannabinoides.' },
      { title: 'Embalaje Estandarizado', desc: 'Bolsas PE de 5 kg (27×60cm), bolsas de aluminio de 5 kg (35×50cm), cajas de exportación (465×285×295mm), palés de plástico.' },
    ],
    wholesaleAnswers: [
      { question: '¿Pueden los compradores B2B solicitar aislado de CBD a granel?', answer: 'Sí. Los compradores B2B cualificados pueden solicitar conversaciones sobre aislado de CBD a granel, información del producto, detalles de embalaje, soporte documental y revisión de cotizaciones a través del proceso de consulta de Vetrux.' },
      { question: '¿Qué modelos de cooperación están disponibles?', answer: 'Vetrux admite suministro estándar, conversaciones de suministro a largo plazo, cooperación basada en proyectos y servicios OEM/ODM para clientes de marca, socios de canal, empresas comerciales y equipos de compras recurrentes.' },
      { question: '¿Qué embalaje se utiliza para pedidos a granel?', answer: 'Los pedidos a granel pueden usar bolsas PE de 5 kg o bolsas de aluminio de 5 kg en cajas de exportación, con paletización y film retráctil proporcionados según los requisitos del pedido.' },
      { question: '¿Qué deben preparar los compradores antes de solicitar una cotización?', answer: 'Los compradores deben preparar la cantidad objetivo, las necesidades de embalaje, los requisitos documentales, la aplicación prevista, el mercado de destino, el calendario de entrega y las responsabilidades de cumplimiento del importador antes de solicitar una cotización.' },
    ],
  },
  it: {
    badge: "Isolato di CBD all'Ingrosso",
    heroTitle1: 'Isolato di CBD Sfuso',
    heroTitle2: 'Fornitura per Acquirenti B2B',
    heroText: "VETRUX fornisce isolato di CBD sfuso con discussioni sulla fornitura in volume, opzioni di imballaggio, supporto documentale, cooperazione OEM/ODM e supporto al processo di richiesta per acquirenti B2B qualificati da Chuxiong, Yunnan, Cina.",
    altText: 'Stabilimento Vetrux',
    supplySectionLabel: 'Fornitura per Livello di Volume',
    supplyTitle: "Fornitura in Volume di Isolato di CBD",
    supplyFooter: 'Contattateci per discutere accordi di cooperazione adatti alle vostre esigenze.',
    supplyFooterLink: 'Invia una richiesta →',
    answersSectionLabel: 'Risposte per Acquirenti',
    answersTitle: "Risposte per acquirenti di isolato di CBD all'ingrosso",
    shippingSectionLabel: 'Imballaggio e Conformità',
    shippingTitle: 'Imballaggio, Documentazione e Conformità',
    shippingDesc: "Imballaggio standardizzato e supporto documentale forniti secondo i requisiti d'ordine.",
    shippingFooter: "Gli accordi logistici e documentali specifici dipendono dai termini effettivi dell'ordine.",
    shippingFooterLink: 'Contattaci →',
    whySectionLabel: 'Perché Vetrux',
    whyTitle: 'Progettato per Team di Approvvigionamento B2B',
    btnGetPricing: 'Ottieni Prezzi all\'Ingrosso',
    volumeTiers: [
      { range: 'Fornitura Standard', label: 'Ordini Regolari', discount: 'Dettagli su richiesta', note: 'Materie prime CBD' },
      { range: 'Fornitura a Lungo Termine', label: 'Cooperazione Continuativa', discount: 'Dettagli su richiesta', note: 'Accordi di fornitura stabili per esigenze ricorrenti' },
      { range: 'Basata su Progetto', label: 'Cooperazione Personalizzata', discount: 'Dettagli su richiesta', note: 'Adattata ai requisiti specifici del progetto' },
      { range: 'OEM/ODM', label: 'Servizio Completo', discount: 'Dettagli su richiesta', note: 'Formulazione, produzione, imballaggio e consegna' },
    ],
    shippingTerms: [
      { term: 'Imballaggio', desc: 'Sacchi PE 5 kg/sacco (27×60cm, grado alimentare), sacchi in alluminio 5 kg/sacco (35×50cm, grado alimentare), cartoni per esportazione (465×285×295mm, 2 sacchi/cartone), pallet in plastica con film termoretraibile.' },
      { term: 'Documentazione', desc: "I documenti di supporto, inclusi COA, SDS, rapporti di prova, fatture commerciali e liste di imballaggio, possono essere forniti secondo i requisiti d'ordine." },
      { term: 'Conformità', desc: "La conformità all'importazione nel paese di destinazione — inclusi permessi, licenze e approvazioni normative — è responsabilità dell'acquirente/importatore. Le etichette e le dichiarazioni corrispondono al lotto effettivo e ai requisiti di destinazione." },
    ],
    whyWholesale: [
      { title: 'Isolato di CBD Sfuso', desc: "Discussioni sulla fornitura di isolato di CBD per acquirenti B2B qualificati dalla nostra operazione di Chuxiong, Yunnan." },
      { title: 'Flusso di Lavoro dell\'Impianto', desc: 'Flussi di lavoro di coltivazione, estrazione, purificazione, controllo qualità, imballaggio e documentazione per materie prime CBD.' },
      { title: 'Servizi OEM/ODM', desc: 'Supporto per materie prime, sviluppo di formulazioni, produzione, progettazione di imballaggi e consegna di prodotti finiti.' },
      { title: 'Supporto Tecnico', desc: "Gestione della coltivazione, ottimizzazione del processo di estrazione, controllo dei costi e consulenza sull'estrazione di cannabinoidi." },
      { title: 'Imballaggio Standardizzato', desc: 'Sacchi PE da 5 kg (27×60cm), sacchi in alluminio da 5 kg (35×50cm), cartoni per esportazione (465×285×295mm), pallet in plastica.' },
    ],
    wholesaleAnswers: [
      { question: "Gli acquirenti B2B possono richiedere isolato di CBD all'ingrosso?", answer: "Sì. Gli acquirenti B2B qualificati possono richiedere discussioni sull'isolato di CBD all'ingrosso, informazioni sul prodotto, dettagli sull'imballaggio, supporto documentale e revisione dei preventivi tramite il processo di richiesta Vetrux." },
      { question: 'Quali modelli di cooperazione sono disponibili?', answer: 'Vetrux supporta fornitura standard, discussioni sulla fornitura a lungo termine, cooperazione basata su progetto e servizi OEM/ODM per clienti di marca, partner di canale, società commerciali e team di approvvigionamento ricorrenti.' },
      { question: "Quale imballaggio viene utilizzato per gli ordini all'ingrosso?", answer: "Gli ordini all'ingrosso possono utilizzare sacchi PE da 5 kg o sacchi in alluminio da 5 kg in cartoni per esportazione, con pallettizzazione e film termoretraibile forniti secondo i requisiti d'ordine." },
      { question: 'Cosa dovrebbero preparare gli acquirenti prima di richiedere un preventivo?', answer: "Gli acquirenti dovrebbero preparare la quantità target, le esigenze di imballaggio, i requisiti documentali, l'applicazione prevista, il mercato di destinazione, la tempistica di consegna e le responsabilità di conformità dell'importatore prima di richiedere un preventivo." },
    ],
  },
  pt: {
    badge: 'Isolado de CBD no Atacado',
    heroTitle1: 'Isolado de CBD a Granel',
    heroTitle2: 'Fornecimento para Compradores B2B',
    heroText: 'A VETRUX fornece isolado de CBD a granel com discussões sobre fornecimento por volume, opções de embalagem, suporte documental, cooperação OEM/ODM e suporte ao processo de consulta para compradores B2B qualificados de Chuxiong, Yunnan, China.',
    altText: 'Instalação Vetrux',
    supplySectionLabel: 'Fornecimento por Nível de Volume',
    supplyTitle: 'Fornecimento por Volume de Isolado de CBD',
    supplyFooter: 'Entre em contato para discutir acordos de cooperação adequados às suas necessidades.',
    supplyFooterLink: 'Enviar uma consulta →',
    answersSectionLabel: 'Respostas para Compradores',
    answersTitle: 'Respostas para compradores de isolado de CBD a granel',
    shippingSectionLabel: 'Embalagem e Conformidade',
    shippingTitle: 'Embalagem, Documentação e Conformidade',
    shippingDesc: 'Embalagem padronizada e suporte documental fornecidos de acordo com os requisitos do pedido.',
    shippingFooter: 'Os acordos logísticos e documentais específicos dependem dos termos reais do pedido.',
    shippingFooterLink: 'Entre em contato →',
    whySectionLabel: 'Por que Vetrux',
    whyTitle: 'Desenvolvido para Equipas de Compras B2B',
    btnGetPricing: 'Obter Preços de Atacado',
    volumeTiers: [
      { range: 'Fornecimento Padrão', label: 'Pedidos Regulares', discount: 'Detalhes sob consulta', note: 'Matérias-primas CBD' },
      { range: 'Fornecimento de Longo Prazo', label: 'Cooperação Contínua', discount: 'Detalhes sob consulta', note: 'Acordos de fornecimento estáveis para necessidades recorrentes' },
      { range: 'Baseado em Projeto', label: 'Cooperação Personalizada', discount: 'Detalhes sob consulta', note: 'Adaptado aos requisitos específicos do projeto' },
      { range: 'OEM/ODM', label: 'Serviço Completo', discount: 'Detalhes sob consulta', note: 'Formulação, produção, embalagem e entrega' },
    ],
    shippingTerms: [
      { term: 'Embalagem', desc: 'Sacos PE de 5 kg/saco (27×60cm, grau alimentício), sacos de alumínio de 5 kg/saco (35×50cm, grau alimentício), caixas de exportação (465×285×295mm, 2 sacos/caixa), paletes de plástico com filme retrátil.' },
      { term: 'Documentação', desc: 'Documentos de suporte, incluindo COA, SDS, relatórios de teste, faturas comerciais e listas de embalagem, podem ser fornecidos de acordo com os requisitos do pedido.' },
      { term: 'Conformidade', desc: 'A conformidade de importação do país de destino — incluindo autorizações, licenças e aprovações regulatórias — é de responsabilidade do comprador/importador. Os rótulos e declarações correspondem ao lote real e aos requisitos de destino.' },
    ],
    whyWholesale: [
      { title: 'Isolado de CBD a Granel', desc: 'Discussões sobre fornecimento de isolado de CBD para compradores B2B qualificados da nossa operação em Chuxiong, Yunnan.' },
      { title: 'Fluxo de Trabalho da Instalação', desc: 'Fluxos de trabalho de cultivo, extração, purificação, controle de qualidade, embalagem e documentação para matérias-primas CBD.' },
      { title: 'Serviços OEM/ODM', desc: 'Suporte de matérias-primas, desenvolvimento de formulação, produção, design de embalagem e entrega de produtos acabados.' },
      { title: 'Suporte Técnico', desc: 'Gestão de cultivo, otimização do processo de extração, controle de custos e consultoria em extração de canabinoides.' },
      { title: 'Embalagem Padronizada', desc: 'Sacos PE de 5 kg (27×60cm), sacos de alumínio de 5 kg (35×50cm), caixas de exportação (465×285×295mm), paletes de plástico.' },
    ],
    wholesaleAnswers: [
      { question: 'Os compradores B2B podem solicitar isolado de CBD a granel?', answer: 'Sim. Compradores B2B qualificados podem solicitar discussões sobre isolado de CBD a granel, informações do produto, detalhes de embalagem, suporte documental e revisão de cotações através do processo de consulta Vetrux.' },
      { question: 'Quais modelos de cooperação estão disponíveis?', answer: 'A Vetrux apoia fornecimento padrão, discussões de fornecimento de longo prazo, cooperação baseada em projetos e serviços OEM/ODM para clientes de marca, parceiros de canal, empresas comerciais e equipas de compras recorrentes.' },
      { question: 'Qual embalagem é usada para pedidos a granel?', answer: 'Pedidos a granel podem usar sacos PE de 5 kg ou sacos de alumínio de 5 kg em caixas de exportação, com paletização e filme retrátil fornecidos de acordo com os requisitos do pedido.' },
      { question: 'O que os compradores devem preparar antes de solicitar uma cotação?', answer: 'Os compradores devem preparar a quantidade alvo, necessidades de embalagem, requisitos documentais, aplicação pretendida, mercado de destino, cronograma de entrega e responsabilidades de conformidade do importador antes de solicitar uma cotação.' },
    ],
  },
  ja: {
    badge: 'CBDアイソレート卸売',
    heroTitle1: 'バルクCBDアイソレート',
    heroTitle2: 'B2Bバイヤー向け供給',
    heroText: 'VETRUXは、中国Yunnan省Chuxiongの事業所より、適格なB2Bバイヤー向けに、数量供給に関するご相談、包装オプション、文書サポート、OEM/ODM協力、お問い合わせプロセスサポートを含むバルクCBDアイソレートを供給しています。',
    altText: 'Vetrux施設',
    supplySectionLabel: '数量別供給',
    supplyTitle: 'CBDアイソレート数量供給',
    supplyFooter: 'お客様の要件に合った協力形態についてご相談をご希望の場合は、お問い合わせください。',
    supplyFooterLink: 'お問い合わせを送信 →',
    answersSectionLabel: '購入者向け回答',
    answersTitle: 'バルクCBDアイソレート購入者向け回答',
    shippingSectionLabel: '包装・コンプライアンス',
    shippingTitle: '包装、文書、およびコンプライアンス',
    shippingDesc: '注文要件に応じて手配される標準化包装および文書サポート。',
    shippingFooter: '具体的な物流および文書の手配は、実際の注文条件によります。',
    shippingFooterLink: 'お問い合わせ →',
    whySectionLabel: 'Vetruxを選ぶ理由',
    whyTitle: 'B2B調達チームのために構築',
    btnGetPricing: '卸売価格を見る',
    volumeTiers: [
      { range: '標準供給', label: '通常注文', discount: '詳細はお問い合わせ', note: 'CBD原料' },
      { range: '長期供給', label: '継続的協力', discount: '詳細はお問い合わせ', note: '継続的なニーズに対応する安定供給体制' },
      { range: 'プロジェクトベース', label: 'カスタム協力', discount: '詳細はお問い合わせ', note: '特定のプロジェクト要件に合わせた対応' },
      { range: 'OEM/ODM', label: 'フルサービス', discount: '詳細はお問い合わせ', note: '製剤化、製造、包装、配送' },
    ],
    shippingTerms: [
      { term: '包装', desc: 'PE袋 5 kg/袋（27×60cm、食品グレード）、アルミ箔袋 5 kg/袋（35×50cm、食品グレード）、輸出用カートン（465×285×295mm、2袋/カートン）、プラスチックパレット＋シュリンクラップ。' },
      { term: '文書', desc: 'COA、SDS、試験報告書、商業送り状、パッキングリストを含むサポート文書は、注文要件に応じて提供される場合があります。' },
      { term: 'コンプライアンス', desc: '許可、ライセンス、規制当局の承認を含む仕向国での輸入コンプライアンスは、購入者/輸入者の責任です。ラベルおよび申告内容は実際のバッチおよび仕向地要件に一致します。' },
    ],
    whyWholesale: [
      { title: 'バルクCBDアイソレート', desc: 'Yunnan省Chuxiongの事業所より、適格なB2Bバイヤー向けのCBDアイソレート供給に関するご相談。' },
      { title: '施設ワークフロー', desc: 'CBD原料のための栽培、抽出、精製、品質管理、包装、文書作成のワークフロー。' },
      { title: 'OEM/ODMサービス', desc: '原料サポート、製剤開発、製造、包装デザイン、完成品納品。' },
      { title: '技術サポート', desc: '栽培管理、抽出プロセス最適化、コスト管理、カンナビノイド抽出コンサルティング。' },
      { title: '標準化包装', desc: '5 kg PE袋（27×60cm）、5 kgアルミ箔袋（35×50cm）、輸出用カートン（465×285×295mm）、プラスチックパレット。' },
    ],
    wholesaleAnswers: [
      { question: 'B2BバイヤーはバルクCBDアイソレートをリクエストできますか？', answer: 'はい。適格なB2Bバイヤーは、Vetruxのお問い合わせプロセスを通じて、バルクCBDアイソレートに関するご相談、製品情報、包装詳細、文書サポート、見積確認をリクエストいただけます。' },
      { question: 'どのような協力モデルがありますか？', answer: 'Vetruxは、ブランド企業、チャネルパートナー、商社、継続調達チーム向けに、標準供給、長期供給のご相談、プロジェクトベースの協力、およびOEM/ODMサービスを提供しています。' },
      { question: 'バルク注文にはどのような包装が使用されますか？', answer: 'バルク注文では、5 kg PE袋または5 kgアルミ箔袋を輸出用カートンに入れ、パレット積みおよびシュリンクラップを注文要件に応じて手配できます。' },
      { question: '見積依頼前にバイヤーが準備すべきことは何ですか？', answer: 'バイヤーは、目標数量、包装要件、文書要件、使用目的、仕向市場、納期スケジュール、および輸入者としてのコンプライアンス責任について、見積依頼前にご準備ください。' },
    ],
  },
  fi: {
    badge: 'CBD-isolaatin tukkumyynti',
    heroTitle1: 'CBD-isolaattia tukkuerissä',
    heroTitle2: 'Toimitus B2B-ostajille',
    heroText: 'VETRUX toimittaa CBD-isolaattia tukkuerissä tarjoten määrätoimituskeskusteluja, pakkausvaihtoehtoja, dokumentaatiotukea, OEM/ODM-yhteistyötä ja kyselyprosessitukea päteville B2B-ostajille Chuxiongista, Yunnanista, Kiinasta.',
    altText: 'Vetruxin laitos',
    supplySectionLabel: 'Toimitus määräportaittain',
    supplyTitle: 'CBD-isolaatin määrätoimitus',
    supplyFooter: 'Ota yhteyttä keskustellaksesi tarpeisiisi sopivista yhteistyöjärjestelyistä.',
    supplyFooterLink: 'Lähetä tiedustelu →',
    answersSectionLabel: 'Ostajan vastauksia',
    answersTitle: 'CBD-isolaatin tukkuostajan vastauksia',
    shippingSectionLabel: 'Pakkaus ja vaatimustenmukaisuus',
    shippingTitle: 'Pakkaus, dokumentaatio ja vaatimustenmukaisuus',
    shippingDesc: 'Standardoitu pakkaus ja dokumentaatiotuki järjestetään tilausvaatimusten mukaisesti.',
    shippingFooter: 'Erityiset logistiikka- ja dokumentaatiojärjestelyt riippuvat todellisista tilausehdoista.',
    shippingFooterLink: 'Ota yhteyttä →',
    whySectionLabel: 'Miksi Vetrux',
    whyTitle: 'Rakennettu B2B-hankintatiimeille',
    btnGetPricing: 'Pyydä tukkuhinnasto',
    volumeTiers: [
      { range: 'Vakiotoimitus', label: 'Säännölliset tilaukset', discount: 'Tiedustele lisätietoja', note: 'CBD-raaka-aineet' },
      { range: 'Pitkäaikaistoimitus', label: 'Jatkuva yhteistyö', discount: 'Tiedustele lisätietoja', note: 'Vakaat toimitussopimukset toistuviin tarpeisiin' },
      { range: 'Projektiperustainen', label: 'Räätälöity yhteistyö', discount: 'Tiedustele lisätietoja', note: 'Räätälöity projektikohtaisiin vaatimuksiin' },
      { range: 'OEM/ODM', label: 'Täysi palvelu', discount: 'Tiedustele lisätietoja', note: 'Formulointi, tuotanto, pakkaus ja toimitus' },
    ],
    shippingTerms: [
      { term: 'Pakkaus', desc: 'PE-pussit 5 kg/pussi (27×60cm, elintarvikekelpoinen), alumiinifoliopussit 5 kg/pussi (35×50cm, elintarvikekelpoinen), vientipahvilaatikot (465×285×295mm, 2 pussia/laatikko), muovilavat kutistekääreellä.' },
      { term: 'Dokumentaatio', desc: 'Tukiasiakirjat, mukaan lukien COA, SDS, testiraportit, kauppalaskut ja pakkausluettelot, voidaan toimittaa tilausvaatimusten mukaisesti.' },
      { term: 'Vaatimustenmukaisuus', desc: 'Kohdemaan tuontivaatimusten noudattaminen — mukaan lukien luvat, lisenssit ja viranomaishyväksynnät — on ostajan/tuojan vastuulla. Merkinnät ja ilmoitukset vastaavat todellista erää ja kohdevaatimuksia.' },
    ],
    whyWholesale: [
      { title: 'CBD-isolaattia tukkuerissä', desc: 'CBD-isolaatin toimitukseen liittyviä keskusteluja päteville B2B-ostajille Chuxiongin, Yunnanin toiminnastamme.' },
      { title: 'Laitoksen työnkulku', desc: 'Viljelyn, uuton, puhdistuksen, laadunvalvonnan, pakkauksen ja dokumentaation työnkulut CBD-raaka-aineille.' },
      { title: 'OEM/ODM-palvelut', desc: 'Raaka-ainetuki, formulointikehitys, tuotanto, pakkaussuunnittelu ja valmiin tuotteen toimitus.' },
      { title: 'Tekninen tuki', desc: 'Viljelyn hallinta, uuttoprosessin optimointi, kustannushallinta ja kannabinoidiuuton konsultointi.' },
      { title: 'Standardoitu pakkaus', desc: '5 kg PE-pussit (27×60cm), 5 kg alumiinifoliopussit (35×50cm), vientipahvilaatikot (465×285×295mm), muovilavat.' },
    ],
    wholesaleAnswers: [
      { question: 'Voivatko B2B-ostajat pyytää CBD-isolaattia tukkuerissä?', answer: 'Kyllä. Pätevät B2B-ostajat voivat pyytää CBD-isolaatin tukkueriin liittyviä keskusteluja, tuotetietoja, pakkaustietoja, dokumentaatiotukea ja tarjouskatsausta Vetruxin tiedusteluprosessin kautta.' },
      { question: 'Mitä yhteistyömalleja on saatavilla?', answer: 'Vetrux tukee vakiotoimitusta, pitkäaikaistoimituksen keskusteluja, projektiperustaista yhteistyötä ja OEM/ODM-palveluita brändiasiakkaille, kanavakumppaneille, kauppayhtiöille ja toistuville hankintatiimeille.' },
      { question: 'Mitä pakkausta käytetään tukkuerätilauksiin?', answer: 'Tukkuerätilauksissa voidaan käyttää 5 kg PE-pusseja tai 5 kg alumiinifoliopusseja vientipahvilaatikoissa, lavoituksella ja kutistekääreellä tilausvaatimusten mukaisesti.' },
      { question: 'Mitä ostajien tulisi valmistella ennen tarjouspyyntöä?', answer: 'Ostajien tulisi valmistella tavoitemäärä, pakkaustarpeet, asiakirjavaatimukset, käyttötarkoitus, kohdemarkkina, toimitusaikataulu ja tuojan vaatimustenmukaisuusvastuut ennen tarjouspyyntöä.' },
    ],
  },
} as const;

type ContentLocale = typeof content.en;

function t(locale?: Locale): ContentLocale {
  const loc = locale ?? 'en';
  return (content as unknown as Record<string, ContentLocale>)[loc] ?? content.en;
}

export default function WholesaleCbdIsolateClient({ locale }: WholesaleCbdIsolateClientProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const supplyRef = useRef<HTMLDivElement>(null);
  const shippingRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);

  useReveal(heroRef, { y: 40, stagger: 0.1, start: 'top 80%' });
  useReveal(supplyRef, { y: 40, stagger: 0.08, start: 'top 80%' });
  useReveal(shippingRef, { y: 40, stagger: 0.08, start: 'top 80%' });
  useReveal(whyRef, { y: 40, stagger: 0.1, start: 'top 80%' });

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
                  <Button variant="accent" size="lg" icon={ArrowRight}>{strings.btnGetPricing}</Button>
                </Link>
              </div>
            </div>
            <div className="reveal-card">
              <div className="relative w-full h-[500px]">
                <Image src="/images/vetrux_images/cbd-isolate-5kg-foil-bag-packaging.jpg" alt={strings.altText} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VOLUME SUPPLY ───────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={supplyRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>{strings.supplySectionLabel}</SectionLabel>
            <h2 className="text-3xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">
              {strings.supplyTitle}
            </h2>
          </div>

          <div className="space-y-3">
            {strings.volumeTiers.map((tier) => (
              <div
                key={tier.range}
                tabIndex={0}
                className="reveal-card flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 bg-surface-container-lowest p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <div className="sm:w-32">
                  <p className="text-xl font-serif font-medium text-on-surface tracking-tight">{tier.range}</p>
                </div>
                <div className="sm:w-40">
                  <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant">{tier.label}</p>
                </div>
                <div className="sm:w-32">
                  <span className="px-3 py-1 bg-primary-fixed text-primary text-xs font-bold tracking-wider rounded-full">
                    {tier.discount}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-on-surface-variant">{tier.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-8">
            <p className="text-xs text-on-surface-variant">
              {strings.supplyFooter}{' '}
              <Link href={`${langPrefix}/inquiry`} className="text-accent underline">
                {strings.supplyFooterLink}
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
            {strings.wholesaleAnswers.map((item) => (
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

      {/* ── SHIPPING TERMS ────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={shippingRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>{strings.shippingSectionLabel}</SectionLabel>
            <h2 className="text-3xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">
              {strings.shippingTitle}
            </h2>
            <p className="text-[15px] text-on-surface-variant max-w-xl">
              {strings.shippingDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {strings.shippingTerms.map((item, idx) => (
              <div
                key={item.term}
                tabIndex={0}
                className="reveal-card bg-surface-container-lowest p-8 border-l-2 border-transparent hover:border-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-primary-fixed mb-4">
                  {idx === 0 ? <Package size={20} className="text-primary" /> : idx === 1 ? <Globe size={20} className="text-primary" /> : <Shield size={20} className="text-primary" />}
                </div>
                <p className="text-lg font-extrabold text-on-surface tracking-tighter mb-3">{item.term}</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-8">
            <p className="text-xs text-on-surface-variant">
              {strings.shippingFooter}{' '}
              <Link href={`${langPrefix}/inquiry`} className="text-accent underline">
                {strings.shippingFooterLink}
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY VETRUX ────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={whyRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>{strings.whySectionLabel}</SectionLabel>
            <h2 className="text-3xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">
              {strings.whyTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {strings.whyWholesale.map((item) => (
              <div
                key={item.title}
                tabIndex={0}
                className="reveal-card bg-surface-container-lowest p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <CheckCircle size={16} className="text-primary mb-3" />
                <p className="text-sm font-extrabold text-on-surface tracking-tighter mb-2">{item.title}</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-12 text-center">
            <Link href={`${langPrefix}/inquiry`}>
              <Button variant="accent" size="lg" icon={ArrowRight}>{strings.btnGetPricing}</Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
