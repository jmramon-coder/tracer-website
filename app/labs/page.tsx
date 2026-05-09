import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Gauge,
  GitBranch,
  Layers3,
  Library,
  Network,
  Search,
  SlidersHorizontal,
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
      "Coordinate web deep-search agents, source discovery, interaction IDs, and resumable evidence gathering.",
    descriptionFr:
      "Coordonnez les agents de recherche web, la découverte de sources, les identifiants d'interaction et la collecte de preuves reprenable.",
    focus: "Agent swarm configuration",
    focusFr: "Configuration d'essaims d'agents",
  },
  {
    step: "02",
    icon: BrainCircuit,
    title: "Synthetization",
    titleFr: "Synthétisation",
    description:
      "Apply Tracer's in-house intelligence layer to turn raw findings into evidence, citations, uncertainty notes, and review guidance.",
    descriptionFr:
      "Appliquez la couche d'intelligence interne de Tracer pour transformer les constats bruts en preuves, citations, notes d'incertitude et indications de revue.",
    focus: "In-house synthesis",
    focusFr: "Synthèse interne",
  },
  {
    step: "03",
    icon: Layers3,
    title: "Rendering",
    titleFr: "Rendu",
    description:
      "Render high-efficiency report cards, source maps, visual summaries, and PDF-ready outputs approved for production workflows.",
    descriptionFr:
      "Générez des fiches de rapport efficaces, cartes de sources, synthèses visuelles et sorties PDF approuvées pour la production.",
    focus: "Data visualization output",
    focusFr: "Sortie de visualisation",
  },
] as const

const controlLayers = [
  {
    icon: SlidersHorizontal,
    label: "Model routing",
    labelFr: "Routage des modèles",
    copy: "Route each workflow to current, top-tier model configurations as the frontier shifts.",
    copyFr:
      "Acheminez chaque flux vers des configurations de modèles actuelles et de premier plan lorsque la frontière évolue.",
  },
  {
    icon: Library,
    label: "Prompt library",
    labelFr: "Bibliothèque de prompts",
    copy: "Create, compare, and version prompts for individuals, organizations, synthesis, rendering, and new intelligence contexts.",
    copyFr:
      "Créez, comparez et versionnez les prompts pour les personnes, organisations, synthèses, rendus et nouveaux contextes d'intelligence.",
  },
  {
    icon: GitBranch,
    label: "Active brain",
    labelFr: "Cerveau actif",
    copy: "Publish the configuration that powers live systems while newer agents, prompts, and models are tested safely in Labs.",
    copyFr:
      "Publiez la configuration qui alimente les systèmes en direct pendant que de nouveaux agents, prompts et modèles sont testés dans Labs.",
  },
  {
    icon: Gauge,
    label: "Efficiency telemetry",
    labelFr: "Télémétrie d'efficacité",
    copy: "Measure elapsed time, usage, cost estimates, stage performance, and model fit so screening gets faster and sharper over time.",
    copyFr:
      "Mesurez le temps écoulé, l'usage, les coûts estimés, la performance des étapes et l'adéquation modèle pour rendre la vérification plus rapide et précise.",
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
    icon: Gauge,
    title: "High-efficiency intelligence",
    titleFr: "Intelligence haute efficacité",
    copy: "Tune model choice, usage, cost, elapsed time, and output quality as frontier systems evolve.",
    copyFr:
      "Optimisez le choix de modèles, l'usage, les coûts, le temps écoulé et la qualité des sorties lorsque les systèmes évoluent.",
  },
] as const

