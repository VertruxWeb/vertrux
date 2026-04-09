// src/components/atoms/SectionLabel.tsx
// Uppercase tracking label used as section identifiers

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({ children, light = false, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`text-xs font-semibold tracking-widest uppercase mb-4 ${
        light ? 'text-white/60' : 'text-on-surface-variant'
      } ${className}`}
    >
      {children}
    </p>
  );
}
