"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { WaitlistButton } from "@/components/waitlist-button"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: "individual",
    label: "Individual",
    labelFr: "Individu",
    title: "Know who is behind the collaboration before the review starts.",
    titleFr: "Sachez qui se trouve derrière la collaboration avant le début de la revue.",
    description:
      "Resolve identity, affiliations, publication history, sanctions checks, adverse signals, and academic networks into one RSO-ready screening card.",
    descriptionFr:
      "Rassemblez identité, affiliations, historique de publications, listes de sanctions, signaux pertinents et réseaux académiques dans une fiche prête pour la revue RSO.",
    image: "/brand/screen-individuals.png",
    metrics: ["Identity resolved", "Academic network mapped", "Cited report ready"],
    metricsFr: ["Identité résolue", "Réseau académique cartographié", "Rapport cité prêt"],
  },
  {
    id: "organization",
    label: "Organization",
    labelFr: "Organisation",
    title: "Screen institutions, labs, and partner organizations with the same discipline.",
    titleFr: "Vérifiez institutions, laboratoires et organisations partenaires avec la même rigueur.",
    description:
      "Bring registries, parent entities, restricted-list context, institutional affiliations, and source-backed notes into a repeatable partnership review.",
    descriptionFr:
      "Regroupez registres, entités parentes, contexte de listes restreintes, affiliations institutionnelles et notes sourcées dans une revue de partenariat répétable.",
    image: "/brand/screening-organizations.png",
    metrics: ["Registry context", "Affiliations surfaced", "Audit trail preserved"],
    metricsFr: ["Contexte de registre", "Affiliations révélées", "Piste d'audit préservée"],
  },
] as const

export function ScreeningCtaCarousel() {
  const { language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSlide = slides[activeIndex]
  const isFrench = language === "fr"

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setActiveIndex((index) => (index === 0 ? slides.length - 1 : index - 1))
  }

  const goToNext = () => {
    setActiveIndex((index) => (index + 1) % slides.length)
  }

  return (
    <section className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[30px] bg-hero text-hero-foreground shadow-[var(--modal-shadow)]">
          <div className="relative min-h-[620px] lg:min-h-[680px]">
            {slides.map((slide, index) => (
              <Image
                key={slide.id}
                src={slide.image}
                alt=""
                fill
                sizes="(min-width: 1280px) 1180px, 100vw"
                className={cn(
                  "object-cover object-left-top transition-opacity duration-700 ease-out",
                  index === activeIndex ? "opacity-100" : "opacity-0"
                )}
              />
            ))}

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78),rgba(0,0,0,0.54)_44%,rgba(0,0,0,0.12)_78%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.42),transparent_45%)]" />

            <div className="relative z-10 flex min-h-[620px] flex-col p-6 sm:p-8 md:p-10 lg:min-h-[680px] lg:p-12">
              <div className="flex items-center justify-between gap-4">
                <div className="flex rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur-xl">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "rounded-full px-3 py-2 text-xs font-semibold transition-colors sm:px-4",
                        index === activeIndex
                          ? "bg-white text-hero"
                          : "text-white/58 hover:text-white"
                      )}
                    >
                      {isFrench ? slide.labelFr : slide.label}
                    </button>
                  ))}
                </div>

                <div className="hidden items-center gap-2 sm:flex">
                  <button
                    type="button"
                    onClick={goToPrevious}
                    aria-label={isFrench ? "Diapositive précédente" : "Previous screening slide"}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white hover:text-hero"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    aria-label={isFrench ? "Diapositive suivante" : "Next screening slide"}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white hover:text-hero"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid flex-1 gap-10 pt-12 lg:grid-cols-[minmax(0,0.95fr)_340px] lg:items-end xl:grid-cols-[minmax(0,0.95fr)_380px]">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/58">
                    {isFrench ? activeSlide.labelFr : activeSlide.label}
                  </p>
                  <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                    {isFrench ? activeSlide.titleFr : activeSlide.title}
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                    {isFrench ? activeSlide.descriptionFr : activeSlide.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {(isFrench ? activeSlide.metricsFr : activeSlide.metrics).map((metric) => (
                      <span
                        key={metric}
                        className="rounded-full border border-white/16 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/72 backdrop-blur-xl"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-start justify-end sm:items-center lg:items-end">
                  <Image
                    src="/brand/glass-logo-tracer.png"
                    alt=""
                    width={523}
                    height={478}
                    className="pointer-events-none h-auto w-40 -translate-y-[60px] -mb-[60px] opacity-95 drop-shadow-[0_24px_62px_rgba(0,0,0,0.48)] animate-[tracer-float_6s_ease-in-out_infinite] sm:w-48 lg:w-56 xl:w-60"
                  />
                  <WaitlistButton className="mt-3 h-12 bg-[#2459B8] px-6 text-white shadow-xl shadow-[#2459B8]/25 hover:bg-[#1E4C9D]">
                    {isFrench ? "Rejoindre la liste" : "Join waitlist now"}
                  </WaitlistButton>
                  <p className="mt-4 max-w-xs text-sm leading-6 text-white/54 sm:text-center lg:text-right">
                    {isFrench
                      ? "Accès anticipé pour les équipes de sécurité de la recherche, bureaux de subventions et responsables de revue institutionnelle."
                      : "Early access for research security teams, grant offices, and institutional review leaders."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
