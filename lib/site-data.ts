import {
  BookOpenCheck,
  Building2,
  ClipboardCheck,
  DatabaseZap,
  FileSearch,
  Globe2,
  Landmark,
  LockKeyhole,
  Network,
  Newspaper,
  SearchCheck,
  ShieldCheck,
  UsersRound,
} from "lucide-react"

export const mainNav = [
  { href: "/platform", label: "Platform" },
  { href: "/labs", label: "Labs" },
  { href: "/solutions", label: "Solutions & Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/company", label: "Company" },
]

export const productStats = [
  {
    value: "Cases",
    valueFr: "Dossiers",
    label: "structured screening records for people and organizations",
    labelFr: "dossiers de vérification structurés pour les personnes et les organisations",
  },
  {
    value: "Reports",
    valueFr: "Rapports",
    label: "rendered cards with citations and source handling",
    labelFr: "fiches générées avec citations et gestion des sources",
  },
  {
    value: "Signals",
    valueFr: "Signaux",
    label: "sanctions, academic networks, corporate context, and OSINT",
    labelFr: "sanctions, réseaux académiques, contexte corporatif et OSINT",
  },
  {
    value: "RSO",
    valueFr: "RSO",
    label: "human review remains the decision layer",
    labelFr: "la revue humaine demeure la couche décisionnelle",
  },
]

export const capabilities = [
  {
    icon: ShieldCheck,
    title: "Source-backed screening",
    titleFr: "Vérification appuyée par les sources",
    description:
      "Gather sanctions, affiliation, academic, corporate, and open-source signals in one reviewable workflow.",
    descriptionFr:
      "Rassemblez les signaux de sanctions, d'affiliations, académiques, corporatifs et de sources ouvertes dans un flux révisable.",
  },
  {
    icon: Network,
    title: "Entity-aware cases",
    titleFr: "Dossiers centrés sur les entités",
    description:
      "Create a case, screen multiple individuals or organizations, and preserve the audit history around each entity.",
    descriptionFr:
      "Créez un dossier, vérifiez plusieurs personnes ou organisations, et conservez l'historique d'audit de chaque entité.",
  },
  {
    icon: Building2,
    title: "Case workflow",
    titleFr: "Flux de dossier",
    description:
      "Move from partner intake to source-backed screening card with clear status and team context.",
    descriptionFr:
      "Passez de l'accueil d'un partenaire à une fiche de vérification sourcée avec statut clair et contexte d'équipe.",
  },
  {
    icon: Newspaper,
    title: "Signal context",
    titleFr: "Contexte des signaux",
    description:
      "Surface adverse media, institutional context, and academic signals without overstating certainty.",
    descriptionFr:
      "Faites ressortir les médias défavorables, le contexte institutionnel et les signaux académiques sans surestimer la certitude.",
  },
  {
    icon: ClipboardCheck,
    title: "RSO-ready reports",
    titleFr: "Rapports prêts pour les RSO",
    description:
      "Render dense, human-readable screening cards that can be copied, exported, and reviewed by the responsible team.",
    descriptionFr:
      "Générez des fiches de vérification denses et lisibles qui peuvent être copiées, exportées et révisées par l'équipe responsable.",
  },
  {
    icon: LockKeyhole,
    title: "Auditable operations",
    titleFr: "Opérations auditables",
    description:
      "Track stage status, elapsed time, provider usage, cost estimates, interaction IDs, and review activity.",
    descriptionFr:
      "Suivez le statut des étapes, le temps écoulé, l'usage fournisseur, les coûts estimés, les identifiants d'interaction et l'activité de révision.",
  },
]

export const problemCards = [
  {
    label: "Speed",
    labelFr: "Rapidité",
    headline: "From intake to screening card.",
    headlineFr: "De l'accueil à la fiche de vérification.",
    description:
      "Research administrators should not rebuild the same search process from scratch for every collaborator or organization.",
    descriptionFr:
      "Les administrateurs de recherche ne devraient pas reconstruire le même processus de recherche pour chaque collaborateur ou organisation.",
  },
  {
    label: "Consistency",
    labelFr: "Cohérence",
    headline: "One repeatable workflow.",
    headlineFr: "Un flux répétable.",
    description:
      "Tracer helps teams apply a consistent screening process while keeping the final review with the human RSO.",
    descriptionFr:
      "Tracer aide les équipes à appliquer un processus uniforme tout en gardant la révision finale entre les mains du RSO.",
  },
  {
    label: "Synthesis",
    labelFr: "Synthèse",
    headline: "Facts made reviewable.",
    headlineFr: "Des faits prêts à être révisés.",
    description:
      "Raw research output becomes a readable, cited report instead of a long, unstructured dump of findings.",
    descriptionFr:
      "Les résultats bruts deviennent un rapport lisible et cité, plutôt qu'un long amas non structuré de constats.",
  },
  {
    label: "Output",
    labelFr: "Résultat",
    headline: "Exportable and auditable.",
    headlineFr: "Exportable et auditable.",
    description:
      "Every screening card is designed to support institutional review, PDF export, and future audit context.",
    descriptionFr:
      "Chaque fiche de vérification soutient la révision institutionnelle, l'export PDF et le contexte d'audit futur.",
  },
]

