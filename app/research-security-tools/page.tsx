import type { Metadata } from "next"
import Link from "next/link"
import { PillarPageLayout } from "@/components/pillar/pillar-page-layout"
import { FaqSection, FaqSchema, type FaqItem } from "@/components/pillar/faq-section"
import { CtaSection } from "@/components/pillar/cta-section"

export const metadata: Metadata = {
  title: "Research Security Tools Comparison: Finding the Right Solution",
  description:
    "Compare research security screening tools. Dimensions, Strider, Kharon, and Tracer analyzed by coverage, transparency, and cost.",
  openGraph: {
    title: "Research Security Tools Comparison: Finding the Right Solution | Tracer",
    description:
      "Compare research security screening tools. Dimensions, Strider, Kharon, and Tracer analyzed by coverage, transparency, and cost.",
    url: "https://tracersecurity.ca/research-security-tools",
  },
}

const faqItems: FaqItem[] = [
  {
    question: "What types of research security tools are available?",
    answer:
      "Research security tools fall into three broad categories: bibliometric platforms (focused on publication data and citation analysis), risk analytics platforms (focused on sanctions, compliance, and financial risk), and comprehensive screening platforms (combining identity resolution, sanctions, co-publication analysis, and adverse signals in a single pipeline).",
  },
  {
    question: "What should universities look for in a research security tool?",
    answer:
      "Key evaluation criteria include: data source coverage (how many and which databases are checked), transparency of methodology (can you see how findings were produced?), academic-specific identity resolution, defensibility of output under audit, integration with institutional workflows, and total cost of screening.",
  },
  {
    question: "How do bibliometric tools differ from security screening tools?",
    answer:
      "Bibliometric tools like Dimensions analyze publication data - citation counts, research impact, collaboration patterns. They provide valuable research intelligence but were not designed to screen for sanctions, military affiliations, or adverse signals. Security screening tools are purpose-built for compliance and risk assessment.",
  },
  {
    question: "Can existing compliance tools be used for research security?",
    answer:
      "Financial compliance tools (KYC/AML platforms) can check sanctions lists, but they lack academic-specific capabilities: identity resolution across academic databases, co-publication network analysis, institutional hierarchy mapping for research organizations, and understanding of the academic context. Using them for research screening creates blind spots.",
  },
  {
    question: "What does transparent screening mean?",
    answer:
      "Transparent screening means every finding in a screening report is linked to its data source, includes a confidence level, and discloses known limitations of the assessment. This transparency is what makes screening output defensible - reviewers can trace each finding back to its origin and understand what was and was not covered.",
  },
  {
    question: "How much does research security screening cost?",
    answer:
      "Costs vary significantly. Manual screening has a high labor cost (hours to days per collaborator). Bibliometric platform subscriptions can run from thousands to tens of thousands per year. Comprehensive automated screening platforms like Tracer offer per-screening pricing (approximately $0.33 per researcher) that scales with institutional needs.",
  },
]

