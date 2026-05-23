import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"
import { localizedPathPairs } from "@/lib/localized-paths"
import { SITE_URL } from "@/lib/metadata"
import { getAllLocalizedResourcePages } from "@/lib/resource-routes"

const BLOG_FR_PATHS: Record<string, string> = {
  "research-security-screening-guide": "/fr/blog/guide-verification-securite-recherche",
}

const STATIC_ROUTE_CONFIG: Record<
  string,
  Pick<MetadataRoute.Sitemap[number], "changeFrequency" | "priority">
> = {
  "/": { changeFrequency: "monthly", priority: 1 },
  "/fr": { changeFrequency: "monthly", priority: 1 },
  "/solutions": { changeFrequency: "monthly", priority: 0.9 },
  "/fr/tarifs": { changeFrequency: "monthly", priority: 0.9 },
  "/labs": { changeFrequency: "monthly", priority: 0.8 },
  "/fr/labs": { changeFrequency: "monthly", priority: 0.8 },
  "/resources": { changeFrequency: "monthly", priority: 0.8 },
  "/fr/ressources": { changeFrequency: "monthly", priority: 0.8 },
  "/blog": { changeFrequency: "weekly", priority: 0.7 },
  "/fr/blog": { changeFrequency: "weekly", priority: 0.7 },
  "/company": { changeFrequency: "monthly", priority: 0.6 },
  "/fr/entreprise": { changeFrequency: "monthly", priority: 0.6 },
  "/privacy": { changeFrequency: "yearly", priority: 0.3 },
  "/cookies": { changeFrequency: "yearly", priority: 0.3 },
}

function sitemapEntry(
  path: string,
  options: Pick<MetadataRoute.Sitemap[number], "changeFrequency" | "priority">,
  lastModified = new Date("2026-05-01")
): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}${path}`,
    lastModified,
    ...options,
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = new Set([
    ...localizedPathPairs.flatMap((pair) => [pair.en, pair.fr]),
    "/privacy",
    "/cookies",
  ])
  const staticEntries = [...staticPaths]
    .filter((path) => STATIC_ROUTE_CONFIG[path])
    .map((path) => sitemapEntry(path, STATIC_ROUTE_CONFIG[path]))

  const resourceEntries = getAllLocalizedResourcePages().map(({ path }) =>
    sitemapEntry(path, { changeFrequency: "monthly", priority: 0.75 })
  )

  const blogEntries = getAllPosts().flatMap((post) => {
    const lastModified = new Date(post.date)
    const enPath = `/blog/${post.slug}`
    const entries = [
      sitemapEntry(enPath, { changeFrequency: "monthly", priority: 0.7 }, lastModified),
    ]
    const frPath = BLOG_FR_PATHS[post.slug]

    if (frPath) {
      entries.push(
        sitemapEntry(frPath, { changeFrequency: "monthly", priority: 0.7 }, lastModified)
      )
    }

    return entries
  })

  return [...staticEntries, ...resourceEntries, ...blogEntries]
}
