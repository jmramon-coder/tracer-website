import type { Metadata } from "next"
import Link from "next/link"
import { PillarPageLayout } from "@/components/pillar/pillar-page-layout"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog - Research Security Insights",
  description:
    "Research security insights, compliance guides, and screening best practices for universities and research institutions.",
  openGraph: {
    title: "Blog - Research Security Insights | Tracer",
    description:
      "Research security insights, compliance guides, and screening best practices for universities and research institutions.",
    url: "https://tracersecurity.ca/blog",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <PillarPageLayout>
      <header className="mb-12 md:mb-16">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-4">
          Blog
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1]">
          Research Security Insights
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Guides, analysis, and updates on research security screening,
          compliance requirements, and partnership due diligence.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No articles published yet. Check back soon.</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border border-border rounded-lg p-6 hover:border-foreground/20 transition-colors duration-200"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex items-center gap-3 mb-3">
                  <time
                    dateTime={post.date}
                    className="text-xs text-muted-foreground"
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {post.tags.length > 0 && (
                    <span className="text-xs text-muted-foreground/60">
                      {post.tags[0]}
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-medium group-hover:underline underline-offset-4 mb-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
              </Link>
            </article>
          ))}
        </div>
      )}
    </PillarPageLayout>
  )
}
