import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BrainCircuit,
  Gauge,
  Layers3,
  Network,
  Search,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { LabsHeroVisual } from "@/components/labs-hero-visual"
import { LocalizedText } from "@/components/localized-text"
import { WaitlistButton } from "@/components/waitlist-button"

export const metadata: Metadata = {
  title: "Tracer Labs",
  description:
    "Tracer Labs is the intelligence layer for synthesis, reporting, rendering, and high-efficiency screening visualization.",
}

const pipelineStages = [
  {
    step: "01",
    icon: Search,
    title: "Deep Search",
    titleFr: "Recherche approfondie",
    description:
      "Orchestrate targeted web agents to discover sources, preserve interaction context, and collect evidence that can be resumed and audited.",
    descriptionFr:
      "Orchestrer des agents web ciblés pour découvrir les sources, préserver le contexte d'interaction et collecter des preuves reprenables et auditables.",
    focus: "Evidence discovery",
    focusFr: "Découverte des preuves",
  },
  {
    step: "02",
    icon: BrainCircuit,
    title: "Synthetization",
    titleFr: "Synthétisation",
    description:
      "Apply Tracer's in-house intelligence layer to reconcile findings, citations, uncertainty notes, and institutional review context.",
    descriptionFr:
      "Appliquer la couche d'intelligence interne de Tracer pour réconcilier constats, citations, notes d'incertitude et contexte de revue institutionnelle.",
    focus: "Context synthesis",
    focusFr: "Synthèse contextuelle",
  },
  {
    step: "03",
    icon: Layers3,
    title: "Rendering",
    titleFr: "Rendu",
    description:
      "Transform synthesized intelligence into report cards, source maps, visual summaries, and PDF-ready outputs for human review.",
    descriptionFr:
      "Transformer l'intelligence synthétisée en fiches de rapport, cartes de sources, synthèses visuelles et sorties PDF pour la revue humaine.",
    focus: "Review output",
    focusFr: "Sortie de revue",
  },
] as const

const businessLines = [
  {
    domain: "Research",
    domainFr: "Recherche",
    title: "Research security due diligence",
    titleFr: "Diligence en sécurité de la recherche",
    copy: "Researchers, institutions, affiliations, grants, and collaboration signals.",
    copyFr: "Chercheurs, institutions, affiliations, subventions et signaux de collaboration.",
  },
  {
    domain: "Vendors",
    domainFr: "Fournisseurs",
    title: "Organization and vendor screening",
    titleFr: "Vérification d'organisations et de fournisseurs",
    copy: "Ownership, sanctions exposure, operating footprint, and supplier context.",
    copyFr: "Propriété, exposition aux sanctions, empreinte opérationnelle et contexte fournisseur.",
  },
  {
    domain: "Partnerships",
    domainFr: "Partenariats",
    title: "Grant and partnership review",
    titleFr: "Revue de subventions et partenariats",
    copy: "Consortiums, co-investigators, institutional links, and review-ready evidence.",
    copyFr: "Consortiums, cochercheurs, liens institutionnels et preuves prêtes pour la revue.",
  },
  {
    domain: "Regulated teams",
    domainFr: "Équipes réglementées",
    title: "Web intelligence operations",
    titleFr: "Opérations d'intelligence web",
    copy: "Repeatable deep-search agents for evidence-heavy business processes.",
    copyFr: "Agents de recherche web répétables pour processus d'affaires riches en preuves.",
  },
  {
    domain: "Market watch",
    domainFr: "Veille marché",
    title: "Signals and monitoring",
    titleFr: "Signaux et surveillance",
    copy: "Source-backed updates for fast-moving entities, policies, and public records.",
    copyFr: "Mises à jour sourcées pour entités, politiques et dossiers publics en évolution.",
  },
] as const

const deepSearchCapabilities = [
  {
    icon: Network,
    title: "Agent swarm orchestration",
    titleFr: "Orchestration d'essaims d'agents",
    copy: "Coordinate parallel web deep-search agents, source discovery, evidence gathering, and resumable runs.",
    copyFr:
      "Coordonnez des agents de recherche web en parallèle, la découverte de sources, la collecte de preuves et les exécutions reprenables.",
  },
  {
    icon: BrainCircuit,
    title: "Contextual prompt targeting",
    titleFr: "Ciblage contextuel des prompts",
    copy: "Engineer prompts for the exact entity, jurisdiction, domain, evidence standard, and reporting context.",
    copyFr:
      "Concevez des prompts adaptés à l'entité, la juridiction, le domaine, le standard de preuve et le contexte de rapport.",
  },
  {
    icon: Layers3,
    title: "Intelligence sequence",
    titleFr: "Séquence d'intelligence",
    copy: "Move from discovery to synthesis to rendering in one accountable method for institutional review.",
    copyFr:
      "Passez de la découverte à la synthèse puis au rendu dans une méthode traçable pour la revue institutionnelle.",
  },
  {
    icon: Gauge,
    title: "High-efficiency intelligence",
    titleFr: "Intelligence haute efficacité",
    copy: "Tune model choice, usage, cost, elapsed time, and output quality as frontier systems evolve.",
    copyFr:
      "Optimisez le choix de modèles, l'usage, les coûts, le temps écoulé et la qualité des sorties lorsque les systèmes évoluent.",
  },
] as const

