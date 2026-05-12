import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How Tracer handles website, early access, waitlist, cookie, and analytics privacy for visitors.",
  path: "/privacy",
})

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
