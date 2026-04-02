"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { X, ArrowRight, Check } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"
import { useLanguage } from "@/lib/language-context"
import { TracerLogo } from "@/components/tracer-logo"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [consent, setConsent] = useState(false)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const { t, language } = useLanguage()

  // Mount check for portal + initialize EmailJS
  useEffect(() => {
    setMounted(true)
    emailjs.init({ publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! })
  }, [])

  // Calculate countdown to Summer 2026 (June 21, 2026)
  useEffect(() => {
    const targetDate = new Date("2026-06-21T00:00:00")
    
    const updateCountdown = () => {
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()
      
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
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setHasError(false)
    const templateId = language === "fr"
      ? process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_FR!
      : process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_EN!
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        templateId,
        { user_email: email },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setIsSubmitted(true)
      setTimeout(() => {
        onClose()
      }, 3500)
    } catch (err) {
      console.error("EmailJS error:", err)
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
      <div 
        className="absolute inset-0 bg-background/95 backdrop-blur-sm"
      />

      {/* Close button — fixed top-right of viewport */}
      <button
        onClick={onClose}
        className="absolute top-10 right-10 z-20 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Modal content */}
      <div
        className="relative z-10 w-full max-w-lg mx-6 animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with logo centered */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex flex-col items-center">
            <TracerLogo size={28} animated={false} />
            <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-foreground mt-1">Tracer</span>
          </div>
        </div>

        <div className="text-center">
          {isSubmitted ? (
            <div className="space-y-8">
              {/* Success circle */}
              <div className="mx-auto h-20 w-20 flex items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 animate-in fade-in zoom-in-75 duration-700 ease-out">
                <Check className="h-9 w-9 text-emerald-400 animate-in fade-in zoom-in-50 duration-500 delay-300 ease-out" strokeWidth={2.5} />
              </div>
              <div className="animate-in fade-in slide-in-from-bottom-3 duration-700 delay-500 ease-out">
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-4">
                  {t.waitlist.success}
                </h2>
              </div>
              <div className="animate-in fade-in duration-700 delay-700 ease-out">
                <p className="text-muted-foreground font-light">
                  {t.waitlist.successMessage}
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Header */}
              <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                {t.waitlist.comingSummer}
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-4">
                {t.waitlist.joinWaitlist}
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed max-w-md mx-auto mb-10">
                {t.waitlist.subtitle}
              </p>

              {/* Email form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.waitlist.emailPlaceholder}
                    required
                    className="w-full px-6 py-4 bg-muted/30 border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/50 transition-colors"
                  />
                </div>
                <div className="relative group/btn">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !consent}
                    className="group w-full gap-3 py-6 text-sm tracking-wide bg-foreground text-background hover:bg-foreground/90 rounded-lg cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
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
                      <div
                        className="relative rounded-md px-4 py-2.5 text-xs text-zinc-700 dark:text-zinc-200 whitespace-nowrap"
                        style={{
                          background: "white",
                          border: "1px solid #e4e4e7",
                          boxShadow: "0 4px 16px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)",
                        }}
                      >
                        {language === "fr"
                          ? "Vous devez accepter les communications pour continuer."
                          : "You must accept communications to join."}
                        {/* Tail */}
                        <span
                          className="absolute left-1/2 -translate-x-1/2"
                          style={{
                            bottom: "-6px",
                            width: "12px",
                            height: "12px",
                            background: "white",
                            border: "1px solid #e4e4e7",
                            borderTop: "none",
                            borderLeft: "none",
                            transform: "translateX(-50%) rotate(45deg)",
                            boxShadow: "2px 2px 4px rgba(0,0,0,0.04)",
                          }}
                        />
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
                      className="h-4 w-4 rounded border-border accent-foreground cursor-pointer shrink-0"
                      style={{ marginTop: "-1px" }}
                    />
                    <span className="text-xs text-muted-foreground leading-relaxed text-center">
                      {language === "fr"
                        ? "J'accepte de recevoir des courriels concernant la liste d'attente, le lancement et les mises à jour produit de Tracer."
                        : "I agree to receive waitlist, launch, and product update emails from Tracer."}
                    </span>
                  </div>
                  <span className="text-[11px] text-muted-foreground/60">
                    {language === "fr"
                      ? "Je peux me désabonner à tout moment."
                      : "I can unsubscribe at any time."}
                  </span>
                </label>

                {/* Privacy policy link */}
                <p className="text-[11px] text-muted-foreground/60 text-center">
                  {language === "fr" ? (
                    <>En rejoignant la liste d&apos;attente, vous acceptez notre{" "}
                      <a href="/privacy" target="_blank" className="underline hover:text-muted-foreground transition-colors">
                        Politique de confidentialité
                      </a>.
                    </>
                  ) : (
                    <>By joining the waitlist, you agree to our{" "}
                      <a href="/privacy" target="_blank" className="underline hover:text-muted-foreground transition-colors">
                        Privacy Policy
                      </a>.
                    </>
                  )}
                </p>

                {hasError && (
                  <p className="text-sm text-muted-foreground text-center">
                    {language === "fr"
                      ? "Nous éprouvons un problème temporaire. Veuillez réessayer sous peu."
                      : "We're experiencing a temporary issue. Please try again shortly."}
                  </p>
                )}
              </form>
            </>
          )}

          {/* Countdown */}
          <div className="mt-16 pt-8 border-t border-border/40">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
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
      <div className="text-3xl md:text-4xl font-light text-foreground tabular-nums">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  )
}
