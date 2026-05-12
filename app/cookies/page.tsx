"use client"

import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { openPrivacyPreferences } from "@/components/analytics-consent"
import { useLanguage } from "@/lib/language-context"

type CookieItem = {
  name: string
  provider: string
  category: string
  purpose: string
  duration: string
}

type Section = {
  heading: string
  body: string[]
  list?: string[]
}

const content = {
  en: {
    lastUpdated: "Last updated: May 2026",
    title: "Cookie Policy",
    intro:
      "This policy explains how Tracer Research Security inc. (\"Tracer\") uses cookies, local storage, and similar technologies on tracersecurity.ca.",
    sections: [
      {
        heading: "1. What is a cookie?",
        body: [
          "A cookie is a small file stored by your browser when you visit a website. Similar technologies, such as local storage, can remember site preferences or support analytics.",
          "In this policy, we use the word cookies to include cookies, local storage, scripts, and similar browser technologies.",
        ],
      },
      {
        heading: "2. Consent and default settings",
        body: [
          "Essential site preferences can be stored because they are needed to operate the website or remember choices you make, such as language, theme, and privacy preference.",
          "Analytics tools are optional. We load optional analytics tools only after you accept analytics in the privacy banner or privacy preferences.",
        ],
      },
      {
        heading: "3. What we use",
        body: [
          "At the date of this policy, Tracer uses a narrow set of cookies and browser storage. We do not currently use advertising cookies, retargeting pixels, social tracking pixels, or marketing automation cookies.",
          "If we add new categories of non-essential cookies, they will be described in this policy and managed through the website privacy preferences.",
        ],
      },
      {
        heading: "4. Waitlist forms",
        body: [
          "If you join the waitlist, the form sends your first name, last name, email address, language preference, consent status, source, and timestamp to Tracer so our team can manage early access communications.",
          "Those form values are not sent to analytics tools.",
        ],
      },
      {
        heading: "5. Managing your preferences",
        body: [
          "You can accept or reject analytics from the banner shown on your first visit. You can change that choice later with the Privacy preferences link in the footer.",
          "You can also clear cookies and site data in your browser settings. If you clear site data, the banner may appear again because your previous choice was removed from your browser.",
        ],
      },
      {
        heading: "6. Changes to this policy",
        body: [
          "We may update this policy if our website technology changes. If we add a new non-essential analytics, advertising, or tracking tool, we will update this policy and the consent experience.",
        ],
      },
      {
        heading: "7. Contact",
        body: [
          "For questions about this policy, contact our Privacy Officer at privacy@tracersecurity.ca.",
        ],
      },
    ],
    tableHeading: "Cookie and storage details",
    manageLabel: "Privacy preferences",
    items: [
      {
        name: "Language preference",
        provider: "Tracer",
        category: "Site preference",
        purpose: "Remembers your language preference.",
        duration: "Until you change or clear it",
      },
      {
        name: "Theme preference",
        provider: "Tracer",
        category: "Site preference",
        purpose: "Remembers your light or dark theme preference.",
        duration: "Until you change or clear it",
      },
      {
        name: "Analytics preference",
        provider: "Tracer",
        category: "Consent preference",
        purpose: "Remembers whether you accepted or rejected analytics.",
        duration: "Until you change or clear it",
      },
      {
        name: "Analytics cookies",
        provider: "Analytics tools",
        category: "Optional analytics",
        purpose: "Helps distinguish visits and maintain session state for aggregate website measurement.",
        duration: "Up to 2 years by default, depending on browser and tool settings",
      },
      {
        name: "Analytics scripts",
        provider: "Analytics tools",
        category: "Optional analytics",
        purpose: "Measures aggregate page views and site usage after analytics consent.",
        duration: "Loaded only after analytics consent",
      },
    ] satisfies CookieItem[],
  },
  fr: {
    lastUpdated: "Dernière mise à jour : mai 2026",
    title: "Politique des témoins",
    intro:
      "Cette politique explique comment Tracer Research Security inc. (« Tracer ») utilise les témoins, le stockage local et les technologies similaires sur tracersecurity.ca.",
    sections: [
      {
        heading: "1. Qu'est-ce qu'un témoin?",
        body: [
          "Un témoin est un petit fichier enregistré par votre navigateur lorsque vous visitez un site Web. Des technologies similaires, comme le stockage local, peuvent mémoriser des préférences du site ou soutenir l'analyse d'audience.",
          "Dans cette politique, le mot témoins inclut les témoins, le stockage local, les scripts et les technologies similaires utilisées par le navigateur.",
        ],
      },
      {
        heading: "2. Consentement et paramètres par défaut",
        body: [
          "Les préférences essentielles du site peuvent être enregistrées parce qu'elles sont nécessaires au fonctionnement du site ou à la mémorisation de vos choix, comme la langue, le thème et la préférence de confidentialité.",
          "Les outils analytiques sont facultatifs. Nous chargeons les outils analytiques optionnels seulement après votre acceptation des témoins analytiques dans la bannière ou les préférences de confidentialité.",
        ],
      },
      {
        heading: "3. Ce que nous utilisons",
        body: [
          "À la date de cette politique, Tracer utilise un ensemble restreint de témoins et de stockage navigateur. Nous n'utilisons pas actuellement de témoins publicitaires, de pixels de reciblage, de pixels sociaux ni de témoins d'automatisation marketing.",
          "Si nous ajoutons de nouvelles catégories de témoins non essentiels, elles seront décrites dans cette politique et gérées au moyen des préférences de confidentialité du site.",
        ],
      },
      {
        heading: "4. Formulaires de liste d'attente",
        body: [
          "Si vous vous inscrivez à la liste d'attente, le formulaire transmet à Tracer votre prénom, nom, adresse courriel, préférence linguistique, statut de consentement, source et horodatage afin que notre équipe puisse gérer les communications d'accès anticipé.",
          "Ces valeurs de formulaire ne sont pas envoyées aux outils analytiques.",
        ],
      },
      {
        heading: "5. Gérer vos préférences",
        body: [
          "Vous pouvez accepter ou refuser les outils analytiques à partir de la bannière affichée lors de votre première visite. Vous pouvez modifier ce choix plus tard avec le lien Préférences de confidentialité dans le pied de page.",
          "Vous pouvez aussi supprimer les témoins et les données de site dans les paramètres de votre navigateur. Si vous effacez les données du site, la bannière peut réapparaître parce que votre choix précédent aura été supprimé de votre navigateur.",
        ],
      },
      {
        heading: "6. Modifications de cette politique",
        body: [
          "Nous pouvons mettre à jour cette politique si les technologies utilisées par notre site changent. Si nous ajoutons un nouvel outil analytique, publicitaire ou de suivi non essentiel, nous mettrons à jour cette politique et l'expérience de consentement.",
        ],
      },
      {
        heading: "7. Contact",
        body: [
          "Pour toute question au sujet de cette politique, contactez notre responsable de la protection des renseignements personnels à privacy@tracersecurity.ca.",
        ],
      },
    ],
    tableHeading: "Détails des témoins et du stockage",
    manageLabel: "Préférences de confidentialité",
    items: [
      {
        name: "Préférence linguistique",
        provider: "Tracer",
        category: "Préférence du site",
        purpose: "Mémorise votre préférence linguistique.",
        duration: "Jusqu'à modification ou suppression",
      },
      {
        name: "Préférence de thème",
        provider: "Tracer",
        category: "Préférence du site",
        purpose: "Mémorise votre préférence de thème clair ou sombre.",
        duration: "Jusqu'à modification ou suppression",
      },
      {
        name: "Préférence analytique",
        provider: "Tracer",
        category: "Préférence de consentement",
        purpose: "Mémorise votre acceptation ou votre refus des outils analytiques.",
        duration: "Jusqu'à modification ou suppression",
      },
      {
        name: "Témoins analytiques",
        provider: "Outils analytiques",
        category: "Analytique facultative",
        purpose: "Aident à distinguer les visites et à conserver l'état de session pour la mesure agrégée du site.",
        duration: "Jusqu'à 2 ans par défaut, selon le navigateur et les paramètres des outils",
      },
      {
        name: "Scripts analytiques",
        provider: "Outils analytiques",
        category: "Analytique facultative",
        purpose: "Mesurent les pages vues et l'utilisation agrégée du site après consentement analytique.",
        duration: "Chargé seulement après consentement analytique",
      },
    ] satisfies CookieItem[],
  },
}

