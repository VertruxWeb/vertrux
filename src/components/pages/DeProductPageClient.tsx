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
  { label: 'CAS-Nummer', value: '13956-29-1', status: 'Cannabidiol' },
  { label: 'HS-Code', value: '2907299020', status: 'Exportklassifikation' },
  { label: 'CBD-Reinheit (HPLC)', value: 'Siehe COA', status: 'Chargenspezifisch' },
  { label: 'THC-Gehalt', value: 'Siehe COA', status: 'Chargenspezifisch' },
  { label: 'Erscheinungsbild', value: 'Weiß kristallin', status: 'Pulver' },
  { label: 'Summenformel', value: 'C₂₁H₃₀O₂', status: 'MW 314,46 g/mol' },
  { label: 'Schwermetalle', value: 'Konform', status: 'USP <232>' },
  { label: 'Mikrobiell', value: 'Konform', status: 'USP <61> / <62>' },
];

const qualityCards = [
  {
    icon: Microscope,
    title: 'Molekulare Integrität',
    desc: 'Vollständige HPLC-Analyse bei jeder Charge. Cannabinoid-Profil gegen Referenzstandards verifiziert. COA, SDS und Prüfberichte werden pro Charge bereitgestellt.',
    bg: 'bg-surface-container-low',
    image: '/images/products/cbd-crystal-lab.jpg',
  },
  {
    icon: TestTube,
    title: 'Chargendokumentation',
    desc: 'Jede Lieferung enthält COA, SDS, Prüfberichte, Handelsrechnungen und Packlisten. Der Export kontrollierter Produkte kann eine internationale Überprüfung erfordern.',
    bg: 'bg-primary',
    image: null,
  },
  {
    icon: TrendingUp,
    title: 'Exportfertige Verpackung',
    desc: 'PE-Beutel 5 kg (27×60 cm) und Aluminiumfolienbeutel 5 kg (35×50 cm), lebensmittelecht. Exportkartons 465×285×295 mm, 2 Beutel pro Karton. Kunststoffpaletten mit Schrumpffolie für sicheren Transport.',
    bg: 'bg-surface-container-low',
    image: '/images/products/cbd-packaging-foil.jpg',
  },
];

