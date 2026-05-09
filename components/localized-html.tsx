"use client"

import { useLanguage } from "@/lib/language-context"

type LocalizedHtmlProps = {
  en: string
  fr: string
  className?: string
}

export function LocalizedHtml({ en, fr, className }: LocalizedHtmlProps) {
  const { language } = useLanguage()

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: language === "fr" ? fr : en }}
    />
  )
}
