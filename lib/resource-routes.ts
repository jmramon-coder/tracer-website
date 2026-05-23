import { resourceLibrary, type ResourceArticle } from "@/lib/resource-library"
import { resourceLibraryFr } from "@/lib/resource-library.fr"
import { alternatesFor } from "@/lib/localized-paths"
import type { Language } from "@/lib/translations"

export type ResourceRoute = {
  id: string
  enPath: string
  frPath: string
}

export const resourceRoutes = [
  {
    id: "research-security-screening",
    enPath: "/research-security-screening",
    frPath: "/fr/verification-securite-recherche",
  },
  {
    id: "academic-due-diligence",
    enPath: "/academic-partnership-due-diligence",
    frPath: "/fr/diligence-raisonnable-partenariats-academiques",
  },
  {
    id: "sanctions-screening",
    enPath: "/sanctions-screening-universities",
    frPath: "/fr/verification-sanctions-universites",
  },
  {
    id: "collaboration-risk",
    enPath: "/research-collaboration-risk",
    frPath: "/fr/risque-collaborations-recherche",
  },
  {
    id: "research-security-tools",
    enPath: "/research-security-tools",
    frPath: "/fr/outils-securite-recherche",
  },
] as const satisfies readonly ResourceRoute[]

export function getResourceRoute(id: string) {
  return resourceRoutes.find((route) => route.id === id)
}

export function getResourceArticle(id: string, language: Language) {
  const library = language === "fr" ? resourceLibraryFr : resourceLibrary
  return library.find((resource) => resource.id === id) ?? null
}

export function getRequiredResourceArticle(id: string, language: Language) {
  const article = getResourceArticle(id, language)

  if (!article) {
    throw new Error(`Missing ${language} resource article: ${id}`)
  }

  return article
}

export function getResourceAlternates(id: string) {
  const route = getResourceRoute(id)

  if (!route) {
    return undefined
  }

  return alternatesFor(route.enPath, route.frPath)
}

export function getResourcePath(id: string, language: Language) {
  const route = getResourceRoute(id)

  if (!route) {
    return "/resources"
  }

  return language === "fr" ? route.frPath : route.enPath
}

export function getAllLocalizedResourcePages() {
  return resourceRoutes.flatMap((route) => [
    {
      id: route.id,
      language: "en" as const,
      path: route.enPath,
      article: getRequiredResourceArticle(route.id, "en"),
      alternates: getResourceAlternates(route.id),
    },
    {
      id: route.id,
      language: "fr" as const,
      path: route.frPath,
      article: getRequiredResourceArticle(route.id, "fr"),
      alternates: getResourceAlternates(route.id),
    },
  ])
}

export function getArticleDescription(article: ResourceArticle) {
  return article.summary || article.takeaways[0] || undefined
}
