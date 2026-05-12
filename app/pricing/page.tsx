import { redirect } from "next/navigation"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Pricing",
  path: "/solutions",
  noIndex: true,
})

export default function PricingPage() {
  redirect("/solutions#pricing")
}
