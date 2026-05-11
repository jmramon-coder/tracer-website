"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Activity,
  FileCheck2,
  Gauge,
  SearchCheck,
  ShieldCheck,
  UsersRound,
} from "lucide-react"
import { trackEvent } from "@/lib/analytics"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

const slideAssets = [
  {
    id: "home",
    image: "/brand/tracer-platform-home.png",
    icon: SearchCheck,
  },
  {
    id: "screening-monitoring",
    image: null,
    icon: Activity,
  },
  {
    id: "case-entities",
    image: null,
    icon: UsersRound,
  },
  {
    id: "report-audit",
    image: null,
    icon: FileCheck2,
  },
] as const

const valueIcons = [Gauge, ShieldCheck, UsersRound, FileCheck2] as const

const copy = {
  en: {
    eyebrow: "Platform experience",
    title: "A workspace built for research security due diligence.",
    description:
      "Tracer helps universities screen research partners across the full spectrum of security risks so great science can move forward with confidence.",
    slides: [
      {
        label: "Home",
        title: "Start from the work your team already needs to do.",
        description:
          "Launch individual or organization screening, review recent cases, and keep research security operations moving from one clear home.",
        alt: "Tracer home workspace with individual and organization screening modules.",
      },
      {
        label: "Screening",
        title: "Monitor every screening run while work is moving.",
        description:
          "Track running, completed, and attention-needed work without losing context.",
        alt: "Tracer screening and monitoring workspace placeholder.",
      },
      {
        label: "Case",
        title: "Keep each case, entity, and review path organized.",
        description:
          "Connect people, organizations, affiliations, notes, and audit history inside one case view.",
        alt: "Tracer case and entities workspace placeholder.",
      },
      {
        label: "Report",
        title: "Render cited reports with audit-ready context.",
        description:
          "Prepare report cards, source handling, verdict matrices, and export-ready evidence.",
        alt: "Tracer report and audit workspace placeholder.",
      },
    ],
    values: [
      {
        label: "Speed",
        title: "Five minutes.",
        detail: "Not five days.",
      },
      {
        label: "Consistency",
        title: "Every output.",
        detail: "The same standard.",
      },
      {
        label: "Collaboration",
        title: "Clear the path",
        detail: "to great science.",
      },
      {
        label: "Output",
        title: "Export-ready.",
        detail: "Audit-ready.",
      },
    ],
    note: "Structured review from profile intake to cited screening card.",
  },
  fr: {
    eyebrow: "Experience plateforme",
    title: "La plateforme",
    description:
      "Un espace de travail pour les vérifications diligentes en sécurité de la recherche. Tracer aide les universités à vérifier leurs partenaires de recherche sur tout le spectre des risques de sécurité afin que la science puisse progresser avec confiance.",
    slides: [
      {
        label: "Accueil",
        title: "Commencez par le travail que votre équipe doit déjà faire.",
        description:
          "Lancez la vérification des personnes ou des organisations, suivez les dossiers récents et gardez les opérations de sécurité de la recherche en mouvement.",
        alt: "Espace d'accueil Tracer avec les modules de vérification individuelle et organisationnelle.",
      },
      {
        label: "Vérification",
        title: "Suivez chaque vérification pendant que le travail avance.",
        description:
          "Suivez les travaux en cours, terminés et à revoir sans perdre le contexte.",
        alt: "Espace Tracer de vérification et suivi en préparation.",
      },
      {
        label: "Dossier",
        title: "Gardez chaque dossier, entité et parcours de revue organisé.",
        description:
          "Reliez personnes, organisations, affiliations, notes et historique d'audit dans une seule vue.",
        alt: "Espace Tracer de dossiers et entités en préparation.",
      },
      {
        label: "Rapport",
        title: "Générez des rapports cités avec un contexte prêt pour l'audit.",
        description:
          "Préparez fiches de rapport, sources, matrices de verdicts et preuves exportables.",
        alt: "Espace Tracer de rapport et audit en préparation.",
      },
    ],
    values: [
      {
        label: "Vitesse",
        title: "Cinq minutes.",
        detail: "Pas cinq jours.",
      },
      {
        label: "Constance",
        title: "Chaque résultat.",
        detail: "Le même standard.",
      },
      {
        label: "Collaboration",
        title: "Collaborez en toute confiance,",
        detail: "faites avancer la science.",
      },
      {
        label: "Rapport",
        title: "Prêt à exporter.",
        detail: "Prêt pour l'audit.",
      },
    ],
    note: "Une revue structurée, de l'admission au rapport cité.",
  },
} as const

