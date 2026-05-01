'use client'

import { useRef } from 'react';
import { ArrowRight, Download, CheckCircle, Microscope, TestTube, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import SectionLabel from '@/components/atoms/SectionLabel';
import SpecRow from '@/components/molecules/SpecRow';
import ProcessSteps from '@/components/molecules/ProcessSteps';
import { useReveal } from '@/hooks/useReveal';

const technicalMetrics = [
  { label: 'Product', value: 'CBD Isolate', status: 'Cannabidiol Isolate' },
  { label: 'Purity', value: '≥99.9%', status: 'THC Non-Detect (ND)' },
  { label: 'Inner Packaging', value: '5 kg/bag', status: 'PE or Aluminum Foil' },
  { label: 'Outer Packaging', value: '465×285×295mm', status: 'Export Carton' },
];

const processSteps = [
  { title: 'Cultivation', desc: 'Yunnan-grown industrial hemp from our Chuxiong cultivation base, under standardized growing protocols.' },
  { title: 'Extraction', desc: 'Ethanol extraction in 6m³ multi-function tanks under controlled temperature and solvent conditions.' },
  { title: 'Purification', desc: 'Industrial-scale chromatography isolates cannabidiol from the crude extract via gradient elution.' },
  { title: 'QC', desc: 'In-house HPLC cannabinoid profiling and per-batch verification before release.' },
  { title: 'Packaging', desc: 'Food-grade PE or aluminum-foil bags inside export cartons, palletized with shrink wrap.' },
];

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

export default function ProductPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const qualityRef = useRef<HTMLDivElement>(null);

  useReveal(heroRef);
  useReveal(metricsRef, { stagger: 0.08 });
  useReveal(processRef, { stagger: 0.08 });
  useReveal(specsRef);
  useReveal(qualityRef);

  return (
    <div className="bg-surface">

      {/* ── PRODUCT HERO ────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-card">
              <Badge variant="default" className="mb-6">CBD Raw Materials</Badge>
              <h1 className="font-serif font-medium text-[clamp(2.4rem,5.5vw,4.5rem)] text-on-background tracking-tight leading-[1.0] mb-6">
                CBD Isolate
                <br />
                <span className="italic text-primary">99.9% Purity</span>
              </h1>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-8 max-w-md">
                Pharmaceutical-grade CBD isolate at ≥99.9% purity, with traceable cultivation,
                in-house HPLC verification, and export-ready packaging for B2B partners.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  'CBD Isolate',
                  'Anthocyanins',
                  'Steviol Glycosides',
                  'Hemp Seed Globulin',
                  '≥99.9% Purity',
                ].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/inquiry">
                  <Button variant="accent" size="lg" icon={ArrowRight}>
                    Wholesale Inquiry
                  </Button>
                </Link>
                <Link href="/inquiry">
                  <Button variant="secondary" size="lg" icon={Download} iconPosition="left">
                    Request Product Documentation
                  </Button>
                </Link>
              </div>
            </div>

            <div className="reveal-card relative">
              <Image src="/images/products/cbd-crystal-closeup.jpg" alt="CBD Isolate 99.9% purity white crystalline powder" width={800} height={500} priority sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-[500px] object-cover" />
              <div className="absolute bottom-6 right-6 bg-surface-ink/90 backdrop-blur p-4">
                <p className="text-xs text-white/60 tracking-[0.35em] uppercase mb-1">CBD Isolate</p>
                <p className="text-sm font-bold text-white">Purity: ≥99.9%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL ANALYSIS GRID ─────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={metricsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <SectionLabel>Technical Analysis</SectionLabel>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-4">
              Product Information
            </h2>
            <p className="text-[15px] text-on-surface-variant mb-12 max-w-xl">
              Supporting documentation including COA, SDS, test reports, and other shipment documents may be provided according to order requirements. Specific documentation availability depends on actual batch, order terms, and verification results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {technicalMetrics.map((metric) => (
              <div key={metric.label} className="reveal-card bg-surface-container-lowest p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200">
                <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">{metric.label}</p>
                <p className="text-2xl font-extrabold text-on-surface tracking-tighter mb-1">{metric.value}</p>
                <p className="text-xs text-on-surface-variant/70">{metric.status}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card">
            <Link href="/inquiry">
              <Button variant="accent" size="md" icon={Download} iconPosition="left">
                Request Product Information
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS DIAGRAM ─────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={processRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-10">
            <SectionLabel>From Field to Finished Isolate</SectionLabel>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] max-w-xl">
              A controlled, traceable production chain.
            </h2>
          </div>
          <div className="reveal-card">
            <ProcessSteps steps={processSteps} />
          </div>
        </div>
      </section>

      {/* ── PRODUCT SPECIFICATIONS ─────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={specsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="reveal-card">
              <SectionLabel>Product Specifications</SectionLabel>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-8">Full Product Spec Sheet</h2>
              <div>
                <SpecRow label="Product Name" value="CBD Isolate" />
                <SpecRow label="Purity" value="≥99.9% (THC Non-Detect)" />
                <SpecRow label="Packaging (Inner)" value="PE bags 5kg/bag (27×60cm, food grade) or Aluminum foil bags 5kg/bag (35×50cm, food grade)" />
                <SpecRow label="Packaging (Outer)" value="Export cartons 465×285×295mm, 2 bags per carton" />
                <SpecRow label="Palletization" value="Plastic pallets with shrink wrap" isLast />
              </div>
            </div>

            <div className="reveal-card">
              <SectionLabel>Compliance & Documentation</SectionLabel>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-6">Batch Documentation & Export Compliance</h2>
              <div className="mb-6 p-4 bg-surface-container border-l-2 border-accent">
                <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">Export & Import Notice</p>
                <p className="text-[13px] text-on-surface-variant leading-relaxed">
                  For products requiring export permits or international verification, the export process may involve compliance confirmation from destination country authorities. Destination country import compliance — including permits, licenses, and regulatory approvals — is the{' '}
                  <span className="font-semibold text-on-surface">buyer/importer&apos;s responsibility</span>. Documentation is arranged according to actual order requirements.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { standard: 'Certificate of Analysis (COA)', detail: 'May be provided according to order requirements' },
                  { standard: 'Safety Data Sheet (SDS)', detail: 'May be provided according to order requirements' },
                  { standard: 'Test Reports', detail: 'May be provided according to order requirements' },
                  { standard: 'Commercial Invoice', detail: 'Provided per shipment' },
                  { standard: 'Packing List', detail: 'Provided per shipment' },
                ].map((item) => (
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
            <SectionLabel className="mb-0">Quality & Product Lines</SectionLabel>
            <div className="flex gap-3">
              {['CBD Isolate', 'OEM/ODM', 'Technical Services'].map((cert) => (
                <span key={cert} className="px-3 py-1 bg-primary-fixed text-primary text-xs font-bold tracking-wider uppercase rounded-full">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <h2 className="reveal-card font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-12 max-w-xl">
            CBD Isolate for Global B2B Supply
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {qualityCards.map((card) => (
              <div key={card.title} className={`reveal-card ${card.bg} p-8 ${card.bg === 'bg-primary' ? '' : 'border-l-2 border-transparent hover:border-accent transition-colors duration-200'}`}>
                {card.image && (
                  <div className="relative w-full h-40 mb-6">
                    <Image src={card.image} alt={card.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                  </div>
                )}
                <div className={`w-10 h-10 flex items-center justify-center mb-4 ${card.bg === 'bg-primary' ? 'bg-white/10' : 'bg-primary-fixed'}`}>
                  <card.icon size={20} className={card.bg === 'bg-primary' ? 'text-white' : 'text-primary'} />
                </div>
                <p className={`font-serif text-lg leading-snug mb-3 ${card.bg === 'bg-primary' ? 'text-white' : 'text-on-surface'}`}>
                  {card.title}
                </p>
                <p className={`text-[13px] leading-relaxed ${card.bg === 'bg-primary' ? 'text-white/70' : 'text-on-surface-variant'}`}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Internal links to related pages */}
          <div className="reveal-card mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/quality-assurance" className="p-4 bg-surface-container-lowest hover:bg-surface-container border-l-2 border-transparent hover:border-accent transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
              <p className="text-xs font-bold text-accent tracking-[0.25em] uppercase">Quality Assurance →</p>
              <p className="text-[13px] text-on-surface-variant mt-1">Documentation & testing details</p>
            </Link>
            <Link href="/wholesale-cbd-isolate" className="p-4 bg-surface-container-lowest hover:bg-surface-container border-l-2 border-transparent hover:border-accent transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
              <p className="text-xs font-bold text-accent tracking-[0.25em] uppercase">Wholesale Inquiry →</p>
              <p className="text-[13px] text-on-surface-variant mt-1">Volume pricing & export terms</p>
            </Link>
            <Link href="/inquiry" className="p-4 bg-surface-container-lowest hover:bg-surface-container border-l-2 border-transparent hover:border-accent transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
              <p className="text-xs font-bold text-accent tracking-[0.25em] uppercase">Contact Sales →</p>
              <p className="text-[13px] text-on-surface-variant mt-1">inquiry@vetrux.tech</p>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
