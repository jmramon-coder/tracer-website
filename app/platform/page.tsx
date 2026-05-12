import { redirect } from "next/navigation"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Platform",
  path: "/",
  noIndex: true,
})

export default function PlatformRedirectPage() {
  redirect("/")
}
