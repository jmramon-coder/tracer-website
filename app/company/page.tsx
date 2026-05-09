import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  CheckCircle2,
  Compass,
  FileSearch,
  Linkedin,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { LocalizedText } from "@/components/localized-text"
import { WaitlistButton } from "@/components/waitlist-button"

export const metadata: Metadata = {
  title: "Company",
  description:
    "Tracer is building quiet, professional research security due diligence software for Canadian research institutions.",
}

const visionCards = [
  {
    icon: ShieldCheck,
    title: "Human review stays central",
    titleFr: "La revue humaine reste centrale",
    copy: "Tracer gathers, structures, and renders facts so research security teams can review with better context.",
    copyFr:
      "Tracer rassemble, structure et rend les faits pour que les équipes de sécurité de la recherche révisent avec un meilleur contexte.",
  },
  {
    icon: FileSearch,
    title: "Evidence should be traceable",
    titleFr: "Les preuves doivent être traçables",
    copy: "Every workflow is designed around sources, citations, limitations, and audit-ready records.",
    copyFr:
      "Chaque flux est conçu autour des sources, citations, limites et dossiers prêts pour l'audit.",
  },
  {
    icon: Network,
    title: "Trusted science should move",
    titleFr: "La science fiable doit avancer",
    copy: "Research security should help good collaborations move forward, not bury teams in repeated manual checks.",
    copyFr:
      "La sécurité de la recherche doit aider les bonnes collaborations à avancer, pas enfouir les équipes sous des vérifications répétées.",
  },
] as const

const operatingPrinciples = [
  {
    label: "Calm software",
    labelFr: "Logiciel calme",
    copy: "Interfaces built for repeated institutional work: clear status, dense context, and no alarmist theatre.",
    copyFr:
      "Des interfaces conçues pour le travail institutionnel répété : statut clair, contexte dense et aucun ton alarmiste.",
  },
  {
    label: "Canadian first",
    labelFr: "D'abord canadien",
    copy: "Bilingual workflows, Canadian research security policy context, and data expectations guide the product from the start.",
    copyFr:
      "Les flux bilingues, le contexte canadien de sécurité de la recherche et les attentes de données guident le produit dès le départ.",
  },
  {
    label: "Operational proof",
    labelFr: "Preuve opérationnelle",
    copy: "The platform is shaped around cases, entities, activity, reports, exports, and review history.",
    copyFr:
      "La plateforme est structurée autour des dossiers, entités, activités, rapports, exports et historiques de revue.",
  },
  {
    label: "Adaptive intelligence",
    labelFr: "Intelligence adaptative",
    copy: "Tracer Labs keeps prompts, model routing, synthesis, and report rendering current as the model landscape changes.",
    copyFr:
      "Tracer Labs garde les prompts, le routage de modèles, la synthèse et le rendu de rapports à jour lorsque les modèles évoluent.",
  },
] as const

