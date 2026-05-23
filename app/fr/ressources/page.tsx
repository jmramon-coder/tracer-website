import ResourcesPage from "@/app/resources/page"
import { alternatesFor } from "@/lib/localized-paths"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Ressources",
  description:
    "Articles, guides et notes de conformité en sécurité de la recherche pour les universités et institutions de recherche.",
  path: "/fr/ressources",
  languages: alternatesFor("/resources", "/fr/ressources"),
  locale: "fr_CA",
})

export default ResourcesPage
