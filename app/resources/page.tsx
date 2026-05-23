import Link from "next/link"
import { headers } from "next/headers"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { LocalizedText } from "@/components/localized-text"
import { ResourceReader } from "@/components/resource-reader"
import { alternatesFor } from "@/lib/localized-paths"
import { createMetadata } from "@/lib/metadata"
import { getRequiredResourceArticle, resourceRoutes } from "@/lib/resource-routes"
import type { Language } from "@/lib/translations"

export const metadata = createMetadata({
  title: "Resources",
  description:
    "Research security articles, guides, and compliance notes for universities and research institutions.",
  path: "/resources",
  languages: alternatesFor("/resources", "/fr/ressources"),
})

export default async function ResourcesPage() {
  const requestHeaders = await headers()
  const language: Language = requestHeaders.get("x-tracer-locale") === "fr" ? "fr" : "en"
  const resources = resourceRoutes.map((route) => ({
    route,
    en: getRequiredResourceArticle(route.id, "en"),
    fr: getRequiredResourceArticle(route.id, "fr"),
  }))

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="border-b border-border bg-background pt-28 md:pt-36">
        <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <LocalizedText en="Resources" fr="Ressources" />
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[0.95fr_0.75fr] lg:items-end">
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              <LocalizedText
                en="Research security guides built for review."
                fr="Guides de sécurité de la recherche conçus pour la revue."
              />
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">
              <LocalizedText
                en="Start with an indexable guide, then use the reader below when you want to scan the full library in one focused workspace."
                fr="Commencez par un guide indexable, puis utilisez le lecteur ci-dessous pour parcourir toute la bibliothèque dans un espace de lecture concentré."
              />
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {resources.map(({ route, en, fr }) => (
              <article
                key={route.id}
                className="rounded-[22px] border border-border bg-card p-5 shadow-sm"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  <LocalizedText en={en.eyebrow} fr={fr.eyebrow} />
                </p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight">
                  <LocalizedText en={en.title} fr={fr.title} />
                </h2>
                <p className="mt-3 line-clamp-4 text-sm leading-6 text-muted-foreground">
                  <LocalizedText en={en.summary} fr={fr.summary} />
                </p>
                <Link
                  href={language === "fr" ? route.frPath : route.enPath}
                  className="mt-5 inline-flex min-h-10 items-center rounded-full border border-border px-4 text-sm font-semibold transition-colors hover:border-[#2459B8]/35 hover:bg-muted"
                >
                  <LocalizedText en="Read guide" fr="Lire le guide" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ResourceReader />
      <Footer />
    </main>
  )
}
