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
  { label: 'Produkt', value: 'CBD-Isolat', status: 'Cannabidiol-Isolat' },
  { label: 'Reinheit', value: '≥99,9%', status: 'THC nicht nachweisbar (ND)' },
  { label: 'Innenverpackung', value: '5 kg/Beutel', status: 'PE oder Aluminiumfolie' },
  { label: 'Außenverpackung', value: '465×285×295 mm', status: 'Exportkarton' },
];

const processSteps = [
  { title: 'Anbau', desc: 'Industriehanf aus Yunnan, angebaut in unserer Anbaubasis in Chuxiong nach standardisierten Kultivierungsprotokollen.' },
  { title: 'Extraktion', desc: 'Ethanol-Extraktion in 6 m³ Multifunktionstanks unter kontrollierten Temperatur- und Lösungsmittelbedingungen.' },
  { title: 'Aufreinigung', desc: 'Großtechnische Chromatographie isoliert Cannabidiol aus dem Rohextrakt mittels Gradientenelution.' },
  { title: 'Qualitätskontrolle', desc: 'Interne HPLC-Cannabinoid-Profilierung und chargenweise Verifizierung vor Freigabe.' },
  { title: 'Verpackung', desc: 'Lebensmittelechte PE- oder Aluminiumfolienbeutel in Exportkartons, palettiert mit Schrumpffolie.' },
];

