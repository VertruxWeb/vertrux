// src/components/molecules/TrustBar.tsx
// Horizontal "Trust & Authority" bar with icon chips.

import type { LucideIcon } from 'lucide-react'

export type TrustItem = {
  icon: LucideIcon
  label: string
}

interface TrustBarProps {
  items: TrustItem[]
  /** Variant: light strip (default) or dark for image-overlay sections */
  tone?: 'light' | 'dark'
  className?: string
}

export default function TrustBar({ items, tone = 'light', className = '' }: TrustBarProps) {
  const sectionTone =
    tone === 'dark'
      ? 'border-y border-white/10 bg-surface-ink text-white/80'
      : 'border-y border-outline-variant/30 bg-surface-low text-on-surface-variant'
  const iconTone = tone === 'dark' ? 'text-accent' : 'text-primary'

  return (
    <section
      className={`${sectionTone} ${className}`}
      aria-label="Verified capabilities and credentials"
    >
      <div className="container-wide flex flex-wrap items-center justify-between gap-x-10 gap-y-4 py-5">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.label} className="flex items-center gap-2">
              <Icon size={14} className={iconTone} strokeWidth={1.6} />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase">
                {item.label}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
