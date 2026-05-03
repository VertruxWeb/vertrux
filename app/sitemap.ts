import type { MetadataRoute } from 'next'
import { articles } from '@/content/articles'
import { gallerySlugs } from '@/lib/gallery'
import { locales, localeMeta, localizePath, localizedRoutes, localizedGallerySectors, englishOnlyRoutes } from '@/i18n/locales'

const BASE_URL = 'https://www.vetrux.tech'

function buildAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {}
  for (const locale of locales) {
    languages[localeMeta[locale].hreflang] = `${BASE_URL}${localizePath(path, locale)}`
  }
  return languages
}

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split('T')[0]

  const localizedStaticRoutes: MetadataRoute.Sitemap = localizedRoutes.flatMap((path) => {
    const priority = path === '/' ? 1.0 : path === '/products/cbd-isolate' ? 0.9 : 0.7
    const changeFrequency = path === '/' || path === '/blog' ? 'weekly' : 'monthly'
    const alternates = { languages: buildAlternates(path) }

    return locales.map((locale) => ({
      url: `${BASE_URL}${localizePath(path, locale)}`,
      lastModified: today,
      changeFrequency: changeFrequency as 'weekly' | 'monthly',
      priority: locale === 'en' ? priority : priority - 0.1,
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

  const englishOnlyStaticRoutes: MetadataRoute.Sitemap = englishOnlyRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: today,
    changeFrequency: path === '/privacy-policy' || path === '/terms-of-service' ? 'yearly' as const : 'monthly' as const,
    priority: path === '/wholesale-cbd-isolate' ? 0.9 : path === '/quality-assurance' || path === '/cbd-isolate-manufacturer' ? 0.8 : 0.3,
  }))

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...localizedStaticRoutes,
    ...gallerySectorRoutes,
    ...englishOnlyStaticRoutes,
    ...articleRoutes,
  ]
}