const qualityCards = [
  {
    icon: Microscope,
    title: 'Qualitätsmanagement',
    desc: 'Interne HPLC-Analysekapazität. Dokumentationsunterstützung gemäß Bestellanforderungen verfügbar.',
    bg: 'bg-surface-container-low',
    image: '/images/products/cbd-crystal-lab.jpg',
  },
  {
    icon: TestTube,
    title: 'Dokumentationsunterstützung',
    desc: 'Begleitdokumente einschließlich COA, SDS, Prüfberichte, Handelsrechnungen und Packlisten können je nach tatsächlicher Charge und Bestellbedingungen bereitgestellt werden.',
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
              <Badge variant="default" className="mb-6">CBD-Rohstoffe</Badge>
              <h1 className="font-serif font-medium text-[clamp(2.4rem,5.5vw,4.5rem)] text-on-background tracking-tight leading-[1.0] mb-6">
                CBD-Isolat
                <br />
                <span className="italic text-primary">99,9% Reinheit</span>
              </h1>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-8 max-w-md">
                Pharmazeutisches CBD-Isolat mit ≥99,9 % Reinheit — rückverfolgbarer Anbau, hauseigene HPLC-Verifizierung und exportfertige Verpackung für B2B-Partner.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  'CBD-Isolat',
                  'OEM/ODM',
                  'Technische Dienstleistungen',
                  '≥99,9% Reinheit',
                ].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/de/inquiry">
                  <Button variant="accent" size="lg" icon={ArrowRight}>
                    Großhandelsanfrage
                  </Button>
                </Link>
                <Link href="/de/inquiry">
                  <Button variant="secondary" size="lg" icon={Download} iconPosition="left">
                    Produktdokumentation anfordern
                  </Button>
                </Link>
              </div>
            </div>

            <div className="reveal-card relative">
              <Image src="/images/products/cbd-crystal-closeup.jpg" alt="CBD-Isolat 99,9% Reinheit weißes kristallines Pulver" width={800} height={500} priority sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-[500px] object-cover" />
              <div className="absolute bottom-6 right-6 bg-surface-ink/90 backdrop-blur p-4">
                <p className="text-xs text-white/60 tracking-[0.35em] uppercase mb-1">CBD-Isolat</p>
                <p className="text-sm font-bold text-white">Reinheit: ≥99,9%</p>
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
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-4">
              Produktinformationen
            </h2>
            <p className="text-[15px] text-on-surface-variant mb-12 max-w-xl">
              Unterstützende Dokumente einschließlich COA, SDS, Prüfberichte und weiterer Versanddokumente können gemäß Bestellanforderungen bereitgestellt werden. Die spezifische Dokumentationsverfügbarkeit hängt von der tatsächlichen Charge, den Bestellbedingungen und den Verifizierungsergebnissen ab.
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
            <Link href="/de/inquiry">
              <Button variant="accent" size="md" icon={Download} iconPosition="left">
                Produktinformationen anfordern
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS DIAGRAM ─────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={processRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card mb-10">
            <SectionLabel>Vom Feld zum fertigen Isolat</SectionLabel>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] max-w-xl">
              Eine kontrollierte, rückverfolgbare Produktionskette.
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
              <SectionLabel>Produktspezifikationen</SectionLabel>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-8">Vollständiges Produktdatenblatt</h2>
              <div>
                <SpecRow label="Produktname" value="CBD-Isolat" />
                <SpecRow label="Reinheit" value="≥99,9% (THC nicht nachweisbar)" />
                <SpecRow label="Verpackung (Innen)" value="PE-Beutel 5 kg/Beutel (27×60 cm, lebensmittelecht) oder Aluminiumfolienbeutel 5 kg/Beutel (35×50 cm, lebensmittelecht)" />
                <SpecRow label="Verpackung (Außen)" value="Exportkartons 465×285×295 mm, 2 Beutel pro Karton" />
                <SpecRow label="Palettierung" value="Kunststoffpaletten mit Schrumpffolie" isLast />
              </div>
            </div>

            <div className="reveal-card">
              <SectionLabel>Konformität & Dokumentation</SectionLabel>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-6">Chargendokumentation & Exportkonformität</h2>
              <div className="mb-6 p-4 bg-surface-container border-l-2 border-accent">
                <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">Export- & Importhinweis</p>
                <p className="text-[13px] text-on-surface-variant leading-relaxed">
                  Für Produkte, die Ausfuhrgenehmigungen oder internationale Verifizierung erfordern, kann der Exportprozess eine Konformitätsbestätigung durch die Behörden des Bestimmungslandes beinhalten. Die Einhaltung der Importvorschriften des Bestimmungslandes — einschließlich Genehmigungen, Lizenzen und behördlicher Zulassungen — liegt in der{' '}
                  <span className="font-semibold text-on-surface">Verantwortung des Käufers/Importeurs</span>. Die Dokumentation wird gemäß den tatsächlichen Bestellanforderungen bereitgestellt.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { standard: 'Analysenzertifikat (COA)', detail: 'Kann gemäß Bestellanforderungen bereitgestellt werden' },
                  { standard: 'Sicherheitsdatenblatt (SDS)', detail: 'Kann gemäß Bestellanforderungen bereitgestellt werden' },
                  { standard: 'Prüfberichte', detail: 'Können gemäß Bestellanforderungen bereitgestellt werden' },
                  { standard: 'Handelsrechnung', detail: 'Pro Lieferung bereitgestellt' },
                  { standard: 'Packliste', detail: 'Pro Lieferung bereitgestellt' },
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
            <SectionLabel className="mb-0">Qualität & Produktlinien</SectionLabel>
            <div className="flex gap-3">
              {['CBD-Isolat', 'OEM/ODM', 'Technische Dienstleistungen'].map((cert) => (
                <span key={cert} className="px-3 py-1 bg-primary-fixed text-primary text-xs font-bold tracking-wider uppercase rounded-full">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <h2 className="reveal-card font-serif font-medium text-3xl md:text-4xl text-on-background tracking-tight leading-[1.05] mb-12 max-w-xl">
            CBD-Isolat für globale B2B-Versorgung
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

          {/* Interne Links zu verwandten Seiten */}
          <div className="reveal-card mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/de/quality-assurance" className="p-4 bg-surface-container-lowest hover:bg-surface-container border-l-2 border-transparent hover:border-accent transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
              <p className="text-xs font-bold text-accent tracking-[0.25em] uppercase">Qualitätssicherung →</p>
              <p className="text-[13px] text-on-surface-variant mt-1">Dokumentation & Prüfdetails</p>
            </Link>
            <Link href="/de/wholesale-cbd-isolate" className="p-4 bg-surface-container-lowest hover:bg-surface-container border-l-2 border-transparent hover:border-accent transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
              <p className="text-xs font-bold text-accent tracking-[0.25em] uppercase">Großhandelsanfrage →</p>
              <p className="text-[13px] text-on-surface-variant mt-1">Mengenpreise & Exportbedingungen</p>
            </Link>
            <Link href="/de/inquiry" className="p-4 bg-surface-container-lowest hover:bg-surface-container border-l-2 border-transparent hover:border-accent transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
              <p className="text-xs font-bold text-accent tracking-[0.25em] uppercase">Vertrieb kontaktieren →</p>
              <p className="text-[13px] text-on-surface-variant mt-1">inquiry@vetrux.tech</p>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
