"use client"

import { useEffect, useState } from "react"
import { TracerLogo } from "@/components/tracer-logo"

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<"loading" | "fading" | "complete">("loading")

  useEffect(() => {
    // Show splash for 3.5 seconds, then start fade
    const loadingTimer = setTimeout(() => {
      setPhase("fading")
    }, 3500)

    // Complete transition after fade animation
    const completeTimer = setTimeout(() => {
      setPhase("complete")
      onComplete()
    }, 4500)

    return () => {
      clearTimeout(loadingTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  if (phase === "complete") return null

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-700 ease-out bg-background/95 backdrop-blur-sm ${
        phase === "fading" ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Logo and branding */}
      <div className={`flex flex-col items-center gap-4 transition-all duration-500 ${
        phase === "fading" ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
      }`}>
        {/* Animated logo */}
        <TracerLogo size={64} animated={true} />
        
        {/* Brand name */}
        <div className="flex flex-col items-center -space-y-1">
          <span className="text-xl font-medium tracking-[0.2em] uppercase text-foreground">
            Tracer
          </span>
          <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
            Research Security
          </span>
        </div>
      </div>
      
      {/* Subtle loading indicator */}
      <div className={`absolute bottom-16 flex items-center gap-2 transition-all duration-500 ${
        phase === "fading" ? "opacity-0" : "opacity-100"
      }`}>
        <div className="flex gap-1">
          <span className="h-1 w-1 rounded-full animate-pulse bg-foreground/30" style={{ animationDelay: "0ms" }} />
          <span className="h-1 w-1 rounded-full animate-pulse bg-foreground/30" style={{ animationDelay: "150ms" }} />
          <span className="h-1 w-1 rounded-full animate-pulse bg-foreground/30" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  )
}
