import SolutionsPage from "@/app/solutions/page"
import { alternatesFor } from "@/lib/localized-paths"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Tarifs",
  description:
    "Tarification transparente pour Tracer, une plateforme de diligence raisonnable en sécurité de la recherche avec des flux de vérification efficaces.",
  path: "/fr/tarifs",
  languages: alternatesFor("/solutions", "/fr/tarifs"),
  locale: "fr_CA",
})

export default SolutionsPage
