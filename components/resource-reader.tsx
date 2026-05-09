"use client"

import { forwardRef, useEffect, useMemo, useRef, useState } from "react"
import type { MouseEvent } from "react"
import { trackEvent } from "@/lib/analytics"
import { resourceLibrary, type ResourceArticle, type ResourceSection } from "@/lib/resource-library"
import { resourceLibraryFr } from "@/lib/resource-library.fr"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

function getSectionId(resource: ResourceArticle, sectionIndex: number) {
  return `${resource.id}-section-${sectionIndex + 1}`
}

function getHashTarget(hash: string, resources: ResourceArticle[]) {
  const value = hash.replace("#", "")
  const exactResource = resources.find((resource) => resource.id === value)

  if (exactResource) {
    return { resourceId: exactResource.id, anchorId: exactResource.id }
  }

  for (const resource of resources) {
    const librariesToCheck = [resources, resourceLibrary, resourceLibraryFr]
    let sectionIndex = -1

    for (const library of librariesToCheck) {
      const localizedResource = library.find((item) => item.id === resource.id)

      if (!localizedResource) {
        continue
      }

      sectionIndex = localizedResource.sections.findIndex((item, index) => {
        const stableId = getSectionId(resource, index)
        const legacyTranslatedId = `${resource.id}-${slugify(item.heading)}`

        return stableId === value || legacyTranslatedId === value
      })

      if (sectionIndex >= 0) {
        break
      }
    }

    if (sectionIndex >= 0) {
      return { resourceId: resource.id, anchorId: getSectionId(resource, sectionIndex) }
    }
  }

  return null
}

const tracerResourceLinks = [
  {
    en: "Getting started with Tracer",
    fr: "Démarrer avec Tracer",
  },
  {
    en: "Running a screening workflow",
    fr: "Lancer un flux de vérification",
  },
  {
    en: "Reading reports and audit trails",
    fr: "Lire les rapports et pistes d'audit",
  },
] as const

const categoryLabels: Record<string, { en: string; fr: string }> = {
  Foundations: { en: "Foundations", fr: "Fondations" },
  Operations: { en: "Operations", fr: "Opérations" },
  Compliance: { en: "Compliance", fr: "Conformité" },
}

