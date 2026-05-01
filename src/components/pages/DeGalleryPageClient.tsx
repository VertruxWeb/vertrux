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
    label: 'Sektor 01 — Architektonische Exzellenz',
    title: 'Hauptcampus & Infrastruktur',
    description: 'Unser Industriepark in Yunnan beherbergt Extraktion, Raffination und Qualitätskontrolle unter einem Dach — speziell für integrierte Produktion gebaut.',
    images: [
      { src: '/images/gallery/campus-aerial.png', alt: 'Luftaufnahme des Vetrux-Industriecampus mit umliegenden Bergen', span: 'col-span-1 row-span-2' },
      { src: '/images/gallery/campus-buildings.webp', alt: 'Campusgebäude mit gepflegten Grünanlagen', span: 'col-span-1' },
      { src: '/images/gallery/processing-workshop.webp', alt: 'Moderne Verarbeitungswerkstatt von außen', span: 'col-span-1' },
    ],
    stat: { label: 'Anlagenstandort', value: 'Chuxiong, Yunnan' },
    eco: '8 Produktionsgebäude',
  },
  {
    id: 'S02',
    label: 'Sektor 02 — Rohstoffreinheit',
    title: 'Anbaubasis & Kultivierung',
    description: 'Höhenhanfanbau in der gesamten Provinz Yunnan — von der Setzlingsvermehrung bis zur Blüte — gewährleistet konsistente Cannabinoidprofile und vollständige Rückverfolgbarkeit.',
    images: [
      { src: '/images/gallery/cultivation-field.jpg', alt: 'Hanffeld unter Tunnelgewächshausstrukturen', span: 'col-span-2 row-span-2' },
      { src: '/images/gallery/cultivation-base-wide.jpg', alt: 'Weitwinkelansicht der Anbaubasis mit Bergkulisse', span: 'col-span-1' },
      { src: '/images/gallery/cultivation-base-rows.jpg', alt: 'Reihen hoher Hanfpflanzen in Gewächshausrahmen', span: 'col-span-1' },
      { src: '/images/planting/flowering-greenhouse.jpg', alt: 'Blühender Hanf in kontrollierter Gewächshausumgebung', span: 'col-span-1' },
      { src: '/images/planting/flowering-cola-closeup.jpg', alt: 'Nahaufnahme einer blühenden Hanfblüte', span: 'col-span-1' },
    ],
    stat: { label: 'Anbauregion', value: 'Yunnan-Hochebene' },
    eco: 'Provinz Yunnan',
  },
  {
    id: 'S03',
    label: 'Sektor 03 — Technische Präzision',
    title: 'Extraktion & Raffination',
    description: 'Industrielle Ethanolextraktion kombiniert mit mehrstufiger Chromatographie und Molekulardestillation — liefert hochreine Cannabinoid-Isolate in großem Maßstab.',
    images: [
      { src: '/images/equipment/extraction-tanks.jpg', alt: 'Edelstahl-Extraktionstank-Reihe', span: 'col-span-1' },
      { src: '/images/equipment/chromatography-upper.jpg', alt: 'Oberer Abschnitt der Chromatographiesäule', span: 'col-span-1' },
      { src: '/images/equipment/concentrator-system.jpg', alt: 'Industrielles Konzentratorsystem', span: 'col-span-1' },
      { src: '/images/equipment/hplc-system.jpg', alt: 'HPLC-Analysesystem für Qualitätskontrolle', span: 'col-span-1' },
      { src: '/images/equipment/automation-control.jpg', alt: 'Automatisiertes Prozesssteuerungspanel', span: 'col-span-1' },
      { src: '/images/equipment/solvent-recovery-tower.jpg', alt: 'Lösungsmittelrückgewinnungsturm', span: 'col-span-1' },
    ],
    stat: { label: 'Extraktionstanks', value: '20 Einheiten' },
    eco: '26 Chromatographiesäulen',
  },
  {
    id: 'S04',
    label: 'Sektor 04 — Produkt & Qualität',
    title: 'Produkt & Labor',
    description: 'Jede Charge durchläuft strenge HPLC- und GC-MS-Tests — vom kristallinen CBD-Isolat bis zur Endverpackung — mit vollständiger Chargendokumentation.',
    images: [
      { src: '/images/products/cbd-crystal-closeup.jpg', alt: 'Nahaufnahme von hochreinem kristallinem CBD-Isolat', span: 'col-span-1' },
      { src: '/images/products/cbd-crystal-lab.jpg', alt: 'CBD-Isolat im Laborumfeld', span: 'col-span-1' },
      { src: '/images/products/cbd-packaging-foil.jpg', alt: 'CBD-Isolat in versiegelter Folienverpackung', span: 'col-span-1' },
      { src: '/images/products/cbd-shipping-box.jpg', alt: 'Produktversandkarton exportbereit', span: 'col-span-1' },
    ],
    stat: { label: 'Qualitätsprüfung', value: 'HPLC-verifiziert' },
    eco: 'COA pro Charge',
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

export default function DeGalleryPageClient() {
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
            <SectionLabel>Visuelle Dokumentation</SectionLabel>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-background tracking-tighter leading-[0.95] max-w-3xl">
              Vertikale Integration.
              <br />
              <span className="text-primary">Visuell dokumentiert.</span>
            </h1>
            <p className="mt-6 text-sm text-on-surface-variant leading-relaxed max-w-xl">
              Entdecken Sie unsere vollständig integrierte Lieferkette — von den Höhenanbaubasen in Yunnan
              über industrielle Extraktion und Chromatographie bis hin zu hochreinem CBD-Isolat.
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
