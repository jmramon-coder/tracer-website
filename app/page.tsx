import PlatformPage from "@/components/platform-page"
import { alternatesFor } from "@/lib/localized-paths"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  path: "/",
  languages: alternatesFor("/", "/fr"),
})

export default PlatformPage
