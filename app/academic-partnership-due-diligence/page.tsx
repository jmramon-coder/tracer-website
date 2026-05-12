import { redirect } from "next/navigation"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Academic Partnership Due Diligence",
  path: "/resources",
  noIndex: true,
})

export default function AcademicPartnershipDueDiligencePage() {
  redirect("/resources#academic-due-diligence")
}
