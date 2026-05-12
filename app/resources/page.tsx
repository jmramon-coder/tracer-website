import { Header } from "@/components/header"
import { ResourceReader } from "@/components/resource-reader"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Resources",
  description:
    "Research security articles, guides, and compliance notes for universities and research institutions.",
  path: "/resources",
})

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <ResourceReader />
    </main>
  )
}
