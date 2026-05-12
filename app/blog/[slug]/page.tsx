import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocalizedDate } from "@/components/localized-date"
import { LocalizedHtml } from "@/components/localized-html"
import { LocalizedText } from "@/components/localized-text"
import { PillarPageLayout } from "@/components/pillar/pillar-page-layout"
import { getPost, getAllPostSlugs } from "@/lib/blog"
import { createArticleMetadata } from "@/lib/metadata"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}

  return createArticleMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    image: post.image,
    publishedTime: post.date,
    authors: [post.author],
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Tracer",
      url: "https://tracersecurity.ca",
    },
  }

  return (
    <PillarPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article>
        <header className="mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-4">
            <time
              dateTime={post.date}
              className="text-xs text-muted-foreground"
            >
              <LocalizedDate date={post.date} />
            </time>
            <span className="text-xs text-muted-foreground/60">
              {post.author}
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.15]">
            <LocalizedText en={post.title} fr={post.titleFr} />
          </h1>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag, index) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-1 rounded-md bg-muted text-muted-foreground"
                >
                  <LocalizedText en={tag} fr={post.tagsFr[index] ?? tag} />
                </span>
              ))}
            </div>
          )}
        </header>

        <LocalizedHtml
          en={post.content}
          fr={post.contentFr}
          className="prose prose-neutral dark:prose-invert max-w-none
            prose-headings:font-serif prose-headings:font-normal
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-foreground prose-a:underline prose-a:underline-offset-4
            prose-li:text-muted-foreground
            prose-strong:text-foreground prose-strong:font-medium"
        />
      </article>
    </PillarPageLayout>
  )
}
