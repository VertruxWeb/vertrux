'use client'

import { useRef } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '@/components/atoms/Badge';
import SectionLabel from '@/components/atoms/SectionLabel';
import DeInquiryForm from '@/components/molecules/DeInquiryForm';

gsap.registerPlugin(ScrollTrigger);

export default function DeInquiryPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroRef.current) return;
    const items = heroRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: heroRef.current, start: 'top 80%' },
    });
  }, { scope: heroRef });

  useGSAP(() => {
    if (!contentRef.current) return;
    const items = contentRef.current.querySelectorAll('.reveal-card');
    gsap.from(items, {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: contentRef.current, start: 'top 80%' },
    });
  }, { scope: contentRef });

  return (
    <div className="bg-surface">
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <Badge variant="default" className="mb-6">Direkte B2B-Kanäle</Badge>
            <h1 className="text-5xl md:text-6xl font-extrabold text-on-background tracking-tighter leading-[0.95] max-w-3xl mb-6">
              Strategische Partnerschaft
              <br />
              <span className="text-primary">Anfrage</span>
            </h1>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-xl">
              Verbinden Sie sich mit unserem globalen Vertriebsnetzwerk. Ob Sie Bulk-Isolat,
              individuelle Formulierungen oder Private-Label-Lösungen benötigen — unser B2B-Team steht bereit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div ref={contentRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="reveal-card lg:col-span-8">
              <SectionLabel>Großhandelsanfrage</SectionLabel>
              <h2 className="text-3xl font-extrabold text-on-background tracking-tighter mb-10">Ihre Anfrage einreichen</h2>
              <DeInquiryForm />
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div className="reveal-card bg-surface-container-low p-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-6">B2B-Support</p>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-fixed flex items-center justify-center mt-0.5">
                      <Mail size={14} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">Vertrieb E-Mail</p>
                      <p className="text-sm font-semibold text-on-surface">sales@vetrux.tech</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-fixed flex items-center justify-center mt-0.5">
                      <Mail size={14} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">E-Mail</p>
                      <p className="text-sm font-semibold text-on-surface">inquiry@vetrux.tech</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-fixed flex items-center justify-center mt-0.5">
                      <MapPin size={14} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">Hauptsitz</p>
                      <p className="text-sm font-semibold text-on-surface leading-relaxed">
                        Büro in Seedling Base, Tapu Second Group,<br />Chuxiong City, Yunnan Province, 675000, China
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal-card overflow-hidden">
                <iframe
                  title="Chuxiong, Yunnan Standort"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=101.0%2C24.5%2C102.1%2C25.6&layer=mapnik&marker=25.03%2C101.55"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                />
              </div>

              <div className="reveal-card bg-primary p-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-6">Leistungsspektrum</p>
                <div className="space-y-4">
                  {[
                    { cert: 'CBD-Rohstoffe', desc: 'CBD-Isolat, ≥99,9% Reinheit' },
                    { cert: 'OEM/ODM-Dienstleistungen', desc: 'Von der Formulierung zum Endprodukt' },
                    { cert: 'Technische Unterstützung', desc: 'Anbau- & Extraktionsexpertise' },
                    { cert: 'Botanische Extrakte', desc: 'Anthocyane, Steviolglykoside, Hanfsamenprotein' },
                  ].map((item) => (
                    <div key={item.cert} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                      <span className="text-xs font-bold text-white">{item.cert}</span>
                      <span className="text-xs text-white/50">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
