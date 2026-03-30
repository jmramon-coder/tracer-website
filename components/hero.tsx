"use client"

import { File, ChevronDown, CheckCircle2, AlertTriangle, XCircle, Users, Shield, Globe, BookOpen, Newspaper } from "lucide-react"

// Floating animation keyframes with CSS variable for delay
const floatingStyles = `
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
  animation-delay: var(--float-delay, 0s);
}
`
import { useEffect, useState } from "react"
import { WaitlistModal } from "@/components/waitlist-modal"
import { useLanguage } from "@/lib/language-context"

// Check badge types
type CheckType = "sanctions" | "academic" | "export" | "media"

const checkIcons: Record<CheckType, { icon: typeof Shield; label: string }> = {
  sanctions: { icon: Shield, label: "Sanctions" },
  academic: { icon: BookOpen, label: "Academic" },
  export: { icon: Globe, label: "Export" },
  media: { icon: Newspaper, label: "Media" }
}

// Mini check badge
function CheckBadge({ type, passed }: { type: CheckType; passed: boolean }) {
  const { icon: Icon } = checkIcons[type]
  return (
    <div 
      className={`flex items-center justify-center w-5 h-5 rounded ${
        passed 
          ? "bg-emerald-600/20 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400" 
          : "bg-red-500/20 text-red-500 dark:text-red-400"
      }`}
      title={checkIcons[type].label}
    >
      <Icon className="h-2.5 w-2.5" />
    </div>
  )
}

// Bottom brief card component with check badges
function BottomBriefCard({ 
  name, 
  institution, 
  status, 
  checks,
  rotation,
  offsetX,
  delay,
  isLoaded,
  floatDelay = 0
}: { 
  name: string
  institution: string
  status: "clear" | "review" | "risk"
  checks: { type: CheckType; passed: boolean }[]
  rotation: number
  offsetX: string
  delay: number
  isLoaded: boolean
  floatDelay?: number
}) {
  const statusConfig = {
    clear: { 
      icon: CheckCircle2, 
      label: "Clear", 
      bgClass: "bg-emerald-600 dark:bg-emerald-500/20", 
      textClass: "text-white dark:text-emerald-400",
      borderClass: "border-emerald-600/30 dark:border-emerald-500/30"
    },
    review: { 
      icon: AlertTriangle, 
      label: "Review", 
      bgClass: "bg-amber-500 dark:bg-amber-500/20", 
      textClass: "text-white dark:text-amber-400",
      borderClass: "border-amber-500/30 dark:border-amber-500/30"
    },
    risk: {
      icon: null,
      label: "Risk", 
      bgClass: "bg-red-500 dark:bg-red-500/20", 
      textClass: "text-white dark:text-red-400",
      borderClass: "border-red-500/30 dark:border-red-500/30"
    }
  }

  const config = statusConfig[status]
  const Icon = config.icon ?? null

  return (
    <div 
      className={`absolute bottom-0 z-30 transition-all duration-1000 ${
        isLoaded ? "opacity-80" : "opacity-0"
      }`}
      style={{ 
        transform: `rotate(${rotation}deg) translateY(${isLoaded ? 'calc(30% + 20px)' : '100%'})`,
        left: offsetX,
        transitionDelay: `${delay}ms`
      }}
    >
      <div 
        className={`w-28 sm:w-44 lg:w-52 p-2 sm:p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-xl shadow-zinc-300/50 dark:shadow-black/40 ${isLoaded ? 'animate-float' : ''}`}
        style={{ '--float-delay': `${floatDelay}s` } as React.CSSProperties}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <File className="h-2.5 sm:h-3.5 w-2.5 sm:w-3.5 text-muted-foreground" />
            <span className="text-[7px] sm:text-[9px] uppercase tracking-wider text-muted-foreground">Brief</span>
          </div>
          <span className={`flex items-center gap-0.5 sm:gap-1 text-[7px] sm:text-[9px] px-1 sm:px-1.5 py-0.5 ${config.bgClass} ${config.textClass} border ${config.borderClass} rounded font-medium`}>
            {Icon && <Icon className="h-2 sm:h-2.5 w-2 sm:w-2.5" />}
            {config.label}
          </span>
        </div>
        
        {/* Content */}
        <div className="space-y-0.5 sm:space-y-1.5">
          <p className="text-[10px] sm:text-sm font-medium text-foreground truncate">{name}</p>
          <p className="text-[8px] sm:text-xs text-muted-foreground truncate">{institution}</p>
        </div>
        
        {/* Check badges */}
        <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-0.5 sm:gap-1.5">
          {checks.map((check, i) => (
            <CheckBadge key={i} type={check.type} passed={check.passed} />
          ))}
        </div>
      </div>
    </div>
  )
}

