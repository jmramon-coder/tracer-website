import { ResourceArticlePage } from "@/components/resource-article-page"
import { createResourcePageMetadata } from "@/lib/resource-metadata"
import { getRequiredResourceArticle, getResourcePath } from "@/lib/resource-routes"

const resourceId = "research-security-tools"

export const metadata = createResourcePageMetadata(resourceId, "fr")

export default function OutilsSecuriteRecherchePage() {
  return (
    <ResourceArticlePage
      resource={getRequiredResourceArticle(resourceId, "fr")}
      language="fr"
      path={getResourcePath(resourceId, "fr")}
    />
  )
}
