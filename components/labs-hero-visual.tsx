"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { LocalizedText } from "@/components/localized-text"

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function LabsHeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageLayerRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const reportRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduceMotion) {
      return undefined
    }

    let animationFrame = 0

    const updateParallax = () => {
      window.cancelAnimationFrame(animationFrame)

      animationFrame = window.requestAnimationFrame(() => {
        const container = containerRef.current

        if (!container) {
          return
        }

        const rect = container.getBoundingClientRect()
        const viewportCenter = window.innerHeight * 0.5
        const visualCenter = rect.top + rect.height * 0.5
        const offset = clamp((viewportCenter - visualCenter) * 0.085, -18, 18)

        if (imageLayerRef.current) {
          imageLayerRef.current.style.transform = `translate3d(0, ${offset * -0.34}px, 0) scale(1.055)`
        }

        if (badgeRef.current) {
          badgeRef.current.style.transform = `translate3d(0, ${offset * -0.18}px, 0)`
        }

        if (reportRef.current) {
          reportRef.current.style.transform = `translate3d(0, ${offset * 0.42}px, 0)`
        }
      })
    }

    updateParallax()
    window.addEventListener("scroll", updateParallax, { passive: true })
    window.addEventListener("resize", updateParallax)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener("scroll", updateParallax)
      window.removeEventListener("resize", updateParallax)
    }
  }, [])

  return (
    <div ref={containerRef} className="hidden lg:block">
      <div className="relative min-h-[480px] overflow-hidden rounded-[30px] border border-white/14 bg-white/[0.075] shadow-2xl shadow-black/35">
        <div
          ref={imageLayerRef}
          className="absolute -inset-5 will-change-transform"
          style={{ transform: "translate3d(0, 0, 0) scale(1.055)" }}
        >
          <Image
            src="/brand/tracer-labs-image-1.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1280px) 540px, 44vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,31,0.05),rgba(7,16,31,0.42)_58%,rgba(7,16,31,0.78))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(36,89,184,0.32),transparent_38%)]" />

        <div
          ref={badgeRef}
          className="absolute left-5 top-5 rounded-full border border-white/14 bg-black/24 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/72 backdrop-blur-xl will-change-transform"
        >
          <LocalizedText en="Tracer Labs" fr="Tracer Labs" />
        </div>

        <div ref={reportRef} className="absolute inset-x-5 bottom-5 will-change-transform">
          <div className="rounded-[24px] border border-white/14 bg-black/28 p-5 backdrop-blur-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/46">
              <LocalizedText en="Intelligence layer" fr="Systèmes personnalisés" />
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
              <LocalizedText
                en="Model-aware screening operations."
                fr="Un processus de vérification adapté à vos besoins."
              />
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                ["Agent orchestration", "Orchestration d'agents"],
                ["In-house synthesis", "Synthèse"],
                ["Report rendering", "Visualisation"],
              ].map(([en, fr]) => (
                <span
                  key={en}
                  className="rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/68"
                >
                  <LocalizedText en={en} fr={fr} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
