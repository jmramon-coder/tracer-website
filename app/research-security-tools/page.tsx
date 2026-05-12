import { redirect } from "next/navigation"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Research Security Tools",
  path: "/resources",
  noIndex: true,
})

export default function ResearchSecurityToolsPage() {
  redirect("/resources#research-security-tools")
}
