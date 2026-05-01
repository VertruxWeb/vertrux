'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '@/components/atoms/SectionLabel'
import { useReveal } from '@/hooks/useReveal'
import { gallerySectors, galleryIndexStrings, type Locale } from '@/lib/gallery'

interface GalleryPageClientProps {
  locale?: Locale
}

export default function GalleryPageClient({ locale = 'en' }: GalleryPageClientProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useReveal(heroRef, { y: 40, stagger: 0.1, start: 'top 80%' })
  useReveal(cardsRef, { y: 50, stagger: 0.12, start: 'top 80%' })

  const t = galleryIndexStrings[locale]
  const langPrefix = locale === 'en' ? '' : `/${locale}`

  return (
    <div className="bg-surface">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <SectionLabel>{t.eyebrow}</SectionLabel>
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-on-background tracking-tight leading-[1.0] max-w-3xl">
              {t.titleLine1}
              <br />
              <span className="italic text-primary">{t.titleLine2}</span>
            </h1>
            <p className="mt-6 text-[15px] text-on-surface-variant leading-relaxed max-w-xl">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      {/* ── 4-SECTOR CARD GRID ───────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-surface">
        <div ref={cardsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {gallerySectors.map((sector) => {
              const c = sector.content[locale]
              return (
                <Link
                  key={sector.slug}
                  href={`${langPrefix}/gallery/${sector.slug}`}
                  aria-label={`${c.title} — ${c.cta}`}
                  className="reveal-card group relative flex flex-col bg-surface-high border border-outline-variant/30 hover:border-accent transition-all duration-200 ease-industrial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  {/* Cover image */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-ink">
                    <Image
                      src={sector.cover.src}
                      alt={sector.cover.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-ink/55 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 inline-flex items-center px-2 py-0.5 bg-accent text-white text-[10px] font-semibold tracking-[0.25em] uppercase rounded-sm">
                      {sector.code}
                    </span>
                    <span className="absolute bottom-3 right-3 text-[10px] tracking-[0.2em] uppercase text-white/80 bg-surface-ink/60 backdrop-blur-sm px-2 py-1 rounded-sm">
                      {sector.images.length} {t.imagesCountSuffix}
                    </span>
                  </div>

                  {/* Copy */}
                  <div className="flex flex-col flex-1 p-6 border-l-2 border-transparent group-hover:border-accent transition-colors duration-200">
                    <h3 className="font-serif text-lg text-on-background tracking-tight leading-snug">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-[13px] text-on-surface-variant leading-relaxed flex-1">
                      {c.cardBlurb}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.25em] uppercase text-accent">
                      {c.cta}
                      <ArrowRight
                        size={12}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
