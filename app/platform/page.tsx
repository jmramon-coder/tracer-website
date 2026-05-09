import type { Metadata } from "next"
import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
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
    title: "Sanctions & designations",
    titleFr: "Sanctions et désignations",
    description: "NRO, Canadian, US, EU, UK, UN and other international lists.",
    descriptionFr: "Listes NRO, canadiennes, américaines, européennes, britanniques, onusiennes et autres listes internationales.",
  },
  {
    icon: Server,
    title: "Institutional affiliation",
    titleFr: "Affiliation institutionnelle",
    description:
      "Legal identity, governance chain, supervisory authority, military and defence ties, and state programme membership.",
    descriptionFr:
      "Identité juridique, chaîne de gouvernance, autorité de supervision, liens militaires et de défense, et participation à des programmes d'État.",
  },
  {
    icon: Network,
    title: "Academic network",
    titleFr: "Réseau académique",
    description:
      "Co-author clusters, flagged collaborations, joint publications, and institutional ties across designation lists.",
    descriptionFr:
      "Groupes de coauteurs, collaborations signalées, publications conjointes et liens institutionnels dans les listes de désignation.",
  },
  {
    icon: Database,
    title: "Funding & foreign ties",
    titleFr: "Financement et liens étrangers",
    description:
      "Grant funders, undisclosed funding, talent programme participation, foreign appointments, and state-linked awards.",
    descriptionFr:
      "Bailleurs de subventions, financement non déclaré, participation à des programmes de talents, nominations étrangères et prix liés à l'État.",
  },
  {
    icon: FileCheck,
    title: "Legal & regulatory record",
    titleFr: "Dossier juridique et réglementaire",
    description:
      "Criminal, civil, and regulatory proceedings, debarments, exclusions, and export control enforcement actions.",
    descriptionFr:
      "Procédures criminelles, civiles et réglementaires, interdictions, exclusions et mesures d'application du contrôle des exportations.",
  },
  {
    icon: Globe2,
    title: "Adverse media & integrity",
    titleFr: "Médias défavorables et intégrité",
    description:
      "Professional and financial misconduct, research integrity findings, reputational concerns.",
    descriptionFr:
      "Inconduite professionnelle et financière, constats d'intégrité en recherche et préoccupations réputationnelles.",
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
              <LocalizedText en="Screen partners in minutes." fr="Vérifiez vos partenaires en quelques minutes." />
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
                en="Two screening pipelines, one workflow."
                fr="Deux pipelines de vérification, un seul flux."
              />
            }
            copy={
              <LocalizedText
                en="Whether you're vetting an individual researcher or a partner institution, Tracer applies the same evidence standards, audit trail, and report structure, so analysts can review consistent files regardless of subject."
                fr="Que vous vérifiiez une personne chercheuse ou une institution partenaire, Tracer applique les mêmes standards de preuve, la même piste d'audit et la même structure de rapport afin que les analystes révisent des dossiers cohérents, peu importe le sujet."
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
              {signalCards.map(({ title, titleFr, description, descriptionFr }, index) => (
                <article
                  key={title}
                  className="rounded-[10px] border border-[#E6E6E3] bg-white px-5 py-4 transition-colors duration-300 hover:border-[#175CD3]/35"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-3">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#175CD3]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-[13.5px] font-semibold tracking-tight text-[#1D1D1F]">
                          <LocalizedText en={title} fr={titleFr} />
                        </h3>
                        <p className="mt-2 text-[12.5px] leading-[1.62] text-[#6F6F68]">
                          <LocalizedText en={description} fr={descriptionFr} />
                        </p>
                      </div>
                    </div>
                    <ReportVerdict tone={[1, 2, 3].includes(index) ? "bad" : "good"}>
                      {[1, 2, 3].includes(index) ? (
                        <LocalizedText en="Review" fr="Révision" />
                      ) : (
                        <LocalizedText en="Clear" fr="Clair" />
                      )}
                    </ReportVerdict>
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
                  en="See who a researcher works with, and which collaborators are affiliated with designated institutions."
                  fr="Voyez avec qui une personne chercheuse travaille, et quels collaborateurs sont affiliés à des institutions désignées."
                />
              </h2>
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                <LocalizedText
                  en="Tracer maps co-authors by country and institution, flags every collaboration tied to a sanctions or research security list, and shows paper counts and collaboration periods so analysts can judge depth, not just presence."
                  fr="Tracer cartographie les coauteurs par pays et institution, signale chaque collaboration liée à une liste de sanctions ou de sécurité de la recherche, et affiche le nombre d'articles et les périodes de collaboration afin que les analystes évaluent la profondeur du lien, pas seulement sa présence."
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
            eyebrow={<LocalizedText en="Canadian compliance" fr="Conformité canadienne" />}
            title={<LocalizedText en="Built for Canadian compliance." fr="Conçu pour la conformité canadienne." />}
            copy={
              <LocalizedText
                en="Tracer is designed around the Policy on Sensitive Technology Research and Affiliations of Concern, the National Security Guidelines for Research Partnerships, and the NRO list, with screening that extends across U.S., EU, UK, and UN sanctions regimes for partners anywhere in the world."
                fr="Tracer est conçu autour de la Politique sur la recherche en technologies sensibles et les affiliations préoccupantes, des Lignes directrices sur la sécurité nationale pour les partenariats de recherche et de la liste des organisations de recherche nommées, avec une vérification qui s'étend aux régimes de sanctions américains, européens, britanniques et onusiens pour les partenaires partout dans le monde."
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
  return (
    <div className="relative min-h-[560px] sm:min-h-[620px] lg:min-h-[560px]">
      <div className="absolute bottom-[-118px] left-1/2 z-30 h-[430px] w-[min(92vw,420px)] -translate-x-1/2 sm:bottom-[-132px] sm:h-[500px] sm:w-[540px] md:w-[600px] lg:bottom-[-156px] lg:left-[92px] lg:h-[545px] lg:w-[610px] lg:translate-x-0 xl:left-[118px] xl:w-[700px]">
        <div className="absolute inset-0 translate-x-5 translate-y-5 rotate-2 rounded-[16px] border border-[#ECECE8] bg-[#FAFAF9] shadow-[0_16px_34px_rgba(15,23,42,0.16)]" />
        <div className="absolute inset-0 -translate-x-3 translate-y-3 -rotate-1 rounded-[16px] border border-[#ECECE8] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.12)]" />
        <article className="relative flex h-full flex-col overflow-hidden rounded-[16px] border-x border-b border-[#ECECE8] bg-white text-[#1D1D1F] shadow-[0_24px_70px_rgba(15,23,42,0.22)]">
          <div className="border-b border-[#ECECE8] bg-[#F6F6F4] px-4 py-4 text-[#1D1D1F] sm:px-5 sm:py-5">
            <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_176px] sm:items-start">
              <div>
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#6F6F68]">
                  <LocalizedText en="Tracer · Research security due diligence" fr="Tracer · Diligence de sécurité de la recherche" />
                </p>
                <h2 className="mt-2 text-2xl font-semibold leading-[1.16] tracking-tight sm:text-[30px]">
                  Mara Vellin
                </h2>
                <p className="mt-2 max-w-md text-[11px] leading-5 text-[#6F6F68]">
                  <LocalizedText
                    en="Helios Materials Lab · Applied photonics · Montreal, Canada"
                    fr="Helios Materials Lab · Photonique appliquée · Montréal, Canada"
                  />
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {[
                    ["Applied photonics", "Photonique appliquée"],
                    ["Energy storage", "Stockage énergétique"],
                    ["Materials engineering", "Génie des matériaux"],
                    ["Synthetic profile", "Profil synthétique"],
                  ].map(([en, fr]) => (
                    <ReportTag key={en}>
                      <LocalizedText en={en} fr={fr} />
                    </ReportTag>
                  ))}
                </div>
              </div>

              <div className="rounded-[12px] bg-white/75 p-3 shadow-[inset_0_0_0_1px_rgba(29,29,31,0.045)]">
                <p className="font-mono text-[8.5px] font-semibold uppercase tracking-[0.14em] text-[#6F6F68]">
                  <LocalizedText en="Verdict matrix" fr="Matrice de verdicts" />
                </p>
                <div className="mt-2 grid gap-1.5">
                  {[
                    ["Sanctions", "Clear", "good"],
                    ["Affiliation", "Review", "bad"],
                    ["Academic net.", "Review", "bad"],
                    ["Funding ties", "Clear", "good"],
                  ].map(([code, verdict, tone]) => (
                    <div key={code} className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[10px] text-[#1D1D1F]">{code}</span>
                      <ReportVerdict tone={tone as "good" | "warn" | "bad"}>
                        {verdict === "Review" ? (
                          <LocalizedText en="Review" fr="Révision" />
                        ) : verdict === "Clear" ? (
                          <LocalizedText en="Clear" fr="Clair" />
                        ) : (
                          <LocalizedText en="Review" fr="Révision" />
                        )}
                      </ReportVerdict>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-[#F1F1EE] bg-white px-4 py-3 sm:px-5">
            <div className="grid grid-cols-3 overflow-hidden rounded-[10px] border border-[#ECECE8]">
              {[
                ["42", "Publications", "Publications"],
                ["18", "H-index", "Indice h"],
                ["10", "Sources", "Sources"],
              ].map(([value, label, labelFr]) => (
                <div key={label} className="border-r border-[#ECECE8] px-3 py-2 last:border-r-0">
                  <p className="font-mono text-lg leading-none text-[#1D1D1F]">{value}</p>
                  <p className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.12em] text-[#6F6F68]">
                    <LocalizedText en={label} fr={labelFr} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          <section className="flex-1 bg-[#FAFAF8] text-[#1d1d1f]">
            <div className="flex items-center justify-between gap-4 border-b border-[#ECECE8] px-4 py-3 sm:px-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#175CD3]">
                  Affiliation
                </span>
                <h3 className="text-[18px] font-semibold tracking-tight">
                  <LocalizedText en="Institutional affiliation" fr="Affiliation institutionnelle" />
                </h3>
              </div>
              <ReportVerdict tone="bad">
                <LocalizedText en="Review" fr="Révision" />
              </ReportVerdict>
            </div>
            <p className="mt-3 max-w-xl px-4 text-[12.5px] leading-[1.62] text-[#3F3F3A] sm:px-5">
              <LocalizedText
                en="Synthetic institutional profile with citation handling, affiliation context, collaboration signals, and human review notes."
                fr="Profil institutionnel synthétique avec citations, contexte d'affiliation, signaux de collaboration et notes de revue humaine."
              />{" "}
              <sup className="font-mono text-[9px] text-[#175CD3]">1</sup>
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 px-4 pb-4 sm:px-5">
              {[
                ["Legal name", "Nom légal", "Mara Vellin", "Mara Vellin"],
                ["Screening scope", "Portée", "Individual + partner context", "Personne + contexte partenaire"],
                ["Report status", "Statut", "Human review ready", "Prêt pour revue humaine"],
                ["Audit trail", "Audit", "Synthetic sources saved", "Sources synthétiques sauvegardées"],
              ].map(([label, labelFr, value, valueFr]) => (
                <div key={label} className="rounded-[10px] bg-white px-3 py-2 shadow-[inset_0_0_0_1px_rgba(29,29,31,0.055)]">
                  <p className="font-mono text-[8.5px] font-semibold uppercase tracking-[0.12em] text-[#6F6F68]">
                    <LocalizedText en={label} fr={labelFr} />
                  </p>
                  <p className="mt-1 text-[11.5px] font-semibold leading-4 text-[#1D1D1F]">
                    <LocalizedText en={value} fr={valueFr} />
                  </p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>

    </div>
  )
}

function ReportExample() {
  return (
    <div className="overflow-hidden rounded-[16px] border border-[#F0F0EC] bg-white text-[#1D1D1F] shadow-[0_18px_46px_rgba(15,23,42,0.07)]">
      <div className="grid gap-5 border-b border-[#F0F0EC] bg-[#FAFAF8] px-5 py-5 text-[#1D1D1F] sm:grid-cols-[minmax(0,1fr)_178px]">
        <div>
          <div className="flex items-center gap-2">
            <FileText className="h-3.5 w-3.5 text-[#6F6F68]" />
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#6F6F68]">
              <LocalizedText en="Research Security Brief" fr="Note de sécurité de la recherche" />
            </p>
          </div>
          <h3 className="mt-3 text-[30px] font-semibold leading-[1.16] tracking-tight">
            Reza Kamali
          </h3>
          <p className="mt-2 text-[12.5px] leading-[1.62] text-[#6F6F68]">
            <LocalizedText
              en="Navid University · Aerospace Engineering · Scholar confirmed"
              fr="Université Navid · Génie aérospatial · Chercheur confirmé"
            />
          </p>
        </div>

        <div className="rounded-[12px] bg-white/80 p-3 shadow-[inset_0_0_0_1px_rgba(29,29,31,0.045)]">
          <div className="flex items-start justify-between gap-3">
            <p className="font-mono text-[8.5px] font-semibold uppercase tracking-[0.12em] text-[#6F6F68]">
              <LocalizedText en="Verdict" fr="Verdict" />
            </p>
            <ReportVerdict tone="bad">
              <LocalizedText en="Review" fr="Révision" />
            </ReportVerdict>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-[#8A8A83]">
                <LocalizedText en="Sources" fr="Sources" />
              </p>
              <p className="mt-1 font-mono text-[11px] font-semibold text-[#1D1D1F]">10</p>
            </div>
            <div>
              <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-[#8A8A83]">
                <LocalizedText en="Elapsed" fr="Durée" />
              </p>
              <p className="mt-1 font-mono text-[11px] font-semibold text-[#1D1D1F]">
                <LocalizedText en="4m 12s" fr="4 min 12 s" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-[#F1F1EE] px-5 py-4">
        <div className="flex flex-wrap gap-2">
          {[
            ["89 publications", "89 publications"],
            ["h-index 24", "indice h 24"],
            ["ORCID verified", "ORCID vérifié"],
          ].map(([en, fr]) => (
            <ReportTag key={en}>
              <LocalizedText en={en} fr={fr} />
            </ReportTag>
          ))}
        </div>
        <div className="mt-4 grid overflow-hidden rounded-[10px] border border-[#ECECE8] sm:grid-cols-3">
          {[
            ["1", "Designation match", "Désignation trouvée"],
            ["9", "Lists cleared", "Listes sans signal"],
            ["4", "Source citations", "Citations sources"],
          ].map(([value, label, labelFr]) => (
            <div key={label} className="border-b border-[#ECECE8] px-4 py-3 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <p className="font-mono text-xl leading-none text-[#1D1D1F]">{value}</p>
              <p className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.12em] text-[#6F6F68]">
                <LocalizedText en={label} fr={labelFr} />
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-[#F1F1EE] px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#175CD3]">
              02
            </span>
            <h3 className="text-[18px] font-semibold tracking-tight">
              <LocalizedText en="Sanctions" fr="Sanctions" />
            </h3>
          </div>
          <ReportVerdict tone="bad">
            <LocalizedText en="Match" fr="Correspondance" />
          </ReportVerdict>
        </div>

        <div className="mt-4 overflow-hidden rounded-[12px] border border-[#F1C7C2] bg-[#FDECEA]/55">
          <div className="flex items-center justify-between gap-4 border-b border-[#F1C7C2] px-4 py-3">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#A83227]">
              <LocalizedText en="BIS Entity List" fr="Liste des entités BIS" />
            </p>
            <ReportVerdict tone="bad">
              <LocalizedText en="Match" fr="Signal" />
            </ReportVerdict>
          </div>

          {[
            [
              "List name",
              "Nom de la liste",
              "US Department of Commerce, Bureau of Industry and Security - Entity List (Supplement No. 4 to Part 744)",
              "US Department of Commerce, Bureau of Industry and Security - Entity List (Supplement No. 4 to Part 744)",
            ],
            [
              "Administering body",
              "Organisme responsable",
              "US Department of Commerce, Bureau of Industry and Security (BIS)",
              "US Department of Commerce, Bureau of Industry and Security (BIS)",
            ],
            [
              "Legal basis",
              "Base juridique",
              "Export Administration Regulations (EAR), 15 C.F.R. Parts 730-774 - End-User Review Committee determination",
              "Export Administration Regulations (EAR), 15 C.F.R. Parts 730-774 - détermination de l'End-User Review Committee",
            ],
            ["Designation date", "Date de désignation", "June 17, 2024", "17 juin 2024"],
            [
              "Stated reason",
              "Motif déclaré",
              "Acting contrary to the national security and foreign policy interests of the United States by acquiring and attempting to acquire US-origin items in support of the People's Liberation Army modernization, including hypersonic research and advanced semiconductor fabrication.",
              "Agissements contraires aux intérêts de sécurité nationale et de politique étrangère des États-Unis par l'acquisition ou la tentative d'acquisition d'articles d'origine américaine au soutien de la modernisation de l'Armée populaire de libération, notamment la recherche hypersonique et la fabrication avancée de semi-conducteurs.",
            ],
          ].map(([label, labelFr, value, valueFr], index) => (
            <div
              key={label}
              className="grid gap-2 border-b border-[#F1C7C2] px-4 py-3 last:border-b-0 sm:grid-cols-[132px_1fr]"
            >
              <p className="font-mono text-[8.5px] font-semibold uppercase tracking-[0.12em] text-[#A83227]">
                <LocalizedText en={label} fr={labelFr} />
              </p>
              <p className="text-[11.5px] leading-[1.62] text-[#1D1D1F]">
                <LocalizedText en={value} fr={valueFr} />
                {index === 4 ? <sup className="font-mono text-[9px] text-[#175CD3]">4</sup> : null}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 overflow-hidden rounded-[12px] border border-[#ECECE8]">
          {[
            "Canada NRO List",
            "Canada Autonomous Sanctions",
            "OFAC SDN List",
            "EU Consolidated Sanctions",
            "UK Consolidated Sanctions",
            "UN Security Council Consolidated",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between gap-4 border-b border-[#ECECE8] bg-white px-4 py-2.5 last:border-b-0"
            >
              <p className="font-mono text-[10px] font-semibold text-[#1D1D1F]">{item}</p>
              <ReportVerdict tone="good">
                <LocalizedText en="Clear" fr="Clair" />
              </ReportVerdict>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-[#FAFAF9] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-mono text-[10px] text-[#6F6F68]">
          <LocalizedText
            en="27 Mar 2026 · 10 sources · 4 min 12 sec"
            fr="27 mars 2026 · 10 sources · 4 min 12 s"
          />
        </span>
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#1D1D1F]">
          <Download className="h-3.5 w-3.5" />
          <LocalizedText en="Export PDF" fr="Exporter PDF" />
        </span>
      </div>
    </div>
  )
}

function NetworkExample() {
  return (
    <div className="overflow-hidden rounded-[16px] border border-[#ECECE8] bg-white text-[#1D1D1F]">
      <div className="border-b border-[#ECECE8] bg-[#F6F6F4] px-5 py-4 text-[#1D1D1F]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6F6F68]">
              <LocalizedText en="Academic network" fr="Réseau académique" />
            </p>
            <h3 className="mt-3 text-[18px] font-semibold tracking-tight text-[#1D1D1F]">
              <LocalizedText
                en="Individual risk profile."
                fr="Profil de risque individuel."
              />
            </h3>
          </div>
          <ReportVerdict tone="bad">
            <LocalizedText en="7 flags" fr="7 signaux" />
          </ReportVerdict>
        </div>
        <p className="mt-4 max-w-2xl text-[12.5px] leading-[1.62] text-[#6F6F68]">
          <LocalizedText
            en="89 publications analyzed from 2016 to 2026. 23 publications, or 26%, involve co-authors at flagged institutions."
            fr="89 publications analysées de 2016 à 2026. 23 publications, soit 26 %, impliquent des coauteurs affiliés à des institutions signalées."
          />
        </p>
      </div>

      <div className="border-b border-[#F1F1EE] px-5 py-4">
        <p className="text-[13.5px] font-semibold tracking-tight text-[#1D1D1F]">
          <LocalizedText en="Co-author statistics" fr="Statistiques des coauteurs" />
        </p>
        <div className="mt-3 grid overflow-hidden rounded-[10px] border border-[#ECECE8] sm:grid-cols-4">
          {[
            ["202+", "Publications analyzed", "Publications analysées"],
            ["30+", "Total co-authors identified", "Coauteurs identifiés"],
            ["4", "Flagged co-authors", "Coauteurs signalés"],
            ["2000-2025", "Period covered", "Période couverte"],
          ].map(([value, label, labelFr]) => (
            <div
              key={label}
              className="border-b border-[#ECECE8] bg-white px-4 py-3 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <p className="font-mono text-xl font-semibold leading-none text-[#24221D]">
                {value}
              </p>
              <p className="mt-2 font-mono text-[8.5px] font-semibold uppercase tracking-[0.12em] text-[#6F6F68]">
                <LocalizedText en={label} fr={labelFr} />
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto px-4 py-3">
        <table className="w-full min-w-[680px] border-collapse text-[11.5px]">
          <thead>
            <tr className="text-left font-mono text-[8.5px] font-semibold uppercase tracking-[0.12em] text-[#6F6F68]">
              <th className="px-[10px] py-2">
                <LocalizedText en="Name" fr="Nom" />
              </th>
              <th className="px-[10px] py-2">
                <LocalizedText en="Institution" fr="Institution" />
              </th>
              <th className="px-[10px] py-2">
                <LocalizedText en="List" fr="Liste" />
              </th>
              <th className="px-[10px] py-2 text-right">
                <LocalizedText en="Papers" fr="Articles" />
              </th>
              <th className="px-[10px] py-2 text-right">
                <LocalizedText en="Last" fr="Dernier" />
              </th>
            </tr>
          </thead>
          <tbody className="text-[#6F6F68]">
            {coAuthors.map((row) => (
              <tr key={`${row.name}-${row.list}`} className="border-t border-[#F1F1EE]">
                <td className="px-[10px] py-2 font-medium text-[#1D1D1F]">{row.name}</td>
                <td className="px-[10px] py-2">{row.institution}</td>
                <td className="px-[10px] py-2">
                  <span className="rounded-full bg-[#F5F5F3] px-2 py-0.5 font-mono text-[9px] font-medium text-[#5F5F58]">
                    {row.list}
                  </span>
                </td>
                <td className="px-[10px] py-2 text-right">{row.papers}</td>
                <td className="px-[10px] py-2 text-right">{row.last}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-[#F1F1EE] bg-[#FAFAF9] px-5 py-4">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6F6F68]">
          <LocalizedText en="Network timeline" fr="Chronologie du réseau" />
        </p>
        <div className="mt-4 grid gap-2.5">
          {timeline.map((bar) => (
            <div key={bar.year} className="grid grid-cols-[44px_1fr_120px] items-center gap-3">
              <span className="font-mono text-[10px] text-[#6F6F68]">{bar.year}</span>
              <div className="h-[5px] overflow-hidden rounded-full bg-[#DEDED8]">
                <div className="h-[5px] rounded-full bg-[#FF7A1A]" style={{ width: bar.width }} />
              </div>
              <span className="text-right text-[11.5px] text-[#6F6F68]">
                {bar.count}{" "}
                <LocalizedText en="flagged" fr="signalés" />
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[11px] italic text-[#6F6F68]">
          <LocalizedText
            en="Coverage note: screening limited to OpenAlex and Google Scholar."
            fr="Note de couverture : vérification limitée à OpenAlex et Google Scholar."
          />
        </p>
      </div>
    </div>
  )
}

function ReportVerdict({
  tone,
  children,
}: {
  tone: "good" | "warn" | "bad" | "neutral"
  children: ReactNode
}) {
  const toneClasses = {
    good: "bg-[#EEF8F3] text-[#256C54]",
    warn: "bg-[#FFF6E8] text-[#9A5B12]",
    bad: "bg-[#FBEDEA] text-[#A83227]",
    neutral: "bg-[#F5F5F3] text-[#5F5F58]",
  }

  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 font-mono text-[9.5px] font-semibold uppercase leading-none tracking-[0.06em] ${toneClasses[tone]}`}>
      {children}
    </span>
  )
}

function ReportTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-white px-2.5 py-1 font-mono text-[9.5px] font-semibold uppercase leading-none tracking-[0.04em] text-[#4E4E48] shadow-[inset_0_0_0_1px_rgba(29,29,31,0.04)]">
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
