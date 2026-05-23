import { createMetadata } from "@/lib/metadata"
import {
  getArticleDescription,
  getRequiredResourceArticle,
  getResourceAlternates,
  getResourcePath,
} from "@/lib/resource-routes"
import type { Language } from "@/lib/translations"

export function createResourcePageMetadata(id: string, language: Language) {
  const article = getRequiredResourceArticle(id, language)

  return createMetadata({
    title: article.title,
    description: getArticleDescription(article),
    path: getResourcePath(id, language),
    languages: getResourceAlternates(id),
    locale: language === "fr" ? "fr_CA" : "en_CA",
  })
}
