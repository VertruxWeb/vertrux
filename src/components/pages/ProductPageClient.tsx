'use client'

import type { Locale } from '@/i18n/locales';
import { useRef, useState } from 'react';
import { ArrowRight, Download, CheckCircle, Microscope, TestTube, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import DocumentRequestModal from '@/components/molecules/DocumentRequestModal';
import SectionLabel from '@/components/atoms/SectionLabel';
import SpecRow from '@/components/molecules/SpecRow';
import ProcessSteps from '@/components/molecules/ProcessSteps';
import { useReveal } from '@/hooks/useReveal';
import type { DocumentRequestDocumentType } from '@/lib/documentRequest';
import { productPageStrings } from '@/content/pages/product.content';

const qualityCards = [
  {
    icon: Microscope,
    title: 'Quality Management',
    desc: 'In-house HPLC analytical capability. Documentation support available according to order requirements.',
    bg: 'bg-surface-container-low',
    image: '/images/products/cbd-crystal-lab.jpg',
  },
  {
    icon: TestTube,
    title: 'Documentation Support',
    desc: 'Supporting documents including COA, SDS, test reports, commercial invoices, and packing lists may be arranged according to actual batch and order terms.',
    bg: 'bg-primary',
    image: null,
  },
  {
    icon: TrendingUp,
    title: 'Export-Ready Packaging',
    desc: 'PE bags 5kg (27×60cm) and aluminum foil bags 5kg (35×50cm), food-grade. Export cartons 465×285×295mm, 2 bags per carton. Plastic pallets with shrink wrap for secure transit.',
    bg: 'bg-surface-container-low',
    image: '/images/products/cbd-packaging-foil.jpg',
  },
];

export default function ProductPageClient({ locale = 'en' }: { locale?: Locale }) {
  const t = productPageStrings[locale];
  const langPrefix = locale === 'en' ? '' : `/${locale}`;
  const heroRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const qualityRef = useRef<HTMLDivElement>(null);
  const [documentModalType, setDocumentModalType] = useState<DocumentRequestDocumentType>('both');
  const [isDocumentModalOpen, setIsDocumentModalOpen] = useState(false);

  useReveal(heroRef);
  useReveal(metricsRef, { stagger: 0.08 });
  useReveal(processRef, { stagger: 0.08 });
  useReveal(specsRef);
  useReveal(qualityRef);

  const openDocumentModal = (documentType: DocumentRequestDocumentType) => {
    setDocumentModalType(documentType);
    setIsDocumentModalOpen(true);
  };

  return (
    <div className="bg-surface">

      {/* ── PRODUCT HERO ────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-card">
              <Badge variant="default" className="mb-6">{t.badge}</Badge>
              <h1 className="font-serif font-medium text-[clamp(2.4rem,5.5vw,4.5rem)] text-on-background tracking-tight leading-[1.0] mb-6">
                {t.heroTitle1}
                <br />
                <span className="italic text-primary">{t.heroTitle2}</span>
              </h1>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-8 max-w-md">
                {t.heroBody}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  'CBD Isolate',
                  'Anthocyanins',
                  'Steviol Glycosides',
                  'Hemp Seed Globulin',
                  'COA / SDS Request',
                ].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="accent" size="lg" icon={ArrowRight} onClick={() => openDocumentModal('both')}>
                  {t.requestSpecSheet}
                </Button>
                <Button variant="secondary" size="lg" icon={Download} iconPosition="left" onClick={() => openDocumentModal('COA')}>
                  {t.requestCoa}
                </Button>
              </div>
            </div>

            <div className="reveal-card relative">
              <Image src="/images/products/cbd-crystal-closeup.jpg" alt="Bulk CBD isolate — white crystalline powder sample" width={800} height={500} priority sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL ANALYSIS GRID ─────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={metricsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <SectionLabel>{t.techSection}</SectionLabel>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-4">
              {t.techTitle}
            </h2>
            <p className="text-[15px] text-on-surface-variant mb-12 max-w-xl">
              {t.techBody}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {t.metrics.map((metric) => (
              <div key={metric.label} className="reveal-card bg-surface-container-lowest p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200">
                <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">{metric.label}</p>
                <p className="text-2xl font-extrabold text-on-surface tracking-tighter mb-1">{metric.value}</p>
                <p className="text-xs text-on-surface-variant/70">{metric.status}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card">
            <Button variant="accent" size="md" icon={Download} iconPosition="left" onClick={() => openDocumentModal('both')}>
              {t.requestSpecSheet}
            </Button>
          </div>
        </div>
      </section>

      {/* ── GEO ANSWERS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-10">
            <SectionLabel>{t.buyerSection}</SectionLabel>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05]">
              {t.buyerTitle}
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

      {/* ── PROCESS DIAGRAM ─────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={processRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-10">
            <SectionLabel>{t.processSection}</SectionLabel>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] max-w-xl">
              {t.processTitle}
            </h2>
          </div>
          <div className="reveal-card">
            <ProcessSteps steps={t.steps} />
          </div>
        </div>
      </section>

      {/* ── PRODUCT SPECIFICATIONS ─────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={specsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="reveal-card">
              <SectionLabel>{t.specSection}</SectionLabel>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-8">{t.specTitle}</h2>
              <div>
                {t.specs.map((spec, i) => (
                  <SpecRow key={spec.label} label={spec.label} value={spec.value} isLast={i === t.specs.length - 1} />
                ))}
              </div>
            </div>

            <div className="reveal-card">
              <SectionLabel>{t.complianceSection}</SectionLabel>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-6">{t.complianceTitle}</h2>
              <div className="mb-6 p-4 bg-surface-container border-l-2 border-accent">
                <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">{t.exportNotice}</p>
                <p className="text-[13px] text-on-surface-variant leading-relaxed">
                  {t.exportBody}{' '}
                  <span className="font-semibold text-on-surface">{t.buyerResponsibility}</span>.
                </p>
              </div>
              <div className="space-y-4">
                {t.compliance.map((item) => (
                  <div key={item.standard} className="flex items-start gap-3 py-3 border-b border-outline-variant/20 last:border-0">
                    <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-on-surface">{item.standard}</p>
                      <p className="text-[13px] text-on-surface-variant">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALITY ASSURANCE BENTO ─────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={qualityRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card flex flex-wrap items-center gap-4 mb-12">
            <SectionLabel className="mb-0">{t.qualitySection}</SectionLabel>
            <div className="flex gap-3">
              {['CBD Isolate', 'OEM/ODM', 'Technical Services'].map((cert) => (
                <span key={cert} className="px-3 py-1 bg-primary-fixed text-primary text-xs font-bold tracking-wider uppercase rounded-full">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <h2 className="reveal-card font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-12 max-w-xl">
            {t.qualityTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {qualityCards.map((card, idx) => (
              <div key={card.title} className={`reveal-card ${card.bg} p-8 ${card.bg === 'bg-primary' ? '' : 'border-l-2 border-transparent hover:border-accent transition-colors duration-200'}`}>
                {card.image && (
                  <div className="relative w-full h-40 mb-6">
                    <Image src={card.image} alt={t.cards[idx].title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                  </div>
                )}
                <div className={`w-10 h-10 flex items-center justify-center mb-4 ${card.bg === 'bg-primary' ? 'bg-white/10' : 'bg-primary-fixed'}`}>
                  <card.icon size={20} className={card.bg === 'bg-primary' ? 'text-white' : 'text-primary'} />
                </div>
                <p className={`font-serif text-lg leading-snug mb-3 ${card.bg === 'bg-primary' ? 'text-white' : 'text-on-surface'}`}>
                  {t.cards[idx].title}
                </p>
                <p className={`text-[13px] leading-relaxed ${card.bg === 'bg-primary' ? 'text-white/70' : 'text-on-surface-variant'}`}>
                  {t.cards[idx].desc}
                </p>
              </div>
            ))}
          </div>

          {/* Internal links to related pages */}
          <div className="reveal-card mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href={`${langPrefix}/quality-assurance`} className="p-4 bg-surface-container-lowest hover:bg-surface-container border-l-2 border-transparent hover:border-accent transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
              <p className="text-xs font-bold text-accent tracking-[0.25em] uppercase">{t.qualityAssuranceLink}</p>
              <p className="text-[13px] text-on-surface-variant mt-1">{t.qualityAssuranceSub}</p>
            </Link>
            <Link href={`${langPrefix}/wholesale-cbd-isolate`} className="p-4 bg-surface-container-lowest hover:bg-surface-container border-l-2 border-transparent hover:border-accent transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
              <p className="text-xs font-bold text-accent tracking-[0.25em] uppercase">{t.wholesaleLink}</p>
              <p className="text-[13px] text-on-surface-variant mt-1">{t.wholesaleSub}</p>
            </Link>
            <Link href={`${langPrefix}/inquiry`} className="p-4 bg-surface-container-lowest hover:bg-surface-container border-l-2 border-transparent hover:border-accent transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
              <p className="text-xs font-bold text-accent tracking-[0.25em] uppercase">{t.contactSalesLink}</p>
              <p className="text-[13px] text-on-surface-variant mt-1">inquiry@vetrux.tech</p>
            </Link>
          </div>
        </div>
      </section>

      <DocumentRequestModal
        isOpen={isDocumentModalOpen}
        onClose={() => setIsDocumentModalOpen(false)}
        defaultDocumentType={documentModalType}
        sourcePage="/products/cbd-isolate"
        productInterest="CBD Isolate"
        locale={locale}
      />

    </div>
  );
}
