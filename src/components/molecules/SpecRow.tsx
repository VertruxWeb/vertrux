// src/components/molecules/SpecRow.tsx
// Single row in a technical specification table

interface SpecRowProps {
  label: string;
  value: string;
  isLast?: boolean;
}

export default function SpecRow({ label, value, isLast = false }: SpecRowProps) {
  return (
    <div
      className={`flex justify-between items-center py-3 ${
        !isLast ? 'border-b border-outline-variant/30' : ''
      }`}
    >
      <span className="text-xs font-semibold tracking-wider uppercase text-on-surface-variant">
        {label}
      </span>
      <span className="text-sm font-medium text-on-surface text-right">
        {value}
      </span>
    </div>
  );
}
