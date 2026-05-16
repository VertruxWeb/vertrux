'use client'

import type { Locale } from '@/i18n/locales';

interface PrivacyPolicyClientProps {
  locale?: Locale;
}

const content = {
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: April 2026',
    sections: [
      {
        heading: '1. Introduction',
        body: '蔚萃生物科技（楚雄）有限公司 ("Vetrux CBD", "we", "us") respects your privacy and is committed to protecting the personal data of visitors to our website at www.vetrux.tech. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or submit an inquiry.',
      },
      {
        heading: '2. Data Controller',
        body: 'The data controller responsible for your personal data is 蔚萃生物科技（楚雄）有限公司, based in Chuxiong, Yunnan Province, China. For privacy-related inquiries, contact us at postmaster@vetrux.tech.',
      },
      {
        heading: '3. Information We Collect',
        body: 'We may collect the following categories of information:',
        list: [
          'Inquiry form data: Name, company name, email address, phone number, and message content submitted through our inquiry form.',
          'Usage data: Pages visited, time spent on pages, referral source, browser type, and device information collected via Google Analytics 4.',
          'Technical data: IP address, browser type, operating system, and access timestamps collected automatically by our web servers.',
        ],
      },
      {
        heading: '4. How We Use Your Information',
        list: [
          'To respond to B2B wholesale inquiries and provide requested product documentation.',
          'To analyze website usage patterns and improve our content and user experience.',
          'To comply with legal obligations and protect our legitimate business interests.',
        ],
      },
      {
        heading: '5. Legal Basis for Processing (GDPR)',
        body: 'For visitors in the European Economic Area, we process personal data based on:',
        list: [
          'Legitimate interest: Processing inquiry data to respond to business requests.',
          'Consent: Where required for analytics cookies and tracking technologies.',
          'Legal obligation: Where processing is required by applicable law.',
        ],
      },
      {
        heading: '6. Data Sharing',
        body: 'We do not sell your personal data. We may share data with trusted service providers who assist in operating our website (e.g., hosting, analytics), subject to appropriate data processing agreements. We use Google Analytics 4 for website analytics, which may transfer data to Google servers.',
      },
      {
        heading: '7. Data Retention',
        body: 'Inquiry form submissions are retained for the duration of the business relationship plus 24 months. Analytics data is retained according to Google Analytics default retention settings. You may request deletion of your personal data at any time.',
      },
      {
        heading: '8. Your Rights',
        body: 'Under applicable data protection laws (including GDPR), you have the right to:',
        list: [
          'Access the personal data we hold about you.',
          'Request correction of inaccurate data.',
          'Request deletion of your personal data.',
          'Object to or restrict processing of your data.',
          'Data portability where technically feasible.',
          'Lodge a complaint with a supervisory authority.',
        ],
      },
      {
        heading: '9. Security',
        body: 'We implement appropriate technical and organizational measures to protect your personal data, including HTTPS encryption, Content Security Policy headers, and access controls. However, no method of transmission over the Internet is 100% secure.',
      },
      {
        heading: '10. Contact',
        body: 'For any questions about this Privacy Policy or to exercise your data rights, contact us at: postmaster@vetrux.tech',
        contact: '蔚萃生物科技（楚雄）有限公司\nChuxiong, Yunnan Province, China',
      },
    ],
  },
  de: {
    title: 'Datenschutzerklärung',
    lastUpdated: 'Letzte Aktualisierung: April 2026',
    sections: [
      {
        heading: '1. Einführung',
        body: '蔚萃生物科技（楚雄）有限公司 ("Vetrux CBD", "wir", "uns") respektiert Ihre Privatsphäre und verpflichtet sich, die personenbezogenen Daten der Besucher unserer Website unter www.vetrux.tech zu schützen. Diese Datenschutzerklärung erläutert, wie wir Ihre Daten erfassen, verwenden und schützen, wenn Sie unsere Website besuchen oder eine Anfrage senden.',
      },
      {
        heading: '2. Verantwortlicher',
        body: 'Der für Ihre personenbezogenen Daten verantwortliche Datenverantwortliche ist 蔚萃生物科技（楚雄）有限公司 mit Sitz in Chuxiong, Provinz Yunnan, China. Bei datenschutzbezogenen Anfragen kontaktieren Sie uns unter postmaster@vetrux.tech.',
      },
      {
        heading: '3. Von uns erfasste Informationen',
        body: 'Wir können folgende Kategorien von Informationen erfassen:',
        list: [
          'Anfrageformular-Daten: Name, Firmenname, E-Mail-Adresse, Telefonnummer und Nachrichteninhalt, die über unser Anfrageformular übermittelt werden.',
          'Nutzungsdaten: Besuchte Seiten, Verweildauer, Verweisquelle, Browsertyp und Geräteinformationen, die über Google Analytics 4 erfasst werden.',
          'Technische Daten: IP-Adresse, Browsertyp, Betriebssystem und Zugriffszeitstempel, die automatisch von unseren Webservern erfasst werden.',
        ],
      },
      {
        heading: '4. Wie wir Ihre Daten verwenden',
        list: [
          'Zur Beantwortung von B2B-Großhandelsanfragen und Bereitstellung angeforderter Produktdokumentation.',
          'Zur Analyse von Website-Nutzungsverhalten und Verbesserung unserer Inhalte und Benutzererfahrung.',
          'Zur Einhaltung gesetzlicher Verpflichtungen und zum Schutz unserer berechtigten Geschäftsinteressen.',
        ],
      },
      {
        heading: '5. Rechtsgrundlage der Verarbeitung (DSGVO)',
        body: 'Für Besucher im Europäischen Wirtschaftsraum verarbeiten wir personenbezogene Daten auf Grundlage von:',
        list: [
          'Berechtigtes Interesse: Verarbeitung von Anfragedaten zur Beantwortung von Geschäftsanfragen.',
          'Einwilligung: Soweit für Analyse-Cookies und Tracking-Technologien erforderlich.',
          'Rechtliche Verpflichtung: Soweit die Verarbeitung nach geltendem Recht erforderlich ist.',
        ],
      },
      {
        heading: '6. Datenweitergabe',
        body: 'Wir verkaufen Ihre personenbezogenen Daten nicht. Wir können Daten an vertrauenswürdige Dienstleister weitergeben, die uns beim Betrieb unserer Website unterstützen (z. B. Hosting, Analyse), vorbehaltlich entsprechender Datenverarbeitungsvereinbarungen. Wir verwenden Google Analytics 4 für Website-Analysen, wobei Daten an Google-Server übertragen werden können.',
      },
      {
        heading: '7. Datenspeicherung',
        body: 'Anfrageformular-Einreichungen werden für die Dauer der Geschäftsbeziehung zuzüglich 24 Monate aufbewahrt. Analysedaten werden gemäß den Standard-Speichereinstellungen von Google Analytics aufbewahrt. Sie können jederzeit die Löschung Ihrer personenbezogenen Daten beantragen.',
      },
      {
        heading: '8. Ihre Rechte',
        body: 'Nach geltenden Datenschutzgesetzen (einschließlich DSGVO) haben Sie das Recht auf:',
        list: [
          'Auskunft über die von uns gespeicherten personenbezogenen Daten.',
          'Berichtigung unrichtiger Daten.',
          'Löschung Ihrer personenbezogenen Daten.',
          'Widerspruch gegen oder Einschränkung der Verarbeitung Ihrer Daten.',
          'Datenübertragbarkeit, soweit technisch machbar.',
          'Beschwerde bei einer Aufsichtsbehörde.',
        ],
      },
      {
        heading: '9. Sicherheit',
        body: 'Wir setzen angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer personenbezogenen Daten ein, einschließlich HTTPS-Verschlüsselung, Content-Security-Policy-Headern und Zugriffskontrollen. Keine Übertragungsmethode über das Internet ist jedoch 100% sicher.',
      },
      {
        heading: '10. Kontakt',
        body: 'Bei Fragen zu dieser Datenschutzerklärung oder zur Ausübung Ihrer Datenrechte kontaktieren Sie uns unter: postmaster@vetrux.tech',
        contact: '蔚萃生物科技（楚雄）有限公司\nChuxiong, Provinz Yunnan, China',
      },
    ],
  },
  fr: {
    title: 'Politique de Confidentialité',
    lastUpdated: 'Dernière mise à jour : avril 2026',
    sections: [
      {
        heading: '1. Introduction',
        body: '蔚萃生物科技（楚雄）有限公司 (« Vetrux CBD », « nous ») respecte votre vie privée et s\'engage à protéger les données personnelles des visiteurs de notre site web www.vetrux.tech. La présente Politique de Confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous visitez notre site web ou soumettez une demande.',
      },
      {
        heading: '2. Responsable du Traitement',
        body: 'Le responsable du traitement de vos données personnelles est 蔚萃生物科技（楚雄）有限公司, basé à Chuxiong, Province du Yunnan, Chine. Pour toute question relative à la confidentialité, contactez-nous à postmaster@vetrux.tech.',
      },
      {
        heading: '3. Informations que Nous Collectons',
        body: 'Nous pouvons collecter les catégories d\'informations suivantes :',
        list: [
          'Données du formulaire de demande : Nom, nom de l\'entreprise, adresse e-mail, numéro de téléphone et contenu du message soumis via notre formulaire de demande.',
          'Données d\'utilisation : Pages visitées, temps passé sur les pages, source de référence, type de navigateur et informations sur l\'appareil collectées via Google Analytics 4.',
          'Données techniques : Adresse IP, type de navigateur, système d\'exploitation et horodatages d\'accès collectés automatiquement par nos serveurs web.',
        ],
      },
      {
        heading: '4. Comment Nous Utilisons Vos Informations',
        list: [
          'Pour répondre aux demandes de gros B2B et fournir la documentation produit demandée.',
          'Pour analyser les habitudes d\'utilisation du site web et améliorer notre contenu et l\'expérience utilisateur.',
          'Pour respecter les obligations légales et protéger nos intérêts commerciaux légitimes.',
        ],
      },
      {
        heading: '5. Base Juridique du Traitement (RGPD)',
        body: 'Pour les visiteurs de l\'Espace Économique Européen, nous traitons les données personnelles sur la base de :',
        list: [
          'Intérêt légitime : Traitement des données de demande pour répondre aux demandes commerciales.',
          'Consentement : Lorsque requis pour les cookies d\'analyse et les technologies de suivi.',
          'Obligation légale : Lorsque le traitement est exigé par la loi applicable.',
        ],
      },
      {
        heading: '6. Partage des Données',
        body: 'Nous ne vendons pas vos données personnelles. Nous pouvons partager des données avec des prestataires de services de confiance qui nous aident à exploiter notre site web (ex. hébergement, analyse), sous réserve d\'accords de traitement des données appropriés. Nous utilisons Google Analytics 4 pour l\'analyse du site web, ce qui peut transférer des données vers les serveurs de Google.',
      },
      {
        heading: '7. Conservation des Données',
        body: 'Les soumissions du formulaire de demande sont conservées pendant la durée de la relation d\'affaires plus 24 mois. Les données d\'analyse sont conservées selon les paramètres de conservation par défaut de Google Analytics. Vous pouvez demander la suppression de vos données personnelles à tout moment.',
      },
      {
        heading: '8. Vos Droits',
        body: 'En vertu des lois applicables sur la protection des données (y compris le RGPD), vous avez le droit de :',
        list: [
          'Accéder aux données personnelles que nous détenons à votre sujet.',
          'Demander la correction des données inexactes.',
          'Demander la suppression de vos données personnelles.',
          'Vous opposer au traitement ou le limiter.',
          'À la portabilité des données lorsque cela est techniquement possible.',
          'Déposer une plainte auprès d\'une autorité de contrôle.',
        ],
      },
      {
        heading: '9. Sécurité',
        body: 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles, y compris le chiffrement HTTPS, les en-têtes de politique de sécurité du contenu et les contrôles d\'accès. Cependant, aucune méthode de transmission sur Internet n\'est sûre à 100 %.',
      },
      {
        heading: '10. Contact',
        body: 'Pour toute question concernant cette Politique de Confidentialité ou pour exercer vos droits sur les données, contactez-nous à : postmaster@vetrux.tech',
        contact: '蔚萃生物科技（楚雄）有限公司\nChuxiong, Province du Yunnan, Chine',
      },
    ],
  },
  es: {
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: abril de 2026',
    sections: [
      {
        heading: '1. Introducción',
        body: '蔚萃生物科技（楚雄）有限公司 ("Vetrux CBD", "nosotros") respeta su privacidad y se compromete a proteger los datos personales de los visitantes de nuestro sitio web www.vetrux.tech. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos su información cuando visita nuestro sitio web o envía una consulta.',
      },
      {
        heading: '2. Responsable del Tratamiento',
        body: 'El responsable del tratamiento de sus datos personales es 蔚萃生物科技（楚雄）有限公司, con sede en Chuxiong, Provincia de Yunnan, China. Para consultas relacionadas con la privacidad, contáctenos en postmaster@vetrux.tech.',
      },
      {
        heading: '3. Información que Recopilamos',
        body: 'Podemos recopilar las siguientes categorías de información:',
        list: [
          'Datos del formulario de consulta: Nombre, nombre de la empresa, dirección de correo electrónico, número de teléfono y contenido del mensaje enviado a través de nuestro formulario de consulta.',
          'Datos de uso: Páginas visitadas, tiempo de permanencia, fuente de referencia, tipo de navegador e información del dispositivo recopilados a través de Google Analytics 4.',
          'Datos técnicos: Dirección IP, tipo de navegador, sistema operativo y marcas de tiempo de acceso recopilados automáticamente por nuestros servidores web.',
        ],
      },
      {
        heading: '4. Cómo Usamos Su Información',
        list: [
          'Para responder a consultas mayoristas B2B y proporcionar la documentación del producto solicitada.',
          'Para analizar los patrones de uso del sitio web y mejorar nuestro contenido y experiencia del usuario.',
          'Para cumplir con las obligaciones legales y proteger nuestros intereses comerciales legítimos.',
        ],
      },
      {
        heading: '5. Base Legal para el Tratamiento (RGPD)',
        body: 'Para los visitantes del Espacio Económico Europeo, tratamos los datos personales basándonos en:',
        list: [
          'Interés legítimo: Tratamiento de datos de consulta para responder a solicitudes comerciales.',
          'Consentimiento: Cuando sea necesario para cookies analíticas y tecnologías de seguimiento.',
          'Obligación legal: Cuando el tratamiento sea requerido por la ley aplicable.',
        ],
      },
      {
        heading: '6. Compartición de Datos',
        body: 'No vendemos sus datos personales. Podemos compartir datos con proveedores de servicios de confianza que nos ayudan a operar nuestro sitio web (ej. alojamiento, análisis), sujeto a los acuerdos de tratamiento de datos apropiados. Utilizamos Google Analytics 4 para el análisis del sitio web, lo que puede transferir datos a los servidores de Google.',
      },
      {
        heading: '7. Conservación de Datos',
        body: 'Los envíos del formulario de consulta se conservan durante la duración de la relación comercial más 24 meses. Los datos analíticos se conservan según la configuración predeterminada de Google Analytics. Puede solicitar la eliminación de sus datos personales en cualquier momento.',
      },
      {
        heading: '8. Sus Derechos',
        body: 'En virtud de las leyes de protección de datos aplicables (incluido el RGPD), tiene derecho a:',
        list: [
          'Acceder a los datos personales que tenemos sobre usted.',
          'Solicitar la corrección de datos inexactos.',
          'Solicitar la eliminación de sus datos personales.',
          'Oponerse o restringir el tratamiento de sus datos.',
          'A la portabilidad de los datos cuando sea técnicamente viable.',
          'Presentar una reclamación ante una autoridad de control.',
        ],
      },
      {
        heading: '9. Seguridad',
        body: 'Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales, incluido el cifrado HTTPS, encabezados de Política de Seguridad de Contenido y controles de acceso. Sin embargo, ningún método de transmisión por Internet es 100% seguro.',
      },
      {
        heading: '10. Contacto',
        body: 'Para cualquier pregunta sobre esta Política de Privacidad o para ejercer sus derechos sobre los datos, contáctenos en: postmaster@vetrux.tech',
        contact: '蔚萃生物科技（楚雄）有限公司\nChuxiong, Provincia de Yunnan, China',
      },
    ],
  },
  it: {
    title: 'Informativa sulla Privacy',
    lastUpdated: 'Ultimo aggiornamento: aprile 2026',
    sections: [
      {
        heading: '1. Introduzione',
        body: '蔚萃生物科技（楚雄）有限公司 ("Vetrux CBD", "noi") rispetta la tua privacy e si impegna a proteggere i dati personali dei visitatori del nostro sito web www.vetrux.tech. La presente Informativa sulla Privacy spiega come raccogliamo, utilizziamo e proteggiamo le tue informazioni quando visiti il nostro sito web o invii una richiesta.',
      },
      {
        heading: '2. Titolare del Trattamento',
        body: 'Il titolare del trattamento dei tuoi dati personali è 蔚萃生物科技（楚雄）有限公司, con sede a Chuxiong, Provincia dello Yunnan, Cina. Per domande relative alla privacy, contattaci a postmaster@vetrux.tech.',
      },
      {
        heading: '3. Informazioni che Raccogliamo',
        body: 'Possiamo raccogliere le seguenti categorie di informazioni:',
        list: [
          'Dati del modulo di richiesta: Nome, nome dell\'azienda, indirizzo e-mail, numero di telefono e contenuto del messaggio inviato tramite il nostro modulo di richiesta.',
          'Dati di utilizzo: Pagine visitate, tempo trascorso sulle pagine, fonte di riferimento, tipo di browser e informazioni sul dispositivo raccolti tramite Google Analytics 4.',
          'Dati tecnici: Indirizzo IP, tipo di browser, sistema operativo e timestamp di accesso raccolti automaticamente dai nostri server web.',
        ],
      },
      {
        heading: '4. Come Utilizziamo le Tue Informazioni',
        list: [
          'Per rispondere alle richieste B2B all\'ingrosso e fornire la documentazione del prodotto richiesta.',
          'Per analizzare i modelli di utilizzo del sito web e migliorare i nostri contenuti e l\'esperienza utente.',
          'Per adempiere agli obblighi legali e proteggere i nostri legittimi interessi commerciali.',
        ],
      },
      {
        heading: '5. Base Giuridica del Trattamento (GDPR)',
        body: 'Per i visitatori nello Spazio Economico Europeo, trattiamo i dati personali in base a:',
        list: [
          'Interesse legittimo: Trattamento dei dati di richiesta per rispondere alle richieste commerciali.',
          'Consenso: Ove richiesto per i cookie analitici e le tecnologie di tracciamento.',
          'Obbligo legale: Quando il trattamento è richiesto dalla legge applicabile.',
        ],
      },
      {
        heading: '6. Condivisione dei Dati',
        body: 'Non vendiamo i tuoi dati personali. Possiamo condividere i dati con fornitori di servizi di fiducia che ci assistono nella gestione del nostro sito web (es. hosting, analisi), nel rispetto di adeguati accordi sul trattamento dei dati. Utilizziamo Google Analytics 4 per l\'analisi del sito web, che potrebbe trasferire dati ai server di Google.',
      },
      {
        heading: '7. Conservazione dei Dati',
        body: 'Gli invii del modulo di richiesta vengono conservati per la durata del rapporto commerciale più 24 mesi. I dati analitici vengono conservati secondo le impostazioni predefinite di Google Analytics. Puoi richiedere la cancellazione dei tuoi dati personali in qualsiasi momento.',
      },
      {
        heading: '8. I Tuoi Diritti',
        body: 'Ai sensi delle leggi applicabili sulla protezione dei dati (incluso il GDPR), hai il diritto di:',
        list: [
          'Accedere ai dati personali in nostro possesso che ti riguardano.',
          'Richiedere la correzione dei dati inesatti.',
          'Richiedere la cancellazione dei tuoi dati personali.',
          'Opporti o limitare il trattamento dei tuoi dati.',
          'Alla portabilità dei dati ove tecnicamente fattibile.',
          'Proporre reclamo a un\'autorità di controllo.',
        ],
      },
      {
        heading: '9. Sicurezza',
        body: 'Implementiamo misure tecniche e organizzative appropriate per proteggere i tuoi dati personali, inclusi crittografia HTTPS, intestazioni Content Security Policy e controlli di accesso. Tuttavia, nessun metodo di trasmissione su Internet è sicuro al 100%.',
      },
      {
        heading: '10. Contatto',
        body: 'Per qualsiasi domanda sulla presente Informativa sulla Privacy o per esercitare i tuoi diritti sui dati, contattaci a: postmaster@vetrux.tech',
        contact: '蔚萃生物科技（楚雄）有限公司\nChuxiong, Provincia dello Yunnan, Cina',
      },
    ],
  },
  pt: {
    title: 'Política de Privacidade',
    lastUpdated: 'Última atualização: abril de 2026',
    sections: [
      {
        heading: '1. Introdução',
        body: 'A 蔚萃生物科技（楚雄）有限公司 ("Vetrux CBD", "nós") respeita sua privacidade e está comprometida em proteger os dados pessoais dos visitantes do nosso site em www.vetrux.tech. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações quando você visita nosso site ou envia uma consulta.',
      },
      {
        heading: '2. Controlador de Dados',
        body: 'O controlador de dados responsável por seus dados pessoais é a 蔚萃生物科技（楚雄）有限公司, com sede em Chuxiong, Província de Yunnan, China. Para questões relacionadas à privacidade, entre em contato conosco em postmaster@vetrux.tech.',
      },
      {
        heading: '3. Informações que Coletamos',
        body: 'Podemos coletar as seguintes categorias de informações:',
        list: [
          'Dados do formulário de consulta: Nome, nome da empresa, endereço de e-mail, número de telefone e conteúdo da mensagem enviados através do nosso formulário de consulta.',
          'Dados de uso: Páginas visitadas, tempo gasto nas páginas, fonte de referência, tipo de navegador e informações do dispositivo coletadas via Google Analytics 4.',
          'Dados técnicos: Endereço IP, tipo de navegador, sistema operacional e registros de data/hora de acesso coletados automaticamente por nossos servidores web.',
        ],
      },
      {
        heading: '4. Como Usamos Suas Informações',
        list: [
          'Para responder a consultas de atacado B2B e fornecer a documentação do produto solicitada.',
          'Para analisar padrões de uso do site e melhorar nosso conteúdo e experiência do usuário.',
          'Para cumprir obrigações legais e proteger nossos interesses comerciais legítimos.',
        ],
      },
      {
        heading: '5. Base Legal para o Tratamento (RGPD)',
        body: 'Para visitantes no Espaço Econômico Europeu, tratamos os dados pessoais com base em:',
        list: [
          'Interesse legítimo: Tratamento de dados de consulta para responder a solicitações comerciais.',
          'Consentimento: Quando necessário para cookies analíticos e tecnologias de rastreamento.',
          'Obrigação legal: Quando o tratamento é exigido pela lei aplicável.',
        ],
      },
      {
        heading: '6. Compartilhamento de Dados',
        body: 'Não vendemos seus dados pessoais. Podemos compartilhar dados com prestadores de serviços confiáveis que nos auxiliam na operação do nosso site (ex.: hospedagem, análise), sujeitos a acordos apropriados de tratamento de dados. Utilizamos o Google Analytics 4 para análise do site, o que pode transferir dados para os servidores do Google.',
      },
      {
        heading: '7. Retenção de Dados',
        body: 'Os envios do formulário de consulta são retidos pela duração da relação comercial mais 24 meses. Os dados analíticos são retidos de acordo com as configurações padrão de retenção do Google Analytics. Você pode solicitar a exclusão de seus dados pessoais a qualquer momento.',
      },
      {
        heading: '8. Seus Direitos',
        body: 'De acordo com as leis de proteção de dados aplicáveis (incluindo o RGPD), você tem o direito de:',
        list: [
          'Acessar os dados pessoais que mantemos sobre você.',
          'Solicitar a correção de dados imprecisos.',
          'Solicitar a exclusão de seus dados pessoais.',
          'Opor-se ou restringir o tratamento de seus dados.',
          'À portabilidade dos dados quando tecnicamente viável.',
          'Apresentar uma reclamação a uma autoridade de supervisão.',
        ],
      },
      {
        heading: '9. Segurança',
        body: 'Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais, incluindo criptografia HTTPS, cabeçalhos de Política de Segurança de Conteúdo e controles de acesso. No entanto, nenhum método de transmissão pela Internet é 100% seguro.',
      },
      {
        heading: '10. Contato',
        body: 'Para qualquer dúvida sobre esta Política de Privacidade ou para exercer seus direitos sobre os dados, entre em contato conosco em: postmaster@vetrux.tech',
        contact: '蔚萃生物科技（楚雄）有限公司\nChuxiong, Província de Yunnan, China',
      },
    ],
  },
  ja: {
    title: 'プライバシーポリシー',
    lastUpdated: '最終更新日：2026年4月',
    sections: [
      {
        heading: '1. はじめに',
        body: '蔚萃生物科技（楚雄）有限公司（以下「Vetrux CBD」または「当社」）は、お客様のプライバシーを尊重し、当社ウェブサイト（www.vetrux.tech）の訪問者の個人データを保護することに努めています。本プライバシーポリシーは、お客様が当社ウェブサイトを訪問された場合、またはお問い合わせを送信された場合に、当社がお客様の情報をどのように収集、使用、保護するかについて説明するものです。',
      },
      {
        heading: '2. データ管理者',
        body: 'お客様の個人データに関するデータ管理者は、中国Yunnan省Chuxiongに所在する蔚萃生物科技（楚雄）有限公司です。プライバシーに関するお問い合わせは、postmaster@vetrux.tech までご連絡ください。',
      },
      {
        heading: '3. 当社が収集する情報',
        body: '当社は以下のカテゴリの情報を収集する場合があります。',
        list: [
          'お問い合わせフォームデータ：当社のお問い合わせフォームから送信される、氏名、会社名、メールアドレス、電話番号、およびメッセージ内容。',
          '利用データ：Google Analytics 4を通じて収集される、訪問ページ、ページ滞在時間、参照元、ブラウザの種類、およびデバイス情報。',
          '技術データ：当社ウェブサーバーによって自動的に収集される、IPアドレス、ブラウザの種類、オペレーティングシステム、およびアクセスタイムスタンプ。',
        ],
      },
      {
        heading: '4. お客様の情報の利用目的',
        list: [
          'B2B卸売に関するお問い合わせに対応し、ご依頼いただいた製品文書を提供するため。',
          'ウェブサイトの利用パターンを分析し、コンテンツおよびユーザーエクスペリエンスを改善するため。',
          '法的義務を遵守し、当社の正当な事業利益を保護するため。',
        ],
      },
      {
        heading: '5. 処理の法的根拠（GDPR）',
        body: '欧州経済領域内の訪問者について、当社は以下の根拠に基づき個人データを処理します。',
        list: [
          '正当な利益：ビジネス上の依頼に対応するための問い合わせデータの処理。',
          '同意：分析用Cookieおよびトラッキング技術に関して同意が必要な場合。',
          '法的義務：適用法令により処理が要求される場合。',
        ],
      },
      {
        heading: '6. データの共有',
        body: '当社はお客様の個人データを販売することはありません。当社は、ウェブサイトの運営を支援する信頼できるサービスプロバイダー（例：ホスティング、分析）と、適切なデータ処理契約に基づきデータを共有する場合があります。当社はウェブサイト分析にGoogle Analytics 4を使用しており、これによりデータがGoogleのサーバーに転送される場合があります。',
      },
      {
        heading: '7. データの保持',
        body: 'お問い合わせフォームの送信内容は、取引関係の期間に加えて24か月間保持されます。分析データは、Google Analyticsのデフォルトの保持設定に従って保持されます。お客様はいつでもご自身の個人データの削除を要求することができます。',
      },
      {
        heading: '8. お客様の権利',
        body: '適用されるデータ保護法（GDPRを含む）に基づき、お客様には以下の権利があります。',
        list: [
          '当社が保持するお客様の個人データにアクセスする権利。',
          '不正確なデータの訂正を要求する権利。',
          'お客様の個人データの削除を要求する権利。',
          'お客様のデータの処理に対して異議を唱え、または制限する権利。',
          '技術的に可能な場合、データポータビリティの権利。',
          '監督当局に苦情を申し立てる権利。',
        ],
      },
      {
        heading: '9. セキュリティ',
        body: '当社は、HTTPS暗号化、コンテンツセキュリティポリシーヘッダー、アクセス制御など、お客様の個人データを保護するための適切な技術的および組織的対策を実施しています。ただし、インターネットを介した伝送方法で100％安全なものはありません。',
      },
      {
        heading: '10. お問い合わせ',
        body: '本プライバシーポリシーに関するご質問、またはデータに関する権利の行使については、postmaster@vetrux.tech までご連絡ください。',
        contact: '蔚萃生物科技（楚雄）有限公司\n中国Yunnan省Chuxiong',
      },
    ],
  },
  fi: {
    title: 'Tietosuojaseloste',
    lastUpdated: 'Viimeksi päivitetty: huhtikuu 2026',
    sections: [
      {
        heading: '1. Johdanto',
        body: '蔚萃生物科技（楚雄）有限公司 ("Vetrux CBD", "me") kunnioittaa yksityisyyttäsi ja on sitoutunut suojaamaan verkkosivustomme www.vetrux.tech kävijöiden henkilötietoja. Tämä tietosuojaseloste kertoo, miten keräämme, käytämme ja suojaamme tietojasi, kun vierailet verkkosivustollamme tai lähetät tiedustelun.',
      },
      {
        heading: '2. Rekisterinpitäjä',
        body: 'Henkilötietojesi rekisterinpitäjä on 蔚萃生物科技（楚雄）有限公司, jonka kotipaikka on Chuxiong, Yunnanin maakunta, Kiina. Tietosuojaan liittyvissä tiedusteluissa ota yhteyttä: postmaster@vetrux.tech.',
      },
      {
        heading: '3. Keräämämme tiedot',
        body: 'Voimme kerätä seuraavia tietoluokkia:',
        list: [
          'Yhteydenottolomakkeen tiedot: Nimi, yrityksen nimi, sähköpostiosoite, puhelinnumero ja viestin sisältö, jotka lähetetään yhteydenottolomakkeemme kautta.',
          'Käyttötiedot: Vieraillut sivut, sivuilla käytetty aika, viittauslähde, selaintyyppi ja laitetiedot, jotka kerätään Google Analytics 4:n kautta.',
          'Tekniset tiedot: IP-osoite, selaintyyppi, käyttöjärjestelmä ja käytön aikaleimat, jotka kerätään automaattisesti verkkopalvelimiltamme.',
        ],
      },
      {
        heading: '4. Miten käytämme tietojasi',
        list: [
          'Vastataksemme B2B-tukkumyyntitiedusteluihin ja toimittaaksemme pyydetyn tuotedokumentaation.',
          'Analysoidaksemme verkkosivuston käyttötapoja ja parantaaksemme sisältöämme ja käyttäjäkokemusta.',
          'Täyttääksemme lakisääteiset velvoitteet ja suojataksemme oikeutettuja liiketoimintaintressejämme.',
        ],
      },
      {
        heading: '5. Käsittelyn oikeusperuste (GDPR)',
        body: 'Euroopan talousalueen kävijöiden osalta käsittelemme henkilötietoja seuraavin perustein:',
        list: [
          'Oikeutettu etu: Tiedustelutietojen käsittely liiketoimintapyyntöihin vastaamiseksi.',
          'Suostumus: Siltä osin kuin se on tarpeen analytiikkakeksejä ja seurantateknologioita varten.',
          'Lakisääteinen velvoite: Kun käsittely on sovellettavan lain edellyttämää.',
        ],
      },
      {
        heading: '6. Tietojen luovuttaminen',
        body: 'Emme myy henkilötietojasi. Voimme jakaa tietoja luotettaville palveluntarjoajille, jotka avustavat verkkosivustomme ylläpidossa (esim. hosting, analytiikka), asianmukaisten tietojenkäsittelysopimusten mukaisesti. Käytämme Google Analytics 4:ää verkkosivustoanalytiikkaan, mikä voi siirtää tietoja Googlen palvelimille.',
      },
      {
        heading: '7. Tietojen säilyttäminen',
        body: 'Yhteydenottolomakkeen lähetykset säilytetään liikesuhteen keston ajan plus 24 kuukautta. Analytiikkatiedot säilytetään Google Analyticsin oletussäilytysasetusten mukaisesti. Voit pyytää henkilötietojesi poistamista milloin tahansa.',
      },
      {
        heading: '8. Oikeutesi',
        body: 'Sovellettavien tietosuojalakien (mukaan lukien GDPR) nojalla sinulla on oikeus:',
        list: [
          'Saada pääsy sinua koskeviin hallussamme oleviin henkilötietoihin.',
          'Pyytää epätarkkojen tietojen oikaisua.',
          'Pyytää henkilötietojesi poistamista.',
          'Vastustaa tai rajoittaa tietojesi käsittelyä.',
          'Tietojen siirrettävyyteen, kun se on teknisesti mahdollista.',
          'Tehdä valitus valvontaviranomaiselle.',
        ],
      },
      {
        heading: '9. Turvallisuus',
        body: 'Toteutamme asianmukaisia teknisiä ja organisatorisia toimenpiteitä henkilötietojesi suojaamiseksi, mukaan lukien HTTPS-salaus, Content Security Policy -otsikot ja pääsynhallinnat. Mikään Internetin kautta tapahtuva tiedonsiirtomenetelmä ei kuitenkaan ole 100-prosenttisen turvallinen.',
      },
      {
        heading: '10. Yhteystiedot',
        body: 'Kaikissa tätä tietosuojaselostetta koskevissa kysymyksissä tai käyttääksesi tietosuojaoikeuksiasi ota meihin yhteyttä: postmaster@vetrux.tech',
        contact: '蔚萃生物科技（楚雄）有限公司\nChuxiong, Yunnanin maakunta, Kiina',
      },
    ],
  },
} as const;

interface Section {
  heading: string;
  body?: string;
  list?: string[];
  contact?: string;
}

function t(locale?: Locale) {
  const loc = locale ?? 'en';
  return (content as unknown as Record<string, typeof content.en>)[loc] ?? content.en;
}

export default function PrivacyPolicyClient({ locale }: PrivacyPolicyClientProps) {
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
              {section.list && (
                <ul className="list-disc list-outside ml-5 space-y-2">
                  {section.list.map((item: string, j: number) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
              {section.contact && <p className="mt-2 whitespace-pre-line">{section.contact}</p>}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
