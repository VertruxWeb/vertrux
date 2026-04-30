'use client'

import { useRef } from 'react';
import { ArrowRight, Shield, FileCheck, Microscope, FlaskConical } from 'lucide-react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '@/components/atoms/Badge';
import SectionLabel from '@/components/atoms/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const documentationItems = [
  { icon: Microscope, title: 'HPLC Analytical Capability', detail: 'In-house Thermo Dionex UltiMate 3000 HPLC system for analytical testing support.' },
  { icon: FlaskConical, title: 'Certificate of Analysis (COA)', detail: 'May be provided according to order requirements and actual batch availability.' },
  { icon: Shield, title: 'Safety Data Sheet (SDS)', detail: 'May be provided according to order requirements.' },
  { icon: FileCheck, title: 'Test Reports', detail: 'May be provided according to order requirements and actual batch availability.' },
  { icon: Shield, title: 'Commercial Invoice & Packing List', detail: 'Provided per shipment.' },
  { icon: FileCheck, title: 'Other Supporting Documents', detail: 'Additional documentation may be arranged according to actual order terms and destination requirements.' },
];

const qaApproach = [
  { step: '01', title: 'Cultivation Management', desc: 'Quality-oriented seed selection and standardized cultivation processes at the Chuxiong, Yunnan base.' },
  { step: '02', title: 'Extraction & Processing', desc: 'Professional extraction facility equipped with 20 extraction tanks, 26 chromatography columns, and 10 concentrators with automation control.' },
  { step: '03', title: 'Analytical Testing Capability', desc: 'In-house HPLC analytical system (Thermo Dionex UltiMate 3000) supporting quality management activities.' },
  { step: '04', title: 'Documentation Support', desc: 'Supporting documents including COA, SDS, test reports, and other shipment documents may be provided according to order requirements.' },
  { step: '05', title: 'Packaging & Shipment', desc: 'Standardized packaging (5 kg PE bags, 5 kg aluminum foil bags, export cartons) with documentation arranged per order terms.' },
];

export default function QualityAssuranceClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const docsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroRef.current) return;
    gsap.from(heroRef.current.querySelectorAll('.reveal-card'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: heroRef.current, start: 'top 80%' },
    });
  }, { scope: heroRef });

  useGSAP(() => {
    if (!docsRef.current) return;
    gsap.from(docsRef.current.querySelectorAll('.reveal-card'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: docsRef.current, start: 'top 80%' },
    });
  }, { scope: docsRef });

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
              <Badge variant="default" className="mb-6">Quality Management</Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold text-on-background tracking-tighter leading-[0.95] mb-6">
                Quality
                <br />
                <span className="text-primary">Management</span>
              </h1>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6 max-w-md">
                Vetrux Biotechnology focuses on consistency in raw materials, process, and delivery.
                Our Chuxiong facility is equipped with HPLC analytical capability (Thermo Dionex UltiMate 3000)
                to support quality management activities.
              </p>
              <p className="text-xs text-on-surface-variant/80 leading-relaxed mb-8 max-w-md">
                Supporting documentation including COA, SDS, test reports, and other shipment documents
                may be provided according to order requirements. Specific documentation availability depends
                on actual batch, order terms, and verification results.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['HPLC Capability', 'Documentation Support', 'Standardized Process'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/inquiry" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-md hover:bg-primary-container transition-all duration-300">
                  Contact Us <ArrowRight size={16} />
                </Link>
                <Link href="/products/cbd-isolate" className="inline-flex items-center gap-2 px-6 py-4 border border-outline/30 text-on-surface text-xs font-bold tracking-widest uppercase rounded-md hover:bg-surface-container transition-colors duration-200">
                  View Products
                </Link>
              </div>
            </div>
            <div className="reveal-card">
              <img src="/images/equipment/chromatography-column-700L.webp" alt="Vetrux facility equipment" className="w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── DOCUMENTATION SUPPORT ────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={docsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>Documentation</SectionLabel>
            <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-4">
              Documentation & Compliance Support
            </h2>
            <p className="text-sm text-on-surface-variant max-w-xl">
              Vetrux can provide supporting documentation according to order requirements.
              Destination country import compliance is the buyer/importer&apos;s responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {documentationItems.map((item) => (
              <div key={item.title} className="reveal-card bg-surface-container-lowest p-6">
                <item.icon size={20} className="text-primary mb-4" />
                <p className="text-sm font-extrabold text-on-surface tracking-tighter mb-2">{item.title}</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-8">
            <p className="text-xs text-on-surface-variant">
              For documentation inquiries, contact <a href="mailto:inquiry@vetrux.tech" className="text-primary underline">inquiry@vetrux.tech</a>.
            </p>
          </div>
        </div>
      </section>

      {/* ── QA APPROACH ──────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={processRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-12">
            <SectionLabel>Approach</SectionLabel>
            <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-4">
              Quality Management Approach
            </h2>
          </div>

          <div className="space-y-4">
            {qaApproach.map((item) => (
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
              Contact Us <ArrowRight size={16} />
            </Link>
            <p className="text-xs text-on-surface-variant mt-4">
              Product labels, usage declarations, and customs descriptions should match actual batch, order purpose, and destination country requirements. Destination country regulatory compliance is the buyer/importer&apos;s responsibility.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
