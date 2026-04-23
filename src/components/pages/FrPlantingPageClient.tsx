'use client'

import { useRef } from 'react';
import { Leaf, Thermometer, Droplets, Sun, Shield, CheckCircle } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '@/components/atoms/Badge';
import SectionLabel from '@/components/atoms/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '[X] ha', label: 'Surface de culture' },
  { value: '26', label: 'Colonnes de chromatographie' },
  { value: '[X]M+', label: 'Capacité de propagation annuelle' },
  { value: '1 800m+', label: 'Avantage altitude Yunnan' },
];

const zones = [
  {
    id: '01',
    tag: 'Zone 01 — Semis & Propagation',
    title: 'Sélection des semences & bouturage',
    description:
      'Notre programme de sélection commence par le choix de semences d\'élite et la propagation clonale dans notre pépinière de Chuxiong. Les cultivars riches en CBD sont propagés par bouturage en serres contrôlées, garantissant une cohérence génétique et une uniformité phytochimique à chaque cycle de production.',
    images: [
      { src: '/images/planting/seedling-nursery.jpg', alt: 'Jeunes plants de chanvre CBD en plateaux de semis' },
      { src: '/images/planting/cloning-propagation.jpg', alt: 'Clones de chanvre en plateaux de propagation' },
      { src: '/images/planting/rooted-cutting.jpg', alt: 'Main tenant une bouture de chanvre enracinée' },
      { src: '/images/planting/propagation-greenhouse.jpg', alt: 'Zone de propagation en serre à grande échelle' },
    ],
    specs: [
      { label: 'Méthode de propagation', value: 'Boutures clonales + Semences' },
      { label: 'Environnement de culture', value: 'Serre contrôlée' },
      { label: 'Criblage génétique', value: 'Sélection de cultivars riches en CBD' },
      { label: 'Taux d\'enracinement', value: '≥ 95%' },
    ],
    icon: Leaf,
  },
  {
    id: '02',
    tag: 'Zone 02 — Croissance végétative',
    title: 'Culture en serre & croissance contrôlée',
    description:
      'Les clones transplantés entrent dans nos serres à grande échelle à Chuxiong, où l\'ensoleillement en altitude et les conditions riches en UV du Yunnan favorisent naturellement une croissance végétative vigoureuse. L\'irrigation contrôlée, l\'apport en nutriments et la gestion de la canopée assurent un développement uniforme des plantes avant la transition vers la floraison.',
    images: [
      { src: '/images/planting/vegetative-growth.jpg', alt: 'Rangées de plantes de chanvre végétatives en serre' },
      { src: '/images/planting/vegetative-canopy.jpg', alt: 'Canopée dense de chanvre vert en phase végétative' },
    ],
    specs: [
      { label: 'Méthode de culture', value: 'Serre + Lumière naturelle' },
      { label: 'Altitude', value: '1 800m+ (Plateau du Yunnan)' },
      { label: 'Source d\'eau', value: 'Irrigation par source de montagne' },
      { label: 'Politique d\'intrants', value: 'Zéro pesticide synthétique' },
    ],
    icon: Sun,
  },
  {
    id: '03',
    tag: 'Zone 03 — Floraison & Récolte',
    title: 'Floraison mature & développement des trichomes',
    description:
      'Pendant la phase de floraison, l\'exposition UV intense du Yunnan favorise un développement exceptionnel des trichomes et des cannabinoïdes. Nos agronomes surveillent la maturité des trichomes et la teneur en CBD pour déterminer le moment optimal de récolte, maximisant le rendement en cannabinoïdes tout en respectant les seuils de THC. Les inflorescences denses et résineuses sont récoltées à la main et transférées vers le séchage et le traitement contrôlés.',
    images: [
      { src: '/images/planting/flowering-greenhouse.jpg', alt: 'Serre de chanvre en fin de floraison' },
      { src: '/images/planting/flowering-cola-closeup.jpg', alt: 'Gros plan d\'un bourgeon de chanvre CBD avec trichomes' },
      { src: '/images/planting/mature-bud-trichomes.jpg', alt: 'Bourgeon de chanvre mature dense avec trichomes visibles' },
      { src: '/images/planting/flowering-dense-canopy.jpg', alt: 'Canopée dense de chanvre en floraison' },
      { src: '/images/planting/flowering-pistils.jpg', alt: 'Chanvre en floraison avec pistils blancs' },
    ],
    specs: [
      { label: 'Surveillance des trichomes', value: 'Analyse visuelle + labo quotidienne' },
      { label: 'Méthode de récolte', value: 'Récolte manuelle au pic de CBD' },
      { label: 'Avantage UV', value: 'Exposition UV en haute altitude' },
      { label: 'Processus de séchage', value: 'Séchage contrôlé basse température' },
    ],
    icon: Thermometer,
  },
];

