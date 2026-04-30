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
  { value: 'Yunnan', label: 'Standort der Anbaubasis' },
  { value: 'Chuxiong', label: 'Zuchtzentrum' },
  { value: 'Standardisiert', label: 'Anbausystem' },
  { value: 'Rückverfolgbar', label: 'Lieferkette' },
];

const zones = [
  {
    id: '01',
    tag: 'Zone 01 — Setzlinge & Vermehrung',
    title: 'Saatgutauswahl & Stecklingsvermehrung',
    description:
      'Unser Zuchtprogramm beginnt mit der Auswahl von Elitesaatgut und klonaler Vermehrung in der Gärtnerei in Chuxiong. CBD-reiche Sorten werden durch Stecklingsvermehrung in kontrollierten Gewächshäusern propagiert, um genetische Konsistenz und phytochemische Einheitlichkeit in jedem Produktionszyklus zu gewährleisten.',
    images: [
      { src: '/images/planting/seedling-nursery.jpg', alt: 'Junge CBD-Hanfsetzlinge in Anzuchtschalen' },
      { src: '/images/planting/cloning-propagation.jpg', alt: 'Hanfklone in Vermehrungsschalen' },
      { src: '/images/planting/rooted-cutting.jpg', alt: 'Hand hält einen bewurzelten Hanfsteckling' },
      { src: '/images/planting/propagation-greenhouse.jpg', alt: 'Großflächiger Gewächshaus-Vermehrungsbereich' },
    ],
    specs: [
      { label: 'Vermehrungsmethode', value: 'Klonale Stecklinge + Saatgut' },
      { label: 'Aufzuchtumgebung', value: 'Kontrolliertes Gewächshaus' },
      { label: 'Genetisches Screening', value: 'Auswahl CBD-reicher Sorten' },
      { label: 'Bewurzelungsrate', value: '≥ 95%' },
    ],
    icon: Leaf,
  },
  {
    id: '02',
    tag: 'Zone 02 — Vegetatives Wachstum',
    title: 'Gewächshausanbau & kontrolliertes Wachstum',
    description:
      'Umgepflanzte Klone gelangen in unsere großflächigen Gewächshausanlagen in Chuxiong, wo Yunnans Höhensonnenlicht und UV-reiche Bedingungen auf natürliche Weise kräftiges vegetatives Wachstum fördern. Kontrollierte Bewässerung, Nährstoffversorgung und Kronendachmanagement sorgen für eine gleichmäßige Pflanzenentwicklung vor dem Übergang zur Blüte.',
    images: [
      { src: '/images/planting/vegetative-growth.jpg', alt: 'Gewächshausreihen mit vegetativen Hanfpflanzen' },
      { src: '/images/planting/vegetative-canopy.jpg', alt: 'Dichtes grünes Hanfkronendach im vegetativen Stadium' },
    ],
    specs: [
      { label: 'Anbaumethode', value: 'Gewächshaus + Natürliches Licht' },
      { label: 'Standort', value: 'Chuxiong, Yunnan-Hochebene' },
      { label: 'Wasserquelle', value: 'Bergquellbewässerung' },
      { label: 'Einsatzrichtlinie', value: 'Keine synthetischen Pestizide' },
    ],
    icon: Sun,
  },
  {
    id: '03',
    tag: 'Zone 03 — Blüte & Ernte',
    title: 'Reife Blüte & Trichom-Entwicklung',
    description:
      'Während der Blütephase fördert Yunnans intensive UV-Strahlung eine außergewöhnliche Trichom- und Cannabinoid-Entwicklung. Unsere Agronomen überwachen die Trichomreife und den CBD-Gehalt, um den optimalen Erntezeitpunkt zu bestimmen und den Cannabinoid-Ertrag zu maximieren, während die THC-Grenzwerte eingehalten werden. Dichte, harzige Blütenstände werden von Hand geerntet und zur kontrollierten Trocknung und Verarbeitung überführt.',
    images: [
      { src: '/images/planting/flowering-greenhouse.jpg', alt: 'Spätblühendes Hanfgewächshaus' },
      { src: '/images/planting/flowering-cola-closeup.jpg', alt: 'Nahaufnahme einer CBD-Hanfblüte mit Trichomen' },
      { src: '/images/planting/mature-bud-trichomes.jpg', alt: 'Dichte reife Hanfblüte mit sichtbaren Trichomen' },
      { src: '/images/planting/flowering-dense-canopy.jpg', alt: 'Dichtes blühendes Hanfkronendach' },
      { src: '/images/planting/flowering-pistils.jpg', alt: 'Blühender Hanf mit weißen Stempeln' },
    ],
    specs: [
      { label: 'Trichom-Überwachung', value: 'Tägliche visuelle + Laboranalyse' },
      { label: 'Erntemethode', value: 'Handernte bei maximalem CBD' },
      { label: 'UV-Vorteil', value: 'Höhen-UV-Strahlung' },
      { label: 'Trocknungsprozess', value: 'Kontrollierte Niedertemperaturtrocknung' },
    ],
    icon: Thermometer,
  },
];