export default function DeProductPageClient() {
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
              <Badge variant="default" className="mb-6">Botanische Extrakte</Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold text-on-background tracking-tighter leading-[0.95] mb-6">
                CBD-Isolat
                <br />
                <span className="text-primary">Hochreines CBD-Kristall</span>
              </h1>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8 max-w-md">
                CBD-Isolat (CAS 13956-29-1, HS 2907299020), weißes kristallines Pulver. Hergestellt aus Yunnan-Industriehanf mittels Ethanol-Extraktion und chromatographischer Reinigung. Wir liefern auch Anthocyane, Steviolglykoside und Hanfsamen-Globulin für F&E, Ernährung, Lebensmittel & Getränke sowie Körperpflege.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  'CBD-Isolat',
                  'HPLC-geprüft',
                  'Anthocyane',
                  'Steviolglykoside',
                  'Hanfsamen-Globulin',
                ].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/de/inquiry" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-md hover:bg-primary-container transition-all duration-300">
                  Großhandelsanfrage <ArrowRight size={16} />
                </Link>
                <Link href="/de/inquiry" className="inline-flex items-center gap-2 px-6 py-4 border border-outline/30 text-on-surface text-xs font-bold tracking-widest uppercase rounded-md hover:bg-surface-container transition-colors duration-200">
                  <Download size={14} />
                  Produktdokumentation anfordern
                </Link>
              </div>
            </div>

            <div className="reveal-card relative">
              <Image src="/images/products/cbd-crystal-closeup.jpg" alt="CBD-Isolat weißes kristallines Pulver" width={800} height={500} priority sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-[500px] object-cover" />
              <div className="absolute bottom-6 right-6 bg-on-background/90 backdrop-blur p-4">
                <p className="text-xs text-white/50 tracking-widest uppercase mb-1">CAS 13956-29-1</p>
                <p className="text-sm font-bold text-white">HS-Code: 2907299020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL ANALYSIS GRID ─────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={metricsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <SectionLabel>Technische Analyse</SectionLabel>
            <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-4">
              Analysenzertifikat — Charge YN-CBD-0042
            </h2>
            <p className="text-sm text-on-surface-variant mb-4 max-w-xl">
              Dieser Abschnitt enthält repräsentative technische Informationen. Produktdokumentation kann
              direkt mit unserem B2B-Team basierend auf aktueller Verfügbarkeit besprochen werden.
            </p>
            <p className="text-xs text-on-surface-variant/70 mb-12 max-w-xl">
              Die Prüfmethodik folgt den chromatographischen Verfahren nach <span className="font-semibold text-on-surface-variant">USP &lt;621&gt;</span> und den Richtlinien zur Validierung analytischer Methoden nach <span className="font-semibold text-on-surface-variant">ICH Q2(R1)</span>. Schwermetalle werden gemäß <span className="font-semibold text-on-surface-variant">USP &lt;232&gt;/&lt;233&gt;</span> quantifiziert; Lösungsmittelrückstände werden gegen die Grenzwerte der <span className="font-semibold text-on-surface-variant">ICH Q3C</span> Klasse I/II/III bewertet.
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
            <Link href="/de/inquiry" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-md hover:bg-primary-container transition-all duration-300">
              <Download size={14} />
              Produktspezifikation anfordern
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRODUCT SPECIFICATIONS ─────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={specsRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="reveal-card">
              <SectionLabel>Produktspezifikationen</SectionLabel>
              <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-8">Vollständiges Produktdatenblatt</h2>
              <div>
                <SpecRow label="Produktname" value="CBD-Isolat" />
                <SpecRow label="Chemische Bezeichnung" value="Cannabidiol (CBD)" />
                <SpecRow label="CAS-Nummer" value="13956-29-1" />
                <SpecRow label="Summenformel" value="C₂₁H₃₀O₂" />
                <SpecRow label="Molekulargewicht" value="314,46 g/mol" />
                <SpecRow label="Reinheit (HPLC)" value="Siehe Chargen-COA" />
                <SpecRow label="Erscheinungsbild" value="Weißes bis cremefarbenes kristallines Pulver" />
                <SpecRow label="Schmelzpunkt" value="67°C – 69°C" />
                <SpecRow label="Löslichkeit" value="Ethanol, Hexan, DMSO (wasserunlöslich)" />
                <SpecRow label="Lagerung" value="Kühl, dunkel, trocken. <25°C" />
                <SpecRow label="Haltbarkeit" value="24 Monate ab Herstellung" />
                <SpecRow label="Verpackung (Innen)" value="PE-Beutel 5 kg/Beutel (27×60 cm, lebensmittelecht) oder Aluminiumfolienbeutel 5 kg/Beutel (35×50 cm, lebensmittelecht)" />
                <SpecRow label="Verpackung (Außen)" value="Exportkartons 465×285×295 mm, 2 Beutel pro Karton" />
                <SpecRow label="Palettierung" value="Kunststoffpaletten mit Schrumpffolie" isLast />
              </div>
            </div>

            <div className="reveal-card">
              <SectionLabel>Konformität & Dokumentation</SectionLabel>
              <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-6">Chargendokumentation & Exportkonformität</h2>
              <div className="mb-6 p-4 bg-surface-container border-l-2 border-primary">
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-1">Export- & Importhinweis</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Der Export kontrollierter botanischer Produkte kann eine{' '}
                  <span className="font-semibold text-on-surface">internationale Überprüfung</span> erfordern. Die Einhaltung der Importvorschriften des Ziellandes — einschließlich Genehmigungen, Lizenzen und behördlicher Zulassungen — liegt in der{' '}
                  <span className="font-semibold text-on-surface">Verantwortung des Käufers/Importeurs</span>. Vetrux stellt vollständige Dokumentationspakete zur Unterstützung Ihres Importprozesses bereit.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { standard: 'Analysenzertifikat (COA)', detail: 'Pro Charge mit vollständigem Cannabinoid-Profil bereitgestellt' },
                  { standard: 'Sicherheitsdatenblatt (SDS)', detail: 'GHS-konforme Materialsicherheitsdokumentation' },
                  { standard: 'Prüfberichte Dritter', detail: 'Unabhängige Laborverifizierung pro Produktionslauf' },
                  { standard: 'Handelsrechnung', detail: 'Detaillierte Rechnung pro Lieferung' },
                  { standard: 'Packliste', detail: 'Vollständige Verpackungsdetails pro Chargenlieferung' },
                  { standard: 'Schwermetallprüfung', detail: 'ICP-MS — USP <232> / <233>' },
                  { standard: 'Mikrobielle & Pestizid-Untersuchung', detail: 'USP <61> Keimzahl, 400+ Pestizid-Panel' },
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
            <SectionLabel className="mb-0">Qualität & Produktlinien</SectionLabel>
            <div className="flex gap-3">
              {['COA pro Charge', 'SDS bereitgestellt', 'Drittgeprüft'].map((cert) => (
                <span key={cert} className="px-3 py-1 bg-primary-fixed text-primary text-xs font-bold tracking-wider uppercase rounded-full">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <h2 className="reveal-card text-3xl font-extrabold text-on-background tracking-tighter mb-12 max-w-xl">
            CBD-Isolat & Botanische Extrakte für den globalen B2B-Vertrieb
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

          {/* Botanische Extrakt-Produktlinien */}
          <div className="reveal-card mt-12 p-8 bg-surface-container-low">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">Weitere botanische Extraktprodukte</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Anthocyane', use: 'Funktionelle Formulierungen, Lebensmittel & Getränke, Körperpflege' },
                { name: 'Steviolglykoside', use: 'Ernährung & Gesundheit, Lebensmittel & Getränke, funktionelle Süßungsmittel' },
                { name: 'Hanfsamen-Globulin', use: 'Pharma-F&E, Ernährung & Gesundheit, funktionelle Formulierungen' },
                { name: 'CBD-Isolat', use: 'Pharma-F&E, Körperpflege, funktionelle Formulierungen' },
              ].map((product) => (
                <div key={product.name}>
                  <p className="text-sm font-bold text-on-surface mb-1">{product.name}</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{product.use}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interne Links zu verwandten Seiten */}
          <div className="reveal-card mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/de/quality-assurance" className="p-4 bg-surface-container-low hover:bg-surface-container transition-colors text-center">
              <p className="text-xs font-bold text-primary tracking-wider uppercase">Qualitätssicherung →</p>
              <p className="text-xs text-on-surface-variant mt-1">Dokumentation & Prüfdetails</p>
            </Link>
            <Link href="/de/wholesale-cbd-isolate" className="p-4 bg-surface-container-low hover:bg-surface-container transition-colors text-center">
              <p className="text-xs font-bold text-primary tracking-wider uppercase">Großhandelsanfrage →</p>
              <p className="text-xs text-on-surface-variant mt-1">Mengenpreise & Exportbedingungen</p>
            </Link>
            <Link href="/de/inquiry" className="p-4 bg-surface-container-low hover:bg-surface-container transition-colors text-center">
              <p className="text-xs font-bold text-primary tracking-wider uppercase">Vertrieb kontaktieren →</p>
              <p className="text-xs text-on-surface-variant mt-1">inquiry@vetrux.tech</p>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
