"use client"

import Link from "next/link"
import { BrandLogo } from "@/components/brand-logo"
import { MapleLeaf } from "@/components/maple-leaf"
import { useLanguage } from "@/lib/language-context"
import { mainNav, resourceCards } from "@/lib/site-data"

export function Footer() {
  const { t, language } = useLanguage()
  const navTranslationKeys = {
    "/platform": "platform",
    "/labs": "labs",
    "/solutions": "solutions",
    "/pricing": "pricing",
    "/resources": "resources",
    "/company": "company",
  } as const

  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div className="max-w-sm">
            <Link href="/platform" className="mb-6 flex text-foreground">
              <BrandLogo />
            </Link>
            <p className="text-sm leading-6 text-muted-foreground">
              {t.footer.tagline}
            </p>
            <p className="mt-8 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {t.footer.canadian} <MapleLeaf size={12} />
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                {language === "fr" ? "Site" : "Website"}
              </p>
              <nav className="grid gap-3">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t.header.nav[navTranslationKeys[item.href as keyof typeof navTranslationKeys]] ?? item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                {language === "fr" ? "Guides" : "Guides"}
              </p>
              <nav className="grid gap-3">
                {resourceCards.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {language === "fr" ? item.titleFr : item.title}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                {language === "fr" ? "Légal" : "Legal"}
              </p>
              <nav className="grid gap-3">
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.footer.privacy}
                </Link>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {language === "fr" ? "Blogue" : "Blog"}
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] tracking-wide text-subtle-foreground">
            © {new Date().getFullYear()} Tracer. {t.footer.rights}
          </p>
          <p className="text-[11px] tracking-wide text-subtle-foreground">
            {t.footer.designed}
          </p>
        </div>
      </div>
    </footer>
  )
}
