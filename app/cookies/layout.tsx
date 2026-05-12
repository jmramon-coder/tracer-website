import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Cookie Policy / Politique des témoins",
  description:
    "How Tracer Research Security inc. uses essential site storage, analytics cookies, privacy preferences, and similar technologies on tracersecurity.ca.",
  path: "/cookies",
})

export default function CookiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
