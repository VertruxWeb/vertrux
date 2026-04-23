'use client'

import { useRef } from 'react';
import { Leaf, Thermometer, Droplets, Sun, Shield, CheckCircle } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '@/components/atoms/Badge';
import SectionLabel from '@/components/atoms/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '[X] ha', label: 'Cultivation Base Area' },
  { value: '26', label: 'Chromatography Columns' },
  { value: '[X]M+', label: 'Annual Propagation Capacity' },
  { value: '1,800m+', label: 'Yunnan Altitude Advantage' },
];

const zones = [
  {
    id: '01',
    tag: 'Zone 01 — Seedling & Propagation',
    title: 'Seed Selection & Cutting Propagation',
    description:
      'Our breeding program begins with elite seed selection and clonal propagation at the Chuxiong nursery facility. High-CBD cultivars are propagated via stem cuttings in controlled greenhouse nurseries, ensuring genetic consistency and phytochemical uniformity across every production cycle.',
    images: [
      { src: '/images/planting/seedling-nursery.jpg', alt: 'Young CBD hemp seedlings in nursery trays' },
      { src: '/images/planting/cloning-propagation.jpg', alt: 'Hemp clones in propagation trays' },
      { src: '/images/planting/rooted-cutting.jpg', alt: 'Hand holding a rooted hemp cutting' },
      { src: '/images/planting/propagation-greenhouse.jpg', alt: 'Large-scale greenhouse propagation area' },
    ],
    specs: [
      { label: 'Propagation Method', value: 'Clonal Cuttings + Seed' },
      { label: 'Nursery Environment', value: 'Controlled Greenhouse' },
      { label: 'Genetic Screening', value: 'High-CBD Cultivar Selection' },
      { label: 'Rooting Success Rate', value: '≥ 95%' },
    ],
    icon: Leaf,
  },
  {
    id: '02',
    tag: 'Zone 02 — Vegetative Growth',
    title: 'Greenhouse Cultivation & Controlled Growth',
    description:
      'Transplanted clones enter our large-scale greenhouse facilities in Chuxiong, where Yunnan\'s high-altitude sunlight and UV-rich conditions naturally promote vigorous vegetative growth. Controlled irrigation, nutrient delivery, and canopy management ensure uniform plant development before the flowering transition.',
    images: [
      { src: '/images/planting/vegetative-growth.jpg', alt: 'Greenhouse rows of vegetative hemp plants' },
      { src: '/images/planting/vegetative-canopy.jpg', alt: 'Dense green hemp canopy in vegetative stage' },
    ],
    specs: [
      { label: 'Growing Method', value: 'Greenhouse + Natural Light' },
      { label: 'Altitude', value: '1,800m+ (Yunnan Plateau)' },
      { label: 'Water Source', value: 'Mountain Spring Irrigation' },
      { label: 'Input Policy', value: 'Zero Synthetic Pesticides' },
    ],
    icon: Sun,
  },
  {
    id: '03',
    tag: 'Zone 03 — Flowering & Harvest',
    title: 'Mature Flowering & Trichome Development',
    description:
      'During the flowering stage, Yunnan\'s intense UV exposure drives exceptional trichome and cannabinoid development. Our agronomists monitor trichome maturity and CBD content to determine optimal harvest timing, maximizing cannabinoid yield while maintaining compliance with THC thresholds. Dense, resinous colas are hand-harvested and transferred to controlled drying and processing.',
    images: [
      { src: '/images/planting/flowering-greenhouse.jpg', alt: 'Late-flowering hemp greenhouse' },
      { src: '/images/planting/flowering-cola-closeup.jpg', alt: 'Close-up of CBD hemp bud with trichomes' },
      { src: '/images/planting/mature-bud-trichomes.jpg', alt: 'Dense mature hemp bud with visible trichomes' },
      { src: '/images/planting/flowering-dense-canopy.jpg', alt: 'Dense flowering hemp canopy' },
      { src: '/images/planting/flowering-pistils.jpg', alt: 'Flowering hemp with white pistils' },
    ],
    specs: [
      { label: 'Trichome Monitoring', value: 'Daily Visual + Lab Analysis' },
      { label: 'Harvest Method', value: 'Hand-Harvested at Peak CBD' },
      { label: 'UV Advantage', value: 'High-Altitude UV Exposure' },
      { label: 'Drying Process', value: 'Controlled Low-Temp Drying' },
    ],
    icon: Thermometer,
  },
];

