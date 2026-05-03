'use client'

import type { Locale } from '@/i18n/locales';
import { homePageStrings } from '@/content/pages/home.content';
import { useRef, useState } from 'react';
import {
  ArrowRight,
  FlaskConical,
  Layers,
  Cpu,
  Mail,
  MapPin,
  Building2,
  ShieldCheck,
  Microscope,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import DocumentRequestModal from '@/components/molecules/DocumentRequestModal';
import TrustBar from '@/components/molecules/TrustBar';
import KpiRow from '@/components/molecules/KpiRow';
import { useReveal, useRevealTimeline } from '@/hooks/useReveal';

export default function HomePageClient({ locale = 'en' }: { locale?: Locale }) {
  const t = homePageStrings[locale];
  const langPrefix = locale === 'en' ? '' : `/${locale}`;
  const heroRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [isDocumentModalOpen, setIsDocumentModalOpen] = useState(false);

  // Hero choreographed timeline (respects reduced-motion)
  useRevealTimeline(heroRef, ({ reduced, gsap }) => {
    if (reduced || !heroRef.current) return;
    const tl = gsap.timeline();
    tl.from('.hero-line', {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: 'power4.out',
    });
    tl.from(
      '.hero-fade',
      { y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
      '-=0.4',
    );
    tl.from(
      '.hero-stat',
      { y: 20, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
      '-=0.3',
    );
  });

  useReveal(scopeRef, { y: 50, stagger: 0.15, start: 'top 75%' });
  useReveal(contactRef, { y: 40, stagger: 0.1, start: 'top 80%' });

  return (
    <div className="bg-surface">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-surface-ink"
      >
        <Image
          src="/images/hero/facility-hero.webp"
          alt="VETRUX CBD extraction facility in Chuxiong, Yunnan"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-ink/40 via-surface-ink/70 to-surface-ink" />

        <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl">
            <div className="overflow-hidden mb-3">
              <p className="hero-line inline-flex items-center gap-2 text-xs font-semibold tracking-[0.35em] uppercase text-primary-fixed/80">
                <ShieldCheck size={14} className="text-accent" strokeWidth={1.6} />
                {t.heroEyebrow}
              </p>
            </div>

            <div className="overflow-hidden">
              <h1 className="hero-line font-serif text-[clamp(2.6rem,6.5vw,5.5rem)] font-medium text-white tracking-tight leading-[0.96] mb-8">
                {t.heroTitle1}
                <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-stone-100 to-stone-300">
                  {t.heroTitle2}
                </span>
              </h1>
            </div>

            <p className="hero-fade text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mb-10">
              {t.heroBody}
            </p>

            <div className="hero-fade flex flex-wrap gap-4 mb-12">
              <Button variant="accent" size="lg" icon={ArrowRight} onClick={() => setIsDocumentModalOpen(true)}>
                {t.requestCoa}
              </Button>
              <Link href={`${langPrefix}/inquiry`}>
                <Button variant="glass" size="lg">
                  {t.getBulkQuote}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────────── */}
      <TrustBar
        items={[
          { icon: Microscope, label: t.trustHplc },
          { icon: FlaskConical, label: t.trustCoa },
          { icon: Layers, label: t.trustPackaging },
          { icon: CheckCircle2, label: t.trustOem },
          { icon: ShieldCheck, label: t.trustExport },
        ]}
      />

      {/* ── GEO ANSWERS ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-4">
              {t.buyerAnswersEyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-on-background tracking-tight leading-[1.05]">
              {t.buyerAnswersTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.qa.map((item) => (
              <div key={item.question} className="bg-surface-container-lowest p-6 border-l-2 border-accent">
                <h3 className="text-sm font-extrabold text-on-surface tracking-tighter mb-2">
                  {item.question}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS SCOPE ───────────────────────────────────────────────── */}
      <section className="py-28 bg-surface-ink">
        <div ref={scopeRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-16">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-fixed/80 mb-4">
              {t.scopeEyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.05] max-w-3xl">
              {t.scopeTitle1}<br />
              <span className="italic text-primary-fixed">{t.scopeTitle2}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* CBD Raw Material Sales */}
            <div className="reveal-card group relative overflow-hidden flex flex-col">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/products/cbd-crystal-closeup.jpg"
                  alt="CBD isolate raw material"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-[center_40%] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-ink to-transparent" />
              </div>
              <div className="bg-inverse-surface p-8 flex flex-col flex-1 border-l-2 border-transparent group-hover:border-accent transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary-fixed/20 flex items-center justify-center flex-shrink-0">
                    <FlaskConical size={16} className="text-primary-fixed" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-white tracking-tight">{t.rawMaterialTitle}</h3>
                </div>
                <p className="text-[15px] text-inverse-on-surface/70 leading-relaxed mb-6 flex-1">
                  {t.rawMaterialBody}
                </p>
                <Link
                  href={`${langPrefix}/wholesale-cbd-isolate`}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-fixed hover:text-accent transition-colors duration-200 mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                >
                  {t.rawMaterialCta} <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* OEM/ODM Services */}
            <div className="reveal-card group relative overflow-hidden flex flex-col">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/equipment/extraction-vessel-6m3.webp"
                  alt="Industrial extraction equipment for OEM/ODM production"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-ink to-transparent" />
              </div>
              <div className="bg-inverse-surface p-8 flex flex-col flex-1 border-l-2 border-transparent group-hover:border-accent transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary-fixed/20 flex items-center justify-center flex-shrink-0">
                    <Layers size={16} className="text-primary-fixed" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-white tracking-tight">{t.oemTitle}</h3>
                </div>
                <p className="text-[15px] text-inverse-on-surface/70 leading-relaxed mb-6 flex-1">
                  {t.oemBody}
                </p>
                <Link
                  href={`${langPrefix}/inquiry`}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-fixed hover:text-accent transition-colors duration-200 mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                >
                  {t.oemCta} <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Technical Output */}
            <div className="reveal-card group relative overflow-hidden flex flex-col">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/equipment/hplc-system.jpg"
                  alt="HPLC analytical system for quality control"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-ink to-transparent" />
              </div>
              <div className="bg-inverse-surface p-8 flex flex-col flex-1 border-l-2 border-transparent group-hover:border-accent transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary-fixed/20 flex items-center justify-center flex-shrink-0">
                    <Cpu size={16} className="text-primary-fixed" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-white tracking-tight">{t.techTitle}</h3>
                </div>
                <p className="text-[15px] text-inverse-on-surface/70 leading-relaxed mb-6 flex-1">
                  {t.techBody}
                </p>
                <Link
                  href={`${langPrefix}/inquiry`}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-fixed hover:text-accent transition-colors duration-200 mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                >
                  {t.techCta} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* KPI Row strip on dark scope */}
          <div className="reveal-card mt-16 border-t border-white/10 pt-10">
            <KpiRow
              tone="dark"
              items={[
                { value: t.kpiAnalytical.value, label: t.kpiAnalytical.label, sub: t.kpiAnalytical.sub },
                { value: t.kpiDocumentation.value, label: t.kpiDocumentation.label, sub: t.kpiDocumentation.sub },
                { value: t.kpiPackaging.value, label: t.kpiPackaging.label, sub: t.kpiPackaging.sub },
                { value: t.kpiCooperation.value, label: t.kpiCooperation.label, sub: t.kpiCooperation.sub },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── BRAND STATEMENT ──────────────────────────────────────────────── */}
      <section className="py-28 bg-surface-low">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-4">
                {t.aboutEyebrow}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-on-background tracking-tight leading-[1.05] mb-8">
                {t.aboutTitle1}<br />
                <span className="italic text-primary">{t.aboutTitle2}</span>
              </h2>

              <blockquote className="border-l-2 border-accent pl-5 italic font-serif text-lg text-on-surface leading-relaxed mb-8">
                &ldquo;{t.aboutQuote}&rdquo;
                <footer className="not-italic mt-3 text-xs tracking-widest uppercase text-on-surface-variant font-sans">
                  {t.aboutQuoteAttribution}
                </footer>
              </blockquote>

              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-4">
                {t.aboutPara1}
              </p>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-8">
                {t.aboutPara2}
              </p>
              <Link href={`${langPrefix}/about`}>
                <Button variant="outline" size="md" icon={ArrowRight}>
                  {t.companyProfile}
                </Button>
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-3">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/images/gallery/campus-buildings.webp"
                  alt="Vetrux campus and facilities"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/images/planting/flowering-greenhouse.jpg"
                  alt="Vetrux cultivation greenhouse"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative h-48 col-span-2 overflow-hidden">
                <Image
                  src="/images/gallery/cultivation-base-wide.jpg"
                  alt="Vetrux cultivation base panoramic view"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section className="py-28 bg-surface-container-low">
        <div ref={contactRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-16">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-4">
              {t.contactEyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-on-background tracking-tight leading-[1.05] max-w-2xl">
              {t.contactTitle1}<br />
              <span className="italic text-primary">{t.contactTitle2}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="reveal-card bg-surface-container-lowest p-8 flex flex-col border border-outline-variant/30">
              <div className="w-11 h-11 bg-accent-soft flex items-center justify-center mb-6">
                <Mail size={20} className="text-accent" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-4">
                {t.emailUs}
              </p>
              <div className="space-y-3 mt-auto">
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-on-surface-muted mb-1">
                    {t.generalInquiry}
                  </p>
                  <a
                    href="mailto:inquiry@vetrux.tech"
                    className="text-[15px] font-semibold text-on-background hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  >
                    inquiry@vetrux.tech
                  </a>
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-on-surface-muted mb-1">
                    {t.salesOem}
                  </p>
                  <a
                    href="mailto:sales@vetrux.tech"
                    className="text-[15px] font-semibold text-on-background hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  >
                    sales@vetrux.tech
                  </a>
                </div>
              </div>
            </div>

            <div className="reveal-card bg-surface-container-lowest p-8 flex flex-col border border-outline-variant/30">
              <div className="w-11 h-11 bg-accent-soft flex items-center justify-center mb-6">
                <Building2 size={20} className="text-accent" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-4">
                {t.company}
              </p>
              <div className="space-y-2 mt-auto">
                <p className="text-[15px] font-semibold text-on-background">
                  Vetrux Biotechnology (Chuxiong) Co., Ltd.
                </p>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  蔚萃生物科技（楚雄）有限公司
                </p>
              </div>
            </div>

            <div className="reveal-card bg-surface-container-lowest p-8 flex flex-col border border-outline-variant/30">
              <div className="w-11 h-11 bg-accent-soft flex items-center justify-center mb-6">
                <MapPin size={20} className="text-accent" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-4">
                {t.location}
              </p>
              <div className="space-y-2 mt-auto">
                <p className="text-[15px] text-on-background leading-relaxed">
                  Chuxiong, Yunnan Province,<br />
                  China
                </p>
              </div>
            </div>
          </div>

          <div className="reveal-card mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-primary p-8 md:p-10 border-l-4 border-accent">
            <div>
              <p className="font-serif text-2xl md:text-3xl font-medium text-white tracking-tight leading-tight">
                {t.ctaTitle}
              </p>
              <p className="text-[15px] text-white/70 mt-2">
                {t.ctaBody}
              </p>
            </div>
            <Link href={`${langPrefix}/inquiry`} className="flex-shrink-0">
              <Button variant="accent" size="lg" icon={ArrowRight}>
                {t.sendInquiry}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <DocumentRequestModal
        isOpen={isDocumentModalOpen}
        onClose={() => setIsDocumentModalOpen(false)}
        defaultDocumentType="both"
        sourcePage="/"
        productInterest="CBD Isolate"
        locale={locale}
      />

    </div>
  );
}
