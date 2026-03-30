"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"

// Animated icon components - now accept isHovered for hover animation
function SpeedIcon({ isAnimating }: { isAnimating: boolean }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-foreground/70">
      {/* Gauge arc */}
      <circle 
        cx="16" 
        cy="16" 
        r="12" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeDasharray="56.5 18.8"
        className="opacity-30"
      />
      {/* Needle */}
      <line 
        x1="16" 
        y1="16" 
        x2="16" 
        y2="8" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
        className={`origin-center transition-transform duration-700 ease-out ${isAnimating ? 'rotate-[60deg]' : '-rotate-[60deg]'}`}
        style={{ transformOrigin: '16px 16px' }}
      />
      {/* Center dot */}
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  )
}

function ConsistencyIcon({ isAnimating }: { isAnimating: boolean }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-foreground/70">
      {/* Three horizontal lines that animate to same length */}
      <line 
        x1="6" y1="10" x2={isAnimating ? "26" : "18"} y2="10" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
        className="transition-all duration-500 delay-0"
      />
      <line 
        x1="6" y1="16" x2={isAnimating ? "26" : "22"} y2="16" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
        className="transition-all duration-500 delay-100"
      />
      <line 
        x1="6" y1="22" x2={isAnimating ? "26" : "14"} y2="22" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
        className="transition-all duration-500 delay-200"
      />
    </svg>
  )
}

function CollaborationIcon({ isAnimating }: { isAnimating: boolean }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-foreground/70">
      {/* Two nodes that connect */}
      <circle 
        cx="8" 
        cy="16" 
        r="4" 
        stroke="currentColor" 
        strokeWidth="1.5"
        className={`transition-all duration-300 ${isAnimating ? 'opacity-100' : 'opacity-40'}`}
      />
      <circle 
        cx="24" 
        cy="16" 
        r="4" 
        stroke="currentColor" 
        strokeWidth="1.5"
        className={`transition-all duration-300 delay-100 ${isAnimating ? 'opacity-100' : 'opacity-40'}`}
      />
      {/* Connecting line */}
      <line 
        x1="12" 
        y1="16" 
        x2={isAnimating ? "20" : "12"} 
        y2="16" 
        stroke="currentColor" 
        strokeWidth="1.5"
        strokeLinecap="round"
        className="transition-all duration-500 delay-150"
      />
    </svg>
  )
}

function OutputIcon({ isAnimating }: { isAnimating: boolean }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-foreground/70">
      {/* Document outline */}
      <rect 
        x="7" y="4" width="18" height="24" rx="2" 
        stroke="currentColor" 
        strokeWidth="1.5"
        className={`transition-all duration-300 ${isAnimating ? 'opacity-100' : 'opacity-40'}`}
      />
      {/* Checkmark that appears */}
      <path 
        d="M12 16 L15 19 L21 12" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className={`transition-all duration-300 delay-150 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
      />
    </svg>
  )
}

const iconComponents = {
  speed: SpeedIcon,
  consistency: ConsistencyIcon,
  collaboration: CollaborationIcon,
  output: OutputIcon,
}

// Gradients matching how-it-works section
const gradients = [
  "radial-gradient(ellipse at top, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 40%, transparent 70%)",
  "radial-gradient(ellipse at top, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 40%, transparent 70%)",
  "radial-gradient(ellipse at top, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.015) 40%, transparent 70%)",
  "radial-gradient(ellipse at top, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.025) 40%, transparent 70%)",
]

export function ValueProps() {
  const { t } = useLanguage()
  
  const valueProps = [
    { id: "speed", ...t.value.speed },
    { id: "consistency", ...t.value.consistency },
    { id: "collaboration", ...t.value.collaboration },
    { id: "output", ...t.value.output },
  ]

  return (
    <section id="value" className="py-32 md:py-48 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-0 md:grid-cols-2 relative">
          {/* Grid lines */}
          <div className="absolute inset-0 grid md:grid-cols-2 pointer-events-none">
            <div className="border-l border-border/30" />
            <div className="border-l border-r border-border/30" />
          </div>
          <div className="absolute inset-0 grid grid-rows-2 pointer-events-none">
            <div className="border-t border-border/30" />
            <div className="border-t border-b border-border/30" />
          </div>
          
          {valueProps.map((prop, index) => (
            <ValueCard key={index} prop={prop} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ValueCard({ 
  prop, 
  index 
}: { 
  prop: { id: string; label: string; headline: string; subline: string; description: string }
  index: number 
}) {
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

  const IconComponent = iconComponents[prop.id as keyof typeof iconComponents]

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative p-8 md:p-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
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
        <div className="flex items-center gap-3 mb-8">
          <IconComponent isAnimating={isVisible || isHovered} />
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {prop.label}
          </span>
        </div>
        
        <h3 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground leading-[1.1] mb-6">
          <span className="font-sans font-extralight block">{prop.headline}</span>
          <span className="font-sans font-medium block">{prop.subline}</span>
        </h3>
        
        <p className="text-muted-foreground font-light leading-relaxed max-w-sm">
          {prop.description}
        </p>

        {/* Hover line */}
        <div className="mt-10 h-px w-0 bg-foreground/30 group-hover:w-16 transition-all duration-700" />
      </div>
    </div>
  )
}
