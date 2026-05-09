"use client"

import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

type LanguageToggleProps = {
  className?: string
  tone?: "default" | "media"
}

export function LanguageToggle({ className, tone = "default" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage()
  const isMedia = tone === "media"

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "fr" : "en")}
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
