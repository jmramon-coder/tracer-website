"use client"

import { useCallback, useEffect, useState } from "react"
import { Analytics } from "@vercel/analytics/next"
import type { BeforeSendEvent } from "@vercel/analytics/next"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { GA_MEASUREMENT_ID } from "@/lib/analytics"
import { useLanguage } from "@/lib/language-context"

const CONSENT_STORAGE_KEY = "tracer-analytics-consent"
const CONSENT_EVENT = "tracer:open-privacy-preferences"
const CONSENT_VERSION = 1

type ConsentState = "accepted" | "rejected"

type StoredConsent = {
  analytics: ConsentState
  version: number
  updatedAt: string
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function getStoredConsent(): StoredConsent | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return null

    const parsed = JSON.parse(raw) as Partial<StoredConsent>
    if (parsed.analytics !== "accepted" && parsed.analytics !== "rejected") {
      return null
    }

    return {
      analytics: parsed.analytics,
      version: parsed.version ?? 0,
      updatedAt: parsed.updatedAt ?? "",
    }
  } catch {
    return null
  }
}

function storeConsent(analytics: ConsentState) {
  const consent: StoredConsent = {
    analytics,
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
  }

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent))
  return consent
}

function deleteCookie(name: string) {
  const hostParts = window.location.hostname.split(".")
  const domains = [
    window.location.hostname,
    `.${window.location.hostname}`,
    hostParts.length > 2 ? `.${hostParts.slice(-2).join(".")}` : "",
  ].filter(Boolean)

  for (const domain of domains) {
    document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}; SameSite=Lax`
  }

  document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`
}

function deleteAnalyticsCookies() {
  deleteCookie("_ga")
  deleteCookie(`_ga_${GA_MEASUREMENT_ID.replace(/^G-/, "")}`)
}

function hasAnalyticsConsent() {
  return getStoredConsent()?.analytics === "accepted"
}

function setGoogleAnalyticsDisabled(disabled: boolean) {
  ;(window as unknown as Record<string, boolean>)[`ga-disable-${GA_MEASUREMENT_ID}`] = disabled
}

function disableAnalytics() {
  setGoogleAnalyticsDisabled(true)
  deleteAnalyticsCookies()
}

function enableAnalytics() {
  setGoogleAnalyticsDisabled(false)

  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args)
    }

  if (!document.querySelector("script[data-tracer-ga4='true']")) {
    const script = document.createElement("script")
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    script.dataset.tracerGa4 = "true"
    document.head.appendChild(script)
  }

  window.gtag("js", new Date())
  window.gtag("config", GA_MEASUREMENT_ID)
}

export function openPrivacyPreferences() {
  if (typeof window === "undefined") return
  window.dispatchEvent(new Event(CONSENT_EVENT))
}

