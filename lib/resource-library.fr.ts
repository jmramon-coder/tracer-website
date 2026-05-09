import type { ResourceArticle } from "@/lib/resource-library"

export const resourceLibraryFr: ResourceArticle[] = [
  {
    id: "research-security-screening",
    title: "Vérification de sécurité de la recherche",
    category: "Foundations",
    eyebrow: "Guide",
    summary:
      "La vérification de sécurité de la recherche est le processus structuré qui évalue les partenariats, collaborateurs et affiliations institutionnelles internationales à partir des listes de sanctions, bases d'organisations militaires, médias défavorables et réseaux de co-publication.",
    readTime: "8 min",
    audience: "Responsables de la sécurité de la recherche",
    takeaways: [
      "La vérification est un flux de revue structuré, pas une décision finale de risque.",
      "L'identité, l'affiliation, le contexte des sources et les citations doivent rester liés.",
      "Un processus répétable aide les équipes à réduire les écarts de revue manuelle.",
    ],
    sections: [
      {
        heading: "Pourquoi la vérification de sécurité de la recherche compte",
        body: [
          "La collaboration internationale fait avancer l'innovation, mais elle expose aussi les universités à des risques qu'elles ne peuvent pas ignorer. Les violations de sanctions peuvent entraîner de lourdes conséquences juridiques. Les affiliations militaires non déclarées peuvent compromettre des travaux sensibles. Un seul incident peut nuire à des années de confiance institutionnelle.",
          "Le Canada a mis en place des exigences structurées en sécurité de la recherche. Les Lignes directrices sur la sécurité nationale pour les partenariats de recherche et la Politique sur la recherche en technologies sensibles et sur les affiliations préoccupantes créent un cadre qui demande aux institutions d'évaluer les risques avant de conclure des partenariats internationaux.",
          "Aux États-Unis, le NSPM-33 établit des exigences de divulgation pour les chercheurs financés par le gouvernement fédéral, tandis que le CHIPS and Science Act renforce les dispositions liées à la sécurité de la recherche.",
          "Des exigences similaires au Royaume-Uni, aux Pays-Bas et en Australie montrent un déplacement mondial vers une supervision plus structurée des partenariats internationaux. La question n'est plus de savoir s'il faut vérifier, mais comment le faire de façon cohérente, complète et défendable.",
        ],
      },
      {
        heading: "Composantes clés de la vérification",
        body: [
          "Une vérification efficace combine plusieurs couches. Aucun contrôle isolé ne suffit. Une approche complète inclut la résolution d'identité, la vérification des listes restreintes, l'analyse des réseaux de co-publication, l'examen de signaux défavorables et la vérification institutionnelle.",
        ],
        subsections: [
          {
            heading: "Résolution d'identité",
            body: [
              "Avant toute vérification, l'équipe doit confirmer qu'elle évalue la bonne personne. La résolution d'identité rapproche le nom, l'affiliation, l'ORCID et l'historique de publications afin d'établir une identité vérifiée.",
              "Sans cette étape, les sanctions et les signaux médiatiques peuvent être associés à la mauvaise personne, produisant des faux positifs ou, pire, des faux négatifs.",
            ],
          },
          {
            heading: "Sanctions et listes d'entités restreintes",
            body: [
              "La vérification des listes de sanctions internationales est le contrôle de conformité de base. Les listes pertinentes incluent les règlements canadiens pris en vertu de la LMES, la liste OFAC SDN des États-Unis, la liste consolidée CFSP de l'Union européenne, les sanctions du Conseil de sécurité de l'ONU, l'OFSI du Royaume-Uni et la BIS Entity List américaine.",
              "La liste canadienne des Organisations de recherche nommées ajoute des entités identifiées comme préoccupantes pour les partenariats de recherche.",
            ],
          },
          {
            heading: "Analyse des réseaux de co-publication",
            body: [
              "Les co-auteurs d'un collaborateur révèlent des affiliations qui ne figurent pas toujours dans les dossiers formels. L'analyse des réseaux de co-publication peut faire ressortir des liens avec des institutions affiliées à l'armée, des entités sanctionnées ou des organisations inscrites sur des listes restreintes.",
            ],
          },
          {
            heading: "Médias et signaux défavorables",
            body: [
              "Les dossiers judiciaires, mesures réglementaires, enquêtes journalistiques et rétractations peuvent révéler des signaux que les bases structurées ne captent pas. Ces signaux doivent être documentés avec leur contexte source et revus par un décideur humain.",
            ],
          },
          {
            heading: "Vérification des affiliations institutionnelles",
            body: [
              "Vérifier l'identité et le statut d'une institution est aussi important que vérifier la personne. Cette vérification utilise des registres et documents publics pour confirmer ce que l'organisation prétend être et détecter des liens avec des organisations militaires, étatiques ou sanctionnées.",
            ],
          },
        ],
      },
      {
        heading: "Comment vérifier des collaborateurs de recherche",
        body: [
          "Un processus structuré avance par phases distinctes. Qu'il soit manuel ou soutenu par un logiciel, la logique demeure la même.",
        ],
        list: [
          "Identifier le sujet : recueillir le nom complet, les affiliations connues, l'ORCID ou identifiant similaire et le domaine de recherche.",
          "Résoudre l'identité : croiser les identifiants disponibles avec les bases académiques pour confirmer les publications, affiliations et subventions liées à cette personne.",
          "Vérifier les sanctions et listes restreintes : examiner la personne et ses institutions affiliées par rapport aux listes pertinentes et à la liste ORN pour la recherche financée au Canada.",
          "Analyser les réseaux de co-publication : cartographier les co-auteurs et affiliations institutionnelles, puis signaler les liens avec des institutions militaires ou sanctionnées.",
          "Chercher les signaux défavorables : consulter les nouvelles, dossiers judiciaires et bases d'intégrité académique pour les signaux pertinents.",
          "Compiler un rapport défendable : documenter les constats avec sources, niveaux de confiance et limites connues.",
        ],
      },
      {
        heading: "Outils de vérification de sécurité de la recherche",
        body: [
          "Le paysage des outils comprend plusieurs catégories. Les plateformes bibliométriques se concentrent sur les publications et citations. Les plateformes d'analyse de risque se spécialisent dans les sanctions et la conformité financière. Les plateformes complètes combinent résolution d'identité, sanctions, co-publications et signaux défavorables dans un seul pipeline.",
          "Les plateformes bibliométriques apportent une intelligence de recherche utile, mais elles ne sont pas conçues d'abord pour la sécurité de la recherche. Elles ne vérifient pas les sanctions et n'analysent pas les signaux de risque comme objectif principal.",
          "Les plateformes d'analyse de risque couvrent bien les listes restreintes, mais manquent souvent de contexte académique : analyse de co-publication, résolution d'identité académique et hiérarchies institutionnelles.",
          "Lors de l'évaluation d'un outil, considérez la transparence de la méthode, l'étendue des sources, la défendabilité du résultat en audit, le coût par vérification et l'adéquation au contexte académique.",
        ],
      },
      {
        heading: "FAQ",
        subsections: [
          {
            heading: "Qu'est-ce que la vérification de sécurité de la recherche?",
            body: [
              "C'est le processus systématique d'évaluation des partenariats, collaborateurs et affiliations institutionnelles internationales par rapport aux listes de sanctions, bases d'organisations militaires, médias défavorables et réseaux de co-publication afin d'identifier des risques potentiels avant qu'ils deviennent des incidents.",
            ],
          },
          {
            heading: "Pourquoi les universités en ont-elles besoin?",
            body: [
              "Les universités qui collaborent à l'international font face aux exigences comme les lignes directrices canadiennes, aux risques de réputation liés aux affiliations non déclarées et aux violations potentielles de sanctions. La vérification aide à respecter les obligations tout en protégeant l'intégrité de la recherche.",
            ],
          },
          {
            heading: "Qu'est-ce que les lignes directrices NSGRP?",
            body: [
              "Les Lignes directrices sur la sécurité nationale pour les partenariats de recherche constituent le cadre canadien exigeant l'évaluation des risques dans certains partenariats avec des entités étrangères. Elles s'appliquent aux subventions du CRSNG, du CRSH et des IRSC et couvrent notamment les sanctions, affiliations militaires et transferts de technologies sensibles.",
            ],
          },
          {
            heading: "Combien de temps prend une vérification?",
            body: [
              "Une vérification manuelle peut prendre de quelques jours à quelques semaines selon la complexité des publications et affiliations. Les flux automatisés peuvent réduire ce délai en croisant plusieurs sources simultanément, mais la décision finale demeure institutionnelle et humaine.",
            ],
          },
          {
            heading: "Quelles sources de données sont utilisées?",
            body: [
              "Une vérification complète peut utiliser les listes de sanctions, bases académiques, registres institutionnels, médias défavorables, dossiers juridiques et registres corporatifs. Le principe essentiel est que chaque constat reste traçable à ses sources et limites.",
            ],
          },
          {
            heading: "La vérification est-elle requise au Canada?",
            body: [
              "Les institutions canadiennes qui demandent un financement fédéral par les trois organismes doivent évaluer les partenariats de recherche selon les lignes directrices applicables. La politique sur les technologies sensibles et les affiliations préoccupantes ajoute des restrictions particulières pour certains domaines.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "academic-due-diligence",
    title: "Diligence raisonnable des partenariats académiques",
    category: "Operations",
    eyebrow: "Guide opérationnel",
    summary:
      "La diligence raisonnable des partenariats académiques transforme les exigences réglementaires en décisions opérationnelles : avec qui collaborer et à quelles conditions.",
    readTime: "7 min",
    audience: "Équipes de subventions et conformité",
    takeaways: [
      "La diligence commence par la qualité de l'intake et la clarté des entités.",
      "Les preuves doivent être documentées de façon lisible par les équipes juridiques, la direction et les subventions.",
      "L'escalade fonctionne mieux lorsque le dossier de vérification est concis et cité.",
    ],
    sections: [
      {
        heading: "Pourquoi la diligence compte pour les partenariats",
        body: [
          "Les partenariats de recherche reposent sur la confiance. Mais la confiance doit être vérifiée, pas présumée. Les collaborations internationales créent des risques de conformité réglementaire, de réputation institutionnelle et parfois de sécurité nationale.",
          "Au Canada, les lignes directrices exigent que les universités évaluent les risques potentiels lorsqu'elles collaborent avec des entités étrangères sur des travaux financés par le fédéral. La politique STRAC ajoute des restrictions spécifiques lorsque des technologies sensibles sont en jeu.",
          "Des cadres similaires émergent au Royaume-Uni, aux Pays-Bas, en Australie et aux États-Unis avec le NSPM-33.",
          "Au-delà de la conformité, la diligence protège l'intégrité de la recherche. Des partenariats avec des entités ayant des affiliations militaires non déclarées ou des liens avec des organisations sanctionnées peuvent compromettre les résultats, la propriété intellectuelle et la réputation institutionnelle.",
        ],
      },
      {
        heading: "Processus de diligence pour collaborations académiques",
        body: [
          "Un processus structuré de diligence raisonnable suit généralement quatre phases.",
        ],
        subsections: [
          {
            heading: "1. Collecte d'information",
            body: [
              "Recueillir les renseignements d'identification du collaborateur potentiel : nom complet, affiliation institutionnelle, ORCID, domaine de recherche, historique de publications et nature de la collaboration proposée. Pour les partenariats institutionnels, ajouter la structure de gouvernance et les entités parentes.",
            ],
          },
          {
            heading: "2. Résolution et vérification d'identité",
            body: [
              "Confirmer l'identité de la personne ou de l'institution en croisant bases académiques, registres institutionnels et documents publics. Cette étape limite les faux matchs et assure que les vérifications s'appliquent à la bonne entité.",
            ],
          },
          {
            heading: "3. Évaluation multi-source",
            body: [
              "Vérifier les sanctions, analyser les réseaux de co-publication, consulter les médias et dossiers juridiques, puis vérifier les affirmations institutionnelles. Chaque source ajoute un contexte que les autres peuvent manquer.",
            ],
          },
          {
            heading: "4. Documentation et décision",
            body: [
              "Compiler les constats dans un rapport structuré qui indique ce qui a été vérifié, ce qui a été trouvé et quelles limites demeurent. Ce rapport soutient la décision institutionnelle et conserve une piste auditable.",
            ],
          },
        ],
      },
      {
        heading: "Signaux d'alerte fréquents",
        body: [
          "Un signal ne signifie pas automatiquement qu'un partenariat doit être refusé. Il mérite toutefois un examen plus attentif et une documentation claire.",
        ],
        list: [
          "Affiliations à des Organisations de recherche nommées : les co-auteurs ou institutions partenaires liés à des entités listées exigent une évaluation prudente.",
          "Affiliations militaires non déclarées : les doubles affiliations ne sont pas toujours problématiques, mais elles doivent être déclarées et évaluées.",
          "Publications dans des revues de défense ou militaires : elles peuvent indiquer des affiliations absentes des dossiers institutionnels formels.",
          "Schémas de financement suspects : financement étranger non déclaré, financement lié à des gouvernements sanctionnés ou signaux de programmes de recrutement de talents.",
          "Mobilité institutionnelle rapide : des déplacements fréquents dans des contextes sensibles peuvent indiquer des liens à examiner.",
        ],
      },
      {
        heading: "Outils pour vérifier les partenariats académiques",
        body: [
          "La diligence manuelle peut être approfondie, mais elle est lente, variable d'un analyste à l'autre et difficile à auditer. Les institutions qui traitent des dizaines ou centaines de partenariats par année ont besoin d'approches évolutives.",
          "Les plateformes conçues pour le contexte académique combinent résolution d'identité, sanctions, analyse de co-publication et médias défavorables dans un seul flux. Les meilleurs outils produisent des rapports où chaque constat est lié à sa source, à son niveau de confiance et à ses limites.",
          "Lors du choix d'un outil, priorisez la transparence méthodologique, la résolution d'identité académique, l'étendue des sources et la défendabilité du résultat.",
        ],
      },
      {
        heading: "FAQ",
        subsections: [
          {
            heading: "Qu'est-ce que la diligence raisonnable académique?",
            body: [
              "C'est l'évaluation des collaborateurs et institutions partenaires pour les risques de conformité, sécurité et intégrité avant de formaliser une collaboration. Elle inclut sanctions, vérification d'affiliation, réseaux de publication et médias défavorables.",
            ],
          },
          {
            heading: "Quand faut-il l'effectuer?",
            body: [
              "Avant de signer une entente de collaboration, demander un financement conjoint, accueillir des chercheurs invités ou conclure une entente de transfert de technologie ou de propriété intellectuelle. Au Canada, les partenariats internationaux financés par le fédéral peuvent exiger une évaluation de risque.",
            ],
          },
          {
            heading: "Quels sont les signaux les plus courants?",
            body: [
              "Les signaux incluent des co-auteurs affiliés à des Organisations de recherche nommées, des affiliations militaires non déclarées, des publications dans des revues militaires, des schémas de financement inhabituels, des sources étrangères non divulguées et une mobilité institutionnelle rapide.",
            ],
          },
          {
            heading: "En quoi est-ce différent de la diligence corporative?",
            body: [
              "La diligence académique doit intégrer des facteurs propres à la recherche : réseaux de co-publication, résolution d'identité académique, hiérarchies institutionnelles et distinction entre recherche fondamentale et domaines sensibles.",
            ],
          },
          {
            heading: "Que se passe-t-il si une université saute cette étape?",
            body: [
              "Les conséquences peuvent inclure la perte d'admissibilité à du financement, une exposition aux sanctions, des dommages réputationnels, la compromission de recherches sensibles ou de propriété intellectuelle et des implications de sécurité nationale.",
            ],
          },
          {
            heading: "La diligence peut-elle être automatisée?",
            body: [
              "Certaines étapes peuvent être automatisées : collecte de sources, résolution d'identité, sanctions, co-publications et signaux défavorables. L'automatisation doit soutenir la revue humaine, non remplacer la décision institutionnelle.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "sanctions-screening",
    title: "Vérification des sanctions pour les universités",
    category: "Compliance",
    eyebrow: "Conformité",
    summary:
      "La vérification des sanctions examine les collaborateurs, institutions partenaires et affiliations par rapport aux listes internationales de sanctions et aux bases d'entités restreintes, avec le contexte académique nécessaire.",
    readTime: "6 min",
    audience: "Partenaires conformité et juridiques",
    takeaways: [
      "Les listes restreintes sont nécessaires, mais insuffisantes pour une revue de sécurité de la recherche.",
      "Le rapprochement de noms exige contexte, désambiguïsation et gestion des sources.",
      "Les résultats doivent décrire les constats sans surestimer la certitude juridique.",
    ],
    sections: [
      {
        heading: "Listes de sanctions pertinentes pour les institutions académiques",
        body: [
          "Les universités qui travaillent à l'international doivent vérifier plusieurs régimes de sanctions. Chaque liste a une fonction et une couverture différentes.",
        ],
        subsections: [
          {
            heading: "LMES - Loi sur les mesures économiques spéciales",
            body: [
              "La principale législation canadienne de sanctions vise des individus, entités et pays assujettis à des sanctions économiques canadiennes. La conformité est obligatoire pour les institutions canadiennes.",
            ],
          },
          {
            heading: "Liste OFAC SDN",
            body: [
              "La liste Specially Designated Nationals des États-Unis identifie des personnes et entités sanctionnées. Elle est centrale pour les opérations exposées au système financier américain ou à des partenaires américains.",
            ],
          },
          {
            heading: "Liste consolidée CFSP de l'Union européenne",
            body: [
              "Cette liste consolide les mesures restrictives de l'Union européenne et peut être pertinente pour les collaborations impliquant partenaires, financement ou activités en Europe.",
            ],
          },
          {
            heading: "Sanctions du Conseil de sécurité de l'ONU",
            body: [
              "Les sanctions de l'ONU sont largement mises en œuvre par les États membres et doivent être considérées dans les partenariats internationaux.",
            ],
          },
          {
            heading: "OFSI du Royaume-Uni",
            body: [
              "Le régime britannique peut être pertinent pour les projets impliquant institutions, chercheurs, financement ou infrastructures au Royaume-Uni.",
            ],
          },
          {
            heading: "BIS Entity List",
            body: [
              "La liste du Bureau of Industry and Security des États-Unis identifie des entités soumises à des restrictions à l'exportation. Elle est particulièrement importante pour les technologies sensibles, les équipements et les collaborations touchant des biens ou logiciels contrôlés.",
            ],
          },
        ],
      },
      {
        heading: "Pourquoi la vérification académique diffère de la finance",
        body: [
          "La vérification financière se concentre sur les transactions, comptes et bénéficiaires. La vérification académique doit aussi comprendre les affiliations institutionnelles, réseaux de co-publication, translittérations, doubles affiliations et liens indirects.",
          "Un chercheur peut ne pas être personnellement sanctionné tout en collaborant fréquemment avec une organisation restreinte. Une institution partenaire peut avoir un nom civil tout en relevant d'une entité militaire ou étatique. Ces nuances exigent plus qu'un simple rapprochement de noms.",
        ],
      },
      {
        heading: "Organisations de recherche nommées",
        body: [
          "La liste des Organisations de recherche nommées est propre au cadre canadien de sécurité de la recherche. Elle identifie des organisations associées à des entités militaires, de défense nationale ou de sécurité d'État.",
          "Selon la politique STRAC, les demandes de subvention impliquant une collaboration avec des entités ORN dans des domaines de technologies sensibles ne seront pas financées. Dans les autres domaines, les liens ORN déclenchent un examen renforcé.",
          "La liste ORN n'est pas une liste de sanctions au sens juridique. C'est un indicateur de risque pour le financement de recherche. Les connexions directes ou par co-publication doivent être documentées et justifiées.",
        ],
      },
      {
        heading: "Processus de vérification des sanctions",
        list: [
          "Identifier les déclencheurs : nouveaux partenariats, demandes de subvention, chercheurs invités, transferts de technologie et re-vérifications périodiques.",
          "Résoudre l'identité avec l'ORCID, les publications et les registres institutionnels.",
          "Vérifier toutes les listes pertinentes et les organisations parentes, pas seulement l'institution immédiate.",
          "Évaluer les correspondances pour l'exactitude, le type de sanction et l'impact sur la collaboration précise.",
          "Documenter ce qui a été vérifié, les résultats, y compris les résultats nuls, et la justification de la décision.",
        ],
      },
      {
        heading: "FAQ",
        subsections: [
          {
            heading: "Quelles listes une université devrait-elle vérifier?",
            body: [
              "Au minimum, les institutions canadiennes devraient considérer la LMES, la liste OFAC SDN, la liste consolidée CFSP de l'UE, les sanctions de l'ONU, l'OFSI du Royaume-Uni et la BIS Entity List. Pour la recherche financée au Canada, la liste des Organisations de recherche nommées doit aussi être examinée.",
            ],
          },
          {
            heading: "En quoi est-ce différent de la vérification bancaire?",
            body: [
              "Les banques vérifient surtout transactions et titulaires de comptes. Les universités doivent aussi examiner les co-publications, hiérarchies institutionnelles, doubles affiliations, translittérations et la distinction entre recherche fondamentale et sensible.",
            ],
          },
          {
            heading: "Qu'est-ce que la liste des Organisations de recherche nommées?",
            body: [
              "C'est une liste du gouvernement canadien identifiant des organisations de recherche associées à des entités militaires, de défense nationale ou de sécurité d'État. Les liens avec ces organisations peuvent déclencher un examen accru et affecter l'admissibilité dans les domaines sensibles.",
            ],
          },
          {
            heading: "Que se passe-t-il si un chercheur correspond à une liste?",
            body: [
              "Une correspondance déclenche une revue. L'institution doit vérifier l'exactitude, évaluer la nature et la portée des sanctions, analyser la collaboration spécifique et documenter la décision.",
            ],
          },
          {
            heading: "À quelle fréquence mettre à jour la vérification?",
            body: [
              "Les universités devraient vérifier aux points de décision clés : nouveaux partenariats, demandes de financement, chercheurs invités et transferts de technologie. Les collaborations sensibles devraient être re-vérifiées périodiquement.",
            ],
          },
          {
            heading: "Les universités peuvent-elles être sanctionnées?",
            body: [
              "Oui. Les violations de sanctions peuvent entraîner pénalités financières, perte d'admissibilité au financement, poursuites dans les cas graves et dommages réputationnels. Les conséquences dépendent de la juridiction, des faits et du droit applicable.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "collaboration-risk",
    title: "Risque des collaborations de recherche",
    category: "Foundations",
    eyebrow: "Cadre",
    summary:
      "L'évaluation du risque de collaboration identifie, analyse et documente les préoccupations potentielles associées aux partenariats internationaux de recherche.",
    readTime: "5 min",
    audience: "Vice-rectorats à la recherche et direction",
    takeaways: [
      "La revue doit distinguer les preuves, l'incertitude et l'autorité décisionnelle.",
      "Une fiche claire aide les dirigeants à comprendre ce qui est connu et ce qui exige une escalade.",
      "Les bonnes collaborations avancent plus vite lorsque les standards sont répétables.",
    ],
    sections: [
      {
        heading: "Types de risque dans les collaborations",
        body: [
          "Les risques de collaboration couvrent plusieurs dimensions. Une évaluation efficace les considère en contexte, plutôt qu'isolément.",
        ],
        subsections: [
          {
            heading: "Risque de sanctions et conformité",
            body: [
              "Liens directs ou indirects avec des personnes, entités ou pays sanctionnés, incluant des préoccupations de contrôle à l'exportation et de transfert de technologie.",
            ],
          },
          {
            heading: "Risque d'affiliation militaire",
            body: [
              "Connexions non déclarées à des entités militaires, de défense nationale ou de sécurité d'État, surtout pour la recherche en technologies sensibles.",
            ],
          },
          {
            heading: "Risque d'intégrité de la recherche",
            body: [
              "Historique de rétractations, allégations de fabrication de données ou manquements à l'intégrité pouvant indiquer des préoccupations sur la fiabilité du partenariat.",
            ],
          },
          {
            heading: "Risque médiatique et juridique",
            body: [
              "Procédures judiciaires, mesures réglementaires, enquêtes journalistiques ou autres signaux publics impliquant un collaborateur potentiel.",
            ],
          },
        ],
      },
      {
        heading: "Analyse des réseaux de co-publication",
        body: [
          "Les co-auteurs d'un chercheur offrent une fenêtre sur son réseau professionnel. L'analyse de co-publication cartographie ces liens afin d'identifier des affiliations qui ne figurent pas toujours dans les dossiers formels.",
          "Un chercheur inscrit dans une université civile peut avoir des co-publications avec des personnes d'institutions militaires, de laboratoires de défense ou d'organisations listées. Ces motifs peuvent signaler des doubles affiliations ou des activités qui touchent des applications de défense.",
          "L'analyse de réseau n'est pas une culpabilité par association. Toute co-publication avec un chercheur affilié à l'armée n'indique pas un risque. Il faut considérer la fréquence, la récence, le sujet, la divulgation et la qualité des sources.",
          "Une analyse efficace exige des données académiques complètes et une interprétation prudente. Le résultat doit dire clairement ce que les sources montrent et où l'incertitude demeure.",
        ],
      },
      {
        heading: "Signaux défavorables et détection",
        body: [
          "Les signaux défavorables sont des informations publiques qui peuvent indiquer des préoccupations de conformité, d'intégrité ou de sécurité. Ils complètent les bases structurées en révélant ce que les sanctions et bases académiques ne captent pas.",
        ],
        subsections: [
          {
            heading: "Nouvelles et enquêtes journalistiques",
            body: [
              "La couverture médiatique de cas d'espionnage, de vol technologique, d'ingérence étrangère ou d'inconduite académique peut révéler des liens avant l'imposition de sanctions officielles.",
            ],
          },
          {
            heading: "Bases juridiques",
            body: [
              "Les dossiers judiciaires peuvent révéler des violations de contrôle à l'exportation, fraudes, cas d'espionnage ou autres procédures pertinentes pour la revue institutionnelle.",
            ],
          },
          {
            heading: "Dossiers d'intégrité académique",
            body: [
              "Les bases de rétractation, enquêtes universitaires et constats d'inconduite peuvent indiquer des risques au-delà d'une simple erreur.",
            ],
          },
          {
            heading: "Programmes de recrutement de talents",
            body: [
              "La participation à des programmes étrangers de recrutement de talents peut ne pas apparaître dans les dossiers formels, mais ressortir de sources publiques.",
            ],
          },
        ],
      },
      {
        heading: "Vérification institutionnelle",
        body: [
          "Vérifier une institution est aussi important que vérifier une personne. Les organisations peuvent changer de nom, fusionner ou se restructurer pour obscurcir des liens avec des entités sanctionnées ou militaires.",
          "La vérification institutionnelle utilise registres, données corporatives et documents publics pour confirmer l'identité, la gouvernance et les entités parentes. Elle peut révéler qu'un institut apparemment indépendant relève d'une organisation militaire ou d'une entité sanctionnée.",
        ],
      },
      {
        heading: "FAQ",
        subsections: [
          {
            heading: "Qu'est-ce qu'une évaluation du risque de collaboration?",
            body: [
              "C'est le processus d'évaluation des risques potentiels associés aux partenariats internationaux : sanctions, affiliations militaires, intégrité de la recherche et signaux médiatiques ou juridiques défavorables.",
            ],
          },
          {
            heading: "Quels risques les universités devraient-elles évaluer?",
            body: [
              "Les catégories clés incluent sanctions et entités restreintes, affiliations militaires non déclarées, réseaux de co-publication liés à des entités préoccupantes, signaux médiatiques et juridiques, intégrité de la recherche, financement suspect et implications de transfert technologique.",
            ],
          },
          {
            heading: "Qu'est-ce que l'analyse de co-publication?",
            body: [
              "Elle cartographie les co-auteurs d'un chercheur et leurs affiliations afin d'identifier des liens indirects avec des organisations militaires, sanctionnées ou autrement préoccupantes.",
            ],
          },
          {
            heading: "Comment détecter des affiliations militaires non déclarées?",
            body: [
              "Les méthodes incluent le croisement des affiliations avec des bases d'organisations militaires et de défense, l'analyse des publications avec revues ou conférences militaires, la vérification des registres institutionnels et l'examen de signaux publics.",
            ],
          },
          {
            heading: "Quels signaux défavorables comptent?",
            body: [
              "Les signaux pertinents incluent correspondances de sanctions, dossiers judiciaires de fraude ou espionnage, mesures réglementaires, reportages d'enquête, rétractations, programmes de recrutement de talents et sources de financement étrangères non déclarées.",
            ],
          },
          {
            heading: "À quelle fréquence mettre à jour les évaluations?",
            body: [
              "Les paysages de risque changent constamment. La bonne pratique consiste à réévaluer aux points clés comme renouvellements de financement, soumissions de publication et prolongations de partenariat, et au moins annuellement pour les collaborations sensibles.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "research-security-tools",
    title: "Outils de sécurité de la recherche",
    category: "Operations",
    eyebrow: "Comparatif",
    summary:
      "Les outils de sécurité de la recherche vont des plateformes bibliométriques aux systèmes complets qui combinent résolution d'identité et évaluation multi-source.",
    readTime: "6 min",
    audience: "Responsables des opérations",
    takeaways: [
      "Les outils génériques manquent souvent le flux réel : dossiers, entités, rapports rendus et historique d'audit.",
      "Un système spécialisé doit soutenir la résolution d'identité académique, la gestion des sources et les résultats défendables.",
      "Le meilleur outil rend la vérification répétable sans prendre la décision finale.",
    ],
    sections: [
      {
        heading: "Le paysage des outils",
        body: [
          "Les outils disponibles se regroupent en trois grandes catégories. Chacune répond à une partie différente du problème de vérification.",
        ],
        subsections: [
          {
            heading: "Plateformes bibliométriques",
            body: [
              "Les plateformes centrées sur les publications, citations et mesures d'impact excellent pour cartographier la production scientifique et les collaborations. Elles ne sont pas conçues pour la conformité ou l'évaluation complète du risque.",
              "Elles sont utiles pour comprendre le profil de publication et l'impact d'un chercheur, mais pas pour produire un dossier de vérification de sécurité défendable.",
            ],
          },
          {
            heading: "Plateformes d'analyse de risque",
            body: [
              "Ces plateformes fournissent des données approfondies sur les sanctions et la conformité, souvent orientées vers le risque financier ou géopolitique. Elles couvrent bien les sanctions, mais manquent de résolution d'identité académique et d'analyse de co-publication.",
              "Elles sont fortes pour la conformité financière et l'analyse géopolitique large, mais les équipes de recherche ont besoin de plus de contexte académique.",
            ],
          },
          {
            heading: "Plateformes complètes de vérification",
            body: [
              "Les plateformes spécialisées combinent résolution d'identité, sanctions, co-publications, médias défavorables et vérification institutionnelle dans un seul flux.",
              "Elles conviennent aux institutions qui ont besoin d'une vérification de bout en bout avec des résultats transparents, auditables et adaptés au contexte académique.",
            ],
          },
        ],
      },
      {
        heading: "Comment évaluer les outils",
        body: [
          "Cinq facteurs comptent le plus lorsqu'une institution choisit un outil de vérification de partenariats.",
        ],
        subsections: [
          {
            heading: "1. Couverture des sources",
            body: [
              "Combien de sources l'outil vérifie-t-il? Couvre-t-il les sanctions, bases académiques, registres institutionnels et médias défavorables? Les lacunes de couverture deviennent des lacunes de vérification.",
            ],
          },
          {
            heading: "2. Transparence méthodologique",
            body: [
              "Les réviseurs peuvent-ils voir comment un constat a été produit? Chaque résultat est-il lié à sa source? Les niveaux de confiance et limites sont-ils visibles? Un score de risque sans explication est difficile à défendre en audit.",
            ],
          },
          {
            heading: "3. Défendabilité du résultat",
            body: [
              "Le résultat doit expliquer ce qui a été vérifié, ce qui a été trouvé et ce qui n'a pas été couvert. Un réviseur de conformité doit pouvoir retracer chaque constat à sa source.",
            ],
          },
          {
            heading: "4. Contexte académique",
            body: [
              "L'outil doit comprendre l'identité académique, les noms fréquents, affiliations multiples, ORCID, réseaux de co-publication, universités, laboratoires et instituts de recherche militaires.",
            ],
          },
          {
            heading: "5. Coût total de vérification",
            body: [
              "Considérez le temps analyste, les abonnements multiples, la formation et le coût de vérifications incomplètes ou incohérentes. La licence la moins chère n'est pas toujours le coût opérationnel le plus bas.",
            ],
          },
        ],
      },
      {
        heading: "Comparer les outils de sécurité de la recherche",
        table: {
          headers: [
            "Capacité",
            "Bibliométrique",
            "Analyse de risque",
            "Complet",
          ],
          rows: [
            ["Vérification des sanctions", "Par intégration", "Force principale", "Inclus"],
            ["Résolution d'identité académique", "Partielle", "Limitée", "Force principale"],
            ["Analyse de co-publication", "Données de publication", "Non disponible", "Incluse"],
            ["Médias défavorables", "Non disponible", "Orientation financière", "Inclus"],
            ["Vérification institutionnelle", "Partielle", "Partielle", "Incluse"],
            ["Couverture ORN", "Non disponible", "Non disponible", "Incluse"],
            ["Transparence des sources", "Données de citation", "Variable", "Chaque constat sourcé"],
            ["Conçu pour l'académique", "Oui, bibliométrie", "Non, financier", "Oui, vérification"],
          ],
        },
        note:
          "Cette comparaison reflète le positionnement public et les capacités courantes. Les institutions devraient évaluer les outils selon leurs exigences et leur modèle de gouvernance.",
      },
      {
        heading: "FAQ",
        subsections: [
          {
            heading: "Quels types d'outils existent?",
            body: [
              "Les outils se regroupent en plateformes bibliométriques, plateformes d'analyse de risque et plateformes complètes combinant résolution d'identité, sanctions, co-publications et signaux défavorables.",
            ],
          },
          {
            heading: "Que devrait rechercher une université?",
            body: [
              "Les critères clés incluent couverture des sources, transparence méthodologique, résolution d'identité académique, défendabilité en audit, adéquation au flux de travail et coût total de vérification.",
            ],
          },
          {
            heading: "En quoi les outils bibliométriques diffèrent-ils?",
            body: [
              "Les outils bibliométriques analysent publications, citations, impact et collaborations. Ils produisent une intelligence utile, mais ne sont pas conçus pour les sanctions, affiliations militaires, signaux défavorables ou constats auditables.",
            ],
          },
          {
            heading: "Les outils de conformité existants peuvent-ils suffire?",
            body: [
              "Les outils de conformité financière peuvent vérifier les sanctions, mais ils manquent souvent de résolution d'identité académique, d'analyse de co-publication, de cartographie institutionnelle et d'interprétation propre à la recherche.",
            ],
          },
          {
            heading: "Que signifie une vérification transparente?",
            body: [
              "Cela signifie que les constats sont liés aux sources, incluent le contexte d'incertitude ou de confiance et exposent les limites connues. Les réviseurs doivent comprendre comment le résultat a été produit.",
            ],
          },
          {
            heading: "Combien coûte la vérification?",
            body: [
              "Les coûts varient selon le modèle et le volume. La vérification manuelle coûte cher en temps, les outils ponctuels exigent souvent plusieurs abonnements, et les plateformes complètes peuvent facturer par vérification ou par plan institutionnel.",
            ],
          },
        ],
      },
    ],
  },
]
