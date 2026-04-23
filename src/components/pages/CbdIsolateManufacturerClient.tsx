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
  { icon: Leaf, title: 'Yunnan Hemp Cultivation Base', desc: 'Proprietary hemp cultivation in Yunnan Province — high-altitude, UV-rich growing conditions producing biomass with consistently high CBD content and low THC expression.' },
  { icon: Factory, title: 'Industrial-Scale Extraction', desc: '20 extraction tanks at 6 m³ each — large-scale supercritical CO₂ extraction capacity. Solvent-free process producing clean crude with minimal post-processing burden.' },
  { icon: FlaskConical, title: 'Chromatographic Purification', desc: '26 preparative chromatography columns (700 L each) plus 10 concentrators for precise cannabinoid separation. Multi-stage crystallization achieving ≥99.5% CBD purity.' },
  { icon: CheckCircle, title: 'HPLC Quality Control Lab', desc: 'Dedicated in-house HPLC laboratory for full analytical panel testing. Siemens automation system ensures process consistency. Every batch verified before release.' },
  { icon: Globe, title: 'Global Export Infrastructure', desc: 'FOB Kunming/Chuxiong, CIF, and DDP shipping terms. Full export documentation and customs support. Buyer/importer responsible for destination-country regulatory compliance.' },
  { icon: Truck, title: 'Flexible Packaging & OEM/ODM', desc: '5 kg PE bags, 5 kg aluminum foil bags, export cartons (465×285×295 mm). OEM/ODM services, private-label packaging, and contract manufacturing available.' },
];

const differentiators = [
  { metric: '≥99.5%', label: 'CBD Purity', detail: 'HPLC verified, batch-specific COA' },
  { metric: 'ND', label: 'THC Content', detail: 'Non-detect by GC-MS' },
  { metric: '20×6m³', label: 'Extraction Tanks', detail: '20 tanks, industrial-scale CO₂' },
  { metric: '26×700L', label: 'Chromatography', detail: '26 preparative columns' },
  { metric: '10', label: 'Concentrators', detail: 'Post-extraction processing' },
  { metric: 'Siemens', label: 'Automation', detail: 'Integrated process control' },
];

const markets = [
  { region: 'European Union', detail: 'FOB, CIF, and DDP delivery to major EU ports. General compliance documentation provided; buyer/importer responsible for Novel Food and destination-country regulatory requirements.' },
  { region: 'United Kingdom', detail: 'FOB, CIF, and DDP to UK ports. Export documentation and COA provided; buyer/importer responsible for FSA Novel Food and UK-specific compliance.' },
  { region: 'North America', detail: 'FOB and CIF terms available. Batch documentation and COA provided; buyer/importer responsible for FDA and destination-country regulatory compliance.' },
  { region: 'APAC', detail: 'FOB and CIF shipping to Asia-Pacific markets. Full export documentation provided; buyer/importer responsible for all destination-country regulatory requirements and import permits.' },
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
                Vetrux Biotechnology (Chuxiong) is a CBD isolate manufacturer in Yunnan, China — operating 20 extraction tanks (6 m³), 26 chromatography columns (700 L), and a dedicated HPLC quality control lab with Siemens automation. Supplying B2B buyers globally with ≥99.5% purity CBD isolate, OEM/ODM services, and botanical extracts.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Seed-to-Isolate', 'CO₂ Extraction', 'cGMP Facility', 'Global Export'].map((tag) => (
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
              Learn about our extraction technology:{' '}
              <Link href="/blog/co2-vs-ethanol-extraction-comparison" className="text-primary underline">
                CO₂ vs ethanol extraction comparison →
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
            <SectionLabel>Markets Served</SectionLabel>
            <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-4">
              Global B2B Supply
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
              Request Manufacturer Documentation <ArrowRight size={16} />
            </Link>
            <p className="text-xs text-on-surface-variant mt-4">
              Facility certifications, batch COAs, and audit access available to qualified buyers.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