const galleryImages = [
  { src: '/images/planting/propagation-greenhouse.jpg', alt: 'Large-scale greenhouse propagation area' },
  { src: '/images/planting/seedling-nursery.jpg', alt: 'Young CBD hemp seedlings in nursery trays' },
  { src: '/images/planting/cloning-propagation.jpg', alt: 'Hemp clones in propagation trays' },
  { src: '/images/planting/vegetative-canopy.jpg', alt: 'Dense green hemp canopy in vegetative stage' },
  { src: '/images/planting/flowering-cola-closeup.jpg', alt: 'Close-up of CBD hemp bud with trichomes' },
  { src: '/images/planting/flowering-dense-canopy.jpg', alt: 'Dense flowering hemp canopy from above' },
];

const traceabilityItems = [
  { icon: Shield, label: 'Seed-to-Isolate Integration', desc: 'Vetrux controls every step from seed selection and cultivation through extraction and isolation — full vertical integration under one supply chain.' },
  { icon: Droplets, label: 'Standardized Cultivation System', desc: 'SOPs govern every stage of our growing process: propagation, transplanting, nutrient management, flowering, and harvest timing are all standardized across our Chuxiong base.' },
  { icon: Leaf, label: 'Traceable Supply Chain', desc: 'Every batch of biomass is traceable from the specific greenhouse zone and harvest date through to the final CBD isolate lot number and COA.' },
  { icon: CheckCircle, label: 'Batch Documentation & COA', desc: 'Full batch records, third-party lab reports, and Certificates of Analysis are available for every production run upon qualified B2B request.' },
];

