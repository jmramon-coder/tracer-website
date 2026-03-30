"use client"

import { useEffect, useRef, useState } from "react"

export function Problems() {
  const problems = [
    {
      problem: "Most tools were built for financial compliance and retrofitted for academia.",
      solution: "Tracer was purpose-built around how research security advisors actually work.",
    },
    {
      problem: "No single tool covers the full screening picture.",
      solution: "Tracer features one integrated pipeline — sanctions, academic networks, corporate structures, and open-source signals.",
    },
    {
      problem: "Enterprise pricing puts serious screening out of reach for most universities.",
      solution: "Tracer is priced for academic budgets. Every institution gets access to serious screening capabilities.",
    },
  ]

  return (
    <section id="problems" className="py-32 md:py-48 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 md:mb-32 max-w-xl">
          <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
            The Challenge
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
            <span className="font-sans font-extralight">The problem</span>
            <br />
            <span className="font-sans font-medium">with current tools</span>
          </h2>
        </div>

        {/* Problems Grid */}
        <div className="space-y-0">
          {problems.map((item, index) => (
            <ProblemItem 
              key={index} 
              item={item} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProblemItem({ 
  item, 
  index,
}: { 
  item: { problem: string; solution: string }
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
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

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group grid gap-8 border-t border-border/60 py-14 md:py-20 md:grid-cols-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Number */}
      <div className="md:col-span-1">
        <span className="text-[11px] text-muted-foreground/50 tabular-nums tracking-wider">
          0{index + 1}
        </span>
      </div>

      {/* Problem */}
      <div className="md:col-span-5">
        <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 mb-4">
          Problem
        </span>
        <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
          {item.problem}
        </p>
      </div>

      {/* Arrow */}
      <div className="hidden md:flex md:col-span-1 items-start justify-center pt-10">
        <div className="w-8 h-px bg-border group-hover:w-12 group-hover:bg-foreground/30 transition-all duration-500" />
      </div>

      {/* Solution */}
      <div className="md:col-span-5">
        <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 mb-4">
          Solution
        </span>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
          {item.solution}
        </p>
      </div>
    </div>
  )
}
