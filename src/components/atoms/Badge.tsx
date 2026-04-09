// src/components/atoms/Badge.tsx
// Small label chip used throughout the design for section identifiers

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'glass';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const base = 'inline-flex items-center px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full';

  const variants: Record<string, string> = {
    default: 'bg-surface-container-highest text-on-surface-variant',
    primary: 'bg-primary text-white',
    glass: 'backdrop-blur-xl bg-white/10 text-white border border-white/20',
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
