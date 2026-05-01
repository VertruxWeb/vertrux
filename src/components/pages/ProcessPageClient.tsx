'use client'

// src/components/pages/ProcessPageClient.tsx
// "From Seed to Isolate" — six-phase process page client component.
// Locale-aware (en / de / fr) and reuses the Home hero pattern.

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/atoms/Button'
import KpiRow from '@/components/molecules/KpiRow'
import { useReveal } from '@/hooks/useReveal'
import {
  processPhases,
  processHeroStrings,
  type Locale,
  type ProcessPhase,
} from '@/lib/process'

// ─────────────────────────────────────────────────────────────────────────────
//  Final-CTA banner copy (kept here — small enough not to warrant a new file)
// ─────────────────────────────────────────────────────────────────────────────

const finalCtaStrings: Record<Locale, { title: string; subtitle: string }> = {
  en: {
    title: 'Ready to trace your next batch?',
    subtitle: "Tell us about your project — we'll respond within 24 hours.",
  },
  de: {
    title: 'Bereit, Ihre nächste Charge nachzuverfolgen?',
    subtitle: 'Erzählen Sie uns von Ihrem Projekt — wir antworten innerhalb von 24 Stunden.',
  },
  fr: {
    title: 'Prêt à tracer votre prochain lot ?',
    subtitle: 'Parlez-nous de votre projet — nous répondons sous 24 heures.',
  },
}

interface ProcessPageClientProps {
  locale: Locale
}

