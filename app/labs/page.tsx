import Image from "next/image"
import type { ReactNode } from "react"
import {
  ArrowRight,
  BrainCircuit,
  FileText,
  Gauge,
  Layers3,
  Search,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { LabsHeroVisual } from "@/components/labs-hero-visual"
import { LocalizedText } from "@/components/localized-text"
import { alternatesFor } from "@/lib/localized-paths"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Tracer Labs",
  description:
    "Tracer Labs is the operating layer where Tracer tunes search depth, reporting structure, and model routing for research security screening.",
  path: "/labs",
  languages: alternatesFor("/labs", "/fr/labs"),
})

const contactHref = "mailto:hello@tracersecurity.ca?subject=Tracer%20Labs%20screening%20need"

const shapingLayers = [
  {
    icon: Search,
    title: "Search depth",
    titleFr: "Profondeur de recherche",
    copy:
      "We tune how deeply Tracer searches across sources, languages, and registries for each screening type, and adjust as new frameworks and lists emerge.",
    copyFr:
      "Nous réglons la profondeur avec laquelle Tracer recherche dans les sources, langues et registres pour chaque type de vérification, puis nous l'ajustons lorsque de nouveaux cadres et listes apparaissent.",
  },
  {
    icon: FileText,
    title: "Reporting structure",
    titleFr: "Structure des rapports",
    copy:
      "We shape what findings appear in a report, how they're grouped, and how each verdict is presented for analyst review.",
    copyFr:
      "Nous déterminons les constats qui apparaissent dans un rapport, leur regroupement et la présentation de chaque verdict pour faciliter l'analyse des résultats.",
  },
  {
    icon: Gauge,
    title: "Model routing",
    titleFr: "Déploiement des modèles",
    copy:
      "We choose which AI model handles each step of the pipeline and update those choices as better systems become available.",
    copyFr:
      "Nous choisissons le modèle d'IA adapté à chaque étape du pipeline et mettons ces choix à jour lorsque de meilleurs systèmes deviennent disponibles.",
  },
] as const

