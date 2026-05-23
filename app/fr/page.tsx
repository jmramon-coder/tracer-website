import PlatformPage from "@/components/platform-page"
import { alternatesFor } from "@/lib/localized-paths"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Plateforme de sécurité de la recherche",
  description:
    "Diligence raisonnable en sécurité de la recherche pour les institutions canadiennes. Vérifiez les partenaires, affiliations, réseaux, sanctions et signaux de risque avec des rapports cités et auditables.",
  path: "/fr",
  languages: alternatesFor("/", "/fr"),
  locale: "fr_CA",
})

export default PlatformPage
