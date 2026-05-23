"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { usePathname } from "next/navigation"
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
  const pathname = usePathname()

  // Keep rendered language aligned with the localized route.
  useEffect(() => {
    setMounted(true)
    const pathLanguage: Language =
      pathname === "/fr" || pathname.startsWith("/fr/")
        ? "fr"
        : "en"

    if (pathLanguage === "en" || pathLanguage === "fr") {
      setLanguage(pathLanguage)
      document.documentElement.lang = pathLanguage
    } else {
      document.documentElement.lang = "en"
    }
  }, [pathname])

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