function renderSection(section: Section) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-base font-medium tracking-wide text-foreground">
        {section.heading}
      </h2>
      {section.body.map((para, index) => (
        <p key={index} className="mb-3 font-light leading-relaxed text-muted-foreground">
          {para}
        </p>
      ))}
      {section.list ? (
        <ul className="mb-3 ml-5 list-disc space-y-1.5">
          {section.list.map((item) => (
            <li key={item} className="font-light leading-relaxed text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}

export default function CookiesPage() {
  const { language } = useLanguage()
  const c = content[language]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-2xl px-6 pb-24 pt-36">
          <Link
            href="/"
            className="mb-16 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-muted-foreground/50 transition-colors duration-300 hover:text-muted-foreground"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {language === "fr" ? "Retour" : "Back"}
          </Link>

          <div className="mb-16">
            <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground/50">
              {c.lastUpdated}
            </p>
            <h1 className="text-3xl font-light tracking-tight text-foreground md:text-4xl">
              {c.title}
            </h1>
            <p className="mt-6 font-light leading-relaxed text-muted-foreground">
              {c.intro}
            </p>
            <div className="mt-6 h-px bg-border" />
          </div>

          <div>{c.sections.slice(0, 3).map((section) => renderSection(section))}</div>

          <section className="mb-10">
            <h2 className="mb-4 text-base font-medium tracking-wide text-foreground">
              {c.tableHeading}
            </h2>
            <div className="overflow-hidden rounded-lg border border-border">
              <div className="divide-y divide-border">
                {c.items.map((item) => (
                  <div key={`${item.name}-${item.provider}`} className="grid gap-3 p-4 sm:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <p className="font-mono text-xs text-foreground">{item.name}</p>
                      <p className="mt-1 text-xs text-subtle-foreground">{item.provider}</p>
                    </div>
                    <div className="space-y-1 text-sm leading-6 text-muted-foreground">
                      <p>
                        <span className="font-medium text-foreground/80">{item.category}</span>
                        {" — "}
                        {item.purpose}
                      </p>
                      <p className="text-xs text-subtle-foreground">{item.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div>{c.sections.slice(3).map((section) => renderSection(section))}</div>

          <button
            type="button"
            onClick={openPrivacyPreferences}
            className="text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
          >
            {c.manageLabel}
          </button>
        </div>

        <Footer />
      </main>
    </>
  )
}
