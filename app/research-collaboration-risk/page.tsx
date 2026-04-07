import type { Metadata } from "next"
import Link from "next/link"
import { PillarPageLayout } from "@/components/pillar/pillar-page-layout"
import { FaqSection, FaqSchema, type FaqItem } from "@/components/pillar/faq-section"
import { CtaSection } from "@/components/pillar/cta-section"

export const metadata: Metadata = {
  title: "Research Collaboration Risk Assessment: Identifying Hidden Risks",
  description:
    "How to assess risks in international research collaborations. Co-publication network analysis, adverse signals, and institutional verification.",
  openGraph: {
    title: "Research Collaboration Risk Assessment: Identifying Hidden Risks | Tracer",
    description:
      "How to assess risks in international research collaborations. Co-publication network analysis, adverse signals, and institutional verification.",
    url: "https://tracersecurity.ca/research-collaboration-risk",
  },
}

const faqItems: FaqItem[] = [
  {
    question: "What is a research collaboration risk assessment?",
    answer:
      "A research collaboration risk assessment is the process of evaluating potential risks associated with international research partnerships, including sanctions exposure, military affiliations, research integrity concerns, and adverse media signals. It goes beyond simple sanctions checking to analyze the broader context of a collaboration.",
  },
  {
    question: "What risks should universities assess in research collaborations?",
    answer:
      "Key risk categories include sanctions and restricted entity exposure, undisclosed military or defense affiliations, co-publication networks connecting to concerning entities, adverse media and legal signals, research integrity concerns (retractions, fabrication), suspicious funding patterns, and technology transfer implications.",
  },
  {
    question: "What is co-publication network analysis?",
    answer:
      "Co-publication network analysis maps a researcher's co-authors and their institutional affiliations to identify indirect connections to military-affiliated, sanctioned, or otherwise concerning organizations. A researcher may have no direct concerning affiliations, but their co-authors might reveal connections that merit further review.",
  },
  {
    question: "How can universities detect undisclosed military affiliations?",
    answer:
      "Detection methods include cross-referencing institutional affiliations against known military and defense organization databases, analyzing co-publication patterns with military journals or defense conferences, checking institutional registries for parent organization connections, and monitoring adverse media for disclosed affiliations.",
  },
  {
    question: "What adverse signals matter for research partnerships?",
    answer:
      "Relevant adverse signals include sanctions matches, court records involving fraud or espionage, regulatory actions, investigative journalism reports, academic retractions or integrity investigations, connections to talent recruitment programs, and undisclosed foreign funding sources.",
  },
  {
    question: "How often should risk assessments be updated?",
    answer:
      "Risk landscapes change continuously. Sanctions lists are updated frequently, researchers change affiliations, and new information surfaces. Best practice is to re-assess at key decision points (funding renewals, publication submissions, partnership extensions) and at minimum annually for ongoing collaborations in sensitive areas.",
  },
]

