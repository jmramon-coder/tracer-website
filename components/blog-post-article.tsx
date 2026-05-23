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
          className="max-w-none text-base leading-8 text-muted-foreground
            [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4
            [&_h2]:mt-12 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-normal [&_h2]:leading-tight [&_h2]:tracking-tight [&_h2]:text-foreground
            [&_h2:first-child]:mt-0
            [&_h3]:mt-9 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:leading-snug [&_h3]:tracking-tight [&_h3]:text-foreground
            [&_li]:my-2 [&_li]:pl-1
            [&_ol]:my-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5
            [&_p]:mt-5 [&_p]:leading-8
            [&_p:first-child]:mt-0
            [&_strong]:font-medium [&_strong]:text-foreground
            [&_ul]:my-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </PillarPageLayout>
  )
}
