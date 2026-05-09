"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { WaitlistModal } from "@/components/waitlist-modal"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

type WaitlistButtonProps = {
  children?: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "ghost"
  showIcon?: boolean
}

export function WaitlistButton({
  children,
  className,
  variant = "primary",
  showIcon = true,
}: WaitlistButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-xl shadow-black/15 hover:bg-primary/90 active:scale-[0.98]",
    secondary:
      "border border-border bg-card text-foreground hover:bg-muted active:scale-[0.98]",
    ghost: "text-foreground hover:bg-muted active:scale-[0.98]",
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={cn(
          "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-all duration-200",
          variants[variant],
          className
        )}
      >
        <span>{children ?? t.header.joinWaitlist}</span>
        {showIcon && <ArrowRight className="h-4 w-4" />}
      </button>
      <WaitlistModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