export function AnalyticsConsent() {
  const [mounted, setMounted] = useState(false)
  const [consent, setConsent] = useState<StoredConsent | null>(null)
  const [isAnalyticsEnabled, setIsAnalyticsEnabled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isManagingPreferences, setIsManagingPreferences] = useState(false)
  const [isAnalyticsSelected, setIsAnalyticsSelected] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    setMounted(true)
    const storedConsent = getStoredConsent()
    setConsent(storedConsent)
    setIsOpen(!storedConsent)
    setIsAnalyticsSelected(storedConsent?.analytics === "accepted")

    if (storedConsent?.analytics === "accepted") {
      enableAnalytics()
      setIsAnalyticsEnabled(true)
    } else {
      disableAnalytics()
      setIsAnalyticsEnabled(false)
    }

    const handleOpenPreferences = () => {
      const latestConsent = getStoredConsent()
      setConsent(latestConsent)
      setIsAnalyticsSelected(latestConsent?.analytics === "accepted")
      setIsManagingPreferences(true)
      setIsOpen(true)
    }
    window.addEventListener(CONSENT_EVENT, handleOpenPreferences)
    return () => window.removeEventListener(CONSENT_EVENT, handleOpenPreferences)
  }, [])

  const updateConsent = useCallback((analytics: ConsentState) => {
    const nextConsent = storeConsent(analytics)
    setConsent(nextConsent)
    setIsOpen(false)
    setIsManagingPreferences(false)
    setIsAnalyticsSelected(analytics === "accepted")

    if (analytics === "accepted") {
      enableAnalytics()
      setIsAnalyticsEnabled(true)
    } else {
      disableAnalytics()
      setIsAnalyticsEnabled(false)
    }
  }, [])

  const beforeSendAnalyticsEvent = useCallback((event: BeforeSendEvent) => {
    return hasAnalyticsConsent() ? event : null
  }, [])

  if (!mounted || !isOpen) {
    return isAnalyticsEnabled ? <Analytics beforeSend={beforeSendAnalyticsEvent} /> : null
  }

  const hasExistingChoice = Boolean(consent)
  const savePreferences = () => updateConsent(isAnalyticsSelected ? "accepted" : "rejected")

  return (
    <>
      {isAnalyticsEnabled ? <Analytics beforeSend={beforeSendAnalyticsEvent} /> : null}
      <div className="fixed inset-x-0 bottom-0 z-[120] px-3 pb-3 sm:px-6 sm:pb-6">
        <div className="mx-auto max-h-[calc(100dvh-1.5rem)] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-[var(--modal-shadow)] sm:p-5">
          {isManagingPreferences ? (
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
              <div className="min-w-0">
                <p className="text-sm font-semibold tracking-tight">
                  {language === "fr" ? "Gérer mes préférences" : "Manage my preferences"}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground break-words">
                  {language === "fr"
                    ? "Les témoins nécessaires au fonctionnement du site demeurent actifs. Vous pouvez autoriser ou refuser les témoins analytiques non essentiels."
                    : "Cookies required for the website to operate remain active. You can allow or refuse optional analytics cookies."}
                </p>
                <div className="mt-4 rounded-lg border border-border p-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        {language === "fr" ? "Témoins analytiques" : "Analytics cookies"}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {language === "fr"
                          ? "Ils nous aident à comprendre l'utilisation du site et à améliorer nos plateformes numériques."
                          : "They help us understand website usage and improve our digital platforms."}
                      </p>
                    </div>
                    <Switch
                      checked={isAnalyticsSelected}
                      onCheckedChange={setIsAnalyticsSelected}
                      aria-label={language === "fr" ? "Autoriser les témoins analytiques" : "Allow analytics cookies"}
                    />
                  </div>
                </div>
              </div>
              <div className="flex min-w-0 flex-col gap-2 sm:min-w-52">
                <Button type="button" className="h-10 w-full rounded-full" onClick={savePreferences}>
                  {language === "fr" ? "Enregistrer mes choix" : "Save my choices"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="h-10 w-full rounded-full"
                  onClick={() => updateConsent("rejected")}
                >
                  {language === "fr" ? "Tout refuser" : "Reject all"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
              <div className="min-w-0">
                <p className="text-sm font-semibold tracking-tight">
                  {language === "fr" ? "Ce site web utilise des témoins" : "This website uses cookies"}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground break-words">
                  {language === "fr"
                    ? "Nous utilisons des témoins (cookies) et des technologies similaires pour assurer le fonctionnement du site, améliorer votre expérience de navigation et comprendre comment nos plateformes numériques sont utilisées. En cliquant sur « Tout autoriser », vous acceptez l'utilisation de témoins analytiques à ces fins. Vous pouvez revoir vos préférences avant de poursuivre votre visite."
                    : "We use cookies and similar technologies to operate the website, improve your browsing experience, and understand how our digital platforms are used. By clicking \"Allow all\", you agree to the use of analytics cookies for these purposes. You can review your preferences before continuing your visit."}
                </p>
              </div>
              <div className="flex min-w-0 flex-col gap-2 sm:min-w-52">
                <Button
                  type="button"
                  variant="outline"
                  className="h-10 w-full rounded-full"
                  onClick={() => setIsManagingPreferences(true)}
                >
                  {language === "fr" ? "Gérer mes préférences" : "Manage preferences"}
                </Button>
                <Button type="button" className="h-10 w-full rounded-full" onClick={() => updateConsent("accepted")}>
                  {language === "fr" ? "Tout autoriser" : "Allow all"}
                </Button>
              </div>
            </div>
          )}
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-subtle-foreground">
            <a href="/privacy" className="underline underline-offset-4 transition-colors hover:text-foreground">
              {language === "fr" ? "Politique de confidentialité" : "Privacy policy"}
            </a>
            <a href="/cookies" className="underline underline-offset-4 transition-colors hover:text-foreground">
              {language === "fr" ? "Politique des témoins" : "Cookie policy"}
            </a>
            {hasExistingChoice ? (
              <span>
                {language === "fr"
                  ? "Votre choix remplacera la préférence précédente."
                  : "Your choice will replace your previous preference."}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}
