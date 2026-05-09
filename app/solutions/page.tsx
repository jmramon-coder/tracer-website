import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
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

      <section id="pricing" className="relative z-10 scroll-mt-28 overflow-hidden rounded-b-[34px] border-b border-border bg-background pt-28 pb-16 text-foreground shadow-[var(--surface-shadow)] md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(36,89,184,0.12),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.72),transparent_44%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(36,89,184,0.18),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_44%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="relative z-10 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2459B8]">
              <LocalizedText en="Transparent pricing" fr="Tarification transparente" />
            </p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-tight md:text-7xl">
              <LocalizedText
                en="Research security made accessible and efficient."
                fr="La sécurité de la recherche rendue accessible et efficace."
              />
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">
              <LocalizedText
                en="Transparent pricing for Canadian research institutions, backed by efficient workflows and top-of-market deep-search intelligence."
                fr="Une tarification transparente pour les institutions de recherche canadiennes, appuyée par des flux efficaces et une intelligence de recherche approfondie de premier plan."
              />
            </p>
          </div>

          <div className="relative z-10 mt-10 flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-center">
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
          <p className="relative z-10 mx-auto mt-7 max-w-2xl text-center text-sm font-medium leading-6 text-muted-foreground">
            <LocalizedText
              en="Pricing may evolve as Tracer expands its product surface, intelligence layer, and institutional support model."
              fr="Les tarifs peuvent évoluer à mesure que Tracer élargit sa surface produit, sa couche d'intelligence et son modèle d'accompagnement institutionnel."
            />
          </p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden rounded-t-[34px] bg-[#07101F] text-white">
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