export const workflow = [
  {
    step: "01",
    title: "Create a case",
    titleFr: "Créer un dossier",
    description:
      "Start with the person, organization, grant context, or partnership under review.",
    descriptionFr:
      "Commencez par la personne, l'organisation, le contexte de subvention ou le partenariat à réviser.",
  },
  {
    step: "02",
    title: "Screen the signals",
    titleFr: "Vérifier les signaux",
    description:
      "Check sanctions, academic networks, corporate records, and open-source context in a repeatable workflow.",
    descriptionFr:
      "Vérifiez les sanctions, réseaux académiques, registres corporatifs et sources ouvertes dans un flux répétable.",
  },
  {
    step: "03",
    title: "Review the card",
    titleFr: "Réviser la fiche",
    description:
      "The rendered output stays human-readable, source-aware, and clear about what requires review.",
    descriptionFr:
      "Le résultat demeure lisible, sourcé et clair sur ce qui requiert une révision.",
  },
  {
    step: "04",
    title: "Preserve the record",
    titleFr: "Préserver le dossier",
    description:
      "Track activity, exports, usage, costs, timestamps, and screening history for institutional continuity.",
    descriptionFr:
      "Suivez l'activité, les exports, l'usage, les coûts, les horodatages et l'historique de vérification.",
  },
]

export const solutions = [
  {
    icon: Landmark,
    title: "Research security offices",
    titleFr: "Bureaux de sécurité de la recherche",
    description:
      "Give small teams a repeatable way to gather facts, synthesize findings, and render reviewable reports.",
    descriptionFr:
      "Donnez aux petites équipes un moyen répétable de rassembler les faits, synthétiser les constats et produire des rapports révisables.",
    points: ["Structured case intake", "RSO-ready screening cards", "Audit and activity history"],
    pointsFr: ["Accueil structuré des dossiers", "Fiches prêtes pour les RSO", "Historique d'audit et d'activité"],
  },
  {
    icon: BookOpenCheck,
    title: "Grant and compliance teams",
    titleFr: "Équipes de subventions et conformité",
    description:
      "Support NSGRP and STRAC-aligned review processes with evidence that can be archived and revisited.",
    descriptionFr:
      "Soutenez les processus alignés sur les Lignes directrices et la politique STRAC avec des preuves archivables.",
    points: ["Source-backed evidence", "Exportable reports", "Repeatable review workflow"],
    pointsFr: ["Preuves appuyées par les sources", "Rapports exportables", "Flux de révision répétable"],
  },
  {
    icon: UsersRound,
    title: "Faculty and research leadership",
    titleFr: "Facultés et direction de la recherche",
    description:
      "Give decision-makers concise context without asking them to read raw search output or prompt traces.",
    descriptionFr:
      "Donnez aux décideurs un contexte concis sans leur demander de lire les résultats bruts ou les traces de prompts.",
    points: ["Plain-language synthesis", "Human review preserved", "Clear operational status"],
    pointsFr: ["Synthèse en langage clair", "Révision humaine préservée", "Statut opérationnel clair"],
  },
]

export const platformModules = [
  {
    title: "Screen individuals",
    titleFr: "Vérifier des personnes",
    status: "Active path",
    statusFr: "Parcours actif",
    description:
      "Submit a name. Tracer returns a full file: institutional affiliation, co-author network, funding history, sanctions status, foreign ties, legal record, and adverse media, each with its own verdict and source trail for RSO review.",
    descriptionFr:
      "Soumettez un nom. Tracer retourne un dossier complet : affiliation institutionnelle, réseau de coauteurs, historique de financement, statut de sanctions, liens étrangers, dossier juridique et médias défavorables, chacun avec son verdict et sa piste de sources pour la revue RSO.",
    image: "/brand/screen-individuals.png",
  },
  {
    title: "Screen organizations",
    titleFr: "Vérifier des organisations",
    status: "Staged",
    statusFr: "En préparation",
    description:
      "Submit an institution. Tracer returns a full file: legal structure and governance chain, sanctions screening across the entity and its supervisory authority, partner and vendor network, export control exposure, legal record, and adverse media, each with its own verdict and source trail for RSO review.",
    descriptionFr:
      "Soumettez une institution. Tracer retourne un dossier complet : structure juridique et chaîne de gouvernance, vérification des sanctions sur l'entité et son autorité de supervision, réseau de partenaires et fournisseurs, exposition au contrôle des exportations, dossier juridique et médias défavorables, chacun avec son verdict et sa piste de sources pour la revue RSO.",
    image: "/brand/screening-organizations.png",
  },
]

