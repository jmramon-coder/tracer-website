import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  SearchCheck,
  ShieldCheck,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { HashScroll } from "@/components/hash-scroll"
import { Header } from "@/components/header"
import { LocalizedText } from "@/components/localized-text"
import { WaitlistButton } from "@/components/waitlist-button"
import { pricingPlans, solutions, teamWorkflows } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Solutions & Pricing",
  description:
    "Solutions and pricing for Tracer, a research security due diligence platform with structured screening workflows and Tracer Labs intelligence configuration.",
}

const adoptionSteps = [
  {
    step: "01",
    label: "Pilot",
    labelFr: "Pilote",
    title: "Prove the workflow on real reviews",
    titleFr: "Valider le flux sur de vraies revues",
  },
  {
    step: "02",
    label: "Institution",
    labelFr: "Institution",
    title: "Standardize screening records",
    titleFr: "Standardiser les dossiers de vérification",
  },
  {
    step: "03",
    label: "Network",
    labelFr: "Réseau",
    title: "Coordinate governance at scale",
    titleFr: "Coordonner la gouvernance à l'échelle",
  },
] as const

const intelligenceLayers = [
  {
    icon: SearchCheck,
    title: "Platform workflow",
    titleFr: "Flux plateforme",
    copy: "Cases, entities, activity, reports, exports, and audit history stay in one operating layer.",
    copyFr:
      "Dossiers, entités, activité, rapports, exports et historique d'audit restent dans une couche opérationnelle unique.",
  },
  {
    icon: BrainCircuit,
    title: "Labs intelligence layer",
    titleFr: "Couche d'intelligence Labs",
    copy: "Deep-search agent swarms, contextual prompts, model routing, and rendering logic evolve behind the workflow.",
    copyFr:
      "Essaims d'agents de recherche, prompts contextuels, routage de modèles et logique de rendu évoluent derrière le flux.",
  },
  {
    icon: ShieldCheck,
    title: "Human RSO review",
    titleFr: "Revue humaine RSO",
    copy: "Tracer gathers and renders facts. Human reviewers keep decision authority and institutional context.",
    copyFr:
      "Tracer rassemble et rend les faits. Les réviseurs humains conservent l'autorité décisionnelle et le contexte institutionnel.",
  },
] as const

const pricePrinciples = [
  {
    title: "Easy to pilot",
    titleFr: "Simple à piloter",
    copy: "Start with a focused team before institution-wide rollout.",
    copyFr: "Commencez avec une équipe ciblée avant un déploiement institutionnel.",
  },
  {
    title: "Academic-first",
    titleFr: "Pensé pour l'académique",
    copy: "Pricing follows research security adoption, not generic enterprise packaging.",
    copyFr:
      "La tarification suit l'adoption en sécurité de la recherche, pas un emballage entreprise générique.",
  },
  {
    title: "Labs-ready",
    titleFr: "Prêt pour Labs",
    copy: "Founding teams can influence model routing, prompt operations, and future integrations.",
    copyFr:
      "Les équipes fondatrices peuvent influencer le routage des modèles, les opérations de prompts et les intégrations futures.",
  },
] as const

