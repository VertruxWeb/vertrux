'use client'

import { useRef } from 'react';
import { ArrowRight, Package, Shield, Globe, TrendingUp, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '@/components/atoms/Badge';
import SectionLabel from '@/components/atoms/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const volumeTiers = [
  { range: '1–5 kg', label: 'Sample / Trial', discount: 'Contact for pricing', note: 'COA + spec sheet included' },
  { range: '5–25 kg', label: 'Small Commercial', discount: 'Volume discount', note: 'Dedicated account manager' },
  { range: '25–100 kg', label: 'Mid-Volume', discount: 'Contract pricing', note: 'Custom packaging available (PE bags, aluminum foil bags)' },
  { range: '100–500 kg', label: 'High-Volume', discount: 'Quarterly contract pricing', note: 'Priority production scheduling' },
  { range: '500 kg+', label: 'Ton-Scale', discount: 'Annual agreement pricing', note: 'Dedicated supply chain & annual contracts' },
];

const shippingTerms = [
  { term: 'FOB Kunming/Chuxiong', desc: 'Buyer arranges freight from origin. Lowest unit cost, maximum logistics control. Standard export packaging: PE bags 5 kg, aluminum foil bags 5 kg, export cartons.', icon: Package },
  { term: 'CIF Destination Port', desc: 'Vetrux covers freight + insurance to your designated port. Buyer handles customs clearance and destination-country compliance.', icon: Globe },
  { term: 'DDP Destination', desc: 'Delivered duty paid — Vetrux handles logistics, customs, and duties to your door. Buyer/importer responsible for destination-country regulatory compliance.', icon: Shield },
];

const whyWholesale = [
  { title: '≥99.5% Purity', desc: 'Pharmaceutical-grade CBD isolate (CAS 13956-29-1) verified by in-house HPLC testing on every batch.' },
  { title: 'THC Non-Detect', desc: 'Confirmed by GC-MS analysis. Batch-specific COA provided with every shipment.' },
  { title: 'Industrial-Scale Production', desc: '20 extraction tanks (6 m³ each), 26 chromatography columns (700 L), and 10 concentrators — built for consistent, high-volume output.' },
  { title: 'OEM/ODM Services', desc: 'Custom formulation, private-label packaging, and contract manufacturing for CBD and botanical extract products.' },
  { title: 'Flexible Logistics', desc: 'FOB Kunming/Chuxiong, CIF, and DDP shipping terms. Standard packaging: 5 kg PE bags, 5 kg aluminum foil bags, export cartons.' },
  { title: 'Beyond CBD', desc: 'Also supplying wholesale anthocyanins, steviol glycosides, hemp seed globulin, and other botanical extracts from our Yunnan facility.' },
];

export default function WholesaleCbdIsolateClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const tiersRef = useRef<HTMLDivElement>(null);
  const shippingRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroRef.current) return;
    gsap.from(heroRef.current.querySelectorAll('.reveal-card'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: heroRef.current, start: 'top 80%' },
    });
  }, { scope: heroRef });

  useGSAP(() => {
    if (!tiersRef.current) return;
    gsap.from(tiersRef.current.querySelectorAll('.reveal-card'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: tiersRef.current, start: 'top 80%' },
    });
  }, { scope: tiersRef });

  useGSAP(() => {
    if (!shippingRef.current) return;
    gsap.from(shippingRef.current.querySelectorAll('.reveal-card'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: shippingRef.current, start: 'top 80%' },
    });
  }, { scope: shippingRef });

  useGSAP(() => {
    if (!whyRef.current) return;
    gsap.from(whyRef.current.querySelectorAll('.reveal-card'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: whyRef.current, start: 'top 80%' },
    });
  }, { scope: whyRef });

  return (
    <div className="bg-surface">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-card">
              <Badge variant="default" className="mb-6">Wholesale Supply</Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold text-on-background tracking-tighter leading-[0.95] mb-6">
                Wholesale
                <br />
                <span className="text-primary">CBD Isolate</span>
              </h1>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6 max-w-md">
                Bulk pharmaceutical-grade CBD isolate and botanical raw materials from Vetrux Biotechnology (Chuxiong), Yunnan. Volume-tiered supply from 1 kg samples to ton-scale annual agreements, with OEM/ODM services and DDP delivery worldwide.
              </p>
              <p className="text-xs text-on-surface-variant/80 leading-relaxed mb-8 max-w-md">
                Global demand for high-purity CBD isolate continues to grow across pharmaceutical, nutraceutical, and cosmetic applications. Vetrux also supplies wholesale <span className="font-semibold text-on-surface-variant">anthocyanins, steviol glycosides, hemp seed globulin</span>, and other botanical extracts. All cross-border shipments structured under <span className="font-semibold text-on-surface-variant">Incoterms 2020</span> with full export documentation. Buyer/importer is responsible for destination-country regulatory compliance.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['≥99.5% Purity', 'THC Non-Detect', 'FOB / CIF / DDP', 'ISO 9001 + GMP'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/inquiry" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-md hover:bg-primary-container transition-all duration-300">
                  Request Wholesale Quote <ArrowRight size={16} />
                </Link>
                <Link href="/products/cbd-isolate" className="inline-flex items-center gap-2 px-6 py-4 border border-outline/30 text-on-surface text-xs font-bold tracking-widest uppercase rounded-md hover:bg-surface-container transition-colors duration-200">
                  View Product Specs
                </Link>
              </div>
            </div>
            <div className="reveal-card">
              <img src="/images/products/cbd-packaging-foil.jpg" alt="Wholesale CBD isolate bulk packaging" className="w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── VOLUME TIERS ──────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={tiersRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>Volume Pricing</SectionLabel>
            <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-4">
              Tiered Wholesale Pricing Structure
            </h2>
            <p className="text-sm text-on-surface-variant max-w-xl">
              Pricing scales with commitment. All tiers include batch-specific COA documentation,
              vacuum-sealed packaging, and dedicated account support.
            </p>
          </div>

          <div className="space-y-3">
            {volumeTiers.map((tier) => (
              <div key={tier.range} className="reveal-card flex flex-col sm:flex-row sm:items-center gap-4 bg-surface-container-lowest p-6">
                <div className="sm:w-32">
                  <p className="text-xl font-extrabold text-on-surface tracking-tighter">{tier.range}</p>
                </div>
                <div className="sm:w-40">
                  <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant">{tier.label}</p>
                </div>
                <div className="sm:w-32">
                  <span className="px-3 py-1 bg-primary-fixed text-primary text-xs font-bold tracking-wider rounded-full">
                    {tier.discount}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-on-surface-variant">{tier.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-8">
            <p className="text-xs text-on-surface-variant">
              Pricing reviewed quarterly against market benchmarks. Annual contracts lock in preferential rates.{' '}
              <Link href="/blog/cbd-isolate-wholesale-pricing-cost-factors" className="text-primary underline">
                Read our wholesale pricing analysis →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── SHIPPING TERMS ────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={shippingRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>Global Logistics</SectionLabel>
            <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-4">
              Flexible Shipping Terms
            </h2>
            <p className="text-sm text-on-surface-variant max-w-xl">
              Choose the Incoterm that fits your logistics infrastructure. From turnkey DDP delivery
              to cost-optimized FOB arrangements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {shippingTerms.map((item) => (
              <div key={item.term} className="reveal-card bg-surface-container-lowest p-8">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-fixed mb-4">
                  <item.icon size={20} className="text-primary" />
                </div>
                <p className="text-lg font-extrabold text-on-surface tracking-tighter mb-3">{item.term}</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-8">
            <p className="text-xs text-on-surface-variant">
              Standard lead time: 10–14 business days from order confirmation. Air freight available for urgent orders.{' '}
              <Link href="/blog/thc-free-cbd-isolate-sourcing-guide-europe" className="text-primary underline">
                EU sourcing guide →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY VETRUX ────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={whyRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>Why Vetrux</SectionLabel>
            <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-4">
              Built for B2B Procurement Teams
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyWholesale.map((item) => (
              <div key={item.title} className="reveal-card bg-surface-container-lowest p-6">
                <CheckCircle size={16} className="text-primary mb-3" />
                <p className="text-sm font-extrabold text-on-surface tracking-tighter mb-2">{item.title}</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-12 text-center">
            <Link href="/inquiry" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-md hover:bg-primary-container transition-all duration-300">
              Get Wholesale Pricing <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
