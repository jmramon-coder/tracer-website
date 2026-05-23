import BlogPage from "@/app/blog/page"
import { alternatesFor } from "@/lib/localized-paths"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Blogue",
  description:
    "Repères, guides de conformité et bonnes pratiques de vérification en sécurité de la recherche pour les universités.",
  path: "/fr/blog",
  languages: alternatesFor("/blog", "/fr/blog"),
  locale: "fr_CA",
})

export default BlogPage
