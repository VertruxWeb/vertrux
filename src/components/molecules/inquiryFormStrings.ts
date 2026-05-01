// src/components/molecules/inquiryFormStrings.ts
// Translation bundles for the inquiry form (EN / DE / FR)

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
