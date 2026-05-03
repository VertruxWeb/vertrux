import type { Locale } from '@/i18n/locales';

export interface ProductPageStrings {
  badge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroBody: string;
  requestSpecSheet: string;
  requestCoa: string;
  techSection: string;
  techTitle: string;
  techBody: string;
  buyerSection: string;
  buyerTitle: string;
  processSection: string;
  processTitle: string;
  specSection: string;
  specTitle: string;
  complianceSection: string;
  complianceTitle: string;
  exportNotice: string;
  exportBody: string;
  buyerResponsibility: string;
  qualitySection: string;
  qualityTitle: string;
  qualityAssuranceLink: string;
  qualityAssuranceSub: string;
  wholesaleLink: string;
  wholesaleSub: string;
  contactSalesLink: string;
  metrics: { label: string; value: string; status: string }[];
  steps: { title: string; desc: string }[];
  qa: { question: string; answer: string }[];
  specs: { label: string; value: string }[];
  compliance: { standard: string; detail: string }[];
  cards: { title: string; desc: string }[];
}

const en: ProductPageStrings = {
  badge: 'CBD Raw Materials',
  heroTitle1: 'CBD Isolate', heroTitle2: 'Specifications',
  heroBody: 'CBD isolate product information for qualified bulk buyers, with in-house HPLC analytical capability, packaging details, COA/SDS request options, and export-ready packaging support.',
  requestSpecSheet: 'Request Spec Sheet', requestCoa: 'Request COA',
  techSection: 'Technical Analysis', techTitle: 'CBD isolate product information and documentation',
  techBody: 'Supporting documentation including COA, SDS, test reports, and other shipment documents may be provided according to order requirements. Specific documentation availability depends on actual batch, order terms, and verification results.',
  buyerSection: 'Buyer Answers', buyerTitle: 'CBD isolate specification answers',
  processSection: 'From Field to Finished Isolate', processTitle: 'A controlled, traceable production chain.',
  specSection: 'Product Specifications', specTitle: 'Full Product Spec Sheet',
  complianceSection: 'Compliance & Documentation', complianceTitle: 'Batch Documentation & Export Compliance',
  exportNotice: 'Export & Import Notice',
  exportBody: 'For products requiring export permits or international verification, the export process may involve compliance confirmation from destination country authorities. Destination country import compliance — including permits, licenses, and regulatory approvals — is the',
  buyerResponsibility: "buyer/importer's responsibility",
  qualitySection: 'Quality & Product Lines', qualityTitle: 'CBD Isolate for Global B2B Supply',
  qualityAssuranceLink: 'Quality Assurance →', qualityAssuranceSub: 'Documentation & testing details',
  wholesaleLink: 'Wholesale Inquiry →', wholesaleSub: 'Volume pricing & export terms',
  contactSalesLink: 'Contact Sales →',
  metrics: [
    { label: 'Product', value: 'CBD Isolate', status: 'Cannabidiol Isolate' },
    { label: 'Quality Review', value: 'HPLC', status: 'In-house analytical capability' },
    { label: 'Inner Packaging', value: '5 kg/bag', status: 'PE or Aluminum Foil' },
    { label: 'Outer Packaging', value: '465×285×295mm', status: 'Export Carton' },
  ],
  steps: [
    { title: 'Cultivation', desc: 'Yunnan-grown industrial hemp from our Chuxiong cultivation base, under standardized growing protocols.' },
    { title: 'Extraction', desc: 'Ethanol extraction in 6m³ multi-function tanks under controlled temperature and solvent conditions.' },
    { title: 'Purification', desc: 'Industrial-scale chromatography isolates cannabidiol from the crude extract via gradient elution.' },
    { title: 'QC', desc: 'In-house HPLC cannabinoid profiling and per-batch verification before release.' },
    { title: 'Packaging', desc: 'Food-grade PE or aluminum-foil bags inside export cartons, palletized with shrink wrap.' },
  ],
  qa: [
    { question: 'What is Vetrux CBD isolate?', answer: 'Vetrux CBD isolate is a crystalline CBD raw material supplied for qualified B2B discussions, with product information, packaging details, and documentation support available by order requirements.' },
    { question: 'What packaging formats are available?', answer: 'Available packaging includes 5 kg PE bags or 5 kg aluminum-foil bags packed in export cartons. Palletization with shrink wrap may be arranged according to order requirements.' },
    { question: 'What documents can be requested?', answer: 'Buyers can request COA, SDS, test reports, product information, commercial invoice, packing list, and shipment documents. Batch-specific availability depends on actual batch, order terms, and verification results.' },
    { question: 'Who is responsible for import compliance?', answer: "Destination-country import compliance, including permits, licenses, approvals, labels, and customs declarations, is the buyer/importer's responsibility. Vetrux can provide documentation support by order terms." },
  ],
  specs: [
    { label: 'Product Name', value: 'CBD Isolate' },
    { label: 'Quality Review', value: 'In-house HPLC analytical capability; batch-specific documentation depends on actual batch, order terms, and verification results' },
    { label: 'Packaging (Inner)', value: 'PE bags 5kg/bag (27×60cm, food grade) or Aluminum foil bags 5kg/bag (35×50cm, food grade)' },
    { label: 'Packaging (Outer)', value: 'Export cartons 465×285×295mm, 2 bags per carton' },
    { label: 'Palletization', value: 'Plastic pallets with shrink wrap' },
  ],
  compliance: [
    { standard: 'Certificate of Analysis (COA)', detail: 'May be provided according to order requirements' },
    { standard: 'Safety Data Sheet (SDS)', detail: 'May be provided according to order requirements' },
    { standard: 'Test Reports', detail: 'May be provided according to order requirements' },
    { standard: 'Commercial Invoice', detail: 'Provided per shipment' },
    { standard: 'Packing List', detail: 'Provided per shipment' },
  ],
  cards: [
    { title: 'Quality Management', desc: 'In-house HPLC analytical capability. Documentation support available according to order requirements.' },
    { title: 'Documentation Support', desc: 'Supporting documents including COA, SDS, test reports, commercial invoices, and packing lists may be arranged according to actual batch and order terms.' },
    { title: 'Export-Ready Packaging', desc: 'PE bags 5kg (27×60cm) and aluminum foil bags 5kg (35×50cm), food-grade. Export cartons 465×285×295mm, 2 bags per carton. Plastic pallets with shrink wrap for secure transit.' },
  ],
};

