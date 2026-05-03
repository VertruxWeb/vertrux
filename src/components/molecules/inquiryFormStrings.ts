// src/components/molecules/inquiryFormStrings.ts
// Translation bundles for the inquiry form (EN / DE / FR / ES / IT / PT / JA / FI)

import type { InquiryFormStrings } from './InquiryFormCore';

export const inquiryFormStringsEn: InquiryFormStrings = {
  stepCompany: 'Company',
  stepRequirements: 'Requirements',
  stepVerify: 'Verify',

  companyLabel: 'Company Name',
  contactLabel: 'Contact Person',
  emailLabel: 'Corporate Email',
  volumeLabel: 'Estimated Monthly Volume',
  requirementsLabel: 'Product Requirements & Notes',

  companyPlaceholder: 'Acme Pharmaceuticals Ltd.',
  contactPlaceholder: 'Dr. Jane Smith',
  emailPlaceholder: 'procurement@company.com',
  volumePlaceholder: 'Select estimated monthly volume',
  requirementsPlaceholder:
    'Describe your specific product requirements, certifications needed, delivery terms, etc.',

  companyHint: 'Registered legal entity — used for the commercial quote.',
  contactHint: 'Primary technical or procurement contact.',
  emailHint: 'A business domain email helps us route your inquiry faster.',
  volumeHint: 'Used to plan production scheduling — not used for pricing.',
  requirementsHint:
    'Minimum 20 characters. Include purity, packaging, certification and timeline expectations.',

  volumeOptionUnder10: '< 10 KG / month',
  volumeOption10to50: '10 – 50 KG / month',
  volumeOption50to200: '50 – 200 KG / month',
  volumeOption200to500: '200 – 500 KG / month',
  volumeOption500plus: '500+ KG / month',

  next: 'Next',
  back: 'Back',
  submit: 'Submit Technical Inquiry',
  submitting: 'Securing channel…',

  requiredMark: '*',
  requiredFieldError: 'Please complete every required field before continuing.',
  invalidEmailError: 'Please enter a valid corporate email address.',

  turnstileLoading: 'Loading Cloudflare Turnstile verification…',
  turnstileReady:
    'Cloudflare Turnstile is active. Complete the verification challenge before submitting.',
  turnstileMissingKey: 'Cloudflare Turnstile site key is not configured.',
  turnstileFailed: 'Cloudflare Turnstile verification failed. Please try again.',
  turnstileNotConfigured: 'Turnstile site key is not configured.',
  turnstileVerificationRequired:
    'Please complete the human verification challenge before submitting.',

  genericSubmitError: 'Unable to submit your inquiry right now.',

  securityDisclaimer:
    'This form is protected with Cloudflare Turnstile, server-side validation, origin checks, honeypot filtering, and rate limiting to reduce spam and abuse.',

  successTitle: 'Inquiry Received',
  successBody:
    'Thank you for your interest. Our B2B team will respond within 24 business hours.',
  successReferenceLabel: 'Reference ID',
  successNextHeading: 'What happens next',
  successStep1: 'Within 24 hours — our sales team reviews your inquiry and confirms fit.',
  successStep2: 'Technical call — we schedule a 20-minute scoping call with an extraction engineer.',
  successStep3: 'Formal quote — COA / SDS available and commercial terms sent for your review.',
};

