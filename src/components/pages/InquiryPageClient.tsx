'use client'

import type { Locale } from '@/i18n/locales';
import { useRef } from 'react';
import { Mail, MapPin } from 'lucide-react';
import Badge from '@/components/atoms/Badge';
import SectionLabel from '@/components/atoms/SectionLabel';
import InquiryForm from '@/components/molecules/InquiryForm';
import { useReveal } from '@/hooks/useReveal';
import { inquiryPageStrings } from '@/content/pages/inquiry.content';

export default function InquiryPageClient({ locale = 'en' }: { locale?: Locale }) {
  const t = inquiryPageStrings[locale];
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useReveal(heroRef, { y: 40, stagger: 0.1, start: 'top 80%' });
  useReveal(contentRef, { y: 40, stagger: 0.12, start: 'top 80%' });

  return (
    <div className="bg-surface">
      <section className="py-24 bg-surface-container-low">
        <div ref={heroRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="reveal-card">
            <Badge variant="default" className="mb-6">{t.badge}</Badge>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-on-background tracking-tight leading-[1.0] max-w-3xl mb-6">
              {t.titleLine1}
              <br />
              <span className="italic text-primary">{t.titleLine2}</span>
            </h1>
            <p className="text-[15px] text-on-surface-variant leading-relaxed max-w-xl">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div ref={contentRef} className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="reveal-card lg:col-span-8">
              <SectionLabel>{t.sectionLabel}</SectionLabel>
              <h2 className="text-3xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-10">{t.formHeading}</h2>
              <InquiryForm locale={locale} />
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div className="reveal-card bg-surface-container-low p-8 border-l-2 border-transparent hover:border-accent transition-colors duration-200">
                <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-6">{t.sidebarEyebrow}</p>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-fixed flex items-center justify-center mt-0.5">
                      <Mail size={14} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">{t.salesEmail}</p>
                      <p className="text-[15px] font-semibold text-on-surface">sales@vetrux.tech</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-fixed flex items-center justify-center mt-0.5">
                      <Mail size={14} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">{t.email}</p>
                      <p className="text-[15px] font-semibold text-on-surface">inquiry@vetrux.tech</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-fixed flex items-center justify-center mt-0.5">
                      <MapPin size={14} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">{t.headquarters}</p>
                      <p className="text-[15px] font-semibold text-on-surface leading-relaxed">
                        Chuxiong, Yunnan Province, China
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/30">
                    <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-3">{t.followUs}</p>
                    <div className="flex items-center gap-3">
                      <a href="https://www.linkedin.com/in/%E8%90%83-%E8%94%9A-994421408/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-on-surface-variant hover:text-primary transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </a>
                      <a href="https://x.com/VetruxCBD" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-on-surface-variant hover:text-primary transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=61589338740056" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-on-surface-variant hover:text-primary transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      </a>
                      <a href="https://www.youtube.com/channel/UCTppL8lRF6EieMGZWwTq4aw" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-on-surface-variant hover:text-primary transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal-card overflow-hidden">
                <iframe
                  title="Chuxiong, Yunnan location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=101.0%2C24.5%2C102.1%2C25.6&layer=mapnik&marker=25.03%2C101.55"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                />
              </div>

              <div className="reveal-card bg-primary p-8 border-l-4 border-accent">
                <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-fixed/90 mb-6">{t.serviceCapabilities}</p>
                <div className="space-y-4">
                  {[
                    { cert: t.cbdRawMaterials, desc: t.cbdRawMaterialsDesc },
                    { cert: t.oemOdmServices, desc: t.oemOdmServicesDesc },
                    { cert: t.technicalSupport, desc: t.technicalSupportDesc },
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
