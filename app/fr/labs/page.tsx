import LabsPage from "@/app/labs/page"
import { alternatesFor } from "@/lib/localized-paths"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Tracer Labs",
  description:
    "Tracer Labs est la couche opérationnelle où Tracer règle la profondeur de recherche, la structure des rapports et le routage des modèles pour la vérification en sécurité de la recherche.",
  path: "/fr/labs",
  languages: alternatesFor("/labs", "/fr/labs"),
  locale: "fr_CA",
})

export default LabsPage