export const productPageStrings: Record<Locale, ProductPageStrings> = {
  en,
  de: { ...en,
    badge: 'CBD-Rohstoffe', heroTitle2: 'Spezifikationen',
    heroBody: 'CBD-Isolat-Produktinformationen für qualifizierte Großabnehmer, mit hauseigener HPLC-Analytik, Verpackungsdetails, COA/SDS-Anfragemöglichkeiten und exportfertiger Verpackung.',
    requestSpecSheet: 'Datenblatt anfordern', requestCoa: 'COA anfordern',
    techSection: 'Technische Analyse', techTitle: 'CBD-Isolat Produktinformationen und Dokumentation',
    techBody: 'Begleitdokumentation einschließlich COA, SDS, Prüfberichte und andere Versanddokumente können je nach Bestellanforderungen bereitgestellt werden.',
    buyerSection: 'Käufer-Antworten', buyerTitle: 'Antworten zu CBD-Isolat-Spezifikationen',
    processSection: 'Vom Feld zum fertigen Isolat', processTitle: 'Eine kontrollierte, rückverfolgbare Produktionskette.',
    specSection: 'Produktspezifikationen', specTitle: 'Vollständiges Produktdatenblatt',
    complianceSection: 'Compliance & Dokumentation', complianceTitle: 'Chargendokumentation & Exportkonformität',
    exportNotice: 'Export- & Importhinweis',
    exportBody: 'Für Produkte, die Exportgenehmigungen oder internationale Verifizierung erfordern, kann der Exportprozess eine Konformitätsbestätigung der Behörden des Ziellandes umfassen. Die Importkonformität des Ziellandes — einschließlich Genehmigungen, Lizenzen und behördlicher Zulassungen — liegt in der',
    buyerResponsibility: 'Verantwortung des Käufers/Importeurs',
    qualitySection: 'Qualität & Produktlinien', qualityTitle: 'CBD-Isolat für den globalen B2B-Vertrieb',
    qualityAssuranceLink: 'Qualitätssicherung →', qualityAssuranceSub: 'Dokumentation & Prüfdetails',
    wholesaleLink: 'Großhandelsanfrage →', wholesaleSub: 'Mengenpreise & Exportbedingungen',
    contactSalesLink: 'Vertrieb kontaktieren →',
  },
  fr: { ...en,
    badge: 'Matières premières CBD', heroTitle2: 'Spécifications',
    heroBody: "Informations produit isolat CBD pour acheteurs en gros qualifiés, avec capacité analytique HPLC interne, détails d'emballage, options de demande COA/SDS et emballage prêt à l'export.",
    requestSpecSheet: 'Demander la fiche technique', requestCoa: 'Demander le COA',
    techSection: 'Analyse technique', techTitle: "Informations produit et documentation de l'isolat CBD",
    techBody: "La documentation d'accompagnement incluant COA, SDS, rapports de test et autres documents d'expédition peut être fournie selon les exigences de commande.",
    buyerSection: 'Réponses acheteurs', buyerTitle: "Réponses aux spécifications de l'isolat CBD",
    processSection: "Du champ à l'isolat fini", processTitle: 'Une chaîne de production contrôlée et traçable.',
    specSection: 'Spécifications produit', specTitle: 'Fiche technique complète',
    complianceSection: 'Conformité & Documentation', complianceTitle: "Documentation par lot & conformité à l'export",
    exportNotice: "Avis d'export & import",
    exportBody: "Pour les produits nécessitant des permis d'exportation ou une vérification internationale, le processus d'exportation peut impliquer une confirmation de conformité des autorités du pays de destination. La conformité à l'importation du pays de destination — y compris les permis, licences et approbations réglementaires — est la",
    buyerResponsibility: "responsabilité de l'acheteur/importateur",
    qualitySection: 'Qualité & Lignes de produits', qualityTitle: "Isolat CBD pour l'approvisionnement B2B mondial",
    qualityAssuranceLink: 'Assurance qualité →', qualityAssuranceSub: 'Détails documentation & tests',
    wholesaleLink: 'Demande de gros →', wholesaleSub: "Prix en volume & conditions d'export",
    contactSalesLink: 'Contacter les ventes →',
  },
  es: { ...en,
    badge: 'Materias primas CBD', heroTitle2: 'Especificaciones',
    heroBody: 'Información de producto CBD isolate para compradores a granel cualificados, con capacidad analítica HPLC interna, detalles de embalaje, opciones de solicitud COA/SDS y embalaje listo para exportación.',
    requestSpecSheet: 'Solicitar ficha técnica', requestCoa: 'Solicitar COA',
    techSection: 'Análisis técnico', techTitle: 'Información de producto y documentación del CBD isolate',
    techBody: 'La documentación de acompañamiento, incluyendo COA, SDS, informes de prueba y otros documentos de envío, puede proporcionarse según los requisitos del pedido.',
    buyerSection: 'Respuestas para compradores', buyerTitle: 'Respuestas sobre especificaciones del CBD isolate',
    processSection: 'Del campo al aislado terminado', processTitle: 'Una cadena de producción controlada y trazable.',
    specSection: 'Especificaciones del producto', specTitle: 'Ficha técnica completa',
    complianceSection: 'Cumplimiento y documentación', complianceTitle: 'Documentación por lote y cumplimiento de exportación',
    exportNotice: 'Aviso de exportación e importación',
    exportBody: 'Para productos que requieren permisos de exportación o verificación internacional, el proceso de exportación puede implicar confirmación de cumplimiento por parte de las autoridades del país de destino. El cumplimiento de importación del país de destino — incluyendo permisos, licencias y aprobaciones regulatorias — es',
    buyerResponsibility: 'responsabilidad del comprador/importador',
    qualitySection: 'Calidad y líneas de producto', qualityTitle: 'CBD Isolate para suministro B2B global',
    qualityAssuranceLink: 'Garantía de calidad →', qualityAssuranceSub: 'Detalles de documentación y pruebas',
    wholesaleLink: 'Consulta mayorista →', wholesaleSub: 'Precios por volumen y condiciones de exportación',
    contactSalesLink: 'Contactar ventas →',
  },
  it: { ...en,
    badge: 'Materie prime CBD', heroTitle2: 'Specifiche',
    heroBody: "Informazioni prodotto CBD isolate per acquirenti all'ingrosso qualificati, con capacità analitica HPLC interna, dettagli di confezionamento, opzioni di richiesta COA/SDS e confezionamento pronto per l'esportazione.",
    requestSpecSheet: 'Richiedi scheda tecnica', requestCoa: 'Richiedi COA',
    techSection: 'Analisi tecnica', techTitle: 'Informazioni prodotto e documentazione del CBD isolate',
    techBody: "La documentazione di accompagnamento, inclusi COA, SDS, rapporti di test e altri documenti di spedizione, può essere fornita secondo i requisiti dell'ordine.",
    buyerSection: 'Risposte per acquirenti', buyerTitle: 'Risposte sulle specifiche del CBD isolate',
    processSection: "Dal campo all'isolato finito", processTitle: 'Una catena di produzione controllata e tracciabile.',
    specSection: 'Specifiche prodotto', specTitle: 'Scheda tecnica completa',
    complianceSection: 'Conformità e documentazione', complianceTitle: "Documentazione per lotto e conformità all'esportazione",
    exportNotice: 'Avviso di esportazione e importazione',
    exportBody: "Per i prodotti che richiedono permessi di esportazione o verifica internazionale, il processo di esportazione può comportare la conferma di conformità da parte delle autorità del paese di destinazione. La conformità all'importazione del paese di destinazione — inclusi permessi, licenze e approvazioni normative — è",
    buyerResponsibility: "responsabilità dell'acquirente/importatore",
    qualitySection: 'Qualità e linee di prodotto', qualityTitle: 'CBD Isolate per la fornitura B2B globale',
    qualityAssuranceLink: 'Garanzia qualità →', qualityAssuranceSub: 'Dettagli documentazione e test',
    wholesaleLink: 'Richiesta ingrosso →', wholesaleSub: "Prezzi per volume e condizioni di esportazione",
    contactSalesLink: 'Contatta le vendite →',
  },
  pt: { ...en,
    badge: 'Matérias-primas CBD', heroTitle2: 'Especificações',
    heroBody: 'Informações de produto CBD isolate para compradores a granel qualificados, com capacidade analítica HPLC interna, detalhes de embalagem, opções de solicitação COA/SDS e embalagem pronta para exportação.',
    requestSpecSheet: 'Solicitar ficha técnica', requestCoa: 'Solicitar COA',
    techSection: 'Análise técnica', techTitle: 'Informações de produto e documentação do CBD isolate',
    techBody: 'A documentação de acompanhamento, incluindo COA, SDS, relatórios de teste e outros documentos de envio, pode ser fornecida conforme os requisitos do pedido.',
    buyerSection: 'Respostas para compradores', buyerTitle: 'Respostas sobre especificações do CBD isolate',
    processSection: 'Do campo ao isolado acabado', processTitle: 'Uma cadeia de produção controlada e rastreável.',
    specSection: 'Especificações do produto', specTitle: 'Ficha técnica completa',
    complianceSection: 'Conformidade e documentação', complianceTitle: 'Documentação por lote e conformidade de exportação',
    exportNotice: 'Aviso de exportação e importação',
    exportBody: 'Para produtos que requerem licenças de exportação ou verificação internacional, o processo de exportação pode envolver confirmação de conformidade pelas autoridades do país de destino. A conformidade de importação do país de destino — incluindo licenças, autorizações e aprovações regulatórias — é',
    buyerResponsibility: 'responsabilidade do comprador/importador',
    qualitySection: 'Qualidade e linhas de produto', qualityTitle: 'CBD Isolate para fornecimento B2B global',
    qualityAssuranceLink: 'Garantia de qualidade →', qualityAssuranceSub: 'Detalhes de documentação e testes',
    wholesaleLink: 'Consulta atacado →', wholesaleSub: 'Preços por volume e condições de exportação',
    contactSalesLink: 'Contactar vendas →',
  },
  ja: { ...en,
    badge: 'CBD原料',  heroTitle2: '仕様',
    heroBody: '認定バルクバイヤー向けCBDアイソレート製品情報。自社HPLC分析能力、包装詳細、COA/SDSリクエストオプション、輸出対応包装サポートを提供いたします。',
    requestSpecSheet: '仕様書をリクエスト', requestCoa: 'COAをリクエスト',
    techSection: '技術分析', techTitle: 'CBDアイソレート製品情報およびドキュメント',
    techBody: 'COA、SDS、試験報告書、その他の出荷書類を含むサポートドキュメントは、注文要件に応じてご提供可能です。',
    buyerSection: '購買担当者向けQ&A', buyerTitle: 'CBDアイソレート仕様に関するQ&A',
    processSection: '圃場から完成アイソレートまで', processTitle: '管理された、トレーサブルな生産チェーン。',
    specSection: '製品仕様', specTitle: '製品仕様書',
    complianceSection: 'コンプライアンス・ドキュメント', complianceTitle: 'バッチドキュメントと輸出コンプライアンス',
    exportNotice: '輸出入に関するご注意',
    exportBody: '輸出許可または国際的な検証が必要な製品については、輸出プロセスに仕向国当局による適合確認が含まれる場合があります。仕向国の輸入コンプライアンス（許可、ライセンス、規制承認を含む）は',
    buyerResponsibility: '購入者/輸入者の責任',
    qualitySection: '品質・製品ライン', qualityTitle: 'グローバルB2B供給向けCBDアイソレート',
    qualityAssuranceLink: '品質保証 →', qualityAssuranceSub: 'ドキュメントと試験の詳細',
    wholesaleLink: '卸売お問い合わせ →', wholesaleSub: 'ボリューム価格と輸出条件',
    contactSalesLink: '営業に連絡 →',
  },
  fi: { ...en,
    badge: 'CBD-raaka-aineet', heroTitle2: 'Tekniset tiedot',
    heroBody: 'CBD-isolaatin tuotetiedot päteville tukkuostajille: sisäinen HPLC-analytiikka, pakkausyksityiskohdat, COA/SDS-pyyntövaihtoehdot ja vientivalmis pakkaus.',
    requestSpecSheet: 'Pyydä tuotetiedote', requestCoa: 'Pyydä COA',
    techSection: 'Tekninen analyysi', techTitle: 'CBD-isolaatin tuotetiedot ja dokumentaatio',
    techBody: 'Tukidokumentaatio, mukaan lukien COA, SDS, testiraportit ja muut lähetysasiakirjat, voidaan toimittaa tilausvaatimusten mukaisesti.',
    buyerSection: 'Ostajan kysymykset', buyerTitle: 'Vastauksia CBD-isolaatin teknisiin tietoihin',
    processSection: 'Pellolta valmiiseen isolaattiin', processTitle: 'Hallittu, jäljitettävä tuotantoketju.',
    specSection: 'Tuotteen tekniset tiedot', specTitle: 'Täydellinen tuotetiedote',
    complianceSection: 'Vaatimustenmukaisuus ja dokumentaatio', complianceTitle: 'Eräkohtainen dokumentaatio ja vientivaatimustenmukaisuus',
    exportNotice: 'Vienti- ja tuonti-ilmoitus',
    exportBody: 'Vientilupaa tai kansainvälistä todentamista vaativien tuotteiden vientiprosessi voi sisältää kohdemaan viranomaisten vaatimustenmukaisuusvahvistuksen. Kohdemaan tuontivaatimustenmukaisuus — mukaan lukien luvat, lisenssit ja viranomaishyväksynnät — on',
    buyerResponsibility: 'ostajan/maahantuojan vastuulla',
    qualitySection: 'Laatu ja tuotelinjat', qualityTitle: 'CBD-isolaatti maailmanlaajuiseen B2B-toimitukseen',
    qualityAssuranceLink: 'Laadunvarmistus →', qualityAssuranceSub: 'Dokumentaatio- ja testaustiedot',
    wholesaleLink: 'Tukkutiedustelu →', wholesaleSub: 'Volyymihinta ja vientiehdot',
    contactSalesLink: 'Ota yhteyttä myyntiin →',
  },
};
