"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { trackEvent } from "@/lib/analytics"
import { useLanguage } from "@/lib/language-context"
import { pathForLanguage } from "@/lib/localized-paths"
import { cn } from "@/lib/utils"

type LanguageToggleProps = {
  className?: string
  tone?: "default" | "media"
}

export function LanguageToggle({ className, tone = "default" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage()
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const isMedia = tone === "media"
  const nextLanguage = language === "en" ? "fr" : "en"

  const handleClick = () => {
    trackEvent("language_change", {
      from_language: language,
      to_language: nextLanguage,
    })
    setLanguage(nextLanguage)
    const nextPath = pathForLanguage(pathname, nextLanguage)
    const queryString = searchParams.toString()

    if (nextPath !== pathname) {
      router.push(queryString ? `${nextPath}?${queryString}` : nextPath)
    }
  }

  return (
    <button
      onClick={handleClick}
      aria-label={
        language === "fr"
          ? "Passer le site en anglais"
          : "Switch the site to French"
      }
      className={cn(
        "flex h-10 items-center gap-1 rounded-full border px-3.5 text-xs font-medium leading-none tracking-wide transition-all duration-200",
        isMedia
          ? "border-white/18 bg-white/12 text-white hover:bg-white/20"
          : "border-border/70 bg-card/70 text-foreground hover:bg-muted",
        className
      )}
    >
      <span className={`transition-opacity ${language === "en" ? "opacity-100" : "opacity-40"}`}>EN</span>
      <span className={isMedia ? "text-white/38" : "text-muted-foreground/40"}>/</span>
      <span className={`transition-opacity ${language === "fr" ? "opacity-100" : "opacity-40"}`}>FR</span>
    </button>
  )
}
