import type {
  HandleInquirySubmissionArgs,
  InquiryPayload,
  SubmissionResponse,
  ValidationOptions,
  ValidationResult,
} from '../../src/lib/inquiry';

export function isOriginAllowed(origin: string | null, allowedOrigins: string[]): boolean;
export function validateInquiryPayload(payload: InquiryPayload, options?: ValidationOptions): ValidationResult;
export function createMemoryRateLimiter(): HandleInquirySubmissionArgs['limiter'];
export function handleInquirySubmission(args: HandleInquirySubmissionArgs): Promise<SubmissionResponse>;
