"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

const content = {
  en: {
    lastUpdated: "Last updated: May 12, 2026",
    title: "Privacy Policy",
    sections: [
      {
        heading: "1. Who we are",
        body: [
          `Tracer Research Security inc. ("Tracer," "we," "us," or "our") is a Canadian company operating the website tracersecurity.ca.`,
          `Our Privacy Officer can be reached at: privacy@tracersecurity.ca`,
        ],
      },
      {
        heading: "2. Scope of this policy",
        body: [
          "This policy applies to visitors to tracersecurity.ca and to people who submit a waitlist, early access, or contact form through our website.",
          "It does not apply to third-party websites or services that we do not operate.",
        ],
      },
      {
        heading: "3. What personal information we collect",
        subsections: [
          {
            subheading: "Website visitors",
            body: "When you visit our website, our hosting and security providers may process standard technical information such as IP address, browser and device information, pages requested, referring page, timestamps, and request metadata needed to deliver, secure, and monitor the website.",
          },
          {
            subheading: "Early access and contact form submissions",
            body: "When you submit a waitlist, early access, or contact form, we collect the information you provide, such as first name, last name, email address, language preference, communication consent status, form source, and submission timestamp.",
          },
          {
            subheading: "Optional analytics",
            body: "If you accept analytics in our privacy preferences, we use Google Analytics 4 and Vercel Web Analytics to understand website usage. These tools may process information such as pages visited, approximate region, device and browser information, referrer, session activity, and website events that we configure. We do not send waitlist form values, including names, email addresses, institutions, or message content, to analytics tools.",
          },
        ],
      },
      {
        heading: "4. How we use personal information",
        body: ["We use the personal information we collect to:"],
        list: [
          "Respond to inquiries and manage early access requests",
          "Send waitlist, launch, and product update emails where you have consented to receive them",
          "Operate, secure, debug, and monitor our website",
          "Measure aggregate website usage after analytics consent",
          "Comply with our legal obligations",
        ],
        bodyAfter: [
          "We do not sell personal information. We do not use website analytics for advertising, remarketing, or user-level sales profiling.",
        ],
      },
      {
        heading: "5. Legal basis for processing",
        body: [
          "Depending on the context, we process personal information on the following bases:",
        ],
        listBold: [
          { term: "Consent", desc: "waitlist and product update communications, and optional analytics cookies or similar technologies" },
          { term: "Legitimate interest", desc: "operating, securing, debugging, and improving the website" },
          { term: "Legal obligation", desc: "compliance with applicable law" },
        ],
        bodyAfter: [
          "You can withdraw analytics consent at any time using the Privacy preferences link in the footer. You can unsubscribe from waitlist and product update emails by following the unsubscribe instructions in our emails or by contacting privacy@tracersecurity.ca.",
        ],
      },
      {
        heading: "6. Service providers and transfers",
        body: [
          "We use a limited number of service providers to operate the website and manage communications. These currently include Vercel for website hosting, security, logs, and Vercel Web Analytics; Google Analytics 4 for optional website analytics; and Resend for waitlist and email communications.",
          "These providers may process information outside your province or outside Canada, including in the United States or other countries where they or their subprocessors operate. When we use service providers, we rely on contractual, technical, and organizational safeguards appropriate to the nature of the information and the service.",
        ],
      },
      {
        heading: "7. When we share information",
        body: ["We do not share personal information with third parties except in the following circumstances:"],
        listBold: [
          { term: "Service providers", desc: "to operate the website, process waitlist submissions, send emails, provide analytics after consent, and maintain security" },
          { term: "Legal requirements", desc: "we may disclose information when required by law, court order, or government authority" },
          { term: "Business transfers", desc: "in the event of a merger, acquisition, or sale of assets, personal information may be transferred as part of that transaction, subject to equivalent privacy protections" },
        ],
        bodyAfter: ["We do not share personal information with advertisers or data brokers."],
      },
      {
        heading: "8. Analytics cookies",
        body: [
          "We load optional analytics tools only after you accept analytics in the website privacy preferences. Our optional analytics tools are Google Analytics 4 and Vercel Web Analytics.",
          "Analytics help us understand aggregate website usage, including pages visited, approximate region, device and browser information, referrer, and session activity. We do not currently use analytics tools for advertising, remarketing, or user-level sales profiling. If you reject analytics, these analytics tools are not loaded and analytics cookies are removed when possible.",
        ],
      },
      {
        heading: "9. Data retention",
        body: ["We retain personal information only as long as necessary for the purposes for which it was collected:"],
        list: [
          "Early access and contact inquiries: 24 months from last contact, or until you request deletion",
          "Email consent and unsubscribe records: as long as necessary to document consent and honour unsubscribe requests",
          "Website and security logs: up to 90 days unless a longer period is needed for security, debugging, legal, or compliance reasons",
          "Analytics records: according to our analytics provider settings; aggregate reports may be retained longer because they do not identify individual visitors",
        ],
      },
      {
        heading: "10. Your rights",
        body: ["If you are a Quebec resident, you have the following rights under Law 25:"],
        listBold: [
          { term: "Right of access", desc: "to request a copy of the personal information we hold about you" },
          { term: "Right of rectification", desc: "to correct inaccurate or incomplete information" },
          { term: "Right of erasure or de-identification", desc: "to request deletion of your information where we have no legal basis to retain it" },
          { term: "Right of portability", desc: "to receive your information in a structured, commonly used format" },
          { term: "Right to object to automated decision-making", desc: "to request human review of any decision made exclusively through automated processing" },
        ],
        bodyAfter: [
          "To exercise these rights, contact our Privacy Officer at privacy@tracersecurity.ca. We will respond within 30 days.",
        ],
      },
      {
        heading: "11. Security",
        body: ["We implement security measures appropriate to the sensitivity of the information we hold, including:"],
        list: [
          "Encryption of personal information in transit (TLS) and at rest",
          "Role-based access controls limiting access to authorized personnel",
          "Administrative access limited to personnel who need it",
          "Security monitoring and provider safeguards for website infrastructure",
        ],
      },
      {
        heading: "12. Breach notification",
        body: [
          "In the event of a confidentiality incident involving personal information that presents a risk of serious harm, we will notify affected individuals and the Commission d'accès à l'information du Québec (CAI) as soon as reasonably possible following discovery of the incident. We maintain a register of all security incidents as required by Law 25.",
        ],
      },
      {
        heading: "13. Cookies and tracking controls",
        body: [
          "Our website uses essential cookies and local storage necessary for site preferences and functionality. Your analytics preference is saved in your browser so we can remember your choice. You can change your analytics preference at any time through the Privacy preferences link in the footer.",
        ],
      },
      {
        heading: "14. Changes to this policy",
        body: [
          "We may update this policy from time to time. We will post the updated policy on our website with a revised date. Where required by law, we will provide additional notice of material changes.",
        ],
      },
      {
        heading: "15. Contact",
        body: [
          "For any privacy-related questions or to exercise your rights:",
          "Privacy Officer, Tracer Research Security inc.\nprivacy@tracersecurity.ca\ntracersecurity.ca",
        ],
      },
    ],
  },

  fr: {
    lastUpdated: "Dernière mise à jour : 12 mai 2026",
    title: "Politique de confidentialité",
    sections: [
      {
        heading: "1. Qui nous sommes",
        body: [
          `Tracer Research Security inc. (« Tracer », « nous », « notre » ou « nos ») est une entreprise canadienne qui exploite le site Web tracersecurity.ca.`,
          `Notre responsable de la protection des renseignements personnels peut être joint à l'adresse suivante : privacy@tracersecurity.ca`,
        ],
      },
      {
        heading: "2. Portée de cette politique",
        body: [
          "Cette politique s'applique aux visiteurs de tracersecurity.ca et aux personnes qui soumettent un formulaire de liste d'attente, d'accès anticipé ou de contact sur notre site Web.",
          "Elle ne s'applique pas aux sites Web ou services de tiers que nous n'exploitons pas.",
        ],
      },
      {
        heading: "3. Quels renseignements personnels nous collectons",
        subsections: [
          {
            subheading: "Visiteurs du site Web",
            body: "Lorsque vous visitez notre site Web, nos fournisseurs d'hébergement et de sécurité peuvent traiter des renseignements techniques standards, comme l'adresse IP, les informations sur le navigateur et l'appareil, les pages demandées, la page de référence, les horodatages et les métadonnées de requête nécessaires à la livraison, la sécurité et la surveillance du site Web.",
          },
          {
            subheading: "Soumissions de formulaires d'accès anticipé et de contact",
            body: "Lorsque vous soumettez un formulaire de liste d'attente, d'accès anticipé ou de contact, nous collectons les renseignements que vous fournissez, comme le prénom, le nom, l'adresse courriel, la préférence linguistique, le statut de consentement aux communications, la source du formulaire et l'horodatage.",
          },
          {
            subheading: "Analytique facultative",
            body: "Si vous acceptez l'analytique dans nos préférences de confidentialité, nous utilisons Google Analytics 4 et Vercel Web Analytics pour comprendre l'utilisation du site Web. Ces outils peuvent traiter des renseignements comme les pages visitées, la région approximative, les informations sur l'appareil et le navigateur, le référent, l'activité de session et les événements de site Web que nous configurons. Nous n'envoyons pas aux outils analytiques les valeurs saisies dans les formulaires, y compris les noms, les adresses courriel, les établissements ou le contenu d'un message.",
          },
        ],
      },
      {
        heading: "4. Comment nous utilisons les renseignements personnels",
        body: ["Nous utilisons les renseignements personnels que nous collectons pour :"],
        list: [
          "Répondre aux demandes et gérer les demandes d'accès anticipé",
          "Envoyer des courriels concernant la liste d'attente, le lancement et les mises à jour produit lorsque vous avez consenti à les recevoir",
          "Exploiter, sécuriser, déboguer et surveiller notre site Web",
          "Mesurer l'utilisation agrégée du site Web après consentement analytique",
          "Respecter nos obligations légales",
        ],
        bodyAfter: [
          "Nous ne vendons pas de renseignements personnels. Nous n'utilisons pas l'analytique du site Web à des fins publicitaires, de remarketing ou de profilage commercial individuel.",
        ],
      },
      {
        heading: "5. Base juridique du traitement",
        body: [
          "Selon le contexte, nous traitons les renseignements personnels sur les bases suivantes :",
        ],
        listBold: [
          { term: "Consentement", desc: "communications de liste d'attente et de mises à jour produit, et témoins analytiques facultatifs ou technologies similaires" },
          { term: "Intérêt légitime", desc: "exploitation, sécurité, débogage et amélioration du site Web" },
          { term: "Obligation légale", desc: "conformité avec la loi applicable" },
        ],
        bodyAfter: [
          "Vous pouvez retirer votre consentement à l'analytique en tout temps au moyen du lien Préférences de confidentialité dans le pied de page. Vous pouvez vous désabonner des courriels de liste d'attente et de mises à jour produit en suivant les instructions de désabonnement dans nos courriels ou en contactant privacy@tracersecurity.ca.",
        ],
      },
      {
        heading: "6. Fournisseurs de services et transferts",
        body: [
          "Nous utilisons un nombre limité de fournisseurs de services pour exploiter le site Web et gérer les communications. Ceux-ci incluent actuellement Vercel pour l'hébergement du site Web, la sécurité, les journaux et Vercel Web Analytics; Google Analytics 4 pour l'analytique facultative du site Web; et Resend pour les communications de liste d'attente et de courriel.",
          "Ces fournisseurs peuvent traiter des renseignements à l'extérieur de votre province ou du Canada, y compris aux États-Unis ou dans d'autres pays où eux-mêmes ou leurs sous-traitants exercent leurs activités. Lorsque nous utilisons des fournisseurs de services, nous nous appuyons sur des mesures contractuelles, techniques et organisationnelles appropriées à la nature des renseignements et du service.",
        ],
      },
      {
        heading: "7. Quand nous partageons des renseignements",
        body: ["Nous ne partageons pas de renseignements personnels avec des tiers, sauf dans les circonstances suivantes :"],
        listBold: [
          { term: "Fournisseurs de services", desc: "pour exploiter le site Web, traiter les inscriptions à la liste d'attente, envoyer des courriels, fournir l'analytique après consentement et maintenir la sécurité" },
          { term: "Exigences légales", desc: "nous pouvons divulguer des renseignements lorsque la loi, une ordonnance judiciaire ou une autorité gouvernementale l'exige" },
          { term: "Transferts d'entreprise", desc: "en cas de fusion, d'acquisition ou de vente d'actifs, des renseignements personnels peuvent être transférés dans le cadre de cette transaction, sous réserve de protections de la vie privée équivalentes" },
        ],
        bodyAfter: ["Nous ne partageons pas de renseignements personnels avec des annonceurs ou des courtiers en données."],
      },
      {
        heading: "8. Témoins analytiques",
        body: [
          "Nous chargeons les outils analytiques facultatifs seulement après votre acceptation de l'analytique dans les préférences de confidentialité du site Web. Nos outils analytiques facultatifs sont Google Analytics 4 et Vercel Web Analytics.",
          "L'analytique nous aide à comprendre l'utilisation agrégée du site Web, notamment les pages visitées, la région approximative, les informations sur l'appareil et le navigateur, le référent et l'activité de session. Nous n'utilisons pas actuellement les outils analytiques pour la publicité, le remarketing ou le profilage commercial individuel. Si vous refusez l'analytique, ces outils ne sont pas chargés et les témoins analytiques sont supprimés lorsque possible.",
        ],
      },
      {
        heading: "9. Conservation des données",
        body: ["Nous conservons les renseignements personnels uniquement aussi longtemps que nécessaire aux fins pour lesquelles ils ont été collectés :"],
        list: [
          "Demandes d'accès anticipé et de contact : 24 mois à compter du dernier contact, ou jusqu'à ce que vous demandiez la suppression",
          "Registres de consentement et de désabonnement par courriel : aussi longtemps que nécessaire pour documenter le consentement et respecter les demandes de désabonnement",
          "Journaux de site Web et de sécurité : jusqu'à 90 jours, sauf si une période plus longue est nécessaire pour la sécurité, le débogage, des raisons juridiques ou la conformité",
          "Données analytiques : selon les paramètres de nos fournisseurs d'analytique; les rapports agrégés peuvent être conservés plus longtemps parce qu'ils n'identifient pas les visiteurs individuels",
        ],
      },
      {
        heading: "10. Vos droits",
        body: ["Si vous êtes résident du Québec, vous disposez des droits suivants en vertu de la Loi 25 :"],
        listBold: [
          { term: "Droit d'accès", desc: "demander une copie des renseignements personnels que nous détenons à votre sujet" },
          { term: "Droit de rectification", desc: "corriger les renseignements inexacts ou incomplets" },
          { term: "Droit à l'effacement ou à la dépersonnalisation", desc: "demander la suppression de vos renseignements lorsque nous n'avons pas de base juridique pour les conserver" },
          { term: "Droit à la portabilité", desc: "recevoir vos renseignements dans un format structuré et couramment utilisé" },
          { term: "Droit de vous opposer à une décision automatisée", desc: "demander un examen humain de toute décision prise exclusivement par un traitement automatisé" },
        ],
        bodyAfter: [
          "Pour exercer ces droits, contactez notre responsable de la protection des renseignements personnels à privacy@tracersecurity.ca. Nous répondrons dans les 30 jours.",
        ],
      },
      {
        heading: "11. Sécurité",
        body: ["Nous mettons en œuvre des mesures de sécurité appropriées à la sensibilité des renseignements que nous détenons, notamment :"],
        list: [
          "Chiffrement des renseignements personnels en transit (TLS) et au repos",
          "Contrôles d'accès basés sur les rôles limitant l'accès au personnel autorisé",
          "Accès administratif limité au personnel qui en a besoin",
          "Surveillance de sécurité et mesures de protection des fournisseurs pour l'infrastructure du site Web",
        ],
      },
      {
        heading: "12. Notification en cas d'incident",
        body: [
          "En cas d'incident de confidentialité impliquant des renseignements personnels qui présente un risque de préjudice grave, nous aviserons les personnes concernées et la Commission d'accès à l'information du Québec (CAI) dès que raisonnablement possible après la découverte de l'incident. Nous maintenons un registre de tous les incidents de sécurité tel que requis par la Loi 25.",
        ],
      },
      {
        heading: "13. Témoins de connexion et contrôles",
        body: [
          "Notre site Web utilise les témoins essentiels et le stockage local nécessaires aux préférences et au fonctionnement du site. Votre préférence analytique est enregistrée dans votre navigateur pour mémoriser votre choix. Vous pouvez modifier votre préférence analytique en tout temps au moyen du lien Préférences de confidentialité dans le pied de page.",
        ],
      },
      {
        heading: "14. Modifications de cette politique",
        body: [
          "Nous pouvons mettre à jour cette politique de temps à autre. Nous publierons la politique mise à jour sur notre site Web avec une date révisée. Lorsque la loi l'exige, nous fournirons un avis supplémentaire en cas de modification importante.",
        ],
      },
      {
        heading: "15. Contact",
        body: [
          "Pour toute question relative à la confidentialité ou pour exercer vos droits :",
          "Responsable de la protection des renseignements personnels, Tracer Research Security inc.\nprivacy@tracersecurity.ca\ntracersecurity.ca",
        ],
      },
    ],
  },
}

