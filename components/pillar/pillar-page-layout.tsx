import Link from "next/link"
import { headers } from "next/headers"
import { BrandLogo } from "@/components/brand-logo"
import { LocalizedText } from "@/components/localized-text"
import { resourceRoutes } from "@/lib/resource-routes"
import type { Language } from "@/lib/translations"

const pillarPages = [
  {
    id: "research-security-screening",
    href: "/research-security-screening",
    label: "Research Security Screening",
    labelFr: "Vérification de sécurité de la recherche",
  },
  {
    id: "academic-due-diligence",
    href: "/academic-partnership-due-diligence",
    label: "Academic Due Diligence",
    labelFr: "Diligence raisonnable académique",
  },
  {
    id: "sanctions-screening",
    href: "/sanctions-screening-universities",
    label: "Sanctions Screening",
    labelFr: "Vérification des sanctions",
  },
  {
    id: "collaboration-risk",
    href: "/research-collaboration-risk",
    label: "Collaboration Risk",
    labelFr: "Risque de collaboration",
  },
  {
    id: "research-security-tools",
    href: "/research-security-tools",
    label: "Security Tools",
    labelFr: "Outils de sécurité",
  },
]

export async function PillarPageLayout({ children }: { children: React.ReactNode }) {
  const requestHeaders = await headers()
  const language: Language = requestHeaders.get("x-tracer-locale") === "fr" ? "fr" : "en"
  const pathForPage = (id: string, fallback: string) => {
    const route = resourceRoutes.find((item) => item.id === id)
    return language === "fr" ? route?.frPath ?? fallback : route?.enPath ?? fallback
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-5">
          <Link href={language === "fr" ? "/fr" : "/"} className="inline-flex text-foreground">
            <BrandLogo markClassName="h-7 w-8" />
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 rounded-t-[28px] bg-card px-6 py-12 shadow-[var(--surface-shadow)] md:py-20">
        {children}
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="mb-8 flex text-foreground">
            <BrandLogo markClassName="h-7 w-8" />
          </div>
          <nav aria-label="Related pages / Pages liées">
            <p className="mb-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              <LocalizedText
                en="Research Security Guides"
                fr="Guides de sécurité de la recherche"
              />
            </p>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {pillarPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={pathForPage(page.id, page.href)}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    <LocalizedText en={page.label} fr={page.labelFr} />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={language === "fr" ? "/fr/blog" : "/blog"}
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  <LocalizedText en="Blog" fr="Blogue" />
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
            <p className="text-[11px] tracking-wide text-subtle-foreground">
              &copy; {new Date().getFullYear()} Tracer.{" "}
              <LocalizedText en="All rights reserved." fr="Tous droits réservés." />
            </p>
            <Link
              href="/privacy"
              className="text-[11px] tracking-wide text-subtle-foreground transition-colors duration-200 hover:text-foreground"
            >
              <LocalizedText en="Privacy Policy" fr="Politique de confidentialité" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