const modelFamilies = [
  { label: "OpenAI", src: "/brand/model-logos/openai.svg" },
  { label: "Gemini", src: "/brand/model-logos/gemini.svg" },
  { label: "Anthropic", src: "/brand/model-logos/anthropic.svg" },
  { label: "Claude", src: "/brand/model-logos/claude.svg" },
  { label: "Copilot", src: "/brand/model-logos/copilot.svg" },
  { label: "Grok", src: "/brand/model-logos/grok.svg" },
  { label: "Mistral AI", src: "/brand/model-logos/mistral.svg" },
  { label: "Perplexity", src: "/brand/model-logos/perplexity.svg" },
  { label: "Meta Llama", src: "/brand/model-logos/meta.svg" },
  { label: "Cohere", src: "/brand/model-logos/cohere.svg" },
] as const

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative overflow-hidden bg-[#07101F] pt-24 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(36,89,184,0.24),transparent_44%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_36%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/12" />

        <div className="relative mx-auto grid min-h-[62svh] max-w-7xl gap-10 px-6 pb-10 sm:px-8 lg:grid-cols-[0.88fr_0.82fr] lg:items-end lg:px-12 xl:px-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/tracer-labs-v2.png"
                alt=""
                width={48}
                height={48}
                priority
                className="h-10 w-10 object-contain md:h-11 md:w-11"
              />
              <div>
                <p className="text-sm font-semibold tracking-[0.12em]">
                  Tracer Labs
                </p>
                <p className="mt-1 text-xs text-white/58">
                  <LocalizedText
                    en="Innovation workspace for adaptive screening intelligence."
                    fr="Espace d'innovation pour une intelligence de vérification adaptative."
                  />
                </p>
              </div>
            </div>
            <p className="mt-9 text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
              <LocalizedText en="Intelligence layer for screening systems" fr="Couche d'intelligence pour systèmes de vérification" />
            </p>
            <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
              <LocalizedText
                en="In-house synthesis, reporting, and data visualization for better screening."
                fr="Synthèse interne, rapports et visualisation de données pour une meilleure vérification."
              />
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/72">
              <LocalizedText
                en="Tracer Labs is where our intelligence layer is tuned: in-house synthesis, report logic, model routing, and high-efficiency rendering that turns complex findings into clear screening cards and visual outputs."
                fr="Tracer Labs est l'endroit où nous réglons notre couche d'intelligence : synthèse interne, logique de rapport, routage des modèles et rendu efficace qui transforme des constats complexes en fiches et sorties visuelles claires."
              />
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/platform"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#2459B8] px-6 text-sm font-semibold text-white shadow-xl shadow-[#2459B8]/25 transition-colors hover:bg-[#1E4C9D]"
              >
                <LocalizedText en="See platform" fr="Voir la plateforme" />
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <LabsHeroVisual />
        </div>
      </section>

      <section className="-mt-6 rounded-t-[28px] bg-card py-20 shadow-[var(--surface-shadow)] md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <LocalizedText en="How Tracer Labs works" fr="Comment Tracer Labs fonctionne" />
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                <LocalizedText
                  en="A research intelligence method from source discovery to rendered evidence."
                  fr="Une méthode d'intelligence de recherche, de la découverte des sources aux preuves rendues."
                />
              </h2>
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                <LocalizedText
                  en="Tracer Labs is the discipline behind the platform: coordinated search agents gather evidence, in-house synthesis turns raw findings into reviewable context, and rendering converts that context into structured outputs institutions can inspect."
                  fr="Tracer Labs est la méthode derrière la plateforme : des agents de recherche coordonnés rassemblent les preuves, la synthèse interne transforme les constats bruts en contexte révisable, puis le rendu convertit ce contexte en sorties structurées que les institutions peuvent inspecter."
                />
              </p>
            </div>

            <PipelineControlPanel />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_0.82fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2459B8]">
                <LocalizedText en="Tracer Labs vision" fr="Vision Tracer Labs" />
              </p>
              <h2 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
                <LocalizedText
                  en="A configurable intelligence layer for deep-search work."
                  fr="Une couche d'intelligence configurable pour la recherche approfondie."
                />
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end">
              <LocalizedText
                en="Tracer Labs brings the full intelligence sequence into one discipline: coordinated agent swarms discover source-backed evidence, deep prompts target the review context, model routing keeps the system current, and rendering turns findings into human-readable outputs. The method starts with research security and can extend to any evidence-heavy market."
                fr="Tracer Labs rassemble toute la séquence d'intelligence dans une même méthode : des essaims d'agents coordonnés découvrent des preuves sourcées, des prompts profonds ciblent le contexte de revue, le routage des modèles garde le système à jour et le rendu transforme les constats en sorties lisibles. La méthode commence avec la sécurité de la recherche et peut s'étendre à tout marché riche en preuves."
              />
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {deepSearchCapabilities.map(({ icon: Icon, title, titleFr, copy, copyFr }) => (
              <article
                key={title}
                className="rounded-[24px] border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2459B8]/8 text-[#2459B8]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  <LocalizedText en={title} fr={titleFr} />
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  <LocalizedText en={copy} fr={copyFr} />
                </p>
              </article>
            ))}
          </div>

          <div className="relative mt-12 overflow-hidden py-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-background to-transparent" />
            <div className="flex w-max animate-marquee items-center gap-14">
              {[...modelFamilies, ...modelFamilies, ...modelFamilies].map(({ label, src }, index) => (
                <span
                  key={`${label}-${index}`}
                  className="group inline-flex items-center gap-4 text-lg font-semibold tracking-tight text-muted-foreground transition-colors hover:text-[#2459B8]"
                >
                  <Image
                    src={src}
                    alt=""
                    width={72}
                    height={72}
                    className="h-16 w-16 shrink-0 object-contain opacity-70 transition-opacity group-hover:opacity-100 dark:invert"
                  />
                  <span>{label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <LocalizedText en="Market extension" fr="Extension des marchés" />
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                <LocalizedText
                  en="Deep-search intelligence can move into new markets."
                  fr="L'intelligence de recherche approfondie peut s'étendre à de nouveaux marchés."
                />
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
                <LocalizedText
                  en="The vision is to take the same intelligence sequence—source discovery, contextual synthesis, model routing, and report generation—and adapt it to any domain where teams need source-backed decisions."
                  fr="La vision est d'adapter la même séquence d'intelligence — découverte de sources, synthèse contextuelle, routage des modèles et génération de rapports — à tout domaine où les équipes ont besoin de décisions appuyées par des sources."
                />
              </p>
            </div>

            <div className="relative grid gap-0">
              {businessLines.map((item, index) => (
                <article
                  key={item.title}
                  className="group grid gap-4 border-b border-border py-6 last:border-b-0 sm:grid-cols-[3rem_1fr] lg:animate-[labs-business-line_7s_ease-in-out_infinite]"
                  style={{ animationDelay: `${index * 0.18}s` }}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#2459B8]/24 text-[#2459B8] transition-colors group-hover:bg-[#2459B8] group-hover:text-white">
                    <span className="text-xs font-semibold tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="min-w-0">
                    <div>
                      <h3 className="text-base font-semibold tracking-tight">
                        <LocalizedText en={item.title} fr={item.titleFr} />
                      </h3>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        <LocalizedText en={item.domain} fr={item.domainFr} />
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      <LocalizedText en={item.copy} fr={item.copyFr} />
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl border-t border-border px-6 pt-20 sm:px-8 md:pt-28 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <LocalizedText en="System integrations" fr="Intégrations système" />
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                <LocalizedText
                  en="An intelligence layer for the systems teams already run."
                  fr="Une couche d'intelligence pour les systèmes que les équipes utilisent déjà."
                />
              </h2>
            </div>

            <div className="max-w-3xl lg:pt-12">
              <p className="text-xl leading-9 tracking-tight text-foreground md:text-2xl">
                <LocalizedText
                  en="Tracer aims to offer this intelligence layer to existing solutions that lack a proper lab environment to experiment, test, and push up-to-date model routing, efficient agent systems, and report generation into production."
                  fr="Tracer vise à offrir cette couche d'intelligence aux solutions existantes qui n'ont pas de véritable environnement Labs pour expérimenter, tester et pousser en production le routage de modèles à jour, des systèmes d'agents efficaces et la génération de rapports."
                />
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
                <LocalizedText
                  en="Instead of every institution rebuilding that capability inside case tools, grant workflows, vendor review systems, or internal queues, Labs becomes the place where intelligence behavior is shaped, evaluated, governed, and kept current."
                  fr="Plutôt que chaque institution reconstruise cette capacité dans ses outils de dossiers, flux de subventions, systèmes fournisseurs ou files de revue internes, Labs devient l'endroit où le comportement d'intelligence est conçu, évalué, gouverné et maintenu à jour."
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-20 sm:px-8 md:py-28 lg:px-12 xl:px-16">
        <div className="relative mx-auto min-h-[540px] max-w-7xl overflow-hidden rounded-[30px] text-white shadow-[var(--modal-shadow)]">
          <Image
            src="/brand/tracer-labs-image-2.png"
            alt=""
            fill
            sizes="(min-width: 1280px) 1180px, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78),rgba(0,0,0,0.5)_48%,rgba(0,0,0,0.18))]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.42),transparent_54%)]" />
          <Image
            src="/brand/glass-logo-tracer.png"
            alt=""
            width={512}
            height={512}
            className="pointer-events-none absolute bottom-5 right-4 z-[9] hidden h-auto w-24 select-none opacity-90 drop-shadow-[0_22px_58px_rgba(0,0,0,0.5)] animate-[tracer-float_6s_ease-in-out_infinite] sm:block md:bottom-8 md:right-8 md:w-32 lg:w-40 xl:w-44"
          />

          <div className="relative z-10 flex min-h-[540px] flex-col justify-end p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <Image
                  src="/brand/tracer-labs-v2.png"
                  alt=""
                  width={48}
                  height={48}
                  className="h-9 w-9 origin-center object-contain motion-safe:animate-[labs-disc-spin_9s_linear_infinite]"
                />
                <div>
                  <p className="text-sm font-semibold tracking-[0.12em]">
                    Tracer Labs
                  </p>
                  <p className="mt-1 text-xs text-white/58">
                    <LocalizedText
                      en="Innovation workspace for adaptive screening intelligence."
                      fr="Espace d'innovation pour une intelligence de vérification adaptative."
                    />
                  </p>
                </div>
              </div>
              <h2 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                <LocalizedText
                  en="Build screening agents that stay current as the model landscape changes."
                  fr="Bâtissez des agents de vérification qui restent à jour lorsque le paysage des modèles change."
                />
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
                <LocalizedText
                  en="Join early access to shape the Labs control surface for prompt operations, agent orchestration, and high-trust screening workflows."
                  fr="Rejoignez l'accès anticipé pour façonner la surface Labs dédiée aux opérations de prompts, à l'orchestration d'agents et aux flux de vérification à haute confiance."
                />
              </p>
              <WaitlistButton
                className="mt-9 h-12 border border-[#6F98F2]/40 bg-[#2459B8] px-6 text-white shadow-xl shadow-[#2459B8]/30 ring-1 ring-white/20 hover:-translate-y-0.5 hover:bg-[#1E4C9D] hover:shadow-[#2459B8]/45"
                showIcon
              >
                <LocalizedText en="Join Labs waitlist" fr="Rejoindre la liste Labs" />
              </WaitlistButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function PipelineControlPanel() {
  return (
    <div className="rounded-[28px] border border-border bg-card p-6 shadow-[var(--panel-shadow)]">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <LocalizedText en="Intelligence sequence" fr="Séquence d'intelligence" />
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">
            <LocalizedText en="From search to report" fr="De la recherche au rapport" />
          </h3>
        </div>
        <span className="w-fit rounded-full bg-[#2459B8]/10 px-3 py-1.5 text-xs font-semibold text-[#2459B8]">
          <LocalizedText en="Model-aware" fr="Adapté aux modèles" />
        </span>
      </div>

      <div className="grid gap-3">
        {pipelineStages.map(
          ({ step, icon: Icon, title, titleFr, description, descriptionFr, focus, focusFr }) => (
            <article
              key={title}
              className="grid gap-4 rounded-[20px] border border-border bg-background p-4 sm:grid-cols-[auto_1fr_auto] sm:items-start"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2459B8]/10 text-[#2459B8]">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-muted-foreground">
                    {step}
                  </span>
                  <h4 className="text-lg font-semibold tracking-tight">
                    <LocalizedText en={title} fr={titleFr} />
                  </h4>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  <LocalizedText en={description} fr={descriptionFr} />
                </p>
              </div>
              <span className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground sm:justify-self-end">
                <LocalizedText en={focus} fr={focusFr} />
              </span>
            </article>
          )
        )}
      </div>
    </div>
  )
}
