'use client'

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Thermometer, Droplets, Sun, Shield, CheckCircle } from 'lucide-react';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import SectionLabel from '@/components/atoms/SectionLabel';
import { useReveal } from '@/hooks/useReveal';

const stats = [
  { value: 'Yunnan', label: 'Base de culture' },
  { value: 'Chuxiong', label: 'Centre de sélection' },
  { value: 'Standardisé', label: 'Système de culture' },
  { value: 'Traçable', label: 'Chaîne d\'approvisionnement' },
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
      { label: 'Orientation', value: 'Sélection des semences & propagation' },
      { label: 'Environnement', value: 'Pépinière' },
      { label: 'Approche', value: 'Sélection de cultivars orientée qualité' },
      { label: 'Système', value: 'Processus standardisé' },
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
      { label: 'Méthode de culture', value: 'Culture en serre' },
      { label: 'Localisation', value: 'Province du Yunnan' },
      { label: 'Gestion', value: 'Conditions de culture contrôlées' },
      { label: 'Approche', value: 'Culture standardisée' },
    ],
    icon: Sun,
  },
  {
    id: '03',
    tag: 'Zone 03 — Floraison & Récolte',
    title: 'Floraison mature & développement des trichomes',
    description:
      'Pendant la phase de floraison, la gestion de la culture se concentre sur le suivi du développement des plantes et la détermination du moment de récolte approprié. Le matériel récolté est transféré vers un séchage et un traitement contrôlés pour soutenir l\'extraction en aval.',
    images: [
      { src: '/images/planting/flowering-greenhouse.jpg', alt: 'Serre de chanvre en fin de floraison' },
      { src: '/images/planting/flowering-cola-closeup.jpg', alt: 'Gros plan d\'un bourgeon de chanvre CBD avec trichomes' },
      { src: '/images/planting/mature-bud-trichomes.jpg', alt: 'Bourgeon de chanvre mature dense avec trichomes visibles' },
      { src: '/images/planting/flowering-dense-canopy.jpg', alt: 'Canopée dense de chanvre en floraison' },
      { src: '/images/planting/flowering-pistils.jpg', alt: 'Chanvre en floraison avec pistils blancs' },
    ],
    specs: [
      { label: 'Surveillance', value: 'Suivi des stades de croissance' },
      { label: 'Récolte', value: 'Calendrier de récolte géré' },
      { label: 'Avantage localisation', value: 'Conditions de culture du Yunnan' },
      { label: 'Post-récolte', value: 'Processus de séchage contrôlé' },
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
  { icon: Shield, label: 'Coordination culture & traitement', desc: 'Vetrux coordonne les activités de culture et d\'extraction depuis sa base de Chuxiong, soutenant la cohérence tout au long du processus de production.' },
  { icon: Droplets, label: 'Système de culture standardisé', desc: 'La gestion de la culture suit des processus standardisés couvrant la propagation, les conditions de culture et le calendrier de récolte sur la base de Chuxiong.' },
  { icon: Leaf, label: 'Système de culture traçable', desc: 'Le système de culture est conçu pour soutenir la traçabilité de la plantation jusqu\'au transfert du matériel pour le traitement d\'extraction.' },
  { icon: CheckCircle, label: 'Support documentaire', desc: 'La documentation d\'accompagnement incluant COA, FDS et rapports d\'essai peut être fournie selon les exigences de commande et la disponibilité réelle des lots.' },
];

export default function FrPlantingPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const zonesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const traceabilityRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useReveal(heroRef);
  useReveal(statsRef, { stagger: 0.1 });
  useReveal(introRef, { stagger: 0.1 });
  useReveal(zonesRef, { stagger: 0.12 });
  useReveal(galleryRef, { stagger: 0.08 });
  useReveal(traceabilityRef, { stagger: 0.1 });
  useReveal(ctaRef, { stagger: 0.1 });

  return (
    <div className="bg-surface">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-card">
              <Badge variant="default" className="mb-6">Centre de culture & sélection · Chuxiong, Yunnan</Badge>
              <h1 className="font-serif font-medium text-[clamp(2.4rem,5.5vw,4.5rem)] text-on-background tracking-tight leading-[1.0] mb-6">
                Cultivé en altitude.
                <br />
                <span className="italic text-primary">Traçable jusqu&apos;à la source.</span>
              </h1>
              <p className="font-serif italic text-xl md:text-2xl text-on-surface-variant leading-snug max-w-2xl mb-6">
                Culture standardisée. Lignée traçable. Terroir du Yunnan.
              </p>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-8 max-w-md">
                Vetrux exploite un centre de culture et de sélection à Chuxiong, province du Yunnan,
                axé sur une culture standardisée et traçable pour soutenir une qualité constante des matières premières.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Province du Yunnan', 'Culture standardisée', 'Orienté qualité', 'Système traçable'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal-card relative">
              <div className="relative w-full h-[500px] overflow-hidden">
                <Image src="/images/planting/vegetative-growth.jpg" alt="Serre de la base de culture Vetrux à Chuxiong, Yunnan" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" priority />
              </div>
              <div className="absolute bottom-6 right-6 bg-surface-ink/90 backdrop-blur p-4">
                <p className="text-xs text-white/60 tracking-[0.35em] uppercase mb-1">Centre de culture & sélection</p>
                <p className="text-sm font-bold text-white">Chuxiong, Province du Yunnan</p>
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
                <p className="font-serif font-medium text-3xl md:text-4xl text-white tracking-tight leading-tight">{s.value}</p>
                <p className="text-xs font-semibold tracking-[0.35em] uppercase text-white/60 mt-2">{s.label}</p>
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
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mt-4">
                Les meilleurs extraits commencent
                <br />
                <span className="italic text-primary">dans les champs.</span>
              </h2>
            </div>
            <div className="reveal-card lg:col-span-7 space-y-5 pt-2">
              <p className="text-[15px] text-on-surface-variant leading-relaxed">
                Chez Vetrux, la gestion de la culture commence par une sélection de semences orientée qualité et suit
                des processus standardisés conçus pour soutenir une qualité constante des matières premières.
              </p>
              <p className="text-[15px] text-on-surface-variant leading-relaxed">
                La base de Chuxiong dans la province du Yunnan offre des conditions de culture favorables pour
                le chanvre, soutenant la production de matières premières pour l&apos;extraction en aval.
              </p>
              <p className="text-[15px] text-on-surface-variant leading-relaxed">
                De la sélection des cultivars à la gestion de la culture et au transfert du matériel vers l&apos;extraction,
                le système est conçu autour de la standardisation et de la traçabilité.
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
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-16 max-w-xl">Trois zones. Un processus contrôlé.</h2>
          </div>

          <div className="space-y-28">
            {zones.map((zone, idx) => {
              const Icon = zone.icon;
              const isReversed = idx % 2 === 1;
              return (
                <div key={zone.id} className="reveal-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`grid grid-cols-2 gap-3 ${isReversed ? 'lg:order-2' : ''}`}>
                    {zone.images.map((img, i) => (
                      <div key={i} className="overflow-hidden relative h-52">
                        <Image src={img.src} alt={img.alt} fill sizes="(max-width:1024px) 50vw, 33vw" className="object-cover hover:scale-[1.03] transition-transform duration-500" />
                      </div>
                    ))}
                    <div className="col-span-2 flex items-center gap-3 mt-1">
                      <span className="text-xs font-mono tracking-widest text-on-surface-variant">#{zone.id}</span>
                      <div className="flex-1 h-px bg-outline-variant/30" />
                    </div>
                  </div>

                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary-fixed rounded">
                        <Icon size={16} className="text-primary" />
                      </div>
                      <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent">{zone.tag}</p>
                    </div>
                    <h3 className="font-serif font-medium text-2xl md:text-3xl text-on-background tracking-tight leading-[1.05] mb-4">{zone.title}</h3>
                    <p className="text-[15px] text-on-surface-variant leading-relaxed mb-8">{zone.description}</p>

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
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mt-3">À l&apos;intérieur de la base de culture de Chuxiong</h2>
            </div>
            <p className="text-[15px] text-on-surface-variant max-w-sm leading-relaxed">
              Photos réelles de notre centre de culture et de sélection au Yunnan — de la propagation des semis à la floraison et la récolte.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className={`reveal-card overflow-hidden group ${i === 0 ? 'col-span-2 md:col-span-1 md:row-span-2' : ''}`}>
                <div className={`relative w-full ${i === 0 ? 'h-full min-h-[320px]' : 'h-48'}`}>
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRACEABILITY BLOCK ─────────────────────────────────────────── */}
      <section className="py-24 bg-surface-ink">
        <div ref={traceabilityRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="reveal-card lg:col-span-4">
              <SectionLabel light>Traçabilité complète</SectionLabel>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-white tracking-tight leading-[1.05] mt-4">
                Semence-à-isolat
                <br />
                <span className="italic text-primary-fixed">Intégration verticale</span>
              </h2>
              <p className="mt-5 text-[15px] text-white/60 leading-relaxed">
                Le modèle verticalement intégré de Vetrux signifie que chaque gramme d&apos;isolat de CBD est traçable
                jusqu&apos;à une zone de serre spécifique, un lot de récolte et un cycle d&apos;extraction dans notre installation de Chuxiong. Pas d&apos;intermédiaires,
                pas de zones d&apos;ombre — juste une chaîne d&apos;approvisionnement entièrement traçable et standardisée.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traceabilityItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="reveal-card bg-white/5 p-6 border-l-2 border-transparent hover:border-accent hover:bg-white/10 transition-colors duration-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon size={16} className="text-primary-fixed" />
                      <p className="text-xs font-semibold tracking-[0.35em] uppercase text-white/60">{item.label}</p>
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
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mt-3">
                Approvisionnez-vous directement
                <br />
                <span className="italic text-primary">auprès du producteur.</span>
              </h2>
              <p className="mt-4 text-[15px] text-on-surface-variant leading-relaxed max-w-lg">
                Évitez les intermédiaires. Contactez notre équipe pour l&apos;approvisionnement en biomasse en gros, l&apos;isolat en marque blanche ou les contrats d&apos;extraction sur mesure — le tout soutenu par notre chaîne d&apos;approvisionnement verticalement intégrée.
              </p>
            </div>
            <div className="reveal-card lg:col-span-4 flex flex-col gap-3">
              <Link href="/fr/inquiry">
                <Button variant="accent" size="lg" icon={ArrowRight}>
                  Demander un devis
                </Button>
              </Link>
              <Link href="/fr/products/cbd-isolate">
                <Button variant="secondary" size="lg" icon={ArrowRight}>
                  Voir les spécifications produit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
