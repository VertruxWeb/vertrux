'use client'

import { useRef } from 'react';
import { ArrowRight, Download, CheckCircle, Microscope, TestTube, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '@/components/atoms/Badge';
import SectionLabel from '@/components/atoms/SectionLabel';
import SpecRow from '@/components/molecules/SpecRow';

gsap.registerPlugin(ScrollTrigger);

const technicalMetrics = [
  { label: 'Numéro CAS', value: '13956-29-1', status: 'Cannabidiol' },
  { label: 'Code SH', value: '2907299020', status: 'Classification export' },
  { label: 'Produit', value: 'Cristal de CBD', status: 'Isolat' },
  { label: 'Analyse', value: 'HPLC', status: 'Par lot' },
  { label: 'Apparence', value: 'Cristallin blanc', status: 'Poudre' },
  { label: 'Formule moléculaire', value: 'C₂₁H₃₀O₂', status: 'PM 314,46 g/mol' },
  { label: 'Métaux lourds', value: 'Conforme', status: 'USP <232>' },
  { label: 'Microbien', value: 'Conforme', status: 'USP <61> / <62>' },
];

const qualityCards = [
  {
    icon: Microscope,
    title: 'Intégrité moléculaire',
    desc: 'Analyse HPLC complète sur chaque lot. Profil cannabinoïde vérifié par rapport aux standards de référence. COA, FDS et rapports d\'essai fournis par lot.',
    bg: 'bg-surface-container-low',
    image: '/images/products/cbd-crystal-lab.jpg',
  },
  {
    icon: TestTube,
    title: 'Documentation par lot',
    desc: 'Chaque expédition comprend COA, FDS, rapports d\'essai, factures commerciales et listes de colisage. L\'exportation de produits contrôlés peut nécessiter une vérification internationale.',
    bg: 'bg-primary',
    image: null,
  },
  {
    icon: TrendingUp,
    title: 'Emballage prêt à l\'export',
    desc: 'Sacs PE 5 kg (27×60 cm) et sacs en feuille d\'aluminium 5 kg (35×50 cm), qualité alimentaire. Cartons d\'exportation 465×285×295 mm, 2 sacs par carton. Palettes plastiques avec film rétractable pour un transport sécurisé.',
    bg: 'bg-surface-container-low',
    image: '/images/products/cbd-packaging-foil.jpg',
  },
];

export default function FrProductPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const qualityRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroRef.current) return;
    const items = heroRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: heroRef.current, start: 'top 80%' },
    });
  }, { scope: heroRef });

  useGSAP(() => {
    if (!metricsRef.current) return;
    const items = metricsRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: metricsRef.current, start: 'top 80%' },
    });
  }, { scope: metricsRef });

  useGSAP(() => {
    if (!specsRef.current) return;
    const items = specsRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: specsRef.current, start: 'top 80%' },
    });
  }, { scope: specsRef });

  useGSAP(() => {
    if (!qualityRef.current) return;
    const items = qualityRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: qualityRef.current, start: 'top 80%' },
    });
  }, { scope: qualityRef });

  return (
    <div className="bg-surface">

      {/* ── PRODUCT HERO ────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-card">
              <Badge variant="default" className="mb-6">Extraits botaniques</Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold text-on-background tracking-tighter leading-[0.95] mb-6">
                Isolat de CBD
                <br />
                <span className="text-primary">Cristal de CBD</span>
              </h1>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8 max-w-md">
                Isolat de CBD (CAS 13956-29-1, SH 2907299020), poudre cristalline blanche. Produit à partir de chanvre industriel du Yunnan. Nous fournissons également des anthocyanes, des glycosides de stéviol et de la globuline de graines de chanvre pour la R&D, la nutrition, l&apos;alimentation et les boissons, et les soins personnels.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  'Cristal de CBD',
                  'CAS 13956-29-1',
                  'Anthocyanes',
                  'Glycosides de stéviol',
                  'Globuline de chanvre',
                ].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/fr/inquiry" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-md hover:bg-primary-container transition-all duration-300">
                  Demande de gros <ArrowRight size={16} />
                </Link>
                <Link href="/fr/inquiry" className="inline-flex items-center gap-2 px-6 py-4 border border-outline/30 text-on-surface text-xs font-bold tracking-widest uppercase rounded-md hover:bg-surface-container transition-colors duration-200">
                  <Download size={14} />
                  Demander la documentation produit
                </Link>
              </div>
            </div>

            <div className="reveal-card relative">
              <Image src="/images/products/cbd-crystal-closeup.jpg" alt="Isolat de CBD poudre cristalline blanche" width={800} height={500} priority sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-[500px] object-cover" />
              <div className="absolute bottom-6 right-6 bg-on-background/90 backdrop-blur p-4">
                <p className="text-xs text-white/50 tracking-widest uppercase mb-1">CAS 13956-29-1</p>
                <p className="text-sm font-bold text-white">Code SH : 2907299020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL ANALYSIS GRID ─────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={metricsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <SectionLabel>Analyse technique</SectionLabel>
            <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-4">
              Certificat d&apos;analyse — Lot YN-CBD-0042
            </h2>
            <p className="text-sm text-on-surface-variant mb-4 max-w-xl">
              Cette section présente des informations techniques représentatives. La documentation produit peut
              être discutée directement avec notre équipe B2B selon la disponibilité actuelle.
            </p>
            <p className="text-xs text-on-surface-variant/70 mb-12 max-w-xl">
              La méthodologie d&apos;essai suit les procédures chromatographiques <span className="font-semibold text-on-surface-variant">USP &lt;621&gt;</span> et les directives de validation des méthodes analytiques <span className="font-semibold text-on-surface-variant">ICH Q2(R1)</span>. Les métaux lourds sont quantifiés selon <span className="font-semibold text-on-surface-variant">USP &lt;232&gt;/&lt;233&gt;</span> ; les solvants résiduels sont évalués par rapport aux limites <span className="font-semibold text-on-surface-variant">ICH Q3C</span> Classe I/II/III.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {technicalMetrics.map((metric) => (
              <div key={metric.label} className="reveal-card bg-surface-container-lowest p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-1">{metric.label}</p>
                <p className="text-2xl font-extrabold text-on-surface tracking-tighter mb-1">{metric.value}</p>
                <p className="text-xs text-on-surface-variant/70">{metric.status}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card">
            <Link href="/fr/inquiry" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-md hover:bg-primary-container transition-all duration-300">
              <Download size={14} />
              Demander les spécifications produit
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRODUCT SPECIFICATIONS ─────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={specsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="reveal-card">
              <SectionLabel>Spécifications produit</SectionLabel>
              <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-8">Fiche technique complète</h2>
              <div>
                <SpecRow label="Nom du produit" value="Isolat de CBD" />
                <SpecRow label="Nom chimique" value="Cannabidiol (CBD)" />
                <SpecRow label="Numéro CAS" value="13956-29-1" />
                <SpecRow label="Formule moléculaire" value="C₂₁H₃₀O₂" />
                <SpecRow label="Masse moléculaire" value="314,46 g/mol" />
                <SpecRow label="Analyse" value="HPLC (par lot)" />
                <SpecRow label="Apparence" value="Poudre cristalline blanche à blanc cassé" />
                <SpecRow label="Point de fusion" value="67°C – 69°C" />
                <SpecRow label="Solubilité" value="Éthanol, hexane, DMSO (insoluble dans l'eau)" />
                <SpecRow label="Stockage" value="Frais, sombre, sec. <25°C" />
                <SpecRow label="Durée de conservation" value="24 mois à compter de la fabrication" />
                <SpecRow label="Emballage (intérieur)" value="Sacs PE 5 kg/sac (27×60 cm, qualité alimentaire) ou sacs en feuille d'aluminium 5 kg/sac (35×50 cm, qualité alimentaire)" />
                <SpecRow label="Emballage (extérieur)" value="Cartons d'exportation 465×285×295 mm, 2 sacs par carton" />
                <SpecRow label="Palettisation" value="Palettes plastiques avec film rétractable" isLast />
              </div>
            </div>

            <div className="reveal-card">
              <SectionLabel>Conformité & Documentation</SectionLabel>
              <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-6">Documentation par lot & Conformité export</h2>
              <div className="mb-6 p-4 bg-surface-container border-l-2 border-primary">
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-1">Avis d&apos;exportation & d&apos;importation</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  L&apos;exportation de produits botaniques contrôlés peut nécessiter une{' '}
                  <span className="font-semibold text-on-surface">vérification internationale</span>. La conformité à l&apos;importation du pays de destination — y compris les permis, licences et approbations réglementaires — est de la{' '}
                  <span className="font-semibold text-on-surface">responsabilité de l&apos;acheteur/importateur</span>. Vetrux fournit des dossiers documentaires complets pour accompagner votre processus d&apos;importation.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { standard: 'Certificat d\'analyse (COA)', detail: 'Fourni par lot avec profil cannabinoïde complet' },
                  { standard: 'Fiche de données de sécurité (FDS)', detail: 'Documentation de sécurité des matériaux conforme au SGH' },
                  { standard: 'Rapports d\'essai tiers', detail: 'Vérification en laboratoire indépendant par cycle de production' },
                  { standard: 'Facture commerciale', detail: 'Facture détaillée fournie par expédition' },
                  { standard: 'Liste de colisage', detail: 'Détails d\'emballage complets par expédition de lot' },
                  { standard: 'Analyse des métaux lourds', detail: 'ICP-MS — USP <232> / <233>' },
                  { standard: 'Dépistage microbien & pesticides', detail: 'USP <61> dénombrement aérobie, panel de 400+ pesticides' },
                ].map((item) => (
                  <div key={item.standard} className="flex items-start gap-3 py-3 border-b border-outline-variant/20 last:border-0">
                    <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-on-surface">{item.standard}</p>
                      <p className="text-xs text-on-surface-variant">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALITY ASSURANCE BENTO ─────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={qualityRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card flex flex-wrap items-center gap-4 mb-12">
            <SectionLabel className="mb-0">Qualité & Gammes de produits</SectionLabel>
            <div className="flex gap-3">
              {['COA par lot', 'FDS fournie', 'Testé par tiers'].map((cert) => (
                <span key={cert} className="px-3 py-1 bg-primary-fixed text-primary text-xs font-bold tracking-wider uppercase rounded-full">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <h2 className="reveal-card text-3xl font-extrabold text-on-background tracking-tighter mb-12 max-w-xl">
            Isolat de CBD & Extraits botaniques pour la distribution B2B mondiale
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {qualityCards.map((card) => (
              <div key={card.title} className={`reveal-card ${card.bg} p-8`}>
                {card.image && (
                  <img src={card.image} alt={card.title} className="w-full h-40 object-cover mb-6" />
                )}
                <div className={`w-10 h-10 flex items-center justify-center mb-4 ${card.bg === 'bg-primary' ? 'bg-white/10' : 'bg-primary-fixed'}`}>
                  <card.icon size={20} className={card.bg === 'bg-primary' ? 'text-white' : 'text-primary'} />
                </div>
                <p className={`text-lg font-extrabold tracking-tighter mb-3 ${card.bg === 'bg-primary' ? 'text-white' : 'text-on-surface'}`}>
                  {card.title}
                </p>
                <p className={`text-xs leading-relaxed ${card.bg === 'bg-primary' ? 'text-white/70' : 'text-on-surface-variant'}`}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Gammes d'extraits botaniques */}
          <div className="reveal-card mt-12 p-8 bg-surface-container-low">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">Autres produits d&apos;extraits botaniques</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Anthocyanes', use: 'Formulations fonctionnelles, alimentation & boissons, soins personnels' },
                { name: 'Glycosides de stéviol', use: 'Nutrition & santé, alimentation & boissons, édulcorants fonctionnels' },
                { name: 'Globuline de chanvre', use: 'R&D, nutrition & santé, formulations fonctionnelles' },
                { name: 'Isolat de CBD', use: 'R&D, soins personnels, formulations fonctionnelles' },
              ].map((product) => (
                <div key={product.name}>
                  <p className="text-sm font-bold text-on-surface mb-1">{product.name}</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{product.use}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Liens internes vers les pages associées */}
          <div className="reveal-card mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/fr/quality-assurance" className="p-4 bg-surface-container-low hover:bg-surface-container transition-colors text-center">
              <p className="text-xs font-bold text-primary tracking-wider uppercase">Assurance qualité →</p>
              <p className="text-xs text-on-surface-variant mt-1">Documentation & détails des tests</p>
            </Link>
            <Link href="/fr/wholesale-cbd-isolate" className="p-4 bg-surface-container-low hover:bg-surface-container transition-colors text-center">
              <p className="text-xs font-bold text-primary tracking-wider uppercase">Demande de gros →</p>
              <p className="text-xs text-on-surface-variant mt-1">Tarifs en volume & conditions d&apos;export</p>
            </Link>
            <Link href="/fr/inquiry" className="p-4 bg-surface-container-low hover:bg-surface-container transition-colors text-center">
              <p className="text-xs font-bold text-primary tracking-wider uppercase">Contacter les ventes →</p>
              <p className="text-xs text-on-surface-variant mt-1">inquiry@vetrux.tech</p>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
