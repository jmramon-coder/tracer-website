"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import NextImage from "next/image"
import { Button } from "@/components/ui/button"
import { X, ArrowRight, Check } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"
import { trackEvent } from "@/lib/analytics"
import { useLanguage } from "@/lib/language-context"

const LAUNCH_DATE = new Date("2026-06-01T00:00:00")

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [mounted, setMounted] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [consent, setConsent] = useState(false)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const { t, language } = useLanguage()

  // Mount check for portal.
  useEffect(() => {
    setMounted(true)
  }, [])

  // Calculate countdown to launch day.
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const diff = LAUNCH_DATE.getTime() - now.getTime()
      
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.inset = "0"
      document.body.style.width = "100%"
    } else {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
      document.body.style.position = ""
      document.body.style.inset = ""
      document.body.style.width = ""
    }
    return () => {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
      document.body.style.position = ""
      document.body.style.inset = ""
      document.body.style.width = ""
    }
  }, [isOpen])

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
        onClose()
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

  if (!isOpen || !mounted) return null

  return createPortal(
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center"
    >
      {/* Backdrop - no click to close */}
      <div className="absolute inset-0 bg-black/35 backdrop-blur-sm" />

      {/* Close button — fixed top-right of viewport */}
      <button
        onClick={onClose}
        aria-label={language === "fr" ? "Fermer la fenêtre de liste d'attente" : "Close waitlist modal"}
        className="absolute right-6 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-colors hover:text-foreground md:right-10 md:top-10"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Modal content */}
      <div
        className="relative z-10 mx-6 max-h-[calc(100vh-2rem)] w-full max-w-xl animate-in overflow-y-auto rounded-[28px] border border-border bg-card p-6 text-card-foreground shadow-[var(--modal-shadow)] fade-in zoom-in-95 duration-300 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with logo centered */}
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
              {/* Success circle */}
              <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-success-muted bg-success-muted${hasAnimated ? "" : " animate-in fade-in zoom-in-75 duration-700 ease-out"}`}>
                <Check className={`h-9 w-9 text-success${hasAnimated ? "" : " animate-in fade-in zoom-in-50 duration-500 delay-300 ease-out"}`} strokeWidth={2.5} />
              </div>
              <div className={hasAnimated ? "" : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-500 ease-out"}>
                <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {t.waitlist.success}
                </h2>
              </div>
              <div className={hasAnimated ? "" : "animate-in fade-in duration-700 delay-700 ease-out"}>
                <p className="text-muted-foreground">
                  {t.waitlist.successMessage}
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Header */}
              <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground md:mb-6">
                {t.waitlist.comingSummer}
              </span>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {t.waitlist.joinWaitlist}
              </h2>
              <p className="mx-auto mb-6 max-w-md text-muted-foreground leading-relaxed md:mb-10">
                {t.waitlist.subtitle}
              </p>

              {/* Email form */}
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
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
                <div className="relative">
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
                </div>
                <div className="relative group/btn">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !consent}
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
                  {!consent && !isSubmitting && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 pointer-events-none opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200 z-50">
                      <div className="relative whitespace-nowrap rounded-md border border-border bg-popover px-4 py-2.5 text-xs text-popover-foreground shadow-[0_4px_16px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.06)]">
                        {language === "fr"
                          ? "Vous devez accepter les communications pour continuer."
                          : "You must accept communications to join."}
                        {/* Tail */}
                        <span className="absolute bottom-[-6px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-border bg-popover shadow-[2px_2px_4px_rgba(0,0,0,0.04)]" />
                      </div>
                    </div>
                  )}
                </div>

                {/* CASL consent checkbox */}
                <label className="flex flex-col items-center gap-1.5 cursor-pointer text-center">
                  <div className="flex items-start justify-center" style={{ gap: "6px" }}>
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="h-4 w-4 shrink-0 cursor-pointer rounded border-input accent-primary"
                      style={{ marginTop: "1px" }}
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

                {/* Privacy policy link */}
                <p className="text-center text-[11px] text-subtle-foreground">
                  {language === "fr" ? (
                    <>En rejoignant la liste d&apos;attente, vous acceptez notre{" "}
                      <a href="/privacy" target="_blank" className="underline transition-colors hover:text-foreground">
                        Politique de confidentialité
                      </a>.
                    </>
                  ) : (
                    <>By joining the waitlist, you agree to our{" "}
                      <a href="/privacy" target="_blank" className="underline transition-colors hover:text-foreground">
                        Privacy Policy
                      </a>.
                    </>
                  )}
                </p>

                {hasError && (
                  <p className="text-center text-sm text-destructive">
                    {language === "fr"
                      ? "Nous éprouvons un problème temporaire. Veuillez réessayer sous peu."
                      : "We're experiencing a temporary issue. Please try again shortly."}
                  </p>
                )}
              </form>
            </>
          )}

          {/* Countdown */}
          <div className="mt-8 border-t border-border pt-6 md:mt-12 md:pt-8">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {t.waitlist.launchingIn}
            </p>
            <div className="flex justify-center gap-6 md:gap-10">
              <CountdownUnit value={countdown.days} label={t.waitlist.days} />
              <CountdownUnit value={countdown.hours} label={t.waitlist.hours} />
              <CountdownUnit value={countdown.minutes} label={t.waitlist.min} />
              <CountdownUnit value={countdown.seconds} label={t.waitlist.sec} />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
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
