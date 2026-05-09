"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/lib/language-context"
import { mainNav } from "@/lib/site-data"
import { WaitlistButton } from "@/components/waitlist-button"
import { cn } from "@/lib/utils"

const navTranslationKeys: Record<string, keyof typeof import("@/lib/translations").translations.en.header.nav> = {
  "/platform": "platform",
  "/labs": "labs",
  "/solutions": "solutions",
  "/pricing": "pricing",
  "/resources": "resources",
  "/company": "company",
}

function NavItemMark({
  href,
  isOverMedia,
  isSpinning = false,
}: {
  href: string
  isOverMedia: boolean
  isSpinning?: boolean
}) {
  if (href === "/platform") {
    return (
      <BrandLogo
        variant={isOverMedia ? "white" : "auto"}
        showText={false}
        markClassName="h-4 w-4"
      />
    )
  }

  if (href === "/labs") {
    return (
      <Image
        src="/brand/tracer-labs-v2.png"
        alt=""
        width={386}
        height={383}
        className={cn(
          "h-4 w-4 origin-center object-contain motion-safe:group-hover/labs:animate-[labs-disc-spin_1.2s_linear_infinite]",
          isSpinning && "animate-[labs-disc-spin_0.75s_linear_infinite]"
        )}
      />
    )
  }

  return null
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLabsMarkSpinning, setIsLabsMarkSpinning] = useState(false)
  const labsSpinTimeoutRef = useRef<number | null>(null)
  const pathname = usePathname()
  const { t, language } = useLanguage()
  const isMediaHero = pathname === "/" || pathname === "/platform" || pathname === "/labs" || pathname === "/solutions"
  const isOverMedia = isMediaHero && !scrolled
  const labels = {
    primaryNavigation: language === "fr" ? "Navigation principale" : "Primary navigation",
    mobileNavigation: language === "fr" ? "Navigation mobile" : "Mobile navigation",
    openMenu: language === "fr" ? "Ouvrir le menu" : "Open menu",
    closeMenu: language === "fr" ? "Fermer le menu" : "Close menu",
  }
  const isActiveNavItem = (href: string) =>
    pathname === href ||
    (href === "/platform" && pathname === "/") ||
    (href === "/solutions" && pathname === "/pricing") ||
    (href === "/resources" &&
      [
        "/blog",
        "/research-security-screening",
        "/academic-partnership-due-diligence",
        "/sanctions-screening-universities",
        "/research-collaboration-risk",
        "/research-security-tools",
      ].some((path) => pathname === path || pathname.startsWith(`${path}/`)))

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (labsSpinTimeoutRef.current) {
        window.clearTimeout(labsSpinTimeoutRef.current)
      }
    }
  }, [])

  const triggerLabsSpin = () => {
    if (labsSpinTimeoutRef.current) {
      window.clearTimeout(labsSpinTimeoutRef.current)
    }

    setIsLabsMarkSpinning(true)
    labsSpinTimeoutRef.current = window.setTimeout(() => {
      setIsLabsMarkSpinning(false)
      labsSpinTimeoutRef.current = null
    }, 1100)
  }

  return (
    <>
      <header 
        className="pointer-events-none fixed left-0 right-0 top-3 z-50 px-3 transition-all duration-500 md:top-4 md:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div
            className={cn(
              "pointer-events-auto flex h-14 items-center justify-between rounded-[28px] border px-3 shadow-[var(--floating-shadow)] backdrop-blur-2xl transition-all duration-500 md:h-16 md:px-4",
              isOverMedia
                ? "border-white/22 bg-black/28 supports-[backdrop-filter]:bg-black/24"
                : "border-white/30 bg-background/70 supports-[backdrop-filter]:bg-background/58 dark:border-white/12 dark:bg-background/42"
            )}
          >
            <Link
              href="/platform"
              className={cn("group", isOverMedia ? "text-white" : "text-foreground")}
            >
              <BrandLogo
                variant={isOverMedia ? "white" : "auto"}
                markClassName="h-7 w-8 md:h-8 md:w-9"
                textClassName="flex"
              />
            </Link>

            <nav
              aria-label={labels.primaryNavigation}
              className="hidden items-center gap-2 lg:flex"
            >
              {mainNav.map((item) => {
                const isActive = isActiveNavItem(item.href)

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={item.href === "/labs" ? triggerLabsSpin : undefined}
                    className={cn(
                      "inline-flex h-10 items-center gap-1.5 rounded-full px-3 text-sm font-medium transition-all duration-200",
                      item.href === "/labs" && "group/labs",
                      isActive
                        ? isOverMedia
                          ? "border border-[#AFC7FF]/35 bg-[#2459B8]/32 text-white shadow-[0_10px_28px_rgba(36,89,184,0.26)]"
                          : "border border-[#2459B8]/16 bg-[#EAF1FF] text-[#2459B8] shadow-[0_10px_24px_rgba(36,89,184,0.12)] dark:bg-[#2459B8]/20 dark:text-[#9DBBFF]"
                        : isOverMedia
                          ? "text-white/74 hover:bg-white/8 hover:text-white"
                          : "text-foreground/72 hover:bg-[#2459B8]/[0.06] hover:text-foreground"
                    )}
                  >
                    <NavItemMark
                      href={item.href}
                      isOverMedia={isOverMedia}
                      isSpinning={item.href === "/labs" && isLabsMarkSpinning}
                    />
                    {t.header.nav[navTranslationKeys[item.href]] ?? item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="flex items-center gap-1.5 md:gap-3">
              <div className="hidden items-center gap-1.5 sm:flex md:gap-3">
                <ThemeToggle tone={isOverMedia ? "media" : "default"} />
                <LanguageToggle tone={isOverMedia ? "media" : "default"} />
              </div>
              <LanguageToggle
                tone={isOverMedia ? "media" : "default"}
                className="h-9 px-3 sm:hidden"
              />
              <WaitlistButton
                className="hidden h-10 border border-[#6F98F2]/40 bg-[#2459B8] px-4 text-xs tracking-wide text-white shadow-xl shadow-[#2459B8]/30 ring-1 ring-white/15 hover:-translate-y-0.5 hover:bg-[#1E4C9D] hover:shadow-[#2459B8]/45 sm:inline-flex md:text-sm"
              >
                {t.header.joinWaitlist}
              </WaitlistButton>
              <button
                type="button"
                onClick={() => setIsMenuOpen((value) => !value)}
                aria-label={isMenuOpen ? labels.closeMenu : labels.openMenu}
                aria-expanded={isMenuOpen}
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
                  isOverMedia
                    ? "text-white hover:text-white/72"
                    : "text-foreground hover:text-muted-foreground"
                )}
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className={cn(
              "pointer-events-auto mx-auto mt-2 max-w-7xl rounded-[28px] border shadow-[var(--floating-shadow)] backdrop-blur-2xl lg:hidden",
              isOverMedia
                ? "border-white/18 bg-black/62 text-white"
                : "border-white/25 bg-background/74 dark:border-white/12 dark:bg-background/58"
            )}
          >
            <div className="px-4 py-4">
              <nav aria-label={labels.mobileNavigation} className="grid gap-1">
                {mainNav.map((item) => {
                  const isActive = isActiveNavItem(item.href)

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => {
                        if (item.href === "/labs") {
                          triggerLabsSpin()
                        }

                        setIsMenuOpen(false)
                      }}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-2xl px-3 py-3 text-sm font-medium transition-all duration-200",
                        item.href === "/labs" && "group/labs",
                        isActive
                          ? isOverMedia
                            ? "border border-[#AFC7FF]/30 bg-[#2459B8]/30 text-white"
                            : "border border-[#2459B8]/16 bg-[#EAF1FF] text-[#2459B8] dark:bg-[#2459B8]/20 dark:text-[#9DBBFF]"
                          : isOverMedia
                            ? "text-white/72 hover:bg-white/10 hover:text-white"
                            : "text-foreground/72 hover:bg-card hover:text-foreground"
                      )}
                    >
                      <NavItemMark
                        href={item.href}
                        isOverMedia={isOverMedia}
                        isSpinning={item.href === "/labs" && isLabsMarkSpinning}
                      />
                      {t.header.nav[navTranslationKeys[item.href]] ?? item.label}
                    </Link>
                  )
                })}
              </nav>
              <div
                className={cn(
                  "mt-4 flex items-center justify-between gap-3 border-t pt-4",
                  isOverMedia ? "border-white/12" : "border-border"
                )}
              >
                <div className="flex items-center gap-2">
                  <ThemeToggle tone={isOverMedia ? "media" : "default"} />
                  <LanguageToggle tone={isOverMedia ? "media" : "default"} />
                </div>
                <WaitlistButton
                  className="h-10 border border-[#6F98F2]/40 bg-[#2459B8] px-4 text-xs text-white shadow-xl shadow-[#2459B8]/30 ring-1 ring-white/15 hover:-translate-y-0.5 hover:bg-[#1E4C9D] hover:shadow-[#2459B8]/45"
                >
                  {t.header.joinWaitlist}
                </WaitlistButton>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