export default function ProcessPageClient({ locale }: ProcessPageClientProps) {
  const heroRef = useRef<HTMLDivElement>(null)

  // Hero reveal — the "reveal-card" elements fade in on intersection.
  useReveal(heroRef, { y: 40, stagger: 0.1, start: 'top 85%' })

  const langPrefix = locale === 'en' ? '' : `/${locale}`
  const hero = processHeroStrings[locale]
  const finalCta = finalCtaStrings[locale]

  return (
    <div className="bg-surface">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[78vh] flex items-center overflow-hidden bg-surface-ink"
      >
        <Image
          src="/images/hero/facility-hero.webp"
          alt="VETRUX Yunnan cultivation and extraction facility"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-ink/40 via-surface-ink/75 to-surface-ink" />

        <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12 w-full py-24">
          <div className="max-w-4xl">
            <p className="reveal-card text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-6">
              {hero.eyebrow}
            </p>

            <h1 className="reveal-card font-serif text-[clamp(2.6rem,6.5vw,5.5rem)] font-medium tracking-tight leading-[0.96] mb-2 text-white">
              {hero.titleLine1}
            </h1>
            <h1 className="reveal-card font-serif text-[clamp(2.6rem,6.5vw,5.5rem)] font-medium tracking-tight leading-[0.96] mb-8 italic">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-stone-100 to-stone-300">
                {hero.titleLine2}
              </span>
            </h1>

            <p className="reveal-card text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mb-10">
              {hero.subtitle}
            </p>

            <div className="reveal-card mb-12">
              <KpiRow
                tone="dark"
                items={hero.kpis.map((k) => ({ value: k.value, label: k.label }))}
              />
            </div>

            <div className="reveal-card">
              <Link href={`${langPrefix}/inquiry`}>
                <Button variant="accent" size="lg" icon={ArrowRight}>
                  {hero.ctaLabel}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY PROCESS DIAGRAM ────────────────────────────────────────── */}
      <nav
        aria-label="Process phases"
        className="sticky top-16 z-40 bg-surface border-b border-outline-variant/30 py-3 backdrop-blur-sm"
      >
        <div className="max-w-container mx-auto px-6 lg:px-12 flex items-center justify-center gap-6 md:gap-8 overflow-x-auto">
          {processPhases.map((phase) => {
            const shortTitle = phase.content[locale].title.split(' ').slice(0, 2).join(' ')
            return (
              <a
                key={phase.id}
                href={`#phase-${phase.id}`}
                className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase whitespace-nowrap text-on-surface-variant hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              >
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold bg-surface-container text-on-surface-variant">
                  {phase.id}
                </span>
                {shortTitle}
              </a>
            )
          })}
        </div>
      </nav>

      {/* ── PHASE BLOCKS ──────────────────────────────────────────────────── */}
      {processPhases.map((phase, index) => (
        <PhaseSection
          key={phase.id}
          phase={phase}
          locale={locale}
          isOdd={index % 2 === 1}
          langPrefix={langPrefix}
        />
      ))}

      {/* ── FINAL CTA BANNER ──────────────────────────────────────────────── */}
      <section className="py-20 bg-primary border-l-4 border-accent">
        <div className="max-w-container mx-auto px-6 lg:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif font-medium tracking-tight text-3xl md:text-4xl text-white leading-tight mb-3">
              {finalCta.title}
            </h2>
            <p className="text-[15px] md:text-base text-white/75 leading-relaxed">
              {finalCta.subtitle}
            </p>
          </div>
          <Link href={`${langPrefix}/inquiry`} className="flex-shrink-0">
            <Button variant="accent" size="lg" icon={ArrowRight}>
              {hero.ctaLabel}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  Phase Section
// ─────────────────────────────────────────────────────────────────────────────

interface PhaseSectionProps {
  phase: ProcessPhase
  locale: Locale
  isOdd: boolean
  langPrefix: string
}

function PhaseSection({ phase, locale, isOdd, langPrefix }: PhaseSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  useReveal(sectionRef, { y: 40, stagger: 0.1, start: 'top 85%' })

  const content = phase.content[locale]
  const badges = phase.badges?.[locale]
  const timelapse = phase.timelapse?.[locale]
  const bg = isOdd ? 'bg-surface-container-low' : 'bg-surface'

  return (
    <section
      ref={sectionRef}
      id={`phase-${phase.id}`}
      className={`scroll-mt-32 py-24 md:py-28 ${bg}`}
    >
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* ── Left column: copy ─────────────────────────────────────────── */}
          <div className="lg:col-span-5 reveal-card">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-4">
              {content.eyebrow}
            </p>

            <h2 className="font-serif font-medium tracking-tight text-3xl md:text-4xl text-on-background leading-[1.1] mb-6">
              {content.title}
            </h2>

            <p className="text-[15px] text-on-surface-variant leading-relaxed mb-8">
              {content.description}
            </p>

            {badges && badges.length > 0 ? (
              <ul className="flex flex-wrap gap-2 mb-8">
                {badges.map((badge) => (
                  <li
                    key={badge}
                    className="px-2.5 py-1 bg-accent-soft text-accent text-[11px] font-semibold tracking-wider uppercase rounded-sm"
                  >
                    {badge}
                  </li>
                ))}
              </ul>
            ) : null}

            <Link
              href={`${langPrefix}${content.deepDiveHref}`}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              {content.deepDiveLabel}
              <ArrowRight size={14} strokeWidth={1.8} />
            </Link>
          </div>

          {/* ── Right column: image grid ─────────────────────────────────── */}
          <div className="lg:col-span-7 reveal-card">
            <PhaseImageGrid images={phase.images} title={content.title} />
          </div>
        </div>

        {/* ── Growth Timelapse Strip (Phase 03 only) ─────────────────────── */}
        {timelapse && timelapse.length > 0 ? (
          <div className="reveal-card mt-16">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-on-surface-variant mb-6">
              {locale === 'de'
                ? 'Wachstums-Zeitraffer'
                : locale === 'fr'
                  ? 'Chronologie de croissance'
                  : 'Growth Timelapse'}
            </p>
            <div className="overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory flex gap-4">
              {timelapse.map((step) => (
                <div
                  key={step.day + step.image}
                  className="snap-center flex-shrink-0 w-40 md:w-48 group"
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden mb-3">
                    <Image
                      src={step.image}
                      alt={step.label}
                      fill
                      sizes="200px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <span className="inline-flex px-2 py-0.5 bg-accent text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm mb-1">
                    {step.day}
                  </span>
                  <p className="text-xs text-on-surface-variant mt-1">{step.label}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  Phase Image Grid
//  Adapts to the number of images: 2 → side-by-side / stacked,
//  3 → primary + 2 stacked, 4+ → 2-column responsive grid.
// ─────────────────────────────────────────────────────────────────────────────

interface PhaseImageGridProps {
  images: string[]
  title: string
}

function PhaseImageGrid({ images, title }: PhaseImageGridProps) {
  const count = images.length

  if (count === 2) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {images.map((src, i) => (
          <div
            key={src}
            className="relative aspect-[4/5] overflow-hidden group"
          >
            <Image
              src={src}
              alt={`${title} — ${i + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    )
  }

  if (count === 3) {
    return (
      <div className="grid grid-cols-2 gap-3">
        <div className="relative aspect-[3/4] row-span-2 overflow-hidden group">
          <Image
            src={images[0]}
            alt={`${title} — 1`}
            fill
            sizes="(max-width: 1024px) 50vw, 30vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden group">
          <Image
            src={images[1]}
            alt={`${title} — 2`}
            fill
            sizes="(max-width: 1024px) 50vw, 30vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden group">
          <Image
            src={images[2]}
            alt={`${title} — 3`}
            fill
            sizes="(max-width: 1024px) 50vw, 30vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    )
  }

  // 4+ images — responsive 2-column grid
  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((src, i) => (
        <div
          key={src}
          className="relative aspect-[4/5] overflow-hidden group"
        >
          <Image
            src={src}
            alt={`${title} — ${i + 1}`}
            fill
            sizes="(max-width: 1024px) 50vw, 30vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      ))}
    </div>
  )
}
