// src/components/molecules/StatCard.tsx
// Single metric display card - used in product specs and facility stats

interface StatCardProps {
  label: string;
  value: string;
  unit?: string;
  className?: string;
}

export default function StatCard({ label, value, unit, className = '' }: StatCardProps) {
  return (
    <div className={`p-6 bg-surface-container-lowest ${className}`}>
      <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-2">
        {label}
      </p>
      <p className="text-3xl font-bold tracking-tighter text-on-surface leading-tight">
        {value}
        {unit && (
          <span className="text-sm font-normal text-on-surface-variant ml-1">{unit}</span>
        )}
      </p>
    </div>
  );
}
