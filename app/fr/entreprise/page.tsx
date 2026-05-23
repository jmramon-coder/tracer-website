import CompanyPage from "@/app/company/page"
import { alternatesFor } from "@/lib/localized-paths"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Entreprise",
  description:
    "Tracer bâtit un logiciel canadien de diligence raisonnable en sécurité de la recherche pour les institutions de recherche.",
  path: "/fr/entreprise",
  languages: alternatesFor("/company", "/fr/entreprise"),
  locale: "fr_CA",
})

export default CompanyPage
