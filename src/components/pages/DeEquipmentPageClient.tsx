'use client'

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import SectionLabel from '@/components/atoms/SectionLabel';
import KpiRow from '@/components/molecules/KpiRow';
import { useReveal } from '@/hooks/useReveal';

const equipment = [
  {
    id: '01',
    name: '6m³ Multifunktions-Extraktionstanks',
    model: '×20 Sätze',
    image: '/images/equipment/extraction-tanks.jpg',
    specs: [
      { label: 'Volumen', value: '6.000 L' },
      { label: 'Anzahl', value: '20 Sätze' },
      { label: 'Material', value: 'Edelstahl' },
      { label: 'Funktion', value: 'Multifunktions-Extraktion' },
    ],
    desc: 'Zwanzig industrielle 6m³ Multifunktions-Extraktionstanks bilden den Kern unserer Extraktionslinie und ermöglichen die Hochvolumenverarbeitung von Hanfbiomasse mit präziser Temperatur- und Lösungsmittelkontrolle.',
  },
  {
    id: '02',
    name: 'Chromatographiesäulen',
    model: '×26 Säulen',
    image: '/images/equipment/chromatography-upper.jpg',
    specs: [
      { label: 'Anzahl', value: '26 Säulen' },
      { label: 'Funktion', value: 'Cannabinoid-Trennung & Reinigung' },
    ],
    desc: 'Eine Reihe von 26 industriellen Chromatographiesäulen ermöglicht die großtechnische Cannabinoid-Trennung und -Reinigung und erzielt hochreines CBD-Isolat durch präzise Gradientenelution.',
  },
  {
    id: '03',
    name: '2000L Ein-/Doppeleffekt-Konzentratoren',
    model: '×10 Sätze',
    image: '/images/equipment/concentrator-2000l.jpg',
    specs: [
      { label: 'Kapazität', value: '2.000 L/h' },
      { label: 'Anzahl', value: '10 Sätze' },
      { label: 'Funktion', value: 'Extraktkonzentration' },
    ],
    desc: 'Zehn 2000L Ein- und Doppeleffekt-Konzentratoren reduzieren effizient das Lösungsmittelvolumen und konzentrieren Extraktströme unter Vakuum, wobei die thermische Degradation aktiver Verbindungen minimiert wird.',
  },
  {
    id: '04',
    name: '1000-Typ Lösungsmittelrückgewinnungsturm',
    model: '×2 Sätze',
    image: '/images/equipment/solvent-recovery-tower.jpg',
    specs: [
      { label: 'Typ', value: '1000' },
      { label: 'Anzahl', value: '2 Sätze' },
      { label: 'Funktion', value: 'Lösungsmittelrückgewinnung & Recycling' },
    ],
    desc: 'Zwei 1000-Typ Lösungsmittelrückgewinnungstürme gewinnen das im Extraktionsprozess verwendete Ethanol zurück und recyceln es, wodurch Betriebskosten und Umweltbelastung reduziert werden bei gleichzeitiger Aufrechterhaltung der Lösungsmittelreinheit.',
  },
  {
    id: '05',
    name: '5m³ Ethanol-Rückgewinnungstanks',
    model: '×10 Sätze',
    image: '/images/equipment/ethanol-storage-tanks.jpg',
    specs: [
      { label: 'Volumen', value: '5 m³' },
      { label: 'Anzahl', value: '10 Sätze' },
      { label: 'Funktion', value: 'Ethanol-Rückgewinnungslagerung' },
    ],
    desc: 'Zehn 5m³ Lagertanks bieten sichere Aufbewahrung für rückgewonnenes Ethanol und gewährleisten eine kontinuierliche Lösungsmittelversorgung der Extraktionslinie.',
  },
  {
    id: '06',
    name: 'HPLC-Analysesystem',
    model: '—',
    image: '/images/equipment/hplc-system.jpg',
    specs: [
      { label: 'Funktion', value: 'Qualitätskontrollanalyse' },
      { label: 'Fähigkeit', value: 'Cannabinoid-Profilierung & Potenzanalyse' },
    ],
    desc: 'Das hauseigene HPLC-Analysesystem liefert präzise Cannabinoid-Profilierung und Potenzanalyse und stellt sicher, dass jede Charge strenge Qualitätsspezifikationen vor der Freigabe erfüllt.',
  },
  {
    id: '07',
    name: 'Automatisierungssystem',
    model: '—',
    image: '/images/equipment/automation-control.jpg',
    specs: [
      { label: 'Funktion', value: 'Prozessüberwachung & Steuerung' },
      { label: 'Konfiguration', value: 'Industrielle Automatisierung' },
    ],
    desc: 'Ein explosionsgeschütztes Automatisierungssystem überwacht und steuert die gesamte Produktionslinie in Echtzeit, konfiguriert für den Betrieb in industriellen Extraktionsumgebungen.',
  },
  {
    id: '08',
    name: 'Automatisches Rückstandsaustragsystem',
    model: 'Integriert',
    image: '/images/equipment/residue-discharge.jpg',
    specs: [
      { label: 'Funktion', value: 'Automatische Schlackenentfernung' },
      { label: 'Integration', value: 'Vollautomatisiert' },
    ],
    desc: 'Das automatische Rückstandsaustragsystem entfernt verbrauchte Biomasse aus den Extraktionstanks ohne manuellen Eingriff, verbessert den Durchsatz und erhält saubere Bedingungen während der gesamten Produktion.',
  },
];