export function ResourceReader() {
  const { language } = useLanguage()
  const resources = language === "fr" ? resourceLibraryFr : resourceLibrary
  const [selectedId, setSelectedId] = useState(resourceLibrary[0].id)
  const [activeAnchorId, setActiveAnchorId] = useState(resourceLibrary[0].id)
  const [readingProgress, setReadingProgress] = useState(0)
  const [isArticleScrolled, setIsArticleScrolled] = useState(false)
  const articleRef = useRef<HTMLElement>(null)
  const scrollPaneRef = useRef<HTMLDivElement>(null)
  const pendingAnchorRef = useRef<string | null>(null)
  const selectedResource = useMemo(
    () =>
      resources.find((resource) => resource.id === selectedId) ??
      resources[0],
    [resources, selectedId]
  )
  const activeAnchorIds = useMemo(
    () => [
      selectedResource.id,
      ...selectedResource.sections.map((_, index) =>
        getSectionId(selectedResource, index)
      ),
    ],
    [selectedResource]
  )

  useEffect(() => {
    const applyHashSelection = () => {
      const target = getHashTarget(window.location.hash, resources)

      if (target) {
        setSelectedId(target.resourceId)
        setActiveAnchorId(target.anchorId)
        pendingAnchorRef.current = target.anchorId
      }
    }

    applyHashSelection()
    window.addEventListener("hashchange", applyHashSelection)
    return () => window.removeEventListener("hashchange", applyHashSelection)
  }, [resources])

  useEffect(() => {
    const pendingAnchor = pendingAnchorRef.current

    if (!pendingAnchor) {
      return
    }

    window.requestAnimationFrame(() => {
      pendingAnchorRef.current = null
      scrollToAnchor(pendingAnchor, "auto")
    })
  }, [selectedResource])

  useEffect(() => {
    let animationFrame = 0

    const updateScrollState = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame)
      }

      animationFrame = window.requestAnimationFrame(() => {
        const scrollPane = scrollPaneRef.current

        if (!scrollPane) {
          setReadingProgress(0)
          setIsArticleScrolled(false)
          return
        }

        const readableDistance = scrollPane.scrollHeight - scrollPane.clientHeight
        setIsArticleScrolled(scrollPane.scrollTop > 2)

        if (readableDistance <= 0) {
          setReadingProgress(0)
        } else {
          setReadingProgress(Math.min(Math.max(scrollPane.scrollTop / readableDistance, 0), 1))
        }

        const scrollPaneTop = scrollPane.getBoundingClientRect().top
        const scrollTarget = 28
        const anchorPositions = activeAnchorIds
          .map((id) => {
            const element = document.getElementById(id)
            return element
              ? { id, top: element.getBoundingClientRect().top - scrollPaneTop }
              : null
          })
          .filter((item): item is { id: string; top: number } => Boolean(item))

        const current =
          [...anchorPositions].reverse().find((item) => item.top <= scrollTarget) ??
          anchorPositions[0]

        if (current) {
          setActiveAnchorId(current.id)
        }
      })
    }

    updateScrollState()
    const scrollPane = scrollPaneRef.current

    scrollPane?.addEventListener("scroll", updateScrollState, { passive: true })
    window.addEventListener("resize", updateScrollState)

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame)
      }

      scrollPane?.removeEventListener("scroll", updateScrollState)
      window.removeEventListener("resize", updateScrollState)
    }
  }, [activeAnchorIds])

  const updateHash = (anchorId: string) => {
    const url = new URL(window.location.href)
    url.hash = anchorId
    window.history.replaceState(null, "", url)
  }

  function scrollToAnchor(anchorId: string, behavior: ScrollBehavior = "smooth") {
    const scrollPane = scrollPaneRef.current
    const element = document.getElementById(anchorId)

    if (!scrollPane || !element) {
      return
    }

    if (scrollPane.scrollHeight <= scrollPane.clientHeight) {
      element.scrollIntoView({
        behavior,
        block: "start",
      })
      return
    }

    const paneRect = scrollPane.getBoundingClientRect()
    const elementRect = element.getBoundingClientRect()

    scrollPane.scrollTo({
      top: scrollPane.scrollTop + elementRect.top - paneRect.top - 28,
      behavior,
    })
  }

  const handleArticleClick = (resource: ResourceArticle) => (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault()
    trackEvent("resource_select", {
      resource_id: resource.id,
      resource_title: resource.title,
      resource_category: resource.category,
      language,
    })
    setSelectedId(resource.id)
    setActiveAnchorId(resource.id)
    setReadingProgress(0)
    setIsArticleScrolled(false)
    updateHash(resource.id)

    if (resource.id === selectedResource.id) {
      scrollToAnchor(resource.id)
      return
    }

    pendingAnchorRef.current = resource.id
  }

  const handleAnchorClick = (anchorId: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const section = selectedResource.sections.find(
      (_, index) => getSectionId(selectedResource, index) === anchorId
    )

    trackEvent("resource_anchor_select", {
      resource_id: selectedResource.id,
      anchor_id: anchorId,
      section_heading: section?.heading,
      language,
    })
    setActiveAnchorId(anchorId)
    updateHash(anchorId)
    scrollToAnchor(anchorId)
  }

  return (
    <section className="bg-background pb-16 pt-32 text-foreground md:h-svh md:overflow-hidden md:pb-0 md:pt-36">
      <div className="fixed inset-x-0 top-0 z-[70] h-1 bg-transparent" aria-hidden="true">
        <div
          className="h-full origin-left bg-[#2459B8] shadow-[0_0_18px_rgba(36,89,184,0.45)] transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${readingProgress})` }}
        />
      </div>

      <div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-7xl gap-10 px-6 pb-28 sm:px-8 md:h-[calc(100svh-9rem)] md:min-h-0 md:grid-cols-[minmax(220px,30%)_minmax(0,1fr)] md:gap-12 md:pb-10 lg:gap-20 lg:px-12 xl:px-16">
        <aside className="resource-scrollbar-hide pr-2 md:h-full md:overflow-y-auto">
          <nav
            aria-label={language === "fr" ? "Articles et ressources" : "Resource articles"}
            className="space-y-10"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/60">
                {language === "fr" ? "Blogue et articles" : "Blog and articles"}
              </p>
              <div className="mt-3 space-y-1">
                {resources.map((resource) => {
                  const isArticleActive = selectedResource.id === resource.id

                  return (
                    <div key={resource.id} className="py-1">
                      <a
                        href={`#${resource.id}`}
                        onClick={handleArticleClick(resource)}
                        aria-current={isArticleActive ? "page" : undefined}
                        className={cn(
                          "block py-1.5 text-left text-sm leading-5 transition-colors",
                          isArticleActive
                            ? "font-semibold text-foreground"
                            : "font-medium text-muted-foreground/62 hover:text-muted-foreground"
                        )}
                      >
                        {resource.title}
                      </a>

                      <div
                        className={cn(
                          "ml-4 grid overflow-hidden transition-[grid-template-rows,opacity] duration-300",
                          isArticleActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        )}
                      >
                        <div className="min-h-0 space-y-0.5">
                          {resource.sections.map((section, index) => {
                            const sectionId = getSectionId(resource, index)
                            const isSectionActive = activeAnchorId === sectionId

                            return (
                              <a
                                key={section.heading}
                                href={`#${sectionId}`}
                                onClick={handleAnchorClick(sectionId)}
                                aria-current={isSectionActive ? "location" : undefined}
                                className={cn(
                                  "block py-1 text-xs leading-5 transition-colors",
                                  isSectionActive
                                    ? "font-semibold text-foreground"
                                    : "font-medium text-muted-foreground/58 hover:text-muted-foreground"
                                )}
                              >
                                {section.heading}
                              </a>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/60">
                {language === "fr" ? "Ressources" : "Resources"}
              </p>
              <div className="mt-3 space-y-2">
                {tracerResourceLinks.map((item) => (
                  <span
                    key={item.en}
                    className="block py-1 text-sm font-medium leading-5 text-muted-foreground/58"
                  >
                    {language === "fr" ? item.fr : item.en}
                  </span>
                ))}
              </div>
            </div>
          </nav>
        </aside>

        <div className="relative min-h-0 md:h-full">
          <div
            ref={scrollPaneRef}
            className="resource-scrollbar-hide scroll-smooth pr-1 pb-28 md:h-full md:overflow-y-auto md:pb-28 md:pr-4"
          >
            <ResourceArticleView ref={articleRef} resource={selectedResource} />
          </div>
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-x-0 top-0 hidden h-7 bg-[linear-gradient(180deg,var(--background)_0%,color-mix(in_srgb,var(--background)_72%,transparent)_54%,transparent_100%)] transition-opacity duration-200 md:block",
              isArticleScrolled ? "opacity-100" : "opacity-0"
            )}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-20 bg-[linear-gradient(0deg,var(--background)_0%,color-mix(in_srgb,var(--background)_78%,transparent)_42%,transparent_100%)] md:block"
          />
        </div>
      </div>
    </section>
  )
}

const ResourceArticleView = forwardRef<HTMLElement, { resource: ResourceArticle }>(
  function ResourceArticleView({ resource }, ref) {
    const { language } = useLanguage()

    return (
      <article id={resource.id} ref={ref} className="w-full max-w-3xl scroll-mt-32">
        <header className="pb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {resource.eyebrow} · {categoryLabels[resource.category]?.[language] ?? resource.category} · {resource.audience}
          </p>
          <div className="mt-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-6">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              {resource.title}
            </h1>
            <span className="shrink-0 pb-1 text-sm font-medium text-muted-foreground/55 md:pb-2">
              {language === "fr"
                ? `${resource.readTime} de lecture`
                : `${resource.readTime} read`}
            </span>
          </div>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {resource.summary}
          </p>

          <ul className="mt-7 grid gap-2 text-sm leading-6 text-foreground/75">
            {resource.takeaways.map((takeaway) => (
              <li key={takeaway} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </header>

        <div className="space-y-14">
          {resource.sections.map((section, index) => (
            <ResourceSectionView
              key={section.heading}
              section={section}
              id={getSectionId(resource, index)}
            />
          ))}
        </div>
      </article>
    )
  }
)

function ResourceSectionView({
  section,
  id,
}: {
  section: ResourceSection
  id: string
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        {section.heading}
      </h2>

      {section.body && (
        <div className="mt-5 space-y-4">
          {section.body.map((paragraph) => (
            <p key={paragraph} className="text-[17px] leading-8 text-foreground/75">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {section.subsections && (
        <div className="mt-7 space-y-7">
          {section.subsections.map((subsection) => (
            <section key={subsection.heading}>
              <h3 className="text-lg font-semibold tracking-tight">
                {subsection.heading}
              </h3>
              <div className="mt-3 space-y-3">
                {subsection.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-7 text-foreground/75"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {section.list && (
        <ul className="mt-6 space-y-3 text-base leading-7 text-foreground/75">
          {section.list.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/35" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {section.table && (
        <div className="mt-7 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr>
                {section.table.headers.map((header) => (
                  <th
                    key={header}
                    className="pb-3 pr-4 text-left font-semibold text-foreground"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {section.table.rows.map((row) => (
                <tr key={row.join("-")}>
                  {row.map((cell, index) => (
                    <td
                      key={`${row[0]}-${cell}-${index}`}
                      className={cn(
                        "py-3 pr-4 align-top",
                        index === 0 && "font-medium text-foreground"
                      )}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.note && (
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          {section.note}
        </p>
      )}
    </section>
  )
}
