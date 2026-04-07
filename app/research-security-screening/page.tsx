import type { Metadata } from "next"
import Link from "next/link"
import { PillarPageLayout } from "@/components/pillar/pillar-page-layout"
import { FaqSection, FaqSchema, type FaqItem } from "@/components/pillar/faq-section"
import { CtaSection } from "@/components/pillar/cta-section"

export const metadata: Metadata = {
  title: "Research Security Screening: A Complete Guide",
  description:
    "Learn what research security screening is, why universities need it, and how to implement automated screening for international research partnerships.",
  openGraph: {
    title: "Research Security Screening: A Complete Guide | Tracer",
    description:
      "Learn what research security screening is, why universities need it, and how to implement automated screening for international research partnerships.",
    url: "https://tracersecurity.ca/research-security-screening",
  },
}

const faqItems: FaqItem[] = [
  {
    question: "What is research security screening?",
    answer:
      "Research security screening is the systematic process of evaluating international research partnerships, collaborators, and institutional affiliations against sanctions lists, military organization databases, adverse media, and co-publication networks to identify potential risks before they become incidents.",
  },
  {
    question: "Why do universities need research security screening?",
    answer:
      "Universities engaged in international research collaborations face regulatory requirements (such as Canada's NSGRP and STRAC), reputational risks from undisclosed affiliations, and potential sanctions violations. Screening helps institutions meet compliance obligations while protecting research integrity.",
  },
  {
    question: "What is the NSGRP?",
    answer:
      "The National Security Guidelines for Research Partnerships (NSGRP) is Canada's framework requiring federally funded researchers to assess potential risks when partnering with foreign entities. It applies to grants from NSERC, SSHRC, and CIHR, and covers risks related to sanctions, military affiliations, and sensitive technology transfer.",
  },
  {
    question: "How long does research security screening take?",
    answer:
      "Manual screening of a single research collaborator can take days to weeks, depending on the complexity of their publication history and affiliations. Automated platforms like Tracer reduce this to minutes by cross-referencing multiple data sources simultaneously.",
  },
  {
    question: "What data sources are used in research security screening?",
    answer:
      "Comprehensive screening draws from sanctions lists (SEMA, OFAC SDN, EU CFSP, UN), academic databases (OpenAlex, Crossref, ORCID), institutional registries (ROR, Wikidata), adverse media sources, and corporate registries. Tracer integrates 14+ data sources covering 400M+ records.",
  },
  {
    question: "Is research security screening required in Canada?",
    answer:
      "Yes. Canadian institutions applying for federal research funding through the tri-agency (NSERC, SSHRC, CIHR) must assess their research partnerships under the NSGRP. The Sensitive Technology Research and Affiliations of Concern (STRAC) policy adds specific restrictions for sensitive research areas.",
  },
  {
    question: "How much does automated research screening cost?",
    answer:
      "Costs vary by platform and volume. As a reference, Tracer's screening cost is approximately $0.33 per researcher, which includes identity resolution, sanctions checks, co-publication analysis, and adverse signal detection across multiple data sources.",
  },
]

