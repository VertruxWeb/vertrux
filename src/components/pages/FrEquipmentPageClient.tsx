'use client'

import { useRef } from 'react';
import { CheckCircle, Download } from 'lucide-react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '@/components/atoms/Badge';
import SectionLabel from '@/components/atoms/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const equipment = [
  {
    id: '01',
    name: 'Cuves d\'extraction multifonctions 6m³',
    model: '×20 ensembles',
    image: '/images/equipment/extraction-tanks.jpg',
    specs: [
      { label: 'Volume', value: '6 000 L' },
      { label: 'Quantité', value: '20 ensembles' },
      { label: 'Type', value: 'Multifonction' },
      { label: 'Fonction', value: 'Extraction multifonction' },
    ],
    desc: 'Vingt cuves d\'extraction multifonctions industrielles de 6m³ constituent le cœur de notre ligne d\'extraction, permettant le traitement à haut volume de biomasse de chanvre avec un contrôle précis de la température et des solvants.',
  },
  {
    id: '02',
    name: 'Colonnes de chromatographie',
    model: '×26 colonnes',
    image: '/images/equipment/chromatography-upper.jpg',
    specs: [
      { label: 'Quantité', value: '26 colonnes' },
      { label: 'Fonction', value: 'Séparation & purification des cannabinoïdes' },
    ],
    desc: 'Un ensemble de 26 colonnes de chromatographie industrielles assure la séparation et la purification à grande échelle des cannabinoïdes, obtenant un isolat de CBD de haute pureté par élution en gradient précise.',
  },
  {
    id: '03',
    name: 'Concentrateurs simple/double effet 2000L',
    model: '×10 ensembles',
    image: '/images/equipment/concentrator-2000l.jpg',
    specs: [
      { label: 'Capacité', value: '2 000 L/h' },
      { label: 'Quantité', value: '10 ensembles' },
      { label: 'Fonction', value: 'Concentration d\'extrait' },
    ],
    desc: 'Dix concentrateurs simple et double effet de 2000L réduisent efficacement le volume de solvant et concentrent les flux d\'extrait sous vide, minimisant la dégradation thermique des composés actifs.',
  },
  {
    id: '04',
    name: 'Tour de récupération de solvant type 1000',
    model: '×2 ensembles',
    image: '/images/equipment/solvent-recovery-tower.jpg',
    specs: [
      { label: 'Type', value: '1000' },
      { label: 'Quantité', value: '2 ensembles' },
      { label: 'Fonction', value: 'Récupération & recyclage de solvant' },
    ],
    desc: 'Deux tours de récupération de solvant type 1000 récupèrent et recyclent l\'éthanol utilisé dans le processus d\'extraction, réduisant les coûts opérationnels et l\'impact environnemental tout en maintenant la pureté du solvant.',
  },
  {
    id: '05',
    name: 'Cuves de stockage de récupération d\'éthanol 5m³',
    model: '×10 ensembles',
    image: '/images/equipment/ethanol-storage-tanks.jpg',
    specs: [
      { label: 'Volume', value: '5 m³' },
      { label: 'Quantité', value: '10 ensembles' },
      { label: 'Fonction', value: 'Stockage de récupération d\'éthanol' },
    ],
    desc: 'Dix cuves de stockage de 5m³ offrent un confinement sûr pour l\'éthanol récupéré, assurant un approvisionnement continu en solvant de la ligne d\'extraction.',
  },
  {
    id: '06',
    name: 'Système analytique HPLC',
    model: '—',
    image: '/images/equipment/hplc-system.jpg',
    specs: [
      { label: 'Fonction', value: 'Analyse de contrôle qualité' },
    ],
    desc: 'Le système analytique HPLC interne fournit un profilage précis des cannabinoïdes et une analyse de puissance, garantissant que chaque lot respecte les spécifications de qualité strictes avant libération.',
  },
  {
    id: '07',
    name: 'Système de contrôle automatisé',
    model: '—',
    image: '/images/equipment/automation-control.jpg',
    specs: [
      { label: 'Fonction', value: 'Surveillance & contrôle des processus' },
      { label: 'Sécurité', value: 'Classé pour environnement de production' },
    ],
    desc: 'Un système de contrôle automatisé antidéflagrant surveille et gère l\'ensemble de la ligne de production en temps réel.',
  },
  {
    id: '08',
    name: 'Système d\'évacuation automatique des résidus',
    model: 'Intégré',
    image: '/images/equipment/residue-discharge.jpg',
    specs: [
      { label: 'Fonction', value: 'Élimination automatique des résidus' },
      { label: 'Intégration', value: 'Entièrement automatisé' },
    ],
    desc: 'Le système d\'évacuation automatique des résidus élimine la biomasse usagée des cuves d\'extraction sans intervention manuelle, améliorant le débit tout au long de la production.',
  },
];

const specsTable = [
  { name: 'Cuves d\'extraction multifonctions 6m³', model: '×20 ensembles', function: 'Extraction multifonction', cgmp: '—' },
  { name: 'Colonnes de chromatographie', model: '×26 colonnes', function: 'Séparation & purification', cgmp: '—' },
  { name: 'Concentrateurs simple/double effet 2000L', model: '×10 ensembles', function: 'Concentration d\'extrait', cgmp: '—' },
  { name: 'Tour de récupération de solvant type 1000', model: '×2 ensembles', function: 'Récupération & recyclage de solvant', cgmp: '—' },
  { name: 'Cuves de stockage d\'éthanol 5m³', model: '×10 ensembles', function: 'Stockage de récupération d\'éthanol', cgmp: '—' },
  { name: 'Système analytique HPLC', model: '—', function: 'Analyse de contrôle qualité', cgmp: '—' },
  { name: 'Contrôle automatisé', model: '—', function: 'Surveillance & contrôle des processus', cgmp: '—' },
  { name: 'Système d\'évacuation automatique des résidus', model: 'Intégré', function: 'Élimination automatique des résidus', cgmp: '—' },
];

