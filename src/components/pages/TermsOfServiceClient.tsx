'use client'

import type { Locale } from '@/i18n/locales';

interface TermsOfServiceClientProps {
  locale?: Locale;
}

const content = {
  en: {
    title: 'Terms of Service',
    lastUpdated: 'Last updated: April 2026',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: 'By accessing and using the website at www.vetrux.tech (the "Website"), operated by 蔚萃生物科技（楚雄）有限公司 under the public-facing brand Vetrux CBD ("Vetrux CBD", "we", "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Website.',
      },
      {
        heading: '2. Website Purpose',
        body: 'This Website serves as a B2B informational platform for wholesale CBD isolate buyers. Content on this Website is intended for business professionals in the pharmaceutical, nutraceutical, and cosmetic industries. This Website does not facilitate direct consumer sales.',
      },
      {
        heading: '3. Product Information',
        body: 'Product specifications, certifications, and technical data presented on this Website are provided for informational purposes. While we strive for accuracy, actual product specifications are governed by the Certificate of Analysis (COA) accompanying each batch shipment. Specifications are subject to change without notice.',
      },
      {
        heading: '4. Inquiries and Orders',
        body: 'Submitting an inquiry through our Website does not constitute a binding order or contract. All wholesale transactions are subject to separate commercial agreements, including pricing, delivery terms, and payment conditions negotiated between parties.',
      },
      {
        heading: '5. Intellectual Property',
        body: 'All content on this Website — including text, images, logos, graphics, and software — is the property of 蔚萃生物科技（楚雄）有限公司 or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our prior written consent.',
      },
      {
        heading: '6. Regulatory Compliance',
        body: 'Vetrux products are manufactured in compliance with applicable Chinese regulations for industrial hemp processing. Buyers are solely responsible for ensuring compliance with the laws and regulations of their respective jurisdictions, including but not limited to EU Novel Food Regulation (EU) 2015/2283, local import requirements, and THC content limits.',
      },
      {
        heading: '7. Limitation of Liability',
        body: 'To the maximum extent permitted by law, Vetrux shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this Website or reliance on information presented herein. This Website is provided "as is" without warranties of any kind.',
      },
      {
        heading: '8. External Links',
        body: 'This Website may contain links to third-party websites. We are not responsible for the content, privacy practices, or availability of external sites. Inclusion of any link does not imply endorsement.',
      },
      {
        heading: '9. Governing Law',
        body: "These Terms of Service are governed by and construed in accordance with the laws of the People's Republic of China. Any disputes arising from these terms shall be subject to the jurisdiction of the courts in Yunnan Province, China.",
      },
      {
        heading: '10. Contact',
        body: 'For questions about these Terms of Service, contact us at: postmaster@vetrux.tech',
        contact: '蔚萃生物科技（楚雄）有限公司\nChuxiong, Yunnan Province, China',
      },
    ],
  },
  de: {
    title: 'Nutzungsbedingungen',
    lastUpdated: 'Letzte Aktualisierung: April 2026',
    sections: [
      {
        heading: '1. Annahme der Bedingungen',
        body: 'Durch den Zugriff auf und die Nutzung der Website unter www.vetrux.tech (die "Website"), betrieben von 蔚萃生物科技（楚雄）有限公司 unter der öffentlich zugänglichen Marke Vetrux CBD ("Vetrux CBD", "wir", "uns"), erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Wenn Sie diesen Bedingungen nicht zustimmen, nutzen Sie die Website bitte nicht.',
      },
      {
        heading: '2. Zweck der Website',
        body: 'Diese Website dient als B2B-Informationsplattform für Großhandelskäufer von CBD-Isolat. Die Inhalte dieser Website richten sich an Geschäftsleute aus der Pharma-, Nutrazeutika- und Kosmetikindustrie. Diese Website ermöglicht keine direkten Verbraucherverkäufe.',
      },
      {
        heading: '3. Produktinformationen',
        body: 'Die auf dieser Website dargestellten Produktspezifikationen, Zertifizierungen und technischen Daten dienen ausschließlich Informationszwecken. Obwohl wir uns um Genauigkeit bemühen, richten sich die tatsächlichen Produktspezifikationen nach dem Analysezertifikat (COA), das jeder Chargenlieferung beiliegt. Spezifikationen können ohne vorherige Ankündigung geändert werden.',
      },
      {
        heading: '4. Anfragen und Bestellungen',
        body: 'Das Einreichen einer Anfrage über unsere Website stellt keine verbindliche Bestellung oder keinen Vertrag dar. Alle Großhandelstransaktionen unterliegen gesonderten Handelsvereinbarungen, einschließlich der zwischen den Parteien ausgehandelten Preise, Lieferbedingungen und Zahlungskonditionen.',
      },
      {
        heading: '5. Geistiges Eigentum',
        body: 'Alle Inhalte dieser Website — einschließlich Texte, Bilder, Logos, Grafiken und Software — sind Eigentum von 蔚萃生物科技（楚雄）有限公司 oder ihren Lizenzgebern und durch die geltenden Gesetze zum geistigen Eigentum geschützt. Sie dürfen diese Inhalte ohne unsere vorherige schriftliche Zustimmung weder vervielfältigen, verbreiten noch bearbeiten oder davon abgeleitete Werke erstellen.',
      },
      {
        heading: '6. Einhaltung gesetzlicher Vorschriften',
        body: 'Vetrux-Produkte werden in Übereinstimmung mit den geltenden chinesischen Vorschriften für die Verarbeitung von Industriehanf hergestellt. Die Käufer sind allein dafür verantwortlich, die Einhaltung der Gesetze und Vorschriften ihrer jeweiligen Rechtsordnungen sicherzustellen, einschließlich, aber nicht beschränkt auf die EU-Verordnung über neuartige Lebensmittel (EU) 2015/2283, lokale Einfuhrbestimmungen und THC-Gehaltsgrenzen.',
      },
      {
        heading: '7. Haftungsbeschränkung',
        body: 'Soweit gesetzlich zulässig, haftet Vetrux nicht für indirekte, zufällige, besondere oder Folgeschäden, die sich aus Ihrer Nutzung dieser Website oder dem Vertrauen auf die hierin enthaltenen Informationen ergeben. Diese Website wird ohne jegliche Gewährleistung "wie besehen" zur Verfügung gestellt.',
      },
      {
        heading: '8. Externe Links',
        body: 'Diese Website kann Links zu Websites Dritter enthalten. Wir sind nicht verantwortlich für den Inhalt, die Datenschutzpraktiken oder die Verfügbarkeit externer Websites. Die Aufnahme eines Links stellt keine Billigung dar.',
      },
      {
        heading: '9. Geltendes Recht',
        body: 'Diese Nutzungsbedingungen unterliegen dem Recht der Volksrepublik China und werden in Übereinstimmung mit diesem ausgelegt. Alle Streitigkeiten aus diesen Bedingungen unterliegen der Zuständigkeit der Gerichte in der Provinz Yunnan, China.',
      },
      {
        heading: '10. Kontakt',
        body: 'Bei Fragen zu diesen Nutzungsbedingungen kontaktieren Sie uns unter: postmaster@vetrux.tech',
        contact: '蔚萃生物科技（楚雄）有限公司\nChuxiong, Provinz Yunnan, China',
      },
    ],
  },
  fr: {
    title: "Conditions d'Utilisation",
    lastUpdated: 'Dernière mise à jour : avril 2026',
    sections: [
      {
        heading: '1. Acceptation des Conditions',
        body: 'En accédant et en utilisant le site web www.vetrux.tech (le « Site »), exploité par 蔚萃生物科技（楚雄）有限公司 sous la marque publique Vetrux CBD (« Vetrux CBD », « nous »), vous acceptez d\'être lié par les présentes Conditions d\'Utilisation. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser le Site.',
      },
      {
        heading: '2. Objet du Site',
        body: 'Ce Site sert de plateforme d\'information B2B pour les acheteurs en gros d\'isolat de CBD. Le contenu de ce Site est destiné aux professionnels des secteurs pharmaceutique, nutraceutique et cosmétique. Ce Site ne facilite pas les ventes directes aux consommateurs.',
      },
      {
        heading: '3. Informations sur les Produits',
        body: 'Les spécifications des produits, les certifications et les données techniques présentées sur ce Site sont fournies à titre informatif. Bien que nous nous efforcions d\'assurer l\'exactitude, les spécifications réelles des produits sont régies par le Certificat d\'Analyse (COA) accompagnant chaque livraison de lot. Les spécifications peuvent être modifiées sans préavis.',
      },
      {
        heading: '4. Demandes et Commandes',
        body: 'La soumission d\'une demande via notre Site ne constitue pas une commande ou un contrat ferme. Toutes les transactions de gros sont soumises à des accords commerciaux distincts, y compris les prix, les conditions de livraison et les modalités de paiement négociés entre les parties.',
      },
      {
        heading: '5. Propriété Intellectuelle',
        body: 'Tout le contenu de ce Site — y compris les textes, images, logos, graphiques et logiciels — est la propriété de 蔚萃生物科技（楚雄）有限公司 ou de ses concédants de licence et est protégé par les lois applicables sur la propriété intellectuelle. Vous ne pouvez pas reproduire, distribuer ou créer des œuvres dérivées de ce contenu sans notre autorisation écrite préalable.',
      },
      {
        heading: '6. Conformité Réglementaire',
        body: 'Les produits Vetrux sont fabriqués conformément aux réglementations chinoises applicables pour la transformation du chanvre industriel. Les acheteurs sont seuls responsables de garantir la conformité avec les lois et règlements de leurs juridictions respectives, y compris, mais sans s\'y limiter, le Règlement (UE) 2015/2283 sur les nouveaux aliments, les exigences locales d\'importation et les limites de teneur en THC.',
      },
      {
        heading: '7. Limitation de Responsabilité',
        body: 'Dans toute la mesure permise par la loi, Vetrux ne pourra être tenu responsable des dommages indirects, accessoires, spéciaux ou consécutifs découlant de votre utilisation de ce Site ou de la confiance accordée aux informations qui y sont présentées. Ce Site est fourni « en l\'état » sans garantie d\'aucune sorte.',
      },
      {
        heading: '8. Liens Externes',
        body: 'Ce Site peut contenir des liens vers des sites web tiers. Nous ne sommes pas responsables du contenu, des pratiques de confidentialité ou de la disponibilité des sites externes. L\'inclusion d\'un lien n\'implique aucune approbation.',
      },
      {
        heading: '9. Droit Applicable',
        body: 'Les présentes Conditions d\'Utilisation sont régies et interprétées conformément au droit de la République Populaire de Chine. Tout litige découlant des présentes conditions sera soumis à la compétence des tribunaux de la province du Yunnan, Chine.',
      },
      {
        heading: '10. Contact',
        body: 'Pour toute question concernant les présentes Conditions d\'Utilisation, contactez-nous à : postmaster@vetrux.tech',
        contact: '蔚萃生物科技（楚雄）有限公司\nChuxiong, Province du Yunnan, Chine',
      },
    ],
  },
  es: {
    title: 'Términos de Servicio',
    lastUpdated: 'Última actualización: abril de 2026',
    sections: [
      {
        heading: '1. Aceptación de los Términos',
        body: 'Al acceder y utilizar el sitio web www.vetrux.tech (el "Sitio Web"), operado por 蔚萃生物科技（楚雄）有限公司 bajo la marca pública Vetrux CBD ("Vetrux CBD", "nosotros"), usted acepta quedar vinculado por estos Términos de Servicio. Si no está de acuerdo con estos términos, por favor no utilice el Sitio Web.',
      },
      {
        heading: '2. Propósito del Sitio Web',
        body: 'Este Sitio Web funciona como una plataforma informativa B2B para compradores mayoristas de aislado de CBD. El contenido de este Sitio Web está destinado a profesionales de negocios en las industrias farmacéutica, nutracéutica y cosmética. Este Sitio Web no facilita ventas directas al consumidor.',
      },
      {
        heading: '3. Información del Producto',
        body: 'Las especificaciones del producto, certificaciones y datos técnicos presentados en este Sitio Web se proporcionan con fines informativos. Si bien nos esforzamos por la precisión, las especificaciones reales del producto se rigen por el Certificado de Análisis (COA) que acompaña a cada envío de lote. Las especificaciones están sujetas a cambios sin previo aviso.',
      },
      {
        heading: '4. Consultas y Pedidos',
        body: 'El envío de una consulta a través de nuestro Sitio Web no constituye un pedido o contrato vinculante. Todas las transacciones mayoristas están sujetas a acuerdos comerciales separados, incluidos los precios, las condiciones de entrega y las condiciones de pago negociadas entre las partes.',
      },
      {
        heading: '5. Propiedad Intelectual',
        body: 'Todo el contenido de este Sitio Web — incluidos textos, imágenes, logotipos, gráficos y software — es propiedad de 蔚萃生物科技（楚雄）有限公司 o sus licenciantes y está protegido por las leyes de propiedad intelectual aplicables. No puede reproducir, distribuir ni crear obras derivadas de este contenido sin nuestro consentimiento previo por escrito.',
      },
      {
        heading: '6. Cumplimiento Normativo',
        body: 'Los productos Vetrux se fabrican de conformidad con las regulaciones chinas aplicables para el procesamiento de cáñamo industrial. Los compradores son los únicos responsables de garantizar el cumplimiento de las leyes y regulaciones de sus respectivas jurisdicciones, incluidos, entre otros, el Reglamento de Nuevos Alimentos de la UE (UE) 2015/2283, los requisitos locales de importación y los límites de contenido de THC.',
      },
      {
        heading: '7. Limitación de Responsabilidad',
        body: 'En la máxima medida permitida por la ley, Vetrux no será responsable de ningún daño indirecto, incidental, especial o consecuente que surja del uso de este Sitio Web o de la confianza depositada en la información aquí presentada. Este Sitio Web se proporciona "tal cual" sin garantías de ningún tipo.',
      },
      {
        heading: '8. Enlaces Externos',
        body: 'Este Sitio Web puede contener enlaces a sitios web de terceros. No somos responsables del contenido, las prácticas de privacidad o la disponibilidad de los sitios externos. La inclusión de cualquier enlace no implica aprobación.',
      },
      {
        heading: '9. Ley Aplicable',
        body: 'Estos Términos de Servicio se rigen e interpretan de conformidad con las leyes de la República Popular China. Cualquier disputa que surja de estos términos estará sujeta a la jurisdicción de los tribunales de la Provincia de Yunnan, China.',
      },
      {
        heading: '10. Contacto',
        body: 'Para preguntas sobre estos Términos de Servicio, contáctenos en: postmaster@vetrux.tech',
        contact: '蔚萃生物科技（楚雄）有限公司\nChuxiong, Provincia de Yunnan, China',
      },
    ],
  },
  it: {
    title: 'Termini di Servizio',
    lastUpdated: 'Ultimo aggiornamento: aprile 2026',
    sections: [
      {
        heading: '1. Accettazione dei Termini',
        body: 'Accedendo e utilizzando il sito web www.vetrux.tech (il "Sito"), gestito da 蔚萃生物科技（楚雄）有限公司 con il marchio pubblico Vetrux CBD ("Vetrux CBD", "noi"), accetti di essere vincolato dai presenti Termini di Servizio. Se non accetti questi termini, ti preghiamo di non utilizzare il Sito.',
      },
      {
        heading: '2. Finalità del Sito',
        body: 'Questo Sito funge da piattaforma informativa B2B per acquirenti all\'ingrosso di isolato di CBD. I contenuti di questo Sito sono destinati a professionisti del settore farmaceutico, nutraceutico e cosmetico. Questo Sito non facilita le vendite dirette ai consumatori.',
      },
      {
        heading: '3. Informazioni sui Prodotti',
        body: 'Le specifiche dei prodotti, le certificazioni e i dati tecnici presentati su questo Sito sono forniti a scopo informativo. Sebbene ci impegniamo per l\'accuratezza, le specifiche effettive del prodotto sono regolate dal Certificato di Analisi (COA) che accompagna ogni spedizione di lotto. Le specifiche sono soggette a modifiche senza preavviso.',
      },
      {
        heading: '4. Richieste e Ordini',
        body: 'L\'invio di una richiesta tramite il nostro Sito non costituisce un ordine o contratto vincolante. Tutte le transazioni all\'ingrosso sono soggette ad accordi commerciali separati, inclusi prezzi, termini di consegna e condizioni di pagamento negoziati tra le parti.',
      },
      {
        heading: '5. Proprietà Intellettuale',
        body: 'Tutti i contenuti di questo Sito — inclusi testi, immagini, loghi, grafica e software — sono di proprietà di 蔚萃生物科技（楚雄）有限公司 o dei suoi licenzianti e sono protetti dalle leggi applicabili sulla proprietà intellettuale. Non puoi riprodurre, distribuire o creare opere derivate da questi contenuti senza il nostro previo consenso scritto.',
      },
      {
        heading: '6. Conformità Normativa',
        body: 'I prodotti Vetrux sono fabbricati in conformità con le normative cinesi applicabili per la lavorazione della canapa industriale. Gli acquirenti sono gli unici responsabili di garantire la conformità con le leggi e i regolamenti delle rispettive giurisdizioni, inclusi, a titolo esemplificativo ma non esaustivo, il Regolamento UE sui Novel Food (UE) 2015/2283, i requisiti locali di importazione e i limiti di contenuto di THC.',
      },
      {
        heading: '7. Limitazione di Responsabilità',
        body: 'Nella misura massima consentita dalla legge, Vetrux non sarà responsabile per danni indiretti, incidentali, speciali o consequenziali derivanti dall\'uso di questo Sito o dall\'affidamento sulle informazioni qui presentate. Questo Sito è fornito "così com\'è" senza garanzie di alcun tipo.',
      },
      {
        heading: '8. Link Esterni',
        body: 'Questo Sito può contenere link a siti web di terzi. Non siamo responsabili del contenuto, delle pratiche sulla privacy o della disponibilità dei siti esterni. L\'inclusione di qualsiasi link non implica approvazione.',
      },
      {
        heading: '9. Legge Applicabile',
        body: 'I presenti Termini di Servizio sono regolati e interpretati in conformità con le leggi della Repubblica Popolare Cinese. Qualsiasi controversia derivante da questi termini sarà soggetta alla giurisdizione dei tribunali della Provincia dello Yunnan, Cina.',
      },
      {
        heading: '10. Contatto',
        body: 'Per domande sui presenti Termini di Servizio, contattaci a: postmaster@vetrux.tech',
        contact: '蔚萃生物科技（楚雄）有限公司\nChuxiong, Provincia dello Yunnan, Cina',
      },
    ],
  },
  pt: {
    title: 'Termos de Serviço',
    lastUpdated: 'Última atualização: abril de 2026',
    sections: [
      {
        heading: '1. Aceitação dos Termos',
        body: 'Ao aceder e utilizar o site www.vetrux.tech (o "Site"), operado pela 蔚萃生物科技（楚雄）有限公司 sob a marca pública Vetrux CBD ("Vetrux CBD", "nós"), você concorda em ficar vinculado a estes Termos de Serviço. Se não concordar com estes termos, por favor, não utilize o Site.',
      },
      {
        heading: '2. Finalidade do Site',
        body: 'Este Site serve como uma plataforma informativa B2B para compradores grossistas de isolado de CBD. O conteúdo deste Site destina-se a profissionais das indústrias farmacêutica, nutracêutica e cosmética. Este Site não facilita vendas diretas ao consumidor.',
      },
      {
        heading: '3. Informações do Produto',
        body: 'As especificações do produto, certificações e dados técnicos apresentados neste Site são fornecidos para fins informativos. Embora nos esforcemos pela precisão, as especificações reais do produto são regidas pelo Certificado de Análise (COA) que acompanha cada remessa de lote. As especificações estão sujeitas a alterações sem aviso prévio.',
      },
      {
        heading: '4. Consultas e Pedidos',
        body: 'O envio de uma consulta através do nosso Site não constitui um pedido ou contrato vinculativo. Todas as transações grossistas estão sujeitas a acordos comerciais separados, incluindo preços, condições de entrega e condições de pagamento negociados entre as partes.',
      },
      {
        heading: '5. Propriedade Intelectual',
        body: 'Todo o conteúdo deste Site — incluindo textos, imagens, logótipos, gráficos e software — é propriedade da 蔚萃生物科技（楚雄）有限公司 ou dos seus licenciadores e está protegido pelas leis de propriedade intelectual aplicáveis. Não pode reproduzir, distribuir ou criar obras derivadas deste conteúdo sem o nosso consentimento prévio por escrito.',
      },
      {
        heading: '6. Conformidade Regulatória',
        body: 'Os produtos Vetrux são fabricados em conformidade com os regulamentos chineses aplicáveis ao processamento de cânhamo industrial. Os compradores são os únicos responsáveis por garantir a conformidade com as leis e regulamentos das respetivas jurisdições, incluindo, entre outros, o Regulamento de Novos Alimentos da UE (UE) 2015/2283, os requisitos locais de importação e os limites de teor de THC.',
      },
      {
        heading: '7. Limitação de Responsabilidade',
        body: 'Na máxima extensão permitida por lei, a Vetrux não será responsável por quaisquer danos indiretos, incidentais, especiais ou consequentes decorrentes da utilização deste Site ou da confiança nas informações aqui apresentadas. Este Site é fornecido "tal como está", sem garantias de qualquer tipo.',
      },
      {
        heading: '8. Ligações Externas',
        body: 'Este Site pode conter ligações para sites de terceiros. Não somos responsáveis pelo conteúdo, práticas de privacidade ou disponibilidade de sites externos. A inclusão de qualquer ligação não implica aprovação.',
      },
      {
        heading: '9. Lei Aplicável',
        body: 'Estes Termos de Serviço são regidos e interpretados de acordo com as leis da República Popular da China. Quaisquer litígios decorrentes destes termos estarão sujeitos à jurisdição dos tribunais da Província de Yunnan, China.',
      },
      {
        heading: '10. Contacto',
        body: 'Para questões sobre estes Termos de Serviço, entre em contacto connosco em: postmaster@vetrux.tech',
        contact: '蔚萃生物科技（楚雄）有限公司\nChuxiong, Província de Yunnan, China',
      },
    ],
  },
  ja: {
    title: '利用規約',
    lastUpdated: '最終更新日：2026年4月',
    sections: [
      {
        heading: '1. 規約への同意',
        body: '蔚萃生物科技（楚雄）有限公司が対外的ブランド「Vetrux CBD」（以下「Vetrux CBD」または「当社」）として運営するウェブサイト www.vetrux.tech（以下「本サイト」）にアクセスし、これを利用することにより、お客様は本利用規約に拘束されることに同意したものとみなされます。本規約に同意されない場合は、本サイトを利用しないでください。',
      },
      {
        heading: '2. 本サイトの目的',
        body: '本サイトは、CBDアイソレートの卸売購入者向けのB2B情報プラットフォームとして機能します。本サイトのコンテンツは、製薬、栄養補助食品、化粧品業界のビジネス専門家を対象としています。本サイトは一般消費者への直接販売を行うものではありません。',
      },
      {
        heading: '3. 製品情報',
        body: '本サイトに掲載されている製品仕様、認証、および技術データは、情報提供を目的として提供されています。正確性には努めておりますが、実際の製品仕様は各バッチ出荷に付随する分析証明書（COA）に準拠します。仕様は予告なく変更されることがあります。',
      },
      {
        heading: '4. お問い合わせと注文',
        body: '本サイトを通じてお問い合わせを送信することは、拘束力のある注文または契約を構成するものではありません。すべての卸売取引は、価格、配送条件、および支払条件を含む、当事者間で交わされる個別の商業契約に従うものとします。',
      },
      {
        heading: '5. 知的財産権',
        body: '本サイト上のすべてのコンテンツ（テキスト、画像、ロゴ、グラフィック、ソフトウェアを含む）は、蔚萃生物科技（楚雄）有限公司またはそのライセンサーの財産であり、適用される知的財産法により保護されています。当社の書面による事前の同意なく、これらのコンテンツを複製、配布、または二次的著作物を作成することはできません。',
      },
      {
        heading: '6. 規制遵守',
        body: 'Vetrux製品は、産業用ヘンプ加工に関する適用中国法規に準拠して製造されています。購入者は、EU新規食品規則（EU）2015/2283、現地の輸入要件、THC含有量制限を含む（ただしこれらに限定されない）、それぞれの管轄区域の法令遵守を確保する単独の責任を負います。',
      },
      {
        heading: '7. 責任の制限',
        body: '法律で認められる最大限の範囲において、Vetruxは、本サイトの利用または本サイトに掲載された情報への依拠から生じる間接的、付随的、特別、または結果的な損害について、一切の責任を負いません。本サイトは「現状のまま」提供され、いかなる種類の保証もありません。',
      },
      {
        heading: '8. 外部リンク',
        body: '本サイトには第三者のウェブサイトへのリンクが含まれる場合があります。当社は、外部サイトの内容、プライバシー慣行、または可用性について責任を負いません。リンクの掲載は、推奨を意味するものではありません。',
      },
      {
        heading: '9. 準拠法',
        body: '本利用規約は、中華人民共和国の法律に準拠し、これに従って解釈されます。本規約から生じる一切の紛争は、中国Yunnan省の裁判所の専属管轄に服するものとします。',
      },
      {
        heading: '10. お問い合わせ',
        body: '本利用規約に関するご質問は、postmaster@vetrux.tech までご連絡ください。',
        contact: '蔚萃生物科技（楚雄）有限公司\n中国Yunnan省Chuxiong',
      },
    ],
  },
  fi: {
    title: 'Käyttöehdot',
    lastUpdated: 'Viimeksi päivitetty: huhtikuu 2026',
    sections: [
      {
        heading: '1. Ehtojen hyväksyminen',
        body: 'Käyttämällä verkkosivustoa www.vetrux.tech ("Sivusto"), jota ylläpitää 蔚萃生物科技（楚雄）有限公司 julkisella tuotemerkillä Vetrux CBD ("Vetrux CBD", "me"), hyväksyt nämä käyttöehdot. Jos et hyväksy näitä ehtoja, älä käytä Sivustoa.',
      },
      {
        heading: '2. Sivuston tarkoitus',
        body: 'Tämä Sivusto toimii B2B-tietoalustana CBD-isolaatin tukkukauppiaille. Sivuston sisältö on tarkoitettu lääke-, ravintolisä- ja kosmetiikka-alan ammattilaisille. Tämä Sivusto ei mahdollista suoria kuluttajamyyntejä.',
      },
      {
        heading: '3. Tuotetiedot',
        body: 'Tällä Sivustolla esitetyt tuotespesifikaatiot, sertifioinnit ja tekniset tiedot on annettu tiedotustarkoituksessa. Vaikka pyrimme tarkkuuteen, todellisia tuotespesifikaatioita säätelee kunkin erälähetyksen mukana toimitettava analyysitodistus (COA). Spesifikaatiot voivat muuttua ilman ennakkoilmoitusta.',
      },
      {
        heading: '4. Tiedustelut ja tilaukset',
        body: 'Tiedustelun lähettäminen Sivustomme kautta ei muodosta sitovaa tilausta tai sopimusta. Kaikkiin tukkukauppoihin sovelletaan erillisiä kaupallisia sopimuksia, mukaan lukien osapuolten välillä neuvotellut hinnoittelu-, toimitusehdot ja maksuehdot.',
      },
      {
        heading: '5. Immateriaalioikeudet',
        body: 'Kaikki tämän Sivuston sisältö — mukaan lukien tekstit, kuvat, logot, grafiikka ja ohjelmistot — on 蔚萃生物科技（楚雄）有限公司:n tai sen lisenssinantajien omaisuutta, ja sitä suojaavat sovellettavat immateriaalioikeuslait. Et saa kopioida, levittää tai luoda johdannaisteoksia tästä sisällöstä ilman kirjallista ennakkosuostumustamme.',
      },
      {
        heading: '6. Sääntelyn noudattaminen',
        body: 'Vetrux-tuotteet valmistetaan Kiinan sovellettavien teollisuushampun käsittelyä koskevien määräysten mukaisesti. Ostajat ovat yksin vastuussa oman lainkäyttöalueensa lakien ja määräysten noudattamisesta, mukaan lukien mutta ei rajoittuen EU:n uuselintarvikeasetus (EU) 2015/2283, paikalliset tuontivaatimukset ja THC-pitoisuusrajat.',
      },
      {
        heading: '7. Vastuunrajoitus',
        body: 'Lain sallimassa enimmäislaajuudessa Vetrux ei ole vastuussa mistään epäsuorista, satunnaisista, erityisistä tai välillisistä vahingoista, jotka johtuvat tämän Sivuston käytöstä tai tässä esitettyihin tietoihin luottamisesta. Tämä Sivusto tarjotaan "sellaisena kuin se on" ilman minkäänlaisia takuita.',
      },
      {
        heading: '8. Ulkoiset linkit',
        body: 'Tämä Sivusto voi sisältää linkkejä kolmansien osapuolten verkkosivustoille. Emme ole vastuussa ulkoisten sivustojen sisällöstä, tietosuojakäytännöistä tai saatavuudesta. Linkin sisällyttäminen ei tarkoita hyväksyntää.',
      },
      {
        heading: '9. Sovellettava laki',
        body: 'Näihin käyttöehtoihin sovelletaan Kiinan kansantasavallan lakia ja niitä tulkitaan sen mukaisesti. Kaikki näistä ehdoista johtuvat riidat kuuluvat Kiinan Yunnanin maakunnan tuomioistuinten toimivaltaan.',
      },
      {
        heading: '10. Yhteystiedot',
        body: 'Kysymyksiä näistä käyttöehdoista: postmaster@vetrux.tech',
        contact: '蔚萃生物科技（楚雄）有限公司\nChuxiong, Yunnanin maakunta, Kiina',
      },
    ],
  },
} as const;

interface Section {
  heading: string;
  body?: string;
  contact?: string;
}

function t(locale?: Locale) {
  const loc = locale ?? 'en';
  return (content as unknown as Record<string, typeof content.en>)[loc] ?? content.en;
}

export default function TermsOfServiceClient({ locale }: TermsOfServiceClientProps) {
  const strings = t(locale);

  return (
    <div className="bg-surface min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-0 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-on-background tracking-tighter leading-tight mb-8">
          {strings.title}
        </h1>
        <p className="text-xs text-on-surface-variant mb-12">{strings.lastUpdated}</p>

        <div className="space-y-10 text-sm text-on-surface-variant leading-relaxed">
          {(strings.sections as unknown as Section[]).map((section, i: number) => (
            <section key={i}>
              <h2 className="text-lg font-bold text-on-background tracking-tight mb-3">{section.heading}</h2>
              {section.body && <p>{section.body}</p>}
              {section.contact && <p className="mt-2 whitespace-pre-line">{section.contact}</p>}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
