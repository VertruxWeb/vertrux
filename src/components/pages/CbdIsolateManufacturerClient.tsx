'use client'

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Factory, Leaf, FlaskConical, Globe, CheckCircle, Truck } from 'lucide-react';
import Link from 'next/link';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import SectionLabel from '@/components/atoms/SectionLabel';
import { useReveal } from '@/hooks/useReveal';

const capabilities = [
  { icon: Leaf, title: 'Cultivation & Breeding Center', desc: 'Cultivation and breeding center in Chuxiong, Yunnan Province. Standardized, traceable cultivation system focused on quality consistency.' },
  { icon: Factory, title: 'Extraction Facility', desc: '20 extraction tanks, 26 chromatography columns, and 10 concentrators — professional extraction and processing equipment for CBD raw materials.' },
  { icon: FlaskConical, title: 'Analytical Capability', desc: 'In-house HPLC analytical system with automation control supporting quality management.' },
  { icon: CheckCircle, title: 'OEM/ODM Services', desc: 'Raw material support, formulation development, production, packaging design, and finished product delivery.' },
  { icon: Globe, title: 'Technical Support', desc: 'Cultivation management, extraction process optimization, cost control, and cannabinoid extraction consulting services.' },
  { icon: Truck, title: 'Packaging', desc: '5 kg PE bags (27×60cm), 5 kg aluminum foil bags (35×50cm), export cartons (465×285×295 mm), plastic pallets with shrink wrap.' },
];

const differentiators = [
  { metric: '20', label: 'Extraction Tanks', detail: 'Processing equipment' },
  { metric: '26', label: 'Chromatography Columns', detail: 'Separation & purification' },
  { metric: '10', label: 'Concentrators', detail: 'Extract concentration' },
  { metric: 'HPLC', label: 'Analytical System', detail: 'Quality control analysis' },
  { metric: '—', label: 'Automation', detail: 'Explosion-proof control' },
  { metric: '3', label: 'Service Lines', detail: 'CBD isolate, OEM/ODM, technical services' },
];

const markets = [
  { region: 'B2B Cooperation', detail: 'Vetrux supports brand clients, channel partners, trading companies, and partners with stable procurement needs through standard supply, long-term supply, and project-based cooperation.' },
  { region: 'OEM/ODM', detail: 'Raw material support, formulation development, production, packaging design, and finished product delivery — supporting clients in product development and market launch.' },
  { region: 'Technical Support', detail: 'Cultivation management, yield and content optimization, extraction process optimization, cost control, and cannabinoid extraction consulting.' },
  { region: 'Compliance Note', detail: 'Destination country import compliance — including permits, licenses, and regulatory approvals — is the buyer/importer responsibility. Documentation arranged per order terms.' },
];

export default function CbdIsolateManufacturerClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const capsRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const marketsRef = useRef<HTMLDivElement>(null);

  useReveal(heroRef, { y: 40, stagger: 0.1, start: 'top 80%' });
  useReveal(capsRef, { y: 40, stagger: 0.08, start: 'top 80%' });
  useReveal(metricsRef, { y: 40, stagger: 0.08, start: 'top 80%' });
  useReveal(marketsRef, { y: 40, stagger: 0.1, start: 'top 80%' });

  return (
    <div className="bg-surface">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-card">
              <Badge variant="default" className="mb-6">Manufacturer Profile</Badge>
              <h1 className="text-5xl md:text-6xl font-serif font-medium text-on-background tracking-tight leading-[1.0] mb-6">
                CBD Isolate
                <br />
                <span className="italic text-primary">Manufacturer</span>
              </h1>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-8 max-w-md">
                Vetrux Biotechnology (Chuxiong) Co., Ltd. (&ldquo;VETRUX&rdquo;) is based in Yunnan, China — equipped with 20 extraction tanks, 26 chromatography columns, 10 concentrators, and HPLC analytical capability with automation control. VETRUX provides CBD raw materials, OEM/ODM services, and technical support.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['CBD Raw Materials', 'OEM/ODM', 'Technical Support'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/inquiry">
                  <Button variant="accent" size="lg" icon={ArrowRight}>Contact Manufacturer</Button>
                </Link>
                <Link href="/equipment">
                  <Button variant="outline" size="lg">View Facility</Button>
                </Link>
              </div>
            </div>
            <div className="reveal-card">
              <div className="relative w-full h-[500px] overflow-hidden">
                <Image src="/images/gallery/campus-buildings.webp" alt="VETRUX CBD isolate manufacturing facility campus" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ──────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={capsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>Manufacturing Capabilities</SectionLabel>
            <h2 className="text-3xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">
              End-to-End Production Infrastructure
            </h2>
            <p className="text-[15px] text-on-surface-variant max-w-xl">
              Full vertical integration from hemp cultivation to finished isolate — eliminating
              supply chain intermediaries and ensuring complete batch traceability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                tabIndex={0}
                className="reveal-card bg-surface-container-lowest p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <cap.icon size={20} className="text-primary mb-4" />
                <p className="text-sm font-extrabold text-on-surface tracking-tighter mb-2">{cap.title}</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-8">
            <p className="text-xs text-on-surface-variant">
              Learn more about our products:{' '}
              <Link href="/products/cbd-isolate" className="text-accent underline">
                View product information →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── KEY METRICS ───────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={metricsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>Key Specifications</SectionLabel>
            <h2 className="text-3xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">
              Production at a Glance
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {differentiators.map((d) => (
              <div key={d.label} className="reveal-card bg-surface-container-lowest p-6 text-center border-l-2 border-transparent hover:border-accent transition-colors duration-200">
                <p className="text-2xl font-serif font-semibold text-primary tracking-tight mb-1">{d.metric}</p>
                <p className="text-xs font-semibold text-on-surface tracking-wider uppercase mb-1">{d.label}</p>
                <p className="text-xs text-on-surface-variant">{d.detail}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-8 text-center">
            <Link href="/products/cbd-isolate" className="text-xs text-accent underline">
              View full product specifications →
            </Link>
          </div>
        </div>
      </section>

      {/* ── MARKETS SERVED ────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={marketsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>Business Scope</SectionLabel>
            <h2 className="text-3xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">
              Cooperation & Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {markets.map((m) => (
              <div
                key={m.region}
                tabIndex={0}
                className="reveal-card flex gap-4 bg-surface-container-lowest p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <Globe size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-extrabold text-on-surface tracking-tighter mb-1">{m.region}</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-12 text-center">
            <Link href="/inquiry">
              <Button variant="accent" size="lg" icon={ArrowRight}>Contact Us</Button>
            </Link>
            <p className="text-xs text-on-surface-variant mt-4">
              Supporting documentation may be provided according to order requirements.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
