'use client'

// src/components/molecules/InquiryFormCore.tsx
// Shared multi-step inquiry form. Locale wrappers pass translation strings.
//
// Step 1: Company       (companyName, contactPerson, corporate email)
// Step 2: Requirements  (monthlyVolume, requirements)
// Step 3: Verify        (Turnstile + submit)

import { useEffect, useMemo, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight, ArrowLeft, ShieldCheck, CheckCircle2, Clock, FileText, Phone } from 'lucide-react';
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

export interface InquiryFormStrings {
  // Steps
  stepCompany: string;
  stepRequirements: string;
  stepVerify: string;
  // Field labels
  companyLabel: string;
  contactLabel: string;
  emailLabel: string;
  volumeLabel: string;
  requirementsLabel: string;
  // Placeholders
  companyPlaceholder: string;
  contactPlaceholder: string;
  emailPlaceholder: string;
  volumePlaceholder: string;
  requirementsPlaceholder: string;
  // Hints
  companyHint: string;
  contactHint: string;
  emailHint: string;
  volumeHint: string;
  requirementsHint: string;
  // Volume options
  volumeOptionUnder10: string;
  volumeOption10to50: string;
  volumeOption50to200: string;
  volumeOption200to500: string;
  volumeOption500plus: string;
  // Buttons
  next: string;
  back: string;
  submit: string;
  submitting: string;
  // Required marker / required field error
  requiredMark: string;
  requiredFieldError: string;
  invalidEmailError: string;
  // Turnstile messages
  turnstileLoading: string;
  turnstileReady: string;
  turnstileMissingKey: string;
  turnstileFailed: string;
  turnstileNotConfigured: string;
  turnstileVerificationRequired: string;
  // Generic submit error
  genericSubmitError: string;
  // Security disclaimer
  securityDisclaimer: string;
  // Success page
  successTitle: string;
  successBody: string;
  successReferenceLabel: string;
  successNextHeading: string;
  successStep1: string;
  successStep2: string;
  successStep3: string;
}

