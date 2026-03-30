"use client"

import { useLanguage } from "@/lib/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center border border-border/50 text-[11px] tracking-wider uppercase">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 transition-all duration-300 ${
          language === "en"
            ? "bg-foreground text-background"
            : "bg-transparent text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <div className="w-px h-4 bg-border/50" />
      <button
        onClick={() => setLanguage("fr")}
        className={`px-3 py-1.5 transition-all duration-300 ${
          language === "fr"
            ? "bg-foreground text-background"
            : "bg-transparent text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Passer au français"
      >
        FR
      </button>
    </div>
  )
}
