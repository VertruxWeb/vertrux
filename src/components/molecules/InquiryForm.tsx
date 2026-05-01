'use client'

// src/components/molecules/InquiryForm.tsx
// English locale wrapper for the shared InquiryFormCore.

import InquiryFormCore from './InquiryFormCore';
import { inquiryFormStringsEn } from './inquiryFormStrings';

interface InquiryFormProps {
  darkBg?: boolean;
}

export default function InquiryForm({ darkBg = false }: InquiryFormProps) {
  return <InquiryFormCore strings={inquiryFormStringsEn} darkBg={darkBg} />;
}
