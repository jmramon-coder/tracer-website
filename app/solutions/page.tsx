import type { Metadata } from "next"
import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Download,
  FileText,
  Heart,
  SearchCheck,
  ShieldCheck,
} from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { HashScroll } from "@/components/hash-scroll"
import { Header } from "@/components/header"
import { LocalizedText } from "@/components/localized-text"
import { MapleLeaf } from "@/components/maple-leaf"
import { WaitlistButton } from "@/components/waitlist-button"
import { pricingPlans, resourceCards } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Solutions & Pricing",
  description:
    "Solutions and pricing for Tracer, a research security due diligence platform with structured screening workflows and Tracer Labs intelligence configuration.",
}

const solutionHighlights = [
  {
    icon: SearchCheck,
    label: "Pain",
    labelFr: "Irritant",
    title: "Manual review does not scale.",
    titleFr: "La revue manuelle ne passe pas à l'échelle.",
    copy: "Teams are asked to check sanctions, affiliations, publications, organizations, and open-source signals without a repeatable operating layer.",
    copyFr:
      "Les équipes doivent vérifier sanctions, affiliations, publications, organisations et signaux publics sans couche opérationnelle répétable.",
  },
  {
    icon: Heart,
    label: "Value",
    labelFr: "Valeur",
    title: "Speed, standard, collaboration, output.",
    titleFr: "Vitesse, standard, collaboration, sortie.",
    copy: "Five-minute reviews, the same screening standard, clearer collaboration, and export-ready evidence.",
    copyFr:
      "Revues en cinq minutes, même standard de vérification, collaboration plus claire et preuves prêtes à exporter.",
  },
  {
    icon: BrainCircuit,
    label: "Future",
    labelFr: "Vision",
    title: "The intelligence layer stays current.",
    titleFr: "La couche d'intelligence reste actuelle.",
    copy: "Institutions benefit from our intelligence layer: current models, deep-search prompts, in-house synthesis, and report visualization practices stay maintained behind the workflow.",
    copyFr:
      "Les institutions bénéficient de notre couche d'intelligence : modèles actuels, prompts de recherche approfondie, synthèse interne et pratiques de visualisation des rapports sont maintenus derrière le flux.",
  },
  {
    icon: ShieldCheck,
    label: "Governance",
    labelFr: "Gouvernance",
    title: "Human review remains the decision layer.",
    titleFr: "La revue humaine reste la couche décisionnelle.",
    copy: "Tracer gathers, synthesizes, renders, and preserves evidence. It does not replace institutional judgement or claim final risk decisions.",
    copyFr:
      "Tracer rassemble, synthétise, rend et conserve les preuves. Il ne remplace pas le jugement institutionnel et ne prétend pas décider du risque final.",
  },
] as const

const adoptionNotes = [
  {
    title: "Current model routing",
    titleFr: "Routage de modèles actuel",
    copy: "Screening workflows benefit from model choices that can evolve as stronger intelligence models become available.",
    copyFr: "Les flux de vérification bénéficient de choix de modèles qui évoluent lorsque de meilleurs modèles d'intelligence deviennent disponibles.",
  },
  {
    title: "Deep-search prompts",
    titleFr: "Prompts de recherche approfondie",
    copy: "Our search prompts target the entity, jurisdiction, source context, and evidence standard before synthesis begins.",
    copyFr: "Nos prompts ciblent l'entité, la juridiction, le contexte des sources et le standard de preuve avant la synthèse.",
  },
  {
    title: "Synthesis and visualization",
    titleFr: "Synthèse et visualisation",
    copy: "Findings are synthesized, structured, and rendered into reviewable cards rather than left as raw search output.",
    copyFr: "Les constats sont synthétisés, structurés et rendus en fiches révisables plutôt que laissés comme résultats bruts.",
  },
] as const

