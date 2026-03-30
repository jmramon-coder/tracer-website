"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, AlertTriangle, File, Download, Loader2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { WaitlistModal } from "@/components/waitlist-modal"

export function ResearchBrief(): React.JSX.Element {
  const ref = useRef<HTMLDivElement>(null)
  const briefRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [tiltX, setTiltX] = useState(15)
  const [translateY, setTranslateY] = useState(60)
  const [isExporting, setIsExporting] = useState(false)
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (briefRef.current) {
        const rect = briefRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.8)))
        setTiltX(15 * (1 - progress))
        setTranslateY(60 * (1 - progress))
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleExport = () => {
    setIsExporting(true)
    setShowComingSoon(false)
    setTimeout(() => { setIsExporting(false); setShowComingSoon(true) }, 2500)
  }

  const coAuthors = [
    { name: "Amirhossein Hossein", institution: "Harbin Institute of Technology", list: "NRO", papers: 8, last: 2026 },
    { name: "Mehdi Mozafari", institution: "Harbin Institute of Technology", list: "NRO", papers: 6, last: 2025 },
    { name: "Qiang Zhang", institution: "Harbin Institute of Technology", list: "NRO", papers: 4, last: 2024 },
    { name: "Lei Chen", institution: "Beihang University", list: "BIS", papers: 5, last: 2024 },
    { name: "Wei Zhang", institution: "Beihang University", list: "BIS", papers: 3, last: 2023 },
  ]

  const timelineData = [
    { year: 2016, count: 2, width: "12%" },
    { year: 2018, count: 4, width: "25%" },
    { year: 2020, count: 2, width: "12%" },
    { year: 2022, count: 6, width: "38%" },
    { year: 2024, count: 8, width: "50%" },
    { year: 2026, count: 1, width: "6%" },
  ]

  return (
    <section className="py-32 md:py-48 bg-muted/10">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
            {t.brief.sectionLabel}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1] mb-6">
            <span className="font-sans font-extralight">{t.brief.headline}</span>{" "}
            <span className="font-sans font-medium">{t.brief.headlineBold}</span>
          </h2>
          <p className="text-muted-foreground font-light max-w-lg mx-auto">{t.brief.subtitle}</p>
        </div>

        {/* Content */}
        <div ref={ref} className={`transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ perspective: "1000px" }}>
          <div className="flex flex-col gap-16 md:gap-24">
            
            {/* SECTION 1: Individual Risk Profile */}
            <div className="max-w-2xl mx-auto w-full">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-8">Individual Risk Profile</p>
              
              {/* Deck of cards */}
              <div ref={briefRef} className="relative pt-8 pb-4" style={{ transform: `perspective(1000px) rotateX(${tiltX}deg) translateY(${translateY}px)`, transformOrigin: "center bottom", transition: "transform 75ms ease-out" }}>
                {/* Back shadow card */}
                <div className="absolute inset-0 bg-zinc-200/50 dark:bg-zinc-700/20 rounded-xl" style={{ transform: "rotate(-4deg) translateX(-8px) translateY(6px)" }} />
                {/* Middle shadow card */}
                <div className="absolute inset-0 bg-zinc-100/80 dark:bg-zinc-800/30 rounded-xl" style={{ transform: "rotate(2deg) translateX(4px) translateY(3px)" }} />

                {/* Front card - Main brief */}
                <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-lg shadow-zinc-300/30 dark:shadow-2xl dark:shadow-black/40 overflow-hidden">
                  {isExporting && (
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center animate-in fade-in duration-300">
                      <div className="flex flex-col items-center gap-3">
                        <div className="relative">
                          <div className="h-10 w-10 rounded-full border-2 border-foreground/20 border-t-emerald-400 animate-spin" />
                          <File className="absolute inset-0 m-auto h-4 w-4 text-foreground/60" />
                        </div>
                        <div className="text-center">
                          <p className="text-xs font-medium text-foreground">{t.brief.generatingPdf}</p>
                          <p className="text-[10px] text-foreground/50 mt-0.5">{t.brief.compilingSources}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {showComingSoon && !isExporting && (
                    <div className="absolute inset-0 bg-background/90 backdrop-blur-sm z-10 flex items-center justify-center animate-in fade-in duration-300">
                      <div className="flex flex-col items-center gap-4 text-center px-6">
                        <div className="h-12 w-12 rounded-full border border-foreground/20 flex items-center justify-center">
                          <File className="h-5 w-5 text-foreground/60" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground mb-1">{t.brief.comingSoon || "Coming Soon"}</p>
                          <p className="text-xs text-muted-foreground">{t.brief.comingSoonDesc || "Be the first to try Tracer when we launch"}</p>
                        </div>
                        <button onClick={() => { setShowComingSoon(false); setIsWaitlistOpen(true) }} className="mt-2 px-5 py-2 text-xs font-medium tracking-wide uppercase bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
                          {t.header.joinWaitlist}
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="px-4 py-3 border-b border-zinc-200/80 dark:border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-medium tracking-wide text-foreground/80">{t.brief.docTitle}</span>
                      <span className="text-[9px] text-foreground/40">· Tracer</span>
                    </div>
                    <span className="text-[9px] px-2 py-0.5 bg-emerald-600 dark:bg-emerald-500/20 text-white dark:text-emerald-400 border border-emerald-600/30 dark:border-emerald-500/30 rounded font-medium">{t.brief.complete}</span>
                  </div>

                  <div className="px-4 py-3 border-b border-zinc-200/80 dark:border-white/[0.06]">
                    <h3 className="text-sm font-medium text-foreground mb-0.5">Mojtaba Tahani</h3>
                    <p className="text-[10px] text-foreground/50">University of Tehran · Aerospace Engineering · Scholar confirmed</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="text-[8px] px-1.5 py-0.5 bg-zinc-100 dark:bg-white/[0.05] text-foreground/50 rounded">89 publications</span>
                      <span className="text-[8px] px-1.5 py-0.5 bg-zinc-100 dark:bg-white/[0.05] text-foreground/50 rounded">h-index 24</span>
                      <span className="text-[8px] px-1.5 py-0.5 bg-zinc-100 dark:bg-white/[0.05] text-foreground/50 rounded">ORCID verified</span>
                    </div>
                  </div>

                  <div className="px-4 py-3 border-b border-zinc-200/80 dark:border-white/[0.06]">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-foreground/40 mb-2">{t.brief.screeningSignals}</p>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between py-1.5">
                        <span className="text-xs text-foreground/70">{t.brief.sanctionLists}</span>
                        <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 rounded font-medium"><CheckCircle2 className="h-2.5 w-2.5" />{t.brief.clear}</span>
                      </div>
                      <div className="flex items-center justify-between py-1.5 border-t border-zinc-100 dark:border-white/[0.04]">
                        <span className="text-xs text-foreground/70">{t.brief.corporateStructure}</span>
                        <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/25 rounded font-medium"><AlertTriangle className="h-2.5 w-2.5" />{t.brief.review}</span>
                      </div>
                      <div className="flex items-center justify-between py-1.5 border-t border-zinc-100 dark:border-white/[0.04]">
                        <span className="text-xs text-foreground/70">{t.brief.adverseMedia}</span>
                        <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 rounded font-medium"><CheckCircle2 className="h-2.5 w-2.5" />{t.brief.clear}</span>
                      </div>
                      <div className="flex items-center justify-between py-1.5 border-t border-zinc-100 dark:border-white/[0.04]">
                        <span className="text-xs text-foreground/70">{t.brief.academicNetwork}</span>
                        <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/25 rounded font-medium"><AlertTriangle className="h-2.5 w-2.5" />7 flags</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3 border-b border-zinc-200/80 dark:border-white/[0.06]">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-foreground/40 mb-2">{t.brief.summary}</p>
                    <p className="text-xs text-foreground/60 leading-relaxed">{t.brief.summaryText}</p>
                  </div>

                  <div className="px-4 py-3 bg-zinc-50 dark:bg-white/[0.02] flex items-center justify-between">
                    <span className="text-[9px] text-foreground/40">27 Mar 2026 · 10 {t.brief.sources} · 4 min 12 sec</span>
                    <button onClick={handleExport} disabled={isExporting} className="flex items-center gap-1.5 text-[10px] text-foreground/60 hover:text-foreground transition-colors disabled:opacity-50">
                      {isExporting ? <><Loader2 className="h-3 w-3 animate-spin" />{t.brief.exporting}</> : <><Download className="h-3 w-3" />{t.brief.exportPdf}</>}
                    </button>
                  </div>
                </div>
              </div>

              {/* Features under Brief */}
              <div className="mt-12 grid grid-cols-2 gap-px bg-border/30 border border-border/30 rounded-lg overflow-hidden">
                <div className="bg-background p-4 group hover:bg-muted/30 transition-colors duration-300">
                  <h4 className="text-xs font-medium text-foreground mb-1.5">{t.brief.features.sanctions}</h4>
                  <p className="text-[11px] text-muted-foreground font-light leading-relaxed">{t.brief.features.sanctionsDesc}</p>
                </div>
                <div className="bg-background p-4 group hover:bg-muted/30 transition-colors duration-300">
                  <h4 className="text-xs font-medium text-foreground mb-1.5">{t.brief.features.adverse}</h4>
                  <p className="text-[11px] text-muted-foreground font-light leading-relaxed">{t.brief.features.adverseDesc}</p>
                </div>
              </div>
            </div>

            {/* SECTION 2: Network Analysis */}
            <div className={`max-w-2xl mx-auto w-full transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Network Analysis</p>
              
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-lg shadow-zinc-300/30 dark:shadow-2xl dark:shadow-black/40 overflow-hidden">
                <div className="px-5 py-4 border-b border-zinc-200/80 dark:border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">Academic Network</span>
                    <span className="text-[9px] px-2 py-0.5 bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 rounded font-medium">7 flags</span>
                  </div>
                  <p className="text-xs text-foreground/60 mt-2">
                    <span className="font-medium text-foreground/80">89 publications analyzed</span>
                    <span className="text-foreground/40"> (2016–2026). </span>
                    <span className="font-medium text-foreground/80">23 publications (26%)</span>
                    <span className="text-foreground/40"> involve co-authors at flagged institutions.</span>
                  </p>
                </div>

                <div className="px-5 py-3">
                  <div className="grid grid-cols-12 gap-2 text-[9px] uppercase tracking-[0.15em] text-foreground/40 pb-2 border-b border-zinc-100 dark:border-white/[0.04]">
                    <div className="col-span-3">Name</div>
                    <div className="col-span-4">Institution</div>
                    <div className="col-span-2">List</div>
                    <div className="col-span-1 text-center">Papers</div>
                    <div className="col-span-2 text-right">Last</div>
                  </div>
                  {coAuthors.map((row, i) => (
                    <div key={i} className="grid grid-cols-12 gap-2 py-2 text-[11px] border-b border-zinc-50 dark:border-white/[0.02] last:border-0">
                      <div className="col-span-3 text-foreground/80 truncate">{row.name}</div>
                      <div className="col-span-4 text-foreground/50 truncate">{row.institution}</div>
                      <div className="col-span-2">
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${row.list === "NRO" ? "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20" : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"}`}>{row.list}</span>
                      </div>
                      <div className="col-span-1 text-center text-foreground/60">{row.papers}</div>
                      <div className="col-span-2 text-right text-foreground/60">{row.last}</div>
                    </div>
                  ))}
                </div>

                <div className="px-5 py-4 border-t border-zinc-200/80 dark:border-white/[0.06] bg-zinc-50/50 dark:bg-white/[0.01]">
                  <p className="text-[9px] uppercase tracking-[0.15em] text-foreground/40 mb-3">Network Timeline — Flagged co-authorships per year</p>
                  <div className="space-y-1.5">
                    {timelineData.map((bar) => (
                      <div key={bar.year} className="flex items-center gap-3">
                        <span className="text-[10px] text-foreground/40 w-8">{bar.year}</span>
                        <div className="flex-1 h-3 bg-zinc-100 dark:bg-white/[0.03] rounded-sm overflow-hidden">
                          <div className="h-full bg-amber-500/60 dark:bg-amber-500/40 rounded-sm" style={{ width: bar.width }} />
                        </div>
                        <span className="text-[10px] text-foreground/50 w-32 text-right">{bar.count} flagged co-authorship{bar.count !== 1 ? "s" : ""}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[9px] text-foreground/30 mt-3 italic">Coverage note: Screening limited to OpenAlex and Google Scholar.</p>
                </div>
              </div>

              {/* Features under Network */}
              <div className="mt-6 grid grid-cols-2 gap-px bg-border/30 border border-border/30 rounded-lg overflow-hidden">
                <div className="bg-background p-4 group hover:bg-muted/30 transition-colors duration-300">
                  <h4 className="text-xs font-medium text-foreground mb-1.5">{t.brief.features.academic}</h4>
                  <p className="text-[11px] text-muted-foreground font-light leading-relaxed">{t.brief.features.academicDesc}</p>
                </div>
                <div className="bg-background p-4 group hover:bg-muted/30 transition-colors duration-300">
                  <h4 className="text-xs font-medium text-foreground mb-1.5">{t.brief.features.export}</h4>
                  <p className="text-[11px] text-muted-foreground font-light leading-relaxed">{t.brief.features.exportDesc}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </section>
  )
}
