'use client'

export default function FrAboutPageClient() {
  return (
    <div className="bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-on-background tracking-tighter leading-tight mb-6">
          À propos de Vetrux CBD
        </h1>
        <p className="text-sm text-on-surface-variant leading-relaxed max-w-2xl mb-16">
          VETRUX est la marque internationale de 蔚萃生物科技（楚雄）有限公司 (Vetrux Biotechnology (Chuxiong) Co., Ltd.), un fabricant d&apos;isolat de CBD verticalement intégré et fournisseur d&apos;extraits botaniques basé à Chuxiong, province du Yunnan, Chine. Nous sommes spécialisés dans la vente de matières premières CBD, les services OEM/ODM, le conseil technique et d&apos;autres extraits botaniques incluant les anthocyanes, les glycosides de stéviol et la globuline de graines de chanvre.
        </p>

        {/* Company Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-extrabold text-on-background tracking-tighter mb-4">Notre mission</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
            Grâce à une gestion rigoureuse de la qualité, une culture standardisée du chanvre et des processus d&apos;extraction professionnels, nous fournissons des produits CBD fiables et des solutions d&apos;extraits botaniques à nos partenaires dans le monde entier. Notre modèle verticalement intégré — de la sélection des semences au produit fini — garantit une traçabilité complète, une qualité constante et des prix compétitifs. Nous proposons également des services OEM/ODM et du conseil technique pour aider nos clients à développer et faire évoluer leurs propres gammes de produits.
          </p>
        </section>

        {/* Vertical Integration */}
        <section className="mb-16">
          <h2 className="text-2xl font-extrabold text-on-background tracking-tighter mb-4">Intégration verticale</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-low p-6">
              <h3 className="text-sm font-bold text-on-background mb-2">Culture du chanvre</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Base de culture standardisée à Chuxiong, province du Yunnan, avec des conditions de croissance contrôlées et une traçabilité complète de la semence à la récolte. Le Yunnan est l&apos;une des régions phares de Chine pour la culture du chanvre industriel.
              </p>
            </div>
            <div className="bg-surface-container-low p-6">
              <h3 className="text-sm font-bold text-on-background mb-2">Extraction &amp; Purification</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Installation d&apos;extraction professionnelle équipée de 20 cuves d&apos;extraction, 26 colonnes de chromatographie, 10 concentrateurs et de systèmes de production automatisés. Capable de traiter l&apos;isolat de CBD ainsi que d&apos;autres extraits botaniques incluant les anthocyanes, les glycosides de stéviol et la globuline de graines de chanvre.
              </p>
            </div>
            <div className="bg-surface-container-low p-6">
              <h3 className="text-sm font-bold text-on-background mb-2">Contrôle qualité</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Laboratoire de contrôle qualité interne avec instrumentation HPLC pour l&apos;analyse de puissance et de pureté. Chaque lot subit des tests complets pour garantir une qualité de produit constante et la conformité réglementaire.
              </p>
            </div>
            <div className="bg-surface-container-low p-6">
              <h3 className="text-sm font-bold text-on-background mb-2">OEM/ODM &amp; Conseil technique</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Capacités OEM/ODM complètes pour les formulations personnalisées et les produits en marque blanche. Services de conseil technique pour accompagner les clients dans le développement de produits, l&apos;optimisation des processus et l&apos;orientation réglementaire.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-extrabold text-on-background tracking-tighter mb-4">Certifications &amp; Normes</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'ISO 9001 Système de management de la qualité',
              'BPF (Bonnes Pratiques de Fabrication)',
              'HACCP Gestion de la sécurité alimentaire',
            ].map((cert) => (
              <li key={cert} className="flex items-start gap-2 text-sm text-on-surface-variant">
                <span className="text-primary mt-0.5">✓</span>
                {cert}
              </li>
            ))}
          </ul>
        </section>

        {/* Company Facts */}
        <section className="mb-16">
          <h2 className="text-2xl font-extrabold text-on-background tracking-tighter mb-4">Profil de l&apos;entreprise</h2>
          <div className="bg-surface-container-low p-6">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/60 mb-1">Marque</dt>
                <dd className="text-on-background">VETRUX</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/60 mb-1">Nom anglais</dt>
                <dd className="text-on-background">Vetrux Biotechnology (Chuxiong) Co., Ltd.</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/60 mb-1">Nom chinois</dt>
                <dd className="text-on-background">蔚萃生物科技（楚雄）有限公司</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/60 mb-1">Adresse enregistrée</dt>
                <dd className="text-on-background break-words">云南省楚雄彝族自治州楚雄市彝海街道办事处富民社区居民委员会塔普二组育苗基地院内办公室</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/60 mb-1">Activité principale</dt>
                <dd className="text-on-background">Vente de matières premières CBD, OEM/ODM, conseil technique, extraits botaniques</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/60 mb-1">Produits</dt>
                <dd className="text-on-background">Isolat de CBD, Anthocyanes, Glycosides de stéviol, Globuline de graines de chanvre</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/60 mb-1">Équipement</dt>
                <dd className="text-on-background">20 cuves d&apos;extraction, 26 colonnes de chromatographie, 10 concentrateurs, HPLC, automatisation</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/60 mb-1">E-mail de demande</dt>
                <dd>
                  <a href="mailto:inquiry@vetrux.tech" className="text-primary underline underline-offset-2">
                    inquiry@vetrux.tech
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/60 mb-1">E-mail commercial</dt>
                <dd>
                  <a href="mailto:sales@vetrux.tech" className="text-primary underline underline-offset-2">
                    sales@vetrux.tech
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/60 mb-1">Téléphone</dt>
                <dd className="text-on-background">+86 13518730530</dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </div>
  );
}