const specsTable = [
  { name: '6m³ Multifunktions-Extraktionstanks', model: '×20 Sätze', function: 'Multifunktions-Extraktion', cgmp: 'Edelstahl-Konstruktion' },
  { name: 'Chromatographiesäulen', model: '×26 Säulen', function: 'Cannabinoid-Trennung & Reinigung', cgmp: 'Industriestandard' },
  { name: '2000L Ein-/Doppeleffekt-Konzentratoren', model: '×10 Sätze', function: 'Extraktkonzentration', cgmp: 'Vakuumbetrieb' },
  { name: '1000-Typ Lösungsmittelrückgewinnungsturm', model: '×2 Sätze', function: 'Lösungsmittelrückgewinnung & Recycling', cgmp: 'Industriekonfiguration' },
  { name: '5m³ Ethanol-Rückgewinnungstanks', model: '×10 Sätze', function: 'Ethanol-Rückgewinnungslagerung', cgmp: 'Sichere Lagerung' },
  { name: 'HPLC-Analysesystem', model: '—', function: 'Qualitätskontrollanalyse', cgmp: '—' },
  { name: 'Automatisierungssteuerung', model: '—', function: 'Prozessüberwachung & Steuerung', cgmp: 'Industrielle Automatisierung' },
  { name: 'Automatisches Rückstandsaustragsystem', model: 'Integriert', function: 'Automatische Schlackenentfernung', cgmp: 'Vollautomatisiert' },
];

const facilityKpis = [
  { value: '20', label: 'Extraktionstanks', sub: '6 m³ Multifunktion' },
  { value: '26', label: 'Chromatographiesäulen', sub: 'Gradientenelution' },
  { value: '10', label: 'Konzentratoren', sub: '2.000 L Ein-/Doppeleffekt' },
  { value: 'HPLC', label: 'Hauseigene Analytik', sub: 'Cannabinoid-Profilierung' },
];

