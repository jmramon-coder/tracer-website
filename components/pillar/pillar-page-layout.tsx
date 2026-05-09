import Link from "next/link"
import { BrandLogo } from "@/components/brand-logo"

const pillarPages = [
  { href: "/research-security-screening", label: "Research Security Screening" },
  { href: "/academic-partnership-due-diligence", label: "Academic Due Diligence" },
  { href: "/sanctions-screening-universities", label: "Sanctions Screening" },
  { href: "/research-collaboration-risk", label: "Collaboration Risk" },
  { href: "/research-security-tools", label: "Security Tools" },
]

export function PillarPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-5">
          <Link href="/platform" className="inline-flex text-foreground">
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
          <nav aria-label="Related pages">
            <p className="mb-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              Research Security Guides
            </p>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {pillarPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
            <p className="text-[11px] tracking-wide text-subtle-foreground">
              &copy; {new Date().getFullYear()} Tracer. All rights reserved.
            </p>
            <Link
              href="/privacy"
              className="text-[11px] tracking-wide text-subtle-foreground transition-colors duration-200 hover:text-foreground"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
