"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Search, User, Building2, Users, AlertTriangle, CheckCircle2, ArrowRight, Shield, Network, FileWarning, FileText, Download } from "lucide-react"

type Step = "search" | "resolution" | "case" | "sanctions" | "network" | "adverse" | "export"

const steps = [
  { id: "search", label: "Search", description: "Enter entity details to begin screening" },
  { id: "resolution", label: "Identity", description: "AI-powered identity resolution" },
  { id: "case", label: "Case View", description: "Review confirmed individual profile" },
  { id: "sanctions", label: "Sanctions", description: "Check against global sanctions lists" },
  { id: "network", label: "Network", description: "Analyze academic collaborations" },
  { id: "adverse", label: "Signals", description: "Surface adverse media findings" },
  { id: "export", label: "Export", description: "Generate decision-ready report" },
]

export function Preview() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState<Step>("search")
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setIsAutoPlaying(true), 1500)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const stepOrder: Step[] = ["search", "resolution", "case", "sanctions", "network", "adverse", "export"]
    const currentIndex = stepOrder.indexOf(currentStep)
    
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % stepOrder.length
      setCurrentStep(stepOrder[nextIndex])
      setShowTooltip(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [currentStep, isAutoPlaying])

  const handleStepClick = useCallback((step: Step) => {
    setIsAutoPlaying(false)
    setCurrentStep(step)
    setShowTooltip(true)
  }, [])

  const currentStepInfo = steps.find(s => s.id === currentStep)

  return (
    <section className="py-32 md:py-48 bg-muted/20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
            The Platform
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
            <span className="font-sans font-extralight">Intelligence,</span>
            {" "}
            <span className="font-sans font-medium">simplified</span>
          </h2>
        </div>

        {/* Step indicators */}
        <div className="flex justify-center gap-1 md:gap-2 mb-8 flex-wrap">
          {steps.map((step, i) => (
            <button
              key={step.id}
              onClick={() => handleStepClick(step.id as Step)}
              className={`group flex items-center gap-2 px-3 py-2 text-xs tracking-wide transition-all duration-300 ${
                currentStep === step.id 
                  ? "bg-foreground text-background" 
                  : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <span className="font-mono text-[10px] opacity-50">{String(i + 1).padStart(2, '0')}</span>
              <span className="hidden sm:inline">{step.label}</span>
            </button>
          ))}
        </div>

        {/* Mock UI Preview */}
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Browser chrome */}
            <div className="bg-background border border-border shadow-2xl shadow-foreground/5">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-border" />
                  <div className="h-2.5 w-2.5 rounded-full bg-border" />
                  <div className="h-2.5 w-2.5 rounded-full bg-border" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 bg-muted/50 text-[10px] tracking-wider text-muted-foreground font-mono">
                    app.tracer.security
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Search className="h-3.5 w-3.5 text-muted-foreground/50" />
                  <div className="h-5 w-5 rounded-full bg-foreground/10" />
                </div>
              </div>

              {/* App content - dynamic based on step */}
              <div className="relative bg-background min-h-[500px] sm:min-h-[450px] md:min-h-[520px] overflow-hidden">
                {/* Step content */}
                <div className="h-full">
                  {currentStep === "search" && <SearchStep />}
                  {currentStep === "resolution" && <ResolutionStep />}
                  {currentStep === "case" && <CaseStep />}
                  {currentStep === "sanctions" && <SanctionsStep />}
                  {currentStep === "network" && <NetworkStep />}
                  {currentStep === "adverse" && <AdverseStep />}
                  {currentStep === "export" && <ExportStep />}
                </div>

                {/* Floating tooltip - hidden on mobile */}
                <div 
                  className={`hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-500 z-10 ${
                    showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="bg-foreground text-background px-5 py-3 shadow-lg max-w-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-medium">{currentStepInfo?.label}</p>
                        <p className="text-[10px] opacity-70">{currentStepInfo?.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-3 -right-3 h-full w-full border border-border/20 -z-10" />
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-8 gap-1.5">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`h-1 transition-all duration-500 ${
                currentStep === step.id ? "w-8 bg-foreground" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Step Components

function SearchStep() {
  return (
    <div className="p-8 md:p-12 flex flex-col items-center justify-center h-full animate-in fade-in duration-500">
      <div className="text-center mb-8">
        <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
          Search workspace
        </p>
        <h3 className="text-xl md:text-2xl font-light tracking-tight">
          Who or what are you screening?
        </h3>
        <p className="text-xs text-muted-foreground mt-2 max-w-md mx-auto">
          Look up a researcher or an organization. Bundle several targets into one case.
        </p>
      </div>

      {/* Entity type buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {[
          { icon: User, label: "Researcher", active: true },
          { icon: Users, label: "Students", active: false },
          { icon: Building2, label: "Institution", active: false },
          { icon: Building2, label: "Organization", active: false },
        ].map(({ icon: Icon, label, active }) => (
          <div
            key={label}
            className={`flex items-center gap-2 px-4 py-2 text-xs transition-all ${
              active 
                ? "bg-foreground/5 text-foreground border border-foreground/20" 
                : "bg-transparent text-muted-foreground border border-border"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Form fields */}
      <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="space-y-1.5">
          <label className="text-[10px] text-muted-foreground uppercase tracking-wider">Full name</label>
          <div className="h-9 border border-border bg-background px-3 flex items-center">
            <span className="text-xs text-muted-foreground">e.g. John Smith</span>
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] text-muted-foreground uppercase tracking-wider">Affiliation</label>
          <div className="h-9 border border-border bg-background px-3 flex items-center">
            <span className="text-xs text-muted-foreground">e.g. Harbin Institute</span>
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] text-muted-foreground uppercase tracking-wider">Country</label>
          <div className="h-9 border border-border bg-background px-3 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Select country</span>
            <svg className="h-3 w-3 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-foreground text-background px-6 py-2.5 text-xs tracking-wide flex items-center gap-2">
          <Search className="h-3.5 w-3.5" />
          Screen entity
        </div>
      </div>
    </div>
  )
}

function ResolutionStep() {
  const [showSecond, setShowSecond] = useState(false)
  const [showSelection, setShowSelection] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowSecond(true), 800)
    const t2 = setTimeout(() => setShowSelection(true), 1600)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 h-full animate-in fade-in duration-500">
      {/* Left panel - results */}
      <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-border/40 p-4 md:p-6">
        <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
          Identity confirmation
        </p>
        
        <div className="space-y-3">
          {/* Result 1 */}
          <div className={`border border-foreground/20 bg-foreground/[0.02] p-4 transition-all duration-500 ${showSelection ? 'ring-1 ring-foreground' : ''}`}>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-green-500 rounded-full" />
                <span className="text-sm font-medium">John Smith</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-muted text-muted-foreground font-mono">97%</span>
            </div>
            <p className="text-[11px] text-muted-foreground">
              CN · University Harbin, Heilongjiang
            </p>
          </div>

          {/* Result 2 */}
          <div className={`border border-border p-4 transition-all duration-500 ${showSecond ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-muted-foreground rounded-full" />
                <span className="text-sm text-muted-foreground">John Smith</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-muted text-muted-foreground font-mono">82%</span>
            </div>
            <p className="text-[11px] text-muted-foreground/70">
              US · MIT, Massachusetts
            </p>
          </div>
        </div>

        {showSelection && (
          <div className="mt-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <p className="text-[10px] text-muted-foreground mb-2">User selects between potential matches</p>
            <div className="h-px bg-border w-full" />
          </div>
        )}
      </div>

      {/* Right panel - case preview */}
      <div className="md:col-span-7 p-6">
        <div className="border border-border p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Case</span>
            <span className="text-[10px] font-mono text-muted-foreground">ID-2024-0847</span>
          </div>
          
          <div className="space-y-2">
            {["Harbin Institute of Technology", "John Smith", "Research Partners Ltd"].map((entity, i) => (
              <div key={i} className="border border-border/60 p-3 flex items-center justify-between">
                <span className="text-xs">{entity}</span>
                <div className={`h-2 w-2 ${i === 0 ? 'bg-foreground/20' : 'bg-transparent border border-border'}`} />
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-border/40">
            <div className="flex items-center gap-2 text-xs">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium">Case is OPEN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CaseStep() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 h-full animate-in fade-in duration-500">
      {/* Sidebar */}
      <div className="hidden md:block md:col-span-3 border-r border-border/40 p-5 space-y-6">
        <div>
          <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Navigate</p>
          <div className="border border-border px-3 py-2 flex items-center gap-2">
            <Search className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Search</span>
          </div>
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Case history</p>
          <p className="text-[10px] text-muted-foreground/70 leading-relaxed">
            No cases yet. Use Search to start one or load the partner template.
          </p>
        </div>

        <div className="pt-4 border-t border-border/30">
          <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Tools</p>
          <div className="space-y-2">
            <div className="border border-border px-3 py-2 text-xs text-center">Report</div>
            <div className="border border-border px-3 py-2 text-xs text-center">Documents</div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="col-span-1 md:col-span-9 p-4 md:p-6">
        {/* Profile header */}
        <div className="mb-6">
          <h3 className="text-xl font-light mb-2">John Smith</h3>
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
            <span>Individual</span>
            <span className="h-1 w-1 bg-border rounded-full" />
            <span>Harbin Institute of Technology</span>
            <span className="h-1 w-1 bg-border rounded-full" />
            <span>China</span>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-[10px] px-2 py-1 border border-border">ORCID: 0000-0000-0000-0000</span>
            <span className="text-[10px] px-2 py-1 border border-border">GIRD verified</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-6 border-b border-border pb-3 mb-6">
          <div className="text-xs font-medium border-b-2 border-foreground pb-3 -mb-3.5">Sanctions</div>
          <div className="text-xs text-red-500 flex items-center gap-1.5">
            2 Flags
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
            </span>
          </div>
        </div>

        {/* Content placeholder */}
        <div className="border-l-2 border-red-500/30 pl-4">
          <div className="flex items-center gap-2 text-red-500 mb-2">
            <AlertTriangle className="h-4 w-4" />
            <span className="text-xs font-medium">Sanctions</span>
          </div>
          <p className="text-sm">
            Subject is affiliated with <span className="font-medium">Harbin Institute of Technology</span>
          </p>
        </div>
      </div>
    </div>
  )
}

function SanctionsStep() {
  const [checkedItems, setCheckedItems] = useState<number[]>([])

  const lists = [
    { name: "SEMA", jurisdiction: "Canada", status: "clear" },
    { name: "OFAC SDN", jurisdiction: "United States", status: "clear" },
    { name: "EU CFSP", jurisdiction: "European Union", status: "clear" },
    { name: "UN Security Council", jurisdiction: "International", status: "clear" },
    { name: "UK OFSI", jurisdiction: "United Kingdom", status: "clear" },
    { name: "BIS Entity List", jurisdiction: "United States", status: "hit" },
  ]

  useEffect(() => {
    const items = [0, 1, 2, 3, 4, 5]
    items.forEach((item, i) => {
      setTimeout(() => {
        setCheckedItems(prev => [...prev, item])
      }, i * 400)
    })
  }, [])

  return (
    <div className="p-6 md:p-10 animate-in fade-in duration-500">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="h-5 w-5" />
        <div>
          <h3 className="text-lg font-light">Sanctions Screening</h3>
          <p className="text-[11px] text-muted-foreground">Checking against global sanctions and restricted party lists</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {lists.map((list, i) => (
          <div 
            key={list.name}
            className={`border p-4 transition-all duration-300 ${
              checkedItems.includes(i) 
                ? list.status === "hit" 
                  ? "border-red-500/50 bg-red-500/5" 
                  : "border-green-500/30 bg-green-500/5"
                : "border-border opacity-50"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium">{list.name}</p>
                <p className="text-[10px] text-muted-foreground">{list.jurisdiction}</p>
              </div>
              {checkedItems.includes(i) && (
                <div className={`animate-in zoom-in duration-200 ${list.status === "hit" ? "text-red-500" : "text-green-500"}`}>
                  {list.status === "hit" ? (
                    <AlertTriangle className="h-4 w-4" />
                  ) : (
                    <CheckCircle2 className="h-4 w-4" />
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function NetworkStep() {
  const [animating, setAnimating] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setAnimating(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="p-6 md:p-10 animate-in fade-in duration-500">
      <div className="flex items-center gap-3 mb-6">
        <Network className="h-5 w-5" />
        <div>
          <h3 className="text-lg font-light">Academic Network Analysis</h3>
          <p className="text-[11px] text-muted-foreground">Mapping research collaborations and institutional connections</p>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-6">
        {/* Stats */}
        <div className="md:col-span-4 space-y-4">
          <div className="border border-border p-4">
            <p className="text-2xl font-light">47</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">publications</p>
          </div>
          <div className="border border-border p-4">
            <p className="text-2xl font-light">23</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">collaborators</p>
          </div>
          <div className="border border-border p-4">
            <p className="text-2xl font-light">8</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">institutions</p>
          </div>
        </div>

        {/* Network visualization */}
        <div className="md:col-span-8 border border-border p-6 flex items-center justify-center min-h-[280px] relative overflow-hidden">
          {animating ? (
            <p className="text-xs text-muted-foreground">Processing network graph...</p>
          ) : (
            <NetworkGraph />
          )}
        </div>
      </div>
    </div>
  )
}

function NetworkGraph() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 200">
      {/* Connections */}
      <line x1="200" y1="100" x2="100" y2="50" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" className="animate-in fade-in duration-1000" />
      <line x1="200" y1="100" x2="300" y2="50" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" className="animate-in fade-in duration-1000 delay-100" />
      <line x1="200" y1="100" x2="80" y2="130" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" className="animate-in fade-in duration-1000 delay-200" />
      <line x1="200" y1="100" x2="320" y2="130" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" className="animate-in fade-in duration-1000 delay-300" />
      <line x1="200" y1="100" x2="150" y2="170" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" className="animate-in fade-in duration-1000 delay-400" />
      <line x1="200" y1="100" x2="250" y2="170" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" className="animate-in fade-in duration-1000 delay-500" />
      
      {/* Nodes */}
      <circle cx="200" cy="100" r="12" fill="currentColor" className="animate-in zoom-in duration-500" />
      <circle cx="100" cy="50" r="6" fill="currentColor" fillOpacity="0.3" className="animate-in zoom-in duration-500 delay-100" />
      <circle cx="300" cy="50" r="5" fill="currentColor" fillOpacity="0.2" className="animate-in zoom-in duration-500 delay-200" />
      <circle cx="80" cy="130" r="4" fill="currentColor" fillOpacity="0.2" className="animate-in zoom-in duration-500 delay-300" />
      <circle cx="320" cy="130" r="5" fill="currentColor" fillOpacity="0.25" className="animate-in zoom-in duration-500 delay-400" />
      <circle cx="150" cy="170" r="8" fill="#ef4444" fillOpacity="0.8" className="animate-in zoom-in duration-500 delay-500" />
      <circle cx="250" cy="170" r="4" fill="currentColor" fillOpacity="0.2" className="animate-in zoom-in duration-500 delay-600" />
    </svg>
  )
}

function AdverseStep() {
  const [checkedItems, setCheckedItems] = useState<number[]>([])

  const categories = [
    { name: "Media Coverage", status: "clear" },
    { name: "Legal Records", status: "clear" },
    { name: "Corporate Filings", status: "clear" },
    { name: "Military Ties", status: "hit" },
    { name: "Government Links", status: "clear" },
    { name: "Academic Misconduct", status: "clear" },
  ]

  useEffect(() => {
    const items = [0, 1, 2, 3, 4, 5]
    items.forEach((item, i) => {
      setTimeout(() => {
        setCheckedItems(prev => [...prev, item])
      }, i * 350)
    })
  }, [])

  return (
    <div className="p-6 md:p-10 animate-in fade-in duration-500">
      <div className="flex items-center gap-3 mb-6">
        <FileWarning className="h-5 w-5" />
        <div>
          <h3 className="text-lg font-light">Adverse Signal Screening</h3>
          <p className="text-[11px] text-muted-foreground">Scanning for risk indicators across multiple sectors</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {categories.map((category, i) => (
          <div 
            key={category.name}
            className={`border p-4 transition-all duration-300 ${
              checkedItems.includes(i)
                ? category.status === "hit"
                  ? "border-red-500/50 bg-red-500/5"
                  : "border-green-500/30 bg-green-500/5"
                : "border-border opacity-50"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm">{category.name}</span>
              {checkedItems.includes(i) && (
                <span className={`text-[10px] px-2 py-0.5 animate-in zoom-in duration-200 ${
                  category.status === "hit" 
                    ? "bg-red-500/10 text-red-500" 
                    : "bg-green-500/10 text-green-500"
                }`}>
                  {category.status === "hit" ? "Flagged" : "Clear"}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ExportStep() {
  const [showReport, setShowReport] = useState(false)
  const [showSections, setShowSections] = useState<number[]>([])

  useEffect(() => {
    const t1 = setTimeout(() => setShowReport(true), 300)
    const sections = [0, 1, 2, 3, 4]
    sections.forEach((section, i) => {
      setTimeout(() => {
        setShowSections(prev => [...prev, section])
      }, 600 + i * 300)
    })
    return () => clearTimeout(t1)
  }, [])

  return (
    <div className="p-6 md:p-10 animate-in fade-in duration-500">
      <div className="flex items-center gap-3 mb-6">
        <FileText className="h-5 w-5" />
        <div>
          <h3 className="text-lg font-light">Export Report</h3>
          <p className="text-[11px] text-muted-foreground">Generate a professional, decision-ready security brief</p>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-6">
        {/* Export options */}
        <div className="md:col-span-4 space-y-3">
          <div className="border border-foreground/20 bg-foreground/[0.02] p-4">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="h-4 w-4" />
              <span className="text-sm font-medium">PDF Report</span>
            </div>
            <p className="text-[10px] text-muted-foreground">Professional format for decision-makers</p>
          </div>
          <div className="border border-border p-4 opacity-50">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="h-4 w-4" />
              <span className="text-sm">Word Document</span>
            </div>
            <p className="text-[10px] text-muted-foreground">Editable format for annotations</p>
          </div>
          <div className="bg-foreground text-background px-4 py-3 flex items-center justify-center gap-2 text-xs mt-4">
            <Download className="h-3.5 w-3.5" />
            Download Report
          </div>
        </div>

        {/* Report preview - light theme for contrast */}
        <div className="md:col-span-8">
          <div 
            className={`bg-zinc-100 text-zinc-900 border border-zinc-300 shadow-lg transition-all duration-500 ${
              showReport ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* Report header */}
            <div className="px-6 py-4 border-b-2 border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-zinc-900 rotate-45" />
                <span className="text-xs font-mono tracking-wider text-zinc-900">Tracer</span>
              </div>
              <div className="text-right">
                <p className="text-[8px] uppercase tracking-[0.2em] text-zinc-500">Research Security Brief</p>
                <p className="text-[10px] font-mono text-zinc-500">2026-03-22</p>
              </div>
            </div>

            {/* Entity block */}
            <div className={`px-6 py-4 border-b border-zinc-300 transition-all duration-300 ${
              showSections.includes(0) ? "opacity-100" : "opacity-0"
            }`}>
              <h4 className="text-lg font-serif mb-1 text-zinc-900">John Smith</h4>
              <p className="text-[10px] text-zinc-500">
                Individual · Harbin Institute of Technology · China
              </p>
              <div className="flex gap-2 mt-2">
                <span className="text-[8px] px-2 py-0.5 border border-zinc-300 text-zinc-600">ORCID: 0000-0000-0000-0000</span>
                <span className="text-[8px] px-2 py-0.5 border border-green-400 bg-green-100 text-green-700">ORCID verified</span>
              </div>
            </div>

            {/* Sanctions section */}
            <div className={`px-6 py-3 border-b border-zinc-300 transition-all duration-300 ${
              showSections.includes(1) ? "opacity-100" : "opacity-0"
            }`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[8px] uppercase tracking-[0.2em] text-zinc-500">Sanctions & Restricted Lists</span>
                <span className="text-[8px] px-2 py-0.5 bg-red-100 text-red-600 border border-red-300">Flagged</span>
              </div>
              <div className="border-l-2 border-red-400 pl-3 py-1">
                <p className="text-[10px] text-red-600">Entity match on restricted party list</p>
                <p className="text-[9px] text-zinc-500">BIS Entity List · United States</p>
              </div>
            </div>

            {/* Academic network section */}
            <div className={`px-6 py-3 border-b border-zinc-300 transition-all duration-300 ${
              showSections.includes(2) ? "opacity-100" : "opacity-0"
            }`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[8px] uppercase tracking-[0.2em] text-zinc-500">Academic Network</span>
                <span className="text-[8px] px-2 py-0.5 bg-amber-100 text-amber-600 border border-amber-300">Review</span>
              </div>
              <p className="text-[10px] text-zinc-500">47 publications analyzed · 2 co-authors with NRO affiliations identified</p>
            </div>

            {/* Adverse signals section */}
            <div className={`px-6 py-3 border-b border-zinc-300 transition-all duration-300 ${
              showSections.includes(3) ? "opacity-100" : "opacity-0"
            }`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[8px] uppercase tracking-[0.2em] text-zinc-500">Adverse Media</span>
                <span className="text-[8px] px-2 py-0.5 bg-green-100 text-green-600 border border-green-300">Clear</span>
              </div>
              <p className="text-[10px] text-zinc-500">No adverse signals detected across 6 screening categories</p>
            </div>

            {/* Footer */}
            <div className={`px-6 py-3 bg-zinc-200 flex items-center justify-between transition-all duration-300 ${
              showSections.includes(4) ? "opacity-100" : "opacity-0"
            }`}>
              <span className="text-[8px] font-mono tracking-wider text-zinc-500">tracer.security</span>
              <span className="text-[8px] uppercase tracking-wider text-zinc-500">Confidential — Internal use only</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