export const pipelineStages = [
  {
    title: "Deep Search",
    titleFr: "Recherche approfondie",
    description:
      "Gather source material and preserve interaction context for resumable, idempotent runs.",
    descriptionFr:
      "Rassemblez les sources et conservez le contexte d'interaction pour des exécutions reprenables et idempotentes.",
  },
  {
    title: "Synthetization",
    titleFr: "Synthétisation",
    description:
      "Transform raw source output into structured findings, citations, and review guidance.",
    descriptionFr:
      "Transformez les résultats bruts en constats structurés, citations et indications de révision.",
  },
  {
    title: "Rendering",
    titleFr: "Rendu",
    description:
      "Convert synthesized output into a sandboxed, document-like report card ready for copy or PDF export.",
    descriptionFr:
      "Convertissez la synthèse en fiche documentaire isolée, prête à copier ou exporter en PDF.",
  },
]

export const teamWorkflows = [
  {
    team: "Research security",
    teamFr: "Sécurité de la recherche",
    pressure: "High request volume, limited analyst capacity, and inconsistent manual checks.",
    pressureFr: "Volume élevé, capacité d'analyse limitée et vérifications manuelles inégales.",
    outcome:
      "A repeatable intake-to-report workflow that helps teams gather and present facts without claiming final risk decisions.",
    outcomeFr:
      "Un flux répétable de l'accueil au rapport pour rassembler et présenter les faits sans prétendre rendre la décision finale.",
    responsibilities: [
      "Screen collaborators and institutions",
      "Document risk signals and rationale",
      "Escalate the right cases to legal or leadership",
    ],
    responsibilitiesFr: [
      "Vérifier les collaborateurs et institutions",
      "Documenter les signaux et la justification",
      "Escalader les bons dossiers vers le juridique ou la direction",
    ],
  },
  {
    team: "Grants and compliance",
    teamFr: "Subventions et conformité",
    pressure: "Funding timelines move fast, but NSGRP and STRAC evidence still needs to be defensible.",
    pressureFr:
      "Les échéanciers de financement avancent vite, mais les preuves liées aux Lignes directrices et à STRAC doivent rester défendables.",
    outcome:
      "Source-backed screening cards that can be attached to internal review, grant records, and compliance workflows.",
    outcomeFr:
      "Des fiches sourcées pouvant être jointes à la révision interne, aux dossiers de subvention et aux flux de conformité.",
    responsibilities: [
      "Support grant intake and due diligence",
      "Capture audit-ready documentation",
      "Align screening with institutional policy",
    ],
    responsibilitiesFr: [
      "Soutenir l'accueil des subventions et la diligence raisonnable",
      "Capturer une documentation prête pour l'audit",
      "Aligner la vérification avec la politique institutionnelle",
    ],
  },
  {
    team: "Faculty and leadership",
    teamFr: "Facultés et direction",
    pressure: "Researchers need collaboration to move, while leaders need confidence before risk is accepted.",
    pressureFr:
      "Les chercheurs doivent collaborer, tandis que la direction a besoin de confiance avant d'accepter un risque.",
    outcome:
      "Clear, plain-language context that supports a human decision without overstating certainty.",
    outcomeFr:
      "Un contexte clair, en langage simple, qui soutient la décision humaine sans surestimer la certitude.",
    responsibilities: [
      "Understand partnership status quickly",
      "Reduce avoidable back-and-forth",
      "Move trusted collaborations forward",
    ],
    responsibilitiesFr: [
      "Comprendre rapidement le statut d'un partenariat",
      "Réduire les allers-retours évitables",
      "Faire avancer les collaborations de confiance",
    ],
  },
]