export const inquiryFormStringsDe: InquiryFormStrings = {
  stepCompany: 'Unternehmen',
  stepRequirements: 'Anforderungen',
  stepVerify: 'Verifizieren',

  companyLabel: 'Firmenname',
  contactLabel: 'Ansprechpartner',
  emailLabel: 'Geschäftliche E-Mail',
  volumeLabel: 'Geschätztes Monatsvolumen',
  requirementsLabel: 'Produktanforderungen & Anmerkungen',

  companyPlaceholder: 'Acme Pharma GmbH',
  contactPlaceholder: 'Dr. Max Mustermann',
  emailPlaceholder: 'einkauf@unternehmen.de',
  volumePlaceholder: 'Geschätztes Volumen wählen',
  requirementsPlaceholder:
    'Beschreiben Sie Ihre spezifischen Produktanforderungen, benötigte Zertifizierungen, Lieferbedingungen usw.',

  companyHint: 'Eingetragene Rechtsform — wird für das kommerzielle Angebot verwendet.',
  contactHint: 'Technischer oder Einkaufs-Hauptansprechpartner.',
  emailHint: 'Eine Geschäftsdomäne beschleunigt die Weiterleitung Ihrer Anfrage.',
  volumeHint: 'Wird zur Produktionsplanung verwendet — nicht zur Preisgestaltung.',
  requirementsHint:
    'Mindestens 20 Zeichen. Bitte Reinheit, Verpackung, Zertifizierungen und Zeitplan angeben.',

  volumeOptionUnder10: '< 10 KG / Monat',
  volumeOption10to50: '10 – 50 KG / Monat',
  volumeOption50to200: '50 – 200 KG / Monat',
  volumeOption200to500: '200 – 500 KG / Monat',
  volumeOption500plus: '500+ KG / Monat',

  next: 'Weiter',
  back: 'Zurück',
  submit: 'Technische Anfrage absenden',
  submitting: 'Wird gesendet…',

  requiredMark: '*',
  requiredFieldError: 'Bitte füllen Sie alle Pflichtfelder aus, bevor Sie fortfahren.',
  invalidEmailError: 'Bitte geben Sie eine gültige geschäftliche E-Mail-Adresse ein.',

  turnstileLoading: 'Cloudflare Turnstile-Verifizierung wird geladen…',
  turnstileReady:
    'Cloudflare Turnstile ist aktiv. Schließen Sie die Verifizierung ab, bevor Sie absenden.',
  turnstileMissingKey: 'Cloudflare Turnstile-Seitenschlüssel ist nicht konfiguriert.',
  turnstileFailed:
    'Cloudflare Turnstile-Verifizierung fehlgeschlagen. Bitte versuchen Sie es erneut.',
  turnstileNotConfigured: 'Turnstile-Seitenschlüssel ist nicht konfiguriert.',
  turnstileVerificationRequired:
    'Bitte schließen Sie die Verifizierung ab, bevor Sie das Formular absenden.',

  genericSubmitError: 'Ihre Anfrage kann derzeit nicht gesendet werden.',

  securityDisclaimer:
    'Dieses Formular ist durch Cloudflare Turnstile, serverseitige Validierung, Herkunftsprüfungen, Honeypot-Filterung und Ratenbegrenzung gegen Spam und Missbrauch geschützt.',

  successTitle: 'Anfrage erhalten',
  successBody:
    'Vielen Dank für Ihr Interesse. Unser B2B-Team wird innerhalb von 24 Geschäftsstunden antworten.',
  successReferenceLabel: 'Referenz-ID',
  successNextHeading: 'Wie geht es weiter',
  successStep1:
    'Innerhalb von 24 Stunden — unser Vertriebsteam prüft Ihre Anfrage und bestätigt die Passung.',
  successStep2:
    'Technisches Gespräch — wir planen einen 20-minütigen Scoping-Call mit einem Extraktionsingenieur.',
  successStep3:
    'Verbindliches Angebot — COA / SDS verfügbar, kommerzielle Konditionen werden zur Prüfung versandt.',
};

