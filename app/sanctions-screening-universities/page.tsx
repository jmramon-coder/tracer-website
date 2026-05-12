import { redirect } from "next/navigation"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Sanctions Screening for Universities",
  path: "/resources",
  noIndex: true,
})

export default function SanctionsScreeningUniversitiesPage() {
  redirect("/resources#sanctions-screening")
}