const modelFamilies = [
  "OpenAI",
  "Gemini",
  "Anthropic",
  "Claude",
  "Copilot",
  "Grok",
  "Mistral AI",
  "Perplexity",
  "Meta Llama",
  "Cohere",
]

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative overflow-hidden bg-[#07101F] pt-28 text-white md:pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(36,89,184,0.24),transparent_44%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_36%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/12" />

        <div className="relative mx-auto grid min-h-[70svh] max-w-7xl gap-10 px-6 pb-12 sm:px-8 lg:grid-cols-[0.88fr_0.82fr] lg:items-end lg:px-12 xl:px-16">
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
                <LocalizedText en="Whole pipeline control" fr="Contrôle du pipeline complet" />
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                <LocalizedText
                  en="One control surface for search agents, model routing, and report output."
                  fr="Une seule surface de contrôle pour les agents de recherche, le routage des modèles et les rapports."
                />
              </h2>
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                <LocalizedText
                  en="Labs gives operators a clean place to keep screening configurations current: source collection, synthesis, rendering, prompt versions, model choices, and usage telemetry all move together."
                  fr="Labs donne aux opérateurs un espace propre pour garder les configurations de vérification à jour : collecte de sources, synthèse, rendu, versions de prompts, choix de modèles et télémétrie avancent ensemble."
                />
              </p>
            </div>

            <PipelineControlPanel />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <LocalizedText en="Deep-search intelligence" fr="Intelligence de recherche approfondie" />
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                <LocalizedText
                  en="Agent swarms, deep prompts, and multi-model routing."
                  fr="Essaims d'agents, prompts profonds et routage multi-modèles."
                />
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end">
              <LocalizedText
                en="Tracer Labs specializes in web deep search through agent swarm orchestration, contextual prompt engineering, and high-efficiency model routing, keeping screening workflows ready for the strongest intelligence models available to each task."
                fr="Tracer Labs se spécialise dans la recherche web approfondie grâce à l'orchestration d'essaims d'agents, l'ingénierie de prompts contextuels et le routage efficace des modèles, afin de garder les flux de vérification prêts pour les meilleurs modèles d'intelligence adaptés à chaque tâche."
              />
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
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

          <div className="relative mt-10 overflow-hidden border-y border-border py-5">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
            <div className="flex w-max animate-marquee items-center gap-3">
              {[...modelFamilies, ...modelFamilies, ...modelFamilies].map((name, index) => (
                <span
                  key={`${name}-${index}`}
                  className="inline-flex h-11 items-center rounded-full border border-border bg-card px-5 text-sm font-semibold text-foreground shadow-sm"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-16 flex flex-col gap-3 rounded-[24px] border border-border bg-card px-5 py-4 text-[#2459B8] shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center text-[#2459B8]">
                <Network className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight">
                  <LocalizedText en="Founding openings coming soon" fr="Places fondatrices bientôt disponibles" />
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  <LocalizedText
                    en="A small early group will help shape the first Tracer Labs service integrations."
                    fr="Un petit groupe initial aidera à façonner les premières intégrations Tracer Labs."
                  />
                </p>
              </div>
            </div>
            <span className="w-fit rounded-full border border-[#2459B8]/25 bg-background px-3 py-1.5 text-xs font-semibold">
              <LocalizedText en="Founding access" fr="Accès fondateur" />
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <LocalizedText en="Agent configuration" fr="Configuration des agents" />
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                <LocalizedText
                  en="A service layer for business intelligence agents."
                  fr="Une couche de service pour agents d'intelligence d'affaires."
                />
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
                <LocalizedText
                  en="Tracer Labs can extend beyond research security into coordinated deep-search workflows for teams that need source-backed intelligence, repeatable analysis, and configurable agent behavior."
                  fr="Tracer Labs peut s'étendre au-delà de la sécurité de la recherche vers des flux de recherche approfondie coordonnés pour les équipes qui ont besoin d'intelligence sourcée, d'analyse répétable et d'agents configurables."
                />
              </p>
            </div>

            <div className="grid gap-3">
              {businessLines.map((item, index) => (
                <article
                  key={item.title}
                  className="group flex items-start gap-4 rounded-[22px] border border-border bg-card/80 px-5 py-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:border-[#2459B8]/28 hover:shadow-[var(--floating-shadow)] lg:animate-[labs-business-line_7s_ease-in-out_infinite]"
                  style={{ animationDelay: `${index * 0.18}s` }}
                >
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center text-[#2459B8]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        <LocalizedText en={item.domain} fr={item.domainFr} />
                      </span>
                      <h3 className="text-base font-semibold tracking-tight">
                        <LocalizedText en={item.title} fr={item.titleFr} />
                      </h3>
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
                  en="Configure the intelligence layer inside the systems you already run."
                  fr="Configurez la couche d'intelligence dans les systèmes que vous utilisez déjà."
                />
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
                <LocalizedText
                  en="As Labs matures, teams will be able to connect Tracer intelligence to case-management tools, grant workflows, vendor systems, and internal review queues while keeping prompts, models, and telemetry governed from one place."
                  fr="À mesure que Labs évolue, les équipes pourront connecter l'intelligence Tracer aux outils de gestion de dossiers, flux de subventions, systèmes fournisseurs et files de revue internes, tout en gouvernant prompts, modèles et télémétrie au même endroit."
                />
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {controlLayers.map(({ icon: Icon, label, labelFr, copy, copyFr }) => (
                <article
                  key={label}
                  className="rounded-[22px] border border-border bg-card/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2459B8]/28 hover:shadow-[var(--floating-shadow)]"
                >
                  <Icon className="h-5 w-5 text-[#2459B8]" />
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">
                    <LocalizedText en={label} fr={labelFr} />
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    <LocalizedText en={copy} fr={copyFr} />
                  </p>
                </article>
              ))}
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
            <LocalizedText en="Configuration path" fr="Parcours de configuration" />
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">
            <LocalizedText en="Whole cycle control" fr="Contrôle du cycle complet" />
          </h3>
        </div>
        <span className="w-fit rounded-full bg-[#2459B8]/10 px-3 py-1.5 text-xs font-semibold text-[#2459B8]">
          <LocalizedText en="Always current" fr="Toujours à jour" />
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