export const pricingPlans = [
  {
    name: "Early Access",
    nameFr: "Accès anticipé",
    price: "$10k / 6 months",
    priceFr: "10 k$ / 6 mois",
    note: "10 places for the founding cohort",
    noteFr: "10 places pour la cohorte fondatrice",
    deal: "Special offer until September 1, 2026",
    dealFr: "Offre spéciale jusqu'au 1er septembre 2026",
    description:
      "For a small founding group that wants to validate Tracer with real screening work and shape the product early.",
    descriptionFr:
      "Pour un petit groupe fondateur qui veut valider Tracer sur de vrais flux de vérification et orienter le produit tôt.",
    cta: "Get more info",
    ctaFr: "En savoir plus",
    features: [
      "Limited founding cohort of 10 places",
      "Core individual screening workflow",
      "Personalized guidance and onboarding",
      "Priority setup for early research security teams",
    ],
    featuresFr: [
      "Cohorte fondatrice limitée à 10 places",
      "Flux central de vérification individuelle",
      "Accompagnement et intégration personnalisés",
      "Mise en place prioritaire pour les premières équipes de sécurité de la recherche",
    ],
  },
  {
    name: "Institution",
    nameFr: "Institution",
    price: "$20k / year",
    priceFr: "20 k$ / an",
    note: "$18k / year with a 2-year term, 10 users included",
    noteFr: "18 k$ / an avec engagement de 2 ans, 10 utilisateurs inclus",
    description:
      "For universities ready to standardize research security review across teams while preserving human RSO review.",
    descriptionFr:
      "Pour les universités prêtes à standardiser la revue de sécurité de la recherche tout en préservant la révision humaine.",
    cta: "Request access",
    ctaFr: "Demander l'accès",
    featured: true,
    features: [
      "10 users included",
      "Shared workspace for research security teams",
      "Multi-source screening and source-backed synthesis",
      "Export-ready reports with citations",
      "Bilingual workflow and audit trail",
    ],
    featuresFr: [
      "10 utilisateurs inclus",
      "Espace partagé pour les équipes de sécurité de la recherche",
      "Vérification multi-source et synthèse sourcée",
      "Rapports exportables avec citations",
      "Flux bilingue et piste d'audit",
    ],
  },
  {
    name: "Custom Intelligence",
    nameFr: "Intelligence sur mesure",
    price: "Custom",
    priceFr: "Sur mesure",
    description:
      "For agencies, networks, and large teams that need personalized deep search based on Tracer's intelligence layer.",
    descriptionFr:
      "Pour les agences, réseaux et grandes équipes qui ont besoin d'une recherche approfondie personnalisée basée sur la couche d'intelligence de Tracer.",
    cta: "Talk to us",
    ctaFr: "Nous parler",
    features: [
      "Personalized deep-search workflows",
      "Custom models and targeted query strategy",
      "Unlimited users for large operating needs",
      "Advanced reporting, governance, and support",
    ],
    featuresFr: [
      "Flux de recherche approfondie personnalisés",
      "Modèles sur mesure et stratégie de requêtes ciblées",
      "Utilisateurs illimités pour les grands besoins opérationnels",
      "Rapports, gouvernance et soutien avancés",
    ],
  },
]

export const blogThemes = [
  {
    label: "How to structure collaborator screening",
    labelFr: "Structurer la vérification des collaborateurs",
  },
  {
    label: "NSGRP and STRAC review operations",
    labelFr: "Opérations de revue NSGRP et STRAC",
  },
  {
    label: "Citations, source handling, and audit trails",
    labelFr: "Citations, gestion des sources et pistes d'audit",
  },
  {
    label: "Human review and defensible research security records",
    labelFr: "Révision humaine et dossiers défendables",
  },
]

export const governanceItems = [
  {
    label:
      "Tracer gathers, synthesizes, and renders facts. It does not make the institutional decision.",
    labelFr:
      "Tracer rassemble, synthétise et rend des faits. Il ne prend pas la décision institutionnelle.",
  },
  {
    label:
      "Reports should include citations, source context, and clear language for human review.",
    labelFr:
      "Les rapports doivent inclure citations, contexte des sources et langage clair pour la révision humaine.",
  },
  {
    label:
      "Screening records should be repeatable, reviewable, and clear about what remains uncertain.",
    labelFr:
      "Les dossiers de vérification doivent être répétables, révisables et clairs sur les incertitudes restantes.",
  },
  {
    label:
      "Human reviewers retain decision authority, escalation judgment, and institutional context.",
    labelFr:
      "Les réviseurs humains conservent l'autorité décisionnelle, le jugement d'escalade et le contexte institutionnel.",
  },
]

