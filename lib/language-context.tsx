"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Language, type Translations } from "./translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  // Persist language preference
  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("trace-lang") as Language
    if (saved && (saved === "en" || saved === "fr")) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("trace-lang", lang)
  }

  // Provide default values until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider
        value={{
          language: "en",
          setLanguage: handleSetLanguage,
          t: translations.en,
        }}
      >
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
