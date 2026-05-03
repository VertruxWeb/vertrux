'use client'

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

const technicalMetrics = [
  { label: 'Product', value: 'CBD Isolate', status: 'Cannabidiol Isolate' },
  { label: 'Quality Review', value: 'HPLC', status: 'In-house analytical capability' },
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

const productAnswers = [
  {
    question: 'What is Vetrux CBD isolate?',
    answer:
      'Vetrux CBD isolate is a crystalline CBD raw material supplied for qualified B2B discussions, with product information, packaging details, and documentation support available by order requirements.',
  },
  {
    question: 'What packaging formats are available?',
    answer:
      'Available packaging includes 5 kg PE bags or 5 kg aluminum-foil bags packed in export cartons. Palletization with shrink wrap may be arranged according to order requirements.',
  },
  {
    question: 'What documents can be requested?',
    answer:
      'Buyers can request COA, SDS, test reports, product information, commercial invoice, packing list, and shipment documents. Batch-specific availability depends on actual batch, order terms, and verification results.',
  },
  {
    question: 'Who is responsible for import compliance?',
    answer:
      "Destination-country import compliance, including permits, licenses, approvals, labels, and customs declarations, is the buyer/importer's responsibility. Vetrux can provide documentation support by order terms.",
  },
];

export default function ProductPageClient() {
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
              <Badge variant="default" className="mb-6">CBD Raw Materials</Badge>
              <h1 className="font-serif font-medium text-[clamp(2.4rem,5.5vw,4.5rem)] text-on-background tracking-tight leading-[1.0] mb-6">
                CBD Isolate
                <br />
                <span className="italic text-primary">Specifications</span>
              </h1>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-8 max-w-md">
                CBD isolate product information for qualified bulk buyers, with in-house HPLC
                analytical capability, packaging details, COA/SDS request options, and
                export-ready packaging support.
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
                  Request Spec Sheet
                </Button>
                <Button variant="secondary" size="lg" icon={Download} iconPosition="left" onClick={() => openDocumentModal('COA')}>
                  Request COA
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
            <SectionLabel>Technical Analysis</SectionLabel>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-4">
              CBD isolate product information and documentation
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
            <Button variant="accent" size="md" icon={Download} iconPosition="left" onClick={() => openDocumentModal('both')}>
              Request Spec Sheet
            </Button>
          </div>
        </div>
      </section>

      {/* ── GEO ANSWERS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-10">
            <SectionLabel>Buyer Answers</SectionLabel>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05]">
              CBD isolate specification answers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {productAnswers.map((item) => (
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
                <SpecRow label="Quality Review" value="In-house HPLC analytical capability; batch-specific documentation depends on actual batch, order terms, and verification results" />
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

      <DocumentRequestModal
        isOpen={isDocumentModalOpen}
        onClose={() => setIsDocumentModalOpen(false)}
        defaultDocumentType={documentModalType}
        sourcePage="/products/cbd-isolate"
        productInterest="CBD Isolate"
      />

    </div>
  );
}