export default function PlantingPageClient() {
  const statsRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const zonesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const traceabilityRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!statsRef.current) return;
    const items = statsRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: statsRef.current, start: 'top 80%' },
    });
  }, { scope: statsRef });

  useGSAP(() => {
    if (!introRef.current) return;
    const items = introRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: introRef.current, start: 'top 80%' },
    });
  }, { scope: introRef });

  useGSAP(() => {
    if (!zonesRef.current) return;
    const items = zonesRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: zonesRef.current, start: 'top 80%' },
    });
  }, { scope: zonesRef });

  useGSAP(() => {
    if (!galleryRef.current) return;
    const items = galleryRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: galleryRef.current, start: 'top 80%' },
    });
  }, { scope: galleryRef });

  useGSAP(() => {
    if (!traceabilityRef.current) return;
    const items = traceabilityRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: traceabilityRef.current, start: 'top 80%' },
    });
  }, { scope: traceabilityRef });

  useGSAP(() => {
    if (!ctaRef.current) return;
    const items = ctaRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' },
    });
  }, { scope: ctaRef });

  return (
    <div className="bg-surface">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="default" className="mb-6">Cultivation & Breeding Center · Chuxiong, Yunnan</Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold text-on-background tracking-tighter leading-[0.95] mb-6">
                Grown at Altitude.
                <br />
                <span className="text-primary">Traced to the Source.</span>
              </h1>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8 max-w-md">
                Vetrux operates its own cultivation and breeding center in Chuxiong, Yunnan Province —
                where high-altitude terrain and intense UV exposure create ideal conditions for
                high-CBD hemp with exceptional cannabinoid and terpene profiles.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Yunnan High-Altitude', 'UV-Rich Growing', 'Seed-to-Isolate', 'Vertically Integrated'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src="/images/planting/vegetative-growth.jpg" alt="Vetrux cultivation base greenhouse in Chuxiong, Yunnan" className="w-full h-[500px] object-cover" />
              <div className="absolute bottom-6 right-6 bg-on-background/90 backdrop-blur p-4">
                <p className="text-xs text-white/50 tracking-widest uppercase mb-1">Cultivation & Breeding Center</p>
                <p className="text-sm font-bold text-white">Chuxiong, Yunnan Province · 1,800m+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────────────────── */}
      <section className="bg-primary py-10">
        <div ref={statsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="reveal-card text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter">{s.value}</p>
                <p className="text-xs font-semibold tracking-widest uppercase text-white/50 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO BLOCK ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={introRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="reveal-card lg:col-span-5">
              <SectionLabel>Why Vertical Integration Matters</SectionLabel>
              <h2 className="text-4xl font-extrabold text-on-background tracking-tighter leading-tight mt-4">
                The Best Extracts Begin
                <br />in the Field.
              </h2>
            </div>
            <div className="reveal-card lg:col-span-7 space-y-5 pt-2">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                At Vetrux, vertical integration isn't a buzzword — it's our operating model. By controlling
                cultivation, breeding, and extraction under one roof, we eliminate supply chain uncertainty
                and deliver consistent cannabinoid profiles batch after batch.
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Our Chuxiong base sits on the Yunnan Plateau at over 1,800 meters, where naturally intense
                UV radiation and clean mountain air drive superior trichome development and cannabinoid
                accumulation — advantages that no indoor facility can replicate.
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                From proprietary high-CBD cultivar selection to 26-column chromatographic purification,
                every link in our seed-to-isolate chain is optimized for purity, potency, and traceability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GROWING ZONES ───────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={zonesRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <SectionLabel>Growing Zones</SectionLabel>
            <h2 className="text-4xl font-extrabold text-on-background tracking-tighter mb-16 max-w-xl">Three Zones. One Controlled Process.</h2>
          </div>

          <div className="space-y-28">
            {zones.map((zone, idx) => {
              const Icon = zone.icon;
              const isReversed = idx % 2 === 1;
              return (
                <div key={zone.id} className="reveal-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`grid grid-cols-2 gap-3 ${isReversed ? 'lg:order-2' : ''}`}>
                    {zone.images.map((img, i) => (
                      <div key={i} className="overflow-hidden">
                        <img src={img.src} alt={img.alt} className="w-full h-52 object-cover hover:scale-[1.03] transition-transform duration-500" />
                      </div>
                    ))}
                    <div className="col-span-2 flex items-center gap-3 mt-1">
                      <span className="text-xs font-mono tracking-widest text-on-surface-variant">#{zone.id}</span>
                      <div className="flex-1 h-px bg-outline-variant/30" />
                    </div>
                  </div>

                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded">
                        <Icon size={16} className="text-primary" />
                      </div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant">{zone.tag}</p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-on-background tracking-tighter mb-4">{zone.title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-8">{zone.description}</p>

                    <div className="space-y-0">
                      {zone.specs.map((spec, i) => (
                        <div key={spec.label} className={`flex justify-between items-center py-3 ${i < zone.specs.length - 1 ? 'border-b border-outline-variant/30' : ''}`}>
                          <span className="text-xs font-semibold tracking-wider uppercase text-on-surface-variant">{spec.label}</span>
                          <span className="text-sm font-bold text-on-surface">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY GRID ─────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={galleryRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <SectionLabel>Field Documentation</SectionLabel>
              <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mt-3">Inside the Chuxiong Cultivation Base</h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-sm leading-relaxed">
              Real photos from our Yunnan cultivation and breeding center — from seedling propagation through flowering and harvest.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className={`reveal-card overflow-hidden group ${i === 0 ? 'col-span-2 md:col-span-1 md:row-span-2' : ''}`}>
                <img src={img.src} alt={img.alt} className={`w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03] ${i === 0 ? 'h-full min-h-[320px]' : 'h-48'}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRACEABILITY BLOCK ─────────────────────────────────────────── */}
      <section className="py-24 bg-on-background">
        <div ref={traceabilityRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="reveal-card lg:col-span-4">
              <SectionLabel light>Full Traceability</SectionLabel>
              <h2 className="text-4xl font-extrabold text-white tracking-tighter leading-tight mt-4">
                Seed-to-Isolate
                <br />Vertical Integration
              </h2>
              <p className="mt-5 text-sm text-white/50 leading-relaxed">
                Vetrux's vertically integrated model means every gram of CBD isolate traces back to a specific
                greenhouse zone, harvest batch, and extraction run at our Chuxiong facility. No middlemen,
                no blind spots — just a fully traceable, standardized supply chain.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traceabilityItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="reveal-card bg-white/5 p-6 hover:bg-white/10 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon size={16} className="text-primary-fixed" />
                      <p className="text-xs font-semibold tracking-widest uppercase text-white/60">{item.label}</p>
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={ctaRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="reveal-card lg:col-span-8">
              <SectionLabel>Wholesale Inquiry</SectionLabel>
              <h2 className="text-4xl font-extrabold text-on-background tracking-tighter leading-tight mt-3">
                Source Directly From
                <br />the Grower.
              </h2>
              <p className="mt-4 text-sm text-on-surface-variant leading-relaxed max-w-lg">
                Skip the commodity middlemen. Talk to our team about bulk biomass supply, white-label isolate, or custom extraction contracts — all backed by our vertically integrated supply chain.
              </p>
            </div>
            <div className="reveal-card lg:col-span-4 flex flex-col gap-3">
              <a href="/inquiry" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-xs font-bold tracking-widest uppercase hover:bg-primary-container transition-all duration-300">
                Request a Quote
              </a>
              <a href="/products/cbd-isolate" className="inline-flex items-center justify-center px-8 py-4 border border-outline-variant/40 text-on-surface text-xs font-bold tracking-widest uppercase hover:bg-surface-container transition-all duration-300">
                View Product Specs
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