export const resourceCards = [
  {
    href: "/resources#research-security-screening",
    eyebrow: "Guide",
    eyebrowFr: "Guide",
    title: "Research security screening",
    titleFr: "Vérification de sécurité de la recherche",
    description:
      "A plain-language guide to screening collaborators, affiliations, sanctions, and academic networks.",
    descriptionFr:
      "Un guide clair pour vérifier les collaborateurs, affiliations, sanctions et réseaux académiques.",
  },
  {
    href: "/resources#academic-due-diligence",
    eyebrow: "Playbook",
    eyebrowFr: "Guide opérationnel",
    title: "Academic due diligence",
    titleFr: "Diligence raisonnable académique",
    description:
      "How universities can structure partnership checks before sensitive work or funding decisions begin.",
    descriptionFr:
      "Comment les universités peuvent structurer les vérifications avant les travaux sensibles ou les décisions de financement.",
  },
  {
    href: "/resources#sanctions-screening",
    eyebrow: "Compliance",
    eyebrowFr: "Conformité",
    title: "Sanctions screening for universities",
    titleFr: "Vérification des sanctions pour les universités",
    description:
      "A practical overview of sanctions, restricted entities, and research-specific screening obligations.",
    descriptionFr:
      "Un aperçu pratique des sanctions, entités restreintes et obligations propres à la recherche.",
  },
]

export const platformPillars = [
  {
    icon: SearchCheck,
    title: "Identity resolution",
    titleFr: "Résolution d'identité",
    description:
      "Match names, ORCID records, publication history, affiliations, and institutional variants before screening.",
    descriptionFr:
      "Associez noms, ORCID, publications, affiliations et variantes institutionnelles avant la vérification.",
  },
  {
    icon: DatabaseZap,
    title: "Multi-source enrichment",
    titleFr: "Enrichissement multi-source",
    description:
      "Normalize data from academic, corporate, sanctions, and open-source records into a single review context.",
    descriptionFr:
      "Normalisez les données académiques, corporatives, de sanctions et de sources ouvertes dans un seul contexte de revue.",
  },
  {
    icon: FileSearch,
    title: "Cited risk analysis",
    titleFr: "Analyse citée des signaux",
    description:
      "Produce transparent findings with source links, signal categories, confidence, and recommended next steps.",
    descriptionFr:
      "Produisez des constats transparents avec liens sources, catégories de signaux, confiance et prochaines étapes.",
  },
  {
    icon: Globe2,
    title: "Canada-ready operations",
    titleFr: "Opérations prêtes pour le Canada",
    description:
      "Design for bilingual teams, Canadian data expectations, NSGRP workflows, and global research partnerships.",
    descriptionFr:
      "Conçu pour les équipes bilingues, les attentes canadiennes, les flux NSGRP et les partenariats mondiaux.",
  },
]

export const assuranceItems = [
  {
    label: "No change to the waitlist submission flow",
    labelFr: "Aucun changement au flux d'inscription à la liste d'attente",
  },
  {
    label: "Separate redesign branch for safe iteration",
    labelFr: "Branche de refonte séparée pour itérer sans risque",
  },
  {
    label: "Reusable site data for future pages",
    labelFr: "Données de site réutilisables pour les prochaines pages",
  },
  {
    label: "Content architecture ready for product, solution, and resource growth",
    labelFr: "Architecture de contenu prête pour la croissance produit, solutions et ressources",
  },
]

export const signalRows = [
  { label: "Sanctions and restricted entities", labelFr: "Sanctions et entités restreintes", status: "Clear", statusFr: "Clair", tone: "good" },
  { label: "Named research organizations", labelFr: "Organisations de recherche nommées", status: "Review", statusFr: "Révision", tone: "warn" },
  { label: "Co-publication network", labelFr: "Réseau de co-publication", status: "Mapped", statusFr: "Cartographié", tone: "neutral" },
  { label: "Corporate structure", labelFr: "Structure corporative", status: "Flag", statusFr: "Signal", tone: "bad" },
  { label: "Adverse media and legal records", labelFr: "Médias défavorables et dossiers juridiques", status: "Clear", statusFr: "Clair", tone: "good" },
]

export const checklist = [
  { label: "Partner identity resolved", labelFr: "Identité du partenaire résolue" },
  { label: "Affiliations normalized", labelFr: "Affiliations normalisées" },
  { label: "Restricted lists checked", labelFr: "Listes restreintes vérifiées" },
  { label: "Network signals summarized", labelFr: "Signaux de réseau résumés" },
  { label: "Brief ready for review", labelFr: "Note prête pour révision" },
]

export const trustBar = [
  { label: "Built for universities", labelFr: "Conçu pour les universités" },
  { label: "Research security first", labelFr: "Sécurité de la recherche d'abord" },
  { label: "Bilingual by design", labelFr: "Bilingue par conception" },
  { label: "Decision-ready output", labelFr: "Résultat prêt pour décision" },
]

export type SignalTone = (typeof signalRows)[number]["tone"]
