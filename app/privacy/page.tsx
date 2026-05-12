"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

const content = {
  en: {
    lastUpdated: "Last updated: May 2026",
    title: "Privacy Policy",
    sections: [
      {
        heading: "1. Who we are",
        body: [
          `Tracer Research Security inc. ("Tracer," "we," "us," or "our") is a Canadian company providing research security intelligence services to universities, research institutions, and other organizations. Our platform helps institutions screen research partnership candidates against sanctions lists, open-source intelligence, and network affiliation data.`,
          `Our Privacy Officer can be reached at: privacy@tracersecurity.ca`,
        ],
      },
      {
        heading: "2. Scope of this policy",
        body: [
          "This policy applies to:",
        ],
        list: [
          "Visitors to our website (tracersecurity.ca)",
          "Individuals who submit our early access or contact forms",
          "Clients and users of the Tracer platform",
        ],
        bodyAfter: [
          "This policy does not apply to personal information that Tracer processes on behalf of its institutional clients as a service provider. In that context, the client institution is the organization responsible for the personal information and Tracer acts as a mandatary processing that information according to the client's instructions and our data processing agreement.",
        ],
      },
      {
        heading: "3. What personal information we collect",
        subsections: [
          {
            subheading: "Website visitors",
            body: "We collect standard server logs including IP addresses, browser type, pages visited, and timestamps. If you accept analytics cookies, we use analytics tools to understand site usage, such as pages visited, session duration, approximate general location, device and browser information, referrer, and session activity. This data is used solely to improve our website and is not shared with advertisers.",
          },
          {
            subheading: "Early access and contact form submissions",
            body: "When you submit an early access or waitlist form on our website, we collect: first name, last name, email address, language preference, consent status, form source, and submission timestamp.",
          },
          {
            subheading: "Platform users (clients)",
            body: "For users of the Tracer platform, we collect: name, professional email address, institution, role, login credentials (stored in hashed form), and usage logs necessary for security, audit, and service improvement purposes.",
          },
          {
            subheading: "Screening subjects",
            body: "The individuals and organizations screened through the Tracer platform are not our clients or website visitors — they are third parties whose publicly available professional information is processed as part of a research security review. This processing is described in Section 6 below.",
          },
        ],
      },
      {
        heading: "4. How we use personal information",
        body: ["We use the personal information we collect to:"],
        list: [
          "Respond to inquiries and manage early access requests",
          "Provide, maintain, and improve the Tracer platform",
          "Authenticate users and maintain account security",
          "Produce audit logs required for institutional compliance",
          "Communicate with clients about their accounts and our services",
          "Comply with our legal obligations",
        ],
        bodyAfter: [
          "We do not sell personal information. We do not use personal information for advertising purposes.",
        ],
      },
      {
        heading: "5. Legal basis for processing",
        body: [
          "For clients and users in Quebec, we process personal information on the following bases under the Act respecting the protection of personal information in the private sector (Law 25):",
        ],
        listBold: [
          { term: "Contractual necessity", desc: "processing required to perform our service agreement with client institutions" },
          { term: "Legitimate interest", desc: "maintaining security logs, fraud prevention, and service improvement" },
          { term: "Legal obligation", desc: "compliance with applicable law" },
        ],
        bodyAfter: [
          "For early access inquiries, we process your information on the basis of your consent, which you provide by checking the communication consent box and submitting the form. For analytics cookies, we only activate analytics tools after you accept analytics in the website privacy preferences.",
        ],
      },
      {
        heading: "6. Processing of publicly available professional information",
        body: [
          "When Tracer screens a research partner candidate on behalf of a client institution, it queries publicly available sources including sanctions databases, open-source intelligence sources, academic publication records, and corporate registries. The names and institutional affiliations of researchers and organizations submitted to these queries are information that those individuals and organizations have made public in their professional capacity.",
          "It is our considered legal position, documented in our privacy architecture, that querying publicly available information about professionals acting in their professional capacity does not constitute a communication of personal information to third-party API providers requiring a data processing agreement, as the alternative interpretation would make routine professional research legally untenable. This position is documented and available upon request.",
          "All data processed through the Tracer platform is stored on Canadian servers located in Montreal, Quebec (AWS Canada Central region). No personal information is transferred outside Canada in the course of normal platform operation.",
        ],
      },
      {
        heading: "7. Data sharing and third parties",
        body: ["We do not share personal information with third parties except in the following circumstances:"],
        listBold: [
          { term: "Service providers", desc: "we use a limited number of service providers who process personal information on our behalf under contractual obligations consistent with this policy and applicable law" },
          { term: "Legal requirements", desc: "we may disclose information when required by law, court order, or government authority" },
          { term: "Business transfers", desc: "in the event of a merger, acquisition, or sale of assets, personal information may be transferred as part of that transaction, subject to equivalent privacy protections" },
        ],
        bodyAfter: ["We do not share personal information with advertisers or data brokers."],
      },
      {
        heading: "8. Analytics cookies",
        body: [
          "We use analytics tools only after you accept analytics cookies in the website privacy preferences. These tools help us understand aggregate site usage, including pages visited, approximate region, device and browser information, referrer, and session activity.",
          "We do not currently use analytics tools for advertising, remarketing, or user-level sales profiling. We do not send waitlist form values, including first name, last name, email address, institution, or message content, to analytics tools. If you reject analytics, analytics tools are not loaded and analytics cookies are removed when possible.",
        ],
      },
      {
        heading: "9. Data retention",
        body: ["We retain personal information only as long as necessary for the purposes for which it was collected:"],
        list: [
          "Early access and contact inquiries: 24 months from last contact, or until you request deletion",
          "Platform user accounts: for the duration of the client contract plus 12 months, or as required by law",
          "Server logs: 90 days",
          "Screening case records: as specified in the data processing agreement with each client institution",
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
          "If you are a screening subject and believe you have been incorrectly identified in a research security review, please contact us with your name and institution. We will work with the client institution to correct any inaccurate information.",
        ],
      },
      {
        heading: "11. Security",
        body: ["We implement security measures appropriate to the sensitivity of the information we hold, including:"],
        list: [
          "Encryption of personal information in transit (TLS) and at rest",
          "Role-based access controls limiting access to authorized personnel",
          "Audit logging of all access to personal information",
          "Canadian data residency — all data stored in Quebec, Canada",
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
          "We may update this policy from time to time. We will post the updated policy on our website with a revised date. For material changes, we will notify active platform users by email.",
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
    lastUpdated: "Dernière mise à jour : mai 2026",
    title: "Politique de confidentialité",
    sections: [
      {
        heading: "1. Qui nous sommes",
        body: [
          `Tracer Research Security inc. (« Tracer », « nous », « notre » ou « nos ») est une entreprise canadienne offrant des services de renseignement en sécurité de la recherche aux universités, aux établissements de recherche et à d'autres organisations. Notre plateforme aide les établissements à évaluer les candidats à des partenariats de recherche par rapport aux listes de sanctions, aux sources de renseignements de sources ouvertes et aux données d'affiliation de réseaux.`,
          `Notre responsable de la protection des renseignements personnels peut être joint à l'adresse suivante : privacy@tracersecurity.ca`,
        ],
      },
      {
        heading: "2. Portée de cette politique",
        body: ["Cette politique s'applique :"],
        list: [
          "Aux visiteurs de notre site Web (tracersecurity.ca)",
          "Aux personnes qui soumettent nos formulaires d'accès anticipé ou de contact",
          "Aux clients et aux utilisateurs de la plateforme Tracer",
        ],
        bodyAfter: [
          "Cette politique ne s'applique pas aux renseignements personnels que Tracer traite au nom de ses clients institutionnels en tant que prestataire de services. Dans ce contexte, l'établissement client est l'entreprise responsable des renseignements personnels et Tracer agit comme mandataire traitant ces renseignements conformément aux instructions du client et à notre accord de traitement des données.",
        ],
      },
      {
        heading: "3. Quels renseignements personnels nous collectons",
        subsections: [
          {
            subheading: "Visiteurs du site Web",
            body: "Nous collectons des journaux de serveur standard comprenant les adresses IP, le type de navigateur, les pages visitées et les horodatages. Si vous acceptez les témoins analytiques, nous utilisons des outils analytiques pour comprendre l'utilisation du site, par exemple les pages visitées, la durée des sessions, la localisation générale approximative, les informations sur l'appareil et le navigateur, le référent et l'activité de session. Ces données servent uniquement à améliorer notre site Web et ne sont pas partagées avec des annonceurs.",
          },
          {
            subheading: "Soumissions de formulaires d'accès anticipé et de contact",
            body: "Lorsque vous soumettez un formulaire d'accès anticipé ou de liste d'attente sur notre site Web, nous collectons : prénom, nom, adresse courriel, préférence linguistique, statut de consentement, source du formulaire et horodatage.",
          },
          {
            subheading: "Utilisateurs de la plateforme (clients)",
            body: "Pour les utilisateurs de la plateforme Tracer, nous collectons : nom, adresse courriel professionnelle, établissement, rôle, identifiants de connexion (stockés sous forme hachée) et journaux d'utilisation nécessaires à des fins de sécurité, d'audit et d'amélioration du service.",
          },
          {
            subheading: "Sujets des évaluations",
            body: "Les personnes et les organisations évaluées via la plateforme Tracer ne sont pas nos clients ou visiteurs du site Web — il s'agit de tiers dont les renseignements professionnels accessibles au public sont traités dans le cadre d'une évaluation de la sécurité de la recherche. Ce traitement est décrit à la section 6 ci-dessous.",
          },
        ],
      },
      {
        heading: "4. Comment nous utilisons les renseignements personnels",
        body: ["Nous utilisons les renseignements personnels que nous collectons pour :"],
        list: [
          "Répondre aux demandes et gérer les demandes d'accès anticipé",
          "Fournir, maintenir et améliorer la plateforme Tracer",
          "Authentifier les utilisateurs et maintenir la sécurité des comptes",
          "Produire les journaux d'audit requis pour la conformité institutionnelle",
          "Communiquer avec les clients au sujet de leurs comptes et de nos services",
          "Respecter nos obligations légales",
        ],
        bodyAfter: [
          "Nous ne vendons pas de renseignements personnels. Nous n'utilisons pas les renseignements personnels à des fins publicitaires.",
        ],
      },
      {
        heading: "5. Base juridique du traitement",
        body: [
          "Pour les clients et les utilisateurs au Québec, nous traitons les renseignements personnels sur les bases suivantes en vertu de la Loi sur la protection des renseignements personnels dans le secteur privé (Loi 25) :",
        ],
        listBold: [
          { term: "Nécessité contractuelle", desc: "traitement requis pour exécuter notre accord de service avec les établissements clients" },
          { term: "Intérêt légitime", desc: "maintien des journaux de sécurité, prévention de la fraude et amélioration du service" },
          { term: "Obligation légale", desc: "conformité avec la loi applicable" },
        ],
        bodyAfter: [
          "Pour les demandes d'accès anticipé, nous traitons vos renseignements sur la base de votre consentement, que vous fournissez en cochant la case de consentement aux communications et en soumettant le formulaire. Pour les témoins analytiques, nous activons les outils analytiques seulement après votre acceptation dans les préférences de confidentialité du site.",
        ],
      },
      {
        heading: "6. Traitement des renseignements professionnels accessibles au public",
        body: [
          "Lorsque Tracer évalue un candidat à un partenariat de recherche au nom d'un établissement client, il interroge des sources accessibles au public, notamment des bases de données de sanctions, des sources de renseignements de sources ouvertes, des dossiers de publications académiques et des registres d'entreprises. Les noms et les affiliations institutionnelles des chercheurs et des organisations soumis à ces requêtes constituent des renseignements que ces personnes et organisations ont rendus publics dans le cadre de leur activité professionnelle.",
          "Notre position juridique réfléchie, documentée dans notre architecture de confidentialité, est que l'interrogation de renseignements accessibles au public concernant des professionnels agissant dans leur capacité professionnelle ne constitue pas une communication de renseignements personnels à des fournisseurs d'API tiers nécessitant un accord de traitement des données, car l'interprétation contraire rendrait la recherche professionnelle de routine juridiquement intenable. Cette position est documentée et disponible sur demande.",
          "Toutes les données traitées via la plateforme Tracer sont stockées sur des serveurs canadiens situés à Montréal, Québec (région AWS Canada Central). Aucun renseignement personnel n'est transféré hors du Canada dans le cadre du fonctionnement normal de la plateforme.",
        ],
      },
      {
        heading: "7. Partage des données et tiers",
        body: ["Nous ne partageons pas de renseignements personnels avec des tiers, sauf dans les circonstances suivantes :"],
        listBold: [
          { term: "Fournisseurs de services", desc: "nous faisons appel à un nombre limité de fournisseurs de services qui traitent des renseignements personnels en notre nom dans le cadre d'obligations contractuelles conformes à cette politique et à la loi applicable" },
          { term: "Exigences légales", desc: "nous pouvons divulguer des renseignements lorsque la loi, une ordonnance judiciaire ou une autorité gouvernementale l'exige" },
          { term: "Transferts d'entreprise", desc: "en cas de fusion, d'acquisition ou de vente d'actifs, des renseignements personnels peuvent être transférés dans le cadre de cette transaction, sous réserve de protections de la vie privée équivalentes" },
        ],
        bodyAfter: ["Nous ne partageons pas de renseignements personnels avec des annonceurs ou des courtiers en données."],
      },
      {
        heading: "8. Témoins analytiques",
        body: [
          "Nous utilisons des outils analytiques seulement après votre acceptation des témoins analytiques dans les préférences de confidentialité du site. Ces outils nous aident à comprendre l'utilisation agrégée du site, notamment les pages visitées, la région approximative, les informations sur l'appareil et le navigateur, le référent et l'activité de session.",
          "Nous n'utilisons pas actuellement les outils analytiques pour la publicité, le remarketing ou le profilage commercial individuel. Nous n'envoyons pas aux outils analytiques les valeurs saisies dans le formulaire de liste d'attente, y compris le prénom, le nom, l'adresse courriel, l'établissement ou le contenu d'un message. Si vous refusez les témoins analytiques, les outils analytiques ne sont pas chargés et les témoins analytiques sont supprimés lorsque possible.",
        ],
      },
      {
        heading: "9. Conservation des données",
        body: ["Nous conservons les renseignements personnels uniquement aussi longtemps que nécessaire aux fins pour lesquelles ils ont été collectés :"],
        list: [
          "Demandes d'accès anticipé et de contact : 24 mois à compter du dernier contact, ou jusqu'à ce que vous demandiez la suppression",
          "Comptes d'utilisateurs de la plateforme : pour la durée du contrat client plus 12 mois, ou tel que requis par la loi",
          "Journaux de serveur : 90 jours",
          "Dossiers de cas d'évaluation : tel que spécifié dans l'accord de traitement des données avec chaque établissement client",
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
          "Si vous êtes un sujet d'évaluation et pensez avoir été incorrectement identifié dans le cadre d'une évaluation de la sécurité de la recherche, veuillez nous contacter en indiquant votre nom et votre établissement. Nous travaillerons avec l'établissement client pour corriger tout renseignement inexact.",
        ],
      },
      {
        heading: "11. Sécurité",
        body: ["Nous mettons en œuvre des mesures de sécurité appropriées à la sensibilité des renseignements que nous détenons, notamment :"],
        list: [
          "Chiffrement des renseignements personnels en transit (TLS) et au repos",
          "Contrôles d'accès basés sur les rôles limitant l'accès au personnel autorisé",
          "Journalisation de tous les accès aux renseignements personnels",
          "Résidence des données au Canada — toutes les données stockées au Québec, Canada",
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
          "Nous pouvons mettre à jour cette politique de temps à autre. Nous publierons la politique mise à jour sur notre site Web avec une date révisée. Pour les modifications importantes, nous aviserons les utilisateurs actifs de la plateforme par courriel.",
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