const founders = [
  {
    initials: "01",
    name: "Founder profile",
    nameFr: "Profil fondateur",
    role: "Product, intelligence systems, and platform direction",
    roleFr: "Produit, systèmes d'intelligence et direction plateforme",
    bio: "Building the operating layer for research security teams: from institutional workflow design to the intelligence surfaces that make evidence reviewable.",
    bioFr:
      "Développe la couche opérationnelle pour les équipes de sécurité de la recherche : du design des flux institutionnels aux surfaces d'intelligence qui rendent les preuves révisables.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    initials: "02",
    name: "Research security lead",
    nameFr: "Responsable sécurité de la recherche",
    role: "Policy translation, RSO workflow, and institutional review",
    roleFr: "Traduction des politiques, flux RSO et revue institutionnelle",
    bio: "A placeholder profile for the domain lead shaping how Tracer reflects Canadian research security expectations and human review practice.",
    bioFr:
      "Profil placeholder pour la personne experte du domaine qui façonne la façon dont Tracer reflète les attentes canadiennes et la pratique de revue humaine.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    initials: "03",
    name: "Engineering partner",
    nameFr: "Partenaire ingénierie",
    role: "Secure infrastructure, data architecture, and product reliability",
    roleFr: "Infrastructure sécurisée, architecture de données et fiabilité produit",
    bio: "A placeholder profile for the technical partner focused on dependable systems, privacy-aware architecture, and audit-ready product behavior.",
    bioFr:
      "Profil placeholder pour le partenaire technique axé sur les systèmes fiables, l'architecture sensible à la confidentialité et les comportements auditables du produit.",
    linkedin: "https://www.linkedin.com/",
  },
] as const

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative z-10 overflow-hidden rounded-b-[34px] bg-hero pt-28 text-hero-foreground md:pt-32">
        <Image
          src="/brand/bg-tracer-web-1.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78),rgba(0,0,0,0.44)_54%,rgba(0,0,0,0.22))]" />

        <div className="relative mx-auto grid min-h-[82svh] max-w-[1500px] gap-10 px-6 pb-16 sm:px-8 lg:grid-cols-[0.9fr_0.58fr] lg:items-end lg:px-12 xl:px-16">
          <div className="max-w-5xl">
            <BrandLogo
              variant="white"
              markClassName="h-12 w-14"
              textClassName="text-hero-foreground"
            />
            <p className="mt-12 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              <LocalizedText en="Company" fr="Entreprise" />
            </p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-tight md:text-7xl">
              <LocalizedText
                en="A Canadian company building the trust layer for research operations."
                fr="Une entreprise canadienne qui bâtit la couche de confiance des opérations de recherche."
              />
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76">
              <LocalizedText
                en="Tracer exists to help research institutions run structured, auditable due diligence workflows while preserving the judgment of human research security officers."
                fr="Tracer aide les institutions de recherche à mener des flux de diligence raisonnable structurés et auditables, tout en préservant le jugement des responsables de sécurité de la recherche."
              />
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WaitlistButton className="h-12 bg-[#2459B8] px-6 text-white shadow-xl shadow-[#2459B8]/30 hover:bg-[#1E4C9D]">
                <LocalizedText en="Request access" fr="Demander l'accès" />
              </WaitlistButton>
              <Link
                href="/platform"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <LocalizedText en="See the platform" fr="Voir la plateforme" />
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/16 bg-black/22 p-5 shadow-2xl shadow-black/25 backdrop-blur-2xl">
            <div className="rounded-[24px] border border-white/12 bg-white/10 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/52">
                <LocalizedText en="Vision" fr="Vision" />
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                <LocalizedText
                  en="Make research security repeatable without making it mechanical."
                  fr="Rendre la sécurité de la recherche répétable sans la rendre mécanique."
                />
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/66">
                <LocalizedText
                  en="The best review systems make evidence easier to inspect, context easier to share, and uncertainty easier to name."
                  fr="Les meilleurs systèmes de revue rendent les preuves plus faciles à inspecter, le contexte plus facile à partager et l'incertitude plus facile à nommer."
                />
              </p>
              <div className="mt-6 grid gap-2">
                {[
                  ["Human decision layer", "Couche de décision humaine"],
                  ["Source-backed reports", "Rapports appuyés par les sources"],
                  ["Bilingual institutional workflows", "Flux institutionnels bilingues"],
                ].map(([en, fr]) => (
                  <div
                    key={en}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-3 py-3 text-sm text-white/72"
                  >
                    <CheckCircle2 className="h-4 w-4 text-white" />
                    <LocalizedText en={en} fr={fr} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-6 rounded-t-[28px] bg-card py-20 shadow-[var(--surface-shadow)] md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <LocalizedText en="What we believe" fr="Ce que nous croyons" />
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                <LocalizedText
                  en="Research security should accelerate trusted collaboration."
                  fr="La sécurité de la recherche doit accélérer la collaboration fiable."
                />
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end">
              <LocalizedText
                en="We are building Tracer for institutions that need operational clarity: who was screened, what sources were checked, what evidence was found, and where human review should continue."
                fr="Nous bâtissons Tracer pour les institutions qui ont besoin de clarté opérationnelle : qui a été vérifié, quelles sources ont été consultées, quelles preuves ont été trouvées et où la revue humaine doit se poursuivre."
              />
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {visionCards.map(({ icon: Icon, title, titleFr, copy, copyFr }) => (
              <article
                key={title}
                className="rounded-[24px] border border-border bg-background p-6 shadow-sm"
              >
                <Icon className="h-6 w-6 text-[#2459B8]" />
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  <LocalizedText en={title} fr={titleFr} />
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  <LocalizedText en={copy} fr={copyFr} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <LocalizedText en="Operating principles" fr="Principes d'opération" />
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                <LocalizedText
                  en="A product culture for high-trust institutional work."
                  fr="Une culture produit pour le travail institutionnel à haute confiance."
                />
              </h2>
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                <LocalizedText
                  en="Tracer is designed to feel quiet, precise, and dependable: a serious workspace for teams who need to explain their review process later."
                  fr="Tracer est conçu pour être calme, précis et fiable : un espace sérieux pour les équipes qui devront expliquer leur processus de revue plus tard."
                />
              </p>
            </div>

            <div className="divide-y divide-border overflow-hidden rounded-[28px] border border-border bg-card shadow-[var(--panel-shadow)]">
              {operatingPrinciples.map((item, index) => (
                <article
                  key={item.label}
                  className="grid gap-5 p-6 sm:grid-cols-[72px_1fr] md:p-8"
                >
                  <div className="font-mono text-sm font-semibold text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      <LocalizedText en={item.label} fr={item.labelFr} />
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      <LocalizedText en={item.copy} fr={item.copyFr} />
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <LocalizedText en="Founders" fr="Fondateurs" />
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                <LocalizedText
                  en="A founder gallery ready for the team behind Tracer."
                  fr="Une galerie fondatrice prête pour l'équipe derrière Tracer."
                />
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end">
              <LocalizedText
                en="These cards are structured as polished placeholders: add real portraits, LinkedIn URLs, and final bios when the public team page is ready."
                fr="Ces cartes sont des placeholders soignés : ajoutez les vrais portraits, URLs LinkedIn et biographies finales lorsque la page équipe publique sera prête."
              />
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {founders.map((founder) => (
              <article
                key={founder.initials}
                className="overflow-hidden rounded-[28px] border border-border bg-background shadow-sm"
              >
                <div className="relative min-h-[260px] overflow-hidden bg-[#F6F6F5] dark:bg-white/[0.04]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_22%,rgba(36,89,184,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(230,230,227,0.72))] dark:bg-[radial-gradient(circle_at_32%_22%,rgba(36,89,184,0.28),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
                  <Image
                    src="/brand/glass-logo-tracer.png"
                    alt=""
                    width={523}
                    height={478}
                    className="absolute bottom-5 right-5 h-auto w-32 opacity-50 drop-shadow-[0_20px_50px_rgba(15,23,42,0.22)]"
                  />
                  <div className="absolute left-6 top-6 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur-xl">
                    <LocalizedText en="Photo placeholder" fr="Placeholder photo" />
                  </div>
                  <div className="absolute bottom-6 left-6 flex h-20 w-20 items-center justify-center rounded-[26px] border border-border bg-card text-2xl font-semibold tracking-tight shadow-sm">
                    {founder.initials}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">
                        <LocalizedText en={founder.name} fr={founder.nameFr} />
                      </h3>
                      <p className="mt-2 text-sm font-medium text-[#2459B8]">
                        <LocalizedText en={founder.role} fr={founder.roleFr} />
                      </p>
                    </div>
                    <Link
                      href={founder.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn profile"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-muted-foreground">
                    <LocalizedText en={founder.bio} fr={founder.bioFr} />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:px-12 xl:px-16">
          <div className="rounded-[30px] border border-border bg-card p-8 shadow-[var(--panel-shadow)] md:p-10">
            <Compass className="h-7 w-7 text-[#2459B8]" />
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <LocalizedText en="Where we are going" fr="Où nous allons" />
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              <LocalizedText
                en="A research security company first, an intelligence infrastructure company over time."
                fr="D'abord une entreprise de sécurité de la recherche, puis une infrastructure d'intelligence avec le temps."
              />
            </h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              <LocalizedText
                en="Tracer starts with Canadian research institutions because the workflow is urgent, policy-driven, and evidence-heavy. The same Labs layer can later help teams configure agent swarms for other high-trust web deep-search contexts."
                fr="Tracer commence avec les institutions de recherche canadiennes parce que le flux est urgent, guidé par les politiques et riche en preuves. La même couche Labs pourra ensuite aider d'autres équipes à configurer des essaims d'agents pour des contextes de recherche web à haute confiance."
              />
            </p>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[30px] text-white shadow-[var(--modal-shadow)]">
            <Image
              src="/brand/tracer-labs-image-2.png"
              alt=""
              fill
              sizes="(min-width: 1280px) 680px, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.74))]" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  <LocalizedText en="Tracer Labs" fr="Tracer Labs" />
                </p>
              </div>
              <h3 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                <LocalizedText
                  en="Keep the intelligence layer current as models, sources, and institutional needs evolve."
                  fr="Garder la couche d'intelligence à jour lorsque les modèles, les sources et les besoins institutionnels évoluent."
                />
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 pb-20 sm:px-8 md:pb-28 lg:px-12 xl:px-16">
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 overflow-hidden rounded-[30px] border border-border bg-card p-8 shadow-[var(--panel-shadow)] md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <BrandLogo />
            <h2 className="mt-8 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              <LocalizedText
                en="Help shape the next standard for research security operations."
                fr="Aidez à façonner le prochain standard des opérations de sécurité de la recherche."
              />
            </h2>
          </div>
          <WaitlistButton className="h-12 bg-[#2459B8] px-6 text-white shadow-xl shadow-[#2459B8]/25 hover:bg-[#1E4C9D]">
            <LocalizedText en="Join waitlist" fr="Rejoindre la liste" />
          </WaitlistButton>
        </div>
      </section>

      <Footer />
    </main>
  )
}
