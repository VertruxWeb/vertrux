'use client'

import { useRef } from 'react';
import { ArrowRight, FlaskConical, Layers, Cpu, Leaf, Mail, MapPin, Building2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/atoms/Button';

gsap.registerPlugin(ScrollTrigger);

export default function HomePageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroRef.current) return;
    const tl = gsap.timeline();
    tl.from('.hero-line', {
      y: 80, opacity: 0, duration: 1, stagger: 0.12, ease: 'power4.out',
    });
    tl.from('.hero-fade', {
      y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    }, '-=0.4');
    tl.from('.hero-stat', {
      y: 20, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    }, '-=0.3');
  }, { scope: heroRef });

  useGSAP(() => {
    if (!servicesRef.current) return;
    gsap.from(servicesRef.current.querySelectorAll('.reveal-card'), {
      y: 60, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: servicesRef.current, start: 'top 75%' },
    });
  }, { scope: servicesRef });

  useGSAP(() => {
    if (!scopeRef.current) return;
    gsap.from(scopeRef.current.querySelectorAll('.reveal-card'), {
      y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: scopeRef.current, start: 'top 75%' },
    });
  }, { scope: scopeRef });

  useGSAP(() => {
    if (!contactRef.current) return;
    gsap.from(contactRef.current.querySelectorAll('.reveal-card'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: contactRef.current, start: 'top 80%' },
    });
  }, { scope: contactRef });

  return (
    <div className="bg-surface">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-on-background">
        <Image
          src="/images/hero/facility-hero.webp"
          alt="Vetrux Biotechnology CBD extraction facility in Chuxiong, Yunnan"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-on-background/40 via-on-background/70 to-on-background" />

        <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl">
            <div className="overflow-hidden mb-3">
              <p className="hero-line text-xs font-semibold tracking-[0.35em] uppercase text-primary-fixed/70">
                Vetrux Biotechnology · Chuxiong, Yunnan
              </p>
            </div>

            <div className="overflow-hidden">
              <h1 className="hero-line text-[clamp(2.8rem,7vw,6.5rem)] font-extrabold text-white tracking-tightest leading-[0.92] mb-2">
                CBD Raw Materials
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-line text-[clamp(2.8rem,7vw,6.5rem)] font-extrabold tracking-tightest leading-[0.92] mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed to-primary-inverse">&amp; Botanical Extracts</span>
              </h1>
            </div>

            <p className="hero-fade text-base md:text-lg text-white/50 leading-relaxed max-w-2xl mb-12">
              Plant-derived quality from seed selection to final product. Standardized cultivation,
              precision extraction, and traceable supply — built for B2B partners who need consistency.
            </p>

            <div className="hero-fade flex flex-wrap gap-4 mb-20">
              <Link href="/inquiry">
                <Button variant="primary" size="lg" icon={ArrowRight}>
                  Get in Touch
                </Button>
              </Link>
              <Link href="/products/cbd-isolate">
                <Button variant="glass" size="lg">
                  View Products
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-white/10">
            {[
              { value: 'CBD Isolate', label: 'Raw Material Sales' },
              { value: 'OEM / ODM', label: 'Custom Manufacturing' },
              { value: 'Tech Output', label: 'Process Consulting' },
              { value: 'Botanicals', label: 'Extract Portfolio' },
            ].map((stat) => (
              <div key={stat.label} className="hero-stat">
                <p className="text-lg md:text-xl font-extrabold text-white tracking-tighter">{stat.value}</p>
                <p className="text-[10px] text-white/35 tracking-widest uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/30" />
        </div>
      </section>

      {/* ── CORE SERVICES ────────────────────────────────────────────────── */}
      <section className="py-28 bg-surface">
        <div ref={servicesRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-16">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-on-background tracking-tightest leading-[0.95] max-w-2xl">
              Integrated CBD supply,<br />
              <span className="text-primary">from source to solution</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-outline-variant/20">
            {[
              {
                icon: FlaskConical,
                title: 'CBD Raw Materials',
                desc: 'Stable, traceable CBD isolate and raw materials for brand clients, distributors, and long-term procurement partners.',
                href: '/wholesale-cbd-isolate',
              },
              {
                icon: Layers,
                title: 'OEM / ODM',
                desc: 'Full-cycle custom manufacturing — raw material sourcing, formulation, production, packaging design, and finished product delivery.',
                href: '/inquiry',
              },
              {
                icon: Cpu,
                title: 'Technical Services',
                desc: 'Process consulting for cultivation management, extraction optimization, yield control, and cannabinoid purification.',
                href: '/inquiry',
              },
              {
                icon: Leaf,
                title: 'Botanical Extracts',
                desc: 'Diversified plant extract portfolio including anthocyanins, steviol glycosides, and hemp seed protein.',
                href: '/products/cbd-isolate',
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="reveal-card group bg-surface-container-lowest p-8 lg:p-10 flex flex-col justify-between hover:bg-surface-container-low transition-colors duration-300"
              >
                <div>
                  <div className="w-11 h-11 bg-primary-fixed/50 flex items-center justify-center mb-8 group-hover:bg-primary-fixed transition-colors duration-300">
                    <service.icon size={20} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-on-background tracking-tighter mb-3">{service.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{service.desc}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn More <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS SCOPE ───────────────────────────────────────────────── */}
      <section className="py-28 bg-on-background">
        <div ref={scopeRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-16">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-fixed/60 mb-4">Business Scope</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tightest leading-[0.95] max-w-3xl">
              End-to-end capabilities,<br />
              <span className="text-primary-fixed">tailored to your needs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* CBD Raw Material Sales */}
            <div className="reveal-card group relative overflow-hidden flex flex-col">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/products/cbd-crystal-closeup.jpg"
                  alt="CBD isolate raw material"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-[center_40%] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background to-transparent" />
              </div>
              <div className="bg-inverse-surface p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary-fixed/20 flex items-center justify-center flex-shrink-0">
                    <FlaskConical size={16} className="text-primary-fixed" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tighter">CBD Raw Material Sales</h3>
                </div>
                <p className="text-sm text-inverse-on-surface/60 leading-relaxed mb-6 flex-1">
                  Serving brand clients, channel partners, and trading companies with stable CBD supply.
                  Standard supply, long-term agreements, and directed cooperation models available.
                </p>
                <Link href="/wholesale-cbd-isolate" className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-fixed hover:text-primary-inverse transition-colors duration-200 mt-auto">
                  Explore Supply <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* OEM/ODM Services */}
            <div className="reveal-card group relative overflow-hidden flex flex-col">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/equipment/extraction-vessel-6m3.webp"
                  alt="Industrial extraction equipment for OEM/ODM production"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background to-transparent" />
              </div>
              <div className="bg-inverse-surface p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary-fixed/20 flex items-center justify-center flex-shrink-0">
                    <Layers size={16} className="text-primary-fixed" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tighter">OEM / ODM Services</h3>
                </div>
                <p className="text-sm text-inverse-on-surface/60 leading-relaxed mb-6 flex-1">
                  Full-process support from raw material sourcing and formulation development to
                  production, packaging design, and finished product delivery for your brand.
                </p>
                <Link href="/inquiry" className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-fixed hover:text-primary-inverse transition-colors duration-200 mt-auto">
                  Start a Project <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Technical Output */}
            <div className="reveal-card group relative overflow-hidden flex flex-col">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/equipment/hplc-system.jpg"
                  alt="HPLC analytical system for quality control"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background to-transparent" />
              </div>
              <div className="bg-inverse-surface p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary-fixed/20 flex items-center justify-center flex-shrink-0">
                    <Cpu size={16} className="text-primary-fixed" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tighter">Technical Services</h3>
                </div>
                <p className="text-sm text-inverse-on-surface/60 leading-relaxed mb-6 flex-1">
                  Cultivation management, yield optimization, extraction process refinement,
                  cost control, and cannabinoid purification consulting.
                </p>
                <Link href="/inquiry" className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-fixed hover:text-primary-inverse transition-colors duration-200 mt-auto">
                  Inquire Now <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND STATEMENT ──────────────────────────────────────────────── */}
      <section className="py-28 bg-surface">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary mb-4">About Vetrux</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-background tracking-tightest leading-[0.95] mb-6">
                Quality rooted in<br />
                <span className="text-primary">every step of the process</span>
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                VETRUX is the CBD product brand of Vetrux Biotechnology (Chuxiong) Co., Ltd.
                We focus on quality management and development of plant-derived products — starting
                from superior cultivar selection, through standardized and traceable cultivation systems,
                to professional extraction processes that deliver purity, stability, and consistency.
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
                From raw materials to process to delivery, VETRUX is committed to providing
                reliable CBD products and botanical extract solutions for our partners.
              </p>
              <Link href="/about">
                <Button variant="outline" size="md" icon={ArrowRight}>
                  Company Profile
                </Button>
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-3">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/images/gallery/campus-buildings.webp"
                  alt="Vetrux campus and facilities"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/images/planting/flowering-greenhouse.jpg"
                  alt="Vetrux cultivation greenhouse"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative h-48 col-span-2 overflow-hidden">
                <Image
                  src="/images/gallery/cultivation-base-wide.jpg"
                  alt="Vetrux cultivation base panoramic view"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section className="py-28 bg-surface-container-low">
        <div ref={contactRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-16">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary mb-4">Contact</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-on-background tracking-tightest leading-[0.95] max-w-2xl">
              Let&apos;s discuss<br />
              <span className="text-primary">your requirements</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="reveal-card bg-surface-container-lowest p-8 flex flex-col">
              <div className="w-11 h-11 bg-primary-fixed/50 flex items-center justify-center mb-6">
                <Mail size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-4">Email Us</p>
              <div className="space-y-3 mt-auto">
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-on-surface-variant/60 mb-1">General Inquiry</p>
                  <a href="mailto:inquiry@vetrux.tech" className="text-sm font-semibold text-on-background hover:text-primary transition-colors duration-200">
                    inquiry@vetrux.tech
                  </a>
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-on-surface-variant/60 mb-1">Sales &amp; OEM/ODM</p>
                  <a href="mailto:sales@vetrux.tech" className="text-sm font-semibold text-on-background hover:text-primary transition-colors duration-200">
                    sales@vetrux.tech
                  </a>
                </div>
              </div>
            </div>

            <div className="reveal-card bg-surface-container-lowest p-8 flex flex-col">
              <div className="w-11 h-11 bg-primary-fixed/50 flex items-center justify-center mb-6">
                <Building2 size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-4">Company</p>
              <div className="space-y-2 mt-auto">
                <p className="text-sm font-semibold text-on-background">Vetrux Biotechnology (Chuxiong) Co., Ltd.</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">蔚萃生物科技（楚雄）有限公司</p>
              </div>
            </div>

            <div className="reveal-card bg-surface-container-lowest p-8 flex flex-col">
              <div className="w-11 h-11 bg-primary-fixed/50 flex items-center justify-center mb-6">
                <MapPin size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-4">Location</p>
              <div className="space-y-2 mt-auto">
                <p className="text-sm text-on-background leading-relaxed">
                  Seedling Base, Tapu Second Group,<br />
                  Chuxiong City, Yunnan Province,<br />
                  675000, China
                </p>
              </div>
            </div>
          </div>

          <div className="reveal-card mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-primary p-8 md:p-10">
            <div>
              <p className="text-xl md:text-2xl font-extrabold text-white tracking-tighter leading-tight">
                Ready to start a conversation?
              </p>
              <p className="text-sm text-white/60 mt-2">
                Tell us about your project — we&apos;ll respond within 24 hours.
              </p>
            </div>
            <Link href="/inquiry" className="flex-shrink-0">
              <Button variant="glass" size="lg" icon={ArrowRight}>
                Send Inquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
