'use client'

import { useRef } from 'react';
import { ArrowRight, Download, FlaskConical, Award, Layers } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import SectionLabel from '@/components/atoms/SectionLabel';
import SpecRow from '@/components/molecules/SpecRow';

gsap.registerPlugin(ScrollTrigger);

export default function HomePageClient() {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const featureCardsRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroContentRef.current) return;
    const targets = heroContentRef.current.querySelectorAll('.hero-animate');
    gsap.from(targets, {
      y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
    });
  }, { scope: heroContentRef });

  useGSAP(() => {
    if (!featureCardsRef.current) return;
    const cards = featureCardsRef.current.querySelectorAll('.reveal-card');
    gsap.from(cards, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: featureCardsRef.current, start: 'top 80%' },
    });
  }, { scope: featureCardsRef });

  useGSAP(() => {
    if (!bentoRef.current) return;
    const items = bentoRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: bentoRef.current, start: 'top 80%' },
    });
  }, { scope: bentoRef });

  useGSAP(() => {
    if (!trustRef.current) return;
    const items = trustRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: trustRef.current, start: 'top 80%' },
    });
  }, { scope: trustRef });

  return (
    <div className="bg-surface">

      {/* ── HERO SECTION ────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden bg-on-background">
        <Image
          src="/images/hero/facility-hero.webp"
          alt="Vetrux Biotechnology CBD extraction facility in Chuxiong, Yunnan"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/60 to-transparent" />

        <div ref={heroContentRef} className="relative z-10 max-w-container mx-auto px-6 lg:px-12 pb-20 pt-32">
          <div className="max-w-3xl">
            <div className="hero-animate">
              <Badge variant="glass" className="mb-6">Vetrux Biotechnology · Est. Chuxiong, Yunnan</Badge>
            </div>

            <h1 className="hero-animate text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[0.95] mb-6">
              CBD Raw Materials<br />& Botanical Extracts
            </h1>

            <p className="hero-animate text-base md:text-lg text-white/70 leading-relaxed max-w-xl mb-10">
              Vetrux — a brand under 蔚萃生物 — delivers pharmaceutical-grade CBD isolate via
              ethanol extraction and chromatographic purification from our Chuxiong, Yunnan facility.
              OEM/ODM services, technical consulting, and bulk supply for global B2B partners.
            </p>

            <div className="hero-animate flex flex-wrap gap-4">
              <Link href="/equipment">
                <Button variant="primary" size="lg" icon={ArrowRight}>
                  Explore Facility
                </Button>
              </Link>
              <Link href="/products/cbd-isolate">
                <Button variant="glass" size="lg">
                  Technical Specs
                </Button>
              </Link>
            </div>
          </div>

          <div className="hero-animate flex flex-wrap gap-6 mt-16 pt-8 border-t border-white/10">
            {[
              { value: '20+', label: 'Extraction Equipment Sets' },
              { value: '26', label: 'Chromatography Columns' },
              { value: '99.5%', label: 'CBD Purity' },
              { value: '5+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white tracking-tighter">{stat.value}</p>
                <p className="text-xs text-white/50 tracking-widest uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY CONTEXT ────────────────────────────────────────────── */}
      <section className="py-12 bg-surface-container-low border-b border-outline-variant/20">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">Market Context</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                The European CBD market is projected to reach <span className="text-on-surface font-semibold">€3.2 billion by 2027</span>, driven by pharmaceutical, nutraceutical, and cosmetic applications. <a href="https://prohibitionpartners.com" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant/60 text-xs underline underline-offset-2">(Prohibition Partners, European CBD Report)</a>
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">Extraction Science</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Vetrux employs <span className="text-on-surface font-semibold">ethanol extraction combined with chromatographic purification</span> using 26 industrial chromatography columns (700L each). This multi-stage process — extraction, chromatographic separation, concentration, and crystallization — achieves ≥99.5% CBD purity while maintaining full molecular integrity.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">Manufacturer Position</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Operating from our production base in <span className="text-on-surface font-semibold">Chuxiong, Yunnan Province</span>, Vetrux Biotechnology controls the full production chain — from hemp biomass processing through ethanol extraction, chromatographic purification, and final crystallization to batch release and export packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIAL SCALE SECTION ────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative reveal-card">
              <Image
                src="/images/equipment/extraction-tanks.jpg"
                alt="20 sets of 6m³ industrial extraction tanks at Vetrux facility"
                width={800}
                height={520}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-primary text-white px-5 py-3">
                <p className="text-xs tracking-widest uppercase font-semibold text-white/70">Capacity</p>
                <p className="text-2xl font-extrabold tracking-tighter">20× 6m³ Extraction Tanks</p>
              </div>
            </div>

            <div ref={featureCardsRef}>
              <div className="reveal-card">
                <SectionLabel>Industrial Scale</SectionLabel>
                <h2 className="text-4xl md:text-5xl font-extrabold text-on-background tracking-tighter leading-tight mb-6">
                  Industrial Infrastructure
                  <br />
                  <span className="text-primary">Precision Controlled</span>
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-10 max-w-md">
                  Our Chuxiong facility houses 20 sets of 6m³ extraction tanks, 26 chromatography columns (700L),
                  and 10 sets of concentrators — supported by solvent recovery towers, ethanol storage,
                  and HPLC analytical systems with full automation control.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: FlaskConical, title: 'Ethanol Extraction & Purification', desc: 'Industrial ethanol extraction followed by 26-column chromatographic purification for ≥99.5% CBD purity.' },
                  { icon: Award, title: 'OEM/ODM & Technical Consulting', desc: 'Custom manufacturing, formulation support, and technical consulting for CBD and botanical extract products.' },
                  { icon: Layers, title: 'Multi-Stage Refinement', desc: 'Chromatographic separation, concentration, crystallization, and HPLC-verified batch testing.' },
                ].map((feat) => (
                  <div key={feat.title} className="reveal-card flex gap-4 p-5 bg-surface-container-low hover:bg-surface-container transition-colors duration-200">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-fixed flex items-center justify-center">
                      <feat.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface mb-1">{feat.title}</p>
                      <p className="text-xs text-on-surface-variant leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CBD ISOLATE BENTO SECTION ───────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={bentoRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="reveal-card lg:col-span-8 relative overflow-hidden">
              <Image
                src="/images/products/cbd-crystal-closeup.jpg"
                alt="CBD Isolate 99.5% Purity"
                width={1200}
                height={580}
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="w-full h-[580px] object-cover object-[center_40%]"
              />
              <div className="absolute top-6 left-6">
                <Badge variant="default">Purity Focus</Badge>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-48 p-8 bg-gradient-to-t from-on-background/90 via-on-background/40 to-transparent flex items-end">
                <h2 className="text-4xl font-extrabold text-white tracking-tighter leading-tight">
                  Product Overview<br />CBD Isolate
                </h2>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="reveal-card bg-primary p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-4">Technical Data</p>
                  <p className="text-2xl font-extrabold text-white tracking-tighter leading-tight mb-2">Certificate of Analysis Available</p>
                  <p className="text-xs text-white/70 leading-relaxed">Batch documentation and product information can be reviewed during qualified B2B discussions.</p>
                </div>
                <Link href="/inquiry" className="mt-6 inline-flex items-center gap-2 px-4 py-3 bg-white text-primary text-xs font-bold tracking-widest uppercase hover:bg-primary-fixed transition-colors duration-200">
                  <Download size={14} />
                  Request Documentation
                </Link>
              </div>

              <div className="reveal-card bg-surface-container-lowest p-8 flex-1">
                <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-4">Key Specifications</p>
                <SpecRow label="CBD Purity (HPLC)" value="≥ 99.5%" />
                <SpecRow label="THC Content" value="ND (Not Detected)" />
                <SpecRow label="Appearance" value="White Crystalline" />
                <SpecRow label="Solvent Residue" value="&lt; 10 PPM" isLast />
                <Link href="/products/cbd-isolate" className="mt-6 inline-flex items-center gap-1 text-xs font-semibold tracking-wider uppercase text-primary hover:text-primary-container transition-colors duration-200">
                  Full Specifications <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS / CERTIFICATIONS ─────────────────────────────── */}
      <section className="py-16 bg-surface">
        <div ref={trustRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
            {[
              { label: 'Quality Focus', sub: 'HPLC Testing · ≥99.5% Purity', href: '/quality-assurance' },
              { label: 'Wholesale Supply', sub: 'Bulk CBD & Botanical Extracts', href: '/wholesale-cbd-isolate' },
              { label: 'Manufacturer Profile', sub: 'Chuxiong, Yunnan Production Base', href: '/cbd-isolate-manufacturer' },
              { label: 'Global Inquiry', sub: 'inquiry@vetrux.tech', href: '/inquiry' },
            ].map((cert) => (
              <Link key={cert.label} href={cert.href} className="reveal-card py-6 border-t-2 border-primary-fixed hover:border-primary transition-colors duration-200 block">
                <p className="text-lg font-extrabold text-on-background tracking-tighter">{cert.label}</p>
                <p className="text-xs text-on-surface-variant tracking-wider uppercase mt-1">{cert.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <SectionLabel>Frequently Asked Questions</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-background tracking-tighter leading-tight mb-12">
            What Buyers Ask Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'What is CBD isolate and how is it different from full-spectrum CBD?',
                a: 'CBD isolate is the purest form of cannabidiol — a white crystalline powder containing ≥99.5% CBD (CAS: 13956-29-1, HS Code: 2907299020) with all other cannabinoids, terpenes, and plant compounds removed. Unlike full-spectrum CBD which retains THC and other cannabinoids, CBD isolate is THC non-detect (ND), making it ideal for pharmaceutical and nutraceutical formulations requiring precise dosing and regulatory compliance.',
              },
              {
                q: 'What services does Vetrux offer beyond CBD isolate?',
                a: 'Beyond CBD raw material sales, Vetrux provides OEM/ODM custom manufacturing services, technical consulting, and supplies other botanical extracts including anthocyanins, steviol glycosides, and hemp seed globulin. Contact sales@vetrux.tech for OEM/ODM inquiries or inquiry@vetrux.tech for general product information.',
              },
              {
                q: 'What packaging options are available for CBD isolate?',
                a: 'Vetrux offers CBD isolate in 5 kg PE bags (27×60 cm), 5 kg aluminum foil bags (35×50 cm), and export cartons (465×285×295 mm). Custom packaging is available through our OEM/ODM services. Volume pricing available for bulk orders — contact sales@vetrux.tech.',
              },
              {
                q: 'How does Vetrux ensure CBD purity and THC-free compliance?',
                a: 'Every batch undergoes HPLC testing to confirm ≥99.5% CBD purity and THC non-detect (ND) status. Our ethanol extraction and 26-column chromatographic purification process ensures consistent quality. Full documentation including COA, Certificate of Origin, and SDS is provided with each shipment.',
              },
              {
                q: 'Where is Vetrux located and what shipping terms are available?',
                a: 'Vetrux Biotechnology is based in Chuxiong, Yunnan Province, China. We offer FOB Kunming, CIF, and DDP delivery to global destinations. Standard lead time is 10–14 business days from order confirmation. All shipments include batch-specific COA, Certificate of Origin, and Safety Data Sheet. Contact inquiry@vetrux.tech for logistics details.',
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-surface p-6">
                <h3 className="text-sm font-bold text-on-background mb-3">{faq.q}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* References */}
          <div className="mt-12 pt-8 border-t border-outline-variant/20">
            <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/40 mb-3">References &amp; Standards</p>
            <ul className="flex flex-col gap-1.5 text-xs text-on-surface-variant/60">
              <li><a href="https://www.who.int/docs/default-source/controlled-substances/whocbdreportmay2018-2.pdf" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-on-surface-variant">WHO Expert Committee on Drug Dependence — Cannabidiol (CBD) Critical Review Report (2018)</a></li>
              <li><a href="https://food.ec.europa.eu/safety/novel-food/legislation_en" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-on-surface-variant">EU Novel Food Regulation (EU) 2015/2283 — European Commission</a></li>
              <li><a href="https://www.iso.org/standard/62085.html" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-on-surface-variant">ISO 9001:2015 — Quality Management Systems</a></li>
              <li><a href="https://www.iso.org/standard/39883.html" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-on-surface-variant">ISO/IEC 17025 — General Requirements for Testing and Calibration Laboratories</a></li>
              <li><a href="https://www.ich.org/page/quality-guidelines" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-on-surface-variant">ICH Q3C — Impurities: Guideline for Residual Solvents</a></li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