export const inquiryFormStringsFr: InquiryFormStrings = {
  stepCompany: 'Entreprise',
  stepRequirements: 'Besoins',
  stepVerify: 'Vérifier',

  companyLabel: 'Nom de la Société',
  contactLabel: 'Personne à Contacter',
  emailLabel: 'E-mail Professionnel',
  volumeLabel: 'Volume Mensuel Estimé',
  requirementsLabel: 'Besoins Produit & Notes',

  companyPlaceholder: 'Acme Pharma SARL',
  contactPlaceholder: 'Dr. Jean Dupont',
  emailPlaceholder: 'achats@entreprise.com',
  volumePlaceholder: 'Sélectionner le volume estimé',
  requirementsPlaceholder:
    'Décrivez vos exigences produit spécifiques, les certifications requises, les conditions de livraison, etc.',

  companyHint: 'Entité légale enregistrée — utilisée pour le devis commercial.',
  contactHint: 'Interlocuteur technique ou achats principal.',
  emailHint: 'Un e-mail de domaine professionnel accélère le traitement de votre demande.',
  volumeHint: "Sert à planifier la production — n'est pas utilisé pour le prix.",
  requirementsHint:
    'Minimum 20 caractères. Précisez pureté, conditionnement, certifications et délais.',

  volumeOptionUnder10: '< 10 KG / mois',
  volumeOption10to50: '10 – 50 KG / mois',
  volumeOption50to200: '50 – 200 KG / mois',
  volumeOption200to500: '200 – 500 KG / mois',
  volumeOption500plus: '500+ KG / mois',

  next: 'Suivant',
  back: 'Précédent',
  submit: 'Envoyer la Demande Technique',
  submitting: 'Envoi en cours…',

  requiredMark: '*',
  requiredFieldError: 'Veuillez compléter tous les champs obligatoires avant de continuer.',
  invalidEmailError: 'Veuillez saisir une adresse e-mail professionnelle valide.',

  turnstileLoading: 'Chargement de la vérification Cloudflare Turnstile…',
  turnstileReady:
    'Cloudflare Turnstile est actif. Complétez la vérification avant d’envoyer.',
  turnstileMissingKey: 'La clé de site Cloudflare Turnstile n’est pas configurée.',
  turnstileFailed:
    'La vérification Cloudflare Turnstile a échoué. Veuillez réessayer.',
  turnstileNotConfigured: 'La clé de site Turnstile n’est pas configurée.',
  turnstileVerificationRequired:
    'Veuillez compléter la vérification anti-robot avant d’envoyer.',

  genericSubmitError: 'Impossible d’envoyer votre demande pour le moment.',

  securityDisclaimer:
    'Ce formulaire est protégé par Cloudflare Turnstile, la validation côté serveur, les contrôles d’origine, le filtrage honeypot et la limitation de débit pour réduire le spam et les abus.',

  successTitle: 'Demande reçue',
  successBody:
    'Merci de votre intérêt. Notre équipe B2B vous répondra sous 24 heures ouvrables.',
  successReferenceLabel: 'ID de référence',
  successNextHeading: 'Prochaines étapes',
  successStep1:
    'Sous 24 heures — notre équipe commerciale étudie votre demande et confirme l’adéquation.',
  successStep2:
    'Appel technique — nous planifions un appel de 20 minutes avec un ingénieur extraction.',
  successStep3:
    'Devis formel — COA / SDS disponibles et conditions commerciales transmises pour examen.',
};

