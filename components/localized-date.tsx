"use client"

import { useLanguage } from "@/lib/language-context"

type LocalizedDateProps = {
  date: string
}

export function LocalizedDate({ date }: LocalizedDateProps) {
  const { language } = useLanguage()
  const locale = language === "fr" ? "fr-CA" : "en-CA"

  return (
    <>
      {new Date(date).toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </>
  )
}
