"use client"

import { useState, useEffect } from "react"
import { SplashScreen } from "@/components/splash-screen"

interface PageWrapperProps {
  children: React.ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  const [showSplash, setShowSplash] = useState(true)
  const [contentReady, setContentReady] = useState(false)

  useEffect(() => {
    // Check if this is a return visit in the same session
    const hasSeenSplash = sessionStorage.getItem("trace-splash-seen")
    if (hasSeenSplash) {
      setShowSplash(false)
      setContentReady(true)
    }
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
    setContentReady(true)
    sessionStorage.setItem("trace-splash-seen", "true")
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div 
        className={`transition-all duration-700 ease-out ${
          contentReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {children}
      </div>
    </>
  )
}
