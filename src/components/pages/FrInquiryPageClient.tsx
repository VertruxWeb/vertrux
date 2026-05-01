'use client'

import { useRef } from 'react';
import { Mail, MapPin } from 'lucide-react';
import Badge from '@/components/atoms/Badge';
import SectionLabel from '@/components/atoms/SectionLabel';
import FrInquiryForm from '@/components/molecules/FrInquiryForm';
import { useReveal } from '@/hooks/useReveal';

export default function FrInquiryPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useReveal(heroRef, { y: 40, stagger: 0.1, start: 'top 80%' });
  useReveal(contentRef, { y: 40, stagger: 0.12, start: 'top 80%' });

  return (
    <div className="bg-surface">
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <Badge variant="default" className="mb-6">Canaux B2B Directs</Badge>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-on-background tracking-tight leading-[1.0] max-w-3xl mb-6">
              Partenariat
              <br />
              <span className="italic text-primary">Stratégique</span>
            </h1>
            <p className="text-[15px] text-on-surface-variant leading-relaxed max-w-xl">
              Connectez-vous à notre réseau de distribution mondial. Que vous ayez besoin d&apos;isolat en vrac,
              de formulations personnalisées ou de solutions en marque blanche — notre équipe B2B est prête.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div ref={contentRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="reveal-card lg:col-span-8">
              <SectionLabel>Demande de Gros</SectionLabel>
              <h2 className="text-3xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-10">Soumettre Votre Demande</h2>
              <FrInquiryForm />
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div className="reveal-card bg-surface-container-low p-8 border-l-2 border-transparent hover:border-accent transition-colors duration-200">
                <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-6">Support B2B</p>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-fixed flex items-center justify-center mt-0.5">
                      <Mail size={14} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">E-mail Commercial</p>
                      <p className="text-[15px] font-semibold text-on-surface">sales@vetrux.tech</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-fixed flex items-center justify-center mt-0.5">
                      <Mail size={14} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">E-mail</p>
                      <p className="text-[15px] font-semibold text-on-surface">inquiry@vetrux.tech</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-fixed flex items-center justify-center mt-0.5">
                      <MapPin size={14} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">Siège Social</p>
                      <p className="text-[15px] font-semibold text-on-surface leading-relaxed">
                        Bureau à Seedling Base, Tapu Second Group,<br />Chuxiong City, Yunnan Province, 675000, Chine
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal-card overflow-hidden">
                <iframe
                  title="Localisation Chuxiong, Yunnan"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=101.0%2C24.5%2C102.1%2C25.6&layer=mapnik&marker=25.03%2C101.55"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                />
              </div>

              <div className="reveal-card bg-primary p-8 border-l-4 border-accent">
                <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-fixed/90 mb-6">Capacités de Service</p>
                <div className="space-y-4">
                  {[
                    { cert: 'Matières Premières CBD', desc: 'Isolat CBD, pureté ≥99,9%' },
                    { cert: 'Services OEM/ODM', desc: 'De la formulation au produit fini' },
                    { cert: 'Support Technique', desc: 'Expertise en culture & extraction' },
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