const labsSignals = [
  "Agent swarm orchestration",
  "Deep prompt targeting",
  "Multi-model routing",
  "Report rendering",
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HashScroll />

      <section className="relative z-10 overflow-hidden rounded-b-[34px] bg-hero pt-28 text-hero-foreground md:pt-32">
        <Image
          src="/brand/bg-tracer-web-1.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78),rgba(0,0,0,0.42)_54%,rgba(0,0,0,0.24))]" />

        <div className="relative mx-auto grid min-h-[82svh] max-w-[1500px] gap-10 px-6 pb-16 sm:px-8 lg:grid-cols-[0.82fr_0.78fr] lg:items-end lg:px-12 xl:px-16">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/58">
              <LocalizedText en="Solutions & pricing" fr="Solutions et tarifs" />
            </p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-tight md:text-7xl">
              <LocalizedText
                en="Research security that starts lean and scales with trust."
                fr="Une sécurité de la recherche qui commence légèrement et évolue avec la confiance."
              />
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/74">
              <LocalizedText
                en="Tracer gives research security teams a practical path from pilot to institutional standard: structured screening, cited reports, human review, and a Labs intelligence layer that keeps the workflow current."
                fr="Tracer donne aux équipes de sécurité de la recherche un chemin concret du pilote au standard institutionnel : vérification structurée, rapports cités, revue humaine et couche d'intelligence Labs qui garde le flux à jour."
              />
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WaitlistButton className="h-12 bg-white px-6 text-hero shadow-xl shadow-black/20 hover:bg-white/90">
                <LocalizedText en="Request access" fr="Demander l'accès" />
              </WaitlistButton>
              <Link
                href="#pricing"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/24 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <LocalizedText en="View pricing" fr="Voir les tarifs" />
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative hidden min-h-[520px] lg:block">
            <div className="absolute bottom-0 right-0 w-full max-w-[560px] rounded-[30px] border border-white/26 bg-white/[0.12] p-5 text-white shadow-2xl shadow-black/35 backdrop-blur-2xl ring-1 ring-white/16">
              <div className="rounded-[24px] border border-white/18 bg-black/22 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/54">
                    <LocalizedText en="Adoption path" fr="Parcours d'adoption" />
                  </p>
                  <span className="rounded-full bg-[#2459B8] px-3 py-1.5 text-xs font-semibold text-white">
                    <LocalizedText en="Founding access" fr="Accès fondateur" />
                  </span>
                </div>

                <div className="mt-6 grid gap-3">
                  {adoptionSteps.map((item) => (
                    <div
                      key={item.step}
                      className="grid grid-cols-[42px_1fr] gap-3 rounded-2xl border border-white/14 bg-white/10 px-4 py-3"
                    >
                      <span className="font-mono text-xs font-semibold text-white/48">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-sm font-semibold">
                          <LocalizedText en={item.label} fr={item.labelFr} />
                        </p>
                        <p className="mt-1 text-xs leading-5 text-white/58">
                          <LocalizedText en={item.title} fr={item.titleFr} />
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-[24px] border border-white/18 bg-white/[0.09] p-5">
                <div className="flex items-center gap-3">
                  <Image
                    src="/brand/tracer-labs-v2.png"
                    alt=""
                    width={42}
                    height={42}
                    className="h-9 w-9 object-contain"
                  />
                  <div>
                    <p className="text-sm font-semibold tracking-[0.12em]">
                      Tracer Labs
                    </p>
                    <p className="mt-1 text-xs text-white/58">
                      <LocalizedText
                        en="Adaptive intelligence for screening systems."
                        fr="Intelligence adaptative pour systèmes de vérification."
                      />
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {labsSignals.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/14 bg-white/10 px-3 py-1 text-xs text-white/68"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-6 rounded-t-[28px] border-b border-border bg-card py-20 shadow-[var(--surface-shadow)] md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <LocalizedText en="What Tracer solves" fr="Ce que Tracer résout" />
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              <LocalizedText
                en="One system for the teams that touch research security review."
                fr="Un seul système pour les équipes qui participent à la revue de sécurité de la recherche."
              />
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {solutions.map((solution) => (
              <article
                key={solution.title}
                className="rounded-[24px] border border-border bg-background p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2459B8]/10 text-[#2459B8]">
                  <solution.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  <LocalizedText en={solution.title} fr={solution.titleFr} />
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  <LocalizedText en={solution.description} fr={solution.descriptionFr} />
                </p>
                <ul className="mt-6 grid gap-3">
                  {solution.points.map((point, index) => (
                    <li key={point} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2459B8]" />
                      <span className="text-muted-foreground">
                        <LocalizedText en={point} fr={solution.pointsFr[index]} />
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <LocalizedText en="Platform plus Labs" fr="Plateforme plus Labs" />
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              <LocalizedText
                en="The operating layer and the intelligence layer move together."
                fr="La couche opérationnelle et la couche d'intelligence avancent ensemble."
              />
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
              <LocalizedText
                en="The platform keeps case work calm and auditable. Tracer Labs keeps the deep-search, prompt, model, and rendering configuration current as the model landscape changes."
                fr="La plateforme garde le travail de dossier calme et auditable. Tracer Labs garde la recherche approfondie, les prompts, les modèles et le rendu à jour lorsque le paysage des modèles évolue."
              />
            </p>
          </div>

          <div className="mt-12 relative overflow-hidden rounded-[32px] border border-border bg-card p-2 shadow-[var(--panel-shadow)]">
            <div className="relative aspect-[1911/927] overflow-hidden rounded-[26px] bg-muted">
              <Image
                src="/brand/tracer-platform-home.png"
                alt=""
                fill
                sizes="(min-width: 1280px) 1180px, 100vw"
                className="object-cover object-left-top"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-3 lg:grid-cols-3">
            {intelligenceLayers.map(({ icon: Icon, title, titleFr, copy, copyFr }) => (
              <article
                key={title}
                className="grid gap-4 rounded-[22px] border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2459B8]/28 hover:shadow-[var(--floating-shadow)] sm:grid-cols-[auto_1fr] sm:items-start lg:block"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2459B8]/8 text-[#2459B8]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight lg:mt-5">
                    <LocalizedText en={title} fr={titleFr} />
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    <LocalizedText en={copy} fr={copyFr} />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <LocalizedText en="Team workflows" fr="Flux des équipes" />
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              <LocalizedText
                en="Different teams, one review record."
                fr="Des équipes différentes, un seul dossier de revue."
              />
            </h2>
          </div>

          <div className="mt-12 divide-y divide-border rounded-[28px] border border-border bg-background shadow-[var(--panel-shadow)]">
            {teamWorkflows.map((workflow) => (
              <article
                key={workflow.team}
                className="grid gap-8 p-6 md:grid-cols-[0.72fr_1fr_1fr] md:p-8"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    <LocalizedText en="Team" fr="Équipe" />
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    <LocalizedText en={workflow.team} fr={workflow.teamFr} />
                  </h3>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    <LocalizedText en="Pressure" fr="Pression" />
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    <LocalizedText en={workflow.pressure} fr={workflow.pressureFr} />
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    <LocalizedText en="Tracer gives them" fr="Tracer leur donne" />
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    <LocalizedText en={workflow.outcome} fr={workflow.outcomeFr} />
                  </p>
                  <ul className="mt-5 grid gap-2">
                    {workflow.responsibilities.map((item, index) => (
                      <li key={item} className="text-sm font-medium text-foreground">
                        <LocalizedText en={item} fr={workflow.responsibilitiesFr[index]} />
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-28 bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <LocalizedText en="Pricing" fr="Tarifs" />
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                <LocalizedText
                  en="Adopt the workflow first. Scale once it is trusted."
                  fr="Adoptez d'abord le flux. Étendez-le une fois qu'il est fiable."
                />
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {pricePrinciples.map((item) => (
                <div key={item.title} className="rounded-[18px] border border-border bg-card p-4">
                  <p className="text-sm font-semibold tracking-tight">
                    <LocalizedText en={item.title} fr={item.titleFr} />
                  </p>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    <LocalizedText en={item.copy} fr={item.copyFr} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-center">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex w-full max-w-[380px] flex-col overflow-hidden rounded-[26px] border shadow-sm ${
                  plan.featured
                    ? "min-h-[650px] border-[#2459B8] bg-[#2459B8] text-white shadow-xl shadow-[#2459B8]/20 lg:max-w-[410px]"
                    : "min-h-[600px] border-border bg-card text-foreground lg:max-w-[340px]"
                }`}
              >
                {plan.featured && (
                  <>
                    <Image
                      src="/brand/tracer-platform-home.png"
                      alt=""
                      fill
                      sizes="410px"
                      className="object-cover object-left-top opacity-[0.16]"
                    />
                    <div className="absolute inset-0 bg-[#2459B8]/88" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,89,184,0.68),rgba(36,89,184,0.95)_58%,rgba(22,62,146,0.98))]" />
                  </>
                )}
                <div className={`relative z-10 flex w-full flex-1 flex-col ${plan.featured ? "p-8" : "p-6"}`}>
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                      plan.featured ? "text-white/62" : "text-muted-foreground"
                    }`}
                  >
                    <LocalizedText en={plan.name} fr={plan.nameFr} />
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                    <LocalizedText en={plan.price} fr={plan.priceFr} />
                  </h3>
                  {"note" in plan && (
                    <p className="mt-2 text-sm font-medium text-white/82">
                      <LocalizedText en={plan.note} fr={plan.noteFr} />
                    </p>
                  )}
                  <p
                    className={`mt-4 text-sm leading-6 ${
                      plan.featured ? "text-white/72" : "text-muted-foreground"
                    }`}
                  >
                    <LocalizedText en={plan.description} fr={plan.descriptionFr} />
                  </p>
                  <ul className="mb-8 mt-7 grid gap-3">
                    {plan.features.map((feature, index) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <CheckCircle2
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            plan.featured ? "text-white" : "text-[#2459B8]"
                          }`}
                        />
                        <span className={plan.featured ? "text-white/78" : "text-muted-foreground"}>
                          <LocalizedText en={feature} fr={plan.featuresFr[index]} />
                        </span>
                      </li>
                    ))}
                  </ul>
                  <WaitlistButton
                    variant={plan.featured ? "secondary" : "primary"}
                    showIcon={false}
                    className={`mt-auto h-12 w-full shrink-0 ${
                      plan.featured
                        ? "border-white/20 bg-white text-[#2459B8] hover:bg-white/90"
                        : ""
                    }`}
                  >
                    <LocalizedText en={plan.cta} fr={plan.ctaFr} />
                  </WaitlistButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 pb-20 sm:px-8 md:pb-28 lg:px-12 xl:px-16">
        <div className="relative mx-auto overflow-hidden rounded-[30px] bg-hero text-white shadow-[var(--modal-shadow)]">
          <Image
            src="/brand/tracer-labs-image-2.png"
            alt=""
            fill
            sizes="(min-width: 1280px) 1180px, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82),rgba(0,0,0,0.5)_54%,rgba(0,0,0,0.16))]" />
          <div className="relative z-10 max-w-3xl p-8 md:p-12">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/tracer-labs-v2.png"
                alt=""
                width={42}
                height={42}
                className="h-9 w-9 origin-center object-contain motion-safe:animate-[labs-disc-spin_9s_linear_infinite]"
              />
              <div>
                <p className="text-sm font-semibold tracking-[0.12em]">
                  Tracer
                </p>
                <p className="mt-1 text-xs text-white/58">
                  <LocalizedText en="Research Security + Labs" fr="Sécurité de la recherche + Labs" />
                </p>
              </div>
            </div>
            <h2 className="mt-8 text-4xl font-semibold tracking-tight md:text-5xl">
              <LocalizedText
                en="Join the founding cohort before pricing becomes fixed."
                fr="Rejoignez la cohorte fondatrice avant que les tarifs soient fixés."
              />
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
              <LocalizedText
                en="Early teams help shape onboarding, screening workflows, Labs configuration, and the commercial model around real institutional needs."
                fr="Les premières équipes contribuent à façonner l'intégration, les flux de vérification, la configuration Labs et le modèle commercial autour de besoins institutionnels réels."
              />
            </p>
            <WaitlistButton
              className="mt-9 h-12 bg-[#2459B8] px-6 text-white shadow-xl shadow-[#2459B8]/25 hover:bg-[#1E4C9D]"
              showIcon
            >
              <LocalizedText en="Join waitlist" fr="Rejoindre la liste" />
            </WaitlistButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
