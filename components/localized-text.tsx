"use client"

import type { ReactNode } from "react"
import { useLanguage } from "@/lib/language-context"

type LocalizedTextProps = {
  en: ReactNode
  fr: ReactNode
}

export function LocalizedText({ en, fr }: LocalizedTextProps) {
  const { language } = useLanguage()

  return <>{language === "fr" ? fr : en}</>
}