export default function ResearchSecurityScreeningPage() {
  return (
    <PillarPageLayout>
      <FaqSchema items={faqItems} />

      <article>
        <header className="mb-12 md:mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-4">
            Research Security Guide
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1]">
            What Is Research Security Screening?
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Research security screening is the systematic process of evaluating
            international research partnerships, collaborators, and institutional
            affiliations against sanctions lists, military organization databases,
            adverse media, and co-publication networks to identify potential risks
            before they become incidents.
          </p>
        </header>

        {/* Why It Matters */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6">
            Why Research Security Screening Matters
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            International research collaboration drives innovation, but it also
            creates exposure to risks that universities cannot afford to ignore.
            Sanctions violations carry severe legal consequences. Undisclosed
            military affiliations can compromise sensitive research. And reputational
            damage from a single incident can undermine years of institutional trust.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Canada is the first country to establish comprehensive research security
            requirements. The National Security Guidelines for Research Partnerships
            (NSGRP) and the Sensitive Technology Research and Affiliations of Concern
            (STRAC) policy together create a framework that requires institutions to
            assess risks before entering international partnerships. Other countries
            are following: the UK, the Netherlands, and Australia are developing
            similar frameworks inspired by Canada&apos;s approach.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In the United States, NSPM-33 establishes disclosure requirements for
            federally funded researchers, while the CHIPS and Science Act
            strengthens research security provisions. These parallel developments
            signal a global shift toward structured oversight of international
            research partnerships.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The question for institutions is no longer whether to screen, but how
            to do it consistently, thoroughly, and defensibly.
          </p>
        </section>

        {/* Key Components */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6">
            Key Components of Research Security Screening
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Effective research security screening combines multiple verification
            layers. No single check is sufficient on its own. A comprehensive
            approach includes five core components.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-2">Identity Resolution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Before screening can begin, you need to confirm you are evaluating
                the right person. Identity resolution matches a collaborator&apos;s name,
                institutional affiliation, ORCID, and publication history to
                establish a verified identity. Without this step, sanctions checks
                and media signals may attach to the wrong individual - producing
                false positives or, worse, false negatives.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Sanctions and Restricted Entity Lists</h3>
              <p className="text-muted-foreground leading-relaxed">
                Screening against international sanctions lists is the foundational
                compliance check. Relevant lists include Canada&apos;s SEMA (Special
                Economic Measures Act) regulations, the U.S. OFAC SDN list, the EU
                CFSP consolidated list, UN Security Council sanctions, UK OFSI, and
                the U.S. BIS Entity List. Canada&apos;s Named Research Organizations (NRO)
                list adds 103 entities specifically identified as risks for research
                partnerships.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Co-Publication Network Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">
                A collaborator&apos;s co-authors reveal affiliations that may not appear
                in formal records. Analyzing co-publication networks can surface
                connections to military-affiliated institutions, sanctioned entities,
                or organizations on restricted lists. This is particularly relevant
                in contexts where researchers may hold dual affiliations or where
                institutional names have changed.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Adverse Media and Signals</h3>
              <p className="text-muted-foreground leading-relaxed">
                Court records, regulatory actions, investigative reporting, and
                retractions can all surface risk signals that structured databases
                miss. Adverse media monitoring covers news sources, legal databases
                like CanLII, and academic integrity records to flag concerns that
                merit further review.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Institutional Affiliation Verification</h3>
              <p className="text-muted-foreground leading-relaxed">
                Verifying an institution&apos;s identity and status is as important as
                verifying the individual. Institutional verification uses registries
                like ROR (Research Organization Registry), Wikidata, and corporate
                databases to confirm that partner institutions are what they claim
                to be and to detect connections to military, state, or sanctioned
                parent organizations.
              </p>
            </div>
          </div>
        </section>

        {/* How to Screen */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6">
            How to Screen Research Collaborators
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A structured screening process moves through distinct phases, each
            building on the previous one. Whether performed manually or through
            automated tools, the logic remains the same.
          </p>

          <ol className="space-y-4 list-decimal list-outside pl-5">
            <li className="text-muted-foreground leading-relaxed pl-2">
              <span className="text-foreground font-medium">Identify the subject.</span>{" "}
              Collect the collaborator&apos;s full name, known affiliations, ORCID or
              similar identifiers, and area of research. Disambiguation is critical
              when names are common.
            </li>
            <li className="text-muted-foreground leading-relaxed pl-2">
              <span className="text-foreground font-medium">Resolve identity.</span>{" "}
              Cross-reference available identifiers against academic databases to
              confirm which publications, affiliations, and grants belong to this
              specific individual.
            </li>
            <li className="text-muted-foreground leading-relaxed pl-2">
              <span className="text-foreground font-medium">Run sanctions and restricted list checks.</span>{" "}
              Screen the individual and their affiliated institutions against all
              relevant sanctions lists. Check the NRO list for Canadian-funded
              research.
            </li>
            <li className="text-muted-foreground leading-relaxed pl-2">
              <span className="text-foreground font-medium">Analyze co-publication networks.</span>{" "}
              Map the collaborator&apos;s co-authors and their institutional affiliations.
              Flag connections to military-linked or sanctioned institutions.
            </li>
            <li className="text-muted-foreground leading-relaxed pl-2">
              <span className="text-foreground font-medium">Check adverse signals.</span>{" "}
              Search news, legal databases, and academic integrity records for
              relevant flags.
            </li>
            <li className="text-muted-foreground leading-relaxed pl-2">
              <span className="text-foreground font-medium">Compile a defensible report.</span>{" "}
              Document findings with sources, confidence levels, and known
              limitations. A screening report that cannot explain where its findings
              came from is not defensible under audit.
            </li>
          </ol>

          <p className="text-muted-foreground leading-relaxed mt-6">
            Manual screening follows these same steps but typically takes days to
            weeks per collaborator and produces inconsistent results across
            analysts. Automated screening compresses this into minutes while
            maintaining a structured, auditable process.
          </p>
        </section>

        {/* Tools */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6">
            Research Security Screening Tools
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The research security tools landscape spans several categories, each
            with different strengths and limitations.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <span className="text-foreground font-medium">Bibliometric platforms</span>{" "}
            like Dimensions focus on publication data and citation analysis. They
            provide valuable research intelligence but were not designed for
            security screening. They do not check sanctions lists or analyze risk
            signals.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <span className="text-foreground font-medium">Risk analytics platforms</span>{" "}
            like Kharon specialize in sanctions and financial compliance. They offer
            deep coverage of restricted entity lists but lack the academic context
            needed for research partnership screening, such as co-publication
            network analysis and academic identity resolution.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <span className="text-foreground font-medium">Comprehensive screening platforms</span>{" "}
            combine identity resolution, sanctions checks, co-publication analysis,
            and adverse signals into a single pipeline. Tracer screens partnerships
            across 14+ data sources covering 400M+ records, with every finding
            linked to its source, confidence level, and known limitations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When evaluating tools, consider: transparency of methodology, breadth
            of data sources, defensibility of output under audit, cost per
            screening, and whether the tool was designed for the academic context.
            For a detailed comparison, see the{" "}
            <Link
              href="/research-security-tools"
              className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
            >
              research security tools comparison
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <FaqSection items={faqItems} />

        {/* CTA */}
        <CtaSection />
      </article>
    </PillarPageLayout>
  )
}
