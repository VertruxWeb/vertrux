'use client'

// src/components/molecules/FrInquiryForm.tsx
// French locale wrapper for the shared InquiryFormCore.

import InquiryFormCore from './InquiryFormCore';
import { inquiryFormStringsFr } from './inquiryFormStrings';

interface FrInquiryFormProps {
  darkBg?: boolean;
}

export default function FrInquiryForm({ darkBg = false }: FrInquiryFormProps) {
  return <InquiryFormCore strings={inquiryFormStringsFr} darkBg={darkBg} />;
}