const galleryImages = [
  { src: '/images/planting/propagation-greenhouse.jpg', alt: 'Großflächiger Gewächshaus-Vermehrungsbereich' },
  { src: '/images/planting/seedling-nursery.jpg', alt: 'Junge CBD-Hanfsetzlinge in Anzuchtschalen' },
  { src: '/images/planting/cloning-propagation.jpg', alt: 'Hanfklone in Vermehrungsschalen' },
  { src: '/images/planting/vegetative-canopy.jpg', alt: 'Dichtes grünes Hanfkronendach im vegetativen Stadium' },
  { src: '/images/planting/flowering-cola-closeup.jpg', alt: 'Nahaufnahme einer CBD-Hanfblüte mit Trichomen' },
  { src: '/images/planting/flowering-dense-canopy.jpg', alt: 'Dichtes blühendes Hanfkronendach von oben' },
];

const traceabilityItems = [
  { icon: Shield, label: 'Integrierte Produktion', desc: 'Vetrux kontrolliert jeden Schritt von der Saatgutauswahl und dem Anbau über die Extraktion bis zur Isolation — vollständige vertikale Integration in einer Lieferkette.' },
  { icon: Droplets, label: 'Standardisiertes Anbausystem', desc: 'SOPs regeln jede Phase unseres Anbauprozesses: Vermehrung, Umpflanzung, Nährstoffmanagement, Blüte und Erntezeitpunkt sind an unserer Chuxiong-Basis vollständig standardisiert.' },
  { icon: Leaf, label: 'Rückverfolgbare Lieferkette', desc: 'Jede Charge Biomasse ist rückverfolgbar — von der spezifischen Gewächshauszone und dem Erntedatum bis zur endgültigen CBD-Isolat-Chargennummer und dem Analysezertifikat.' },
  { icon: CheckCircle, label: 'Chargendokumentation & Analysezertifikat', desc: 'Vollständige Chargenprotokolle, Laborberichte von Drittanbietern und Analysezertifikate sind für jeden Produktionslauf auf qualifizierte B2B-Anfrage verfügbar.' },
];