type Section = {
  heading: string
  body?: string[]
  list?: string[]
  listBold?: { term: string; desc: string }[]
  bodyAfter?: string[]
  subsections?: { subheading: string; body: string }[]
}

function renderSection(section: Section, index: number) {
  return (
    <section key={index} className="mb-10">
      <h2 className="text-base font-medium text-foreground mb-4 tracking-wide">
        {section.heading}
      </h2>

      {section.body?.map((para, i) => (
        <p key={i} className="text-muted-foreground font-light leading-relaxed mb-3 whitespace-pre-line">
          {para}
        </p>
      ))}

      {section.subsections?.map((sub, i) => (
        <div key={i} className="mb-4 pl-0">
          <h3 className="text-sm font-medium text-foreground/80 mb-2">{sub.subheading}</h3>
          <p className="text-muted-foreground font-light leading-relaxed">{sub.body}</p>
        </div>
      ))}

      {section.list && (
        <ul className="list-disc list-outside ml-5 space-y-1.5 mb-3">
          {section.list.map((item, i) => (
            <li key={i} className="text-muted-foreground font-light leading-relaxed">{item}</li>
          ))}
        </ul>
      )}

      {section.listBold && (
        <ul className="space-y-2 mb-3">
          {section.listBold.map((item, i) => (
            <li key={i} className="text-muted-foreground font-light leading-relaxed">
              <span className="font-medium text-foreground/80">{item.term}</span>
              {" — "}
              {item.desc}
            </li>
          ))}
        </ul>
      )}

      {section.bodyAfter?.map((para, i) => (
        <p key={i} className="text-muted-foreground font-light leading-relaxed mb-3 whitespace-pre-line">
          {para}
        </p>
      ))}
    </section>
  )
}

export default function PrivacyPage() {
  const { language } = useLanguage()
  const c = content[language]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
          <div className="mx-auto max-w-2xl px-6 pt-36 pb-24">
            {/* Back button */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300 mb-16"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {language === "fr" ? "Retour" : "Back"}
            </Link>

            {/* Header */}
            <div className="mb-16">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/50 mb-4">
                {c.lastUpdated}
              </p>
              <h1 className="text-3xl md:text-4xl font-light text-foreground tracking-tight">
                {c.title}
              </h1>
              <div className="mt-6 h-px bg-border" />
            </div>

            {/* Sections */}
            <div>
              {c.sections.map((section, i) => renderSection(section as Section, i))}
            </div>
          </div>

          <Footer />
      </main>
    </>
  )
}
