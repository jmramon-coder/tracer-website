"use client"

import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "fr" : "en")}
      className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium tracking-wide rounded-md
        border border-border/50 bg-background/50
        hover:bg-muted/50 hover:border-border
        transition-all duration-200 cursor-pointer"
    >
      <span className={`transition-opacity ${language === "en" ? "opacity-100" : "opacity-40"}`}>EN</span>
      <span className="text-muted-foreground/40">/</span>
      <span className={`transition-opacity ${language === "fr" ? "opacity-100" : "opacity-40"}`}>FR</span>
    </button>
  )
}
