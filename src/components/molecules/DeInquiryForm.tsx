'use client'

// src/components/molecules/DeInquiryForm.tsx
// German locale wrapper for the shared InquiryFormCore.

import InquiryFormCore from './InquiryFormCore';
import { inquiryFormStringsDe } from './inquiryFormStrings';

interface DeInquiryFormProps {
  darkBg?: boolean;
}

export default function DeInquiryForm({ darkBg = false }: DeInquiryFormProps) {
  return <InquiryFormCore strings={inquiryFormStringsDe} darkBg={darkBg} />;
}