export const inquiryFormStringsEs: InquiryFormStrings = {
  stepCompany: 'Empresa',
  stepRequirements: 'Requisitos',
  stepVerify: 'Verificar',

  companyLabel: 'Nombre de la Empresa',
  contactLabel: 'Persona de Contacto',
  emailLabel: 'Correo Corporativo',
  volumeLabel: 'Volumen Mensual Estimado',
  requirementsLabel: 'Requisitos del Producto y Notas',

  companyPlaceholder: 'Acme Pharma S.L.',
  contactPlaceholder: 'Dr. Carlos García',
  emailPlaceholder: 'compras@empresa.com',
  volumePlaceholder: 'Seleccione el volumen mensual estimado',
  requirementsPlaceholder:
    'Describa sus requisitos específicos de producto, certificaciones necesarias, condiciones de entrega, etc.',

  companyHint: 'Entidad legal registrada — se utiliza para la cotización comercial.',
  contactHint: 'Contacto técnico o de compras principal.',
  emailHint: 'Un correo de dominio corporativo agiliza el procesamiento de su solicitud.',
  volumeHint: 'Se utiliza para planificar la producción — no se usa para fijar precios.',
  requirementsHint:
    'Mínimo 20 caracteres. Incluya pureza, envase, certificaciones y plazos esperados.',

  volumeOptionUnder10: '< 10 KG / mes',
  volumeOption10to50: '10 – 50 KG / mes',
  volumeOption50to200: '50 – 200 KG / mes',
  volumeOption200to500: '200 – 500 KG / mes',
  volumeOption500plus: '500+ KG / mes',

  next: 'Siguiente',
  back: 'Atrás',
  submit: 'Enviar Consulta Técnica',
  submitting: 'Enviando…',

  requiredMark: '*',
  requiredFieldError: 'Por favor, complete todos los campos obligatorios antes de continuar.',
  invalidEmailError: 'Por favor, introduzca una dirección de correo corporativo válida.',

  turnstileLoading: 'Cargando verificación de Cloudflare Turnstile…',
  turnstileReady:
    'Cloudflare Turnstile está activo. Complete la verificación antes de enviar.',
  turnstileMissingKey: 'La clave de sitio de Cloudflare Turnstile no está configurada.',
  turnstileFailed:
    'La verificación de Cloudflare Turnstile ha fallado. Por favor, inténtelo de nuevo.',
  turnstileNotConfigured: 'La clave de sitio de Turnstile no está configurada.',
  turnstileVerificationRequired:
    'Por favor, complete la verificación de seguridad antes de enviar.',

  genericSubmitError: 'No es posible enviar su consulta en este momento.',

  securityDisclaimer:
    'Este formulario está protegido con Cloudflare Turnstile, validación en el servidor, comprobaciones de origen, filtrado honeypot y limitación de velocidad para reducir el spam y el abuso.',

  successTitle: 'Consulta Recibida',
  successBody:
    'Gracias por su interés. Nuestro equipo B2B le responderá en un plazo de 24 horas hábiles.',
  successReferenceLabel: 'ID de Referencia',
  successNextHeading: 'Próximos pasos',
  successStep1:
    'En 24 horas — nuestro equipo comercial revisa su consulta y confirma la idoneidad.',
  successStep2:
    'Llamada técnica — programamos una llamada de 20 minutos con un ingeniero de extracción.',
  successStep3:
    'Cotización formal — COA / SDS disponibles y condiciones comerciales enviadas para su revisión.',
};

export const inquiryFormStringsIt: InquiryFormStrings = {
  stepCompany: 'Azienda',
  stepRequirements: 'Requisiti',
  stepVerify: 'Verifica',

  companyLabel: 'Nome Azienda',
  contactLabel: 'Persona di Contatto',
  emailLabel: 'Email Aziendale',
  volumeLabel: 'Volume Mensile Stimato',
  requirementsLabel: 'Requisiti Prodotto e Note',

  companyPlaceholder: 'Acme Pharma S.r.l.',
  contactPlaceholder: 'Dott. Marco Rossi',
  emailPlaceholder: 'acquisti@azienda.it',
  volumePlaceholder: 'Seleziona il volume mensile stimato',
  requirementsPlaceholder:
    'Descriva i requisiti specifici del prodotto, le certificazioni necessarie, le condizioni di consegna, ecc.',

  companyHint: 'Entità legale registrata — utilizzata per il preventivo commerciale.',
  contactHint: 'Referente tecnico o acquisti principale.',
  emailHint: "Un'email con dominio aziendale accelera l'elaborazione della sua richiesta.",
  volumeHint: 'Utilizzato per pianificare la produzione — non per la determinazione del prezzo.',
  requirementsHint:
    'Minimo 20 caratteri. Includere purezza, confezionamento, certificazioni e tempistiche previste.',

  volumeOptionUnder10: '< 10 KG / mese',
  volumeOption10to50: '10 – 50 KG / mese',
  volumeOption50to200: '50 – 200 KG / mese',
  volumeOption200to500: '200 – 500 KG / mese',
  volumeOption500plus: '500+ KG / mese',

  next: 'Avanti',
  back: 'Indietro',
  submit: 'Invia Richiesta Tecnica',
  submitting: 'Invio in corso…',

  requiredMark: '*',
  requiredFieldError: 'Si prega di completare tutti i campi obbligatori prima di continuare.',
  invalidEmailError: "Si prega di inserire un indirizzo email aziendale valido.",

  turnstileLoading: 'Caricamento verifica Cloudflare Turnstile…',
  turnstileReady:
    'Cloudflare Turnstile è attivo. Completare la verifica prima di inviare.',
  turnstileMissingKey: 'La chiave del sito Cloudflare Turnstile non è configurata.',
  turnstileFailed:
    'Verifica Cloudflare Turnstile non riuscita. Si prega di riprovare.',
  turnstileNotConfigured: 'La chiave del sito Turnstile non è configurata.',
  turnstileVerificationRequired:
    'Si prega di completare la verifica di sicurezza prima di inviare.',

  genericSubmitError: 'Impossibile inviare la richiesta al momento.',

  securityDisclaimer:
    'Questo modulo è protetto da Cloudflare Turnstile, validazione lato server, controlli di origine, filtraggio honeypot e limitazione della frequenza per ridurre spam e abusi.',

  successTitle: 'Richiesta Ricevuta',
  successBody:
    'Grazie per il suo interesse. Il nostro team B2B risponderà entro 24 ore lavorative.',
  successReferenceLabel: 'ID di Riferimento',
  successNextHeading: 'Prossimi passi',
  successStep1:
    'Entro 24 ore — il nostro team commerciale esamina la richiesta e conferma la compatibilità.',
  successStep2:
    'Chiamata tecnica — pianifichiamo una chiamata di 20 minuti con un ingegnere di estrazione.',
  successStep3:
    'Preventivo formale — COA / SDS disponibili e condizioni commerciali inviate per revisione.',
};

