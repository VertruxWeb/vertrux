'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { footerStrings } from '@/content/pages/footer.content'
import type { Locale } from '@/i18n/locales'

const supportedLangPrefixes = ['/de', '/fr', '/es', '/it', '/pt', '/ja', '/fi']

function detectLangPrefix(pathname: string): string {
  for (const prefix of supportedLangPrefixes) {
    if (pathname === prefix || pathname.startsWith(prefix + '/')) return prefix
  }
  return ''
}

function detectLocale(langPrefix: string): Locale {
  if (!langPrefix) return 'en'
  return langPrefix.slice(1) as Locale
}

export default function Footer() {
  const pathname = usePathname()
  const langPrefix = detectLangPrefix(pathname)
  const locale = detectLocale(langPrefix)
  const t = footerStrings[locale]

  const footerLinks = [
    {
      heading: t.colProducts,
      links: [
        { label: t.cbdIsolateOverview, href: '/products/cbd-isolate' },
        { label: t.wholesaleCbdIsolate, href: '/wholesale-cbd-isolate' },
        { label: t.wholesaleInquiry, href: '/inquiry' },
      ],
    },
    {
      heading: t.colProcess,
      links: [
        { label: t.seedToIsolate, href: '/process' },
        { label: t.cultivation, href: '/planting' },
        { label: t.extraction, href: '/equipment' },
        { label: t.qualityAssurance, href: '/quality-assurance' },
        { label: t.facilityGallery, href: '/gallery' },
      ],
    },
    {
      heading: t.colCompany,
      links: [
        { label: t.aboutVetrux, href: '/about' },
        { label: t.manufacturerProfile, href: '/cbd-isolate-manufacturer' },
        { label: t.blogInsights, href: '/blog' },
        { label: t.contactInquiry, href: '/inquiry' },
        { label: t.privacyPolicy, href: '/privacy-policy' },
        { label: t.termsOfService, href: '/terms-of-service' },
      ],
    },
  ]

  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="Vetrux CBD"
                width={319}
                height={64}
                className="h-16 w-auto brightness-0 invert"
                priority
              />
            </div>
            <p className="text-xs text-inverse-on-surface/60 leading-relaxed">
              {t.tagline}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full tracking-wider uppercase">
                CBD Isolate
              </span>
              <span className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full tracking-wider uppercase">
                OEM/ODM
              </span>
              <span className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full tracking-wider uppercase">
                Technical Services
              </span>
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={`${langPrefix}${link.href}`}
                      className="text-xs text-inverse-on-surface/70 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="text-xs text-inverse-on-surface/60 leading-relaxed">
              <p className="font-semibold text-inverse-on-surface/80 mb-1">Vetrux CBD</p>
              <p className="text-inverse-on-surface/50">Operated by 蔚萃生物科技（楚雄）有限公司</p>
              <p>Chuxiong, Yunnan Province, China</p>
              <p>
                Email:{' '}
                <a href="mailto:inquiry@vetrux.tech" className="text-inverse-on-surface/80 hover:text-white transition-colors">
                  inquiry@vetrux.tech
                </a>
              </p>
              <p>Phone: +86 13518730530</p>
            </div>
            <p className="text-xs text-inverse-on-surface/40">
              © {new Date().getFullYear()} Vetrux CBD. {t.allRightsReserved}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