// Case card with multiple avatars
function CaseCard({ 
  title, 
  avatarCount,
  status,
  rotation,
  offsetX,
  delay,
  isLoaded,
  floatDelay = 0
}: { 
  title: string
  avatarCount: number
  status: "clear" | "review" | "risk"
  rotation: number
  offsetX: string
  delay: number
  isLoaded: boolean
  floatDelay?: number
}) {
  const statusConfig = {
    clear: { 
      bgClass: "bg-emerald-600 dark:bg-emerald-500/20", 
      textClass: "text-white dark:text-emerald-400",
      borderClass: "border-emerald-600/30 dark:border-emerald-500/30"
    },
    review: { 
      bgClass: "bg-amber-500 dark:bg-amber-500/20", 
      textClass: "text-white dark:text-amber-400",
      borderClass: "border-amber-500/30 dark:border-amber-500/30"
    },
    risk: { 
      bgClass: "bg-red-500 dark:bg-red-500/20", 
      textClass: "text-white dark:text-red-400",
      borderClass: "border-red-500/30 dark:border-red-500/30"
    }
  }

  const config = statusConfig[status]
  const avatarColors = [
    "bg-blue-500", "bg-purple-500", "bg-pink-500", "bg-orange-500", "bg-cyan-500", "bg-green-500"
  ]

  return (
    <div 
      className={`absolute bottom-0 z-30 transition-all duration-1000 ${
        isLoaded ? "opacity-80" : "opacity-0"
      }`}
      style={{ 
        transform: `rotate(${rotation}deg) translateY(${isLoaded ? 'calc(30% + 20px)' : '100%'})`,
        left: offsetX,
        transitionDelay: `${delay}ms`
      }}
    >
      <div 
        className={`w-28 sm:w-44 lg:w-52 p-2 sm:p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-xl shadow-zinc-300/50 dark:shadow-black/40 ${isLoaded ? 'animate-float' : ''}`}
        style={{ animationDelay: isLoaded ? `${floatDelay}s` : undefined }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <Users className="h-2.5 sm:h-3.5 w-2.5 sm:w-3.5 text-muted-foreground" />
            <span className="text-[7px] sm:text-[9px] uppercase tracking-wider text-muted-foreground">Case</span>
          </div>
          <span className={`text-[7px] sm:text-[9px] px-1 sm:px-1.5 py-0.5 ${config.bgClass} ${config.textClass} border ${config.borderClass} rounded font-medium`}>
            {avatarCount}
          </span>
        </div>
        
        {/* Title */}
        <p className="text-[10px] sm:text-sm font-medium text-foreground truncate mb-2 sm:mb-3">{title}</p>
        
        {/* Avatar stack */}
        <div className="flex items-center">
          <div className="flex -space-x-1.5 sm:-space-x-2.5">
            {Array.from({ length: Math.min(avatarCount, 5) }).map((_, i) => (
              <div 
                key={i} 
                className={`w-5 sm:w-7 h-5 sm:h-7 rounded-full ${avatarColors[i % avatarColors.length]} border-2 border-white dark:border-zinc-900 flex items-center justify-center`}
              >
                <span className="text-[7px] sm:text-[9px] text-white font-medium">
                  {String.fromCharCode(65 + i)}
                </span>
              </div>
            ))}
            {avatarCount > 5 && (
              <div className="w-5 sm:w-7 h-5 sm:h-7 rounded-full bg-muted border-2 border-white dark:border-zinc-900 flex items-center justify-center">
                <span className="text-[7px] sm:text-[9px] text-muted-foreground font-medium">+{avatarCount - 5}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const { t } = useLanguage()

  const words = t.hero.words

  useEffect(() => {
    setIsLoaded(true)
    setDisplayText(words[0])
  }, [words])

  useEffect(() => {
    const currentWord = words[wordIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        } else {
          // Wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex, words])

  return (
    <section className="relative min-h-screen flex items-center justify-center">
        {/* Clean dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />

        {/* Floating animation styles */}
        <style>{floatingStyles}</style>

        {/* Bottom brief cards - boundary row - centered on mobile */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl">
          <BottomBriefCard
            name="Mojtaba Tahani"
            institution="University of Tehran"
            status="risk"
            checks={[
              { type: "sanctions", passed: true },
              { type: "export", passed: false },
              { type: "media", passed: true },
              { type: "academic", passed: false }
            ]}
            rotation={-6}
            offsetX="5%"
            delay={800}
            isLoaded={isLoaded}
            floatDelay={0}
          />

          <CaseCard
            title="NSERC Grant Review 2026"
            avatarCount={5}
            status="clear"
            rotation={2}
            offsetX="30%"
            delay={1000}
            isLoaded={isLoaded}
            floatDelay={0.5}
          />

          <BottomBriefCard
            name="Qiang Zhang"
            institution="Harbin Institute of Technology"
            status="risk"
            checks={[
              { type: "sanctions", passed: true },
              { type: "export", passed: false },
              { type: "academic", passed: true },
              { type: "media", passed: true }
            ]}
            rotation={-3}
            offsetX="52%"
            delay={1200}
            isLoaded={isLoaded}
            floatDelay={1}
          />

          <BottomBriefCard
            name="Lei Chen"
            institution="Beihang University"
            status="risk"
            checks={[
              { type: "sanctions", passed: true },
              { type: "export", passed: false },
              { type: "academic", passed: true },
              { type: "media", passed: true }
            ]}
            rotation={5}
            offsetX="74%"
            delay={1400}
            isLoaded={isLoaded}
            floatDelay={1.5}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center text-center">
            {/* Main Heading with typewriter word */}
            <h1 
              className={`text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] tracking-tight text-foreground transition-all duration-1000 delay-150 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="font-sans font-extralight block">{t.hero.screenResearch}</span>
              <span className="block mt-1 md:mt-2 h-[1.2em]">
                <span className="font-sans font-medium">{displayText}</span>
                <span className="inline-block w-[3px] h-[0.9em] bg-foreground/70 ml-1 animate-pulse" />
              </span>
              <span className="font-sans font-extralight block mt-1 md:mt-2 text-muted-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{t.hero.inMinutes}</span>
            </h1>

            {/* Subheading */}
            <p 
              className={`mt-10 max-w-xl text-lg md:text-xl text-muted-foreground font-light leading-relaxed tracking-wide transition-all duration-1000 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {t.hero.subtitle} <span className="inline-flex items-center gap-1.5"><span className="relative inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-600 dark:bg-emerald-500/20 border-0 dark:border dark:border-emerald-500/30 rounded-md"><File className="h-3.5 w-3.5 text-white dark:text-emerald-400 animate-pulse" /><span className="text-white dark:text-emerald-400 text-sm font-medium">{t.hero.decisionBrief}</span></span></span> {t.hero.subtitleEnd}
            </p>

            {/* Tagline */}
            <p 
              className={`mt-4 text-sm md:text-base text-foreground/80 font-medium tracking-wide transition-all duration-1000 delay-400 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {t.hero.tagline}
            </p>

            {/* CTA */}
            <div 
              className={`mt-12 flex flex-col sm:flex-row items-center gap-6 transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <button
                onClick={() => setIsWaitlistOpen(true)}
                className="px-10 py-4 text-sm tracking-widest uppercase font-medium rounded-lg
                  bg-foreground text-background
                  dark:shadow-[0_4px_20px_rgba(0,0,0,0.25),0_2px_6px_rgba(0,0,0,0.15)]
                  shadow-[0_4px_16px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.05)]
                  dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.35),0_4px_10px_rgba(0,0,0,0.2)]
                  hover:shadow-[0_6px_20px_rgba(0,0,0,0.12),0_3px_6px_rgba(0,0,0,0.08)]
                  hover:opacity-90
                  active:scale-[0.97] active:shadow-[0_2px_8px_rgba(0,0,0,0.1)]
                  transition-all duration-150 ease-out
                  cursor-pointer"
              >
                {t.header.joinWaitlist}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator with chevron and label */}
        <a 
          href="#value"
          className={`absolute bottom-24 lg:bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 cursor-pointer group z-20 ${
            isLoaded ? "opacity-40 hover:opacity-70" : "opacity-0"
          }`}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">
            {t.hero.viewMore}
          </span>
          <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors animate-bounce" />
        </a>

        {/* Waitlist Modal - rendered inside section but uses fixed positioning */}
        <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      </section>
  )
}
