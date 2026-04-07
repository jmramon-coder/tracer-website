import Link from "next/link"
import { TracerLogo } from "@/components/tracer-logo"

const pillarPages = [
  { href: "/research-security-screening", label: "Research Security Screening" },
  { href: "/academic-partnership-due-diligence", label: "Academic Due Diligence" },
  { href: "/sanctions-screening-universities", label: "Sanctions Screening" },
  { href: "/research-collaboration-risk", label: "Collaboration Risk" },
  { href: "/research-security-tools", label: "Security Tools" },
]

export function PillarPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border/50">
        <div className="mx-auto max-w-4xl px-6 py-5">
          <Link href="/" className="inline-flex items-center gap-2">
            <TracerLogo size={22} animated={false} />
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-foreground">
              Tracer
            </span>
          </Link>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-4xl px-6 py-12 md:py-20">
        {children}
      </main>

      <footer className="border-t border-border bg-muted/20">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex items-center gap-2 mb-8">
            <TracerLogo size={20} animated={false} className="opacity-60" />
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-foreground/70">
              Tracer
            </span>
          </div>
          <nav aria-label="Related pages">
            <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground/60 mb-4">
              Research Security Guides
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {pillarPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <p className="text-[11px] text-muted-foreground/50 tracking-wide">
              &copy; {new Date().getFullYear()} Tracer. All rights reserved.
            </p>
            <Link
              href="/privacy"
              className="text-[11px] text-muted-foreground/50 hover:text-muted-foreground tracking-wide transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