export function PlatformShowcaseCarousel() {
  const { language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const content = copy[language]
  const showShowcaseControls = false

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slideAssets.length)
    }, 5600)

    return () => window.clearInterval(timer)
  }, [isAutoPlaying])

  const selectSlide = (index: number) => {
    const slide = content.slides[index]

    trackEvent("platform_showcase_select", {
      slide_id: slideAssets[index].id,
      slide_label: slide.label,
      slide_index: index + 1,
      language,
    })
    setActiveIndex(index)
    setIsAutoPlaying(false)
  }

  const toggleAutoPlay = () => {
    const nextState = isAutoPlaying ? "paused" : "started"

    trackEvent("platform_showcase_autoplay_toggle", {
      autoplay_state: nextState,
      language,
    })
    setIsAutoPlaying((value) => !value)
  }

  return (
    <section className="overflow-hidden bg-card shadow-[var(--surface-shadow)]">
      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-8 md:py-28">
        <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
              {content.title}
            </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            {content.description}
          </p>
        </div>

        <div className="mt-12 animate-[platform-showcase-rise_900ms_ease-out_both] md:mt-16">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_214px] lg:items-center xl:grid-cols-[minmax(0,1fr)_228px]">
            <div className="relative w-[150vw] max-w-none md:w-auto">
              <div className="relative overflow-hidden rounded-[24px] border border-border/80 bg-background p-2 shadow-[0_46px_130px_rgba(15,23,42,0.18)] md:rounded-[26px] md:p-3 dark:shadow-[0_46px_130px_rgba(0,0,0,0.44)]">
                <div className="relative aspect-[1911/927] overflow-hidden rounded-[18px] bg-surface-subtle md:rounded-[20px]">
                  {slideAssets.map((asset, index) => {
                    const slide = content.slides[index]

                    return asset.image ? (
                      <Image
                        key={asset.id}
                        src={asset.image}
                        alt={slide.alt}
                        fill
                        sizes="(min-width: 1280px) 1200px, calc(100vw - 48px)"
                        priority={index === 0}
                        className={cn(
                          "object-cover object-left-top transition-opacity duration-700 ease-out",
                          index === activeIndex
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    ) : (
                      <div
                        key={asset.id}
                        className={cn(
                          "absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,var(--surface-subtle),var(--background))] transition-opacity duration-700 ease-out",
                          index === activeIndex
                            ? "opacity-100"
                            : "pointer-events-none opacity-0"
                        )}
                      >
                        <div className="mx-auto flex max-w-lg items-center gap-4 px-8 text-left">
                          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                            <Image
                              src="/brand/tracer-labs-v2.png"
                              alt=""
                              width={44}
                              height={44}
                              className="h-10 w-10 object-contain"
                            />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2459B8]">
                              Tracer Labs
                            </p>
                            <h3 className="mt-2 text-3xl font-semibold tracking-tight">
                              {slide.label}
                            </h3>
                            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                              {language === "fr"
                                ? "Mockup en préparation pour une surface de revue plus complète."
                                : "Mockup in preparation for a fuller review surface."}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                  <div className="pointer-events-none absolute inset-0 rounded-[18px] ring-1 ring-inset ring-white/35 md:rounded-[20px] dark:ring-white/12" />
                </div>
              </div>

              {showShowcaseControls ? (
              <div className="relative z-20 mt-5 flex justify-center px-4">
                <div className="inline-flex max-w-full rounded-full border border-border/80 bg-card/90 p-2 shadow-[var(--floating-shadow)] backdrop-blur-2xl">
                  <div className="flex max-w-full items-center gap-2">
                    <div className="resource-scrollbar-hide flex min-w-0 items-center gap-2 overflow-x-auto">
                      {slideAssets.map((asset, index) => {
                        const Icon = asset.icon
                        const slide = content.slides[index]

                        return (
                          <button
                            key={asset.id}
                            type="button"
                            onClick={() => selectSlide(index)}
                            className={cn(
                              "inline-flex h-9 shrink-0 items-center gap-2 rounded-full px-3 text-xs font-medium transition-colors",
                              index === activeIndex
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                          >
                            <Icon className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">{slide.label}</span>
                          </button>
                        )
                      })}
                    </div>
                    <button
                      type="button"
                      onClick={toggleAutoPlay}
                      aria-label={
                        isAutoPlaying
                          ? language === "fr"
                            ? "Mettre en pause la boucle des écrans"
                            : "Pause app screen loop"
                          : language === "fr"
                            ? "Démarrer la boucle des écrans"
                            : "Start app screen loop"
                      }
                      aria-pressed={isAutoPlaying}
                      className={cn(
                        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/60 transition-colors hover:bg-muted",
                        isAutoPlaying
                          ? "bg-[#2459B8]/10 text-[#2459B8]"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <Image
                        src="/brand/tracer-labs-v2.png"
                        alt=""
                        width={28}
                        height={28}
                        className={cn(
                          "h-5 w-5 object-contain",
                          isAutoPlaying && "animate-[labs-disc-spin_1.6s_linear_infinite]"
                        )}
                      />
                    </button>
                    <span className="hidden h-9 shrink-0 items-center rounded-full border border-border/70 bg-background px-3 font-mono text-xs font-semibold text-muted-foreground sm:inline-flex">
                      {String(activeIndex + 1).padStart(2, "0")} / {String(slideAssets.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
              ) : null}
            </div>

            <aside className="grid gap-3 lg:-mt-14 xl:-mt-16">
              {content.values.map((value, index) => {
                const Icon = valueIcons[index]

                return (
                  <article
                    key={value.label}
                    className={cn(
                      "rounded-[18px] border border-border/80 bg-card/88 p-3 shadow-[var(--floating-shadow)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1",
                      "lg:animate-[platform-value-float_6s_ease-in-out_infinite]"
                    )}
                    style={{ animationDelay: `${index * 0.18}s` }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {value.label}
                      </span>
                    </div>
                    <p className="mt-4 text-lg font-semibold tracking-tight xl:text-xl">
                      {value.title}
                      <span className="block text-muted-foreground">{value.detail}</span>
                    </p>
                  </article>
                )
              })}
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
