'use client'

import { useRef } from 'react';
import { ArrowRight, Download, CheckCircle, Microscope, TestTube, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import SectionLabel from '@/components/atoms/SectionLabel';
import SpecRow from '@/components/molecules/SpecRow';
import ProcessSteps from '@/components/molecules/ProcessSteps';
import { useReveal } from '@/hooks/useReveal';

const technicalMetrics = [
  { label: 'Produit', value: 'Isolat CBD', status: 'Isolat de Cannabidiol' },
  { label: 'Pureté', value: '≥99,9%', status: 'THC non détecté (ND)' },
  { label: 'Emballage intérieur', value: '5 kg/sac', status: 'PE ou feuille d\'aluminium' },
  { label: 'Emballage extérieur', value: '465×285×295 mm', status: 'Carton d\'exportation' },
];

const processSteps = [
  { title: 'Culture', desc: 'Chanvre industriel cultivé au Yunnan, issu de notre base de culture de Chuxiong, selon des protocoles de culture standardisés.' },
  { title: 'Extraction', desc: 'Extraction à l\'éthanol dans des cuves multifonctions de 6 m³ sous température et conditions de solvant contrôlées.' },
  { title: 'Purification', desc: 'Chromatographie à échelle industrielle isolant le cannabidiol de l\'extrait brut par élution en gradient.' },
  { title: 'Contrôle Qualité', desc: 'Profilage cannabinoïde HPLC en interne et vérification par lot avant libération.' },
  { title: 'Conditionnement', desc: 'Sacs PE ou en feuille d\'aluminium qualité alimentaire placés dans des cartons d\'exportation, palettisés avec film rétractable.' },
];

const qualityCards = [
  {
    icon: Microscope,
    title: 'Gestion de la qualité',
    desc: 'Capacité analytique HPLC interne. Support documentaire disponible selon les exigences de commande.',
    bg: 'bg-surface-container-low',
    image: '/images/products/cbd-crystal-lab.jpg',
  },
  {
    icon: TestTube,
    title: 'Support documentaire',
    desc: 'Documents d\'accompagnement incluant COA, FDS, rapports d\'essai, factures commerciales et listes de colisage, pouvant être organisés selon le lot réel et les conditions de commande.',
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
  const processRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const qualityRef = useRef<HTMLDivElement>(null);

  useReveal(heroRef);
  useReveal(metricsRef, { stagger: 0.08 });
  useReveal(processRef, { stagger: 0.08 });
  useReveal(specsRef);
  useReveal(qualityRef);

  return (
    <div className="bg-surface">

      {/* ── PRODUCT HERO ────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-card">
              <Badge variant="default" className="mb-6">Matières Premières CBD</Badge>
              <h1 className="font-serif font-medium text-[clamp(2.4rem,5.5vw,4.5rem)] text-on-background tracking-tight leading-[1.0] mb-6">
                Isolat de CBD
                <br />
                <span className="italic text-primary">Pureté 99,9%</span>
              </h1>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-8 max-w-md">
                Isolat CBD de qualité pharmaceutique à ≥99,9 % de pureté — culture traçable, vérification HPLC en interne et conditionnement prêt à l&apos;export pour partenaires B2B.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  'Isolat de CBD',
                  'OEM/ODM',
                  'Services Techniques',
                  '≥99,9% Pureté',
                ].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/fr/inquiry">
                  <Button variant="accent" size="lg" icon={ArrowRight}>
                    Demande de gros
                  </Button>
                </Link>
                <Link href="/fr/inquiry">
                  <Button variant="secondary" size="lg" icon={Download} iconPosition="left">
                    Demander la documentation produit
                  </Button>
                </Link>
              </div>
            </div>

            <div className="reveal-card relative">
              <Image src="/images/products/cbd-crystal-closeup.jpg" alt="Isolat de CBD poudre cristalline blanche à 99,9% de pureté" width={800} height={500} priority sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-[500px] object-cover" />
              <div className="absolute bottom-6 right-6 bg-surface-ink/90 backdrop-blur p-4">
                <p className="text-xs text-white/60 tracking-[0.35em] uppercase mb-1">Isolat CBD</p>
                <p className="text-sm font-bold text-white">Pureté : ≥99,9%</p>
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
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-4">
              Informations produit
            </h2>
            <p className="text-[15px] text-on-surface-variant mb-12 max-w-xl">
              La documentation d&apos;accompagnement incluant COA, FDS, rapports d&apos;essai et autres documents d&apos;expédition peut être fournie selon les exigences de commande. La disponibilité documentaire spécifique dépend du lot réel, des conditions de commande et des résultats de vérification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {technicalMetrics.map((metric) => (
              <div key={metric.label} className="reveal-card bg-surface-container-lowest p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200">
                <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">{metric.label}</p>
                <p className="text-2xl font-extrabold text-on-surface tracking-tighter mb-1">{metric.value}</p>
                <p className="text-xs text-on-surface-variant/70">{metric.status}</p>
              </div>
            ))}
          </div>

          <div className="reveal-card">
            <Link href="/fr/inquiry">
              <Button variant="accent" size="md" icon={Download} iconPosition="left">
                Demander les informations produit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS DIAGRAM ─────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={processRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-10">
            <SectionLabel>Du champ à l&apos;isolat fini</SectionLabel>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] max-w-xl">
              Une chaîne de production contrôlée et traçable.
            </h2>
          </div>
          <div className="reveal-card">
            <ProcessSteps steps={processSteps} />
          </div>
        </div>
      </section>

      {/* ── PRODUCT SPECIFICATIONS ─────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={specsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="reveal-card">
              <SectionLabel>Spécifications produit</SectionLabel>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-8">Fiche technique complète</h2>
              <div>
                <SpecRow label="Nom du produit" value="Isolat de CBD" />
                <SpecRow label="Pureté" value="≥99,9% (THC non détecté)" />
                <SpecRow label="Emballage (intérieur)" value="Sacs PE 5 kg/sac (27×60 cm, qualité alimentaire) ou sacs en feuille d'aluminium 5 kg/sac (35×50 cm, qualité alimentaire)" />
                <SpecRow label="Emballage (extérieur)" value="Cartons d'exportation 465×285×295 mm, 2 sacs par carton" />
                <SpecRow label="Palettisation" value="Palettes plastiques avec film rétractable" isLast />
              </div>
            </div>

            <div className="reveal-card">
              <SectionLabel>Conformité & Documentation</SectionLabel>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-6">Documentation par lot & Conformité export</h2>
              <div className="mb-6 p-4 bg-surface-container border-l-2 border-accent">
                <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">Avis d&apos;exportation & d&apos;importation</p>
                <p className="text-[13px] text-on-surface-variant leading-relaxed">
                  Pour les produits nécessitant des permis d&apos;exportation ou une vérification internationale, le processus d&apos;exportation peut impliquer une confirmation de conformité auprès des autorités du pays de destination. La conformité à l&apos;importation du pays de destination — y compris les permis, licences et approbations réglementaires — est de la{' '}
                  <span className="font-semibold text-on-surface">responsabilité de l&apos;acheteur/importateur</span>. La documentation est organisée selon les exigences réelles de commande.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { standard: 'Certificat d\'analyse (COA)', detail: 'Peut être fourni selon les exigences de commande' },
                  { standard: 'Fiche de données de sécurité (FDS)', detail: 'Peut être fournie selon les exigences de commande' },
                  { standard: 'Rapports d\'essai', detail: 'Peuvent être fournis selon les exigences de commande' },
                  { standard: 'Facture commerciale', detail: 'Fournie par expédition' },
                  { standard: 'Liste de colisage', detail: 'Fournie par expédition' },
                ].map((item) => (
                  <div key={item.standard} className="flex items-start gap-3 py-3 border-b border-outline-variant/20 last:border-0">
                    <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-on-surface">{item.standard}</p>
                      <p className="text-[13px] text-on-surface-variant">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALITY ASSURANCE BENTO ─────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={qualityRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card flex flex-wrap items-center gap-4 mb-12">
            <SectionLabel className="mb-0">Qualité & Gammes de produits</SectionLabel>
            <div className="flex gap-3">
              {['Isolat de CBD', 'OEM/ODM', 'Services Techniques'].map((cert) => (
                <span key={cert} className="px-3 py-1 bg-primary-fixed text-primary text-xs font-bold tracking-wider uppercase rounded-full">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <h2 className="reveal-card font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-12 max-w-xl">
            Isolat CBD pour l&apos;approvisionnement B2B mondial
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {qualityCards.map((card) => (
              <div key={card.title} className={`reveal-card ${card.bg} p-8 ${card.bg === 'bg-primary' ? '' : 'border-l-2 border-transparent hover:border-accent transition-colors duration-200'}`}>
                {card.image && (
                  <div className="relative w-full h-40 mb-6">
                    <Image src={card.image} alt={card.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                  </div>
                )}
                <div className={`w-10 h-10 flex items-center justify-center mb-4 ${card.bg === 'bg-primary' ? 'bg-white/10' : 'bg-primary-fixed'}`}>
                  <card.icon size={20} className={card.bg === 'bg-primary' ? 'text-white' : 'text-primary'} />
                </div>
                <p className={`font-serif text-lg leading-snug mb-3 ${card.bg === 'bg-primary' ? 'text-white' : 'text-on-surface'}`}>
                  {card.title}
                </p>
                <p className={`text-[13px] leading-relaxed ${card.bg === 'bg-primary' ? 'text-white/70' : 'text-on-surface-variant'}`}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Liens internes vers les pages associées */}
          <div className="reveal-card mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/fr/quality-assurance" className="p-4 bg-surface-container-lowest hover:bg-surface-container border-l-2 border-transparent hover:border-accent transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
              <p className="text-xs font-bold text-accent tracking-[0.25em] uppercase">Assurance qualité →</p>
              <p className="text-[13px] text-on-surface-variant mt-1">Documentation & détails des tests</p>
            </Link>
            <Link href="/fr/wholesale-cbd-isolate" className="p-4 bg-surface-container-lowest hover:bg-surface-container border-l-2 border-transparent hover:border-accent transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
              <p className="text-xs font-bold text-accent tracking-[0.25em] uppercase">Demande de gros →</p>
              <p className="text-[13px] text-on-surface-variant mt-1">Tarifs en volume & conditions d&apos;export</p>
            </Link>
            <Link href="/fr/inquiry" className="p-4 bg-surface-container-lowest hover:bg-surface-container border-l-2 border-transparent hover:border-accent transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
              <p className="text-xs font-bold text-accent tracking-[0.25em] uppercase">Contacter les ventes →</p>
              <p className="text-[13px] text-on-surface-variant mt-1">inquiry@vetrux.tech</p>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