export default function FrEquipmentPageClient() {
  const cgmpRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cgmpRef.current) return;
    const items = cgmpRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: cgmpRef.current, start: 'top 80%' },
    });
  }, { scope: cgmpRef });

  useGSAP(() => {
    if (!showcaseRef.current) return;
    const items = showcaseRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: showcaseRef.current, start: 'top 80%' },
    });
  }, { scope: showcaseRef });

  useGSAP(() => {
    if (!tableRef.current) return;
    const items = tableRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: tableRef.current, start: 'top 80%' },
    });
  }, { scope: tableRef });

  return (
    <div className="bg-surface">

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="default" className="mb-6">Excellence de production</Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold text-on-background tracking-tighter leading-[0.95] mb-6">
                Installation
                <br />
                <span className="text-primary">d&apos;extraction industrielle</span>
              </h1>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8 max-w-md">
                Notre installation de Chuxiong, Yunnan est équipée de cuves d&apos;extraction, colonnes de chromatographie, concentrateurs et systèmes analytiques — soutenant le traitement du CBD et des extraits botaniques.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Extraction', 'Chromatographie', 'Concentration', 'Automatisation'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src="/images/equipment/chromatography-column-700L.webp" alt="Installation d'extraction industrielle" className="w-full h-[500px] object-cover" />
              <div className="absolute bottom-6 right-6 bg-on-background/90 backdrop-blur p-4">
                <p className="text-xs text-white/50 tracking-widest uppercase mb-1">Échelle de l&apos;installation</p>
                <p className="text-sm font-bold text-white">Chuxiong, Yunnan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACILITY OVERVIEW SECTION ──────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={cgmpRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="reveal-card lg:col-span-8 bg-surface-container-lowest p-10">
              <SectionLabel>Vue d&apos;ensemble de l&apos;installation</SectionLabel>
              <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-8">Configuration des équipements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Extraction', value: '20 cuves d\'extraction' },
                  { label: 'Chromatographie', value: '26 colonnes de chromatographie' },
                  { label: 'Concentration', value: '10 concentrateurs' },
                  { label: 'Analytique', value: 'Système analytique HPLC interne' },
                  { label: 'Automatisation', value: 'Système de contrôle automatisé antidéflagrant' },
                  { label: 'Récupération', value: 'Récupération & stockage de solvant' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-semibold text-on-surface mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-card lg:col-span-4 bg-primary p-10 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-4">Localisation</p>
                <p className="text-3xl font-extrabold text-white tracking-tighter leading-tight mb-4">
                  Chuxiong, Yunnan<br />Installation de production
                </p>
                <p className="text-xs text-white/60 leading-relaxed">
                  Installation professionnelle d&apos;extraction et de traitement soutenant la production de matières premières CBD et le traitement d&apos;extraits botaniques.
                </p>
              </div>
              <Link href="/fr/inquiry" className="mt-8 inline-flex items-center gap-2 px-5 py-3 bg-white text-primary text-xs font-bold tracking-widest uppercase hover:bg-primary-fixed transition-colors duration-200">
                <Download size={14} />
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── EQUIPMENT SHOWCASE ─────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={showcaseRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <SectionLabel>Présentation des équipements</SectionLabel>
            <h2 className="text-4xl font-extrabold text-on-background tracking-tighter mb-16 max-w-xl">Ingénierie de précision à chaque étape</h2>
          </div>

          <div className="space-y-24">
            {equipment.map((equip, idx) => (
              <div key={equip.id} className={`reveal-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img src={equip.image} alt={equip.name} className="w-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-on-background/80 text-white text-xs font-mono tracking-wider">#{equip.id}</span>
                  </div>
                </div>

                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-3">Modèle : {equip.model}</p>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-on-background tracking-tighter mb-4">{equip.name}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-8">{equip.desc}</p>
                  <div className="space-y-0">
                    {equip.specs.map((spec, i) => (
                      <div key={spec.label} className={`flex justify-between items-center py-3 ${i < equip.specs.length - 1 ? 'border-b border-outline-variant/30' : ''}`}>
                        <span className="text-xs font-semibold tracking-wider uppercase text-on-surface-variant">{spec.label}</span>
                        <span className="text-sm font-bold text-on-surface">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECS TABLE ────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={tableRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <SectionLabel>Spécifications complètes</SectionLabel>
            <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-12">Tableau récapitulatif des équipements</h2>
          </div>

          <div className="reveal-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary/30">
                  {['Nom de l\'équipement', 'Gamme de modèles', 'Fonction du processus', 'Notes'].map((col) => (
                    <th key={col} className="text-left text-xs font-semibold tracking-widest uppercase text-on-surface-variant pb-4 pr-8">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specsTable.map((row, i) => (
                  <tr key={row.name} className={`border-b border-outline-variant/20 ${i % 2 === 0 ? 'bg-surface-container-lowest/50' : ''}`}>
                    <td className="py-5 pr-8 font-semibold text-on-surface">{row.name}</td>
                    <td className="py-5 pr-8 font-mono text-xs text-on-surface-variant">{row.model}</td>
                    <td className="py-5 pr-8 text-on-surface-variant">{row.function}</td>
                    <td className="py-5 text-xs font-semibold text-primary">{row.cgmp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
