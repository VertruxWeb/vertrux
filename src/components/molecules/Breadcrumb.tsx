'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

/**
 * Breadcrumb design:
 *   — Top-level nav items are treated as category roots (not children of "Home").
 *   — When the current route IS a top-level nav root, we render nothing.
 *   — When the current route is a sub-page, we render "[Category] > [Self]".
 *   — Orphan routes (privacy, terms, etc.) render nothing.
 *
 * Categories reflect the Navbar structure:
 *   Products   → /products/cbd-isolate (+ /wholesale-cbd-isolate)
 *   Process    → /process
 *     ├─ Cultivation         → /planting
 *     ├─ Extraction          → /equipment
 *     └─ Quality Assurance   → /quality-assurance
 *   Gallery    → /gallery
 *   Blog       → /blog (+ /blog/[slug])
 *   About      (dropdown label — not a route itself)
 *     ├─ Company             → /about
 *     └─ Manufacturer Profile → /cbd-isolate-manufacturer
 *   Contact (CTA)            → /inquiry  (root, hidden)
 */

type Crumb = { label: string; href?: string }

interface CategoryDef {
  label: string
  /** href the category label links to, or null if it is a non-route dropdown label */
  href: string | null
  /** child routes belonging to this category */
  children: Record<string, string>
}

const categories: CategoryDef[] = [
  {
    label: 'Products',
    href: '/products/cbd-isolate',
    children: {
      '/wholesale-cbd-isolate': 'Wholesale CBD Isolate',
    },
  },
  {
    label: 'Process',
    href: '/process',
    children: {
      '/planting': 'Cultivation',
      '/equipment': 'Extraction',
      '/quality-assurance': 'Quality Assurance',
    },
  },
  {
    label: 'Gallery',
    href: '/gallery',
    children: {
      '/gallery/campus': 'Main Campus & Infrastructure',
      '/gallery/cultivation': 'Planting Base & Cultivation',
      '/gallery/extraction': 'Extraction & Refinement',
      '/gallery/products': 'Product & Laboratory',
    },
  },
  {
    label: 'Blog',
    href: '/blog',
    // blog/[slug] handled dynamically via pathname startsWith match
    children: {},
  },
  {
    label: 'About',
    href: null,
    children: {
      '/about': 'Company',
      '/cbd-isolate-manufacturer': 'Manufacturer Profile',
    },
  },
]

/** Routes that are "roots" in the site IA — breadcrumb is hidden at these. */
const rootRoutes = new Set<string>([
  '/',
  '/inquiry',
  ...categories.filter((c) => c.href).map((c) => c.href as string),
])

/** Routes that are deliberately orphaned (footer-linked legal pages). */
const orphanRoutes = new Set<string>(['/privacy-policy', '/terms-of-service'])

function findCategoryForPath(normalizedPath: string): {
  category: CategoryDef
  selfLabel: string
} | null {
  // /blog/[slug] → Blog category, self = slug-derived label
  if (normalizedPath.startsWith('/blog/') && normalizedPath !== '/blog') {
    const blogCat = categories.find((c) => c.label === 'Blog')!
    const slug = normalizedPath.replace('/blog/', '')
    const selfLabel = slug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (ch) => ch.toUpperCase())
    return { category: blogCat, selfLabel }
  }

  for (const cat of categories) {
    if (cat.children[normalizedPath]) {
      return { category: cat, selfLabel: cat.children[normalizedPath] }
    }
  }

  return null
}

export default function Breadcrumb() {
  const pathname = usePathname()

  // Strip /de or /fr language prefix.
  const langPrefix = pathname.startsWith('/de/') || pathname === '/de'
    ? '/de'
    : pathname.startsWith('/fr/') || pathname === '/fr'
      ? '/fr'
      : ''
  const normalized = langPrefix ? pathname.slice(langPrefix.length) || '/' : pathname

  // Hide on: home roots, top-level nav roots, orphan routes.
  if (rootRoutes.has(normalized)) return null
  if (orphanRoutes.has(normalized)) return null

  const found = findCategoryForPath(normalized)
  if (!found) return null

  const { category, selfLabel } = found

  const crumbs: Crumb[] = []
  crumbs.push({
    label: category.label,
    href: category.href ? langPrefix + category.href : undefined,
  })
  crumbs.push({ label: selfLabel })

  return (
    <nav
      aria-label="Breadcrumb"
      className="relative z-10 max-w-container mx-auto px-6 lg:px-12 pt-2 pb-0 -mb-6"
    >
      <ol
        className="flex items-center gap-1 text-[11px] text-on-surface-variant"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1
          return (
            <li
              key={`${i}-${crumb.label}`}
              className="flex items-center gap-1"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {isLast ? (
                <span className="font-semibold text-on-surface" itemProp="name">
                  {crumb.label}
                </span>
              ) : (
                <>
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm"
                      itemProp="item"
                    >
                      <span itemProp="name">{crumb.label}</span>
                    </Link>
                  ) : (
                    <span className="text-on-surface-variant/70" itemProp="name">
                      {crumb.label}
                    </span>
                  )}
                  <ChevronRight
                    size={12}
                    className="text-on-surface-variant/40"
                    aria-hidden="true"
                  />
                </>
              )}
              <meta itemProp="position" content={String(i + 1)} />
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