export default function DePlantingPageClient() {
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
              <Badge variant="default" className="mb-6">Anbau- & Zuchtzentrum · Chuxiong, Yunnan</Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold text-on-background tracking-tighter leading-[0.95] mb-6">
                Angebaut in der Höhe.
                <br />
                <span className="text-primary">Rückverfolgbar bis zur Quelle.</span>
              </h1>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8 max-w-md">
                Vetrux betreibt ein eigenes Anbau- und Zuchtzentrum in Chuxiong, Provinz Yunnan —
                wo Höhenlage und intensive UV-Strahlung ideale Bedingungen für
                CBD-reichen Hanf mit außergewöhnlichen Cannabinoid- und Terpenprofilen schaffen.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Yunnan-Höhenlage', 'UV-reicher Anbau', 'Standardisierter Anbau', 'Vertikal integriert'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src="/images/planting/vegetative-growth.jpg" alt="Vetrux Anbaubasis-Gewächshaus in Chuxiong, Yunnan" className="w-full h-[500px] object-cover" />
              <div className="absolute bottom-6 right-6 bg-on-background/90 backdrop-blur p-4">
                <p className="text-xs text-white/50 tracking-widest uppercase mb-1">Anbau- & Zuchtzentrum</p>
                <p className="text-sm font-bold text-white">Chuxiong, Provinz Yunnan</p>
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
              <SectionLabel>Warum vertikale Integration wichtig ist</SectionLabel>
              <h2 className="text-4xl font-extrabold text-on-background tracking-tighter leading-tight mt-4">
                Die besten Extrakte beginnen
                <br />auf dem Feld.
              </h2>
            </div>
            <div className="reveal-card lg:col-span-7 space-y-5 pt-2">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Bei Vetrux ist vertikale Integration kein Schlagwort — es ist unser Betriebsmodell. Durch die Kontrolle
                von Anbau, Zucht und Extraktion unter einem Dach eliminieren wir Unsicherheiten in der Lieferkette
                und liefern konsistente Cannabinoidprofile Charge für Charge.
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Unsere Basis in Chuxiong liegt auf der Yunnan-Hochebene, wo natürlich intensive
                UV-Strahlung und saubere Bergluft eine überlegene Trichom-Entwicklung und Cannabinoid-Akkumulation
                fördern — Vorteile, die keine Indoor-Anlage replizieren kann.
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Von der proprietären Auswahl CBD-reicher Sorten bis zur chromatographischen Reinigung mit 26 Säulen
                ist jedes Glied unserer integrierten Produktionskette auf Reinheit, Potenz und Rückverfolgbarkeit optimiert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GROWING ZONES ───────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div ref={zonesRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <SectionLabel>Anbauzonen</SectionLabel>
            <h2 className="text-4xl font-extrabold text-on-background tracking-tighter mb-16 max-w-xl">Drei Zonen. Ein kontrollierter Prozess.</h2>
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
              <SectionLabel>Felddokumentation</SectionLabel>
              <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mt-3">Einblick in die Anbaubasis Chuxiong</h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-sm leading-relaxed">
              Echte Fotos aus unserem Anbau- und Zuchtzentrum in Yunnan — von der Setzlingsvermehrung über die Blüte bis zur Ernte.
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
              <SectionLabel light>Vollständige Rückverfolgbarkeit</SectionLabel>
              <h2 className="text-4xl font-extrabold text-white tracking-tighter leading-tight mt-4">
                Vollständig integrierte
                <br />Lieferkette
              </h2>
              <p className="mt-5 text-sm text-white/50 leading-relaxed">
                Vetrux&apos; vertikal integriertes Modell bedeutet, dass jedes Gramm CBD-Isolat auf eine bestimmte
                Gewächshauszone, Ernte-Charge und Extraktionslauf in unserer Chuxiong-Anlage zurückverfolgt werden kann. Keine Zwischenhändler,
                keine blinden Flecken — nur eine vollständig rückverfolgbare, standardisierte Lieferkette.
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
              <SectionLabel>Großhandelsanfrage</SectionLabel>
              <h2 className="text-4xl font-extrabold text-on-background tracking-tighter leading-tight mt-3">
                Direkt vom
                <br />Erzeuger beziehen.
              </h2>
              <p className="mt-4 text-sm text-on-surface-variant leading-relaxed max-w-lg">
                Umgehen Sie die Zwischenhändler. Sprechen Sie mit unserem Team über Biomasse-Großlieferungen, White-Label-Isolat oder maßgeschneiderte Extraktionsverträge — alles gestützt durch unsere vertikal integrierte Lieferkette.
              </p>
            </div>
            <div className="reveal-card lg:col-span-4 flex flex-col gap-3">
              <a href="/de/inquiry" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-xs font-bold tracking-widest uppercase hover:bg-primary-container transition-all duration-300">
                Angebot anfordern
              </a>
              <a href="/de/products/cbd-isolate" className="inline-flex items-center justify-center px-8 py-4 border border-outline-variant/40 text-on-surface text-xs font-bold tracking-widest uppercase hover:bg-surface-container transition-all duration-300">
                Produktspezifikationen ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
