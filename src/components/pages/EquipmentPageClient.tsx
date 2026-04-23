'use client'

import { useRef } from 'react';
import { CheckCircle, Download } from 'lucide-react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '@/components/atoms/Badge';
import SectionLabel from '@/components/atoms/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const equipment = [
  {
    id: '01',
    name: '6m³ Multi-Function Extraction Tanks',
    model: '×20 Sets',
    image: '/images/equipment/extraction-tanks.jpg',
    specs: [
      { label: 'Volume', value: '6,000 L' },
      { label: 'Quantity', value: '20 Sets' },
      { label: 'Material', value: 'SUS316L Stainless Steel' },
      { label: 'Function', value: 'Multi-Function Extraction' },
    ],
    desc: 'Twenty industrial-scale 6m³ multi-function extraction tanks form the core of our extraction line, enabling high-volume processing of hemp biomass with precise temperature and solvent control.',
  },
  {
    id: '02',
    name: '700L Chromatography Columns',
    model: '×26 Columns',
    image: '/images/equipment/chromatography-upper.jpg',
    specs: [
      { label: 'Volume', value: '700 L' },
      { label: 'Quantity', value: '26 Columns' },
      { label: 'Function', value: 'Cannabinoid Separation & Purification' },
    ],
    desc: 'A bank of 26 industrial chromatography columns provides large-scale cannabinoid separation and purification, achieving high-purity CBD isolate through precise gradient elution.',
  },
  {
    id: '03',
    name: '2000L Single/Double-Effect Concentrators',
    model: '×10 Sets',
    image: '/images/equipment/concentrator-2000l.jpg',
    specs: [
      { label: 'Capacity', value: '2,000 L/h' },
      { label: 'Quantity', value: '10 Sets' },
      { label: 'Function', value: 'Extract Concentration' },
    ],
    desc: 'Ten 2000L single and double-effect concentrators efficiently reduce solvent volume and concentrate extract streams under vacuum, minimizing thermal degradation of active compounds.',
  },
  {
    id: '04',
    name: '1000-Type Solvent Recovery Tower',
    model: '×2 Sets',
    image: '/images/equipment/solvent-recovery-tower.jpg',
    specs: [
      { label: 'Type', value: '1000' },
      { label: 'Quantity', value: '2 Sets' },
      { label: 'Function', value: 'Solvent Recovery & Recycling' },
    ],
    desc: 'Two 1000-type solvent recovery towers reclaim and recycle ethanol used in the extraction process, reducing operational costs and environmental impact while maintaining solvent purity.',
  },
  {
    id: '05',
    name: '5m³ Ethanol Recovery Storage Tanks',
    model: '×10 Sets',
    image: '/images/equipment/ethanol-storage-tanks.jpg',
    specs: [
      { label: 'Volume', value: '5 m³' },
      { label: 'Quantity', value: '10 Sets' },
      { label: 'Function', value: 'Ethanol Recovery Storage' },
    ],
    desc: 'Ten 5m³ storage tanks provide safe, explosion-proof containment for recovered ethanol, ensuring continuous solvent supply to the extraction line with full safety compliance.',
  },
  {
    id: '06',
    name: 'HPLC Analytical System',
    model: 'Thermo Dionex UltiMate 3000',
    image: '/images/equipment/hplc-system.jpg',
    specs: [
      { label: 'Brand', value: 'Thermo Scientific' },
      { label: 'Model', value: 'UltiMate 3000' },
      { label: 'Function', value: 'Quality Control Analysis' },
    ],
    desc: 'The Thermo Dionex UltiMate 3000 HPLC system provides precise cannabinoid profiling and potency analysis, ensuring every batch meets strict quality specifications before release.',
  },
  {
    id: '07',
    name: 'Explosion-Proof Automation Control System',
    model: 'Siemens HMI',
    image: '/images/equipment/automation-control.jpg',
    specs: [
      { label: 'Brand', value: 'Siemens HMI' },
      { label: 'Function', value: 'Process Monitoring & Control' },
      { label: 'Safety', value: 'Explosion-Proof Rated' },
    ],
    desc: 'A Siemens HMI-based automation control system monitors and manages the entire production line in real time, with explosion-proof certification for safe operation in solvent-rich environments.',
  },
  {
    id: '08',
    name: 'Automatic Residue Discharge System',
    model: 'Integrated',
    image: '/images/equipment/residue-discharge.jpg',
    specs: [
      { label: 'Function', value: 'Automatic Slag Removal' },
      { label: 'Integration', value: 'Fully Automated' },
    ],
    desc: 'The automatic residue discharge system removes spent biomass from extraction tanks without manual intervention, improving throughput and maintaining cleanroom conditions throughout production.',
  },
];

const specsTable = [
  { name: '6m³ Multi-Function Extraction Tanks', model: '×20 Sets', function: 'Multi-Function Extraction', cgmp: 'SUS316L / CIP/SIP' },
  { name: '700L Chromatography Columns', model: '×26 Columns', function: 'Cannabinoid Separation & Purification', cgmp: 'GMP Compliant' },
  { name: '2000L Single/Double-Effect Concentrators', model: '×10 Sets', function: 'Extract Concentration', cgmp: 'Vacuum Operation' },
  { name: '1000-Type Solvent Recovery Tower', model: '×2 Sets', function: 'Solvent Recovery & Recycling', cgmp: 'Explosion-Proof' },
  { name: '5m³ Ethanol Recovery Storage Tanks', model: '×10 Sets', function: 'Ethanol Recovery Storage', cgmp: 'Safety Certified' },
  { name: 'HPLC Analytical System', model: 'UltiMate 3000', function: 'Quality Control Analysis', cgmp: 'Thermo Scientific' },
  { name: 'Explosion-Proof Automation Control', model: 'Siemens HMI', function: 'Process Monitoring & Control', cgmp: 'Ex-Proof Rated' },
  { name: 'Automatic Residue Discharge System', model: 'Integrated', function: 'Automatic Slag Removal', cgmp: 'Fully Automated' },
];