export default function ResearchCollaborationRiskPage() {
  return (
    <PillarPageLayout>
      <FaqSchema items={faqItems} />

      <article>
        <header className="mb-12 md:mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-4">
            Risk Assessment Guide
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1]">
            Research Collaboration Risk Assessment
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Research collaboration risk assessment is the process of identifying,
            evaluating, and documenting potential risks associated with
            international research partnerships. It extends beyond sanctions
            compliance to analyze co-publication networks, adverse signals, and
            institutional affiliations that may indicate concerns not visible in
            formal records.
          </p>
        </header>

        {/* Risk Types */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6">
            Types of Risk in Research Collaborations
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Research collaboration risks span multiple dimensions. Effective
            assessment considers each in context, not in isolation.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-border rounded-lg p-5">
              <h3 className="text-base font-medium mb-2">Sanctions and compliance risk</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Direct or indirect connections to sanctioned individuals, entities,
                or countries. Includes violations of export control regulations and
                restrictions on technology transfer to listed entities.
              </p>
            </div>
            <div className="border border-border rounded-lg p-5">
              <h3 className="text-base font-medium mb-2">Military affiliation risk</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Undisclosed connections to military, national defense, or state
                security entities. Particularly relevant for research in sensitive
                technology areas identified under Canada&apos;s STRAC policy.
              </p>
            </div>
            <div className="border border-border rounded-lg p-5">
              <h3 className="text-base font-medium mb-2">Research integrity risk</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                History of retractions, data fabrication allegations, or academic
                integrity violations. These signals may indicate broader concerns
                about the reliability of a partnership.
              </p>
            </div>
            <div className="border border-border rounded-lg p-5">
              <h3 className="text-base font-medium mb-2">Adverse media and legal risk</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Court proceedings, regulatory actions, investigative reporting, or
                other public signals that indicate legal, ethical, or compliance
                concerns involving a potential collaborator.
              </p>
            </div>
          </div>
        </section>

        {/* Co-Publication Networks */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6">
            Co-Publication Network Analysis
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A researcher&apos;s co-authors are a window into their professional
            network. Co-publication network analysis maps these connections to
            identify affiliations and relationships that may not appear in formal
            records.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Consider a researcher listed at a civilian university. Their
            publication record may show co-authorships with individuals at
            military-affiliated institutions, defense laboratories, or
            organizations on the{" "}
            <Link
              href="/sanctions-screening-universities"
              className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
            >
              Named Research Organizations list
            </Link>
            . These co-publication patterns can indicate dual affiliations,
            collaborative relationships with concerning entities, or research
            activities that overlap with defense applications.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Network analysis is not about guilt by association. Not every
            co-authorship with a military-affiliated researcher indicates a risk.
            The assessment considers the frequency, recency, and nature of the
            collaboration, the research topics involved, and whether the
            affiliations were disclosed.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Effective co-publication analysis requires access to comprehensive
            academic databases. Tracer cross-references OpenAlex (250M+ records),
            Crossref (150M+ records), and ORCID (15M+ records) to map
            co-publication networks and flag connections to entities on sanctions
            or restricted lists.
          </p>
        </section>

        {/* Adverse Signals */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6">
            Adverse Signals and How to Detect Them
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Adverse signals are pieces of information from public sources that
            indicate potential compliance, integrity, or security concerns. They
            complement structured database checks by surfacing information that
            sanctions lists and academic databases do not capture.
          </p>

          <div className="space-y-4 mt-6">
            <div>
              <h3 className="text-base font-medium mb-2">News and investigative reporting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Media coverage of espionage cases, technology theft, foreign
                interference, or academic misconduct. These reports often surface
                connections before official sanctions are imposed.
              </p>
            </div>
            <div>
              <h3 className="text-base font-medium mb-2">Legal databases</h3>
              <p className="text-muted-foreground leading-relaxed">
                Court records, including cases involving export control violations,
                fraud, or espionage. In Canada, CanLII provides access to 7M+
                legal records that can reveal relevant proceedings.
              </p>
            </div>
            <div>
              <h3 className="text-base font-medium mb-2">Academic integrity records</h3>
              <p className="text-muted-foreground leading-relaxed">
                Retraction databases, university investigations, and misconduct
                findings. A pattern of retractions or integrity concerns can
                indicate risks beyond simple error.
              </p>
            </div>
            <div>
              <h3 className="text-base font-medium mb-2">Talent program connections</h3>
              <p className="text-muted-foreground leading-relaxed">
                Participation in foreign talent recruitment programs, particularly
                those identified by security agencies as conduits for technology
                transfer. These connections may not appear in formal records but
                can surface through media and legal databases.
              </p>
            </div>
          </div>
        </section>

        {/* Institutional Verification */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6">
            Institutional Verification
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Verifying an institution is as important as verifying an individual.
            Organizations can change names, merge, or restructure to obscure
            connections to sanctioned or military entities.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Institutional verification uses registries like ROR (Research
            Organization Registry), Wikidata, and corporate databases to confirm
            an institution&apos;s identity, governance structure, and parent entities.
            This process can reveal that a seemingly independent research
            institute is actually supervised by a military organization or
            controlled by a sanctioned entity.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For a comprehensive approach to screening both individuals and
            institutions, see the{" "}
            <Link
              href="/academic-partnership-due-diligence"
              className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
            >
              academic partnership due diligence guide
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
