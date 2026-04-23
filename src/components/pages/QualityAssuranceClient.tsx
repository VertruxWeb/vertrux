'use client'

import { useRef } from 'react';
import { ArrowRight, Shield, FileCheck, Microscope, FlaskConical, CheckCircle, Award } from 'lucide-react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '@/components/atoms/Badge';
import SectionLabel from '@/components/atoms/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  { name: 'ISO 9001', desc: 'Quality management system for consistent production and continuous improvement across all operations.' },
  { name: 'GMP', desc: 'Good Manufacturing Practice standards applied to extraction, purification, and packaging processes.' },
  { name: 'HACCP', desc: 'Hazard Analysis and Critical Control Points — food safety management principles integrated into production workflow.' },
  { name: 'Third-Party Testing', desc: 'Independent laboratory testing for every production batch, with full Certificate of Analysis provided.' },
];

const testingPanels = [
  { icon: Microscope, title: 'CBD Purity & Cannabinoid Profile', method: 'HPLC (Thermo Dionex UltiMate 3000)', standard: 'In-house & third-party verified', detail: 'CBD content, THC content, and minor cannabinoid profiling using our Thermo Dionex UltiMate 3000 HPLC system.' },
  { icon: FlaskConical, title: 'Residual Solvents', method: 'GC-MS', standard: 'Pharmacopeial methods', detail: 'Screening for residual extraction solvents to ensure product safety and regulatory compliance.' },
  { icon: Shield, title: 'Heavy Metals', method: 'ICP-MS', standard: 'Applicable pharmacopeial limits', detail: 'Quantitative testing for Pb, As, Cd, Hg — results documented per batch in the COA.' },
  { icon: FileCheck, title: 'Microbial Limits', method: 'Pharmacopeial methods', standard: 'Applicable limits', detail: 'Total aerobic microbial count, yeast & mold count, and absence testing for specified pathogens.' },
  { icon: Shield, title: 'Moisture Content', method: 'Karl Fischer / LOD', standard: 'Product specification', detail: 'Moisture content testing to ensure product stability and shelf-life consistency.' },
  { icon: FileCheck, title: 'THC Content Verification', method: 'HPLC', standard: 'Regulatory thresholds', detail: 'Dedicated THC content verification to confirm compliance with applicable legal limits for the destination market.' },
];

const qaProcess = [
  { step: '01', title: 'Seed & Cultivar Selection', desc: 'Quality begins at the source. Vetrux selects hemp cultivars suited to Yunnan\'s high-altitude growing conditions, optimized for CBD content and consistency.' },
  { step: '02', title: 'Cultivation Monitoring', desc: 'Ongoing field monitoring tracks growth conditions, pest management, and pre-harvest cannabinoid development to ensure biomass quality before it enters the facility.' },
  { step: '03', title: 'Extraction & Purification QC', desc: 'In-process quality checks at extraction, winterization, and chromatography stages using our 20 extraction tanks, 26 chromatography columns, and 10 concentrators with automated controls.' },
  { step: '04', title: 'Analytical Testing & COA', desc: 'Every finished batch undergoes a full analytical panel — CBD purity, THC content, residual solvents, heavy metals, microbial limits, and moisture content — documented in a batch-specific Certificate of Analysis.' },
  { step: '05', title: 'Packaging & Pre-shipment Inspection', desc: 'Final inspection covers packaging integrity, labeling accuracy, and documentation completeness. COA, SDS, and test reports are prepared and provided with each shipment.' },
];

