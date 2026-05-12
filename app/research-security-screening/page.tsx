import { redirect } from "next/navigation"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Research Security Screening",
  path: "/resources",
  noIndex: true,
})

export default function ResearchSecurityScreeningPage() {
  redirect("/resources#research-security-screening")
}