export const inquiryFormStringsPt: InquiryFormStrings = {
  stepCompany: 'Empresa',
  stepRequirements: 'Requisitos',
  stepVerify: 'Verificar',

  companyLabel: 'Nome da Empresa',
  contactLabel: 'Pessoa de Contato',
  emailLabel: 'E-mail Corporativo',
  volumeLabel: 'Volume Mensal Estimado',
  requirementsLabel: 'Requisitos do Produto e Observações',

  companyPlaceholder: 'Acme Pharma Ltda.',
  contactPlaceholder: 'Dr. João Silva',
  emailPlaceholder: 'compras@empresa.com.br',
  volumePlaceholder: 'Selecione o volume mensal estimado',
  requirementsPlaceholder:
    'Descreva seus requisitos específicos de produto, certificações necessárias, condições de entrega, etc.',

  companyHint: 'Entidade legal registrada — utilizada para a cotação comercial.',
  contactHint: 'Contato técnico ou de compras principal.',
  emailHint: 'Um e-mail de domínio corporativo agiliza o processamento da sua solicitação.',
  volumeHint: 'Utilizado para planejar a produção — não é usado para precificação.',
  requirementsHint:
    'Mínimo de 20 caracteres. Inclua pureza, embalagem, certificações e prazos esperados.',

  volumeOptionUnder10: '< 10 KG / mês',
  volumeOption10to50: '10 – 50 KG / mês',
  volumeOption50to200: '50 – 200 KG / mês',
  volumeOption200to500: '200 – 500 KG / mês',
  volumeOption500plus: '500+ KG / mês',

  next: 'Próximo',
  back: 'Voltar',
  submit: 'Enviar Consulta Técnica',
  submitting: 'Enviando…',

  requiredMark: '*',
  requiredFieldError: 'Por favor, preencha todos os campos obrigatórios antes de continuar.',
  invalidEmailError: 'Por favor, insira um endereço de e-mail corporativo válido.',

  turnstileLoading: 'Carregando verificação do Cloudflare Turnstile…',
  turnstileReady:
    'O Cloudflare Turnstile está ativo. Conclua a verificação antes de enviar.',
  turnstileMissingKey: 'A chave de site do Cloudflare Turnstile não está configurada.',
  turnstileFailed:
    'A verificação do Cloudflare Turnstile falhou. Por favor, tente novamente.',
  turnstileNotConfigured: 'A chave de site do Turnstile não está configurada.',
  turnstileVerificationRequired:
    'Por favor, conclua a verificação de segurança antes de enviar.',

  genericSubmitError: 'Não é possível enviar sua consulta no momento.',

  securityDisclaimer:
    'Este formulário é protegido com Cloudflare Turnstile, validação no servidor, verificações de origem, filtragem honeypot e limitação de taxa para reduzir spam e abusos.',

  successTitle: 'Consulta Recebida',
  successBody:
    'Obrigado pelo seu interesse. Nossa equipe B2B responderá em até 24 horas úteis.',
  successReferenceLabel: 'ID de Referência',
  successNextHeading: 'Próximos passos',
  successStep1:
    'Em 24 horas — nossa equipe comercial analisa sua consulta e confirma a adequação.',
  successStep2:
    'Chamada técnica — agendamos uma chamada de 20 minutos com um engenheiro de extração.',
  successStep3:
    'Cotação formal — COA / SDS disponíveis e condições comerciais enviadas para revisão.',
};

