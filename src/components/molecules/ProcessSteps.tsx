// src/components/molecules/ProcessSteps.tsx
// Numbered editorial process diagram (3–6 steps).

export type ProcessStep = {
  title: string
  desc: string
}

interface ProcessStepsProps {
  steps: ProcessStep[]
  className?: string
}

// Static map so Tailwind JIT picks up classes.
const colsMap: Record<number, string> = {
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
}

export default function ProcessSteps({ steps, className = '' }: ProcessStepsProps) {
  const cols = colsMap[Math.min(Math.max(steps.length, 3), 6)] ?? 'lg:grid-cols-5'
  return (
    <ol
      className={`grid grid-cols-1 sm:grid-cols-2 ${cols} divide-y sm:divide-y-0 sm:divide-x divide-outline-variant/40 border border-outline-variant/40 bg-surface-high ${className}`}
    >
      {steps.map((s, i) => (
        <li key={s.title} className="p-6 lg:p-8">
          <span className="text-[10px] tracking-[0.25em] uppercase text-accent font-semibold">
            {`0${i + 1}`}
          </span>
          <p className="mt-3 font-serif text-lg leading-snug text-on-background">
            {s.title}
          </p>
          <p className="mt-2 text-[13px] text-on-surface-variant leading-relaxed">
            {s.desc}
          </p>
        </li>
      ))}
    </ol>
  )
}
