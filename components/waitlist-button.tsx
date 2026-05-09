"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { WaitlistModal } from "@/components/waitlist-modal"
import { trackEvent } from "@/lib/analytics"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

type WaitlistButtonProps = {
  children?: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "ghost"
  showIcon?: boolean
  trackingLocation?: string
  trackingLabel?: string
}

export function WaitlistButton({
  children,
  className,
  variant = "primary",
  showIcon = true,
  trackingLocation = "unspecified",
  trackingLabel,
}: WaitlistButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { t, language } = useLanguage()
  const label = trackingLabel ?? (typeof children === "string" ? children : t.header.joinWaitlist)

  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-xl shadow-black/15 hover:bg-primary/90 active:scale-[0.98]",
    secondary:
      "border border-border bg-card text-foreground hover:bg-muted active:scale-[0.98]",
    ghost: "text-foreground hover:bg-muted active:scale-[0.98]",
  }

  const handleOpen = () => {
    trackEvent("waitlist_open", {
      cta_location: trackingLocation,
      cta_label: label,
      language,
    })
    setIsOpen(true)
  }

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className={cn(
          "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-all duration-200",
          variants[variant],
          className
        )}
      >
        <span>{children ?? label}</span>
        {showIcon && <ArrowRight className="h-4 w-4" />}
      </button>
      <WaitlistModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
