"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section className="py-32 md:py-48 bg-background border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
              {t.howItWorks.sectionLabel}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
              <span className="font-sans font-extralight">{t.howItWorks.headline}</span>
              <br />
              <span className="font-sans font-medium">{t.howItWorks.headlineBold}</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-light leading-relaxed max-w-sm md:text-right">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* Steps Grid with borders */}
        <div className="relative">
          {/* Grid lines */}
          <div className="absolute inset-0 grid md:grid-cols-3 pointer-events-none">
            <div className="border-l border-border/30" />
            <div className="border-l border-border/30" />
            <div className="border-l border-r border-border/30" />
          </div>
          
          <div className="grid md:grid-cols-3">
            {t.howItWorks.steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }: { step: { number: string; title: string; heading: string; description: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  // Different gradient for each card - adjusted for dark theme
  const gradients = [
    "radial-gradient(ellipse at top, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 40%, transparent 70%)",
    "radial-gradient(ellipse at top, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 40%, transparent 70%)",
    "radial-gradient(ellipse at top, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.015) 40%, transparent 70%)",
  ]

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative p-6 sm:p-8 md:p-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div 
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{ 
          background: gradients[index],
          opacity: isHovered ? 1 : 0 
        }}
      />
      
      {/* Corner markers */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-border/50" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-border/50" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-border/50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-border/50" />

      {/* Content */}
      <div className="relative z-10">
        {/* Step indicator */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-[11px] tabular-nums tracking-wider text-muted-foreground/50">
            {step.number}
          </span>
          <div className="h-px flex-1 bg-border/60 group-hover:bg-foreground/20 transition-colors duration-500" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {step.title}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-2xl md:text-3xl tracking-tight text-foreground mb-4 font-light">
          {step.heading}
        </h3>
        <p className="text-muted-foreground font-light leading-relaxed">
          {step.description}
        </p>

        {/* Visual element */}
        <div className="mt-10 h-px w-0 bg-foreground group-hover:w-16 transition-all duration-700" />
      </div>
    </div>
  )
}
