'use client'

import { useRef } from 'react';
import { ArrowRight, Download, FlaskConical, Award, Layers } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import SectionLabel from '@/components/atoms/SectionLabel';
import SpecRow from '@/components/molecules/SpecRow';

gsap.registerPlugin(ScrollTrigger);

export default function DeHomePageClient() {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const featureCardsRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroContentRef.current) return;
    const targets = heroContentRef.current.querySelectorAll('.hero-animate');
    gsap.from(targets, {
      y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
    });
  }, { scope: heroContentRef });

  useGSAP(() => {
    if (!featureCardsRef.current) return;
    const cards = featureCardsRef.current.querySelectorAll('.reveal-card');
    gsap.from(cards, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: featureCardsRef.current, start: 'top 80%' },
    });
  }, { scope: featureCardsRef });

  useGSAP(() => {
    if (!bentoRef.current) return;
    const items = bentoRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: bentoRef.current, start: 'top 80%' },
    });
  }, { scope: bentoRef });

  useGSAP(() => {
    if (!trustRef.current) return;
    const items = trustRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: trustRef.current, start: 'top 80%' },
    });
  }, { scope: trustRef });

  return (
    <div className="bg-surface">

      {/* ── HERO SECTION ────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden bg-on-background">
        <Image
          src="/images/hero/facility-hero.webp"
          alt="Vetrux Biotechnology CBD-Extraktionsanlage in Chuxiong, Yunnan"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/60 to-transparent" />

        <div ref={heroContentRef} className="relative z-10 max-w-container mx-auto px-6 lg:px-12 pb-20 pt-32">
          <div className="max-w-3xl">
            <div className="hero-animate">
              <Badge variant="glass" className="mb-6">Vetrux Biotechnology · Chuxiong, Yunnan</Badge>
            </div>

            <h1 className="hero-animate text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[0.95] mb-6">
              CBD-Rohstoffe<br />& Pflanzenextrakte
            </h1>

            <p className="hero-animate text-base md:text-lg text-white/70 leading-relaxed max-w-xl mb-10">
              Vetrux — eine Marke der 蔚萃生物 — liefert CBD-Isolat durch
              Ethanol-Extraktion und chromatographische Reinigung aus unserer Produktionsstätte in Chuxiong, Yunnan.
              OEM/ODM-Dienstleistungen, technische Beratung und Großhandelsversorgung für globale B2B-Partner.
            </p>

            <div className="hero-animate flex flex-wrap gap-4">
              <Link href="/de/equipment">
                <Button variant="primary" size="lg" icon={ArrowRight}>
                  Anlage entdecken
                </Button>
              </Link>
              <Link href="/de/products/cbd-isolate">
                <Button variant="glass" size="lg">
                  Technische Daten
                </Button>
              </Link>
            </div>
          </div>

          <div className="hero-animate flex flex-wrap gap-6 mt-16 pt-8 border-t border-white/10">
            {[
              { value: '20+', label: 'Extraktionsanlagen' },
              { value: '26', label: 'Chromatographiesäulen' },
              { value: 'HPLC', label: 'Qualitätsprüfung' },
              { value: '5+', label: 'Jahre Erfahrung' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white tracking-tighter">{stat.value}</p>
                <p className="text-xs text-white/50 tracking-widest uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY CONTEXT ────────────────────────────────────────────── */}
      <section className="py-12 bg-surface-container-low border-b border-outline-variant/20">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">Marktkontext</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Der europäische CBD-Markt wird voraussichtlich bis 2027 <span className="text-on-surface font-semibold">3,2 Milliarden Euro erreichen</span>, angetrieben durch Gesundheits-, Ernährungs- und Kosmetikanwendungen. <a href="https://prohibitionpartners.com" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant/60 text-xs underline underline-offset-2">(Prohibition Partners, European CBD Report)</a>
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">Extraktionswissenschaft</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Vetrux setzt <span className="text-on-surface font-semibold">Ethanol-Extraktion in Kombination mit chromatographischer Reinigung</span> unter Verwendung von 26 industriellen Chromatographiesäulen ein. Dieser mehrstufige Prozess — Extraktion, chromatographische Trennung, Konzentration und Kristallisation — ist auf konsistente Produktqualität ausgelegt.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">Herstellerprofil</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Von unserer Produktionsbasis in <span className="text-on-surface font-semibold">Chuxiong, Provinz Yunnan</span> aus kontrolliert Vetrux Biotechnology die gesamte Produktionskette — von der Hanfbiomasse-Verarbeitung über Ethanol-Extraktion, chromatographische Reinigung und abschließende Kristallisation bis hin zur Chargenfreigabe und Exportverpackung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIAL SCALE SECTION ────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative reveal-card">
              <Image
                src="/images/equipment/extraction-tanks.jpg"
                alt="20 Sätze 6m³ industrielle Extraktionstanks in der Vetrux-Anlage"
                width={800}
                height={520}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-primary text-white px-5 py-3">
                <p className="text-xs tracking-widest uppercase font-semibold text-white/70">Kapazität</p>
                <p className="text-2xl font-extrabold tracking-tighter">20× 6m³ Extraktionstanks</p>
              </div>
            </div>

            <div ref={featureCardsRef}>
              <div className="reveal-card">
                <SectionLabel>Industrieller Maßstab</SectionLabel>
                <h2 className="text-4xl md:text-5xl font-extrabold text-on-background tracking-tighter leading-tight mb-6">
                  Industrielle Infrastruktur
                  <br />
                  <span className="text-primary">Präzisionsgesteuert</span>
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-10 max-w-md">
                  Unsere Anlage in Chuxiong umfasst 20 Sätze 6m³-Extraktionstanks, 26 Chromatographiesäulen
                  und 10 Konzentratoren — unterstützt durch Lösungsmittel-Rückgewinnungstürme, Ethanol-Lagerung
                  und HPLC-Analysesysteme mit vollständiger Automatisierungssteuerung.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: FlaskConical, title: 'Ethanol-Extraktion & Reinigung', desc: 'Industrielle Ethanol-Extraktion gefolgt von 26-Säulen-Chromatographie-Reinigung für hochreines CBD-Isolat.' },
                  { icon: Award, title: 'OEM/ODM & Technische Beratung', desc: 'Auftragsfertigung, Formulierungsunterstützung und technische Beratung für CBD- und Pflanzenextrakt-Produkte.' },
                  { icon: Layers, title: 'Mehrstufige Veredelung', desc: 'Chromatographische Trennung, Konzentration, Kristallisation und HPLC-verifizierte Chargenprüfung.' },
                ].map((feat) => (
                  <div key={feat.title} className="reveal-card flex gap-4 p-5 bg-surface-container-low hover:bg-surface-container transition-colors duration-200">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-fixed flex items-center justify-center">
                      <feat.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface mb-1">{feat.title}</p>
                      <p className="text-xs text-on-surface-variant leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CBD ISOLATE BENTO SECTION ───────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div ref={bentoRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="reveal-card lg:col-span-8 relative overflow-hidden">
              <Image
                src="/images/products/cbd-crystal-closeup.jpg"
                alt="CBD-Isolat Nahaufnahme"
                width={1200}
                height={580}
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="w-full h-[580px] object-cover object-[center_40%]"
              />
              <div className="absolute top-6 left-6">
                <Badge variant="default">Reinheitsfokus</Badge>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-48 p-8 bg-gradient-to-t from-on-background/90 via-on-background/40 to-transparent flex items-end">
                <h2 className="text-4xl font-extrabold text-white tracking-tighter leading-tight">
                  Produktübersicht<br />CBD-Isolat
                </h2>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="reveal-card bg-primary p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-4">Technische Daten</p>
                  <p className="text-2xl font-extrabold text-white tracking-tighter leading-tight mb-2">Analysezertifikat verfügbar</p>
                  <p className="text-xs text-white/70 leading-relaxed">Chargendokumentation und Produktinformationen können im Rahmen qualifizierter B2B-Gespräche eingesehen werden.</p>
                </div>
                <Link href="/de/inquiry" className="mt-6 inline-flex items-center gap-2 px-4 py-3 bg-white text-primary text-xs font-bold tracking-widest uppercase hover:bg-primary-fixed transition-colors duration-200">
                  <Download size={14} />
                  Dokumentation anfordern
                </Link>
              </div>

              <div className="reveal-card bg-surface-container-lowest p-8 flex-1">
                <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-4">Wichtige Spezifikationen</p>
                <SpecRow label="Reinheitsprüfung" value="HPLC-verifiziert" />
                <SpecRow label="Dokumentation" value="COA pro Charge verfügbar" />
                <SpecRow label="Erscheinungsbild" value="Weißes Kristallin" />
                <SpecRow label="Lösungsmittelrückstände" value="&lt; 10 PPM" isLast />
                <Link href="/de/products/cbd-isolate" className="mt-6 inline-flex items-center gap-1 text-xs font-semibold tracking-wider uppercase text-primary hover:text-primary-container transition-colors duration-200">
                  Vollständige Spezifikationen <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS / CERTIFICATIONS ─────────────────────────────── */}
      <section className="py-16 bg-surface">
        <div ref={trustRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
            {[
              { label: 'Qualitätsfokus', sub: 'HPLC-Prüfung · Chargendokumentation', href: '/de/quality-assurance' },
              { label: 'Großhandel', sub: 'CBD & Pflanzenextrakte im Großhandel', href: '/de/wholesale-cbd-isolate' },
              { label: 'Herstellerprofil', sub: 'Produktionsbasis Chuxiong, Yunnan', href: '/de/cbd-isolate-manufacturer' },
              { label: 'Globale Anfrage', sub: 'inquiry@vetrux.tech', href: '/de/inquiry' },
            ].map((cert) => (
              <Link key={cert.label} href={cert.href} className="reveal-card py-6 border-t-2 border-primary-fixed hover:border-primary transition-colors duration-200 block">
                <p className="text-lg font-extrabold text-on-background tracking-tighter">{cert.label}</p>
                <p className="text-xs text-on-surface-variant tracking-wider uppercase mt-1">{cert.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <SectionLabel>Häufig gestellte Fragen</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-background tracking-tighter leading-tight mb-12">
            Was Einkäufer uns fragen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'Was ist CBD-Isolat und wie unterscheidet es sich von Vollspektrum-CBD?',
                a: 'CBD-Isolat ist eine hochreine Form von Cannabidiol — ein weißes kristallines Pulver mit ≥99,9% Reinheit, bei dem andere Cannabinoide, Terpene und Pflanzenverbindungen entfernt wurden. Im Gegensatz zu Vollspektrum-CBD, das mehrere Cannabinoide enthält, ist CBD-Isolat auf einen einzelnen Wirkstoff fokussiert, was es für Formulierungen mit präziser Dosierung geeignet macht. Reinheitsspezifikationen sind in der Chargendokumentation verfügbar.',
              },
              {
                q: 'Welche Dienstleistungen bietet Vetrux über CBD-Isolat hinaus an?',
                a: 'Neben dem Verkauf von CBD-Rohstoffen bietet Vetrux OEM/ODM-Auftragsfertigung, technische Beratung und weitere pflanzliche Extrakte wie Anthocyane, Steviolglykoside und Hanfsamen-Globulin an. Kontaktieren Sie sales@vetrux.tech für OEM/ODM-Anfragen oder inquiry@vetrux.tech für allgemeine Produktinformationen.',
              },
              {
                q: 'Welche Verpackungsoptionen gibt es für CBD-Isolat?',
                a: 'Vetrux bietet CBD-Isolat in 5 kg PE-Beuteln (27×60 cm), 5 kg Aluminiumfolienbeuteln (35×50 cm) und Exportkartons (465×285×295 mm) an. Individuelle Verpackungen sind über unsere OEM/ODM-Dienstleistungen verfügbar. Mengenrabatte für Großbestellungen — kontaktieren Sie sales@vetrux.tech.',
              },
              {
                q: 'Wie gewährleistet Vetrux die CBD-Qualität?',
                a: 'Jede Charge wird mittels HPLC getestet und dokumentiert. Unser Ethanol-Extraktions- und 26-Säulen-Chromatographie-Reinigungsverfahren ist auf gleichbleibende Qualität ausgelegt. Vollständige Dokumentation einschließlich COA, Ursprungszeugnis und SDS wird mit jeder Lieferung bereitgestellt. Spezifische Reinheitswerte sind in der Chargendokumentation enthalten.',
              },
              {
                q: 'Wo befindet sich Vetrux und welche Versandbedingungen sind verfügbar?',
                a: 'Vetrux Biotechnology hat seinen Sitz in Chuxiong, Provinz Yunnan, China. Versandbedingungen und Lieferzeiten werden pro Auftrag besprochen. Alle Sendungen enthalten chargenspezifisches COA, Ursprungszeugnis und Sicherheitsdatenblatt. Kontaktieren Sie inquiry@vetrux.tech für Logistikdetails.',
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-surface p-6">
                <h3 className="text-sm font-bold text-on-background mb-3">{faq.q}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Referenzen */}
          <div className="mt-12 pt-8 border-t border-outline-variant/20">
            <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/40 mb-3">Referenzen &amp; Standards</p>
            <ul className="flex flex-col gap-1.5 text-xs text-on-surface-variant/60">
              <li><a href="https://www.who.int/docs/default-source/controlled-substances/whocbdreportmay2018-2.pdf" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-on-surface-variant">WHO-Sachverständigenausschuss für Drogenabhängigkeit — Cannabidiol (CBD) Prüfbericht (2018)</a></li>
              <li><a href="https://food.ec.europa.eu/safety/novel-food/legislation_en" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-on-surface-variant">EU-Verordnung über neuartige Lebensmittel (EU) 2015/2283 — Europäische Kommission</a></li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
