"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import NextImage from "next/image"
import { ArrowRight, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { Spinner } from "@/components/ui/spinner"
import { trackEvent } from "@/lib/analytics"
import { useLanguage } from "@/lib/language-context"

const DEFAULT_LAUNCH_DATE = "2026-06-01T00:00:00"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

function createSubmissionId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID()
  }

  return `waitlist_${Date.now()}_${Math.random().toString(36).slice(2)}`
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [companyWebsite, setCompanyWebsite] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [consent, setConsent] = useState(false)
  const [submissionId, setSubmissionId] = useState(createSubmissionId)
  const openedAtRef = useRef(Date.now())
  const launchDate = useMemo(
    () => new Date(process.env.NEXT_PUBLIC_TRACER_LAUNCH_DATE || DEFAULT_LAUNCH_DATE),
    []
  )
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLaunched: false,
  })
  const { t, language } = useLanguage()

  useEffect(() => {
    if (!isOpen) {
      return
    }

    openedAtRef.current = Date.now()
    setSubmissionId(createSubmissionId())
    setHasError(false)
  }, [isOpen])

  useEffect(() => {
    const updateCountdown = () => {
      const diff = launchDate.getTime() - Date.now()

      if (diff <= 0) {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isLaunched: true,
        })
        return
      }

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
        isLaunched: false,
      })
    }

    updateCountdown()
    const interval = window.setInterval(updateCountdown, 1000)
    return () => window.clearInterval(interval)
  }, [launchDate])

  const resetAndClose = () => {
    onClose()
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      resetAndClose()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setHasError(false)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          language,
          consent,
          source: "waitlist_modal",
          submissionId,
          openedAt: new Date(openedAtRef.current).toISOString(),
          formAgeMs: Date.now() - openedAtRef.current,
          website: companyWebsite,
        }),
      })

      if (!response.ok) {
        throw new Error("Waitlist submission failed")
      }

      trackEvent("generate_lead", {
        method: "waitlist",
        form_id: "waitlist_modal",
        language,
        consent_status: consent ? "accepted" : "not_accepted",
      })
      setIsSubmitted(true)
      setTimeout(() => setHasAnimated(true), 1200)
      setTimeout(() => {
        resetAndClose()
      }, 3500)
    } catch (err) {
      console.error("Waitlist submission error:", err)
      trackEvent("waitlist_submit_error", {
        form_id: "waitlist_modal",
        language,
      })
      setHasError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const canSubmit = consent && !isSubmitting
  const consentHelp =
    language === "fr"
      ? "Vous devez accepter les communications pour rejoindre la liste."
      : "You must accept communications to join."

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="max-h-[calc(100dvh-2rem)] max-w-xl overflow-y-auto rounded-[28px] border-border bg-card p-6 text-card-foreground shadow-[var(--modal-shadow)] md:p-10"
      >
        <DialogClose asChild>
          <button
            type="button"
            aria-label={language === "fr" ? "Fermer la fenêtre de liste d'attente" : "Close waitlist modal"}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-colors hover:text-foreground md:right-5 md:top-5"
          >
            <X className="h-5 w-5" />
          </button>
        </DialogClose>

        <div className="mb-8 flex items-center justify-center text-foreground">
          <div className="flex items-center gap-2.5">
            <div className="relative h-10 w-10 shrink-0">
              <NextImage
                src="/brand/glass-logo-tracer.png"
                alt=""
                fill
                sizes="40px"
                className="object-contain drop-shadow-[0_8px_18px_rgba(15,23,42,0.18)]"
              />
            </div>
            <div className="leading-none">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
                Tracer
              </p>
              <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                {t.header.tagline}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          {isSubmitted ? (
            <div className="space-y-8">
              <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-success-muted bg-success-muted${hasAnimated ? "" : " animate-in fade-in zoom-in-75 duration-700 ease-out"}`}>
                <Check className={`h-9 w-9 text-success${hasAnimated ? "" : " animate-in fade-in zoom-in-50 duration-500 delay-300 ease-out"}`} strokeWidth={2.5} />
              </div>
              <div className={hasAnimated ? "" : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-500 ease-out"}>
                <DialogTitle className="mb-4 text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {t.waitlist.success}
                </DialogTitle>
              </div>
              <p className={hasAnimated ? "text-muted-foreground" : "animate-in fade-in text-muted-foreground duration-700 delay-700 ease-out"}>
                {t.waitlist.successMessage}
              </p>
            </div>
          ) : (
            <>
              <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground md:mb-6">
                {countdown.isLaunched ? (
                  language === "fr" ? "Accès anticipé" : "Early access"
                ) : (
                  t.waitlist.comingSummer
                )}
              </span>
              <DialogTitle className="mb-4 text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {t.waitlist.joinWaitlist}
              </DialogTitle>
              <DialogDescription className="mx-auto mb-6 max-w-md text-center leading-relaxed text-muted-foreground md:mb-10">
                {countdown.isLaunched
                  ? language === "fr"
                    ? "Tracer ouvre progressivement l'accès anticipé. Rejoignez la liste pour prioriser votre institution."
                    : "Tracer is opening early access in stages. Join the list to prioritize your institution."
                  : t.waitlist.subtitle}
              </DialogDescription>

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
                <input type="hidden" name="submissionId" value={submissionId} />
                <div className="hidden" aria-hidden="true">
                  <label>
                    Company website
                    <input
                      tabIndex={-1}
                      autoComplete="off"
                      value={companyWebsite}
                      onChange={(e) => setCompanyWebsite(e.target.value)}
                    />
                  </label>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={language === "fr" ? "Prénom" : "First name"}
                    aria-label={language === "fr" ? "Prénom" : "First name"}
                    autoComplete="given-name"
                    required
                    className="h-12 w-full rounded-2xl border border-input bg-background px-5 text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-ring focus:outline-none"
                  />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={language === "fr" ? "Nom" : "Last name"}
                    aria-label={language === "fr" ? "Nom" : "Last name"}
                    autoComplete="family-name"
                    required
                    className="h-12 w-full rounded-2xl border border-input bg-background px-5 text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-ring focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.waitlist.emailPlaceholder}
                  aria-label={t.waitlist.emailPlaceholder}
                  autoComplete="email"
                  required
                  className="h-12 w-full rounded-2xl border border-input bg-background px-5 text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-ring focus:outline-none"
                />

                <label className="flex cursor-pointer flex-col items-center gap-1.5 text-center">
                  <div className="flex items-start justify-center gap-1.5">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-px h-4 w-4 shrink-0 cursor-pointer rounded border-input accent-primary"
                    />
                    <span className="text-center text-xs leading-relaxed text-muted-foreground">
                      {language === "fr"
                        ? "J'accepte de recevoir des courriels concernant la liste d'attente, le lancement et les mises à jour produit de Tracer."
                        : "I agree to receive waitlist, launch, and product update emails from Tracer."}
                    </span>
                  </div>
                  <span className="text-[11px] text-subtle-foreground">
                    {language === "fr"
                      ? "Je peux me désabonner à tout moment."
                      : "I can unsubscribe at any time."}
                  </span>
                </label>

                {!consent ? (
                  <p className="text-center text-xs text-muted-foreground" id="waitlist-consent-help">
                    {consentHelp}
                  </p>
                ) : null}

                <Button
                  type="submit"
                  disabled={!canSubmit}
                  aria-describedby={!consent ? "waitlist-consent-help" : undefined}
                  className="group h-12 w-full cursor-pointer gap-3 rounded-full bg-primary text-sm tracking-wide text-primary-foreground shadow-xl shadow-black/15 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {isSubmitting ? (
                    <>
                      <Spinner className="h-4 w-4" />
                      <span>{t.waitlist.joining}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.header.joinWaitlist}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </Button>

                <p className="text-center text-[11px] text-subtle-foreground">
                  {language === "fr" ? (
                    <>
                      En rejoignant la liste d&apos;attente, vous acceptez notre{" "}
                      <a href="/privacy" target="_blank" rel="noopener noreferrer" className="underline transition-colors hover:text-foreground">
                        Politique de confidentialité
                      </a>.
                    </>
                  ) : (
                    <>
                      By joining the waitlist, you agree to our{" "}
                      <a href="/privacy" target="_blank" rel="noopener noreferrer" className="underline transition-colors hover:text-foreground">
                        Privacy Policy
                      </a>.
                    </>
                  )}
                </p>

                {hasError ? (
                  <p className="text-center text-sm text-destructive">
                    {language === "fr"
                      ? "Nous éprouvons un problème temporaire. Veuillez réessayer sous peu."
                      : "We're experiencing a temporary issue. Please try again shortly."}
                  </p>
                ) : null}
              </form>
            </>
          )}

          <div className="mt-8 border-t border-border pt-6 md:mt-12 md:pt-8">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {countdown.isLaunched
                ? language === "fr"
                  ? "Accès anticipé en cours"
                  : "Early access is open"
                : t.waitlist.launchingIn}
            </p>
            {countdown.isLaunched ? (
              <p className="mx-auto max-w-sm text-sm leading-6 text-muted-foreground">
                {language === "fr"
                  ? "Les institutions fondatrices sont intégrées progressivement."
                  : "Founding institutions are being onboarded in stages."}
              </p>
            ) : (
              <div className="flex justify-center gap-6 md:gap-10">
                <CountdownUnit value={countdown.days} label={t.waitlist.days} />
                <CountdownUnit value={countdown.hours} label={t.waitlist.hours} />
                <CountdownUnit value={countdown.minutes} label={t.waitlist.min} />
                <CountdownUnit value={countdown.seconds} label={t.waitlist.sec} />
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-semibold tabular-nums text-foreground md:text-4xl">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
    </div>
  )
}
