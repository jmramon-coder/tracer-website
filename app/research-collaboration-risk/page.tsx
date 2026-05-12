import { redirect } from "next/navigation"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Research Collaboration Risk",
  path: "/resources",
  noIndex: true,
})

export default function ResearchCollaborationRiskPage() {
  redirect("/resources#collaboration-risk")
}
