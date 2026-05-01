import type { Metadata } from 'next';
import { buildMetadata, getSeoMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/about');
}

export default function AboutPage() {
  const seo = getSeoMetadata('/about');
  const jsonLd = seo.jsonLd;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd]),
          }}
        />
      )}
      <div className="bg-surface min-h-screen">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-on-background tracking-tight leading-[1.05] mb-6">
            About <span className="italic text-primary">VETRUX</span>
          </h1>
          <p className="text-[15px] text-on-surface-variant leading-relaxed max-w-2xl mb-16">
            VETRUX is the international brand operated by Vetrux Biotechnology (Chuxiong) Co., Ltd.
            (&ldquo;the Company&rdquo;), a vertically integrated CBD isolate manufacturer based in
            Chuxiong, Yunnan Province, China. The Company specializes in CBD raw material sales,
            OEM/ODM services, and technical consulting.
          </p>

          {/* Company Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-medium text-on-background tracking-tight mb-4">Our Mission</h2>
            <p className="text-[15px] text-on-surface-variant leading-relaxed mb-4">
              Through rigorous quality management, standardized hemp cultivation, and professional
              extraction processes, VETRUX delivers reliable CBD raw materials to partners worldwide.
              Our vertically integrated model — from seed selection to finished product — ensures
              full traceability, consistent quality, and competitive pricing. We also provide OEM/ODM
              services and technical consulting to help our clients develop and scale their own
              product lines.
            </p>
          </section>

          {/* Vertical Integration */}
          <section className="mb-16">
            <h2 className="text-2xl font-extrabold text-on-background tracking-tighter mb-4">Vertical Integration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-low p-6">
                <h3 className="text-sm font-bold text-on-background mb-2">Hemp Cultivation</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Standardized cultivation base in Chuxiong, Yunnan Province, with controlled growing conditions and full seed-to-harvest traceability. Yunnan is one of China&apos;s premier regions for industrial hemp cultivation.
                </p>
              </div>
              <div className="bg-surface-container-low p-6">
                <h3 className="text-sm font-bold text-on-background mb-2">Extraction &amp; Purification</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Professional extraction facility equipped with 20 extraction tanks, 26 chromatography columns, 10 concentrators, and automated production systems, dedicated to CBD isolate production.
                </p>
              </div>
              <div className="bg-surface-container-low p-6">
                <h3 className="text-sm font-bold text-on-background mb-2">Quality Control</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  In-house quality control laboratory with HPLC instrumentation for potency and purity analysis. Every batch undergoes comprehensive testing to ensure consistent product quality and regulatory compliance.
                </p>
              </div>
              <div className="bg-surface-container-low p-6">
                <h3 className="text-sm font-bold text-on-background mb-2">OEM/ODM &amp; Technical Consulting</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Full-service OEM/ODM capabilities for custom formulations and private-label products. Technical consulting services to support clients with product development, process optimization, and regulatory guidance.
                </p>
              </div>
            </div>
          </section>



          {/* Company Facts */}
          <section className="mb-16">
            <h2 className="text-2xl font-extrabold text-on-background tracking-tighter mb-4">Company Profile</h2>
            <div className="bg-surface-container-low p-6">
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/60 mb-1">Brand</dt>
                  <dd className="text-on-background">VETRUX</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/60 mb-1">English Name</dt>
                  <dd className="text-on-background">Vetrux Biotechnology (Chuxiong) Co., Ltd.</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/60 mb-1">Chinese Name</dt>
                  <dd className="text-on-background">蔚萃生物科技（楚雄）有限公司</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/60 mb-1">Registered Address</dt>
                  <dd className="text-on-background break-words">云南省楚雄彝族自治州楚雄市彝海街道办事处富民社区居民委员会塔普二组育苗基地院内办公室</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/60 mb-1">Core Business</dt>
                  <dd className="text-on-background">CBD raw material sales, OEM/ODM, technical consulting</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/60 mb-1">Products</dt>
                  <dd className="text-on-background">CBD Isolate</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/60 mb-1">Equipment</dt>
                  <dd className="text-on-background">20 extraction tanks, 26 chromatography columns, 10 concentrators, HPLC, automation</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/60 mb-1">Inquiry Email</dt>
                  <dd>
                    <a href="mailto:inquiry@vetrux.tech" className="text-primary underline underline-offset-2">
                      inquiry@vetrux.tech
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/60 mb-1">Sales Email</dt>
                  <dd>
                    <a href="mailto:sales@vetrux.tech" className="text-primary underline underline-offset-2">
                      sales@vetrux.tech
                    </a>
                  </dd>
                </div>

              </dl>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
