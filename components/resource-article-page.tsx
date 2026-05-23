import Link from "next/link"
import type { ResourceArticle, ResourceSection } from "@/lib/resource-library"
import { absoluteUrl } from "@/lib/metadata"
import type { Language } from "@/lib/translations"
import { PillarPageLayout } from "@/components/pillar/pillar-page-layout"

type ResourceArticlePageProps = {
  resource: ResourceArticle
  language: Language
  path: string
}

function getFaqItems(resource: ResourceArticle) {
  return resource.sections
    .find((section) => section.heading.toLowerCase().includes("faq"))
    ?.subsections?.filter((item) => item.body.length > 0) ?? []
}

function renderSection(section: ResourceSection) {
  return (
    <section key={section.heading} className="mt-10">
      <h2 className="font-serif text-2xl font-normal tracking-tight">
        {section.heading}
      </h2>
      {section.body?.map((paragraph) => (
        <p key={paragraph} className="mt-4 leading-8 text-muted-foreground">
          {paragraph}
        </p>
      ))}
      {section.subsections?.map((subsection) => (
        <div key={subsection.heading} className="mt-7">
          <h3 className="text-lg font-semibold tracking-tight">
            {subsection.heading}
          </h3>
          {subsection.body.map((paragraph) => (
            <p key={paragraph} className="mt-3 leading-7 text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
      {section.list ? (
        <ul className="mt-5 list-disc space-y-3 pl-5 text-muted-foreground">
          {section.list.map((item) => (
            <li key={item} className="leading-7">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {section.table ? (
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="bg-muted text-foreground">
              <tr>
                {section.table.headers.map((header) => (
                  <th key={header} className="px-4 py-3 font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row.join("|")} className="border-t border-border">
                  {row.map((cell) => (
                    <td key={cell} className="px-4 py-3 text-muted-foreground">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      {section.note ? (
        <p className="mt-5 rounded-xl border border-border bg-muted/45 p-4 text-sm leading-6 text-muted-foreground">
          {section.note}
        </p>
      ) : null}
    </section>
  )
}

export function ResourceArticlePage({
  resource,
  language,
  path,
}: ResourceArticlePageProps) {
  const faqItems = getFaqItems(resource)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.summary,
    mainEntityOfPage: absoluteUrl(path),
    author: {
      "@type": "Organization",
      name: "Tracer",
    },
    publisher: {
      "@type": "Organization",
      name: "Tracer",
      url: absoluteUrl("/"),
    },
  }
  const faqSchema =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.heading,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.body.join(" "),
            },
          })),
        }
      : null

  return (
    <PillarPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}

      <article>
        <header className="mb-10 md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {resource.eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-3xl font-normal leading-[1.12] tracking-tight md:text-5xl">
            {resource.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            {resource.summary}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full border border-border px-3 py-1">
              {resource.category}
            </span>
            <span>{resource.readTime}</span>
            <span>{resource.audience}</span>
          </div>
          <div className="mt-7 rounded-2xl border border-border bg-muted/40 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              {language === "fr" ? "À retenir" : "Key takeaways"}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
              {resource.takeaways.map((takeaway) => (
                <li key={takeaway}>{takeaway}</li>
              ))}
            </ul>
          </div>
        </header>

        {resource.sections.map(renderSection)}

        <footer className="mt-14 rounded-2xl border border-border bg-muted/35 p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            {language === "fr"
              ? "Explorez la bibliothèque complète de ressources Tracer pour d'autres guides en sécurité de la recherche."
              : "Explore the full Tracer resource library for more research security guides."}
          </p>
          <Link
            href={language === "fr" ? "/fr/ressources" : "/resources"}
            className="mt-4 inline-flex text-sm font-semibold underline underline-offset-4"
          >
            {language === "fr" ? "Voir toutes les ressources" : "View all resources"}
          </Link>
        </footer>
      </article>
    </PillarPageLayout>
  )
}
