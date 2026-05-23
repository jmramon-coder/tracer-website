import type { BlogPost } from "@/lib/blog"
import { absoluteUrl } from "@/lib/metadata"
import type { Language } from "@/lib/translations"
import { PillarPageLayout } from "@/components/pillar/pillar-page-layout"

type BlogPostArticleProps = {
  post: BlogPost
  language: Language
  path: string
}

function formatPostDate(date: string, language: Language) {
  return new Intl.DateTimeFormat(language === "fr" ? "fr-CA" : "en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date))
}

export function BlogPostArticle({ post, language, path }: BlogPostArticleProps) {
  const title = language === "fr" ? post.titleFr : post.title
  const description = language === "fr" ? post.descriptionFr : post.description
  const tags = language === "fr" ? post.tagsFr : post.tags
  const content = language === "fr" ? post.contentFr : post.content
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: post.date,
    mainEntityOfPage: absoluteUrl(path),
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Tracer",
      url: absoluteUrl("/"),
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
          <div className="mb-4 flex items-center gap-3">
            <time dateTime={post.date} className="text-xs text-muted-foreground">
              {formatPostDate(post.date, language)}
            </time>
            <span className="text-xs text-muted-foreground/60">{post.author}</span>
          </div>
          <h1 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {tags.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-muted px-2 py-1 text-[11px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </header>

        <div
          className="prose prose-neutral max-w-none dark:prose-invert
            prose-headings:font-serif prose-headings:font-normal
            prose-h2:mb-4 prose-h2:mt-10 prose-h2:text-2xl
            prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-lg
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-foreground prose-a:underline prose-a:underline-offset-4
            prose-li:text-muted-foreground
            prose-strong:font-medium prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </PillarPageLayout>
  )
}