export default function EquipmentPageClient() {
  const cgmpRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cgmpRef.current) return;
    const items = cgmpRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: cgmpRef.current, start: 'top 80%' },
    });
  }, { scope: cgmpRef });

  useGSAP(() => {
    if (!showcaseRef.current) return;
    const items = showcaseRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: showcaseRef.current, start: 'top 80%' },
    });
  }, { scope: showcaseRef });

  useGSAP(() => {
    if (!tableRef.current) return;
    const items = tableRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: tableRef.current, start: 'top 80%' },
    });
  }, { scope: tableRef });

  return (
    <div className="bg-surface">

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="default" className="mb-6">Production Excellence</Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold text-on-background tracking-tighter leading-[0.95] mb-6">
                Industrial-Grade
                <br />
                <span className="text-primary">Extraction Facility</span>
              </h1>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8 max-w-md">
                Our industrial-scale CBD extraction and purification facility in Chuxiong, Yunnan operates over 80 major equipment units across extraction, chromatography, concentration, and quality control — delivering seed-to-isolate capability under full GMP compliance.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Industrial Scale', 'GMP Standard', 'Full Automation', 'Seed-to-Isolate'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src="/images/equipment/chromatography-column-700L.webp" alt="Industrial extraction facility" className="w-full h-[500px] object-cover" />
              <div className="absolute bottom-6 right-6 bg-on-background/90 backdrop-blur p-4">
                <p className="text-xs text-white/50 tracking-widest uppercase mb-1">Facility Scale</p>
                <p className="text-sm font-bold text-white">Chuxiong, Yunnan · 80+ Equipment Units</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── cGMP STANDARDS SECTION ─────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={cgmpRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="reveal-card lg:col-span-8 bg-surface-container-lowest p-10">
              <SectionLabel>Manufacturing Standards</SectionLabel>
              <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-8">cGMP Manufacturing Standards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Construction Material', value: 'SUS316L Stainless Steel Throughout' },
                  { label: 'Cleaning Protocol', value: 'CIP/SIP Integrated Cleaning System' },
                  { label: 'Safety Controls', value: 'Explosion-Proof Automation (Siemens)' },
                  { label: 'Environment', value: 'Cleanroom Production Facility' },
                  { label: 'Batch Records', value: 'Full Batch Traceability System' },
                  { label: 'Process Control', value: 'Real-Time HMI Monitoring' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-semibold text-on-surface mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-card lg:col-span-4 bg-primary p-10 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-4">Certification</p>
                <p className="text-3xl font-extrabold text-white tracking-tighter leading-tight mb-4">
                  cGMP Compliant<br />Production Facility
                </p>
                <p className="text-xs text-white/60 leading-relaxed">
                  Our Chuxiong facility operates under cGMP standards with SUS316L construction, CIP/SIP cleaning, explosion-proof controls, and full batch traceability across all production stages.
                </p>
              </div>
              <Link href="/inquiry" className="mt-8 inline-flex items-center gap-2 px-5 py-3 bg-white text-primary text-xs font-bold tracking-widest uppercase hover:bg-primary-fixed transition-colors duration-200">
                <Download size={14} />
                Request Facility Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── EQUIPMENT SHOWCASE ─────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={showcaseRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <SectionLabel>Equipment Showcase</SectionLabel>
            <h2 className="text-4xl font-extrabold text-on-background tracking-tighter mb-16 max-w-xl">Precision-Engineered at Every Stage</h2>
          </div>

          <div className="space-y-24">
            {equipment.map((equip, idx) => (
              <div key={equip.id} className={`reveal-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img src={equip.image} alt={equip.name} className="w-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-on-background/80 text-white text-xs font-mono tracking-wider">#{equip.id}</span>
                  </div>
                </div>

                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-3">Model: {equip.model}</p>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-on-background tracking-tighter mb-4">{equip.name}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-8">{equip.desc}</p>
                  <div className="space-y-0">
                    {equip.specs.map((spec, i) => (
                      <div key={spec.label} className={`flex justify-between items-center py-3 ${i < equip.specs.length - 1 ? 'border-b border-outline-variant/30' : ''}`}>
                        <span className="text-xs font-semibold tracking-wider uppercase text-on-surface-variant">{spec.label}</span>
                        <span className="text-sm font-bold text-on-surface">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECS TABLE ────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={tableRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <SectionLabel>Full Specifications</SectionLabel>
            <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-12">Equipment Overview Table</h2>
          </div>

          <div className="reveal-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary/30">
                  {['Equipment Name', 'Model Range', 'Process Function', 'cGMP Standard'].map((col) => (
                    <th key={col} className="text-left text-xs font-semibold tracking-widest uppercase text-on-surface-variant pb-4 pr-8">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specsTable.map((row, i) => (
                  <tr key={row.name} className={`border-b border-outline-variant/20 ${i % 2 === 0 ? 'bg-surface-container-lowest/50' : ''}`}>
                    <td className="py-5 pr-8 font-semibold text-on-surface">{row.name}</td>
                    <td className="py-5 pr-8 font-mono text-xs text-on-surface-variant">{row.model}</td>
                    <td className="py-5 pr-8 text-on-surface-variant">{row.function}</td>
                    <td className="py-5 text-xs font-semibold text-primary">{row.cgmp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
