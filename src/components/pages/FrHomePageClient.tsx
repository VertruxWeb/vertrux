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

export default function FrHomePageClient() {
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
          alt="Installation d'extraction de CBD Vetrux Biotechnology à Chuxiong, Yunnan"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/60 to-transparent" />

        <div ref={heroContentRef} className="relative z-10 max-w-container mx-auto px-6 lg:px-12 pb-20 pt-32">
          <div className="max-w-3xl">
            <div className="hero-animate">
              <Badge variant="glass" className="mb-6">Vetrux Biotechnology · Chuxiong, Yunnan</Badge>
            </div>

            <h1 className="hero-animate text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[0.95] mb-6">
              Matières Premières CBD<br />& Extraits Botaniques
            </h1>

            <p className="hero-animate text-base md:text-lg text-white/70 leading-relaxed max-w-xl mb-10">
              Vetrux — une marque de 蔚萃生物 — fournit de l&apos;isolat de CBD de qualité pharmaceutique
              par extraction à l&apos;éthanol et purification chromatographique depuis notre site de Chuxiong, Yunnan.
              Services OEM/ODM, conseil technique et approvisionnement en gros pour partenaires B2B internationaux.
            </p>

            <div className="hero-animate flex flex-wrap gap-4">
              <Link href="/fr/equipment">
                <Button variant="primary" size="lg" icon={ArrowRight}>
                  Découvrir l&apos;Installation
                </Button>
              </Link>
              <Link href="/fr/products/cbd-isolate">
                <Button variant="glass" size="lg">
                  Spécifications Techniques
                </Button>
              </Link>
            </div>
          </div>

          <div className="hero-animate flex flex-wrap gap-6 mt-16 pt-8 border-t border-white/10">
            {[
              { value: '20+', label: 'Ensembles d\'Extraction' },
              { value: '26', label: 'Colonnes de Chromatographie' },
              { value: '99,5%', label: 'Pureté CBD' },
              { value: '5+', label: 'Années d\'Expérience' },
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
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">Contexte du Marché</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Le marché européen du CBD devrait atteindre <span className="text-on-surface font-semibold">3,2 milliards d&apos;euros d&apos;ici 2027</span>, porté par les applications pharmaceutiques, nutraceutiques et cosmétiques. <a href="https://prohibitionpartners.com" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant/60 text-xs underline underline-offset-2">(Prohibition Partners, Rapport Européen sur le CBD)</a>
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">Science de l&apos;Extraction</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Vetrux utilise l&apos;<span className="text-on-surface font-semibold">extraction à l&apos;éthanol combinée à une purification chromatographique</span> avec 26 colonnes industrielles (700L chacune). Ce processus multi-étapes — extraction, séparation chromatographique, concentration et cristallisation — atteint une pureté CBD ≥99,5% tout en préservant l&apos;intégrité moléculaire.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">Profil Fabricant</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Depuis notre base de production à <span className="text-on-surface font-semibold">Chuxiong, province du Yunnan</span>, Vetrux Biotechnology contrôle l&apos;ensemble de la chaîne de production — du traitement de la biomasse de chanvre à l&apos;extraction à l&apos;éthanol, la purification chromatographique et la cristallisation finale jusqu&apos;à la libération des lots et l&apos;emballage d&apos;exportation.
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
                alt="20 ensembles de cuves d'extraction industrielles de 6m³ chez Vetrux"
                width={800}
                height={520}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-primary text-white px-5 py-3">
                <p className="text-xs tracking-widest uppercase font-semibold text-white/70">Capacité</p>
                <p className="text-2xl font-extrabold tracking-tighter">20× Cuves d&apos;Extraction 6m³</p>
              </div>
            </div>

            <div ref={featureCardsRef}>
              <div className="reveal-card">
                <SectionLabel>Échelle Industrielle</SectionLabel>
                <h2 className="text-4xl md:text-5xl font-extrabold text-on-background tracking-tighter leading-tight mb-6">
                  Infrastructure Industrielle
                  <br />
                  <span className="text-primary">Contrôle de Précision</span>
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-10 max-w-md">
                  Notre site de Chuxiong abrite 20 ensembles de cuves d&apos;extraction de 6m³, 26 colonnes de chromatographie (700L),
                  et 10 ensembles de concentrateurs — complétés par des tours de récupération de solvants, un stockage d&apos;éthanol
                  et des systèmes analytiques HPLC avec contrôle entièrement automatisé.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: FlaskConical, title: 'Extraction & Purification à l\'Éthanol', desc: 'Extraction industrielle à l\'éthanol suivie d\'une purification chromatographique sur 26 colonnes pour une pureté CBD ≥99,5%.' },
                  { icon: Award, title: 'OEM/ODM & Conseil Technique', desc: 'Fabrication sur mesure, support de formulation et conseil technique pour les produits CBD et extraits botaniques.' },
                  { icon: Layers, title: 'Raffinage Multi-Étapes', desc: 'Séparation chromatographique, concentration, cristallisation et contrôle qualité par HPLC sur chaque lot.' },
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
                alt="Isolat de CBD Pureté 99,5%"
                width={1200}
                height={580}
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="w-full h-[580px] object-cover object-[center_40%]"
              />
              <div className="absolute top-6 left-6">
                <Badge variant="default">Pureté Garantie</Badge>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-48 p-8 bg-gradient-to-t from-on-background/90 via-on-background/40 to-transparent flex items-end">
                <h2 className="text-4xl font-extrabold text-white tracking-tighter leading-tight">
                  Aperçu Produit<br />Isolat de CBD
                </h2>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="reveal-card bg-primary p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-4">Données Techniques</p>
                  <p className="text-2xl font-extrabold text-white tracking-tighter leading-tight mb-2">Certificat d&apos;Analyse Disponible</p>
                  <p className="text-xs text-white/70 leading-relaxed">La documentation par lot et les informations produit peuvent être consultées lors de discussions B2B qualifiées.</p>
                </div>
                <Link href="/fr/inquiry" className="mt-6 inline-flex items-center gap-2 px-4 py-3 bg-white text-primary text-xs font-bold tracking-widest uppercase hover:bg-primary-fixed transition-colors duration-200">
                  <Download size={14} />
                  Demander la Documentation
                </Link>
              </div>

              <div className="reveal-card bg-surface-container-lowest p-8 flex-1">
                <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-4">Spécifications Clés</p>
                <SpecRow label="Pureté CBD (HPLC)" value="≥ 99,5%" />
                <SpecRow label="Teneur en THC" value="ND (Non Détecté)" />
                <SpecRow label="Apparence" value="Cristallin Blanc" />
                <SpecRow label="Résidus de Solvants" value="&lt; 10 PPM" isLast />
                <Link href="/fr/products/cbd-isolate" className="mt-6 inline-flex items-center gap-1 text-xs font-semibold tracking-wider uppercase text-primary hover:text-primary-container transition-colors duration-200">
                  Spécifications Complètes <ArrowRight size={14} />
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
              { label: 'Qualité', sub: 'Tests HPLC · Pureté ≥99,5%', href: '/fr/quality-assurance' },
              { label: 'Vente en Gros', sub: 'CBD & Extraits Botaniques en Vrac', href: '/fr/wholesale-cbd-isolate' },
              { label: 'Profil Fabricant', sub: 'Base de Production Chuxiong, Yunnan', href: '/fr/cbd-isolate-manufacturer' },
              { label: 'Demande Mondiale', sub: 'inquiry@vetrux.tech', href: '/fr/inquiry' },
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
          <SectionLabel>Questions Fréquentes</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-background tracking-tighter leading-tight mb-12">
            Ce Que Nos Acheteurs Demandent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'Qu\'est-ce que l\'isolat de CBD et en quoi diffère-t-il du CBD à spectre complet ?',
                a: 'L\'isolat de CBD est la forme la plus pure de cannabidiol — une poudre cristalline blanche contenant ≥99,5% de CBD (CAS : 13956-29-1, Code SH : 2907299020) dont tous les autres cannabinoïdes, terpènes et composés végétaux ont été éliminés. Contrairement au CBD à spectre complet qui conserve le THC et d\'autres cannabinoïdes, l\'isolat de CBD est sans THC détectable (ND), ce qui le rend idéal pour les formulations pharmaceutiques et nutraceutiques nécessitant un dosage précis et une conformité réglementaire.',
              },
              {
                q: 'Quels services Vetrux propose-t-il au-delà de l\'isolat de CBD ?',
                a: 'Au-delà de la vente de matières premières CBD, Vetrux propose des services de fabrication sur mesure OEM/ODM, du conseil technique, et fournit d\'autres extraits botaniques dont les anthocyanes, les glycosides de stéviol et la globuline de graines de chanvre. Contactez sales@vetrux.tech pour les demandes OEM/ODM ou inquiry@vetrux.tech pour les informations produit générales.',
              },
              {
                q: 'Quelles options de conditionnement sont disponibles pour l\'isolat de CBD ?',
                a: 'Vetrux propose l\'isolat de CBD en sachets PE de 5 kg (27×60 cm), sachets aluminium de 5 kg (35×50 cm) et cartons d\'exportation (465×285×295 mm). Un conditionnement personnalisé est disponible via nos services OEM/ODM. Tarifs dégressifs pour les commandes en gros — contactez sales@vetrux.tech.',
              },
              {
                q: 'Comment Vetrux garantit-il la pureté du CBD et la conformité sans THC ?',
                a: 'Chaque lot est soumis à des tests HPLC pour confirmer une pureté CBD ≥99,5% et un statut THC non détecté (ND). Notre processus d\'extraction à l\'éthanol et de purification chromatographique sur 26 colonnes assure une qualité constante. Une documentation complète incluant le COA, le certificat d\'origine et la FDS est fournie avec chaque expédition.',
              },
              {
                q: 'Où se situe Vetrux et quelles conditions de livraison sont disponibles ?',
                a: 'Vetrux Biotechnology est basée à Chuxiong, province du Yunnan, Chine. Nous proposons des livraisons FOB Kunming, CIF et DDP vers des destinations mondiales. Le délai standard est de 10 à 14 jours ouvrables à compter de la confirmation de commande. Toutes les expéditions incluent le COA spécifique au lot, le certificat d\'origine et la fiche de données de sécurité. Contactez inquiry@vetrux.tech pour les détails logistiques.',
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
            <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/40 mb-3">Références &amp; Normes</p>
            <ul className="flex flex-col gap-1.5 text-xs text-on-surface-variant/60">
              <li><a href="https://www.who.int/docs/default-source/controlled-substances/whocbdreportmay2018-2.pdf" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-on-surface-variant">Comité OMS d&apos;experts sur la pharmacodépendance — Rapport d&apos;examen critique du Cannabidiol (CBD) (2018)</a></li>
              <li><a href="https://food.ec.europa.eu/safety/novel-food/legislation_en" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-on-surface-variant">Règlement Novel Food de l&apos;UE (UE) 2015/2283 — Commission Européenne</a></li>
              <li><a href="https://www.iso.org/standard/62085.html" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-on-surface-variant">ISO 9001:2015 — Systèmes de Management de la Qualité</a></li>
              <li><a href="https://www.iso.org/standard/39883.html" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-on-surface-variant">ISO/IEC 17025 — Exigences Générales pour les Laboratoires d&apos;Essais et d&apos;Étalonnage</a></li>
              <li><a href="https://www.ich.org/page/quality-guidelines" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-on-surface-variant">ICH Q3C — Impuretés : Directive sur les Solvants Résiduels</a></li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
