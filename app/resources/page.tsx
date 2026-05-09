import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ResourceReader } from "@/components/resource-reader"

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Research security articles, guides, and compliance notes for universities and research institutions.",
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <ResourceReader />
    </main>
  )
}
