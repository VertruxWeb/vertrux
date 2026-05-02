'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/atoms/Button'
import { useReveal } from '@/hooks/useReveal'
import {
  processPhases,
  processHeroStrings,
  type Locale,
  type ProcessPhase,
  type ProcessPhaseContent,
} from '@/lib/process'

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
  useReveal(heroRef, { y: 40, stagger: 0.1, start: 'top 85%' })

  const langPrefix = locale === 'en' ? '' : `/${locale}`
  const hero = processHeroStrings[locale]
  const finalCta = finalCtaStrings[locale]

  return (
    <div className="bg-surface">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <header
        ref={heroRef}
        className="pt-32 pb-16 md:pt-40 md:pb-20 max-w-container mx-auto px-6 lg:px-12 text-center"
      >
        <p className="reveal-card text-[10px] font-semibold tracking-[0.4em] uppercase text-accent mb-4">
          {hero.eyebrow}
        </p>
        <h1 className="reveal-card font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-on-background mb-6">
          {hero.titleLine1}{' '}
          <span className="italic text-primary">{hero.titleLine2}</span>
        </h1>
        <p className="reveal-card text-[15px] md:text-base text-on-surface-variant leading-relaxed max-w-2xl mx-auto font-light mb-10">
          {hero.subtitle}
        </p>
        <div className="reveal-card flex flex-wrap justify-center gap-8 md:gap-12">
          {hero.kpis.map((kpi) => (
            <div key={kpi.label} className="text-center">
              <p className="text-2xl md:text-3xl font-serif font-medium text-primary">
                {kpi.value}
              </p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-on-surface-variant mt-1">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>
      </header>

      {/* ── STICKY NAV ────────────────────────────────────────────────────── */}
      <nav
        aria-label="Process phases"
        className="sticky top-16 z-40 bg-surface/95 border-b border-outline-variant/30 py-3 backdrop-blur-sm"
      >
        <div className="max-w-container mx-auto px-6 lg:px-12 flex items-center justify-center gap-6 md:gap-8 overflow-x-auto">
          {processPhases.map((phase) => {
            const shortTitle = phase.content[locale].title
              .split(' ')
              .slice(0, 2)
              .join(' ')
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

      {/* ── TIMELINE SECTION ──────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Vertical gradient line — desktop */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, #B7892A 6%, #154212 30%, #154212 70%, #B7892A 94%, transparent 100%)',
          }}
        />
        {/* Glow behind the line */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-8 opacity-[0.07] blur-xl"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, #B7892A 6%, #154212 30%, #154212 70%, #B7892A 94%, transparent 100%)',
          }}
        />

        {/* Mobile vertical line */}
        <div
          aria-hidden="true"
          className="lg:hidden absolute left-6 md:left-10 top-0 bottom-0 w-px"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, #B7892A 4%, #154212 25%, #154212 75%, #B7892A 96%, transparent 100%)',
          }}
        />

        <div className="max-w-container mx-auto px-6 lg:px-12">
          {processPhases.map((phase, index) => (
            <TimelineBlock
              key={phase.id}
              phase={phase}
              locale={locale}
              index={index}
              langPrefix={langPrefix}
              isLast={index === processPhases.length - 1}
            />
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
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
//  Timeline Block
// ─────────────────────────────────────────────────────────────────────────────

interface TimelineBlockProps {
  phase: ProcessPhase
  locale: Locale
  index: number
  langPrefix: string
  isLast: boolean
}

function TimelineBlock({ phase, locale, index, langPrefix, isLast }: TimelineBlockProps) {
  const blockRef = useRef<HTMLDivElement>(null)
  useReveal(blockRef, { y: 50, stagger: 0.12, start: 'top 85%' })

  const content = phase.content[locale]
  const badges = phase.badges?.[locale]
  const isOdd = index % 2 === 0

  return (
    <div
      ref={blockRef}
      id={`phase-${phase.id}`}
      className={`scroll-mt-32 relative ${isLast ? '' : 'pb-20 md:pb-28'}`}
    >
      {/* ── Desktop layout ─────────────────────────────────────────────── */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_4rem_1fr] lg:gap-6 items-center">
        {/* Left column */}
        <div className="order-1">
          {isOdd ? (
            <TextCard
              content={content}
              badges={badges}
              langPrefix={langPrefix}
              align="right"
            />
          ) : (
            <ImagePanel images={phase.images} title={content.title} />
          )}
        </div>

        {/* Center dot */}
        <div className="flex justify-center order-2">
          <TimelineDot id={phase.id} />
        </div>

        {/* Right column */}
        <div className="order-3">
          {isOdd ? (
            <ImagePanel images={phase.images} title={content.title} />
          ) : (
            <TextCard
              content={content}
              badges={badges}
              langPrefix={langPrefix}
              align="left"
            />
          )}
        </div>
      </div>

      {/* ── Mobile layout ──────────────────────────────────────────────── */}
      <div className="lg:hidden relative pl-10 md:pl-14">
        {/* Mobile dot on the left line */}
        <div className="absolute left-0 md:left-4 top-0 -translate-x-1/2">
          <TimelineDot id={phase.id} />
        </div>

        <div className="reveal-card mb-5">
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-3">
            {content.eyebrow}
          </p>
          <TextCardMobile
            content={content}
            badges={badges}
            langPrefix={langPrefix}
          />
        </div>

        <div className="reveal-card">
          <ImagePanel images={phase.images} title={content.title} />
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  Timeline Dot
// ─────────────────────────────────────────────────────────────────────────────

function TimelineDot({ id }: { id: string }) {
  return (
    <div className="relative reveal-card">
      <div className="absolute inset-0 w-11 h-11 -m-[2px] rounded-full bg-accent/15 animate-pulse" />
      <div className="w-11 h-11 rounded-full bg-surface-container-lowest border-[3px] border-accent shadow-[0_0_12px_rgba(183,137,42,0.25)] flex items-center justify-center z-10 relative">
        <span className="text-[11px] font-bold text-accent">{id}</span>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  Image Panel — single image or auto-playing carousel for multiple images
// ─────────────────────────────────────────────────────────────────────────────

function ImagePanel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const count = images.length

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % count)
  }, [count])

  useEffect(() => {
    if (count <= 1) return
    const timer = setInterval(nextSlide, 3500)
    return () => clearInterval(timer)
  }, [nextSlide, count])

  if (count <= 1) {
    return (
      <div className="reveal-card relative aspect-[4/3] overflow-hidden rounded-xl shadow-soft group">
        <Image
          src={images[0]}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-industrial"
        />
      </div>
    )
  }

  return (
    <div className="reveal-card relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-soft group bg-surface-ink">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={src}
            alt={`${title} — ${i + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              i === currentIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  Text Card — desktop
// ─────────────────────────────────────────────────────────────────────────────

interface TextCardProps {
  content: ProcessPhaseContent
  badges?: string[]
  langPrefix: string
  align: 'left' | 'right'
}

function TextCard({ content, badges, langPrefix, align }: TextCardProps) {
  return (
    <div
      className={`reveal-card bg-surface-container-lowest rounded-xl shadow-soft p-8 md:p-10 ${
        align === 'right' ? 'text-right' : 'text-left'
      }`}
    >
      <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-3">
        {content.eyebrow}
      </p>

      <h2 className="font-serif font-medium tracking-tight text-2xl md:text-3xl text-on-background leading-snug mb-4">
        {content.title}
      </h2>

      <p className="text-[15px] text-on-surface-variant leading-relaxed mb-6">
        {content.description}
      </p>

      {content.detailedSteps && content.detailedSteps.length > 0 && (
        <div className={`flex flex-col gap-5 mb-8 ${align === 'right' ? 'items-end' : 'items-start'}`}>
          {content.detailedSteps.map((step, idx) => (
            <div
              key={idx}
              className={`relative max-w-md ${
                align === 'right'
                  ? 'pr-5 border-r border-accent/30 text-right'
                  : 'pl-5 border-l border-accent/30 text-left'
              }`}
            >
              <div
                className={`absolute top-1.5 w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(183,137,42,0.4)] ${
                  align === 'right' ? 'right-[-4.5px]' : 'left-[-4.5px]'
                }`}
              />
              <h4 className="text-sm font-bold text-on-background mb-1.5">{step.title}</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed font-light">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {badges && badges.length > 0 && (
        <ul className={`flex flex-wrap gap-2 mb-6 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
          {badges.map((badge) => (
            <li
              key={badge}
              className="px-2.5 py-1 bg-accent-soft text-accent text-[11px] font-semibold tracking-wider uppercase rounded-sm"
            >
              {badge}
            </li>
          ))}
        </ul>
      )}

      <Link
        href={`${langPrefix}${content.deepDiveHref}`}
        className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm ${
          align === 'right' ? 'flex-row-reverse' : ''
        }`}
      >
        {content.deepDiveLabel}
        <ArrowRight size={14} strokeWidth={1.8} />
      </Link>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  Text Card — mobile
// ─────────────────────────────────────────────────────────────────────────────

function TextCardMobile({
  content,
  badges,
  langPrefix,
}: Omit<TextCardProps, 'align'>) {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-soft p-6">
      <h2 className="font-serif font-medium tracking-tight text-2xl text-on-background leading-snug mb-3">
        {content.title}
      </h2>

      <p className="text-[15px] text-on-surface-variant leading-relaxed mb-5">
        {content.description}
      </p>

      {content.detailedSteps && content.detailedSteps.length > 0 && (
        <div className="flex flex-col gap-4 mb-6">
          {content.detailedSteps.map((step, idx) => (
            <div key={idx} className="relative pl-5 border-l border-accent/30">
              <div className="absolute top-1.5 left-[-4.5px] w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(183,137,42,0.4)]" />
              <h4 className="text-sm font-bold text-on-background mb-1">{step.title}</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed font-light">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {badges && badges.length > 0 && (
        <ul className="flex flex-wrap gap-2 mb-5">
          {badges.map((badge) => (
            <li
              key={badge}
              className="px-2.5 py-1 bg-accent-soft text-accent text-[11px] font-semibold tracking-wider uppercase rounded-sm"
            >
              {badge}
            </li>
          ))}
        </ul>
      )}

      <Link
        href={`${langPrefix}${content.deepDiveHref}`}
        className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent hover:text-accent-hover transition-colors"
      >
        {content.deepDiveLabel}
        <ArrowRight size={14} strokeWidth={1.8} />
      </Link>
    </div>
  )
}