export default function QualityAssuranceClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);
  const testingRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroRef.current) return;
    gsap.from(heroRef.current.querySelectorAll('.reveal-card'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: heroRef.current, start: 'top 80%' },
    });
  }, { scope: heroRef });

  useGSAP(() => {
    if (!certsRef.current) return;
    gsap.from(certsRef.current.querySelectorAll('.reveal-card'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: certsRef.current, start: 'top 80%' },
    });
  }, { scope: certsRef });

  useGSAP(() => {
    if (!testingRef.current) return;
    gsap.from(testingRef.current.querySelectorAll('.reveal-card'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: testingRef.current, start: 'top 80%' },
    });
  }, { scope: testingRef });

  useGSAP(() => {
    if (!processRef.current) return;
    gsap.from(processRef.current.querySelectorAll('.reveal-card'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: processRef.current, start: 'top 80%' },
    });
  }, { scope: processRef });

  return (
    <div className="bg-surface">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-card">
              <Badge variant="default" className="mb-6">Quality Assurance</Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold text-on-background tracking-tighter leading-[0.95] mb-6">
                Quality You
                <br />
                <span className="text-primary">Can Verify</span>
              </h1>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6 max-w-md">
                At Vetrux Biotechnology, quality management spans the entire production chain — from seed selection and cultivation monitoring in Yunnan, through industrial-scale extraction and purification, to final product analytical testing and pre-shipment inspection.
              </p>
              <p className="text-xs text-on-surface-variant/80 leading-relaxed mb-8 max-w-md">
                Every production batch is accompanied by a <span className="font-semibold text-on-surface-variant">Certificate of Analysis (COA)</span>, <span className="font-semibold text-on-surface-variant">Safety Data Sheet (SDS)</span>, and relevant test reports. Our in-house <span className="font-semibold text-on-surface-variant">Thermo Dionex UltiMate 3000 HPLC</span> system enables precise cannabinoid profiling, while third-party laboratory verification provides independent confirmation. Vetrux's 5-stage QA pipeline is designed to give B2B buyers confidence in every shipment.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['ISO 9001', 'GMP', 'HACCP', 'COA Per Batch'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/inquiry" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-md hover:bg-primary-container transition-all duration-300">
                  Request Quality Documentation <ArrowRight size={16} />
                </Link>
                <Link href="/products/cbd-isolate" className="inline-flex items-center gap-2 px-6 py-4 border border-outline/30 text-on-surface text-xs font-bold tracking-widest uppercase rounded-md hover:bg-surface-container transition-colors duration-200">
                  View Product Specs
                </Link>
              </div>
            </div>
            <div className="reveal-card">
              <img src="/images/equipment/chromatography-column-700L.webp" alt="Vetrux quality control laboratory" className="w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={certsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>Certifications</SectionLabel>
            <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-4">
              Quality Standards & Certifications
            </h2>
            <p className="text-sm text-on-surface-variant max-w-xl">
              Vetrux operates in alignment with internationally recognized quality management standards.
              Specific certification details and supporting documentation are available upon request during B2B qualification discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="reveal-card bg-surface-container-lowest p-6">
                <Award size={20} className="text-primary mb-4" />
                <p className="text-sm font-extrabold text-on-surface tracking-tighter mb-2">{cert.name}</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-8">
            <p className="text-xs text-on-surface-variant/70 italic">
              Note: Specific certification numbers and accreditation details can be confirmed directly during supplier qualification. Contact <a href="mailto:inquiry@vetrux.tech" className="text-primary underline">inquiry@vetrux.tech</a> for documentation requests.
            </p>
          </div>
        </div>
      </section>

      {/* ── TESTING PANELS ────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={testingRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>Analytical Testing</SectionLabel>
            <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-4">
              Comprehensive Analytical Testing — Every Batch
            </h2>
            <p className="text-sm text-on-surface-variant max-w-xl">
              Vetrux performs in-house testing using our Thermo Dionex UltiMate 3000 HPLC system for cannabinoid profiling,
              complemented by third-party laboratory verification. Testing covers CBD purity, THC content, residual solvents,
              heavy metals, microbial limits, and moisture content — all documented in a batch-specific COA.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testingPanels.map((panel) => (
              <div key={panel.title} className="reveal-card bg-surface-container-lowest p-6">
                <panel.icon size={20} className="text-primary mb-4" />
                <p className="text-sm font-extrabold text-on-surface tracking-tighter mb-1">{panel.title}</p>
                <p className="text-xs text-primary font-semibold tracking-wider uppercase mb-2">{panel.method} — {panel.standard}</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">{panel.detail}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-8">
            <p className="text-xs text-on-surface-variant">
              Need sample COA or test reports? Contact <a href="mailto:sales@vetrux.tech" className="text-primary underline">sales@vetrux.tech</a> to request documentation for any product.
            </p>
          </div>
        </div>
      </section>

      {/* ── QA PROCESS ────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={processRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>Quality Process</SectionLabel>
            <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-4">
              5-Stage Quality Assurance Pipeline
            </h2>
          </div>

          <div className="space-y-4">
            {qaProcess.map((item) => (
              <div key={item.step} className="reveal-card flex gap-6 bg-surface-container-lowest p-6">
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
            <Link href="/inquiry" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-md hover:bg-primary-container transition-all duration-300">
              Request Quality Documentation <ArrowRight size={16} />
            </Link>
            <p className="text-xs text-on-surface-variant mt-4">
              COA, SDS, and test reports provided per batch. Labels and declarations are prepared to match the actual batch, order purpose, and destination country requirements. Destination country regulatory compliance remains the buyer's responsibility.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
