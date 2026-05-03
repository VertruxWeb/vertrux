'use client'

import { useEffect, useMemo, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Download, FileText, ShieldCheck, X } from 'lucide-react';
import Button from '@/components/atoms/Button';
import { submitDocumentRequest } from '@/lib/documentRequestClient';
import type {
  DocumentDownloadLink,
  DocumentRequestDocumentType,
  DocumentRequestPayload,
} from '@/lib/documentRequest';

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

interface DocumentRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDocumentType?: DocumentRequestDocumentType;
  sourcePage: string;
  productInterest?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const documentTypeLabels: Record<DocumentRequestDocumentType, string> = {
  COA: 'COA',
  SDS: 'SDS',
  both: 'COA and SDS',
};

const initialForm = (
  defaultDocumentType: DocumentRequestDocumentType,
  sourcePage: string,
  productInterest: string,
): DocumentRequestPayload => ({
  name: '',
  email: '',
  documentType: defaultDocumentType,
  productInterest,
  sourcePage,
  website: '',
  formStartedAt: new Date().toISOString(),
  turnstileToken: '',
});

export default function DocumentRequestModal({
  isOpen,
  onClose,
  defaultDocumentType = 'both',
  sourcePage,
  productInterest = 'CBD Isolate',
}: DocumentRequestModalProps) {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? '';
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);
  const [form, setForm] = useState<DocumentRequestPayload>(() => (
    initialForm(defaultDocumentType, sourcePage, productInterest)
  ));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldError, setFieldError] = useState('');
  const [isTurnstileReady, setIsTurnstileReady] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [downloadLinks, setDownloadLinks] = useState<DocumentDownloadLink[]>([]);

  const hasAccess = downloadLinks.length > 0;
  const documentLabel = useMemo(
    () => documentTypeLabels[form.documentType] ?? documentTypeLabels.both,
    [form.documentType],
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

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setForm(initialForm(defaultDocumentType, sourcePage, productInterest));
    setErrorMessage('');
    setFieldError('');
    setReferenceId('');
    setDownloadLinks([]);
    setIsTurnstileReady(false);
    turnstileWidgetIdRef.current = null;
  }, [defaultDocumentType, isOpen, productInterest, sourcePage]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || hasAccess) return;
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
        theme: 'light',
        callback: (token) => {
          setForm((currentForm) => ({ ...currentForm, turnstileToken: token }));
          setErrorMessage('');
        },
        'expired-callback': () => {
          setForm((currentForm) => ({ ...currentForm, turnstileToken: '' }));
        },
        'error-callback': () => {
          setForm((currentForm) => ({ ...currentForm, turnstileToken: '' }));
          setErrorMessage('Human verification failed. Please try again.');
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
  }, [hasAccess, isOpen, turnstileSiteKey]);

  const validate = (): boolean => {
    setFieldError('');
    if (!form.name.trim() || !form.email.trim()) {
      setFieldError('Please add your name and email.');
      return false;
    }

    if (!EMAIL_RE.test(form.email)) {
      setFieldError('Please enter a valid email address.');
      return false;
    }

    if (!turnstileSiteKey) {
      setFieldError('Human verification is not configured.');
      return false;
    }

    if (!form.turnstileToken) {
      setFieldError('Please complete the human verification.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setErrorMessage('');

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await submitDocumentRequest(form);
      setReferenceId(response.referenceId ?? '');
      setDownloadLinks(response.downloadLinks ?? []);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unable to request documents right now.');
      resetTurnstile();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="document-request-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-surface-ink/70 backdrop-blur-sm"
        aria-label="Close document request"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-md bg-surface-high shadow-2xl border border-outline-variant/40">
        <div className="p-6 md:p-8">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md text-on-surface-variant hover:bg-surface-container transition-colors"
            aria-label="Close document request"
          >
            <X size={18} />
          </button>

          <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent-soft text-accent mb-5">
            <FileText size={18} />
          </div>

          <p className="text-xs font-semibold tracking-[0.28em] uppercase text-accent mb-3">
            Quality documents
          </p>
          <h2
            id="document-request-title"
            className="font-serif text-3xl md:text-4xl font-medium text-on-background tracking-tight leading-[1.05] mb-3"
          >
            Get {documentLabel}
          </h2>
          <p className="text-sm leading-relaxed text-on-surface-variant mb-6">
            Leave your name and email. The requested document access will appear after submission.
          </p>

          {hasAccess ? (
            <div role="status" aria-live="polite">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent-soft text-accent">
                  <CheckCircle2 size={18} />
                </span>
                <p className="font-serif text-2xl font-medium text-on-background">
                  Document access is ready
                </p>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-5">
                Your request was sent to the Vetrux team. Use the links below for the reference documents.
              </p>

              {referenceId ? (
                <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-accent-soft">
                  <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-accent-hover">
                    Ref
                  </span>
                  <span className="text-[12px] font-semibold tracking-wider text-accent-hover">
                    {referenceId}
                  </span>
                </div>
              ) : null}

              <div className="space-y-3 mb-6">
                {downloadLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 rounded-md border border-outline-variant/40 bg-surface-container-lowest p-4 hover:border-accent hover:bg-surface-container transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  >
                    <span className="text-sm font-semibold text-on-surface">{link.title}</span>
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent text-white">
                      <Download size={15} />
                    </span>
                  </a>
                ))}
              </div>

              <Button type="button" variant="outline" size="md" onClick={onClose}>
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                value={form.website ?? ''}
                onChange={(event) => setForm({ ...form, website: event.target.value })}
              />

              <div>
                <label htmlFor="document-request-name" className="block text-xs font-semibold tracking-wider mb-2 text-on-surface">
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  id="document-request-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="input-minimal"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                />
              </div>

              <div>
                <label htmlFor="document-request-email" className="block text-xs font-semibold tracking-wider mb-2 text-on-surface">
                  Business email <span className="text-accent">*</span>
                </label>
                <input
                  id="document-request-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="name@company.com"
                  className="input-minimal"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                />
              </div>

              <div className="space-y-2">
                <div ref={turnstileContainerRef} className="min-h-[65px]" />
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {turnstileSiteKey
                    ? isTurnstileReady
                      ? 'Human verification is ready.'
                      : 'Loading human verification...'
                    : 'Human verification is not configured.'}
                </p>
              </div>

              {(fieldError || errorMessage) ? (
                <div className="text-sm rounded-sm px-3 py-2 bg-rose-50 text-rose-700 border border-rose-200" role="alert">
                  {errorMessage || fieldError}
                </div>
              ) : null}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-start gap-2 text-[11px] leading-relaxed text-on-surface-variant max-w-xs">
                  <ShieldCheck size={13} className="mt-0.5 shrink-0" />
                  <span>We will use this to send document context and follow up if needed.</span>
                </div>
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  icon={ArrowRight}
                  loading={isSubmitting}
                  disabled={!turnstileSiteKey}
                >
                  {isSubmitting ? 'Sending' : 'Get Documents'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
