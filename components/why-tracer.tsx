"use client"

import { useEffect, useRef, useState } from "react"
import { MapleLeaf } from "@/components/maple-leaf"
import { useLanguage } from "@/lib/language-context"

export function WhyTracer() {
  const { t } = useLanguage()

  return (
    <section id="why-tracer" className="py-32 md:py-48 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:gap-24 lg:grid-cols-2">
          {/* Left Column */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
              {t.whyTrace.sectionLabel}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1] mb-8">
              <span className="font-sans font-extralight">{t.whyTrace.headline}</span>
              <br />
              <span className="font-sans font-medium">{t.whyTrace.headlineBold}</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-md">
              {t.whyTrace.subtitle}
            </p>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-0">
            {t.whyTrace.features.map((feature, index) => (
              <FeatureItem key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ feature, index }: { feature: { title: string; description: string; hasLeaf?: boolean }; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group flex gap-6 border-t border-border/40 py-8 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Indicator */}
      <div className="pt-1.5 shrink-0">
        <div className="h-2 w-2 border border-foreground/30 group-hover:bg-foreground group-hover:border-foreground transition-all duration-300" />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-medium text-foreground mb-2 tracking-tight flex items-center gap-2">
          {feature.title}
          {feature.hasLeaf && <MapleLeaf size={14} />}
        </h3>
        <p className="text-muted-foreground font-light leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  )
}
