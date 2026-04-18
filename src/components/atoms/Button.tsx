'use client'

// src/components/atoms/Button.tsx
// Reusable button atom following the design system rules:
// Primary: deep forest green, square-ish corners (rounded-md max)
// Secondary/Ghost: outlined or transparent
// Glass: backdrop blur for use on dark/image backgrounds

import type { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
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
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer';

  const sizes: Record<string, string> = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-sm',
  };

  const variants: Record<string, string> = {
    primary:
      'bg-primary text-white rounded-md hover:bg-primary-container hover:translate-x-0.5 active:scale-[0.98]',
    secondary:
      'bg-surface-container text-on-surface rounded-md hover:bg-surface-container-high active:scale-[0.98]',
    ghost:
      'bg-transparent text-on-surface hover:bg-surface-container rounded-md active:scale-[0.98]',
    glass:
      'backdrop-blur-xl bg-white/10 text-white border border-white/30 rounded-md hover:bg-white/20 active:scale-[0.98]',
    outline:
      'bg-transparent border border-primary text-primary rounded-md hover:bg-primary hover:text-white active:scale-[0.98]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${sizes[size]} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {Icon && iconPosition === 'left' && <Icon size={16} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={16} />}
    </button>
  );
}
