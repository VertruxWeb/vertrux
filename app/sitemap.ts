import type { MetadataRoute } from 'next'
import { articles } from '@/content/articles'
import { gallerySlugs } from '@/lib/gallery'
import { locales, localeMeta, localizePath, localizedRoutes } from '@/i18n/locales'

const BASE_URL = 'https://www.vetrux.tech'

const legalPages = new Set(['/privacy-policy', '/terms-of-service'])

function buildAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {}
  for (const locale of locales) {
    languages[localeMeta[locale].hreflang] = `${BASE_URL}${localizePath(path, locale)}`
  }
  return languages
}

function getRoutePriority(path: string): number {
  if (path === '/') return 1.0
  if (path === '/products/cbd-isolate' || path === '/wholesale-cbd-isolate') return 0.9
  if (path === '/quality-assurance' || path === '/cbd-isolate-manufacturer') return 0.8
  if (legalPages.has(path)) return 0.3
  return 0.7
}

function getRouteChangeFrequency(path: string): 'weekly' | 'monthly' | 'yearly' {
  if (path === '/' || path === '/blog') return 'weekly'
  if (legalPages.has(path)) return 'yearly'
  return 'monthly'
}

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split('T')[0]

  const localizedStaticRoutes: MetadataRoute.Sitemap = localizedRoutes.flatMap((path) => {
    const priority = getRoutePriority(path)
    const changeFrequency = getRouteChangeFrequency(path)
    const alternates = { languages: buildAlternates(path) }

    return locales.map((locale) => ({
      url: `${BASE_URL}${localizePath(path, locale)}`,
      lastModified: today,
      changeFrequency,
      priority: locale === 'en' ? priority : Math.max(priority - 0.1, 0.2),
      alternates,
    }))
  })

  const gallerySectorRoutes: MetadataRoute.Sitemap = gallerySlugs.flatMap((slug) => {
    const path = `/gallery/${slug}`
    const alternates = { languages: buildAlternates(path) }

    return locales.map((locale) => ({
      url: `${BASE_URL}${localizePath(path, locale)}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: locale === 'en' ? 0.6 : 0.5,
      alternates,
    }))
  })

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...localizedStaticRoutes,
    ...gallerySectorRoutes,
    ...articleRoutes,
  ]
}
