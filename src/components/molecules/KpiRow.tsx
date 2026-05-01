// src/components/molecules/KpiRow.tsx
// Strong B2B numerical signal row.

export type KpiItem = {
  value: string
  label: string
  sub?: string
}

interface KpiRowProps {
  items: KpiItem[]
  tone?: 'light' | 'dark'
  className?: string
}

export default function KpiRow({ items, tone = 'light', className = '' }: KpiRowProps) {
  const valueTone = tone === 'dark' ? 'text-white' : 'text-on-background'
  const labelTone = tone === 'dark' ? 'text-white/60' : 'text-on-surface-variant'
  const subTone = tone === 'dark' ? 'text-white/45' : 'text-on-surface-muted'
  const divider = tone === 'dark' ? 'divide-white/10' : 'divide-outline-variant/40'

  return (
    <dl
      className={`grid grid-cols-2 md:grid-cols-4 ${divider} divide-x divide-y md:divide-y-0 ${className}`}
    >
      {items.map((item) => (
        <div key={item.label} className="px-5 py-6 md:px-6 md:py-4">
          <dt
            className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${labelTone}`}
          >
            {item.label}
          </dt>
          <dd
            className={`mt-1 font-serif font-semibold text-2xl md:text-3xl tracking-tighter ${valueTone}`}
          >
            {item.value}
          </dd>
          {item.sub ? (
            <p className={`mt-1 text-[11px] tracking-wide ${subTone}`}>{item.sub}</p>
          ) : null}
        </div>
      ))}
    </dl>
  )
}
