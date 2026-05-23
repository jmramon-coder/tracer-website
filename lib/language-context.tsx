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

export function LanguageProvider({
  children,
  initialLanguage = "en",
}: {
  children: ReactNode
  initialLanguage?: Language
}) {
  const [language, setLanguage] = useState<Language>(initialLanguage)
  const [mounted, setMounted] = useState(false)

  // Persist language preference
  useEffect(() => {
    setMounted(true)
    const pathLanguage: Language | null =
      window.location.pathname === "/fr" || window.location.pathname.startsWith("/fr/")
        ? "fr"
        : null
    const saved = localStorage.getItem("trace-lang") as Language
    const nextLanguage =
      pathLanguage ?? (saved && (saved === "en" || saved === "fr") ? saved : initialLanguage)

    if (nextLanguage === "en" || nextLanguage === "fr") {
      setLanguage(nextLanguage)
      document.documentElement.lang = nextLanguage
    } else {
      document.documentElement.lang = "en"
    }
  }, [initialLanguage])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("trace-lang", lang)
    document.documentElement.lang = lang
  }

  // Provide default values until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider
        value={{
          language: initialLanguage,
          setLanguage: handleSetLanguage,
          t: translations[initialLanguage],
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
