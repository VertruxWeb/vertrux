'use client'

import { useEffect, useMemo, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Button from '../atoms/Button';
import { submitInquiry } from '../../lib/inquiryClient';
import type { InquiryPayload } from '../../lib/inquiry';

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          'expired-callback'?: () => void;
          'error-callback'?: () => void;
          theme?: 'light' | 'dark' | 'auto';
        },
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

interface DeInquiryFormProps {
  darkBg?: boolean;
}

const initialForm = (): InquiryPayload => ({
  companyName: '',
  contactPerson: '',
  email: '',
  monthlyVolume: '',
  requirements: '',
  website: '',
  formStartedAt: new Date().toISOString(),
  turnstileToken: '',
});

export default function DeInquiryForm({ darkBg = false }: DeInquiryFormProps) {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? '';
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);
  const [form, setForm] = useState<InquiryPayload>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [referenceId, setReferenceId] = useState('');
  const [isTurnstileReady, setIsTurnstileReady] = useState(false);

  const inputClass = darkBg
    ? 'w-full bg-transparent border-0 border-b border-white/20 pb-3 pt-1 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-200'
    : 'input-minimal';

  const labelClass = darkBg
    ? 'block text-xs font-semibold tracking-widest uppercase mb-2 text-white/50'
    : 'block text-xs font-semibold tracking-widest uppercase mb-2 text-on-surface-variant';

  const helperTextClass = useMemo(
    () => (darkBg ? 'text-white/55' : 'text-on-surface-variant'),
    [darkBg],
  );

  const resetTurnstile = () => {
    setForm((currentForm) => ({ ...currentForm, turnstileToken: '', formStartedAt: new Date().toISOString() }));

    if (window.turnstile && turnstileWidgetIdRef.current) {
      window.turnstile.reset(turnstileWidgetIdRef.current);
    }
  };

  useEffect(() => {
    if (!turnstileSiteKey || !turnstileContainerRef.current) {
      return;
    }

    let isCancelled = false;

    const renderWidget = () => {
      if (
        isCancelled
        || !window.turnstile
        || !turnstileContainerRef.current
        || turnstileWidgetIdRef.current
      ) {
        return;
      }

      turnstileWidgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
        sitekey: turnstileSiteKey,
        theme: darkBg ? 'dark' : 'light',
        callback: (token) => {
          setForm((currentForm) => ({ ...currentForm, turnstileToken: token }));
          setErrorMessage('');
        },
        'expired-callback': () => {
          setForm((currentForm) => ({ ...currentForm, turnstileToken: '' }));
        },
        'error-callback': () => {
          setForm((currentForm) => ({ ...currentForm, turnstileToken: '' }));
          setErrorMessage('Cloudflare Turnstile-Verifizierung fehlgeschlagen. Bitte versuchen Sie es erneut.');
        },
      });
      setIsTurnstileReady(true);
    };

    const existingScript = document.getElementById('cf-turnstile-script') as HTMLScriptElement | null;
    if (existingScript) {
      if (window.turnstile) {
        renderWidget();
      } else {
        existingScript.addEventListener('load', renderWidget, { once: true });
      }

      return () => {
        isCancelled = true;
      };
    }

    const script = document.createElement('script');
    script.id = 'cf-turnstile-script';
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.addEventListener('load', renderWidget, { once: true });
    document.head.appendChild(script);

    return () => {
      isCancelled = true;
    };
  }, [darkBg, turnstileSiteKey]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!turnstileSiteKey) {
      setErrorMessage('Cloudflare Turnstile-Seitenschlüssel ist nicht konfiguriert.');
      return;
    }

    if (!form.turnstileToken) {
      setErrorMessage('Bitte schließen Sie die Verifizierung ab, bevor Sie das Formular absenden.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitInquiry(form);
      setReferenceId(response.referenceId ?? '');
      setSubmitted(true);
      setForm(initialForm());
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Ihre Anfrage kann derzeit nicht gesendet werden.');
      resetTurnstile();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={`p-8 ${darkBg ? 'bg-white/5' : 'bg-surface-container-low'}`}>
        <p className={`text-lg font-semibold mb-2 ${darkBg ? 'text-white' : 'text-on-surface'}`}>
          Anfrage erhalten
        </p>
        <p className={`text-sm leading-relaxed mb-3 ${darkBg ? 'text-white/60' : 'text-on-surface-variant'}`}>
          Vielen Dank für Ihr Interesse. Unser B2B-Team wird innerhalb von 24 Geschäftsstunden antworten.
        </p>
        {referenceId ? (
          <p className={`text-xs tracking-[0.2em] uppercase ${darkBg ? 'text-white/45' : 'text-on-surface-variant'}`}>
            Referenz-ID: {referenceId}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        value={form.website ?? ''}
        onChange={(e) => setForm({ ...form, website: e.target.value })}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className={labelClass}>Firmenname</label>
          <input
            type="text"
            required
            placeholder="Acme Pharma GmbH"
            className={inputClass}
            value={form.companyName}
            onChange={(e) => setForm({ ...form, companyName: e.target.value })}
          />
        </div>
        <div>
          <label className={labelClass}>Ansprechpartner</label>
          <input
            type="text"
            required
            placeholder="Dr. Max Mustermann"
            className={inputClass}
            value={form.contactPerson}
            onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Geschäftliche E-Mail</label>
        <input
          type="email"
          required
          placeholder="einkauf@unternehmen.de"
          className={inputClass}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>

      <div>
        <label className={labelClass}>Geschätztes Monatsvolumen</label>
        <select
          required
          className={`${darkBg
            ? 'w-full bg-transparent border-0 border-b border-white/20 pb-3 pt-1 text-white focus:outline-none focus:border-white/60 appearance-none'
            : 'select-minimal'
          } transition-all duration-200`}
          value={form.monthlyVolume}
          onChange={(e) => setForm({ ...form, monthlyVolume: e.target.value })}
        >
          <option value="" disabled>Geschätztes Volumen wählen</option>
          <option value="<10kg">&lt; 10 KG / Monat</option>
          <option value="10-50kg">10 – 50 KG / Monat</option>
          <option value="50-200kg">50 – 200 KG / Monat</option>
          <option value="200-500kg">200 – 500 KG / Monat</option>
          <option value="500kg+">500+ KG / Monat</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Produktanforderungen & Anmerkungen</label>
        <textarea
          rows={4}
          required
          minLength={20}
          maxLength={4000}
          placeholder="Beschreiben Sie Ihre spezifischen Produktanforderungen, benötigte Zertifizierungen, Lieferbedingungen usw."
          className={`${darkBg
            ? 'w-full bg-transparent border-0 border-b border-white/20 pb-3 pt-1 text-white placeholder-white/40 focus:outline-none focus:border-white/60 resize-none'
            : 'textarea-minimal'
          } transition-all duration-200`}
          value={form.requirements}
          onChange={(e) => setForm({ ...form, requirements: e.target.value })}
        />
      </div>

      <div className="space-y-3">
        <div ref={turnstileContainerRef} className="min-h-[65px]" />
        <p className={`text-xs leading-relaxed ${helperTextClass}`}>
          {turnstileSiteKey
            ? isTurnstileReady
              ? 'Cloudflare Turnstile ist aktiv. Schließen Sie die Verifizierung ab, bevor Sie absenden.'
              : 'Cloudflare Turnstile-Verifizierung wird geladen…'
            : 'Turnstile-Seitenschlüssel ist nicht konfiguriert.'}
        </p>
      </div>

      <div className={`flex items-start gap-3 text-xs leading-relaxed ${helperTextClass}`}>
        <ShieldCheck size={14} className="mt-0.5 shrink-0" />
        <p>
          Dieses Formular ist durch Cloudflare Turnstile, serverseitige Validierung, Herkunftsprüfungen,
          Honeypot-Filterung und Ratenbegrenzung gegen Spam und Missbrauch geschützt.
        </p>
      </div>

      {errorMessage ? (
        <div className={`text-sm ${darkBg ? 'text-rose-200' : 'text-rose-700'}`}>
          {errorMessage}
        </div>
      ) : null}

      <Button
        type="submit"
        variant={darkBg ? 'glass' : 'primary'}
        size="lg"
        icon={ArrowRight}
        disabled={isSubmitting || !turnstileSiteKey}
      >
        {isSubmitting ? 'Wird gesendet…' : 'Technische Anfrage absenden'}
      </Button>
    </form>
  );
}