const footerNavLinks = [
  { href: "/platform", label: "Platform", labelFr: "Plateforme" },
  { href: "/labs", label: "Labs", labelFr: "Labs" },
  { href: "/solutions", label: "Solutions & Pricing", labelFr: "Solutions et tarifs" },
  { href: "/resources", label: "Resources", labelFr: "Ressources" },
  { href: "/company", label: "Company", labelFr: "Entreprise" },
] as const

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HashScroll />

      <section className="relative z-10 overflow-hidden rounded-b-[34px] bg-[#07101F] pt-28 text-white md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(36,89,184,0.34),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.07),transparent_32%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="relative mx-auto flex max-w-[1500px] flex-col items-center px-6 pb-14 text-center sm:px-8 lg:px-12 xl:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/58">
            <LocalizedText en="Solutions & transparent pricing" fr="Solutions et tarification transparente" />
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-tight md:text-7xl">
            <LocalizedText
              en="Proper research security should be accessible before procurement becomes opaque."
              fr="Une vraie sécurité de la recherche doit être accessible avant que l'achat devienne opaque."
            />
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/74">
            <LocalizedText
              en="Tracer gives Canadian research institutions transparent academic pricing and a source-backed screening workflow: intake, evidence, cited reports, audit history, and human RSO review in one calm system."
              fr="Tracer offre aux institutions de recherche canadiennes une tarification académique transparente et un flux de vérification sourcé : accueil, preuves, rapports cités, historique d'audit et revue humaine RSO dans un système calme."
            />
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#07101F] shadow-xl shadow-black/20 transition-colors hover:bg-white/90"
            >
              <LocalizedText en="See pricing" fr="Voir les tarifs" />
              <ArrowRight className="h-4 w-4" />
            </Link>
            <WaitlistButton className="h-12 border border-white/18 bg-white/10 px-6 text-white backdrop-blur-xl hover:bg-white/16">
              <LocalizedText en="Request access" fr="Demander l'accès" />
            </WaitlistButton>
          </div>

          <div className="mt-12 w-full max-w-5xl">
            <SolutionsReportPreview />
          </div>
        </div>
      </section>

      <section className="-mt-6 rounded-t-[28px] border-b border-border bg-background py-16 shadow-[var(--surface-shadow)] md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2459B8]">
                <LocalizedText en="What changes" fr="Ce qui change" />
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                <LocalizedText
                  en="One source-backed record from screening work to leadership review."
                  fr="Un dossier sourcé, de la vérification à la revue de direction."
                />
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end">
              <LocalizedText
                en="Tracer combines the core pain points, workflow value, institutional governance, and our maintained intelligence practices into one simple adoption story: better evidence gathering, stronger synthesis, and clearer reports without exposing teams to raw model operations."
                fr="Tracer rassemble les irritants, la valeur opérationnelle, la gouvernance institutionnelle et nos pratiques d'intelligence maintenues dans une histoire d'adoption simple : meilleure collecte de preuves, synthèse plus forte et rapports plus clairs sans exposer les équipes aux opérations brutes des modèles."
              />
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {solutionHighlights.map(({ icon: Icon, label, labelFr, title, titleFr, copy, copyFr }) => (
              <article
                key={title}
                className="rounded-[24px] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2459B8]/28 hover:shadow-[var(--floating-shadow)]"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`shrink-0 text-[#2459B8] ${
                      label === "Value" ? "h-7 w-7" : "h-6 w-6"
                    }`}
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    <LocalizedText en={label} fr={labelFr} />
                  </p>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  <LocalizedText en={title} fr={titleFr} />
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  <LocalizedText en={copy} fr={copyFr} />
                </p>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-3 rounded-[26px] border border-[#2459B8]/16 bg-[#2459B8]/[0.035] p-4 shadow-sm md:grid-cols-3">
            {adoptionNotes.map((note) => (
              <div
                key={note.title}
                className="rounded-[20px] border border-[#2459B8]/14 bg-card px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2459B8]/28 hover:shadow-[0_18px_48px_rgba(36,89,184,0.12)]"
              >
                <p className="text-sm font-semibold tracking-tight text-[#2459B8]">
                  <LocalizedText en={note.title} fr={note.titleFr} />
                </p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  <LocalizedText en={note.copy} fr={note.copyFr} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-28 bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2459B8]">
              <LocalizedText en="Transparent pricing" fr="Tarification transparente" />
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              <LocalizedText
                en="Start with access, then scale when the workflow is trusted."
                fr="Commencez par l'accès, puis étendez lorsque le flux est fiable."
              />
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              <LocalizedText
                en="Early access is a 10-place special offer at $10k for 6 months, available until September 1, 2026. The institution plan is $20k/year, or $18k/year on a 2-year term, with 10 users included. Larger needs can be scoped as custom intelligence work."
                fr="L'accès anticipé est une offre spéciale limitée à 10 places à 10 k$ pour 6 mois, disponible jusqu'au 1er septembre 2026. Le plan institution est à 20 k$ par an, ou 18 k$ par an avec engagement de 2 ans, avec 10 utilisateurs inclus. Les besoins plus larges peuvent être cadrés comme un travail d'intelligence sur mesure."
              />
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-center">
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
                    <p
                      className={`mt-2 text-sm font-medium ${
                        plan.featured ? "text-white/82" : "text-muted-foreground"
                      }`}
                    >
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
                  <ul className="mt-7 grid gap-3">
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
                  <div className="mt-auto grid gap-3 pt-8">
                    {"deal" in plan && (
                      <div
                        className={`rounded-[18px] border px-4 py-3 ${
                          plan.featured
                            ? "border-white/18 bg-white/10"
                            : "border-[#2459B8]/22 bg-[#2459B8]/[0.07]"
                        }`}
                      >
                        <p
                          className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                            plan.featured ? "text-white/60" : "text-[#2459B8]"
                          }`}
                        >
                          <LocalizedText en="Limited deal" fr="Offre limitée" />
                        </p>
                        <p
                          className={`mt-1 text-sm font-semibold ${
                            plan.featured ? "text-white" : "text-foreground"
                          }`}
                        >
                          <LocalizedText en={plan.deal} fr={plan.dealFr} />
                        </p>
                      </div>
                    )}
                    <WaitlistButton
                      variant={plan.featured ? "secondary" : "primary"}
                      showIcon={false}
                      className={`h-12 w-full shrink-0 ${
                        plan.featured
                          ? "border-white/35 bg-white/18 text-white shadow-xl shadow-black/10 ring-1 ring-white/25 backdrop-blur-2xl hover:-translate-y-0.5 hover:bg-white/26 hover:text-white hover:shadow-black/20 supports-[backdrop-filter]:bg-white/14"
                          : ""
                      }`}
                    >
                      <LocalizedText en={plan.cta} fr={plan.ctaFr} />
                    </WaitlistButton>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-muted-foreground">
            <LocalizedText
              en="Pricing may evolve as Tracer expands its product surface, intelligence layer, and institutional support model."
              fr="Les tarifs peuvent évoluer à mesure que Tracer élargit sa surface produit, sa couche d'intelligence et son modèle d'accompagnement institutionnel."
            />
          </p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#07101F] text-white">
        <Image
          src="/brand/tracer-labs-image-2.png"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(0,0,0,0.82),rgba(0,0,0,0.52)_48%,rgba(0,0,0,0.14)_78%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,16,31,0)_0%,rgba(7,16,31,0.28)_38%,rgba(7,16,31,0.78)_64%,#07101F_84%,#050A14_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-[48%] bg-[radial-gradient(circle_at_18%_92%,rgba(36,89,184,0.56),transparent_34%),radial-gradient(circle_at_82%_100%,rgba(36,89,184,0.28),transparent_32%)]" />

        <div className="relative mx-auto flex min-h-[620px] max-w-[1500px] items-end px-6 py-20 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <BrandLogo
                variant="white"
                markClassName="h-9 w-10"
                textClassName="text-white"
              />
            </div>
            <h2 className="mt-8 text-4xl font-semibold tracking-tight md:text-6xl">
              <LocalizedText
                en="Help shape the product around real research security work."
                fr="Aidez à façonner le produit autour du vrai travail de sécurité de la recherche."
              />
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
              <LocalizedText
                en="Institutions that request more information will be invited to discuss product priorities, screening workflows, report design, and the operating details that make Tracer useful for research security teams."
                fr="Les institutions qui demandent plus d'information seront invitées à discuter des priorités produit, des flux de vérification, de la conception des rapports et des détails opérationnels qui rendent Tracer utile aux équipes de sécurité de la recherche."
              />
            </p>
            <WaitlistButton
              className="mt-9 h-12 bg-[#2459B8] px-6 text-white shadow-xl shadow-[#2459B8]/30 ring-1 ring-white/15 hover:-translate-y-0.5 hover:bg-[#1E4C9D]"
              showIcon
            >
              <LocalizedText en="Get more info" fr="En savoir plus" />
            </WaitlistButton>
          </div>
        </div>

        <footer className="relative border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 md:py-20 lg:px-12 xl:px-16">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
              <div className="max-w-sm">
                <Link href="/platform" className="mb-6 flex text-white">
                  <BrandLogo
                    variant="white"
                    markClassName="h-8 w-9"
                    textClassName="text-white"
                  />
                </Link>
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

              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/82">
                    <LocalizedText en="Website" fr="Site" />
                  </p>
                  <nav className="grid gap-3">
                    {footerNavLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm text-white/54 transition-colors hover:text-white"
                      >
                        <LocalizedText en={item.label} fr={item.labelFr} />
                      </Link>
                    ))}
                  </nav>
                </div>
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/82">
                    <LocalizedText en="Guides" fr="Guides" />
                  </p>
                  <nav className="grid gap-3">
                    {resourceCards.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm text-white/54 transition-colors hover:text-white"
                      >
                        <LocalizedText en={item.title} fr={item.titleFr} />
                      </Link>
                    ))}
                  </nav>
                </div>
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/82">
                    <LocalizedText en="Legal" fr="Légal" />
                  </p>
                  <nav className="grid gap-3">
                    <Link
                      href="/privacy"
                      className="text-sm text-white/54 transition-colors hover:text-white"
                    >
                      <LocalizedText en="Privacy Policy" fr="Politique de confidentialité" />
                    </Link>
                    <Link
                      href="/blog"
                      className="text-sm text-white/54 transition-colors hover:text-white"
                    >
                      <LocalizedText en="Blog" fr="Blogue" />
                    </Link>
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

function SolutionsReportPreview() {
  return (
    <div className="relative mx-auto max-w-4xl py-4 text-left">
      <div className="absolute inset-x-10 inset-y-9 rotate-[-1.8deg] rounded-[30px] border border-white/10 bg-white/8 backdrop-blur-xl" />
      <div className="absolute inset-x-5 inset-y-7 rotate-[1.2deg] rounded-[30px] border border-white/12 bg-white/12 backdrop-blur-xl" />
      <article className="relative overflow-hidden rounded-[30px] border border-white/18 bg-white text-[#1D1D1F] shadow-2xl shadow-black/35">
        <div className="flex flex-col gap-3 border-b border-[#E6E6E3] bg-[#F6F6F5] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-[#777777]" />
            <span className="text-sm font-semibold">
              <LocalizedText en="Research Security Brief" fr="Note de sécurité de la recherche" />
            </span>
            <span className="text-xs text-[#8A8A8A]">· Tracer</span>
          </div>
          <ToneBadge tone="good">
            <LocalizedText en="Complete" fr="Terminé" />
          </ToneBadge>
        </div>

        <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="border-b border-[#E6E6E3] px-5 py-5 lg:border-b-0 lg:border-r">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A]">
              <LocalizedText en="Screening record" fr="Dossier de vérification" />
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight">Reza Kamali</h3>
            <p className="mt-1 text-sm leading-6 text-[#777777]">
              <LocalizedText
                en="Navid University · Aerospace Engineering · Scholar confirmed"
                fr="Université Navid · Génie aérospatial · Chercheur confirmé"
              />
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                ["89 publications", "89 publications"],
                ["h-index 24", "indice h 24"],
                ["ORCID verified", "ORCID vérifié"],
              ].map(([en, fr]) => (
                <span
                  key={en}
                  className="rounded-full border border-[#E6E6E3] bg-white px-2.5 py-1 text-xs text-[#777777]"
                >
                  <LocalizedText en={en} fr={fr} />
                </span>
              ))}
            </div>

            <div className="mt-5 grid gap-2">
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
                label={<LocalizedText en="Academic network" fr="Réseau académique" />}
                status={<LocalizedText en="7 flags" fr="7 signaux" />}
                tone="bad"
              />
            </div>
          </div>

          <div className="px-5 py-5">
            <div className="flex items-center justify-between gap-4 border-b border-[#E6E6E3] pb-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A]">
                <LocalizedText en="Decision-ready output" fr="Sortie prête à la décision" />
              </p>
              <span className="rounded-full bg-[#FFFBF5] px-2.5 py-1 text-[10px] font-semibold text-[#B45309]">
                <LocalizedText en="Human review" fr="Revue humaine" />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#555555]">
              <LocalizedText
                en="Source-backed institutional profile with citation handling, affiliation context, collaboration signals, and limitations preserved for RSO review."
                fr="Profil institutionnel appuyé par les sources, avec citations, contexte d'affiliation, signaux de collaboration et limites conservées pour la revue RSO."
              />
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {[
                ["Sources", "Sources", "10 saved", "10 sauvegardées"],
                ["Elapsed", "Temps", "4 min 12 sec", "4 min 12 s"],
                ["Export", "Export", "PDF ready", "PDF prêt"],
                ["Audit", "Audit", "Stage notes saved", "Notes d'étapes sauvegardées"],
              ].map(([label, labelFr, value, valueFr]) => (
                <div key={label} className="rounded-2xl border border-[#E6E6E3] bg-[#FAFAF9] px-3 py-3">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8A8A8A]">
                    <LocalizedText en={label} fr={labelFr} />
                  </p>
                  <p className="mt-1 text-xs font-semibold leading-4 text-[#333333]">
                    <LocalizedText en={value} fr={valueFr} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 bg-[#F6F6F5] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-[#777777]">
            <LocalizedText
              en="Transparent academic pricing · cited reports · audit-ready workflow"
              fr="Tarification académique transparente · rapports cités · flux prêt pour audit"
            />
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#1D1D1F]">
            <Download className="h-3.5 w-3.5" />
            <LocalizedText en="Export PDF" fr="Exporter PDF" />
          </span>
        </div>
      </article>
    </div>
  )
}

function ToneBadge({ children, tone }: { children: ReactNode; tone: "good" | "warn" | "bad" }) {
  const toneClass =
    tone === "good"
      ? "bg-[#EAF6EF] text-[#1A7C4A]"
      : tone === "warn"
        ? "bg-[#FFFBF5] text-[#B45309]"
        : "bg-[#FFF6F5] text-[#B42318]"

  return (
    <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${toneClass}`}>
      {children}
    </span>
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
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-[#E6E6E3] bg-white px-3 py-2.5">
      <span className="text-sm text-[#666666]">{label}</span>
      <ToneBadge tone={tone}>{status}</ToneBadge>
    </div>
  )
}