export const inquiryFormStringsJa: InquiryFormStrings = {
  stepCompany: '会社情報',
  stepRequirements: '要件',
  stepVerify: '確認',

  companyLabel: '会社名',
  contactLabel: '担当者名',
  emailLabel: '法人メールアドレス',
  volumeLabel: '月間推定発注量',
  requirementsLabel: '製品要件・備考',

  companyPlaceholder: '株式会社アクメファーマ',
  contactPlaceholder: '山田 太郎',
  emailPlaceholder: 'purchasing@company.co.jp',
  volumePlaceholder: '月間推定発注量を選択してください',
  requirementsPlaceholder:
    '製品の具体的な要件、必要な認証、納品条件などをご記入ください。',

  companyHint: '登記された法人名をご入力ください — 商業見積書に使用されます。',
  contactHint: '技術担当または購買担当の主要連絡先をご記入ください。',
  emailHint: '法人ドメインのメールアドレスをご使用いただくと、対応がスムーズになります。',
  volumeHint: '生産スケジュールの計画に使用されます — 価格設定には使用されません。',
  requirementsHint:
    '20文字以上でご記入ください。純度、包装形態、認証要件、納期の目安を含めてください。',

  volumeOptionUnder10: '月10 KG未満',
  volumeOption10to50: '月10 – 50 KG',
  volumeOption50to200: '月50 – 200 KG',
  volumeOption200to500: '月200 – 500 KG',
  volumeOption500plus: '月500 KG以上',

  next: '次へ',
  back: '戻る',
  submit: '技術的なお問い合わせを送信する',
  submitting: '送信中…',

  requiredMark: '*',
  requiredFieldError: '続行する前に、すべての必須項目をご入力ください。',
  invalidEmailError: '有効な法人メールアドレスをご入力ください。',

  turnstileLoading: 'Cloudflare Turnstile 認証を読み込んでいます…',
  turnstileReady:
    'Cloudflare Turnstile が有効です。送信前に認証チャレンジを完了してください。',
  turnstileMissingKey: 'Cloudflare Turnstile のサイトキーが設定されていません。',
  turnstileFailed:
    'Cloudflare Turnstile の認証に失敗しました。もう一度お試しください。',
  turnstileNotConfigured: 'Turnstile のサイトキーが設定されていません。',
  turnstileVerificationRequired:
    '送信前に、人間確認チャレンジを完了してください。',

  genericSubmitError: '現在、お問い合わせを送信できません。',

  securityDisclaimer:
    'このフォームは、Cloudflare Turnstile、サーバーサイド検証、オリジン確認、ハニーポットフィルタリング、およびレート制限によって、スパムや不正利用を防止するために保護されています。',

  successTitle: 'お問い合わせを受け付けました',
  successBody:
    'ご関心をお寄せいただきありがとうございます。B2B担当チームより24営業時間以内にご連絡いたします。',
  successReferenceLabel: '参照ID',
  successNextHeading: '今後の流れ',
  successStep1:
    '24時間以内 — 営業チームがお問い合わせ内容を確認し、適合性をご連絡いたします。',
  successStep2:
    'テクニカルコール — 抽出エンジニアとの20分間のスコーピングコールをご案内いたします。',
  successStep3:
    '正式見積書 — COA / SDS をご提供し、商業条件をご確認いただけるよう送付いたします。',
};