const pipelineStages = [
  {
    step: "01",
    icon: Search,
    title: "Discover",
    titleFr: "Découvrir",
    description:
      "Multiple specialized agents search across corporate registries, sanctions lists, news outlets, legal records, and academic databases in parallel.",
    descriptionFr:
      "Plusieurs agents spécialisés recherchent en parallèle dans les registres d'entreprises, les listes de sanctions, les médias, les dossiers juridiques et les bases académiques.",
  },
  {
    step: "02",
    icon: BrainCircuit,
    title: "Synthesize",
    titleFr: "Synthétiser",
    description:
      "Findings are reconciled, cross-checked, and tagged with their sources.",
    descriptionFr:
      "Les constats sont réconciliés, recoupés et associés à leurs sources.",
  },
  {
    step: "03",
    icon: Layers3,
    title: "Render",
    titleFr: "Présenter",
    description:
      "The result becomes a structured report: verdicts, citations, signal cards, ready for analyst review.",
    descriptionFr:
      "Le résultat devient un rapport structuré : verdicts, citations et indicateurs de risque, prêts pour l'analyse de vos experts.",
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

const futureDirections = [
  {
    title: "Vendor and supplier screening",
    titleFr: "Vérification des fournisseurs",
  },
  {
    title: "Grant, partnership, and donor review",
    titleFr: "Revue de subventions, partenariats et donateurs",
  },
  {
    title: "Sanctions and exposure monitoring",
    titleFr: "Surveillance des sanctions et expositions",
  },
  {
    title: "Custom screening workflows",
    titleFr: "Flux de vérification personnalisés",
  },
] as const

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative overflow-hidden bg-[#07101F] pt-24 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(36,89,184,0.22),transparent_44%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_36%)]" />
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
                    en="The operating layer behind every screening."
                    fr="La couche opérationnelle derrière chaque vérification."
                  />
                </p>
              </div>
            </div>
            <p className="mt-9 text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
              <LocalizedText en="Labs" fr="Labs" />
            </p>
            <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
              <LocalizedText
                en="The operating layer behind every screening."
                fr="La couche opérationnelle derrière chaque vérification."
              />
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/72">
              <LocalizedText
                en="Labs is where we tune how Tracer works: what it searches, how findings come together, and how reports read. It's our internal workspace for keeping the platform current as research security frameworks and AI models evolve."
                fr="Labs est l'endroit où nous réglons le fonctionnement de Tracer : ce qu'il recherche, la façon dont les constats convergent et la manière dont les rapports s'affichent. C'est notre espace interne pour garder la plateforme à jour à mesure que les cadres de sécurité de la recherche et les modèles d'IA évoluent."
              />
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ContactButton variant="blue" />
            </div>
          </div>

          <LabsHeroVisual />
        </div>
      </section>

      <section className="-mt-6 rounded-t-[28px] bg-card py-20 shadow-[var(--surface-shadow)] md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <SectionHeader
            eyebrow={<LocalizedText en="What we shape in Labs" fr="Ce que nous façonnons dans Labs" />}
            title={<LocalizedText en="Three layers, continuously refined." fr="Trois couches, affinées en continu." />}
            copy={
              <LocalizedText
                en="Labs keeps the product precise without making the experience feel technical. The work happens behind the scenes so analysts can focus on review."
                fr="Labs garde le produit précis sans rendre l'expérience technique. Le travail se fait en arrière-plan pour que vos experts se concentrent sur l'analyse."
              />
            }
          />

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {shapingLayers.map(({ icon: Icon, title, titleFr, copy, copyFr }) => (
              <article
                key={title}
                className="rounded-[24px] border border-border bg-background p-6"
              >
                <Icon className="h-6 w-6 text-[#2459B8]" />
                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  <LocalizedText en={title} fr={titleFr} />
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  <LocalizedText en={copy} fr={copyFr} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <LocalizedText en="How it works" fr="Comment ça fonctionne" />
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                <LocalizedText
                  en="Three stages, one workflow."
                  fr="Trois étapes, un seul système adapté à vos besoins."
                />
              </h2>
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                <LocalizedText
                  en="The same sequence powers screening from first source discovery to the final report a human analyst can review."
                  fr="La même séquence alimente la vérification, de la première découverte de sources jusqu'au rapport final qu'un analyste peut réviser."
                />
              </p>
            </div>

            <PipelineControlPanel />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-card py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <SectionHeader
            eyebrow={<LocalizedText en="Model coverage" fr="Couverture des modèles" />}
            title={<LocalizedText en="Models change. Tracer keeps up." fr="Les modèles changent. Tracer s'adapte." />}
            copy={
              <LocalizedText
                en="We route each step of the pipeline to the model best suited for the task and update that routing as frontier systems improve. The platform doesn't get locked into a single provider, and clients don't pay the cost of that drift."
                fr="Nous connectons chaque étape du pipeline vers le modèle le mieux adapté à la tâche et mettons cet arrimage à jour lorsque les systèmes de pointe s'améliorent. Tracer s'adapte constamment, et les utilisateurs en profitent."
              />
            }
          />

          <div className="relative mt-12 overflow-hidden py-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-card to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-card to-transparent" />
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
                    className="h-16 w-16 shrink-0 object-contain opacity-70 transition-[filter,opacity] group-hover:opacity-100 group-hover:[filter:brightness(0)_saturate(100%)_invert(31%)_sepia(84%)_saturate(1648%)_hue-rotate(207deg)_brightness(91%)_contrast(92%)] dark:invert dark:group-hover:invert-0"
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
          <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <LocalizedText en="Beyond research security" fr="Au-delà de la sécurité de la recherche" />
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                <LocalizedText
                  en="One method. Many directions."
                  fr="Une méthode. Plusieurs directions."
                />
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
                <LocalizedText
                  en="The same workflow, source discovery, synthesis, structured reporting, extends to any review where evidence and traceability matter. Research security is where Tracer started; Labs is where the next applications take shape."
                  fr="Le même flux, découverte de sources, synthèse et rapports structurés, s'étend à toute investigation où les preuves et la traçabilité comptent. La sécurité de la recherche est le point de départ de Tracer; Labs est l'endroit où les prochaines applications prennent forme."
                />
              </p>
            </div>

            <div className="grid gap-0">
              {futureDirections.map((item, index) => (
                <article
                  key={item.title}
                  className="group grid gap-4 border-b border-border py-6 last:border-b-0 sm:grid-cols-[3rem_1fr]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#2459B8]/24 text-[#2459B8] transition-colors group-hover:bg-[#2459B8] group-hover:text-white">
                    <span className="text-xs font-semibold tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    <LocalizedText en={item.title} fr={item.titleFr} />
                  </h3>
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
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78),rgba(0,0,0,0.48)_48%,rgba(0,0,0,0.16))]" />
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
                      en="The operating layer behind every screening."
                      fr="La couche opérationnelle derrière chaque vérification."
                    />
                  </p>
                </div>
              </div>
              <h2 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                <LocalizedText
                  en="Have a custom screening need?"
                  fr="Vous avez des besoins de vérification personnalisés?"
                />
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
                <LocalizedText
                  en="Every institution screens differently. Tell us what you're working on and we'll build it for you."
                  fr="Chaque institution a ses propres besoins. Dites-nous quels sont les vôtres et nous bâtirons la solution adaptée à vos processus de vérification."
                />
              </p>
              <div className="mt-9">
                <ContactButton variant="blue" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ContactButton({ variant = "light" }: { variant?: "blue" | "light" }) {
  return (
    <a
      href={contactHref}
      className={
        variant === "blue"
          ? "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#2459B8] px-6 text-sm font-semibold text-white shadow-xl shadow-[#2459B8]/25 transition-colors hover:bg-[#1E4C9D]"
          : "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-colors hover:bg-foreground/90"
      }
    >
      <LocalizedText en="Contact us" fr="Nous contacter" />
      <ArrowRight className="h-4 w-4" />
    </a>
  )
}

function PipelineControlPanel() {
  return (
    <div className="rounded-[28px] border border-border bg-card p-6 shadow-[var(--panel-shadow)]">
      <div className="mb-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <LocalizedText en="Workflow" fr="Flux de travail" />
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">
          <LocalizedText en="Three stages, one workflow" fr="Trois étapes, un seul système adapté à vos besoins" />
        </h3>
      </div>

      <div className="grid gap-3">
        {pipelineStages.map(({ step, icon: Icon, title, titleFr, description, descriptionFr }) => (
          <article
            key={title}
            className="grid gap-4 rounded-[20px] border border-border bg-background p-4 sm:grid-cols-[auto_1fr] sm:items-start"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2459B8]/10 text-[#2459B8]">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="grid gap-1">
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
          </article>
        ))}
      </div>
    </div>
  )
}

function SectionHeader({
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
