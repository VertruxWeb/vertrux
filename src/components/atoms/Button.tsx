'use client'

// src/components/atoms/Button.tsx
// Reusable button atom following the design system rules:
// Primary: deep forest green
// Accent : brass / bronze (B2B high-contrast main CTA)
// Outline: outlined for secondary surfaces
// Glass  : backdrop blur for use on dark/image backgrounds

import type { LucideIcon } from 'lucide-react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'ghost'
  | 'glass'
  | 'outline';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  ariaLabel?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  ariaLabel,
  fullWidth = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold tracking-widest uppercase transition-all duration-200 ease-industrial cursor-pointer select-none';

  const focusRing =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface';

  const sizes: Record<string, string> = {
    sm: 'px-4 py-2 text-[11px]',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-sm',
  };

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-primary text-white rounded-md hover:bg-primary-container hover:translate-x-0.5 active:scale-[0.98]',
    accent:
      'bg-accent text-white rounded-md hover:bg-accent-hover hover:translate-x-0.5 active:scale-[0.98] shadow-[0_1px_0_rgba(0,0,0,0.04)]',
    secondary:
      'bg-surface-container text-on-surface rounded-md hover:bg-surface-container-high active:scale-[0.98]',
    ghost:
      'bg-transparent text-on-surface hover:bg-surface-container rounded-md active:scale-[0.98]',
    glass:
      'backdrop-blur-xl bg-white/10 text-white border border-white/30 rounded-md hover:bg-white/20 active:scale-[0.98]',
    outline:
      'bg-transparent border border-primary text-primary rounded-md hover:bg-primary hover:text-white active:scale-[0.98]',
  };

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      aria-busy={loading || undefined}
      className={`${base} ${focusRing} ${sizes[size]} ${variants[variant]} ${
        isDisabled ? 'opacity-60 cursor-not-allowed' : ''
      } ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {loading ? (
        <Loader2 size={16} className="animate-spin" />
      ) : (
        Icon && iconPosition === 'left' && <Icon size={16} />
      )}
      {children}
      {!loading && Icon && iconPosition === 'right' && <Icon size={16} />}
    </button>
  );
}