export const inquiryFormStringsFi: InquiryFormStrings = {
  stepCompany: 'Yritys',
  stepRequirements: 'Vaatimukset',
  stepVerify: 'Vahvista',

  companyLabel: 'Yrityksen Nimi',
  contactLabel: 'Yhteyshenkilö',
  emailLabel: 'Yrityssähköposti',
  volumeLabel: 'Arvioitu Kuukausittainen Volyymi',
  requirementsLabel: 'Tuotevaatimukset ja Lisätiedot',

  companyPlaceholder: 'Acme Pharma Oy',
  contactPlaceholder: 'Dr. Matti Virtanen',
  emailPlaceholder: 'hankinta@yritys.fi',
  volumePlaceholder: 'Valitse arvioitu kuukausittainen volyymi',
  requirementsPlaceholder:
    'Kuvaile tuotteen erityisvaatimukset, tarvittavat sertifioinnit, toimitusehdot jne.',

  companyHint: 'Rekisteröity oikeushenkilö — käytetään kaupallisessa tarjouksessa.',
  contactHint: 'Ensisijainen tekninen tai hankintayhteyshenkilö.',
  emailHint: 'Yritysverkkotunnuksen sähköpostiosoite nopeuttaa tiedustelun käsittelyä.',
  volumeHint: 'Käytetään tuotantoaikataulun suunnitteluun — ei hinnoitteluun.',
  requirementsHint:
    'Vähintään 20 merkkiä. Sisällytä puhtaus, pakkaus, sertifioinnit ja aikatauluodotukset.',

  volumeOptionUnder10: '< 10 KG / kuukausi',
  volumeOption10to50: '10 – 50 KG / kuukausi',
  volumeOption50to200: '50 – 200 KG / kuukausi',
  volumeOption200to500: '200 – 500 KG / kuukausi',
  volumeOption500plus: '500+ KG / kuukausi',

  next: 'Seuraava',
  back: 'Takaisin',
  submit: 'Lähetä Tekninen Tiedustelu',
  submitting: 'Lähetetään…',

  requiredMark: '*',
  requiredFieldError: 'Täytä kaikki pakolliset kentät ennen jatkamista.',
  invalidEmailError: 'Anna kelvollinen yrityssähköpostiosoite.',

  turnstileLoading: 'Ladataan Cloudflare Turnstile -vahvistusta…',
  turnstileReady:
    'Cloudflare Turnstile on aktiivinen. Suorita vahvistushaaste ennen lähettämistä.',
  turnstileMissingKey: 'Cloudflare Turnstile -sivustoavain ei ole määritetty.',
  turnstileFailed:
    'Cloudflare Turnstile -vahvistus epäonnistui. Yritä uudelleen.',
  turnstileNotConfigured: 'Turnstile-sivustoavain ei ole määritetty.',
  turnstileVerificationRequired:
    'Suorita ihmisvarmennus ennen lomakkeen lähettämistä.',

  genericSubmitError: 'Tiedustelua ei voida lähettää tällä hetkellä.',

  securityDisclaimer:
    'Tämä lomake on suojattu Cloudflare Turnstilella, palvelinpuolen validoinnilla, alkuperätarkistuksilla, honeypot-suodatuksella ja nopeusrajoituksella roskapostin ja väärinkäytön vähentämiseksi.',

  successTitle: 'Tiedustelu Vastaanotettu',
  successBody:
    'Kiitos mielenkiinnosta. B2B-tiimimme vastaa 24 työajan tunnin kuluessa.',
  successReferenceLabel: 'Viitenumero',
  successNextHeading: 'Mitä tapahtuu seuraavaksi',
  successStep1:
    '24 tunnin kuluessa — myyntitiimimme tarkistaa tiedustelun ja vahvistaa soveltuvuuden.',
  successStep2:
    'Tekninen puhelu — sovimme 20 minuutin kartoituspuhelun uuttoinsinöörin kanssa.',
  successStep3:
    'Virallinen tarjous — COA / SDS saatavilla ja kaupalliset ehdot lähetetään tarkasteltavaksi.',
};
