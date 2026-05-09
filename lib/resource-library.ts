export type ResourceCategory =
  | "All"
  | "Foundations"
  | "Operations"
  | "Compliance"

export type ResourceSection = {
  heading: string
  body?: string[]
  subsections?: {
    heading: string
    body: string[]
  }[]
  list?: string[]
  table?: {
    headers: string[]
    rows: string[][]
  }
  note?: string
}

export type ResourceArticle = {
  id: string
  title: string
  category: Exclude<ResourceCategory, "All">
  eyebrow: string
  summary: string
  readTime: string
  audience: string
  takeaways: string[]
  sections: ResourceSection[]
}

export const resourceCategories: ResourceCategory[] = [
  "All",
  "Foundations",
  "Operations",
  "Compliance",
]

export const resourceLibrary: ResourceArticle[] = [
  {
    id: "research-security-screening",
    title: "Research security screening",
    category: "Foundations",
    eyebrow: "Guide",
    summary:
      "Research security screening is the systematic process of evaluating international research partnerships, collaborators, and institutional affiliations against sanctions lists, military organization databases, adverse media, and co-publication networks.",
    readTime: "8 min",
    audience: "Research security officers",
    takeaways: [
      "Screening is a structured review workflow, not a final risk determination.",
      "Identity, affiliation, source context, and citations should stay together.",
      "A repeatable process helps teams reduce inconsistent manual review.",
    ],
    sections: [
      {
        heading: "Why research security screening matters",
        body: [
          "International research collaboration drives innovation, but it also creates exposure to risks that universities cannot afford to ignore. Sanctions violations carry severe legal consequences. Undisclosed military affiliations can compromise sensitive research. Reputational damage from a single incident can undermine years of institutional trust.",
          "Canada is the first country to establish comprehensive research security requirements. The National Security Guidelines for Research Partnerships and the Sensitive Technology Research and Affiliations of Concern policy together create a framework that requires institutions to assess risks before entering international partnerships.",
          "In the United States, NSPM-33 establishes disclosure requirements for federally funded researchers, while the CHIPS and Science Act strengthens research security provisions.",
          "Parallel requirements in the United States, the United Kingdom, the Netherlands, and Australia signal a global shift toward structured oversight of international research partnerships. The question for institutions is no longer whether to screen, but how to do it consistently, thoroughly, and defensibly.",
        ],
      },
      {
        heading: "Key components of research security screening",
        body: [
          "Effective research security screening combines multiple verification layers. No single check is sufficient on its own. A comprehensive approach includes identity resolution, restricted-list screening, co-publication network analysis, adverse signal review, and institutional verification.",
        ],
        subsections: [
          {
            heading: "Identity resolution",
            body: [
              "Before screening can begin, the team needs to confirm it is evaluating the right person. Identity resolution matches a collaborator's name, institutional affiliation, ORCID, and publication history to establish a verified identity.",
              "Without this step, sanctions checks and media signals may attach to the wrong individual, producing false positives or, worse, false negatives.",
            ],
          },
          {
            heading: "Sanctions and restricted entity lists",
            body: [
              "Screening against international sanctions lists is the foundational compliance check. Relevant lists include Canada's SEMA regulations, the U.S. OFAC SDN list, the EU CFSP consolidated list, UN Security Council sanctions, UK OFSI, and the U.S. BIS Entity List.",
              "Canada's Named Research Organizations list adds entities specifically identified as concerns for research partnerships.",
            ],
          },
          {
            heading: "Co-publication network analysis",
            body: [
              "A collaborator's co-authors reveal affiliations that may not appear in formal records. Analyzing co-publication networks can surface connections to military-affiliated institutions, sanctioned entities, or organizations on restricted lists.",
            ],
          },
          {
            heading: "Adverse media and signals",
            body: [
              "Court records, regulatory actions, investigative reporting, and retractions can surface risk signals that structured databases miss. These signals should be documented with source context and reviewed by a human decision-maker.",
            ],
          },
          {
            heading: "Institutional affiliation verification",
            body: [
              "Verifying an institution's identity and status is as important as verifying the individual. Institutional verification uses registries and public records to confirm that partner institutions are what they claim to be and to detect connections to military, state, or sanctioned parent organizations.",
            ],
          },
        ],
      },
      {
        heading: "How to screen research collaborators",
        body: [
          "A structured screening process moves through distinct phases. Whether performed manually or through software, the logic remains the same.",
        ],
        list: [
          "Identify the subject: collect the collaborator's full name, known affiliations, ORCID or similar identifiers, and area of research.",
          "Resolve identity: cross-reference available identifiers against academic databases to confirm which publications, affiliations, and grants belong to this specific individual.",
          "Run sanctions and restricted-list checks: screen the individual and their affiliated institutions against relevant lists and the NRO list for Canadian-funded research.",
          "Analyze co-publication networks: map co-authors and institutional affiliations, then flag connections to military-linked or sanctioned institutions.",
          "Check adverse signals: search news, legal databases, and academic integrity records for relevant flags.",
          "Compile a defensible report: document findings with sources, confidence levels, and known limitations.",
        ],
      },
      {
        heading: "Research security screening tools",
        body: [
          "The research security tools landscape spans several categories. Bibliometric platforms focus on publication data and citation analysis. Risk analytics platforms specialize in sanctions and financial compliance. Comprehensive screening platforms combine identity resolution, sanctions checks, co-publication analysis, and adverse signals into a single pipeline.",
          "Bibliometric platforms provide valuable research intelligence but were not designed for security screening. They do not check sanctions lists or analyze risk signals as their primary purpose.",
          "Risk analytics platforms offer deep coverage of restricted entity lists but often lack the academic context needed for research partnership screening, such as co-publication network analysis and academic identity resolution.",
          "When evaluating tools, consider transparency of methodology, breadth of data sources, defensibility of output under audit, cost per screening, and whether the tool was designed for the academic context.",
        ],
      },
      {
        heading: "FAQ",
        subsections: [
          {
            heading: "What is research security screening?",
            body: [
              "Research security screening is the systematic process of evaluating international research partnerships, collaborators, and institutional affiliations against sanctions lists, military organization databases, adverse media, and co-publication networks to identify potential risks before they become incidents.",
            ],
          },
          {
            heading: "Why do universities need research security screening?",
            body: [
              "Universities engaged in international research collaborations face regulatory requirements such as Canada's NSGRP and STRAC, reputational risks from undisclosed affiliations, and potential sanctions violations. Screening helps institutions meet compliance obligations while protecting research integrity.",
            ],
          },
          {
            heading: "What is the NSGRP?",
            body: [
              "The National Security Guidelines for Research Partnerships is Canada's framework requiring federally funded researchers to assess potential risks when partnering with foreign entities. It applies to grants from NSERC, SSHRC, and CIHR, and covers risks related to sanctions, military affiliations, and sensitive technology transfer.",
            ],
          },
          {
            heading: "How long does research security screening take?",
            body: [
              "Manual screening of a single research collaborator can take days to weeks, depending on the complexity of their publication history and affiliations. Automated workflows can compress this review by cross-referencing multiple data sources simultaneously, but the final review remains a human institutional decision.",
            ],
          },
          {
            heading: "What data sources are used in research security screening?",
            body: [
              "Comprehensive screening draws from sanctions lists, academic databases, institutional registries, adverse media sources, legal databases, and corporate registries. The most important principle is that findings remain traceable to their sources and limitations.",
            ],
          },
          {
            heading: "Is research security screening required in Canada?",
            body: [
              "Canadian institutions applying for federal research funding through the tri-agency must assess research partnerships under the NSGRP. The Sensitive Technology Research and Affiliations of Concern policy adds specific restrictions for sensitive research areas.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "academic-due-diligence",
    title: "Academic partnership due diligence",
    category: "Operations",
    eyebrow: "Playbook",
    summary:
      "Academic partnership due diligence translates regulatory requirements into operational decisions about who to collaborate with, and under what conditions.",
    readTime: "7 min",
    audience: "Grant and compliance teams",
    takeaways: [
      "Due diligence starts with intake quality and entity clarity.",
      "Evidence should be documented in a way legal, leadership, and grant teams can review.",
      "Escalation works best when the screening record is concise and cited.",
    ],
    sections: [
      {
        heading: "Why due diligence matters for research partnerships",
        body: [
          "Research partnerships are built on trust. But trust must be verified, not assumed. International collaborations create exposure to regulatory compliance risks, institutional reputation risks, and in some cases national security concerns.",
          "In Canada, the NSGRP requires universities to assess potential risks when partnering with foreign entities on federally funded research. The STRAC policy adds specific restrictions for research involving sensitive technology areas.",
          "Similar frameworks are emerging in the United Kingdom, the Netherlands, Australia, and through NSPM-33 in the United States.",
          "Beyond regulatory compliance, due diligence protects the integrity of the research itself. Partnerships with entities that have undisclosed military affiliations or connections to sanctioned organizations can compromise research outcomes, intellectual property, and institutional standing.",
        ],
      },
      {
        heading: "The due diligence process for academic collaborations",
        body: [
          "A structured due diligence process for academic partnerships typically follows four phases.",
        ],
        subsections: [
          {
            heading: "1. Information gathering",
            body: [
              "Collect identifying information about the prospective collaborator: full name, institutional affiliation, ORCID, research area, publication history, and the nature of the proposed collaboration. For institutional partnerships, gather information about the partner organization, its governance structure, and any parent entities.",
            ],
          },
          {
            heading: "2. Identity resolution and verification",
            body: [
              "Confirm the identity of the individual or institution through cross-referencing academic databases, institutional registries, and public records. This prevents false matches and ensures subsequent checks apply to the correct entity.",
            ],
          },
          {
            heading: "3. Multi-source risk assessment",
            body: [
              "Screen against sanctions lists, analyze co-publication networks for concerning affiliations, check adverse media and legal databases, and verify institutional claims. Each data source adds a layer of context that others may miss.",
            ],
          },
          {
            heading: "4. Documentation and decision",
            body: [
              "Compile findings into a structured report that documents what was checked, what was found, and what limitations exist in the assessment. This report supports the institutional decision and provides an auditable record.",
            ],
          },
        ],
      },
      {
        heading: "Common red flags in research partnerships",
        body: [
          "Not every flag means a partnership should be rejected. But each one warrants closer examination and documentation.",
        ],
        list: [
          "Named Research Organization affiliations: co-authors or partner institutions connected to listed entities require careful evaluation.",
          "Undisclosed military institutional affiliations: dual affiliations are not inherently problematic but must be disclosed and assessed.",
          "Publications in defense or military journals: these may indicate affiliations not reflected in formal institutional records.",
          "Suspicious funding patterns: undisclosed foreign funding, funding linked to sanctioned governments, or patterns that suggest talent recruitment programs.",
          "Rapid institutional mobility: frequent moves between institutions in high-risk contexts can indicate connections that merit further investigation.",
        ],
      },
      {
        heading: "Tools for academic partnership screening",
        body: [
          "Manual due diligence is thorough but slow, inconsistent across analysts, and difficult to audit. Institutions processing dozens or hundreds of partnerships per year need scalable approaches.",
          "Automated screening platforms designed for academic contexts combine identity resolution, sanctions screening, co-publication analysis, and adverse media checks into a single workflow. The strongest tools produce reports where every finding is linked to its source, confidence level, and known limitations.",
          "When choosing a tool, prioritize transparency of methodology, academic-specific identity resolution, breadth of data coverage, and defensibility of output.",
        ],
      },
      {
        heading: "FAQ",
        subsections: [
          {
            heading: "What is academic partnership due diligence?",
            body: [
              "Academic partnership due diligence is the process of evaluating potential research collaborators and partner institutions for compliance, security, and integrity risks before formalizing a partnership. It includes sanctions screening, affiliation verification, publication network analysis, and adverse media checks.",
            ],
          },
          {
            heading: "When should universities conduct due diligence on research partners?",
            body: [
              "Due diligence should be conducted before signing collaboration agreements, applying for joint funding, hosting visiting researchers, and entering technology transfer or IP-sharing arrangements. In Canada, the NSGRP requires risk assessment for federally funded international research partnerships.",
            ],
          },
          {
            heading: "What are the most common red flags in research partnerships?",
            body: [
              "Common red flags include co-authors affiliated with Named Research Organizations, undisclosed military or defense institutional affiliations, publications in military or defense journals, unusual funding patterns, undisclosed foreign funding sources, and rapid institutional mobility across sensitive jurisdictions.",
            ],
          },
          {
            heading: "How is academic due diligence different from corporate due diligence?",
            body: [
              "Academic due diligence must account for factors unique to research: co-publication networks, academic identity resolution, institutional hierarchies, and the distinction between fundamental and sensitive research areas.",
            ],
          },
          {
            heading: "What happens if a university skips due diligence on a research partner?",
            body: [
              "Consequences can include loss of federal research funding eligibility, sanctions exposure, reputational damage, compromise of sensitive research or intellectual property, and potential national security implications.",
            ],
          },
          {
            heading: "Can due diligence be automated for academic partnerships?",
            body: [
              "Parts of the workflow can be automated, including source collection, identity resolution, sanctions checks, co-publication analysis, and adverse signal review. Automation should support human review, not replace the institutional decision.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "sanctions-screening",
    title: "Sanctions screening for universities",
    category: "Compliance",
    eyebrow: "Compliance",
    summary:
      "Sanctions screening checks collaborators, partner institutions, and affiliations against international sanctions lists and restricted entity databases in a way that respects academic context.",
    readTime: "6 min",
    audience: "Compliance and legal partners",
    takeaways: [
      "Restricted-list checks are necessary but not sufficient for research security review.",
      "Name matching needs context, disambiguation, and source handling.",
      "Outputs should describe findings without overstating legal certainty.",
    ],
    sections: [
      {
        heading: "Sanctions lists relevant to academic institutions",
        body: [
          "Universities operating internationally must screen against multiple sanctions regimes. Each list serves a different purpose and covers different entities.",
        ],
        subsections: [
          {
            heading: "SEMA - Special Economic Measures Act",
            body: [
              "Canada's primary sanctions legislation targets individuals, entities, and countries subject to Canadian economic sanctions. Compliance is mandatory for Canadian institutions.",
            ],
          },
          {
            heading: "OFAC SDN List",
            body: [
              "The Specially Designated Nationals and Blocked Persons list maintained by the U.S. Office of Foreign Assets Control is relevant for collaborations involving U.S. persons, funds, or technology.",
            ],
          },
          {
            heading: "EU CFSP consolidated list",
            body: [
              "The European Union's Common Foreign and Security Policy sanctions list can apply to collaborations with EU-based institutions or projects involving EU funding.",
            ],
          },
          {
            heading: "UN Security Council sanctions",
            body: [
              "United Nations Security Council sanctions are binding on member states and cover individuals and entities associated with terrorism, proliferation, and threats to international peace and security.",
            ],
          },
          {
            heading: "UK OFSI",
            body: [
              "The United Kingdom's consolidated sanctions list is relevant for collaborations with UK institutions, particularly where UK and EU sanctions positions diverge.",
            ],
          },
          {
            heading: "BIS Entity List",
            body: [
              "The U.S. Bureau of Industry and Security Entity List covers entities subject to export-control restrictions and is particularly relevant for research involving dual-use technologies.",
            ],
          },
        ],
      },
      {
        heading: "Why academic sanctions screening differs from financial screening",
        body: [
          "Banks and financial institutions have screened against sanctions lists for decades. Applying those methods directly to academic contexts misses critical dimensions.",
          "In academia, a researcher may have multiple names, transliteration variations, multiple affiliations, and a long publication history under different institutional associations. Identity resolution is fundamentally harder.",
          "Academic screening also requires understanding institutional hierarchies. A laboratory may be organizationally part of a university that is itself supervised by a state entity on a sanctions list.",
          "Co-publication networks add another layer. A researcher may not personally be sanctioned, but co-authors' affiliations can reveal connections to military or restricted organizations.",
        ],
      },
      {
        heading: "Named Research Organizations",
        body: [
          "The Named Research Organizations list is unique to Canada's research security framework. It identifies organizations the Canadian government considers associated with military, national defense, or state security entities.",
          "Under the STRAC policy, grant applications involving collaboration with NRO-listed entities in sensitive technology areas will not be funded. For other research areas, NRO connections trigger enhanced scrutiny under the NSGRP.",
          "The NRO list is not a sanctions list in the legal sense. It is a research funding risk indicator. Connections to NRO entities, whether direct or through co-publication networks, require documentation and justification.",
        ],
      },
      {
        heading: "The sanctions screening process for universities",
        list: [
          "Identify screening triggers such as new partnerships, grant applications, visiting researcher approvals, technology transfer agreements, and periodic re-screening.",
          "Resolve identity using ORCID, publication records, and institutional registries.",
          "Screen against all relevant lists and parent organizations, not just the immediate institution.",
          "Assess matches for accuracy, sanction type, and implications for the specific collaboration.",
          "Document what was checked, what was found, including null results, and the rationale for the decision.",
        ],
      },
      {
        heading: "FAQ",
        subsections: [
          {
            heading: "What sanctions lists should universities check?",
            body: [
              "At minimum, Canadian institutions should consider Canada's SEMA regulations, the OFAC SDN list, the EU CFSP consolidated list, UN Security Council sanctions, UK OFSI, and the U.S. BIS Entity List. For Canadian-funded research, the Named Research Organizations list should also be checked.",
            ],
          },
          {
            heading: "How is sanctions screening different for universities versus banks?",
            body: [
              "Financial sanctions screening focuses on transactions and account holders. Academic sanctions screening must also consider co-publication relationships, institutional hierarchies, dual affiliations, transliteration issues, and the distinction between fundamental and sensitive research.",
            ],
          },
          {
            heading: "What is the Named Research Organizations list?",
            body: [
              "The Named Research Organizations list is a Canadian government list identifying research organizations associated with military, national defense, or state security entities. Connections to those organizations may trigger additional scrutiny under the NSGRP and may affect eligibility under STRAC in sensitive technology areas.",
            ],
          },
          {
            heading: "What happens if a researcher matches a sanctions list?",
            body: [
              "A match triggers review. The institution should verify whether the match is accurate, assess the nature and scope of the sanctions, evaluate the specific collaboration, and document the rationale for any decision.",
            ],
          },
          {
            heading: "How often should universities update sanctions screening?",
            body: [
              "Universities should screen at key decision points such as new partnerships, funding applications, visiting researcher approvals, and technology transfer agreements. Ongoing collaborations, especially in sensitive areas, should be re-screened periodically.",
            ],
          },
          {
            heading: "Can universities be penalized for sanctions violations in research?",
            body: [
              "Yes. Sanctions violations can result in financial penalties, loss of funding eligibility, criminal prosecution in severe cases, and reputational damage. The specific consequence depends on jurisdiction, conduct, and applicable law.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "collaboration-risk",
    title: "Research collaboration risk",
    category: "Foundations",
    eyebrow: "Framework",
    summary:
      "Research collaboration risk assessment identifies, evaluates, and documents potential concerns associated with international research partnerships.",
    readTime: "5 min",
    audience: "VP Research and leadership",
    takeaways: [
      "Risk review should distinguish evidence, uncertainty, and decision authority.",
      "A clear screening card helps leaders understand what is known and what requires escalation.",
      "Good collaborations move faster when review standards are repeatable.",
    ],
    sections: [
      {
        heading: "Types of risk in research collaborations",
        body: [
          "Research collaboration risks span multiple dimensions. Effective assessment considers each in context, not in isolation.",
        ],
        subsections: [
          {
            heading: "Sanctions and compliance risk",
            body: [
              "Direct or indirect connections to sanctioned individuals, entities, or countries. This includes export-control concerns and restrictions on technology transfer to listed entities.",
            ],
          },
          {
            heading: "Military affiliation risk",
            body: [
              "Undisclosed connections to military, national defense, or state security entities, especially for research in sensitive technology areas.",
            ],
          },
          {
            heading: "Research integrity risk",
            body: [
              "History of retractions, data fabrication allegations, or academic integrity violations that may indicate broader concerns about partnership reliability.",
            ],
          },
          {
            heading: "Adverse media and legal risk",
            body: [
              "Court proceedings, regulatory actions, investigative reporting, or other public signals involving a potential collaborator.",
            ],
          },
        ],
      },
      {
        heading: "Co-publication network analysis",
        body: [
          "A researcher's co-authors are a window into their professional network. Co-publication network analysis maps these connections to identify affiliations and relationships that may not appear in formal records.",
          "Consider a researcher listed at a civilian university. Their publication record may show co-authorships with individuals at military-affiliated institutions, defense laboratories, or organizations on a restricted research list. These patterns can indicate dual affiliations, collaborative relationships with concerning entities, or research activities that overlap with defense applications.",
          "Network analysis is not guilt by association. Not every co-authorship with a military-affiliated researcher indicates risk. Assessment should consider frequency, recency, research topic, disclosure, and source quality.",
          "Effective co-publication analysis requires comprehensive academic data and careful interpretation. The output should make clear what the source record shows and where uncertainty remains.",
        ],
      },
      {
        heading: "Adverse signals and how to detect them",
        body: [
          "Adverse signals are pieces of information from public sources that indicate potential compliance, integrity, or security concerns. They complement structured database checks by surfacing information that sanctions lists and academic databases do not capture.",
        ],
        subsections: [
          {
            heading: "News and investigative reporting",
            body: [
              "Media coverage of espionage cases, technology theft, foreign interference, or academic misconduct can surface connections before official sanctions are imposed.",
            ],
          },
          {
            heading: "Legal databases",
            body: [
              "Court records can reveal export-control violations, fraud, espionage, or other proceedings relevant to institutional review.",
            ],
          },
          {
            heading: "Academic integrity records",
            body: [
              "Retraction databases, university investigations, and misconduct findings can indicate risks beyond simple error.",
            ],
          },
          {
            heading: "Talent program connections",
            body: [
              "Participation in foreign talent recruitment programs may not appear in formal records but can surface through public sources.",
            ],
          },
        ],
      },
      {
        heading: "Institutional verification",
        body: [
          "Verifying an institution is as important as verifying an individual. Organizations can change names, merge, or restructure to obscure connections to sanctioned or military entities.",
          "Institutional verification uses registries, corporate data, and public records to confirm an institution's identity, governance structure, and parent entities. This process can reveal that a seemingly independent research institute is supervised by a military organization or controlled by a sanctioned entity.",
        ],
      },
      {
        heading: "FAQ",
        subsections: [
          {
            heading: "What is a research collaboration risk assessment?",
            body: [
              "A research collaboration risk assessment is the process of evaluating potential risks associated with international research partnerships, including sanctions exposure, military affiliations, research integrity concerns, and adverse media signals.",
            ],
          },
          {
            heading: "What risks should universities assess in research collaborations?",
            body: [
              "Key risk categories include sanctions and restricted entity exposure, undisclosed military or defense affiliations, co-publication networks connecting to concerning entities, adverse media and legal signals, research integrity concerns, suspicious funding patterns, and technology transfer implications.",
            ],
          },
          {
            heading: "What is co-publication network analysis?",
            body: [
              "Co-publication network analysis maps a researcher's co-authors and their institutional affiliations to identify indirect connections to military-affiliated, sanctioned, or otherwise concerning organizations.",
            ],
          },
          {
            heading: "How can universities detect undisclosed military affiliations?",
            body: [
              "Detection methods include cross-referencing institutional affiliations against known military and defense organization databases, analyzing co-publication patterns with military journals or defense conferences, checking institutional registries for parent organization connections, and reviewing public source signals.",
            ],
          },
          {
            heading: "What adverse signals matter for research partnerships?",
            body: [
              "Relevant adverse signals include sanctions matches, court records involving fraud or espionage, regulatory actions, investigative journalism reports, academic retractions or integrity investigations, talent recruitment program connections, and undisclosed foreign funding sources.",
            ],
          },
          {
            heading: "How often should risk assessments be updated?",
            body: [
              "Risk landscapes change continuously. Best practice is to reassess at key decision points such as funding renewals, publication submissions, and partnership extensions, and at least annually for ongoing collaborations in sensitive areas.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "research-security-tools",
    title: "Research security tools",
    category: "Operations",
    eyebrow: "Comparison",
    summary:
      "Research security tools range from bibliometric platforms to comprehensive screening systems that combine identity resolution with multi-source assessment.",
    readTime: "6 min",
    audience: "Operations leaders",
    takeaways: [
      "Generic tools often miss the research workflow: cases, entities, rendered reports, and audit history.",
      "A purpose-built system should support academic identity resolution, source handling, and defensible output.",
      "The best tool makes screening repeatable without making the final decision.",
    ],
    sections: [
      {
        heading: "The research security tools landscape",
        body: [
          "Tools available for research security fall into three broad categories. Each addresses a different part of the screening problem.",
        ],
        subsections: [
          {
            heading: "Bibliometric platforms",
            body: [
              "Platforms focused on publication data, citation analysis, and research impact metrics excel at mapping research output and collaboration patterns. They are not designed for compliance screening or full risk assessment.",
              "These tools are best for understanding a researcher's publication profile and research impact, not for producing a defensible research security screening record.",
            ],
          },
          {
            heading: "Risk analytics platforms",
            body: [
              "Risk analytics platforms provide deep sanctions and compliance data, often focused on financial and geopolitical risk. They cover sanctions well but lack academic-specific identity resolution and co-publication network analysis.",
              "They are strongest for financial compliance screening and broad geopolitical risk analysis, but research teams usually need more academic context than these systems provide by default.",
            ],
          },
          {
            heading: "Comprehensive screening platforms",
            body: [
              "Purpose-built screening platforms combine identity resolution, sanctions checks, co-publication analysis, adverse media monitoring, and institutional verification in a single workflow.",
              "They are best suited for institutions that need end-to-end screening with transparent, auditable output designed for the academic compliance context.",
            ],
          },
        ],
      },
      {
        heading: "How to evaluate research security tools",
        body: [
          "Five factors matter most when choosing a tool for research partnership screening.",
        ],
        subsections: [
          {
            heading: "1. Data source coverage",
            body: [
              "How many data sources does the tool check? Does it cover sanctions lists, academic databases, institutional registries, and adverse media? Gaps in coverage are gaps in screening.",
            ],
          },
          {
            heading: "2. Transparency of methodology",
            body: [
              "Can reviewers see exactly how a finding was produced? Is each result linked to its source? Are confidence levels and limitations disclosed? A risk score without explanation is difficult to defend under audit.",
            ],
          },
          {
            heading: "3. Defensibility of output",
            body: [
              "Screening output must explain what was checked, what was found, and what was not covered. A compliance reviewer should be able to trace each finding to its source.",
            ],
          },
          {
            heading: "4. Academic context",
            body: [
              "The tool should understand academic identity resolution, common names, multiple affiliations, ORCID, co-publication networks, universities, labs, and military research institutes.",
            ],
          },
          {
            heading: "5. Total cost of screening",
            body: [
              "Consider analyst time, multiple tool subscriptions, training costs, and the cost of inconsistent or incomplete screening. The cheapest license is not always the lowest operational cost.",
            ],
          },
        ],
      },
      {
        heading: "Comparing research security tools",
        table: {
          headers: [
            "Capability",
            "Bibliometric",
            "Risk analytics",
            "Comprehensive",
          ],
          rows: [
            ["Sanctions screening", "Via integration", "Core strength", "Included"],
            ["Academic identity resolution", "Partial", "Limited", "Core strength"],
            ["Co-publication analysis", "Publication data", "Not available", "Included"],
            ["Adverse media", "Not available", "Financial focus", "Included"],
            ["Institutional verification", "Partial", "Partial", "Included"],
            ["NRO list coverage", "Not available", "Not available", "Included"],
            ["Source transparency", "Citation data", "Varies", "Every finding sourced"],
            ["Designed for academia", "Yes, bibliometrics", "No, financial", "Yes, screening"],
          ],
        },
        note:
          "This comparison reflects public positioning and common capability patterns. Institutions should evaluate tools based on their specific requirements and governance model.",
      },
      {
        heading: "FAQ",
        subsections: [
          {
            heading: "What types of research security tools are available?",
            body: [
              "Research security tools fall into three broad categories: bibliometric platforms, risk analytics platforms, and comprehensive screening platforms that combine identity resolution, sanctions, co-publication analysis, and adverse signals.",
            ],
          },
          {
            heading: "What should universities look for in a research security tool?",
            body: [
              "Key criteria include data source coverage, transparency of methodology, academic-specific identity resolution, defensibility of output under audit, workflow fit, and total cost of screening.",
            ],
          },
          {
            heading: "How do bibliometric tools differ from security screening tools?",
            body: [
              "Bibliometric tools analyze publication data, citation counts, research impact, and collaboration patterns. They provide useful research intelligence but are not purpose-built to screen for sanctions, military affiliations, adverse signals, or audit-ready compliance findings.",
            ],
          },
          {
            heading: "Can existing compliance tools be used for research security?",
            body: [
              "Financial compliance tools can check sanctions lists, but they often lack academic-specific capabilities such as identity resolution across academic databases, co-publication network analysis, institutional hierarchy mapping, and research-context interpretation.",
            ],
          },
          {
            heading: "What does transparent screening mean?",
            body: [
              "Transparent screening means findings are linked to source material, include confidence or uncertainty context, and disclose known limitations. Reviewers should be able to understand how an output was produced.",
            ],
          },
          {
            heading: "How much does research security screening cost?",
            body: [
              "Costs vary by model and volume. Manual screening carries a high labor cost, point tools can require several subscriptions, and comprehensive screening platforms may price per screening or by institutional plan.",
            ],
          },
        ],
      },
    ],
  },
]
