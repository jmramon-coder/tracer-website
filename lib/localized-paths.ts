import type { Language } from "@/lib/translations"

export type LocalizedPathPair = {
  en: string
  fr: string
}

export const localizedPathPairs = [
  { en: "/", fr: "/fr" },
  { en: "/solutions", fr: "/fr/tarifs" },
  { en: "/labs", fr: "/fr/labs" },
  { en: "/resources", fr: "/fr/ressources" },
  { en: "/company", fr: "/fr/entreprise" },
  { en: "/blog", fr: "/fr/blog" },
  {
    en: "/blog/research-security-screening-guide",
    fr: "/fr/blog/guide-verification-securite-recherche",
  },
  {
    en: "/research-security-screening",
    fr: "/fr/verification-securite-recherche",
  },
  {
    en: "/academic-partnership-due-diligence",
    fr: "/fr/diligence-raisonnable-partenariats-academiques",
  },
  {
    en: "/sanctions-screening-universities",
    fr: "/fr/verification-sanctions-universites",
  },
  {
    en: "/research-collaboration-risk",
    fr: "/fr/risque-collaborations-recherche",
  },
  {
    en: "/research-security-tools",
    fr: "/fr/outils-securite-recherche",
  },
] as const satisfies readonly LocalizedPathPair[]

export const resourcePathPairs = localizedPathPairs.slice(7)

export function isFrenchPath(pathname: string) {
  return pathname === "/fr" || pathname.startsWith("/fr/")
}

function splitHash(path: string) {
  const [pathname, hash = ""] = path.split("#")
  return {
    pathname: pathname || "/",
    hash: hash ? `#${hash}` : "",
  }
}

export function localizePath(path: string, language: Language) {
  const { pathname, hash } = splitHash(path)
  const match = localizedPathPairs.find(
    (pair) => pair.en === pathname || pair.fr === pathname
  )

  if (!match) {
    return `${pathname}${hash}`
  }

  return `${match[language]}${hash}`
}

export function pathForLanguage(pathname: string, language: Language) {
  return localizePath(pathname, language)
}

export function alternatesFor(en: string, fr: string) {
  return {
    "en-CA": en,
    "fr-CA": fr,
    "x-default": en,
  }
}
