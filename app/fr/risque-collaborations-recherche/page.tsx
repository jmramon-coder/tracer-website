import { ResourceArticlePage } from "@/components/resource-article-page"
import { createResourcePageMetadata } from "@/lib/resource-metadata"
import { getRequiredResourceArticle, getResourcePath } from "@/lib/resource-routes"

const resourceId = "collaboration-risk"

export const metadata = createResourcePageMetadata(resourceId, "fr")

export default function RisqueCollaborationsRecherchePage() {
  return (
    <ResourceArticlePage
      resource={getRequiredResourceArticle(resourceId, "fr")}
      language="fr"
      path={getResourcePath(resourceId, "fr")}
    />
  )
}
