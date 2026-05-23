import Link from "next/link"
import { headers } from "next/headers"
import { ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { LocalizedDate } from "@/components/localized-date"
import { LocalizedText } from "@/components/localized-text"
import { getAllPosts } from "@/lib/blog"
import { alternatesFor, localizePath } from "@/lib/localized-paths"
import { createMetadata } from "@/lib/metadata"
import { blogThemes } from "@/lib/site-data"
import type { Language } from "@/lib/translations"

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Research security insights, compliance guides, and screening best practices for universities and research institutions.",
  path: "/blog",
  languages: alternatesFor("/blog", "/fr/blog"),
})

export default async function BlogPage() {
  const requestHeaders = await headers()
  const language: Language = requestHeaders.get("x-tracer-locale") === "fr" ? "fr" : "en"
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="border-b border-border bg-background pt-28 md:pt-36">
        <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <LocalizedText en="Blog" fr="Blogue" />
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[0.95fr_0.75fr] lg:items-end">
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              <LocalizedText
                en="Research security insights for universities."
                fr="Repères en sécurité de la recherche pour les universités."
              />
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">
              <LocalizedText
                en="Guides, analysis, and product thinking for teams building a more consistent research security due diligence process."
                fr="Guides, analyses et réflexions produit pour les équipes qui structurent une diligence raisonnable plus cohérente en sécurité de la recherche."
              />
            </p>
          </div>
        </div>
      </section>

      <section className="-mt-6 rounded-t-[28px] border-b border-border bg-card py-16 shadow-[var(--surface-shadow)] md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 md:grid-cols-4">
            {blogThemes.map((theme) => (
              <div
                key={theme.label}
                className="rounded-[20px] border border-border bg-background p-5 text-sm font-semibold leading-6"
              >
                <LocalizedText en={theme.label} fr={theme.labelFr} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          {posts.length === 0 ? (
            <div className="rounded-[24px] border border-border bg-card p-8">
              <h2 className="text-2xl font-semibold tracking-tight">
                <LocalizedText en="Articles are coming." fr="Les articles arrivent." />
              </h2>
              <p className="mt-3 text-muted-foreground">
                <LocalizedText
                  en="The blog is ready for category education, launch notes, and research security playbooks."
                  fr="Le blogue est prêt pour les guides de catégorie, les notes de lancement et les guides opérationnels en sécurité de la recherche."
                />
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group rounded-[24px] border border-border bg-card p-6 shadow-sm transition-colors hover:bg-muted"
                >
                  <Link
                    href={localizePath(`/blog/${post.slug}`, language)}
                    className="block"
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <time
                        dateTime={post.date}
                        className="text-xs text-muted-foreground"
                      >
                        <LocalizedDate date={post.date} />
                      </time>
                      {post.tags.length > 0 && (
                        <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                          <LocalizedText
                            en={post.tags[0]}
                            fr={post.tagsFr[0] ?? post.tags[0]}
                          />
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight group-hover:underline group-hover:underline-offset-4">
                      <LocalizedText en={post.title} fr={post.titleFr} />
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      <LocalizedText en={post.description} fr={post.descriptionFr} />
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                      <LocalizedText en="Read article" fr="Lire l'article" />
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
