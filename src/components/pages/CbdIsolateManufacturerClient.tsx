'use client'

import { useRef } from 'react';
import { ArrowRight, Factory, Leaf, FlaskConical, Globe, CheckCircle, Truck } from 'lucide-react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '@/components/atoms/Badge';
import SectionLabel from '@/components/atoms/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  { icon: Leaf, title: 'Cultivation & Breeding Center', desc: 'Cultivation and breeding center in Chuxiong, Yunnan Province. Standardized, traceable cultivation system focused on quality consistency.' },
  { icon: Factory, title: 'Extraction Facility', desc: '20 extraction tanks, 26 chromatography columns, and 10 concentrators — professional extraction and processing equipment for CBD and botanical extracts.' },
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
  { metric: '3', label: 'Product Lines', detail: 'CBD + botanical extracts' },
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

  useGSAP(() => {
    if (!heroRef.current) return;
    gsap.from(heroRef.current.querySelectorAll('.reveal-card'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: heroRef.current, start: 'top 80%' },
    });
  }, { scope: heroRef });

  useGSAP(() => {
    if (!capsRef.current) return;
    gsap.from(capsRef.current.querySelectorAll('.reveal-card'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: capsRef.current, start: 'top 80%' },
    });
  }, { scope: capsRef });

  useGSAP(() => {
    if (!metricsRef.current) return;
    gsap.from(metricsRef.current.querySelectorAll('.reveal-card'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: metricsRef.current, start: 'top 80%' },
    });
  }, { scope: metricsRef });

  useGSAP(() => {
    if (!marketsRef.current) return;
    gsap.from(marketsRef.current.querySelectorAll('.reveal-card'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: marketsRef.current, start: 'top 80%' },
    });
  }, { scope: marketsRef });

  return (
    <div className="bg-surface">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-card">
              <Badge variant="default" className="mb-6">Manufacturer Profile</Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold text-on-background tracking-tighter leading-[0.95] mb-6">
                CBD Isolate
                <br />
                <span className="text-primary">Manufacturer</span>
              </h1>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8 max-w-md">
                Vetrux Biotechnology (Chuxiong) Co., Ltd. is based in Yunnan, China — equipped with 20 extraction tanks, 26 chromatography columns, 10 concentrators, and HPLC analytical capability with automation control. Providing CBD raw materials, OEM/ODM services, technical support, and botanical extracts.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['CBD Raw Materials', 'OEM/ODM', 'Technical Support', 'Botanical Extracts'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/inquiry" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-md hover:bg-primary-container transition-all duration-300">
                  Contact Manufacturer <ArrowRight size={16} />
                </Link>
                <Link href="/equipment" className="inline-flex items-center gap-2 px-6 py-4 border border-outline/30 text-on-surface text-xs font-bold tracking-widest uppercase rounded-md hover:bg-surface-container transition-colors duration-200">
                  View Facility
                </Link>
              </div>
            </div>
            <div className="reveal-card">
              <img src="/images/gallery/campus-buildings.webp" alt="Vetrux CBD isolate manufacturing facility campus" className="w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ──────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={capsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>Manufacturing Capabilities</SectionLabel>
            <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-4">
              End-to-End Production Infrastructure
            </h2>
            <p className="text-sm text-on-surface-variant max-w-xl">
              Full vertical integration from hemp cultivation to finished isolate — eliminating
              supply chain intermediaries and ensuring complete batch traceability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap) => (
              <div key={cap.title} className="reveal-card bg-surface-container-lowest p-6">
                <cap.icon size={20} className="text-primary mb-4" />
                <p className="text-sm font-extrabold text-on-surface tracking-tighter mb-2">{cap.title}</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-8">
            <p className="text-xs text-on-surface-variant">
              Learn more about our products:{' '}
              <Link href="/products/cbd-isolate" className="text-primary underline">
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
            <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-4">
              Production at a Glance
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {differentiators.map((d) => (
              <div key={d.label} className="reveal-card bg-surface-container-lowest p-6 text-center">
                <p className="text-2xl font-extrabold text-primary tracking-tighter mb-1">{d.metric}</p>
                <p className="text-xs font-semibold text-on-surface tracking-wider uppercase mb-1">{d.label}</p>
                <p className="text-xs text-on-surface-variant">{d.detail}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-8 text-center">
            <Link href="/products/cbd-isolate" className="text-xs text-primary underline">
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
            <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-4">
              Cooperation & Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {markets.map((m) => (
              <div key={m.region} className="reveal-card flex gap-4 bg-surface-container-lowest p-6">
                <Globe size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-extrabold text-on-surface tracking-tighter mb-1">{m.region}</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-12 text-center">
            <Link href="/inquiry" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-md hover:bg-primary-container transition-all duration-300">
              Contact Us <ArrowRight size={16} />
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
