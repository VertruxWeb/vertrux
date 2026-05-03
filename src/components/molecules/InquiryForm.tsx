'use client'

import type { Locale } from '@/i18n/locales';
import InquiryFormCore from './InquiryFormCore';
import {
  inquiryFormStringsEn,
  inquiryFormStringsDe,
  inquiryFormStringsFr,
  inquiryFormStringsEs,
  inquiryFormStringsIt,
  inquiryFormStringsPt,
  inquiryFormStringsJa,
  inquiryFormStringsFi,
} from './inquiryFormStrings';
import type { InquiryFormStrings } from './InquiryFormCore';

const stringsMap: Record<Locale, InquiryFormStrings> = {
  en: inquiryFormStringsEn,
  de: inquiryFormStringsDe,
  fr: inquiryFormStringsFr,
  es: inquiryFormStringsEs,
  it: inquiryFormStringsIt,
  pt: inquiryFormStringsPt,
  ja: inquiryFormStringsJa,
  fi: inquiryFormStringsFi,
};

interface InquiryFormProps {
  locale?: Locale;
  darkBg?: boolean;
}

export default function InquiryForm({ locale = 'en', darkBg = false }: InquiryFormProps) {
  return <InquiryFormCore strings={stringsMap[locale]} darkBg={darkBg} />;
}
