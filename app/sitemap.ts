import type { MetadataRoute } from 'next'
import { articles } from '@/content/articles'
import { gallerySlugs } from '@/lib/gallery'

const BASE_URL = 'https://www.vetrux.tech'

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split('T')[0]

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,                          lastModified: today, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/products/cbd-isolate`,      lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/wholesale-cbd-isolate`,     lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/quality-assurance`,         lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/cbd-isolate-manufacturer`,  lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/inquiry`,                   lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/equipment`,                 lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/planting`,                  lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog`,                      lastModified: today, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE_URL}/de`,                        lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/fr`,                        lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/gallery`,                   lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/process`,    lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/de/process`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/fr/process`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about`,                     lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/privacy-policy`,            lastModified: today, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/terms-of-service`,          lastModified: today, changeFrequency: 'yearly',  priority: 0.3 },
  ]

  // Gallery sector subpages — EN/DE/FR variants (12 routes).
  const gallerySectorRoutes: MetadataRoute.Sitemap = gallerySlugs.flatMap((slug) => [
    { url: `${BASE_URL}/gallery/${slug}`,    lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/de/gallery/${slug}`, lastModified: today, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/fr/gallery/${slug}`, lastModified: today, changeFrequency: 'monthly', priority: 0.5 },
  ])

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...gallerySectorRoutes, ...articleRoutes]
}
