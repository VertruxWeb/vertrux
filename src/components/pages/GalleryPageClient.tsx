'use client'

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/atoms/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const sectors = [
  {
    id: 'S01',
    label: 'Sector 01 — Architectural Excellence',
    title: 'Main Campus & Infrastructure',
    description: 'Our GMP-compliant industrial park in Yunnan houses extraction, refinement, and quality-control operations under one roof — purpose-built for full vertical integration.',
    images: [
      { src: '/images/gallery/campus-aerial.png', alt: 'Aerial view of Vetrux industrial campus with surrounding mountains', span: 'col-span-1 row-span-2' },
      { src: '/images/gallery/campus-buildings.webp', alt: 'Campus buildings with landscaped grounds', span: 'col-span-1' },
      { src: '/images/gallery/processing-workshop.webp', alt: 'Modern processing workshop exterior', span: 'col-span-1' },
    ],
    stat: { label: 'Facility Area', value: '30,000 m²' },
    eco: '8 Production Buildings',
  },
  {
    id: 'S02',
    label: 'Sector 02 — Raw Material Purity',
    title: 'Planting Base & Cultivation',
    description: 'High-altitude hemp cultivation across Yunnan province — from seedling propagation through flowering — ensures consistent cannabinoid profiles and full traceability.',
    images: [
      { src: '/images/gallery/cultivation-field.jpg', alt: 'Hemp field under hoop-house frame structures', span: 'col-span-2 row-span-2' },
      { src: '/images/gallery/cultivation-base-wide.jpg', alt: 'Wide view of cultivation base with mountain backdrop', span: 'col-span-1' },
      { src: '/images/gallery/cultivation-base-rows.jpg', alt: 'Rows of tall hemp plants in greenhouse frames', span: 'col-span-1' },
      { src: '/images/planting/flowering-greenhouse.jpg', alt: 'Flowering hemp in controlled greenhouse environment', span: 'col-span-1' },
      { src: '/images/planting/flowering-cola-closeup.jpg', alt: 'Close-up of flowering hemp cola', span: 'col-span-1' },
    ],
    stat: { label: 'Cultivation Area', value: '5,000+ Acres' },
    eco: 'Yunnan Altitude 1,800 m+',
  },
  {
    id: 'S03',
    label: 'Sector 03 — Technical Precision',
    title: 'Extraction & Refinement',
    description: 'Industrial-scale ethanol extraction paired with multi-stage chromatography and molecular distillation — delivering pharma-grade cannabinoid isolates at volume.',
    images: [
      { src: '/images/equipment/extraction-tanks.jpg', alt: 'Stainless steel extraction tank array', span: 'col-span-1' },
      { src: '/images/equipment/chromatography-upper.jpg', alt: 'Chromatography column upper section', span: 'col-span-1' },
      { src: '/images/equipment/concentrator-system.jpg', alt: 'Industrial concentrator system', span: 'col-span-1' },
      { src: '/images/equipment/hplc-system.jpg', alt: 'HPLC analytical system for quality control', span: 'col-span-1' },
      { src: '/images/equipment/automation-control.jpg', alt: 'Automated process control panel', span: 'col-span-1' },
      { src: '/images/equipment/solvent-recovery-tower.jpg', alt: 'Solvent recovery tower', span: 'col-span-1' },
    ],
    stat: { label: 'Extraction Tanks', value: '20 Units' },
    eco: '26 Chromatography Columns',
  },
  {
    id: 'S04',
    label: 'Sector 04 — Product & Quality',
    title: 'Product & Laboratory',
    description: 'Every batch undergoes rigorous HPLC and GC-MS testing — from crystalline CBD isolate through final packaging — ensuring ≥99.5% purity with non-detectable THC.',
    images: [
      { src: '/images/products/cbd-crystal-closeup.jpg', alt: 'Close-up of high-purity CBD crystalline isolate', span: 'col-span-1' },
      { src: '/images/products/cbd-crystal-lab.jpg', alt: 'CBD crystal in laboratory setting', span: 'col-span-1' },
      { src: '/images/products/cbd-packaging-foil.jpg', alt: 'CBD isolate in sealed foil packaging', span: 'col-span-1' },
      { src: '/images/products/cbd-shipping-box.jpg', alt: 'Product shipping box ready for export', span: 'col-span-1' },
    ],
    stat: { label: 'CBD Purity', value: '≥99.5%' },
    eco: 'THC: ND (Non-Detectable)',
  },
];

function SectorSection({ sector, idx }: { sector: typeof sectors[0]; idx: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const items = sectionRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
  }, { scope: sectionRef });

  return (
    <section className={`py-24 ${idx % 2 === 1 ? 'bg-surface-container-low' : 'bg-surface'}`}>
      <div ref={sectionRef} className="max-w-container mx-auto px-6 lg:px-12">
        <div className="reveal-card flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-3">{sector.label}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-background tracking-tighter leading-tight">{sector.title}</h2>
            <p className="mt-4 text-sm text-on-surface-variant leading-relaxed max-w-lg">{sector.description}</p>
          </div>
          <div className="reveal-card flex-shrink-0 bg-primary p-6 min-w-[180px]">
            <p className="text-xs tracking-widest uppercase text-white/60 mb-1">{sector.stat.label}</p>
            <p className="text-2xl font-extrabold text-white tracking-tighter">{sector.stat.value}</p>
            <p className="text-xs text-white/50 tracking-wider uppercase mt-2">{sector.eco}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sector.images.map((img, i) => (
            <div key={i} className="reveal-card overflow-hidden group">
              <img src={img.src} alt={img.alt} className="w-full h-56 object-cover group-hover:scale-[1.03] transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function GalleryPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroRef.current) return;
    const items = heroRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: heroRef.current, start: 'top 80%' },
    });
  }, { scope: heroRef });

  return (
    <div className="bg-surface">
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <SectionLabel>Visual Documentation</SectionLabel>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-background tracking-tighter leading-[0.95] max-w-3xl">
              Vertical Integration.
              <br />
              <span className="text-primary">From Seed to Solution.</span>
            </h1>
            <p className="mt-6 text-sm text-on-surface-variant leading-relaxed max-w-xl">
              Explore our fully integrated supply chain — from high-altitude Yunnan cultivation
              bases through industrial extraction and chromatography to pharma-grade CBD isolate.
            </p>
          </div>
        </div>
      </section>

      {sectors.map((sector, idx) => (
        <SectorSection key={sector.id} sector={sector} idx={idx} />
      ))}
    </div>
  );
}
