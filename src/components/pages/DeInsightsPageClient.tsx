'use client'

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import SectionLabel from '@/components/atoms/SectionLabel';
import type { Article } from '@/content/articles';
import { useReveal } from '@/hooks/useReveal';

interface DeInsightsPageClientProps {
  articles: Article[];
}

export default function DeInsightsPageClient({ articles }: DeInsightsPageClientProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const featured = articles[0];
  const gridArticles = articles.slice(1);

  useReveal(heroRef, { y: 40, stagger: 0.1, start: 'top 80%' });
  useReveal(gridRef, { y: 40, stagger: 0.1, start: 'top 80%' });

  if (!featured) return null;

  return (
    <div className="bg-surface">

      {/* ── FEATURED INSIGHT HERO ──────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-card">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="default">{featured.category}</Badge>
                <span className="text-xs text-on-surface-variant tracking-wider">{featured.date}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-on-background tracking-tight leading-[1.0] mb-6">
                Innovation in CBD-
                <br />
                <span className="italic text-primary">Biotechnologie</span>
              </h1>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-8 max-w-md">
                {featured.excerpt}
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link href={`/de/blog/${featured.slug}`}>
                  <Button variant="accent" size="md" icon={ArrowRight}>Whitepaper lesen</Button>
                </Link>
                <span className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                  <Clock size={12} />
                  {featured.readTime}
                </span>
              </div>
            </div>

            <Link
              href={`/de/blog/${featured.slug}`}
              className="reveal-card relative overflow-hidden block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              <div className="relative w-full h-72 overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-surface-ink/60 to-transparent">
                <span className="text-xs text-white/60 tracking-[0.35em] uppercase">
                  Vetrux CBD Insights-Team
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ARTICLES GRID ──────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={gridRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <SectionLabel>Neueste Beiträge</SectionLabel>
            <h2 className="text-3xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-12">
              Branchenanalyse & Forschung
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gridArticles.map((article, i) => (
              <Link
                key={article.slug}
                href={`/de/blog/${article.slug}`}
                className={`reveal-card group cursor-pointer pb-4 border-b-2 border-transparent hover:border-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${i === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}
              >
                <article>
                  <div className="overflow-hidden mb-4 relative w-full h-48 md:h-56">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-0.5 bg-primary-fixed text-primary text-xs font-semibold tracking-wider uppercase rounded-full">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-on-surface-variant">
                      <Clock size={10} />
                      {article.readTime}
                    </span>
                    <span className="text-xs text-on-surface-variant">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-serif font-medium text-on-background tracking-tight leading-snug mb-2 group-hover:text-accent transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold tracking-wider uppercase text-accent group-hover:translate-x-1 transition-transform duration-200">
                    Artikel lesen <ArrowRight size={12} />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
