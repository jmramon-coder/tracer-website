import type { Metadata } from "next"
import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Database,
  Download,
  FileCheck,
  FileText,
  Globe2,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { LocalizedText } from "@/components/localized-text"
import { PlatformShowcaseCarousel } from "@/components/platform-showcase-carousel"
import { ScreeningCtaCarousel } from "@/components/screening-cta-carousel"
import { WaitlistButton } from "@/components/waitlist-button"
import { platformModules } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Tracer screens research partnerships, collaborations, affiliations, networks, and risk signals into source-backed briefs for human review.",
}

const heroWords = [
  ["partnerships", "partenariats"],
  ["collaborations", "collaborations"],
  ["affiliations", "affiliations"],
  ["networks", "réseaux"],
  ["risks", "risques"],
] as const

const signalCards = [
  {
    icon: ShieldCheck,
    title: "Sanctions lists",
    titleFr: "Listes de sanctions",
    description: "Canadian, U.S., and international lists.",
    descriptionFr: "Listes canadiennes, américaines et internationales.",
  },
  {
    icon: Network,
    title: "Academic network",
    titleFr: "Réseau académique",
    description: "Co-authors, affiliations, and institutional ties.",
    descriptionFr: "Co-auteurs, affiliations et liens institutionnels.",
  },
  {
    icon: Globe2,
    title: "OSINT signals",
    titleFr: "Signaux OSINT",
    description: "Reputational signals, legal proceedings, adverse media, and academic retractions.",
    descriptionFr: "Signaux réputationnels, procédures juridiques, médias défavorables et rétractations académiques.",
  },
  {
    icon: Database,
    title: "Corporate structure",
    titleFr: "Structure corporative",
    description: "Parent entities, ownership, registries, and jurisdictional context.",
    descriptionFr: "Entités mères, propriété, registres et contexte juridictionnel.",
  },
]

const canadaCards = [
  {
    icon: Server,
    title: "Data hosted in Canada",
    titleFr: "Données hébergées au Canada",
    description:
      "Your research data stays on Canadian soil, meeting institutional sovereignty and compliance expectations.",
    descriptionFr:
      "Vos données de recherche restent sur le territoire canadien, conformément aux attentes de souveraineté et de conformité institutionnelles.",
  },
  {
    icon: FileCheck,
    title: "Risk Assessment Form integration",
    titleFr: "Intégration au formulaire d'évaluation des risques",
    description:
      "Built around the review evidence required by the National Security Guidelines for Research Partnerships.",
    descriptionFr:
      "Conçu autour des preuves de revue exigées par les Lignes directrices sur la sécurité nationale pour les partenariats de recherche.",
  },
]

const coAuthors = [
  { name: "Dariush Farhadi", institution: "Longhua Institute of Technology", list: "NRO", papers: 8, last: 2026 },
  { name: "Saeed Noori", institution: "Longhua Institute of Technology", list: "NRO", papers: 6, last: 2025 },
  { name: "Yun Zhao", institution: "Longhua Institute of Technology", list: "NRO", papers: 4, last: 2024 },
  { name: "Jun Li", institution: "Mingshan University", list: "BIS", papers: 5, last: 2024 },
  { name: "Hao Wang", institution: "Mingshan University", list: "BIS", papers: 3, last: 2023 },
]