export default function ResearchSecurityToolsPage() {
  return (
    <PillarPageLayout>
      <FaqSchema items={faqItems} />

      <article>
        <header className="mb-12 md:mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-4">
            Tools Comparison
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1]">
            Research Security Tools: A Comparative Overview
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Research security tools range from bibliometric platforms focused on
            publication data to comprehensive screening solutions that combine
            identity resolution with multi-source risk assessment. Choosing the
            right tool depends on what your institution needs to screen, the level
            of transparency required, and how the output will be used in
            compliance decisions.
          </p>
        </header>

        {/* Landscape */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6">
            The Research Security Tools Landscape
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Tools available for research security fall into three broad categories.
            Each addresses a different part of the screening problem.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-3">Bibliometric platforms</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Platforms like Dimensions (Digital Science) focus on publication
                data, citation analysis, and research impact metrics. They excel
                at mapping research output and collaboration patterns. Dimensions
                recently integrated with Kharon to flag entities on risk lists,
                but viewing the detail requires a separate Kharon license.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Best for:</span>{" "}
                Understanding a researcher&apos;s publication profile and research
                impact. Not designed for compliance screening or risk assessment.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Risk analytics platforms</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Platforms like Kharon provide deep sanctions and compliance data,
                focused primarily on financial and geopolitical risk. Strider
                Technologies offers strategic intelligence targeting Fortune 500
                companies and government agencies with a broad scope that extends
                beyond research security.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Best for:</span>{" "}
                Financial compliance screening and broad geopolitical risk
                analysis. They cover sanctions well but lack academic-specific
                identity resolution and co-publication network analysis.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Comprehensive screening platforms</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Platforms purpose-built for{" "}
                <Link
                  href="/research-security-screening"
                  className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
                >
                  research security screening
                </Link>
                {" "}combine identity resolution, sanctions checks, co-publication
                analysis, adverse media monitoring, and institutional verification
                in a single workflow. Tracer, built in Canada where the most
                comprehensive research security standards were established,
                integrates 14+ data sources covering 400M+ records.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Best for:</span>{" "}
                Institutions that need end-to-end screening with transparent,
                auditable output designed for the academic compliance context.
              </p>
            </div>
          </div>
        </section>

        {/* Evaluation Criteria */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6">
            How to Evaluate Research Security Tools
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Five factors matter most when choosing a tool for research partnership
            screening.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">1. Data source coverage</h3>
              <p className="text-muted-foreground leading-relaxed">
                How many data sources does the tool check? Does it cover sanctions
                lists, academic databases, institutional registries, and adverse
                media? Gaps in coverage are gaps in your screening. A tool that
                checks sanctions but not co-publication networks misses a critical
                risk dimension.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">2. Transparency of methodology</h3>
              <p className="text-muted-foreground leading-relaxed">
                Can you see exactly how a finding was produced? Is each result
                linked to its source? Are confidence levels provided? Are
                limitations disclosed? A tool that gives you a risk score without
                explaining how it was calculated is not transparent - and its
                output is not defensible under audit.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">3. Defensibility of output</h3>
              <p className="text-muted-foreground leading-relaxed">
                Screening output must withstand scrutiny. Can the report explain
                what was checked, what was found, and what was not covered? Can a
                compliance reviewer trace each finding to its source? Defensible
                output is the difference between a screening that protects your
                institution and one that creates liability.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">4. Academic context</h3>
              <p className="text-muted-foreground leading-relaxed">
                Does the tool understand academic identity resolution (common
                names, multiple affiliations, ORCID)? Does it analyze
                co-publication networks? Does it know the difference between a
                university, a lab, and a military research institute? Financial
                compliance tools lack this context.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">5. Total cost of screening</h3>
              <p className="text-muted-foreground leading-relaxed">
                Consider not just the subscription or per-screening fee, but the
                total cost: analyst time, multiple tool subscriptions needed to
                cover all risk dimensions, training costs, and the cost of
                inconsistent or incomplete screening. A single comprehensive
                platform often costs less than cobbling together multiple
                point solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6">
            Comparing Research Security Tools
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The following comparison focuses on capabilities relevant to academic
            research partnership screening. Each tool has strengths in its primary
            domain.
          </p>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-medium text-foreground">Capability</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground">Bibliometric<br /><span className="text-xs font-normal text-muted-foreground">(e.g. Dimensions)</span></th>
                  <th className="text-left py-3 px-4 font-medium text-foreground">Risk Analytics<br /><span className="text-xs font-normal text-muted-foreground">(e.g. Kharon)</span></th>
                  <th className="text-left py-3 px-4 font-medium text-foreground">Comprehensive<br /><span className="text-xs font-normal text-muted-foreground">(e.g. Tracer)</span></th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-foreground">Sanctions screening</td>
                  <td className="py-3 px-4">Via integration</td>
                  <td className="py-3 px-4">Core strength</td>
                  <td className="py-3 px-4">Included</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-foreground">Academic identity resolution</td>
                  <td className="py-3 px-4">Partial</td>
                  <td className="py-3 px-4">Limited</td>
                  <td className="py-3 px-4">Core strength</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-foreground">Co-publication analysis</td>
                  <td className="py-3 px-4">Publication data</td>
                  <td className="py-3 px-4">Not available</td>
                  <td className="py-3 px-4">Included</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-foreground">Adverse media</td>
                  <td className="py-3 px-4">Not available</td>
                  <td className="py-3 px-4">Financial focus</td>
                  <td className="py-3 px-4">Included</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-foreground">Institutional verification</td>
                  <td className="py-3 px-4">Partial</td>
                  <td className="py-3 px-4">Partial</td>
                  <td className="py-3 px-4">Included</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-foreground">NRO list coverage</td>
                  <td className="py-3 px-4">Not available</td>
                  <td className="py-3 px-4">Not available</td>
                  <td className="py-3 px-4">Included</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-foreground">Source transparency</td>
                  <td className="py-3 px-4">Citation data</td>
                  <td className="py-3 px-4">Varies</td>
                  <td className="py-3 px-4">Every finding sourced</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-foreground">Designed for academia</td>
                  <td className="py-3 px-4">Yes (bibliometrics)</td>
                  <td className="py-3 px-4">No (financial)</td>
                  <td className="py-3 px-4">Yes (screening)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            This comparison reflects publicly available information as of April 2026.
            Each tool&apos;s capabilities may change. Institutions should evaluate
            tools based on their specific requirements and use cases.
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
