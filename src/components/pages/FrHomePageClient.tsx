'use client'

import { useRef } from 'react';
import {
  ArrowRight,
  FlaskConical,
  Layers,
  Cpu,
  Mail,
  MapPin,
  Building2,
  ShieldCheck,
  Microscope,
  CheckCircle2,
  Award,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import TrustBar from '@/components/molecules/TrustBar';
import KpiRow from '@/components/molecules/KpiRow';
import { useReveal, useRevealTimeline } from '@/hooks/useReveal';

export default function FrHomePageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Hero choreographed timeline (respects reduced-motion)
  useRevealTimeline(heroRef, ({ reduced, gsap }) => {
    if (reduced || !heroRef.current) return;
    const tl = gsap.timeline();
    tl.from('.hero-line', {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: 'power4.out',
    });
    tl.from(
      '.hero-fade',
      { y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
      '-=0.4',
    );
    tl.from(
      '.hero-stat',
      { y: 20, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
      '-=0.3',
    );
  });

  useReveal(scopeRef, { y: 50, stagger: 0.15, start: 'top 75%' });
  useReveal(contactRef, { y: 40, stagger: 0.1, start: 'top 80%' });

  return (
    <div className="bg-surface">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-surface-ink"
      >
        <Image
          src="/images/hero/facility-hero.webp"
          alt="Installation d'extraction de CBD VETRUX à Chuxiong, Yunnan"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-ink/40 via-surface-ink/70 to-surface-ink" />

        <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl">
            <div className="overflow-hidden mb-3">
              <p className="hero-line inline-flex items-center gap-2 text-xs font-semibold tracking-[0.35em] uppercase text-primary-fixed/80">
                <ShieldCheck size={14} className="text-accent" strokeWidth={1.6} />
                VETRUX · Yunnan, Chine
              </p>
            </div>

            <div className="overflow-hidden">
              <h1 className="hero-line font-serif text-[clamp(2.6rem,6.5vw,5.5rem)] font-medium text-white tracking-tight leading-[0.96] mb-2">
                De la Graine
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-line font-serif text-[clamp(2.6rem,6.5vw,5.5rem)] font-medium tracking-tight leading-[0.96] mb-8 italic">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-stone-100 to-stone-300">
                  à l&apos;Isolat.
                </span>
              </h1>
            </div>

            <p className="hero-fade text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mb-10">
              Un partenaire CBD verticalement intégré — de la culture du Yunnan à la vérification
              HPLC interne et au conditionnement prêt à l&apos;export, le tout sous un même toit.
            </p>

            <div className="hero-fade flex flex-wrap gap-4 mb-12">
              <Link href="/fr/inquiry">
                <Button variant="accent" size="lg" icon={ArrowRight}>
                  Nous Contacter
                </Button>
              </Link>
              <Link href="/fr/products/cbd-isolate">
                <Button variant="glass" size="lg">
                  Voir les Produits
                </Button>
              </Link>
            </div>

            <div className="hero-fade inline-flex items-center gap-2 px-3 py-1.5 border border-white/15 bg-white/5 backdrop-blur-sm rounded-sm mb-8">
              <Award size={12} className="text-accent" strokeWidth={1.8} />
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/70">
                Fabricant Vérifié · Yunnan, CN · Processus Qualité ISO
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-white/10 divide-x divide-white/10">
            {[
              { value: '≥99,9%', label: 'Pureté de l\'Isolat' },
              { value: 'THC ND', label: 'Non détectable' },
              { value: '20', label: 'Cuves d\'Extraction' },
              { value: 'Yunnan', label: 'Origine & Culture' },
            ].map((stat, i) => (
              <div key={stat.label} className={`hero-stat ${i === 0 ? '' : 'pl-8'}`}>
                <p className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tighter">
                  {stat.value}
                </p>
                <p className="text-[10px] text-white/60 tracking-widest uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────────── */}
      <TrustBar
        items={[
          { icon: FlaskConical, label: '20 Cuves d\'Extraction' },
          { icon: Layers, label: '26 Colonnes Chromato.' },
          { icon: Microscope, label: 'HPLC Interne' },
          { icon: ShieldCheck, label: 'Processus Qualité ISO' },
          { icon: CheckCircle2, label: 'OEM / ODM' },
          { icon: Award, label: 'Culture à Conditionnement' },
        ]}
      />

      {/* ── BUSINESS SCOPE ───────────────────────────────────────────────── */}
      <section className="py-28 bg-surface-ink">
        <div ref={scopeRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-16">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-fixed/80 mb-4">
              Domaines d&apos;Activité
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.05] max-w-3xl">
              Capacités de bout en bout,<br />
              <span className="italic text-primary-fixed">adaptées à vos besoins</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* CBD Raw Material Sales */}
            <div className="reveal-card group relative overflow-hidden flex flex-col">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/products/cbd-crystal-closeup.jpg"
                  alt="Matière première isolat de CBD"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-[center_40%] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-ink to-transparent" />
              </div>
              <div className="bg-inverse-surface p-8 flex flex-col flex-1 border-l-2 border-transparent group-hover:border-accent transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary-fixed/20 flex items-center justify-center flex-shrink-0">
                    <FlaskConical size={16} className="text-primary-fixed" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-white tracking-tight">Vente de Matières Premières CBD</h3>
                </div>
                <p className="text-[15px] text-inverse-on-surface/70 leading-relaxed mb-6 flex-1">
                  Au service des clients de marque, des partenaires de distribution et des sociétés
                  de négoce avec un approvisionnement CBD stable. Fourniture standard, accords à long
                  terme et modèles de coopération dirigés disponibles.
                </p>
                <Link
                  href="/fr/wholesale-cbd-isolate"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-fixed hover:text-accent transition-colors duration-200 mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                >
                  Découvrir l&apos;Offre <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* OEM/ODM Services */}
            <div className="reveal-card group relative overflow-hidden flex flex-col">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/equipment/extraction-vessel-6m3.webp"
                  alt="Équipement d'extraction industriel pour la production OEM/ODM"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-ink to-transparent" />
              </div>
              <div className="bg-inverse-surface p-8 flex flex-col flex-1 border-l-2 border-transparent group-hover:border-accent transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary-fixed/20 flex items-center justify-center flex-shrink-0">
                    <Layers size={16} className="text-primary-fixed" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-white tracking-tight">Services OEM / ODM</h3>
                </div>
                <p className="text-[15px] text-inverse-on-surface/70 leading-relaxed mb-6 flex-1">
                  Accompagnement de bout en bout, du sourcing des matières premières et du développement
                  de la formulation jusqu&apos;à la production, la conception de l&apos;emballage et la livraison
                  du produit fini pour votre marque.
                </p>
                <Link
                  href="/fr/inquiry"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-fixed hover:text-accent transition-colors duration-200 mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                >
                  Lancer un Projet <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Technical Output */}
            <div className="reveal-card group relative overflow-hidden flex flex-col">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/equipment/hplc-system.jpg"
                  alt="Système d'analyse HPLC pour le contrôle qualité"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-ink to-transparent" />
              </div>
              <div className="bg-inverse-surface p-8 flex flex-col flex-1 border-l-2 border-transparent group-hover:border-accent transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary-fixed/20 flex items-center justify-center flex-shrink-0">
                    <Cpu size={16} className="text-primary-fixed" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-white tracking-tight">Services Techniques</h3>
                </div>
                <p className="text-[15px] text-inverse-on-surface/70 leading-relaxed mb-6 flex-1">
                  Gestion de la culture, optimisation des rendements, amélioration des procédés
                  d&apos;extraction, maîtrise des coûts et conseil en purification des cannabinoïdes.
                </p>
                <Link
                  href="/fr/inquiry"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-fixed hover:text-accent transition-colors duration-200 mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                >
                  Faire une Demande <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* KPI Row strip on dark scope */}
          <div className="reveal-card mt-16 border-t border-white/10 pt-10">
            <KpiRow
              tone="dark"
              items={[
                { value: '≥99,9%', label: 'Pureté de l\'Isolat', sub: 'Vérifié HPLC' },
                { value: '120 000 L', label: 'Capacité d\'Extraction', sub: '20 × 6m³ cuves' },
                { value: '24 h', label: 'Délai de Réponse', sub: 'Demande professionnelle' },
                { value: 'EN · DE · FR', label: 'Langues', sub: 'Équipe commerciale B2B' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── BRAND STATEMENT ──────────────────────────────────────────────── */}
      <section className="py-28 bg-surface-low">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-4">
                À Propos de Vetrux
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-on-background tracking-tight leading-[1.05] mb-8">
                Une qualité ancrée dans<br />
                <span className="italic text-primary">chaque étape du processus</span>
              </h2>

              <blockquote className="border-l-2 border-accent pl-5 italic font-serif text-lg text-on-surface leading-relaxed mb-8">
                &laquo;&nbsp;Nous traitons chaque kilo d&apos;isolat comme s&apos;il était expédié sous notre
                propre nom. La traçabilité n&apos;est pas une étiquette — c&apos;est la façon de travailler
                de l&apos;équipe.&nbsp;&raquo;
                <footer className="not-italic mt-3 text-xs tracking-widest uppercase text-on-surface-variant font-sans">
                  — Responsable Qualité, VETRUX
                </footer>
              </blockquote>

              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-4">
                VETRUX repose sur une conviction simple — la constance de qualité pharmaceutique
                commence dans le champ, pas à la ligne de conditionnement. Chaque lot est cultivé,
                extrait et vérifié en interne : la fiche technique que vous recevez est exactement
                celle sur laquelle notre équipe est évaluée.
              </p>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-8">
                De la culture à la chromatographie, jusqu&apos;au conditionnement export — VETRUX
                offre une chaîne d&apos;approvisionnement unique et responsable pour ses partenaires B2B.
              </p>
              <Link href="/fr/about">
                <Button variant="outline" size="md" icon={ArrowRight}>
                  Profil de l&apos;Entreprise
                </Button>
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-3">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/images/gallery/campus-buildings.webp"
                  alt="Campus et installations Vetrux"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/images/planting/flowering-greenhouse.jpg"
                  alt="Serre de culture Vetrux"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative h-48 col-span-2 overflow-hidden">
                <Image
                  src="/images/gallery/cultivation-base-wide.jpg"
                  alt="Vue panoramique de la base de culture Vetrux"
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
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-4">
              Contact
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-on-background tracking-tight leading-[1.05] max-w-2xl">
              Discutons de<br />
              <span className="italic text-primary">vos besoins</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="reveal-card bg-surface-container-lowest p-8 flex flex-col border border-outline-variant/30">
              <div className="w-11 h-11 bg-accent-soft flex items-center justify-center mb-6">
                <Mail size={20} className="text-accent" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-4">
                Écrivez-nous
              </p>
              <div className="space-y-3 mt-auto">
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-on-surface-muted mb-1">
                    Demande Générale
                  </p>
                  <a
                    href="mailto:inquiry@vetrux.tech"
                    className="text-[15px] font-semibold text-on-background hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  >
                    inquiry@vetrux.tech
                  </a>
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-on-surface-muted mb-1">
                    Ventes &amp; OEM/ODM
                  </p>
                  <a
                    href="mailto:sales@vetrux.tech"
                    className="text-[15px] font-semibold text-on-background hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  >
                    sales@vetrux.tech
                  </a>
                </div>
              </div>
            </div>

            <div className="reveal-card bg-surface-container-lowest p-8 flex flex-col border border-outline-variant/30">
              <div className="w-11 h-11 bg-accent-soft flex items-center justify-center mb-6">
                <Building2 size={20} className="text-accent" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-4">
                Société
              </p>
              <div className="space-y-2 mt-auto">
                <p className="text-[15px] font-semibold text-on-background">
                  Vetrux Biotechnology (Chuxiong) Co., Ltd.
                </p>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  蔚萃生物科技（楚雄）有限公司
                </p>
              </div>
            </div>

            <div className="reveal-card bg-surface-container-lowest p-8 flex flex-col border border-outline-variant/30">
              <div className="w-11 h-11 bg-accent-soft flex items-center justify-center mb-6">
                <MapPin size={20} className="text-accent" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-4">
                Localisation
              </p>
              <div className="space-y-2 mt-auto">
                <p className="text-[15px] text-on-background leading-relaxed">
                  Chuxiong, province du Yunnan,<br />
                  Chine
                </p>
              </div>
            </div>
          </div>

          <div className="reveal-card mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-primary p-8 md:p-10 border-l-4 border-accent">
            <div>
              <p className="font-serif text-2xl md:text-3xl font-medium text-white tracking-tight leading-tight">
                Prêt à démarrer la conversation&nbsp;?
              </p>
              <p className="text-[15px] text-white/70 mt-2">
                Parlez-nous de votre projet — nous répondons sous 24 heures.
              </p>
            </div>
            <Link href="/fr/inquiry" className="flex-shrink-0">
              <Button variant="accent" size="lg" icon={ArrowRight}>
                Envoyer une Demande
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
