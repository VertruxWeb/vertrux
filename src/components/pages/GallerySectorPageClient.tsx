'use client'

// src/components/pages/GallerySectorPageClient.tsx
// Shared client component rendering one gallery sector page (any locale, any slug).

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'
import {
  getGallerySector,
  getAdjacentGallerySectors,
  sectorNavStrings,
  type Locale,
} from '@/lib/gallery'

interface GallerySectorPageClientProps {
  locale: Locale
  slug: string
}

export default function GallerySectorPageClient({
  locale,
  slug,
}: GallerySectorPageClientProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useReveal(heroRef, { y: 40, stagger: 0.1, start: 'top 80%' })
  useReveal(gridRef, { y: 40, stagger: 0.08, start: 'top 85%' })

  const sector = getGallerySector(slug)
  const adjacent = getAdjacentGallerySectors(slug)
  const navStrings = sectorNavStrings[locale]
  const langPrefix = locale === 'en' ? '' : `/${locale}`

  if (!sector || !adjacent) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-[15px] text-on-surface-variant">Sector not found.</p>
      </div>
    )
  }

  const content = sector.content[locale]
  const prevContent = adjacent.prev.content[locale]
  const nextContent = adjacent.next.content[locale]

  return (
    <div className="bg-surface">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-28 bg-surface-ink overflow-hidden">
        <Image
          src={sector.cover.src}
          alt={sector.cover.alt}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-ink/70 via-surface-ink/85 to-surface-ink" />

        <div ref={heroRef} className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-4">
                {content.label}
              </p>
              <h1 className="font-serif text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1.02]">
                {content.title}
              </h1>
              <p className="mt-6 text-[15px] text-white/75 leading-relaxed max-w-xl">
                {content.description}
              </p>
            </div>

            <div className="flex-shrink-0 bg-primary p-6 min-w-[220px] border-l-4 border-accent">
              <p className="text-xs tracking-widest uppercase text-white/70 mb-1">
                {content.statLabel}
              </p>
              <p className="font-serif text-2xl font-medium text-white tracking-tight">
                {content.statValue}
              </p>
              <p className="text-xs text-white/60 tracking-wider uppercase mt-2">
                {content.statSub}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE GRID ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-surface">
        <div ref={gridRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sector.images.map((img, i) => (
              <div
                key={i}
                tabIndex={0}
                className="reveal-card relative overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-ink/80 via-surface-ink/20 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 transition-all duration-300">
                  <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-accent">
                    {sector.code}
                  </p>
                  <p className="text-xs text-white/90 tracking-wider uppercase mt-1 line-clamp-2">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREV / NEXT NAV ──────────────────────────────────────────────── */}
      <section className="py-16 bg-surface-container-low border-t border-outline-variant/40">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-6 md:items-stretch">
            {/* Previous */}
            <Link
              href={`${langPrefix}/gallery/${adjacent.prev.slug}`}
              className="group flex items-center gap-4 bg-surface-high p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              <ArrowLeft
                size={18}
                className="flex-shrink-0 text-on-surface-variant group-hover:text-accent transition-colors duration-200"
              />
              <div className="min-w-0">
                <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-on-surface-muted">
                  {navStrings.previous}
                </p>
                <p className="font-serif text-[15px] text-on-background tracking-tight leading-snug mt-1 truncate">
                  {prevContent.title}
                </p>
              </div>
            </Link>

            {/* Back to overview */}
            <Link
              href={`${langPrefix}/gallery`}
              className="group flex items-center justify-center gap-3 bg-primary text-white p-6 hover:bg-primary-container transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              <LayoutGrid size={16} aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase">
                {navStrings.backToOverview}
              </span>
            </Link>

            {/* Next */}
            <Link
              href={`${langPrefix}/gallery/${adjacent.next.slug}`}
              className="group flex items-center gap-4 bg-surface-high p-6 border-r-2 border-transparent hover:border-accent transition-colors duration-200 md:justify-end md:text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              <div className="min-w-0 md:order-1">
                <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-on-surface-muted">
                  {navStrings.next}
                </p>
                <p className="font-serif text-[15px] text-on-background tracking-tight leading-snug mt-1 truncate">
                  {nextContent.title}
                </p>
              </div>
              <ArrowRight
                size={18}
                className="flex-shrink-0 text-on-surface-variant group-hover:text-accent transition-colors duration-200 md:order-2"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