const timeline = [
  { year: 2016, count: 2, width: "12%" },
  { year: 2018, count: 4, width: "25%" },
  { year: 2020, count: 2, width: "12%" },
  { year: 2022, count: 6, width: "38%" },
  { year: 2024, count: 8, width: "50%" },
  { year: 2026, count: 1, width: "6%" },
]

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative z-10 overflow-hidden rounded-b-[34px] bg-hero text-hero-foreground">
        <Image
          src="/brand/bg-tracer-web-1.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.74),rgba(0,0,0,0.34)_54%,rgba(0,0,0,0.2))]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.18)_54%,rgba(0,0,0,0.52)_100%)] shadow-[inset_0_-30px_58px_rgba(0,0,0,0.48)]" />

        <div className="relative mx-auto grid min-h-[82svh] max-w-[1500px] gap-6 px-6 pb-12 pt-24 lg:grid-cols-[0.54fr_1.18fr] lg:items-end lg:px-10 xl:px-14">
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-hero-foreground/65">
              <LocalizedText en="Clear the path to great science" fr="Ouvrez la voie à une science d'excellence" />
            </p>
            <h1 className="mt-5 max-w-xl text-5xl font-semibold leading-[0.96] tracking-tight sm:text-6xl lg:text-[4rem]">
              <LocalizedText en="Screen research in minutes." fr="Vérifiez la recherche en quelques minutes." />
            </h1>
            <div className="mt-6 flex flex-wrap gap-2">
              {heroWords.map(([en, fr]) => (
                <span
                  key={en}
                  className="rounded-full border border-hero-foreground/20 px-3 py-1 text-sm text-hero-foreground/75"
                >
                  <LocalizedText en={en} fr={fr} />
                </span>
              ))}
            </div>
            <p className="mt-7 max-w-md text-lg leading-8 text-hero-foreground/75">
              <LocalizedText
                en="Tracer cross-references 400M+ records across 320+ sources and delivers a decision-ready brief in minutes."
                fr="Tracer croise plus de 400 M de dossiers dans plus de 320 sources et produit une note prête pour la décision en quelques minutes."
              />
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WaitlistButton className="h-12 bg-hero-foreground px-6 text-hero shadow-xl shadow-black/20 hover:bg-hero-foreground/90">
                <LocalizedText en="Request access" fr="Demander l'accès" />
              </WaitlistButton>
              <Link
                href="#brief"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-hero-foreground/25 px-6 text-sm font-medium text-hero-foreground transition-colors hover:bg-hero-foreground/10"
              >
                <LocalizedText en="View the brief" fr="Voir la note" />
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <HeroCardDeck />
        </div>
      </section>

      <PlatformShowcaseCarousel />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <SectionIntro
            eyebrow={<LocalizedText en="Screening modules" fr="Modules de vérification" />}
            title={
              <LocalizedText
                en="Start with individuals. Extend to organizations."
                fr="Commencez par les personnes. Étendez aux organisations."
              />
            }
            copy={
              <LocalizedText
                en="Tracer keeps the first screening choice simple while preserving the same case structure, audit trail, and report workflow for both people and institutions."
                fr="Tracer simplifie le premier choix de vérification tout en conservant la même structure de dossier, piste d'audit et logique de rapport pour les personnes comme pour les institutions."
              />
            }
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {platformModules.map((module) => (
              <article
                key={module.title}
                className="group overflow-hidden rounded-[28px] border border-border bg-card shadow-[var(--panel-shadow)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={module.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 560px, calc(100vw - 48px)"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(0,0,0,0.7))]" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-3xl font-semibold tracking-tight">
                        <LocalizedText en={module.title} fr={module.titleFr} />
                      </h3>
                      <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xl">
                        <LocalizedText en={module.status} fr={module.statusFr} />
                      </span>
                    </div>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/72">
                      <LocalizedText en={module.description} fr={module.descriptionFr} />
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="brief" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionIntro
            eyebrow={<LocalizedText en="The output" fr="Le résultat" />}
            title={<LocalizedText en="A brief your leadership trusts." fr="Une note que votre direction peut approuver." />}
            copy={
              <LocalizedText
                en="Structured findings with full citations and clear risk signals. Ready when your decision-makers are."
                fr="Des constats structurés, des citations complètes et des signaux clairs. Prêt lorsque vos décideurs le sont."
              />
            }
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-start">
            <ReportExample />
            <div className="grid gap-3">
              {signalCards.map(({ icon: Icon, title, titleFr, description, descriptionFr }) => (
                <article
                  key={title}
                  className="grid gap-4 rounded-[22px] border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2459B8]/25 hover:shadow-[var(--floating-shadow)] sm:grid-cols-[44px_1fr] sm:items-start"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-background">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      <LocalizedText en={title} fr={titleFr} />
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      <LocalizedText en={description} fr={descriptionFr} />
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <LocalizedText en="Network analysis" fr="Analyse de réseau" />
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                <LocalizedText
                  en="Academic signals without raw-data overload."
                  fr="Des signaux académiques sans surcharge de données brutes."
                />
              </h2>
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                <LocalizedText
                  en="Tracer presents co-authorship and affiliation signals in context, including what was checked, what was found, and where human review should continue."
                  fr="Tracer présente les signaux de co-publication et d'affiliation en contexte, avec ce qui a été vérifié, ce qui a été trouvé et les points où la revue humaine doit se poursuivre."
                />
              </p>
            </div>
            <NetworkExample />
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionIntro
            eyebrow={<LocalizedText en="Canada-ready" fr="Prêt pour le Canada" />}
            title={<LocalizedText en="Built for the world, optimized for Canada." fr="Conçu pour le monde, optimisé pour le Canada." />}
            copy={
              <LocalizedText
                en="The platform reflects Canadian research security expectations while supporting global research partnerships."
                fr="La plateforme reflète les attentes canadiennes en sécurité de la recherche tout en soutenant les partenariats de recherche mondiaux."
              />
            }
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {canadaCards.map(({ icon: Icon, title, titleFr, description, descriptionFr }) => (
              <article
                key={title}
                className="rounded-[24px] border border-border bg-card p-6"
              >
                <Icon className="h-6 w-6 text-foreground" />
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                  <LocalizedText en={title} fr={titleFr} />
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
                  <LocalizedText en={description} fr={descriptionFr} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ScreeningCtaCarousel />

      <Footer />
    </main>
  )
}

function HeroCardDeck() {
  const cards = [
    {
      kind: "individual",
      type: "Individual",
      typeFr: "Personne",
      briefLabel: "Individual brief",
      briefLabelFr: "Note personne",
      title: "Reza Kamali",
      subtitle: "Navid University · Aerospace engineering",
      subtitleFr: "Université Navid · Génie aérospatial",
      status: "RSO review",
      statusFr: "Révision RSO",
      meta: "10 sources · 4m 12s",
      metaFr: "10 sources · 4 min 12 s",
      signals: [
        ["Sanctions", "Sanctions", "Clear", "Clair", "good"],
        ["Network", "Réseau", "7 flags", "7 signaux", "warn"],
        ["Identity", "Identité", "Matched", "Confirmée", "good"],
      ],
      className: "left-0 top-6 z-[8] -rotate-6 sm:left-4 sm:top-12 lg:left-[18px] lg:top-[58px]",
    },
    {
      kind: "organization",
      type: "Organization",
      typeFr: "Organisation",
      briefLabel: "Organization brief",
      briefLabelFr: "Note organisation",
      title: "Longhua Institute of Technology",
      subtitle: "Institutional affiliation screening",
      subtitleFr: "Vérification des affiliations institutionnelles",
      status: "Context found",
      statusFr: "Contexte trouvé",
      meta: "18 sources · 6m 03s",
      metaFr: "18 sources · 6 min 03 s",
      signals: [
        ["Registry", "Registre", "Verified", "Vérifié", "good"],
        ["NRO", "ORN", "Review", "Révision", "warn"],
        ["Ownership", "Propriété", "Mapped", "Cartographiée", "neutral"],
      ],
      className: "right-0 top-[130px] z-[9] rotate-3 sm:right-8 sm:top-[170px] lg:right-11 lg:top-[190px]",
    },
    {
      kind: "case",
      type: "Case",
      typeFr: "Dossier",
      briefLabel: "Case brief",
      briefLabelFr: "Note dossier",
      title: "NSERC Grant Review 2026",
      subtitle: "5 entities · Partnership intake",
      subtitleFr: "5 entités · Admission partenariat",
      status: "Ready",
      statusFr: "Prêt",
      meta: "Case packet · PDF ready",
      metaFr: "Dossier · PDF prêt",
      signals: [
        ["People", "Personnes", "3 screened", "3 vérifiées", "good"],
        ["Orgs", "Organisations", "2 staged", "2 préparées", "neutral"],
        ["Audit", "Audit", "Saved", "Sauvé", "good"],
      ],
      className: "bottom-10 left-8 z-10 -rotate-2 sm:bottom-14 sm:left-20 lg:bottom-[68px] lg:left-[82px]",
    },
  ] as const

  const toneClasses = {
    good: "bg-emerald-300/16 text-emerald-100 ring-emerald-200/22",
    warn: "bg-amber-300/18 text-amber-100 ring-amber-200/24",
    neutral: "bg-white/10 text-white/68 ring-white/14",
  }

  return (
    <div className="relative min-h-[560px] sm:min-h-[620px] lg:min-h-[560px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-full">
        {cards.map((card) => (
          <article
            key={card.title}
            className={`absolute w-[176px] rounded-[16px] border border-white/32 bg-white/[0.105] p-2.5 text-white shadow-2xl shadow-black/28 backdrop-blur-2xl ring-1 ring-white/16 transition-transform duration-300 hover:-translate-y-1 sm:w-[216px] sm:rounded-[18px] sm:p-3 xl:w-[250px] ${card.className}`}
          >
            <div className="flex items-start gap-2.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[12px] border border-white/20 bg-white/12 text-[9px] font-semibold text-white shadow-inner shadow-white/10 sm:h-8 sm:w-8 sm:rounded-[13px] sm:text-[10px]">
                {card.type === "Individual" ? "RK" : card.type === "Organization" ? "LI" : "CG"}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-[9px] font-medium text-white/52 sm:text-[10px]">
                    <LocalizedText en={card.briefLabel} fr={card.briefLabelFr} />
                  </p>
                  <span className="shrink-0 rounded-full bg-white px-1.5 py-0.5 text-[8px] font-semibold text-hero sm:text-[9px]">
                    <LocalizedText en={card.status} fr={card.statusFr} />
                  </span>
                </div>
                <h2 className="mt-1.5 truncate text-xs font-semibold tracking-tight sm:text-sm">
                  {card.title}
                </h2>
                <p className="mt-0.5 truncate text-[10px] text-white/62 sm:text-[11px]">
                  <LocalizedText en={card.subtitle} fr={card.subtitleFr} />
                </p>
              </div>
            </div>

            <div className="mt-2 flex flex-wrap gap-1 sm:mt-2.5 sm:gap-1.5">
              <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[8px] font-medium text-white/58 ring-1 ring-white/16 sm:px-2 sm:text-[9px]">
                <LocalizedText en={card.meta} fr={card.metaFr} />
              </span>
              {card.signals.map(([label, labelFr, value, valueFr, tone]) => (
                <span
                  key={label}
                  className={`rounded-full px-1.5 py-0.5 text-[8px] font-medium ring-1 sm:px-2 sm:text-[9px] ${toneClasses[tone]}`}
                >
                  <LocalizedText en={label} fr={labelFr} />:{" "}
                  <span className="font-semibold">
                    <LocalizedText en={value} fr={valueFr} />
                  </span>
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="absolute bottom-[-118px] left-1/2 z-30 h-[430px] w-[min(92vw,420px)] -translate-x-1/2 sm:bottom-[-132px] sm:h-[500px] sm:w-[540px] md:w-[600px] lg:bottom-[-156px] lg:left-[92px] lg:h-[545px] lg:w-[610px] lg:translate-x-0 xl:left-[118px] xl:w-[700px]">
        <div className="absolute inset-0 translate-x-7 translate-y-7 rotate-3 rounded-[30px] border border-white/30 bg-white/[0.105] shadow-2xl shadow-black/30 backdrop-blur-2xl ring-1 ring-white/14" />
        <div className="absolute inset-0 -translate-x-4 translate-y-4 -rotate-2 rounded-[30px] border border-white/28 bg-white/[0.088] shadow-2xl shadow-black/24 backdrop-blur-2xl ring-1 ring-white/12" />
        <article className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/48 bg-white/[0.12] text-white shadow-2xl shadow-black/38 backdrop-blur-2xl ring-1 ring-white/24">
        <div className="bg-[#F6F6F5]/95 px-4 py-3 text-[#1D1D1F] sm:px-6 sm:py-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#777777]">
                <LocalizedText en="Researcher brief" fr="Note chercheur" />
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl xl:text-[28px]">
                Federico F. Rosei
              </h2>
              <p className="mt-1.5 max-w-md text-[11px] leading-5 text-[#666666] sm:mt-2 sm:text-xs">
                <LocalizedText
                  en="Institut national de la recherche scientifique · Advanced materials · Quebec, Canada"
                  fr="Institut national de la recherche scientifique · Matériaux avancés · Québec, Canada"
                />
              </p>
            </div>
            <span className="rounded-full border border-[#DADAD6] bg-white px-2.5 py-1 text-[11px] font-semibold text-[#1D1D1F] sm:px-3 sm:py-1.5 sm:text-xs">
              <LocalizedText en="Review" fr="Révision" />
            </span>
          </div>

          <div className="mt-2.5 flex flex-wrap gap-1.5 sm:mt-3">
            {[
              ["Nanophotonics", "Nanophotonique"],
              ["Solar energy", "Énergie solaire"],
              ["Materials science", "Science des matériaux"],
              ["INRS", "INRS"],
            ].map(([en, fr]) => (
              <span
                key={en}
                className="rounded-full border border-[#DADAD6] bg-white/70 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.12em] text-[#575757]"
              >
                <LocalizedText en={en} fr={fr} />
              </span>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4">
            {[
              ["IND-1", "Clear with caveats", "warn"],
              ["IND-2", "Review", "bad"],
              ["IND-4", "Clear", "good"],
              ["ORG-1", "Clear with caveats", "warn"],
            ].map(([code, verdict, tone]) => (
              <span
                key={code}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#DADAD6] bg-white/80 px-2 py-1 text-[10px] font-medium text-[#4F4F4F]"
              >
                <span className="font-mono text-[#777777]">{code}</span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    tone === "good"
                      ? "bg-emerald-400"
                      : tone === "warn"
                        ? "bg-amber-400"
                        : "bg-red-400"
                  }`}
                />
                <span>
                  {verdict === "Review" ? (
                    <LocalizedText en="Review" fr="Révision" />
                  ) : verdict === "Clear" ? (
                    <LocalizedText en="Clear" fr="Clair" />
                  ) : (
                    <LocalizedText en="Clear with caveats" fr="Clair avec réserves" />
                  )}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-white px-4 py-4 text-[#1d1d1f] sm:px-6 sm:py-5">
          <div className="flex items-center justify-between gap-4 border-b border-[#E6E6E3] pb-3 sm:pb-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A]">
              <LocalizedText en="Primary affiliation" fr="Affiliation principale" />
            </p>
            <span className="rounded-full bg-[#FFFBF5] px-2.5 py-1 text-[10px] font-semibold text-[#B45309]">
              <LocalizedText en="Caveats" fr="Réserves" />
            </span>
          </div>
          <p className="mt-3 max-w-xl text-xs leading-5 text-[#4A4A4A] sm:mt-4 sm:text-sm sm:leading-6">
            <LocalizedText
              en="Source-backed institutional profile with citation handling, affiliation context, collaboration signals, and human review notes."
              fr="Profil institutionnel appuyé par les sources, avec citations, contexte d'affiliation, signaux de collaboration et notes de revue humaine."
            />
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5">
            {[
              ["Legal name verified", "Nom légal vérifié"],
              ["Publication network mapped", "Réseau de publications cartographié"],
              ["Export-ready report", "Rapport prêt à exporter"],
            ].map(([en, fr]) => (
              <div key={en} className="rounded-xl bg-[#F6F6F5] px-2 py-2 text-[9px] font-medium leading-4 text-[#5A5A5A] sm:rounded-2xl sm:px-3 sm:py-3 sm:text-[11px]">
                <LocalizedText en={en} fr={fr} />
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4">
            {[
              ["Primary affiliation", "Affiliation principale", "INRS, Quebec", "INRS, Québec"],
              ["Screening scope", "Portée de vérification", "Individual + organization context", "Contexte personne + organisation"],
              ["Report status", "Statut du rapport", "Human review ready", "Prêt pour revue humaine"],
              ["Audit trail", "Piste d'audit", "Sources and stage notes saved", "Sources et notes d'étapes sauvegardées"],
            ].map(([label, labelFr, value, valueFr]) => (
              <div key={label} className="rounded-xl border border-[#E6E6E3] bg-white px-2 py-2 sm:rounded-2xl sm:px-3 sm:py-3">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8A8A8A]">
                  <LocalizedText en={label} fr={labelFr} />
                </p>
                <p className="mt-1 text-[10px] font-semibold leading-4 text-[#333333] sm:text-xs">
                  <LocalizedText en={value} fr={valueFr} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </article>
      </div>

    </div>
  )
}

function ReportExample() {
  return (
    <div className="relative py-5">
      <div className="absolute inset-x-5 inset-y-8 rotate-[-2deg] rounded-[26px] bg-border/45" />
      <div className="absolute inset-x-3 inset-y-6 rotate-[1.5deg] rounded-[26px] bg-muted" />
      <div className="relative overflow-hidden rounded-[26px] border border-border bg-card shadow-[var(--panel-shadow)]">
          <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-semibold">
                <LocalizedText
                  en="Research Security Brief"
                  fr="Note de sécurité de la recherche"
                />
              </span>
              <span className="text-xs text-muted-foreground">· Tracer</span>
            </div>
            <ToneBadge tone="good">
              <LocalizedText en="Complete" fr="Terminé" />
            </ToneBadge>
          </div>

          <div className="border-b border-border px-5 py-4">
            <h3 className="text-xl font-semibold tracking-tight">Reza Kamali</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              <LocalizedText
                en="Navid University · Aerospace Engineering · Scholar confirmed"
                fr="Université Navid · Génie aérospatial · Chercheur confirmé"
              />
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                ["89 publications", "89 publications"],
                ["h-index 24", "indice h 24"],
                ["ORCID verified", "ORCID vérifié"],
              ].map(([en, fr]) => (
                <span
                  key={en}
                  className="rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground"
                >
                  <LocalizedText en={en} fr={fr} />
                </span>
              ))}
            </div>
          </div>

          <div className="border-b border-border px-5 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-subtle-foreground">
              <LocalizedText en="Screening signals" fr="Signaux de vérification" />
            </p>
            <div className="mt-3 grid gap-2">
              <SignalRow
                label={<LocalizedText en="Sanctions lists" fr="Listes de sanctions" />}
                status={<LocalizedText en="No signal" fr="Aucun signal" />}
                tone="good"
              />
              <SignalRow
                label={<LocalizedText en="Corporate structure" fr="Structure corporative" />}
                status={<LocalizedText en="Review" fr="Révision" />}
                tone="warn"
              />
              <SignalRow
                label={<LocalizedText en="Adverse media" fr="Médias défavorables" />}
                status={<LocalizedText en="No signal" fr="Aucun signal" />}
                tone="good"
              />
              <SignalRow
                label={<LocalizedText en="Academic network" fr="Réseau académique" />}
                status={<LocalizedText en="7 flags" fr="7 signaux" />}
                tone="bad"
              />
            </div>
          </div>

          <div className="border-b border-border px-5 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-subtle-foreground">
              <LocalizedText en="Summary" fr="Résumé" />
            </p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              <LocalizedText
                en="No matches on OFAC, Canadian sanctions, or UN lists. Corporate structure shows parent company registered in a high-risk jurisdiction. One co-author flagged for academic retraction in 2019. Recommend legal review before proceeding."
                fr="Aucune correspondance sur OFAC, les sanctions canadiennes ou les listes de l'ONU. La structure corporative montre une société mère enregistrée dans une juridiction à risque élevé. Un coauteur est signalé pour une rétractation académique en 2019. Une revue juridique est recommandée avant de poursuivre."
              />
            </p>
          </div>

          <div className="flex flex-col gap-3 bg-muted px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs text-muted-foreground">
              <LocalizedText
                en="27 Mar 2026 · 10 sources · 4 min 12 sec"
                fr="27 mars 2026 · 10 sources · 4 min 12 s"
              />
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-foreground">
              <Download className="h-3.5 w-3.5" />
              <LocalizedText en="Export PDF" fr="Exporter PDF" />
            </span>
          </div>
        </div>
    </div>
  )
}

function SignalRow({
  label,
  status,
  tone,
}: {
  label: ReactNode
  status: ReactNode
  tone: "good" | "warn" | "bad"
}) {
  const Icon = tone === "good" ? CheckCircle2 : AlertTriangle

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-4 py-3">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="inline-flex items-center gap-1.5">
        <Icon className="h-3.5 w-3.5" />
        <ToneBadge tone={tone}>{status}</ToneBadge>
      </span>
    </div>
  )
}

function NetworkExample() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-border bg-background shadow-[var(--panel-shadow)]">
      <div className="border-b border-border p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <LocalizedText en="Academic network" fr="Réseau académique" />
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              <LocalizedText
                en="Individual risk profile."
                fr="Profil de risque individuel."
              />
            </h3>
          </div>
          <ToneBadge tone="bad">
            <LocalizedText en="7 flags" fr="7 signaux" />
          </ToneBadge>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
          <LocalizedText
            en="89 publications analyzed from 2016 to 2026. 23 publications, or 26%, involve co-authors at flagged institutions."
            fr="89 publications analysées de 2016 à 2026. 23 publications, soit 26 %, impliquent des coauteurs affiliés à des institutions signalées."
          />
        </p>
      </div>

      <div className="overflow-x-auto p-4">
        <table className="w-full min-w-[680px] border-collapse text-sm">
          <thead>
            <tr className="text-left text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle-foreground">
              <th className="pb-3 pr-4">
                <LocalizedText en="Name" fr="Nom" />
              </th>
              <th className="pb-3 pr-4">
                <LocalizedText en="Institution" fr="Institution" />
              </th>
              <th className="pb-3 pr-4">
                <LocalizedText en="List" fr="Liste" />
              </th>
              <th className="pb-3 pr-4 text-right">
                <LocalizedText en="Papers" fr="Articles" />
              </th>
              <th className="pb-3 text-right">
                <LocalizedText en="Last" fr="Dernier" />
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {coAuthors.map((row) => (
              <tr key={`${row.name}-${row.list}`} className="border-t border-border">
                <td className="py-3 pr-4 font-medium text-foreground">{row.name}</td>
                <td className="py-3 pr-4">{row.institution}</td>
                <td className="py-3 pr-4">
                  <span className="rounded-full border border-border bg-muted px-2 py-1 text-xs font-medium text-foreground">
                    {row.list}
                  </span>
                </td>
                <td className="py-3 pr-4 text-right">{row.papers}</td>
                <td className="py-3 text-right">{row.last}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-border bg-muted px-6 py-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle-foreground">
          <LocalizedText en="Network timeline" fr="Chronologie du réseau" />
        </p>
        <div className="mt-4 grid gap-2">
          {timeline.map((bar) => (
            <div key={bar.year} className="grid grid-cols-[44px_1fr_120px] items-center gap-3">
              <span className="text-xs text-muted-foreground">{bar.year}</span>
              <div className="h-1.5 overflow-hidden rounded-full bg-background">
                <div className="h-full rounded-full bg-warning" style={{ width: bar.width }} />
              </div>
              <span className="text-right text-xs text-muted-foreground">
                {bar.count}{" "}
                <LocalizedText en="flagged" fr="signalés" />
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs italic text-muted-foreground">
          <LocalizedText
            en="Coverage note: screening limited to OpenAlex and Google Scholar."
            fr="Note de couverture : vérification limitée à OpenAlex et Google Scholar."
          />
        </p>
      </div>
    </div>
  )
}

function ToneBadge({
  tone,
  children,
}: {
  tone: "good" | "warn" | "bad"
  children: ReactNode
}) {
  const toneClasses = {
    good: "bg-success-muted text-success",
    warn: "bg-warning-muted text-warning",
    bad: "bg-destructive-muted text-destructive",
  }

  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${toneClasses[tone]}`}>
      {children}
    </span>
  )
}

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: ReactNode
  title: ReactNode
  copy: ReactNode
}) {
  return (
    <div className="max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
        {copy}
      </p>
    </div>
  )
}
