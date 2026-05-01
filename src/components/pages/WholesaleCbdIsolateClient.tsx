'use client'

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Package, Shield, Globe, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import SectionLabel from '@/components/atoms/SectionLabel';
import { useReveal } from '@/hooks/useReveal';

const volumeTiers = [
  { range: 'Standard Supply', label: 'Regular Orders', discount: 'Contact for details', note: 'CBD raw materials' },
  { range: 'Long-Term Supply', label: 'Ongoing Cooperation', discount: 'Contact for details', note: 'Stable supply arrangements for recurring needs' },
  { range: 'Project-Based', label: 'Custom Cooperation', discount: 'Contact for details', note: 'Tailored to specific project requirements' },
  { range: 'OEM/ODM', label: 'Full Service', discount: 'Contact for details', note: 'Formulation, production, packaging, and delivery' },
];

const shippingTerms = [
  { term: 'Packaging', desc: 'PE bags 5 kg/bag (27×60cm, food grade), aluminum foil bags 5 kg/bag (35×50cm, food grade), export cartons (465×285×295mm, 2 bags/carton), plastic pallets with shrink wrap.', icon: Package },
  { term: 'Documentation', desc: 'Supporting documents including COA, SDS, test reports, commercial invoices, and packing lists may be provided according to order requirements.', icon: Globe },
  { term: 'Compliance', desc: 'Destination country import compliance — including permits, licenses, and regulatory approvals — is the buyer/importer responsibility. Labels and declarations match actual batch and destination requirements.', icon: Shield },
];

const whyWholesale = [
  { title: 'CBD Raw Materials', desc: 'CBD isolate with ≥99.9% purity from our Chuxiong, Yunnan facility.' },
  { title: 'Equipment Configuration', desc: '20 extraction tanks, 26 chromatography columns, 10 concentrators, HPLC analytical system, and automation control.' },
  { title: 'OEM/ODM Services', desc: 'Raw material support, formulation development, production, packaging design, and finished product delivery.' },
  { title: 'Technical Support', desc: 'Cultivation management, extraction process optimization, cost control, and cannabinoid extraction consulting.' },
  { title: 'Standardized Packaging', desc: '5 kg PE bags (27×60cm), 5 kg aluminum foil bags (35×50cm), export cartons (465×285×295mm), plastic pallets.' },
];

export default function WholesaleCbdIsolateClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const tiersRef = useRef<HTMLDivElement>(null);
  const shippingRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);

  useReveal(heroRef, { y: 40, stagger: 0.1, start: 'top 80%' });
  useReveal(tiersRef, { y: 40, stagger: 0.08, start: 'top 80%' });
  useReveal(shippingRef, { y: 40, stagger: 0.1, start: 'top 80%' });
  useReveal(whyRef, { y: 40, stagger: 0.08, start: 'top 80%' });

  return (
    <div className="bg-surface">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-card">
              <Badge variant="default" className="mb-6">Wholesale Supply</Badge>
              <h1 className="text-5xl md:text-6xl font-serif font-medium text-on-background tracking-tight leading-[1.0] mb-6">
                Wholesale
                <br />
                <span className="italic text-primary">CBD Isolate</span>
              </h1>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-6 max-w-md">
                CBD raw materials from VETRUX, manufactured in Chuxiong, Yunnan. B2B supply cooperation including standard supply, long-term supply, and project-based arrangements, with OEM/ODM services.
              </p>
              <p className="text-xs text-on-surface-variant/80 leading-relaxed mb-8 max-w-md">
                Destination country import compliance is the buyer/importer&apos;s responsibility.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['CBD Isolate', 'OEM/ODM', 'Technical Support'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/inquiry">
                  <Button variant="accent" size="lg" icon={ArrowRight}>Request Wholesale Quote</Button>
                </Link>
                <Link href="/products/cbd-isolate">
                  <Button variant="outline" size="lg">View Product Specs</Button>
                </Link>
              </div>
            </div>
            <div className="reveal-card">
              <div className="relative w-full h-[500px]">
                <Image src="/images/products/cbd-packaging-foil.jpg" alt="Wholesale CBD isolate bulk packaging" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VOLUME TIERS ──────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={tiersRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>Cooperation Models</SectionLabel>
            <h2 className="text-3xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">
              B2B Supply Cooperation
            </h2>
            <p className="text-[15px] text-on-surface-variant max-w-xl">
              Vetrux supports brand clients, channel partners, trading companies, and partners
              with stable procurement needs through flexible cooperation arrangements.
            </p>
          </div>

          <div className="space-y-3">
            {volumeTiers.map((tier) => (
              <div
                key={tier.range}
                tabIndex={0}
                className="reveal-card flex flex-col sm:flex-row sm:items-center gap-4 bg-surface-container-lowest p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <div className="sm:w-32">
                  <p className="text-xl font-serif font-medium text-on-surface tracking-tight">{tier.range}</p>
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
              Contact us to discuss cooperation arrangements suited to your requirements.{' '}
              <Link href="/inquiry" className="text-accent underline">
                Submit an inquiry →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── SHIPPING TERMS ────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={shippingRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>Packaging & Compliance</SectionLabel>
            <h2 className="text-3xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">
              Packaging, Documentation & Compliance
            </h2>
            <p className="text-[15px] text-on-surface-variant max-w-xl">
              Standardized packaging and documentation support arranged according to order requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {shippingTerms.map((item) => (
              <div
                key={item.term}
                tabIndex={0}
                className="reveal-card bg-surface-container-lowest p-8 border-l-2 border-transparent hover:border-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
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
              Specific logistics and documentation arrangements depend on actual order terms.{' '}
              <Link href="/inquiry" className="text-accent underline">
                Contact us →
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
            <h2 className="text-3xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">
              Built for B2B Procurement Teams
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyWholesale.map((item) => (
              <div
                key={item.title}
                tabIndex={0}
                className="reveal-card bg-surface-container-lowest p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <CheckCircle size={16} className="text-primary mb-3" />
                <p className="text-sm font-extrabold text-on-surface tracking-tighter mb-2">{item.title}</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-12 text-center">
            <Link href="/inquiry">
              <Button variant="accent" size="lg" icon={ArrowRight}>Get Wholesale Pricing</Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
