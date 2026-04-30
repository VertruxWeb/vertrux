'use client'

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/atoms/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const sectors = [
  {
    id: 'S01',
    label: 'Secteur 01 — Excellence architecturale',
    title: 'Campus principal & Infrastructure',
    description: 'Notre site de production au Yunnan abrite les équipements d\'extraction, de traitement et de contrôle qualité — soutenant les opérations de CBD et d\'extraits botaniques.',
    images: [
      { src: '/images/gallery/campus-aerial.png', alt: 'Vue aérienne du campus industriel Vetrux avec montagnes environnantes', span: 'col-span-1 row-span-2' },
      { src: '/images/gallery/campus-buildings.webp', alt: 'Bâtiments du campus avec espaces verts aménagés', span: 'col-span-1' },
      { src: '/images/gallery/processing-workshop.webp', alt: 'Extérieur de l\'atelier de traitement moderne', span: 'col-span-1' },
    ],
    stat: { label: 'Localisation', value: 'Chuxiong, Yunnan' },
    eco: 'Site de production',
  },
  {
    id: 'S02',
    label: 'Secteur 02 — Pureté des matières premières',
    title: 'Base de culture & Cultivation',
    description: 'Centre de culture et de sélection dans la province du Yunnan — de la sélection des semences à la gestion de la culture — soutenant une production de matières premières standardisée et traçable.',
    images: [
      { src: '/images/gallery/cultivation-field.jpg', alt: 'Champ de chanvre sous structures de serres tunnel', span: 'col-span-2 row-span-2' },
      { src: '/images/gallery/cultivation-base-wide.jpg', alt: 'Vue large de la base de culture avec toile de fond montagneuse', span: 'col-span-1' },
      { src: '/images/gallery/cultivation-base-rows.jpg', alt: 'Rangées de grandes plantes de chanvre sous structures de serre', span: 'col-span-1' },
      { src: '/images/planting/flowering-greenhouse.jpg', alt: 'Chanvre en floraison dans un environnement de serre contrôlé', span: 'col-span-1' },
      { src: '/images/planting/flowering-cola-closeup.jpg', alt: 'Gros plan d\'une inflorescence de chanvre en floraison', span: 'col-span-1' },
    ],
    stat: { label: 'Culture', value: 'Base de Chuxiong' },
    eco: 'Province du Yunnan',
  },
  {
    id: 'S03',
    label: 'Secteur 03 — Précision technique',
    title: 'Extraction & Raffinage',
    description: 'Installation d\'extraction professionnelle équipée de cuves d\'extraction, colonnes de chromatographie, concentrateurs et systèmes analytiques pour le traitement du CBD et des extraits botaniques.',
    images: [
      { src: '/images/equipment/extraction-tanks.jpg', alt: 'Rangée de cuves d\'extraction en acier inoxydable', span: 'col-span-1' },
      { src: '/images/equipment/chromatography-upper.jpg', alt: 'Section supérieure de la colonne de chromatographie', span: 'col-span-1' },
      { src: '/images/equipment/concentrator-system.jpg', alt: 'Système concentrateur industriel', span: 'col-span-1' },
      { src: '/images/equipment/hplc-system.jpg', alt: 'Système analytique HPLC pour le contrôle qualité', span: 'col-span-1' },
      { src: '/images/equipment/automation-control.jpg', alt: 'Panneau de contrôle de processus automatisé', span: 'col-span-1' },
      { src: '/images/equipment/solvent-recovery-tower.jpg', alt: 'Tour de récupération de solvant', span: 'col-span-1' },
    ],
    stat: { label: 'Cuves d\'extraction', value: '20 Unités' },
    eco: '26 Colonnes de chromatographie',
  },
  {
    id: 'S04',
    label: 'Secteur 04 — Produit & Qualité',
    title: 'Produit & Laboratoire',
    description: 'Capacité analytique HPLC en interne pour la gestion qualité. La documentation produit peut être fournie selon les exigences de commande.',
    images: [
      { src: '/images/products/cbd-crystal-closeup.jpg', alt: 'Gros plan d\'isolat de CBD cristallin de haute pureté', span: 'col-span-1' },
      { src: '/images/products/cbd-crystal-lab.jpg', alt: 'Cristal de CBD en environnement de laboratoire', span: 'col-span-1' },
      { src: '/images/products/cbd-packaging-foil.jpg', alt: 'Isolat de CBD en emballage aluminium scellé', span: 'col-span-1' },
      { src: '/images/products/cbd-shipping-box.jpg', alt: 'Carton d\'expédition produit prêt pour l\'export', span: 'col-span-1' },
    ],
    stat: { label: 'Produit', value: 'Cristal de CBD' },
    eco: 'CAS : 13956-29-1',
  },
];

function SectorSection({ sector, idx }: { sector: typeof sectors[0]; idx: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const items = sectionRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
  }, { scope: sectionRef });

  return (
    <section className={`py-24 ${idx % 2 === 1 ? 'bg-surface-container-low' : 'bg-surface'}`}>
      <div ref={sectionRef} className="max-w-container mx-auto px-6 lg:px-12">
        <div className="reveal-card flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-3">{sector.label}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-background tracking-tighter leading-tight">{sector.title}</h2>
            <p className="mt-4 text-sm text-on-surface-variant leading-relaxed max-w-lg">{sector.description}</p>
          </div>
          <div className="reveal-card flex-shrink-0 bg-primary p-6 min-w-[180px]">
            <p className="text-xs tracking-widest uppercase text-white/60 mb-1">{sector.stat.label}</p>
            <p className="text-2xl font-extrabold text-white tracking-tighter">{sector.stat.value}</p>
            <p className="text-xs text-white/50 tracking-wider uppercase mt-2">{sector.eco}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sector.images.map((img, i) => (
            <div key={i} className="reveal-card overflow-hidden group">
              <img src={img.src} alt={img.alt} className="w-full h-56 object-cover group-hover:scale-[1.03] transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FrGalleryPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroRef.current) return;
    const items = heroRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: heroRef.current, start: 'top 80%' },
    });
  }, { scope: heroRef });

  return (
    <div className="bg-surface">
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <SectionLabel>Documentation visuelle</SectionLabel>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-background tracking-tighter leading-[0.95] max-w-3xl">
              Intégration verticale.
              <br />
              <span className="text-primary">De la semence à la solution.</span>
            </h1>
            <p className="mt-6 text-sm text-on-surface-variant leading-relaxed max-w-xl">
              Aperçu visuel de nos opérations à Chuxiong, Yunnan — de la base de culture
              à l&apos;installation d&apos;extraction jusqu&apos;au produit et à l&apos;emballage.
            </p>
          </div>
        </div>
      </section>

      {sectors.map((sector, idx) => (
        <SectorSection key={sector.id} sector={sector} idx={idx} />
      ))}
    </div>
  );
}
