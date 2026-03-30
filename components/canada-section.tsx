"use client"

import { useEffect, useRef, useState } from "react"
import { MapleLeaf } from "@/components/maple-leaf"
import { useLanguage } from "@/lib/language-context"
import { Server, FileCheck } from "lucide-react"

// Gradients matching value-props section
const gradients = [
  "radial-gradient(ellipse at top, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 40%, transparent 70%)",
  "radial-gradient(ellipse at top, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 40%, transparent 70%)",
]

export function CanadaSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Server,
      title: t.canada?.dataHosted || "Data hosted in Canada",
      description: t.canada?.dataHostedDesc || "Your research data stays on Canadian soil, meeting institutional sovereignty and compliance requirements.",
    },
    {
      icon: FileCheck,
      title: t.canada?.riskForm || "Risk Assessment Form integration",
      description: t.canada?.riskFormDesc || "Direct integration with the Risk Assessment Form required by the National Security Guidelines for Research Partnerships.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Maple leaf accent */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-red-500/50" />
            <MapleLeaf size={24} />
            <div className="h-px w-8 bg-red-500/50" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground leading-[1.1]">
            <span className="font-sans font-extralight">{t.canada?.headline || "Built for the world,"}</span>
            <br />
            <span className="font-sans font-medium">{t.canada?.headlineBold || "optimized for Canada"}</span>
          </h2>
        </div>

        {/* Two feature cards in grid style */}
        <div className="grid md:grid-cols-2 relative">
          {/* Grid lines */}
          <div className="absolute inset-0 grid md:grid-cols-2 pointer-events-none">
            <div className="border-l border-border/30" />
            <div className="border-l border-r border-border/30" />
          </div>
          <div className="absolute inset-0 pointer-events-none border-t border-b border-border/30" />

          {features.map((feature, index) => (
            <CanadaCard 
              key={index} 
              feature={feature} 
              index={index} 
              isVisible={isVisible}
              gradient={gradients[index]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function CanadaCard({ 
  feature, 
  index, 
  isVisible,
  gradient
}: { 
  feature: { icon: React.ElementType; title: string; description: string }
  index: number
  isVisible: boolean
  gradient: string
}) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = feature.icon

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative p-8 md:p-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index + 1) * 100}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div 
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{ 
          background: gradient,
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
        <div className="flex items-start gap-4 mb-4">
          <Icon className={`h-6 w-6 mt-1 text-foreground/70 transition-all duration-300 flex-shrink-0 ${isHovered ? 'text-red-500 dark:text-red-400' : ''}`} />
          <h3 className="text-xl md:text-2xl tracking-tight text-foreground leading-[1.2] font-medium">
            {feature.title}
          </h3>
        </div>
        
        <p className="text-muted-foreground font-light leading-relaxed max-w-sm pl-10">
          {feature.description}
        </p>

        {/* Hover line */}
        <div className="mt-10 h-px w-0 bg-foreground/30 group-hover:w-16 transition-all duration-700" />
      </div>
    </div>
  )
}
