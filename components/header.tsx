"use client"

import { useState, useEffect } from "react"
import { TracerLogo } from "@/components/tracer-logo"
import { WaitlistModal } from "@/components/waitlist-modal"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-background/90 backdrop-blur-md border-b border-border/50" 
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo with tagline */}
            <a href="/" className="group flex items-center gap-1.5 md:gap-2 cursor-pointer">
              <TracerLogo size={24} className="md:w-7 md:h-7" animated={true} />
              <div className="flex flex-col -space-y-0.5">
                <span className="text-xs md:text-sm font-medium tracking-[0.15em] uppercase text-foreground">
                  Tracer
                </span>
                <span className="text-[7px] md:text-[9px] tracking-[0.1em] md:tracking-[0.12em] uppercase text-foreground/70 max-w-[50px] md:max-w-none leading-tight">
                  {t.header.tagline}
                </span>
              </div>
            </a>

            {/* Right side controls */}
            <div className="flex items-center gap-1.5 md:gap-3">
              <LanguageToggle />
              <ThemeToggle />
              
              {/* Join Waitlist button */}
              <button
                onClick={() => setIsWaitlistOpen(true)}
                className="px-3 md:px-5 py-2 md:py-2.5 text-[11px] md:text-[13px] tracking-wide font-medium rounded-lg
                  bg-foreground text-background
                  dark:shadow-[0_2px_12px_rgba(0,0,0,0.2),0_1px_4px_rgba(0,0,0,0.1)]
                  shadow-[0_2px_8px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)]
                  dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.15)]
                  hover:shadow-[0_4px_12px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)]
                  hover:opacity-90
                  active:scale-[0.97] active:shadow-[0_1px_4px_rgba(0,0,0,0.05)]
                  transition-all duration-150 ease-out
                  cursor-pointer"
              >
                {t.header.joinWaitlist}
              </button>
            </div>
          </div>
        </div>
      </header>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  )
}
