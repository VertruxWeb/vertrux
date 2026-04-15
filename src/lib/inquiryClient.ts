import type { InquiryPayload } from './inquiry';

export interface InquiryApiResponse {
  ok: boolean;
  message: string;
  referenceId?: string;
  error?: {
    code: string;
    message: string;
  };
}

export async function submitInquiry(payload: InquiryPayload): Promise<InquiryApiResponse> {
  const response = await fetch('/api/inquiry', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const raw = await response.text();
  let data: InquiryApiResponse = { ok: false, message: 'Empty response from inquiry API.' };

  if (raw) {
    try {
      data = JSON.parse(raw) as InquiryApiResponse;
    } catch {
      data = {
        ok: false,
        message: 'Unable to submit inquiry right now. Please try again later.',
      };
    }
  }

  if (!response.ok) {
    throw new Error(data.error?.message ?? data.message ?? 'Unable to submit inquiry.');
  }

  return data;
}
