'use client'

import { useRef } from 'react';
import { ArrowRight, Download, CheckCircle, Microscope, TestTube, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '@/components/atoms/Badge';
import SectionLabel from '@/components/atoms/SectionLabel';
import SpecRow from '@/components/molecules/SpecRow';

gsap.registerPlugin(ScrollTrigger);

const technicalMetrics = [
  { label: 'CAS Number', value: '13956-29-1', status: 'Cannabidiol' },
  { label: 'HS Code', value: '2907299020', status: 'Export Classification' },
  { label: 'Inner Packaging', value: '5 kg/bag', status: 'PE or Aluminum Foil' },
  { label: 'Outer Packaging', value: '465×285×295mm', status: 'Export Carton' },
];

const qualityCards = [
  {
    icon: Microscope,
    title: 'Quality Management',
    desc: 'In-house HPLC analytical capability (Thermo UltiMate 3000). Documentation support available according to order requirements.',
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
  const specsRef = useRef<HTMLDivElement>(null);
  const qualityRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroRef.current) return;
    const items = heroRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: heroRef.current, start: 'top 80%' },
    });
  }, { scope: heroRef });

  useGSAP(() => {
    if (!metricsRef.current) return;
    const items = metricsRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: metricsRef.current, start: 'top 80%' },
    });
  }, { scope: metricsRef });

  useGSAP(() => {
    if (!specsRef.current) return;
    const items = specsRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: specsRef.current, start: 'top 80%' },
    });
  }, { scope: specsRef });

  useGSAP(() => {
    if (!qualityRef.current) return;
    const items = qualityRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: qualityRef.current, start: 'top 80%' },
    });
  }, { scope: qualityRef });

  return (
    <div className="bg-surface">

      {/* ── PRODUCT HERO ────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-card">
              <Badge variant="default" className="mb-6">Botanical Extracts</Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold text-on-background tracking-tighter leading-[0.95] mb-6">
                CBD Isolate
                <br />
                <span className="text-primary">99.5% Purity</span>
              </h1>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8 max-w-md">
                CBD crystal (CAS 13956-29-1, HS 2907299020). We also supply anthocyanins, steviol glycosides, and hemp seed globulin for pharmaceutical R&D, nutrition, food & beverage, and personal care applications.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  'CBD Crystal',
                  'Anthocyanins',
                  'Steviol Glycosides',
                  'Hemp Seed Globulin',
                  'CAS 13956-29-1',
                ].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/inquiry" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-md hover:bg-primary-container transition-all duration-300">
                  Wholesale Inquiry <ArrowRight size={16} />
                </Link>
                <Link href="/inquiry" className="inline-flex items-center gap-2 px-6 py-4 border border-outline/30 text-on-surface text-xs font-bold tracking-widest uppercase rounded-md hover:bg-surface-container transition-colors duration-200">
                  <Download size={14} />
                  Request Product Documentation
                </Link>
              </div>
            </div>

            <div className="reveal-card relative">
              <Image src="/images/products/cbd-crystal-closeup.jpg" alt="CBD Isolate 99.5% purity white crystalline powder" width={800} height={500} priority sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-[500px] object-cover" />
              <div className="absolute bottom-6 right-6 bg-on-background/90 backdrop-blur p-4">
                <p className="text-xs text-white/50 tracking-widest uppercase mb-1">CAS 13956-29-1</p>
                <p className="text-sm font-bold text-white">HS Code: 2907299020</p>
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
            <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-4">
              Product Information
            </h2>
            <p className="text-sm text-on-surface-variant mb-12 max-w-xl">
              Supporting documentation including COA, SDS, test reports, and other shipment documents may be provided according to order requirements. Specific documentation availability depends on actual batch, order terms, and verification results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {technicalMetrics.map((metric) => (
              <div key={metric.label} className="reveal-card bg-surface-container-lowest p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-1">{metric.label}</p>
                <p className="text-2xl font-extrabold text-on-surface tracking-tighter mb-1">{metric.value}</p>
                <p className="text-xs text-on-surface-variant/70">{metric.status}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card">
            <Link href="/inquiry" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-md hover:bg-primary-container transition-all duration-300">
              <Download size={14} />
              Request Product Information
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRODUCT SPECIFICATIONS ─────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={specsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="reveal-card">
              <SectionLabel>Product Specifications</SectionLabel>
              <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-8">Full Product Spec Sheet</h2>
              <div>
                <SpecRow label="Product Name" value="CBD Crystal" />
                <SpecRow label="CAS Number" value="13956-29-1" />
                <SpecRow label="HS Code" value="2907299020" />
                <SpecRow label="Packaging (Inner)" value="PE bags 5kg/bag (27×60cm, food grade) or Aluminum foil bags 5kg/bag (35×50cm, food grade)" />
                <SpecRow label="Packaging (Outer)" value="Export cartons 465×285×295mm, 2 bags per carton" />
                <SpecRow label="Palletization" value="Plastic pallets with shrink wrap" isLast />
              </div>
            </div>

            <div className="reveal-card">
              <SectionLabel>Compliance & Documentation</SectionLabel>
              <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-6">Batch Documentation & Export Compliance</h2>
              <div className="mb-6 p-4 bg-surface-container border-l-2 border-primary">
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-1">Export & Import Notice</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">
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
                    <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-on-surface">{item.standard}</p>
                      <p className="text-xs text-on-surface-variant">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALITY ASSURANCE BENTO ─────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={qualityRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card flex flex-wrap items-center gap-4 mb-12">
            <SectionLabel className="mb-0">Quality & Product Lines</SectionLabel>
            <div className="flex gap-3">
              {['CBD Crystal', 'Botanical Extracts', 'OEM/ODM'].map((cert) => (
                <span key={cert} className="px-3 py-1 bg-primary-fixed text-primary text-xs font-bold tracking-wider uppercase rounded-full">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <h2 className="reveal-card text-3xl font-extrabold text-on-background tracking-tighter mb-12 max-w-xl">
            CBD Isolate & Botanical Extracts for Global B2B Supply
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {qualityCards.map((card) => (
              <div key={card.title} className={`reveal-card ${card.bg} p-8`}>
                {card.image && (
                  <img src={card.image} alt={card.title} className="w-full h-40 object-cover mb-6" />
                )}
                <div className={`w-10 h-10 flex items-center justify-center mb-4 ${card.bg === 'bg-primary' ? 'bg-white/10' : 'bg-primary-fixed'}`}>
                  <card.icon size={20} className={card.bg === 'bg-primary' ? 'text-white' : 'text-primary'} />
                </div>
                <p className={`text-lg font-extrabold tracking-tighter mb-3 ${card.bg === 'bg-primary' ? 'text-white' : 'text-on-surface'}`}>
                  {card.title}
                </p>
                <p className={`text-xs leading-relaxed ${card.bg === 'bg-primary' ? 'text-white/70' : 'text-on-surface-variant'}`}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Botanical Extract Product Lines */}
          <div className="reveal-card mt-12 p-8 bg-surface-container-low">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">Additional Botanical Extract Products</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Anthocyanins', use: 'Functional formulations, food & beverage, personal care' },
                { name: 'Steviol Glycosides', use: 'Nutrition & health, food & beverage, functional sweeteners' },
                { name: 'Hemp Seed Globulin', use: 'Pharma R&D, nutrition & health, functional formulations' },
                { name: 'CBD Isolate', use: 'Pharma R&D, personal care, functional formulations' },
              ].map((product) => (
                <div key={product.name}>
                  <p className="text-sm font-bold text-on-surface mb-1">{product.name}</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{product.use}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Internal links to related pages */}
          <div className="reveal-card mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/quality-assurance" className="p-4 bg-surface-container-low hover:bg-surface-container transition-colors text-center">
              <p className="text-xs font-bold text-primary tracking-wider uppercase">Quality Assurance →</p>
              <p className="text-xs text-on-surface-variant mt-1">Documentation & testing details</p>
            </Link>
            <Link href="/wholesale-cbd-isolate" className="p-4 bg-surface-container-low hover:bg-surface-container transition-colors text-center">
              <p className="text-xs font-bold text-primary tracking-wider uppercase">Wholesale Inquiry →</p>
              <p className="text-xs text-on-surface-variant mt-1">Volume pricing & export terms</p>
            </Link>
            <Link href="/inquiry" className="p-4 bg-surface-container-low hover:bg-surface-container transition-colors text-center">
              <p className="text-xs font-bold text-primary tracking-wider uppercase">Contact Sales →</p>
              <p className="text-xs text-on-surface-variant mt-1">inquiry@vetrux.tech</p>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
