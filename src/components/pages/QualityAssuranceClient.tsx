'use client'

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Shield, FileCheck, Microscope, FlaskConical, Download } from 'lucide-react';
import Link from 'next/link';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import SectionLabel from '@/components/atoms/SectionLabel';
import { useReveal } from '@/hooks/useReveal';

const documentationItems = [
  { icon: Microscope, title: 'HPLC Analytical Capability', detail: 'In-house HPLC system for analytical testing support.' },
  { icon: FlaskConical, title: 'Certificate of Analysis (COA)', detail: 'May be provided according to order requirements and actual batch availability.' },
  { icon: Shield, title: 'Safety Data Sheet (SDS)', detail: 'May be provided according to order requirements.' },
  { icon: FileCheck, title: 'Test Reports', detail: 'May be provided according to order requirements and actual batch availability.' },
  { icon: Shield, title: 'Commercial Invoice & Packing List', detail: 'Provided per shipment.' },
  { icon: FileCheck, title: 'Other Supporting Documents', detail: 'Additional documentation may be arranged according to actual order terms and destination requirements.' },
];

const qaApproach = [
  { step: '01', title: 'Cultivation Management', desc: 'Quality-oriented seed selection and standardized cultivation processes at the Chuxiong, Yunnan base.' },
  { step: '02', title: 'Extraction & Processing', desc: 'Professional extraction facility equipped with 20 extraction tanks, 26 chromatography columns, and 10 concentrators with automation control.' },
  { step: '03', title: 'Analytical Testing Capability', desc: 'In-house HPLC analytical system supporting quality management activities.' },
  { step: '04', title: 'Documentation Support', desc: 'Supporting documents including COA, SDS, test reports, and other shipment documents may be provided according to order requirements.' },
  { step: '05', title: 'Packaging & Shipment', desc: 'Standardized packaging (5 kg PE bags, 5 kg aluminum foil bags, export cartons) with documentation arranged per order terms.' },
];

const downloadableDocuments = [
  {
    title: 'GHS Safety Data Sheet (SDS)',
    desc: 'GHS SDS Report for CBD Isolate — hazard classification, handling, storage, and transport information.',
    href: '/documents/vetrux-cbd-isolate-sds-report.pdf',
    format: 'PDF',
  },
  {
    title: 'CBD Isolate Test Report (COA)',
    desc: 'Third-party laboratory analysis report for CBD content, purity, and compliance testing.',
    href: '/documents/vetrux-cbd-test-report.pdf',
    format: 'PDF',
  },
];

export default function QualityAssuranceClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const docsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);

  useReveal(heroRef, { y: 40, stagger: 0.1, start: 'top 80%' });
  useReveal(docsRef, { y: 40, stagger: 0.08, start: 'top 80%' });
  useReveal(processRef, { y: 40, stagger: 0.1, start: 'top 80%' });
  useReveal(certsRef, { y: 40, stagger: 0.08, start: 'top 80%' });

  return (
    <div className="bg-surface">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-card">
              <Badge variant="default" className="mb-6">Quality Management</Badge>
              <h1 className="text-5xl md:text-6xl font-serif font-medium text-on-background tracking-tight leading-[1.0] mb-6">
                Quality
                <br />
                <span className="italic text-primary">Management</span>
              </h1>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-6 max-w-md">
                VETRUX focuses on consistency in raw materials, process, and delivery.
                Our Chuxiong facility is equipped with HPLC analytical capability
                to support quality management activities.
              </p>
              <p className="text-xs text-on-surface-variant/80 leading-relaxed mb-8 max-w-md">
                Supporting documentation including COA, SDS, test reports, and other shipment documents
                may be provided according to order requirements. Specific documentation availability depends
                on actual batch, order terms, and verification results.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['HPLC Capability', 'Documentation Support', 'Standardized Process'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/inquiry">
                  <Button variant="accent" size="lg" icon={ArrowRight}>Contact Us</Button>
                </Link>
                <Link href="/products/cbd-isolate">
                  <Button variant="outline" size="lg">View Products</Button>
                </Link>
              </div>
            </div>
            <div className="reveal-card">
              <div className="relative w-full h-[500px]">
                <Image src="/images/equipment/chromatography-column-700L.webp" alt="Vetrux facility equipment" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOCUMENTATION SUPPORT ────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={docsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>Documentation</SectionLabel>
            <h2 className="text-3xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">
              Documentation & Compliance Support
            </h2>
            <p className="text-[15px] text-on-surface-variant max-w-xl">
              Vetrux can provide supporting documentation according to order requirements.
              Destination country import compliance is the buyer/importer&apos;s responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {documentationItems.map((item) => (
              <div
                key={item.title}
                tabIndex={0}
                className="reveal-card bg-surface-container-lowest p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <item.icon size={20} className="text-primary mb-4" />
                <p className="text-sm font-extrabold text-on-surface tracking-tighter mb-2">{item.title}</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-8">
            <p className="text-xs text-on-surface-variant">
              For documentation inquiries, contact <a href="mailto:inquiry@vetrux.tech" className="text-accent underline">inquiry@vetrux.tech</a>.
            </p>
          </div>
        </div>
      </section>

      {/* ── QA APPROACH ──────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={processRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>Approach</SectionLabel>
            <h2 className="text-3xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">
              Quality Management Approach
            </h2>
          </div>

          <div className="space-y-4">
            {qaApproach.map((item) => (
              <div
                key={item.step}
                tabIndex={0}
                className="reveal-card flex gap-6 bg-surface-container-lowest p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary text-white text-sm font-extrabold">
                  {item.step}
                </div>
                <div>
                  <p className="text-sm font-extrabold text-on-surface tracking-tighter mb-1">{item.title}</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-12 text-center">
            <Link href="/inquiry">
              <Button variant="accent" size="lg" icon={ArrowRight}>Contact Us</Button>
            </Link>
            <p className="text-xs text-on-surface-variant mt-4">
              Product labels, usage declarations, and customs descriptions should match actual batch, order purpose, and destination country requirements. Destination country regulatory compliance is the buyer/importer&apos;s responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* ── DOWNLOADS ─────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={certsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-6">
            <SectionLabel>Downloads</SectionLabel>
            <h2 className="text-3xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">
              Downloadable Documents
            </h2>
            <p className="text-[15px] text-on-surface-variant max-w-xl">
              Product documentation for reference. Batch-specific documents are provided with each order.
              Additional certifications and regulatory documents are available upon request.
            </p>
          </div>

          <div className="space-y-3">
            {downloadableDocuments.map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-card flex items-center justify-between gap-6 bg-surface-container-lowest p-6 group hover:bg-surface-container border-l-2 border-transparent hover:border-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-extrabold text-on-surface tracking-tighter mb-1">{doc.title}</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{doc.desc}</p>
                </div>
                <div className="flex-shrink-0 flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant">{doc.format}</span>
                  <div className="w-10 h-10 flex items-center justify-center bg-accent text-white rounded-md group-hover:bg-accent-hover transition-colors duration-200">
                    <Download size={16} />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="reveal-card mt-8">
            <p className="text-xs text-on-surface-variant">
              For additional documentation, certifications, or certified translations, contact <a href="mailto:inquiry@vetrux.tech" className="text-accent underline">inquiry@vetrux.tech</a>.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
