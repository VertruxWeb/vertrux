'use client'

// src/components/organisms/Footer.tsx
// Site footer with brand, nav links, and copyright — language-aware

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const supportedLangPrefixes = ['/de', '/fr']

function detectLangPrefix(pathname: string): string {
  for (const prefix of supportedLangPrefixes) {
    if (pathname === prefix || pathname.startsWith(prefix + '/')) return prefix
  }
  return ''
}

const footerLinks = [
  {
    heading: 'Products',
    links: [
      { label: 'CBD Isolate Overview', href: '/products/cbd-isolate' },
      { label: 'Wholesale CBD Isolate', href: '/wholesale-cbd-isolate' },
      { label: 'Wholesale Inquiry', href: '/inquiry' },
    ],
  },
  {
    heading: 'Process',
    links: [
      { label: 'From Seed to Isolate', href: '/process' },
      { label: 'Cultivation', href: '/planting' },
      { label: 'Extraction', href: '/equipment' },
      { label: 'Quality Assurance', href: '/quality-assurance' },
      { label: 'Facility Gallery', href: '/gallery' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About VETRUX', href: '/about' },
      { label: 'Manufacturer Profile', href: '/cbd-isolate-manufacturer' },
      { label: 'Blog & Insights', href: '/blog' },
      { label: 'Contact & Inquiry', href: '/inquiry' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
    ],
  },
]

export default function Footer() {
  const pathname = usePathname()
  const langPrefix = detectLangPrefix(pathname)

  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand block */}
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
              Vertically integrated CBD isolate manufacturer. From seed selection to finished product delivery.
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

          {/* Nav columns */}
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

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="text-xs text-inverse-on-surface/60 leading-relaxed">
              <p className="font-semibold text-inverse-on-surface/80 mb-1">Vetrux CBD</p>
              <p className="text-inverse-on-surface/50">Operated by 蔚萃生物科技（楚雄）有限公司</p>
              <p>云南省楚雄彝族自治州楚雄市</p>
              <p>彝海街道办事处富民社区居民委员会</p>
              <p>塔普二组育苗基地院内办公室</p>
              <p>
                Email:{' '}
                <a href="mailto:inquiry@vetrux.tech" className="text-inverse-on-surface/80 hover:text-white transition-colors">
                  inquiry@vetrux.tech
                </a>
              </p>
              <p>Phone: +86 13518730530</p>

            </div>
            <p className="text-xs text-inverse-on-surface/40">
              © {new Date().getFullYear()} Vetrux CBD. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
