'use client'

export default function DeAboutPageClient() {
  return (
    <div className="bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-6">Über uns</p>
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-on-background tracking-tight leading-[1.0] mb-6">
          Über <span className="italic text-primary">VETRUX</span>
        </h1>
        <p className="text-[15px] text-on-surface-variant leading-relaxed max-w-2xl mb-16">
          VETRUX ist die internationale Marke, betrieben von Vetrux Biotechnology (Chuxiong) Co., Ltd.
          (&bdquo;das Unternehmen&ldquo;), einem vertikal integrierten CBD-Isolat-Hersteller mit Sitz
          in Chuxiong, Provinz Yunnan, China. Das Unternehmen ist spezialisiert auf den Verkauf von
          CBD-Rohstoffen, OEM/ODM-Dienstleistungen und technische Beratung.
        </p>

        {/* Company Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">Unsere Mission</h2>
          <p className="text-[15px] text-on-surface-variant leading-relaxed mb-4">
            Durch rigoroses Qualitätsmanagement, standardisierten Hanfanbau und professionelle
            Extraktionsprozesse liefert VETRUX zuverlässige CBD-Rohstoffe an Partner weltweit.
            Unser vertikal integriertes Modell — von der Saatgutauswahl bis zum Endprodukt —
            gewährleistet vollständige Rückverfolgbarkeit, gleichbleibende Qualität und
            wettbewerbsfähige Preise. Wir bieten auch OEM/ODM-Dienstleistungen und technische
            Beratung an, um unseren Kunden bei der Entwicklung und Skalierung ihrer eigenen
            Produktlinien zu helfen.
          </p>
        </section>

        {/* Vertical Integration */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">Vertikale Integration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-low p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200">
              <h3 className="text-[15px] font-serif font-medium text-on-background tracking-tight mb-2">Hanfanbau</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Standardisierte Anbaubasis in Chuxiong, Provinz Yunnan, mit kontrollierten Wachstumsbedingungen und vollständiger Rückverfolgbarkeit vom Saatgut bis zur Ernte. Yunnan ist eine der führenden Regionen Chinas für den industriellen Hanfanbau.
              </p>
            </div>
            <div className="bg-surface-container-low p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200">
              <h3 className="text-[15px] font-serif font-medium text-on-background tracking-tight mb-2">Extraktion &amp; Reinigung</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Professionelle Extraktionsanlage ausgestattet mit 20 Extraktionstanks, 26 Chromatographiesäulen, 10 Konzentratoren und automatisierten Produktionssystemen, ausgerichtet auf die Produktion von CBD-Isolat.
              </p>
            </div>
            <div className="bg-surface-container-low p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200">
              <h3 className="text-[15px] font-serif font-medium text-on-background tracking-tight mb-2">Qualitätskontrolle</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Hauseigenes Qualitätskontrolllabor mit HPLC-Instrumentierung für Potenz- und Reinheitsanalysen. Jede Charge durchläuft umfassende Tests, um gleichbleibende Produktqualität und regulatorische Konformität sicherzustellen.
              </p>
            </div>
            <div className="bg-surface-container-low p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200">
              <h3 className="text-[15px] font-serif font-medium text-on-background tracking-tight mb-2">OEM/ODM &amp; Technische Beratung</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Umfassende OEM/ODM-Kapazitäten für kundenspezifische Formulierungen und Eigenmarkenprodukte. Technische Beratungsdienstleistungen zur Unterstützung von Kunden bei Produktentwicklung, Prozessoptimierung und regulatorischer Begleitung.
              </p>
            </div>
          </div>
        </section>



        {/* Company Facts */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-4">Unternehmensprofil</h2>
          <div className="bg-surface-container-low p-6 border-l-2 border-transparent hover:border-accent transition-colors duration-200">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[15px]">
              <div>
                <dt className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">Marke</dt>
                <dd className="text-on-background">VETRUX</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">Englischer Name</dt>
                <dd className="text-on-background">Vetrux Biotechnology (Chuxiong) Co., Ltd.</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">Chinesischer Name</dt>
                <dd className="text-on-background">蔚萃生物科技（楚雄）有限公司</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">Registrierte Adresse</dt>
                <dd className="text-on-background break-words">云南省楚雄彝族自治州楚雄市彝海街道办事处富民社区居民委员会塔普二组育苗基地院内办公室</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">Kerngeschäft</dt>
                <dd className="text-on-background">CBD-Rohstoffverkauf, OEM/ODM, technische Beratung</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">Produkte</dt>
                <dd className="text-on-background">CBD-Isolat</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">Ausrüstung</dt>
                <dd className="text-on-background">20 Extraktionstanks, 26 Chromatographiesäulen, 10 Konzentratoren, HPLC, Automatisierung</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">Anfrage-E-Mail</dt>
                <dd>
                  <a href="mailto:inquiry@vetrux.tech" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors duration-200">
                    inquiry@vetrux.tech
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-1">Vertriebs-E-Mail</dt>
                <dd>
                  <a href="mailto:sales@vetrux.tech" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors duration-200">
                    sales@vetrux.tech
                  </a>
                </dd>
              </div>

            </dl>
          </div>
        </section>
      </div>
    </div>
  );
}
