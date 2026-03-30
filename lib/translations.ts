export type Language = "en" | "fr"

export type Translations = typeof translations.en

export const translations = {
  en: {
    // Header
    header: {
      tagline: "Research Security",
      joinWaitlist: "Join Waitlist",
    },

    // Hero
    hero: {
      screenResearch: "Screen research",
      inMinutes: "in minutes",
      words: ["partnerships", "collaborations", "affiliations", "networks", "risks"],
      subtitle: "Tracer checks 10+ sources automatically and delivers a",
      decisionBrief: "decision-ready brief",
      subtitleEnd: "in minutes.",
      tagline: "Clear the Path to Great Science",
      viewMore: "View more",
    },

    // Value Props
    value: {
      speed: {
        label: "Speed",
        headline: "Five minutes.",
        subline: "Not five days.",
        description: "Tracer checks 10+ sources automatically — sanctions lists, academic networks, corporate structures, adverse OSINT signals.",
      },
      consistency: {
        label: "Consistency",
        headline: "Every screen.",
        subline: "The same standard.",
        description: "Manual processes create gaps. Tracer applies the same rigorous checks every time — producing a decision your leadership can stand behind.",
      },
      collaboration: {
        label: "Collaboration",
        headline: "Clear the path",
        subline: "to great science.",
        description: "Fast, transparent screening doesn't just reduce risk — it accelerates trust. Good partnerships move forward because you can verify them with confidence.",
      },
      output: {
        label: "Output",
        headline: "Export-ready.",
        subline: "Audit-proof.",
        description: "One PDF with clear risk profiles, sources, and audit trails. Share it with your leadership or archive it for compliance.",
      },
    },

    // Research Brief
    brief: {
      sectionLabel: "The Output",
      headline: "A brief your",
      headlineBold: "leadership trusts",
      subtitle: "Structured findings with full citations and clear risk signals. Ready when your decision-makers are.",
      docTitle: "Research Security Brief",
      complete: "Complete",
      screeningSignals: "Screening signals",
      sanctionLists: "Sanctions lists",
      corporateStructure: "Corporate structure",
      adverseMedia: "Adverse media",
      academicNetwork: "Academic network",
      clear: "No signal",
      review: "Review",
      summary: "Summary",
      summaryText: "No matches on OFAC, Canadian Sanctions, or UN lists. Corporate structure shows parent company registered in high-risk jurisdiction. One co-author flagged for academic retraction (2019). Recommend legal review before proceeding.",
      sources: "sources",
      exportPdf: "Export PDF",
      exporting: "Exporting...",
      generatingPdf: "Generating PDF",
      compilingSources: "Compiling sources and citations...",
      comingSoon: "Coming Soon",
      comingSoonDesc: "Be the first to try Tracer when we launch",
      features: {
        sanctions: "Sanctions lists",
        sanctionsDesc: "Canadian, US, and international lists.",
        academic: "Academic network",
        academicDesc: "Co-authors, affiliations, institutional ties.",
        adverse: "OSINT Signals",
        adverseDesc: "Reputational risks, corruption, legal proceedings, adverse media, academic retractions.",
        export: "Corporate Structure",
        exportDesc: "UBO, parent companies, tax haven.",
      },
    },

    // Canada Section
    canada: {
      headline: "Built for the world,",
      headlineBold: "optimized for Canada",
      dataHosted: "Data hosted in Canada",
      dataHostedDesc: "Your research data stays on Canadian soil, meeting institutional sovereignty and compliance requirements.",
      riskForm: "Risk Assessment Form integration",
      riskFormDesc: "Direct integration with the Risk Assessment Form required by the National Security Guidelines for Research Partnerships.",
    },

    // How It Works
    howItWorks: {
      sectionLabel: "How It Works",
      headline: "Three steps to",
      headlineBold: "confident decisions",
      subtitle: "From submission to decision-ready brief in hours, not weeks.",
      steps: [
        {
          number: "01",
          title: "Submit",
          heading: "Enter partner details",
          description: "Input the researcher or organization you need to screen. Tracer handles the rest.",
        },
        {
          number: "02",
          title: "Screen",
          heading: "Multi-source analysis",
          description: "Automated searches across sanctions lists, academic networks, corporate registries, and open-source intelligence.",
        },
        {
          number: "03",
          title: "Decide",
          heading: "Actionable brief",
          description: "Receive a structured report your decision-makers can read and act on — not a raw data dump.",
        },
      ],
    },

    // Why Tracer
    whyTracer: {
      sectionLabel: "Why Tracer",
      headline: "Built for how",
      headlineBold: "universities work",
      subtitle: "Unlike generic compliance tools, Tracer understands the unique challenges of academic research partnerships.",
      features: [
        {
          title: "Purpose-built workflows",
          description: "Designed around how research security advisors actually work",
          hasLeaf: false,
        },
        {
          title: "Canadian data residency",
          description: "Your data stays in Canada, meeting institutional requirements",
          hasLeaf: true,
        },
        {
          title: "Fully bilingual",
          description: "Complete English and French support throughout the platform",
          hasLeaf: false,
        },
        {
          title: "Foreign language screening",
          description: "Queries run in the language of the country being screened",
          hasLeaf: false,
        },
        {
          title: "Actionable intelligence",
          description: "Structured briefs your decision-makers can read and act on",
          hasLeaf: false,
        },
        {
          title: "Academic pricing",
          description: "Accessible to every institution, without enterprise price tags",
          hasLeaf: false,
        },
      ],
    },

    // Footer
    footer: {
      tagline: "Research security intelligence, purpose-built for universities.",
      canadian: "A Canadian Company",
      privacy: "Privacy Policy",
      rights: "All rights reserved.",
      designed: "Designed for universities worldwide",
    },

    // Waitlist Modal
    waitlist: {
      comingSummer: "Coming Summer 2026",
      joinWaitlist: "Join the Waitlist",
      subtitle: "Be the first to know when Tracer launches. Early access members will get priority onboarding and direct input on features.",
      emailPlaceholder: "Enter your email",
      joining: "Joining...",
      success: "You're on the list",
      successMessage: "We'll notify you when Tracer launches this summer.",
      launchingIn: "Launching in",
      days: "Days",
      hours: "Hours",
      min: "Min",
      sec: "Sec",
    },
  },

  fr: {
    // Header
    header: {
      tagline: "Sécurité de la recherche",
      joinWaitlist: "Liste d'attente",
    },

    // Hero
    hero: {
      screenResearch: "Évaluez vos",
      inMinutes: "en quelques minutes",
      words: ["partenariats", "collaborations", "affiliations", "réseaux", "risques"],
      subtitle: "Tracer analyse plus de 10 sources automatiquement et génère un",
      decisionBrief: "rapport décisionnel",
      subtitleEnd: "en quelques minutes.",
      tagline: "Ouvrez la voie à une science d'excellence",
      viewMore: "En savoir plus",
    },

    // Value Props
    value: {
      speed: {
        label: "Rapidité",
        headline: "Cinq minutes.",
        subline: "Pas cinq jours.",
        description: "Tracer vérifie automatiquement plus de 10 sources — listes de sanctions, réseaux académiques, structures corporatives, signaux OSINT défavorables.",
      },
      consistency: {
        label: "Cohérence",
        headline: "Chaque vérification.",
        subline: "Le même standard.",
        description: "Les processus manuels créent des lacunes. Tracer applique les mêmes vérifications rigoureuses à chaque fois — produisant une décision que votre direction peut défendre.",
      },
      collaboration: {
        label: "Collaboration",
        headline: "Ouvrez la voie",
        subline: "à une science d'excellence.",
        description: "Une vérification rapide et transparente ne réduit pas seulement les risques — elle accélère la confiance. Les bons partenariats avancent car vous pouvez les vérifier en toute confiance.",
      },
      output: {
        label: "Résultat",
        headline: "Prêt à exporter.",
        subline: "Conforme à l'audit.",
        description: "Un PDF avec des profils de risque clairs, des sources et des pistes d'audit. Partagez-le avec votre direction ou archivez-le pour la conformité.",
      },
    },

    // Research Brief
    brief: {
      sectionLabel: "Le Résultat",
      headline: "Un rapport que",
      headlineBold: "votre direction approuve",
      subtitle: "Conclusions structurées avec citations complètes et signaux de risque clairs. Prêt quand vos décideurs le sont.",
      docTitle: "Rapport de sécurité de la recherche",
      complete: "Complété",
      screeningSignals: "Signaux de vérification",
      sanctionLists: "Listes de sanctions",
      corporateStructure: "Structure corporative",
      adverseMedia: "Médias défavorables",
      academicNetwork: "Réseau académique",
      clear: "RAS",
      review: "À réviser",
      summary: "Résumé",
      summaryText: "Aucune correspondance sur les listes OFAC, Sanctions canadiennes ou ONU. La structure corporative révèle une société mère enregistrée dans une juridiction à haut risque. Un co-auteur signalé pour rétractation académique (2019). Révision juridique recommandée avant de procéder.",
      sources: "sources",
      exportPdf: "Exporter PDF",
      exporting: "Exportation...",
      generatingPdf: "Génération du PDF",
      compilingSources: "Compilation des sources et citations...",
      comingSoon: "Bientôt disponible",
      comingSoonDesc: "Soyez les premiers à essayer Tracer lors du lancement",
      features: {
        sanctions: "Listes de sanctions",
        sanctionsDesc: "Listes canadiennes, américaines et internationales.",
        academic: "Réseau académique",
        academicDesc: "Co-auteurs, affiliations, liens institutionnels.",
        adverse: "Signaux OSINT",
        adverseDesc: "Risques réputationnels, corruption, procédures judiciaires, médias défavorables, rétractations académiques.",
        export: "Structure corporative",
        exportDesc: "Bénéficiaire effectif, sociétés mères, paradis fiscaux.",
      },
    },

    // Canada Section
    canada: {
      headline: "Conçu pour le monde,",
      headlineBold: "optimisé pour le Canada",
      dataHosted: "Données hébergées au Canada",
      dataHostedDesc: "Vos données de recherche restent sur le sol canadien, respectant les exigences de souveraineté et de conformité institutionnelles.",
      riskForm: "Intégration du formulaire d'évaluation des risques",
      riskFormDesc: "Intégration directe avec le formulaire d'évaluation des risques requis par les Lignes directrices sur la sécurité nationale pour les partenariats de recherche.",
    },

    // How It Works
    howItWorks: {
      sectionLabel: "Fonctionnement",
      headline: "Trois étapes vers",
      headlineBold: "des décisions éclairées",
      subtitle: "De la soumission au rapport décisionnel en quelques heures, pas en semaines.",
      steps: [
        {
          number: "01",
          title: "Soumettre",
          heading: "Saisissez les détails du partenaire",
          description: "Entrez le chercheur ou l'organisation que vous devez vérifier. Tracer s'occupe du reste.",
        },
        {
          number: "02",
          title: "Analyser",
          heading: "Analyse multi-sources",
          description: "Recherches automatisées dans les listes de sanctions, réseaux académiques, registres d'entreprises et renseignements de sources ouvertes.",
        },
        {
          number: "03",
          title: "Décider",
          heading: "Rapport exploitable",
          description: "Recevez un rapport structuré que vos décideurs peuvent lire et utiliser — pas une simple extraction de données brutes.",
        },
      ],
    },

    // Why Tracer
    whyTracer: {
      sectionLabel: "Pourquoi Tracer",
      headline: "Conçu pour le",
      headlineBold: "monde universitaire",
      subtitle: "Contrairement aux outils de conformité génériques, Tracer comprend les défis uniques des partenariats de recherche académique.",
      features: [
        {
          title: "Flux de travail adaptés",
          description: "Conçu autour de la façon dont les conseillers en sécurité de la recherche travaillent réellement",
          hasLeaf: false,
        },
        {
          title: "Résidence des données au Canada",
          description: "Vos données restent au Canada, conformément aux exigences institutionnelles",
          hasLeaf: true,
        },
        {
          title: "Entièrement bilingue",
          description: "Support complet en anglais et en français sur toute la plateforme",
          hasLeaf: false,
        },
        {
          title: "Vérification multilingue",
          description: "Les requêtes s'exécutent dans la langue du pays vérifié",
          hasLeaf: false,
        },
        {
          title: "Renseignements exploitables",
          description: "Rapports structurés que vos décideurs peuvent lire et utiliser",
          hasLeaf: false,
        },
        {
          title: "Tarification académique",
          description: "Accessible à toutes les institutions, sans les tarifs entreprise",
          hasLeaf: false,
        },
      ],
    },

    // Footer
    footer: {
      tagline: "Une plateforme de vérification diligente, conçue pour les universités.",
      canadian: "Une entreprise canadienne",
      privacy: "Politique de confidentialité",
      rights: "Tous droits réservés.",
      designed: "Conçu pour les universités du monde entier",
    },

    // Waitlist Modal
    waitlist: {
      comingSummer: "Lancement été 2026",
      joinWaitlist: "Rejoindre la liste d'attente",
      subtitle: "Soyez les premiers informés du lancement de Tracer. Les membres en accès anticipé bénéficieront d'une intégration prioritaire et pourront contribuer aux fonctionnalités.",
      emailPlaceholder: "Entrez votre courriel",
      joining: "Inscription...",
      success: "Vous êtes inscrit",
      successMessage: "Nous vous informerons du lancement de Tracer cet été.",
      launchingIn: "Lancement dans",
      days: "Jours",
      hours: "Heures",
      min: "Min",
      sec: "Sec",
    },
  },
}
