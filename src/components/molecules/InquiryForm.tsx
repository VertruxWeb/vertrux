// src/components/molecules/InquiryForm.tsx
// Reusable B2B inquiry / wholesale form molecule
// Used on multiple pages; minimal bottom-border input style

import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../atoms/Button';

interface FormData {
  companyName: string;
  contactPerson: string;
  email: string;
  monthlyVolume: string;
  requirements: string;
}

interface InquiryFormProps {
  darkBg?: boolean;
}

export default function InquiryForm({ darkBg = false }: InquiryFormProps) {
  const [form, setForm] = useState<FormData>({
    companyName: '',
    contactPerson: '',
    email: '',
    monthlyVolume: '',
    requirements: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const inputClass = darkBg
    ? 'w-full bg-transparent border-0 border-b border-white/20 pb-3 pt-1 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-200'
    : 'input-minimal';

  const labelClass = darkBg
    ? 'block text-xs font-semibold tracking-widest uppercase mb-2 text-white/50'
    : 'block text-xs font-semibold tracking-widest uppercase mb-2 text-on-surface-variant';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, submit to a backend / email API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`p-8 ${darkBg ? 'bg-white/5' : 'bg-surface-container-low'}`}>
        <p className={`text-lg font-semibold mb-2 ${darkBg ? 'text-white' : 'text-on-surface'}`}>
          Inquiry Received
        </p>
        <p className={`text-sm leading-relaxed ${darkBg ? 'text-white/60' : 'text-on-surface-variant'}`}>
          Thank you for your interest. Our B2B team will respond within 24 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className={labelClass}>Company Name</label>
          <input
            type="text"
            required
            placeholder="Acme Pharmaceuticals Ltd."
            className={inputClass}
            value={form.companyName}
            onChange={(e) => setForm({ ...form, companyName: e.target.value })}
          />
        </div>
        <div>
          <label className={labelClass}>Contact Person</label>
          <input
            type="text"
            required
            placeholder="Dr. Jane Smith"
            className={inputClass}
            value={form.contactPerson}
            onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Corporate Email</label>
        <input
          type="email"
          required
          placeholder="procurement@company.com"
          className={inputClass}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>

      <div>
        <label className={labelClass}>Monthly Volume Estimate</label>
        <select
          required
          className={`${darkBg
            ? 'w-full bg-transparent border-0 border-b border-white/20 pb-3 pt-1 text-white focus:outline-none focus:border-white/60 appearance-none'
            : 'select-minimal'
          } transition-all duration-200`}
          value={form.monthlyVolume}
          onChange={(e) => setForm({ ...form, monthlyVolume: e.target.value })}
        >
          <option value="" disabled>Select estimated volume</option>
          <option value="<10kg">&lt; 10 KG / month</option>
          <option value="10-50kg">10 – 50 KG / month</option>
          <option value="50-200kg">50 – 200 KG / month</option>
          <option value="200-500kg">200 – 500 KG / month</option>
          <option value="500kg+">500+ KG / month</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Product Requirements & Notes</label>
        <textarea
          rows={4}
          placeholder="Describe your specific product requirements, certifications needed, delivery terms, etc."
          className={`${darkBg
            ? 'w-full bg-transparent border-0 border-b border-white/20 pb-3 pt-1 text-white placeholder-white/40 focus:outline-none focus:border-white/60 resize-none'
            : 'textarea-minimal'
          } transition-all duration-200`}
          value={form.requirements}
          onChange={(e) => setForm({ ...form, requirements: e.target.value })}
        />
      </div>

      <Button type="submit" variant={darkBg ? 'glass' : 'primary'} size="lg" icon={ArrowRight}>
        Submit Technical Inquiry
      </Button>
    </form>
  );
}
