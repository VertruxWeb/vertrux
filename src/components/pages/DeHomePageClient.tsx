'use client'

import { useRef } from 'react';
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
  Award,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import TrustBar from '@/components/molecules/TrustBar';
import KpiRow from '@/components/molecules/KpiRow';
import { useReveal, useRevealTimeline } from '@/hooks/useReveal';

export default function DeHomePageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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
          alt="VETRUX CBD-Extraktionsanlage in Chuxiong, Yunnan"
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
                VETRUX · Yunnan, China
              </p>
            </div>

            <div className="overflow-hidden">
              <h1 className="hero-line font-serif text-[clamp(2.6rem,6.5vw,5.5rem)] font-medium text-white tracking-tight leading-[0.96] mb-2">
                Vom Saatgut
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-line font-serif text-[clamp(2.6rem,6.5vw,5.5rem)] font-medium tracking-tight leading-[0.96] mb-8 italic">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-stone-100 to-stone-300">
                  zum Isolat.
                </span>
              </h1>
            </div>

            <p className="hero-fade text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mb-10">
              Ein vertikal integrierter CBD-Rohstoffpartner — vom Anbau in Yunnan über die
              hauseigene HPLC-Verifizierung bis zur exportfertigen Verpackung, alles aus einer Hand.
            </p>

            <div className="hero-fade flex flex-wrap gap-4 mb-12">
              <Link href="/de/inquiry">
                <Button variant="accent" size="lg" icon={ArrowRight}>
                  Kontakt aufnehmen
                </Button>
              </Link>
              <Link href="/de/products/cbd-isolate">
                <Button variant="glass" size="lg">
                  Produkte ansehen
                </Button>
              </Link>
            </div>

            <div className="hero-fade inline-flex items-center gap-2 px-3 py-1.5 border border-white/15 bg-white/5 backdrop-blur-sm rounded-sm mb-8">
              <Award size={12} className="text-accent" strokeWidth={1.8} />
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/70">
                Verifizierter Hersteller · Yunnan, CN · ISO Qualitätsprozess
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-white/10 divide-x divide-white/10">
            {[
              { value: '≥99,9%', label: 'Isolat-Reinheit' },
              { value: 'THC ND', label: 'Nicht nachweisbar' },
              { value: '20', label: 'Extraktionstanks' },
              { value: 'Yunnan', label: 'Ursprung & Anbau' },
            ].map((stat, i) => (
              <div key={stat.label} className={`hero-stat ${i === 0 ? '' : 'pl-8'}`}>
                <p className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tighter">
                  {stat.value}
                </p>
                <p className="text-[10px] text-white/60 tracking-widest uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────────── */}
      <TrustBar
        items={[
          { icon: FlaskConical, label: '20 Extraktionstanks' },
          { icon: Layers, label: '26 Chromatographie-Säulen' },
          { icon: Microscope, label: 'HPLC im Haus' },
          { icon: ShieldCheck, label: 'ISO Qualitätsprozess' },
          { icon: CheckCircle2, label: 'OEM / ODM' },
          { icon: Award, label: 'Anbau bis Verpackung' },
        ]}
      />

      {/* ── BUSINESS SCOPE ───────────────────────────────────────────────── */}
      <section className="py-28 bg-surface-ink">
        <div ref={scopeRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-16">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-fixed/80 mb-4">
              Geschäftsfelder
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.05] max-w-3xl">
              End-to-End-Kompetenzen,<br />
              <span className="italic text-primary-fixed">auf Ihre Anforderungen zugeschnitten</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* CBD Raw Material Sales */}
            <div className="reveal-card group relative overflow-hidden flex flex-col">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/products/cbd-crystal-closeup.jpg"
                  alt="CBD-Isolat Rohstoff"
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
                  <h3 className="font-serif text-xl text-white tracking-tight">CBD-Rohstoffvertrieb</h3>
                </div>
                <p className="text-[15px] text-inverse-on-surface/70 leading-relaxed mb-6 flex-1">
                  Belieferung von Markenkunden, Vertriebspartnern und Handelsunternehmen mit stabiler
                  CBD-Versorgung. Standardlieferung, langfristige Verträge und maßgeschneiderte
                  Kooperationsmodelle verfügbar.
                </p>
                <Link
                  href="/de/wholesale-cbd-isolate"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-fixed hover:text-accent transition-colors duration-200 mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                >
                  Versorgung entdecken <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* OEM/ODM Services */}
            <div className="reveal-card group relative overflow-hidden flex flex-col">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/equipment/extraction-vessel-6m3.webp"
                  alt="Industrielle Extraktionsanlage für OEM/ODM-Produktion"
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
                  <h3 className="font-serif text-xl text-white tracking-tight">OEM / ODM Dienstleistungen</h3>
                </div>
                <p className="text-[15px] text-inverse-on-surface/70 leading-relaxed mb-6 flex-1">
                  Vollständige Prozessbegleitung von Rohstoffbeschaffung und Formulierungsentwicklung
                  über Produktion und Verpackungsdesign bis hin zur Fertigprodukt-Lieferung für Ihre Marke.
                </p>
                <Link
                  href="/de/inquiry"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-fixed hover:text-accent transition-colors duration-200 mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                >
                  Projekt starten <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Technical Output */}
            <div className="reveal-card group relative overflow-hidden flex flex-col">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/equipment/hplc-system.jpg"
                  alt="HPLC-Analysesystem für Qualitätskontrolle"
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
                  <h3 className="font-serif text-xl text-white tracking-tight">Technische Dienstleistungen</h3>
                </div>
                <p className="text-[15px] text-inverse-on-surface/70 leading-relaxed mb-6 flex-1">
                  Anbaumanagement, Ertragsoptimierung, Verfeinerung der Extraktionsprozesse,
                  Kostenkontrolle und Beratung zur Cannabinoid-Reinigung.
                </p>
                <Link
                  href="/de/inquiry"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-fixed hover:text-accent transition-colors duration-200 mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                >
                  Jetzt anfragen <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* KPI Row strip on dark scope */}
          <div className="reveal-card mt-16 border-t border-white/10 pt-10">
            <KpiRow
              tone="dark"
              items={[
                { value: '≥99,9%', label: 'Isolat-Reinheit', sub: 'HPLC verifiziert' },
                { value: '120.000 L', label: 'Extraktionskapazität', sub: '20 × 6m³ Tanks' },
                { value: '24 h', label: 'Antwortzeit', sub: 'Geschäftliche Anfrage' },
                { value: 'EN · DE · FR', label: 'Sprachen', sub: 'B2B Sales-Team' },
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
                Über Vetrux
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-on-background tracking-tight leading-[1.05] mb-8">
                Qualität verankert in<br />
                <span className="italic text-primary">jedem Schritt des Prozesses</span>
              </h2>

              <blockquote className="border-l-2 border-accent pl-5 italic font-serif text-lg text-on-surface leading-relaxed mb-8">
                &ldquo;Wir behandeln jedes Kilo Isolat so, als würde es unter unserem eigenen Namen
                versendet. Rückverfolgbarkeit ist kein Etikett — sie ist die Arbeitsweise des Teams.&rdquo;
                <footer className="not-italic mt-3 text-xs tracking-widest uppercase text-on-surface-variant font-sans">
                  — Qualitätsleitung, VETRUX
                </footer>
              </blockquote>

              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-4">
                VETRUX baut auf einer klaren Überzeugung — dass pharmazeutische Konsistenz
                bereits auf dem Feld beginnt, nicht erst in der Abfüllung. Jede Charge wird
                im eigenen Haus angebaut, extrahiert und verifiziert — das Datenblatt in Ihren
                Händen ist dasselbe, an dem unser Team gemessen wird.
              </p>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-8">
                Vom Anbau über die Chromatographie bis zur Exportverpackung — VETRUX liefert
                eine einzige, verantwortliche Lieferlinie für B2B-Partner.
              </p>
              <Link href="/de/about">
                <Button variant="outline" size="md" icon={ArrowRight}>
                  Unternehmensprofil
                </Button>
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-3">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/images/gallery/campus-buildings.webp"
                  alt="Vetrux-Campus und Anlagen"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/images/planting/flowering-greenhouse.jpg"
                  alt="Vetrux Anbau-Gewächshaus"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative h-48 col-span-2 overflow-hidden">
                <Image
                  src="/images/gallery/cultivation-base-wide.jpg"
                  alt="Panoramaansicht der Vetrux Anbaubasis"
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
              Kontakt
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-on-background tracking-tight leading-[1.05] max-w-2xl">
              Lassen Sie uns über<br />
              <span className="italic text-primary">Ihre Anforderungen sprechen</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="reveal-card bg-surface-container-lowest p-8 flex flex-col border border-outline-variant/30">
              <div className="w-11 h-11 bg-accent-soft flex items-center justify-center mb-6">
                <Mail size={20} className="text-accent" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-4">
                E-Mail
              </p>
              <div className="space-y-3 mt-auto">
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-on-surface-muted mb-1">
                    Allgemeine Anfrage
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
                    Vertrieb &amp; OEM/ODM
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
                Unternehmen
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
                Standort
              </p>
              <div className="space-y-2 mt-auto">
                <p className="text-[15px] text-on-background leading-relaxed">
                  Seedling Base, Tapu Second Group,<br />
                  Chuxiong City, Provinz Yunnan,<br />
                  675000, China
                </p>
              </div>
            </div>
          </div>

          <div className="reveal-card mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-primary p-8 md:p-10 border-l-4 border-accent">
            <div>
              <p className="font-serif text-2xl md:text-3xl font-medium text-white tracking-tight leading-tight">
                Bereit für ein Gespräch?
              </p>
              <p className="text-[15px] text-white/70 mt-2">
                Erzählen Sie uns von Ihrem Projekt — wir antworten innerhalb von 24 Stunden.
              </p>
            </div>
            <Link href="/de/inquiry" className="flex-shrink-0">
              <Button variant="accent" size="lg" icon={ArrowRight}>
                Anfrage senden
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