const galleryImages = [
  { src: '/images/planting/propagation-greenhouse.jpg', alt: 'Zone de propagation en serre à grande échelle' },
  { src: '/images/planting/seedling-nursery.jpg', alt: 'Jeunes plants de chanvre CBD en plateaux de semis' },
  { src: '/images/planting/cloning-propagation.jpg', alt: 'Clones de chanvre en plateaux de propagation' },
  { src: '/images/planting/vegetative-canopy.jpg', alt: 'Canopée dense de chanvre vert en phase végétative' },
  { src: '/images/planting/flowering-cola-closeup.jpg', alt: 'Gros plan d\'un bourgeon de chanvre CBD avec trichomes' },
  { src: '/images/planting/flowering-dense-canopy.jpg', alt: 'Canopée dense de chanvre en floraison vue de dessus' },
];

const traceabilityItems = [
  { icon: Shield, label: 'Intégration semence-à-isolat', desc: 'Vetrux contrôle chaque étape, de la sélection des semences et de la culture à l\'extraction et l\'isolation — intégration verticale complète au sein d\'une seule chaîne d\'approvisionnement.' },
  { icon: Droplets, label: 'Système de culture standardisé', desc: 'Des procédures opérationnelles standard régissent chaque phase de notre processus de culture : propagation, transplantation, gestion des nutriments, floraison et calendrier de récolte sont tous standardisés sur notre base de Chuxiong.' },
  { icon: Leaf, label: 'Chaîne d\'approvisionnement traçable', desc: 'Chaque lot de biomasse est traçable depuis la zone de serre spécifique et la date de récolte jusqu\'au numéro de lot final d\'isolat de CBD et au certificat d\'analyse.' },
  { icon: CheckCircle, label: 'Documentation des lots & certificat d\'analyse', desc: 'Les dossiers de lots complets, les rapports de laboratoires tiers et les certificats d\'analyse sont disponibles pour chaque cycle de production sur demande B2B qualifiée.' },
];