export default function DeEquipmentPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const kpiRef = useRef<HTMLDivElement>(null);
  const cgmpRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useReveal(heroRef);
  useReveal(kpiRef, { stagger: 0.08 });
  useReveal(cgmpRef);
  useReveal(showcaseRef, { stagger: 0.12 });
  useReveal(tableRef, { stagger: 0.08 });

  return (
    <div className="bg-surface">

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-card">
              <Badge variant="default" className="mb-6">Produktionsexzellenz</Badge>
              <h1 className="font-serif font-medium text-[clamp(2.4rem,5.5vw,4.5rem)] text-on-background tracking-tight leading-[1.0] mb-6">
                Industrielle
                <br />
                <span className="italic text-primary">Extraktionsanlage</span>
              </h1>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-8 max-w-md">
                Unsere industrielle CBD-Extraktions- und Reinigungsanlage in Chuxiong, Yunnan betreibt Hauptausrüstungseinheiten in den Bereichen Extraktion, Chromatographie, Konzentration und Qualitätskontrolle — mit vollständiger Automatisierungssteuerung.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Industriemaßstab', 'Ausrüstungskonfiguration', 'Vollautomatisierung', 'Integrierte Produktion'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal-card relative">
              <div className="relative w-full h-[500px] overflow-hidden">
                <Image src="/images/equipment/chromatography-column-700L.webp" alt="Industrielle Extraktionsanlage" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
              </div>
              <div className="absolute bottom-6 right-6 bg-surface-ink/90 backdrop-blur p-4">
                <p className="text-xs text-white/60 tracking-[0.35em] uppercase mb-1">Anlagenumfang</p>
                <p className="text-sm font-bold text-white">Chuxiong, Yunnan · Industrielle Konfiguration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACILITY KPI ROW ───────────────────────────────────────────── */}
      <section className="py-16 bg-surface">
        <div ref={kpiRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <KpiRow items={facilityKpis} tone="light" />
          </div>
        </div>
      </section>

      {/* ── EQUIPMENT STANDARDS SECTION ─────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={cgmpRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="reveal-card lg:col-span-8 bg-surface-container-lowest p-10 border-l-2 border-transparent hover:border-accent transition-colors duration-200">
              <SectionLabel>Fertigungsstandards</SectionLabel>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-8">Anlagenkonfiguration & Standards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Konstruktionsmaterial', value: 'Edelstahl-Konstruktion' },
                  { label: 'Reinigungsprotokoll', value: 'Integriertes Reinigungssystem' },
                  { label: 'Sicherheitssteuerung', value: 'Industrielle Automatisierung' },
                  { label: 'Umgebung', value: 'Kontrollierte Produktionsanlage' },
                  { label: 'Chargenprotokolle', value: 'Vollständiges Chargenrückverfolgungssystem' },
                  { label: 'Prozesssteuerung', value: 'Echtzeit-HMI-Überwachung' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-accent uppercase tracking-[0.35em] font-semibold">{item.label}</p>
                      <p className="text-sm font-semibold text-on-surface mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-card lg:col-span-4 bg-primary p-10 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.35em] uppercase text-white/60 mb-4">Dokumentation</p>
                <p className="font-serif text-3xl text-white tracking-tight leading-tight mb-4">
                  Industriell konfigurierte<br />Produktionsanlage
                </p>
                <p className="text-[13px] text-white/60 leading-relaxed">
                  Unsere Anlage in Chuxiong arbeitet mit Edelstahl-Konstruktion, integrierten Reinigungssystemen, industrieller Automatisierung und vollständiger Chargenrückverfolgbarkeit über alle Produktionsstufen.
                </p>
              </div>
              <Link href="/de/inquiry" className="mt-8 inline-block">
                <Button variant="accent" size="md" icon={ArrowRight}>
                  Anlagendokumentation anfordern
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── EQUIPMENT SHOWCASE ─────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={showcaseRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <SectionLabel>Ausrüstungspräsentation</SectionLabel>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-16 max-w-xl">Präzisionstechnik in jeder Phase</h2>
          </div>

          <div className="space-y-24">
            {equipment.map((equip, idx) => (
              <div key={equip.id} className={`reveal-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image src={equip.image} alt={equip.name} width={800} height={600} className="w-full h-auto object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-surface-ink/80 text-white text-xs font-mono tracking-wider">#{equip.id}</span>
                  </div>
                </div>

                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-3">Modell: {equip.model}</p>
                  <h3 className="font-serif font-medium text-2xl md:text-3xl text-on-background tracking-tight leading-[1.05] mb-4">{equip.name}</h3>
                  <p className="text-[15px] text-on-surface-variant leading-relaxed mb-8">{equip.desc}</p>
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
            <SectionLabel>Vollständige Spezifikationen</SectionLabel>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-12">Ausrüstungsübersichtstabelle</h2>
          </div>

          <div className="reveal-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-accent/30">
                  {['Ausrüstungsname', 'Modellbereich', 'Prozessfunktion', 'Konfiguration'].map((col) => (
                    <th key={col} className="text-left text-xs font-semibold tracking-[0.35em] uppercase text-accent pb-4 pr-8">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specsTable.map((row, i) => (
                  <tr key={row.name} className={`border-b border-outline-variant/20 ${i % 2 === 0 ? 'bg-surface-container-lowest/50' : ''}`}>
                    <td className="py-5 pr-8 font-semibold text-on-surface">{row.name}</td>
                    <td className="py-5 pr-8 font-mono text-xs text-on-surface-variant">{row.model}</td>
                    <td className="py-5 pr-8 text-on-surface-variant">{row.function}</td>
                    <td className="py-5 text-xs font-semibold text-accent">{row.cgmp}</td>
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
