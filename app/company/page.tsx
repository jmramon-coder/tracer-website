import Image from "next/image"
import {
  ArrowUpRight,
  CheckCircle2,
  Compass,
  FileSearch,
  Network,
  ShieldCheck,
} from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { Header } from "@/components/header"
import { LocalizedText } from "@/components/localized-text"
import { MapleLeaf } from "@/components/maple-leaf"
import { TrackedLink } from "@/components/tracked-link"
import { WaitlistButton } from "@/components/waitlist-button"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Company",
  description:
    "Tracer is building quiet, professional research security due diligence software for Canadian research institutions.",
  path: "/company",
})

const visionCards = [
  {
    icon: ShieldCheck,
    title: "Trust should be usable",
    titleFr: "La confiance doit être utilisable",
    copy: "Research security policies matter most when teams can turn them into clear, repeatable review practice.",
    copyFr:
      "Les politiques de sécurité de la recherche comptent surtout lorsque les équipes peuvent les transformer en pratique de revue claire et répétable.",
  },
  {
    icon: FileSearch,
    title: "Evidence should carry context",
    titleFr: "Les preuves doivent garder leur contexte",
    copy: "Sources, limitations, uncertainty, and reasoning should stay attached from intake to leadership review.",
    copyFr:
      "Les sources, limites, incertitudes et raisonnements doivent rester liés du dépôt initial à la revue de direction.",
  },
  {
    icon: Network,
    title: "Good collaborations should move",
    titleFr: "Les bonnes collaborations doivent avancer",
    copy: "The goal is not more friction. It is faster clarity for trusted work and better escalation when review is needed.",
    copyFr:
      "L'objectif n'est pas d'ajouter de la friction. Il est d'obtenir une clarté plus rapide pour les travaux fiables et une meilleure escalade lorsque la revue est nécessaire.",
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

const footerNavLinks = [
  { href: "/", label: "Platform", labelFr: "Plateforme" },
  { href: "/labs", label: "Labs", labelFr: "Labs" },
  { href: "/solutions", label: "Pricing", labelFr: "Tarifs" },
] as const

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative z-10 overflow-hidden rounded-b-[34px] bg-hero pt-24 text-hero-foreground">
        <Image
          src="/brand/bg-tracer-web-1.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78),rgba(0,0,0,0.44)_54%,rgba(0,0,0,0.22))]" />

        <div className="relative mx-auto grid min-h-[74svh] max-w-[1500px] gap-10 px-6 pb-12 sm:px-8 lg:grid-cols-[0.9fr_0.58fr] lg:items-end lg:px-12 xl:px-16">
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
              <WaitlistButton
                trackingLocation="company_hero"
                trackingLabel="Request access"
                className="h-12 bg-[#2459B8] px-6 text-white shadow-xl shadow-[#2459B8]/30 hover:bg-[#1E4C9D]"
              >
                <LocalizedText en="Request access" fr="Demander l'accès" />
              </WaitlistButton>
              <TrackedLink
                href="/"
                trackingParams={{
                  navigation_type: "company_hero_cta",
                  link_text: "See the platform",
                }}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <LocalizedText en="See the platform" fr="Voir la plateforme" />
                <ArrowUpRight className="h-4 w-4" />
              </TrackedLink>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/16 bg-black/24 p-6 shadow-2xl shadow-black/25 backdrop-blur-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/52">
              <LocalizedText en="Vision" fr="Vision" />
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              <LocalizedText
                en="Make research security repeatable without making it mechanical."
                fr="Rendre la sécurité de la recherche répétable sans la rendre mécanique."
              />
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/68">
              <LocalizedText
                en="Tracer is a fact-gathering and workflow layer: evidence stays source-backed, uncertainty stays visible, and final judgment stays with institutional reviewers."
                fr="Tracer est une couche de collecte de faits et de flux de travail : les preuves restent sourcées, l'incertitude reste visible et le jugement final demeure entre les mains des réviseurs institutionnels."
              />
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/72">
              {[
                ["Human decision layer", "Couche de décision humaine"],
                ["Source-backed reports", "Rapports appuyés par les sources"],
                ["Bilingual institutional workflows", "Flux institutionnels bilingues"],
              ].map(([en, fr]) => (
                <div key={en} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                  <LocalizedText en={en} fr={fr} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-6 rounded-t-[28px] bg-card py-20 shadow-[var(--surface-shadow)] md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <LocalizedText en="What we believe" fr="Notre conviction" />
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                <LocalizedText
                  en="Great science needs a calmer path through trust."
                  fr="La grande science a besoin d'un chemin plus calme vers la confiance."
                />
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end">
              <LocalizedText
                en="We believe research security should make responsible collaboration easier to defend, easier to explain, and easier to keep moving without turning judgment into a machine decision."
                fr="Nous croyons que la sécurité de la recherche doit rendre la collaboration responsable plus défendable, plus explicable et plus fluide, sans transformer le jugement en décision automatisée."
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
                <Image
                  src="/brand/tracer-labs-v2.png"
                  alt=""
                  width={42}
                  height={42}
                  className="h-9 w-9 object-contain"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    Tracer Labs
                  </p>
                  <p className="mt-1 text-xs text-white/62">
                    <LocalizedText
                      en="Innovation workspace for adaptive screening intelligence."
                      fr="Espace d'innovation pour l'intelligence de vérification adaptative."
                    />
                  </p>
                </div>
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

      <section className="relative isolate overflow-hidden bg-[#07101F] text-white">
        <Image
          src="/brand/tracer-nature-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(0,0,0,0.62),rgba(0,0,0,0.28)_48%,rgba(0,0,0,0.18)_76%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,16,31,0)_0%,rgba(7,16,31,0.24)_36%,rgba(7,16,31,0.82)_70%,#07101F_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-[52%] bg-[radial-gradient(circle_at_12%_92%,rgba(36,89,184,0.36),transparent_36%),radial-gradient(circle_at_82%_100%,rgba(10,72,48,0.34),transparent_32%)]" />

        <div className="relative mx-auto flex min-h-[640px] max-w-[1500px] items-end px-6 py-20 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <BrandLogo
              variant="white"
              markClassName="h-9 w-10"
              textClassName="text-white"
            />
            <h2 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              <LocalizedText
                en="Help shape the next standard for research security operations."
                fr="Aidez à façonner le prochain standard des opérations de sécurité de la recherche."
              />
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
              <LocalizedText
                en="Tracer is being built with institutions that want trust, evidence, and collaboration to move together. Join the early group helping define how modern research security work should feel."
                fr="Tracer est bâti avec des institutions qui veulent faire avancer confiance, preuves et collaboration ensemble. Rejoignez le premier groupe qui aide à définir l'expérience moderne de la sécurité de la recherche."
              />
            </p>
            <WaitlistButton
              trackingLocation="company_bottom_cta"
              trackingLabel="Join waitlist"
              className="mt-9 h-12 bg-[#2459B8] px-6 text-white shadow-xl shadow-[#2459B8]/30 ring-1 ring-white/15 hover:-translate-y-0.5 hover:bg-[#1E4C9D]"
            >
              <LocalizedText en="Join waitlist" fr="Rejoindre la liste" />
            </WaitlistButton>
          </div>
        </div>

        <footer className="relative border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 md:py-20 lg:px-12 xl:px-16">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
              <div className="max-w-sm">
                <TrackedLink
                  href="/"
                  trackingParams={{
                    navigation_type: "company_footer",
                    link_text: "Tracer",
                  }}
                  className="mb-6 flex text-white"
                >
                  <BrandLogo
                    variant="white"
                    markClassName="h-8 w-9"
                    textClassName="text-white"
                  />
                </TrackedLink>
                <p className="text-sm leading-6 text-white/62">
                  <LocalizedText
                    en="Structured research security due diligence for high-trust institutional workflows."
                    fr="Diligence raisonnable structurée en sécurité de la recherche pour des flux institutionnels de haute confiance."
                  />
                </p>
                <p className="mt-8 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-white/48">
                  <LocalizedText en="A Canadian Company" fr="Une entreprise canadienne" />
                  <MapleLeaf size={12} />
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/82">
                    <LocalizedText en="Website" fr="Site" />
                  </p>
                  <nav className="grid gap-3">
                    {footerNavLinks.map((item) => (
                      <TrackedLink
                        key={item.href}
                        href={item.href}
                        trackingParams={{
                          navigation_type: "company_footer",
                          link_text: item.label,
                        }}
                        className="text-sm text-white/54 transition-colors hover:text-white"
                      >
                        <LocalizedText en={item.label} fr={item.labelFr} />
                      </TrackedLink>
                    ))}
                  </nav>
                </div>
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/82">
                    <LocalizedText en="Legal" fr="Légal" />
                  </p>
                  <nav className="grid gap-3">
                    <TrackedLink
                      href="/privacy"
                      trackingParams={{
                        navigation_type: "company_footer_legal",
                        link_text: "Privacy Policy",
                      }}
                      className="text-sm text-white/54 transition-colors hover:text-white"
                    >
                      <LocalizedText en="Privacy Policy" fr="Politique de confidentialité" />
                    </TrackedLink>
                    <TrackedLink
                      href="/blog"
                      trackingParams={{
                        navigation_type: "company_footer_legal",
                        link_text: "Blog",
                      }}
                      className="text-sm text-white/54 transition-colors hover:text-white"
                    >
                      <LocalizedText en="Blog" fr="Blogue" />
                    </TrackedLink>
                  </nav>
                </div>
              </div>
            </div>

            <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] tracking-wide text-white/42">
                © {new Date().getFullYear()} Tracer.{" "}
                <LocalizedText en="All rights reserved." fr="Tous droits réservés." />
              </p>
              <p className="text-[11px] tracking-wide text-white/42">
                <LocalizedText
                  en="Designed for universities worldwide"
                  fr="Conçu pour les universités du monde entier"
                />
              </p>
            </div>
          </div>
        </footer>
      </section>
    </main>
  )
}