export default function FrPlantingPageClient() {
  const statsRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const zonesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const traceabilityRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!statsRef.current) return;
    const items = statsRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: statsRef.current, start: 'top 80%' },
    });
  }, { scope: statsRef });

  useGSAP(() => {
    if (!introRef.current) return;
    const items = introRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: introRef.current, start: 'top 80%' },
    });
  }, { scope: introRef });

  useGSAP(() => {
    if (!zonesRef.current) return;
    const items = zonesRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: zonesRef.current, start: 'top 80%' },
    });
  }, { scope: zonesRef });

  useGSAP(() => {
    if (!galleryRef.current) return;
    const items = galleryRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: galleryRef.current, start: 'top 80%' },
    });
  }, { scope: galleryRef });

  useGSAP(() => {
    if (!traceabilityRef.current) return;
    const items = traceabilityRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: traceabilityRef.current, start: 'top 80%' },
    });
  }, { scope: traceabilityRef });

  useGSAP(() => {
    if (!ctaRef.current) return;
    const items = ctaRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' },
    });
  }, { scope: ctaRef });

  return (
    <div className="bg-surface">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="default" className="mb-6">Centre de culture & sélection · Chuxiong, Yunnan</Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold text-on-background tracking-tighter leading-[0.95] mb-6">
                Cultivé en altitude.
                <br />
                <span className="text-primary">Traçable jusqu&apos;à la source.</span>
              </h1>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8 max-w-md">
                Vetrux exploite son propre centre de culture et de sélection à Chuxiong, province du Yunnan —
                où le terrain en altitude et l&apos;exposition UV intense créent des conditions idéales pour
                le chanvre riche en CBD aux profils exceptionnels de cannabinoïdes et de terpènes.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Haute altitude Yunnan', 'Culture riche en UV', 'Semence-à-isolat', 'Verticalement intégré'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src="/images/planting/vegetative-growth.jpg" alt="Serre de la base de culture Vetrux à Chuxiong, Yunnan" className="w-full h-[500px] object-cover" />
              <div className="absolute bottom-6 right-6 bg-on-background/90 backdrop-blur p-4">
                <p className="text-xs text-white/50 tracking-widest uppercase mb-1">Centre de culture & sélection</p>
                <p className="text-sm font-bold text-white">Chuxiong, Province du Yunnan · 1 800m+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────────────────── */}
      <section className="bg-primary py-10">
        <div ref={statsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="reveal-card text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter">{s.value}</p>
                <p className="text-xs font-semibold tracking-widest uppercase text-white/50 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO BLOCK ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={introRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="reveal-card lg:col-span-5">
              <SectionLabel>Pourquoi l&apos;intégration verticale compte</SectionLabel>
              <h2 className="text-4xl font-extrabold text-on-background tracking-tighter leading-tight mt-4">
                Les meilleurs extraits commencent
                <br />dans les champs.
              </h2>
            </div>
            <div className="reveal-card lg:col-span-7 space-y-5 pt-2">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Chez Vetrux, l&apos;intégration verticale n&apos;est pas un mot à la mode — c&apos;est notre modèle opérationnel. En contrôlant
                la culture, la sélection et l&apos;extraction sous un même toit, nous éliminons les incertitudes de la chaîne d&apos;approvisionnement
                et livrons des profils de cannabinoïdes cohérents lot après lot.
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Notre base de Chuxiong se situe sur le plateau du Yunnan à plus de 1 800 mètres, où le rayonnement UV
                naturellement intense et l&apos;air pur de montagne favorisent un développement supérieur des trichomes et une
                accumulation de cannabinoïdes — des avantages qu&apos;aucune installation intérieure ne peut reproduire.
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                De la sélection propriétaire de cultivars riches en CBD à la purification chromatographique à 26 colonnes,
                chaque maillon de notre chaîne semence-à-isolat est optimisé pour la pureté, la puissance et la traçabilité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GROWING ZONES ───────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={zonesRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <SectionLabel>Zones de culture</SectionLabel>
            <h2 className="text-4xl font-extrabold text-on-background tracking-tighter mb-16 max-w-xl">Trois zones. Un processus contrôlé.</h2>
          </div>

          <div className="space-y-28">
            {zones.map((zone, idx) => {
              const Icon = zone.icon;
              const isReversed = idx % 2 === 1;
              return (
                <div key={zone.id} className="reveal-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`grid grid-cols-2 gap-3 ${isReversed ? 'lg:order-2' : ''}`}>
                    {zone.images.map((img, i) => (
                      <div key={i} className="overflow-hidden">
                        <img src={img.src} alt={img.alt} className="w-full h-52 object-cover hover:scale-[1.03] transition-transform duration-500" />
                      </div>
                    ))}
                    <div className="col-span-2 flex items-center gap-3 mt-1">
                      <span className="text-xs font-mono tracking-widest text-on-surface-variant">#{zone.id}</span>
                      <div className="flex-1 h-px bg-outline-variant/30" />
                    </div>
                  </div>

                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded">
                        <Icon size={16} className="text-primary" />
                      </div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant">{zone.tag}</p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-on-background tracking-tighter mb-4">{zone.title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-8">{zone.description}</p>

                    <div className="space-y-0">
                      {zone.specs.map((spec, i) => (
                        <div key={spec.label} className={`flex justify-between items-center py-3 ${i < zone.specs.length - 1 ? 'border-b border-outline-variant/30' : ''}`}>
                          <span className="text-xs font-semibold tracking-wider uppercase text-on-surface-variant">{spec.label}</span>
                          <span className="text-sm font-bold text-on-surface">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY GRID ─────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={galleryRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <SectionLabel>Documentation terrain</SectionLabel>
              <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mt-3">À l&apos;intérieur de la base de culture de Chuxiong</h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-sm leading-relaxed">
              Photos réelles de notre centre de culture et de sélection au Yunnan — de la propagation des semis à la floraison et la récolte.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className={`reveal-card overflow-hidden group ${i === 0 ? 'col-span-2 md:col-span-1 md:row-span-2' : ''}`}>
                <img src={img.src} alt={img.alt} className={`w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03] ${i === 0 ? 'h-full min-h-[320px]' : 'h-48'}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRACEABILITY BLOCK ─────────────────────────────────────────── */}
      <section className="py-24 bg-on-background">
        <div ref={traceabilityRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="reveal-card lg:col-span-4">
              <SectionLabel light>Traçabilité complète</SectionLabel>
              <h2 className="text-4xl font-extrabold text-white tracking-tighter leading-tight mt-4">
                Semence-à-isolat
                <br />Intégration verticale
              </h2>
              <p className="mt-5 text-sm text-white/50 leading-relaxed">
                Le modèle verticalement intégré de Vetrux signifie que chaque gramme d&apos;isolat de CBD est traçable
                jusqu&apos;à une zone de serre spécifique, un lot de récolte et un cycle d&apos;extraction dans notre installation de Chuxiong. Pas d&apos;intermédiaires,
                pas de zones d&apos;ombre — juste une chaîne d&apos;approvisionnement entièrement traçable et standardisée.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traceabilityItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="reveal-card bg-white/5 p-6 hover:bg-white/10 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon size={16} className="text-primary-fixed" />
                      <p className="text-xs font-semibold tracking-widest uppercase text-white/60">{item.label}</p>
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={ctaRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="reveal-card lg:col-span-8">
              <SectionLabel>Demande de gros</SectionLabel>
              <h2 className="text-4xl font-extrabold text-on-background tracking-tighter leading-tight mt-3">
                Approvisionnez-vous directement
                <br />auprès du producteur.
              </h2>
              <p className="mt-4 text-sm text-on-surface-variant leading-relaxed max-w-lg">
                Évitez les intermédiaires. Contactez notre équipe pour l&apos;approvisionnement en biomasse en gros, l&apos;isolat en marque blanche ou les contrats d&apos;extraction sur mesure — le tout soutenu par notre chaîne d&apos;approvisionnement verticalement intégrée.
              </p>
            </div>
            <div className="reveal-card lg:col-span-4 flex flex-col gap-3">
              <a href="/fr/inquiry" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-xs font-bold tracking-widest uppercase hover:bg-primary-container transition-all duration-300">
                Demander un devis
              </a>
              <a href="/fr/products/cbd-isolate" className="inline-flex items-center justify-center px-8 py-4 border border-outline-variant/40 text-on-surface text-xs font-bold tracking-widest uppercase hover:bg-surface-container transition-all duration-300">
                Voir les spécifications produit
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