interface InquiryFormCoreProps {
  strings: InquiryFormStrings;
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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function InquiryFormCore({ strings, darkBg = false }: InquiryFormCoreProps) {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? '';
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState<InquiryPayload>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [referenceId, setReferenceId] = useState('');
  const [isTurnstileReady, setIsTurnstileReady] = useState(false);
  const [stepError, setStepError] = useState('');

  const inputBase = darkBg
    ? 'w-full bg-transparent border-0 border-b border-white/25 pb-3 pt-1 text-white placeholder-white/40 focus:outline-none focus:border-accent focus:border-b-2 transition-all duration-200'
    : 'input-minimal';

  const selectBase = darkBg
    ? 'w-full bg-transparent border-0 border-b border-white/25 pb-3 pt-1 text-white focus:outline-none focus:border-accent focus:border-b-2 appearance-none transition-all duration-200'
    : 'select-minimal';

  const textareaBase = darkBg
    ? 'w-full bg-transparent border-0 border-b border-white/25 pb-3 pt-1 text-white placeholder-white/40 focus:outline-none focus:border-accent focus:border-b-2 resize-none transition-all duration-200'
    : 'textarea-minimal';

  const labelClass = darkBg
    ? 'block text-xs font-semibold tracking-wider mb-2 text-white/85'
    : 'block text-xs font-semibold tracking-wider mb-2 text-on-surface';

  const hintClass = darkBg ? 'text-[11px] text-white/55 mt-2 leading-relaxed' : 'text-[11px] text-on-surface-variant mt-2 leading-relaxed';

  const helperTextClass = useMemo(
    () => (darkBg ? 'text-white/55' : 'text-on-surface-variant'),
    [darkBg],
  );

  const resetTurnstile = () => {
    setForm((currentForm) => ({
      ...currentForm,
      turnstileToken: '',
      formStartedAt: new Date().toISOString(),
    }));
    if (window.turnstile && turnstileWidgetIdRef.current) {
      window.turnstile.reset(turnstileWidgetIdRef.current);
    }
  };

  // Initialise Turnstile only when on Step 3
  useEffect(() => {
    if (step !== 3) return;
    if (!turnstileSiteKey || !turnstileContainerRef.current) return;
    if (turnstileWidgetIdRef.current) return;

    let isCancelled = false;

    const renderWidget = () => {
      if (
        isCancelled
        || !window.turnstile
        || !turnstileContainerRef.current
        || turnstileWidgetIdRef.current
      ) return;

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
          setErrorMessage(strings.turnstileFailed);
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
      return () => { isCancelled = true; };
    }

    const script = document.createElement('script');
    script.id = 'cf-turnstile-script';
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.addEventListener('load', renderWidget, { once: true });
    document.head.appendChild(script);

    return () => { isCancelled = true; };
  }, [step, darkBg, turnstileSiteKey, strings.turnstileFailed]);

  const validateStep = (current: 1 | 2): boolean => {
    setStepError('');
    if (current === 1) {
      if (!form.companyName.trim() || !form.contactPerson.trim() || !form.email.trim()) {
        setStepError(strings.requiredFieldError);
        return false;
      }
      if (!EMAIL_RE.test(form.email)) {
        setStepError(strings.invalidEmailError);
        return false;
      }
    }
    if (current === 2) {
      if (!form.monthlyVolume || !form.requirements.trim() || form.requirements.trim().length < 20) {
        setStepError(strings.requiredFieldError);
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (step === 1 && validateStep(1)) setStep(2);
    else if (step === 2 && validateStep(2)) setStep(3);
  };

  const handleBack = () => {
    setStepError('');
    setErrorMessage('');
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!turnstileSiteKey) {
      setErrorMessage(strings.turnstileMissingKey);
      return;
    }
    if (!form.turnstileToken) {
      setErrorMessage(strings.turnstileVerificationRequired);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await submitInquiry(form);
      setReferenceId(response.referenceId ?? '');
      setSubmitted(true);
      setForm(initialForm());
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : strings.genericSubmitError);
      resetTurnstile();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className={`p-8 md:p-10 rounded-md border-l-4 border-accent ${
          darkBg ? 'bg-white/5' : 'bg-surface-high shadow-card'
        }`}
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-3 mb-3">
          <CheckCircle2 size={22} className="text-accent" strokeWidth={1.8} />
          <p className={`font-serif text-xl font-medium ${darkBg ? 'text-white' : 'text-on-background'}`}>
            {strings.successTitle}
          </p>
        </div>
        <p className={`text-[15px] leading-relaxed mb-6 ${darkBg ? 'text-white/70' : 'text-on-surface-variant'}`}>
          {strings.successBody}
        </p>

        {referenceId ? (
          <div className={`mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-sm ${
            darkBg ? 'bg-white/10' : 'bg-accent-soft'
          }`}>
            <span className={`text-[10px] tracking-[0.25em] uppercase font-semibold ${
              darkBg ? 'text-white/60' : 'text-accent-hover'
            }`}>
              {strings.successReferenceLabel}
            </span>
            <span className={`text-[12px] font-semibold tracking-wider ${
              darkBg ? 'text-white/95' : 'text-accent-hover'
            }`}>
              {referenceId}
            </span>
          </div>
        ) : null}

        <p className={`text-xs font-semibold tracking-[0.25em] uppercase mb-4 ${
          darkBg ? 'text-white/55' : 'text-on-surface-variant'
        }`}>
          {strings.successNextHeading}
        </p>
        <ol className="space-y-3">
          {[
            { icon: Clock, text: strings.successStep1 },
            { icon: Phone, text: strings.successStep2 },
            { icon: FileText, text: strings.successStep3 },
          ].map((s, i) => (
            <li key={i} className={`flex items-start gap-3 text-[14px] leading-relaxed ${
              darkBg ? 'text-white/85' : 'text-on-surface'
            }`}>
              <span className={`flex-shrink-0 mt-0.5 w-6 h-6 inline-flex items-center justify-center rounded-full ${
                darkBg ? 'bg-white/10' : 'bg-accent-soft'
              }`}>
                <s.icon size={12} className={darkBg ? 'text-white' : 'text-accent'} strokeWidth={2} />
              </span>
              <span>{s.text}</span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  const stepItems: { id: 1 | 2 | 3; label: string }[] = [
    { id: 1, label: strings.stepCompany },
    { id: 2, label: strings.stepRequirements },
    { id: 3, label: strings.stepVerify },
  ];

  return (
    <div
      className={`${
        darkBg ? '' : 'bg-surface-high shadow-card border border-outline-variant/30'
      } rounded-md ${darkBg ? '' : 'p-6 md:p-8'}`}
    >
      {/* Step indicator */}
      <ol className={`flex items-center gap-2 mb-8 text-[10px] font-semibold tracking-[0.18em] uppercase ${
        darkBg ? 'text-white/70' : 'text-on-surface-variant'
      }`}>
        {stepItems.map((s, i) => {
          const isActive = step === s.id;
          const isDone = step > s.id;
          return (
            <li key={s.id} className="flex items-center gap-2">
              <span
                className={`inline-flex items-center justify-center w-6 h-6 rounded-full transition-colors duration-200 ${
                  isActive
                    ? 'bg-accent text-white'
                    : isDone
                      ? darkBg
                        ? 'bg-white/30 text-white'
                        : 'bg-primary text-white'
                      : darkBg
                        ? 'bg-white/10 text-white/60'
                        : 'bg-surface-low text-on-surface-variant'
                }`}
                aria-current={isActive ? 'step' : undefined}
              >
                {isDone ? <CheckCircle2 size={12} strokeWidth={2.4} /> : s.id}
              </span>
              <span className={isActive ? (darkBg ? 'text-white' : 'text-on-background') : ''}>
                {s.label}
              </span>
              {i < stepItems.length - 1 && (
                <span aria-hidden className={`mx-2 h-px w-6 ${darkBg ? 'bg-white/15' : 'bg-outline-variant/60'}`} />
              )}
            </li>
          );
        })}
      </ol>

      <form onSubmit={handleSubmit} className="space-y-7" noValidate>
        {/* Honeypot */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
          value={form.website ?? ''}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
        />

        {step === 1 && (
          <div className="space-y-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div>
                <label htmlFor="inquiry-company" className={labelClass}>
                  {strings.companyLabel} <span className="text-accent">{strings.requiredMark}</span>
                </label>
                <input
                  id="inquiry-company"
                  type="text"
                  required
                  autoComplete="organization"
                  placeholder={strings.companyPlaceholder}
                  className={inputBase}
                  value={form.companyName}
                  onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                  aria-describedby="inquiry-company-hint"
                />
                <p id="inquiry-company-hint" className={hintClass}>{strings.companyHint}</p>
              </div>
              <div>
                <label htmlFor="inquiry-contact" className={labelClass}>
                  {strings.contactLabel} <span className="text-accent">{strings.requiredMark}</span>
                </label>
                <input
                  id="inquiry-contact"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder={strings.contactPlaceholder}
                  className={inputBase}
                  value={form.contactPerson}
                  onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                  aria-describedby="inquiry-contact-hint"
                />
                <p id="inquiry-contact-hint" className={hintClass}>{strings.contactHint}</p>
              </div>
            </div>

            <div>
              <label htmlFor="inquiry-email" className={labelClass}>
                {strings.emailLabel} <span className="text-accent">{strings.requiredMark}</span>
              </label>
              <input
                id="inquiry-email"
                type="email"
                required
                autoComplete="email"
                placeholder={strings.emailPlaceholder}
                className={inputBase}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                aria-describedby="inquiry-email-hint"
              />
              <p id="inquiry-email-hint" className={hintClass}>{strings.emailHint}</p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-7">
            <div>
              <label htmlFor="inquiry-volume" className={labelClass}>
                {strings.volumeLabel} <span className="text-accent">{strings.requiredMark}</span>
              </label>
              <select
                id="inquiry-volume"
                required
                className={selectBase}
                value={form.monthlyVolume}
                onChange={(e) => setForm({ ...form, monthlyVolume: e.target.value })}
                aria-describedby="inquiry-volume-hint"
              >
                <option value="" disabled>{strings.volumePlaceholder}</option>
                <option value="<10kg">{strings.volumeOptionUnder10}</option>
                <option value="10-50kg">{strings.volumeOption10to50}</option>
                <option value="50-200kg">{strings.volumeOption50to200}</option>
                <option value="200-500kg">{strings.volumeOption200to500}</option>
                <option value="500kg+">{strings.volumeOption500plus}</option>
              </select>
              <p id="inquiry-volume-hint" className={hintClass}>{strings.volumeHint}</p>
            </div>

            <div>
              <label htmlFor="inquiry-requirements" className={labelClass}>
                {strings.requirementsLabel} <span className="text-accent">{strings.requiredMark}</span>
              </label>
              <textarea
                id="inquiry-requirements"
                rows={5}
                required
                minLength={20}
                maxLength={4000}
                placeholder={strings.requirementsPlaceholder}
                className={textareaBase}
                value={form.requirements}
                onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                aria-describedby="inquiry-requirements-hint"
              />
              <p id="inquiry-requirements-hint" className={hintClass}>{strings.requirementsHint}</p>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="space-y-3">
              <div ref={turnstileContainerRef} className="min-h-[65px]" />
              <p className={`text-xs leading-relaxed ${helperTextClass}`}>
                {turnstileSiteKey
                  ? isTurnstileReady
                    ? strings.turnstileReady
                    : strings.turnstileLoading
                  : strings.turnstileNotConfigured}
              </p>
            </div>

            <div className={`flex items-start gap-3 text-xs leading-relaxed ${helperTextClass}`}>
              <ShieldCheck size={14} className="mt-0.5 shrink-0" />
              <p>{strings.securityDisclaimer}</p>
            </div>
          </div>
        )}

        {(stepError || errorMessage) ? (
          <div
            className={`text-sm rounded-sm px-3 py-2 ${
              darkBg ? 'bg-rose-500/10 text-rose-100' : 'bg-rose-50 text-rose-700 border border-rose-200'
            }`}
            role="alert"
          >
            {errorMessage || stepError}
          </div>
        ) : null}

        <div className={`flex flex-wrap items-center gap-3 pt-2 ${step > 1 ? 'justify-between' : 'justify-end'}`}>
          {step > 1 && (
            <Button
              type="button"
              variant={darkBg ? 'glass' : 'outline'}
              size="md"
              icon={ArrowLeft}
              iconPosition="left"
              onClick={handleBack}
            >
              {strings.back}
            </Button>
          )}

          {step < 3 ? (
            <Button
              type="button"
              variant="accent"
              size="lg"
              icon={ArrowRight}
              onClick={handleNext}
            >
              {strings.next}
            </Button>
          ) : (
            <Button
              type="submit"
              variant="accent"
              size="lg"
              icon={ArrowRight}
              loading={isSubmitting}
              disabled={!turnstileSiteKey}
            >
              {isSubmitting ? strings.submitting : strings.submit}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
