import type { Metadata } from "next"
import Link from "next/link"
import { PillarPageLayout } from "@/components/pillar/pillar-page-layout"
import { FaqSection, FaqSchema, type FaqItem } from "@/components/pillar/faq-section"
import { CtaSection } from "@/components/pillar/cta-section"

export const metadata: Metadata = {
  title: "Sanctions Screening for Universities: Compliance Guide",
  description:
    "How universities screen research partners against international sanctions lists. SEMA, OFAC, EU, UN, and BIS Entity List screening explained.",
  openGraph: {
    title: "Sanctions Screening for Universities: Compliance Guide | Tracer",
    description:
      "How universities screen research partners against international sanctions lists. SEMA, OFAC, EU, UN, and BIS Entity List screening explained.",
    url: "https://tracersecurity.ca/sanctions-screening-universities",
  },
}

const faqItems: FaqItem[] = [
  {
    question: "What sanctions lists should universities check?",
    answer:
      "At minimum: Canada's SEMA regulations, the OFAC SDN list (U.S.), EU CFSP consolidated list, UN Security Council sanctions, UK OFSI, and the U.S. BIS Entity List. For Canadian-funded research, also check the Named Research Organizations (NRO) list of 103 entities identified as risks for research partnerships.",
  },
  {
    question: "How is sanctions screening different for universities versus banks?",
    answer:
      "Financial sanctions screening focuses on transactions and account holders. Academic sanctions screening must also consider co-publication relationships, institutional hierarchies (a sanctioned entity may be a parent of a seemingly independent lab), dual affiliations, and the distinction between fundamental and sensitive research. Identity resolution is also more complex due to common names and multiple affiliations in academic contexts.",
  },
  {
    question: "What is the Named Research Organizations (NRO) list?",
    answer:
      "The NRO list is a Canadian government list identifying 103 research organizations associated with military, national defense, or state security entities. Research partnerships involving NRO-listed organizations are subject to additional scrutiny under the NSGRP and may be ineligible for federal funding under STRAC policy in sensitive technology areas.",
  },
  {
    question: "What happens if a researcher matches a sanctions list?",
    answer:
      "A match does not automatically mean a violation or that a partnership must end. It triggers a review process: verify the match is accurate (not a false positive due to name similarity), assess the nature and scope of the sanctions, evaluate the specific research collaboration, and determine whether any licenses or exemptions apply. Document the assessment thoroughly.",
  },
  {
    question: "How often should universities update their sanctions screening?",
    answer:
      "Sanctions lists change frequently - OFAC alone updates multiple times per month. Universities should screen at key decision points (new partnerships, funding applications, visiting researcher approvals) and periodically re-screen ongoing collaborations, particularly in sensitive research areas.",
  },
  {
    question: "Can universities be penalized for sanctions violations in research?",
    answer:
      "Yes. Sanctions violations can result in significant financial penalties, loss of federal research funding eligibility, criminal prosecution in severe cases, and substantial reputational damage. In Canada, violations of SEMA can carry penalties up to $250,000 and five years imprisonment.",
  },
]

export default function SanctionsScreeningUniversitiesPage() {
  return (
    <PillarPageLayout>
      <FaqSchema items={faqItems} />

      <article>
        <header className="mb-12 md:mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-4">
            Compliance Guide
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1]">
            Sanctions Screening for Universities
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Sanctions screening in the academic context means checking research
            collaborators, partner institutions, and their affiliations against
            international sanctions lists and restricted entity databases. For
            universities, this is both a legal obligation and a practical
            safeguard against compliance violations that can jeopardize funding,
            reputation, and research integrity.
          </p>
        </header>

        {/* Relevant Lists */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6">
            Sanctions Lists Relevant to Academic Institutions
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Universities operating internationally must screen against multiple
            sanctions regimes. Each list serves a different purpose and covers
            different entities.
          </p>

          <div className="space-y-6">
            <div className="border border-border rounded-lg p-5">
              <h3 className="text-base font-medium mb-2">SEMA - Special Economic Measures Act (Canada)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Canada&apos;s primary sanctions legislation. Targets individuals,
                entities, and countries subject to Canadian economic sanctions.
                Compliance is mandatory for all Canadian institutions.
              </p>
            </div>
            <div className="border border-border rounded-lg p-5">
              <h3 className="text-base font-medium mb-2">OFAC SDN List (United States)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Specially Designated Nationals and Blocked Persons list
                maintained by the U.S. Office of Foreign Assets Control. Relevant
                for any collaboration involving U.S. persons, funds, or technology.
              </p>
            </div>
            <div className="border border-border rounded-lg p-5">
              <h3 className="text-base font-medium mb-2">EU CFSP Consolidated List</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The European Union&apos;s Common Foreign and Security Policy sanctions
                list. Applicable to collaborations with EU-based institutions or
                involving EU funding.
              </p>
            </div>
            <div className="border border-border rounded-lg p-5">
              <h3 className="text-base font-medium mb-2">UN Security Council Sanctions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Binding on all UN member states. Covers individuals and entities
                associated with terrorism, proliferation, and threats to
                international peace and security.
              </p>
            </div>
            <div className="border border-border rounded-lg p-5">
              <h3 className="text-base font-medium mb-2">UK OFSI (Office of Financial Sanctions Implementation)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The UK&apos;s consolidated sanctions list. Relevant for collaborations
                with UK institutions, particularly post-Brexit when UK and EU lists
                have diverged.
              </p>
            </div>
            <div className="border border-border rounded-lg p-5">
              <h3 className="text-base font-medium mb-2">BIS Entity List (United States)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Bureau of Industry and Security&apos;s list of entities subject to
                export control restrictions. Particularly relevant for research
                involving dual-use technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Academic vs Financial */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6">
            Why Academic Sanctions Screening Differs from Financial Screening
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Banks and financial institutions have screened against sanctions lists
            for decades. But applying financial sanctions screening methods
            directly to academic contexts misses critical dimensions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In finance, the screening subject is typically a customer or
            counterparty with clear identifying information. In academia, a
            researcher may have multiple names (transliteration variations),
            multiple affiliations, and a long publication history under different
            institutional associations. Identity resolution is fundamentally
            harder.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Academic screening also requires understanding institutional
            hierarchies. A laboratory may be organizationally part of a university
            that is itself supervised by a state entity on a sanctions list. These
            nested relationships are invisible to tools designed for financial
            compliance.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Co-publication networks add another layer. A researcher may not
            personally be sanctioned, but their co-authors&apos; affiliations can
            reveal connections to military or restricted organizations. This type
            of network analysis is specific to academic screening and is central
            to assessing{" "}
            <Link
              href="/research-collaboration-risk"
              className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
            >
              research collaboration risk
            </Link>
            .
          </p>
        </section>

        {/* NRO */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6">
            Named Research Organizations: Canada&apos;s Academic-Specific List
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Named Research Organizations (NRO) list is unique to Canada&apos;s
            research security framework. It identifies 103 organizations that the
            Canadian government considers to be associated with military, national
            defense, or state security entities.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Under the STRAC policy, grant applications involving collaboration
            with NRO-listed entities in sensitive technology areas will not be
            funded. For other research areas, NRO connections trigger enhanced
            scrutiny under the NSGRP.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The NRO list is not a sanctions list in the legal sense. It is a risk
            indicator specific to the research funding context. But its practical
            impact on research partnerships is significant: connections to NRO
            entities - whether direct or through co-publication networks - require
            documentation and justification. For a broader view of screening
            requirements, see{" "}
            <Link
              href="/research-security-screening"
              className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
            >
              what is research security screening
            </Link>
            .
          </p>
        </section>

        {/* Process */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6">
            The Sanctions Screening Process for Universities
          </h2>

          <ol className="space-y-4 list-decimal list-outside pl-5">
            <li className="text-muted-foreground leading-relaxed pl-2">
              <span className="text-foreground font-medium">Identify screening triggers.</span>{" "}
              Define when screening is required: new partnerships, grant
              applications, visiting researcher approvals, technology transfer
              agreements, and periodic re-screening of ongoing collaborations.
            </li>
            <li className="text-muted-foreground leading-relaxed pl-2">
              <span className="text-foreground font-medium">Resolve identity.</span>{" "}
              Disambiguate the individual or institution. Use ORCID, publication
              records, and institutional registries to confirm you are screening
              the correct entity. This step is critical for reducing false positives.
            </li>
            <li className="text-muted-foreground leading-relaxed pl-2">
              <span className="text-foreground font-medium">Screen against all relevant lists.</span>{" "}
              Check the individual and their affiliations against SEMA, OFAC,
              EU CFSP, UN, UK OFSI, BIS Entity List, and the NRO list. Check
              parent organizations, not just the immediate institution.
            </li>
            <li className="text-muted-foreground leading-relaxed pl-2">
              <span className="text-foreground font-medium">Assess matches.</span>{" "}
              For each potential match, verify accuracy, assess the nature of the
              sanction, and determine implications for the specific collaboration.
              Not all matches mean the same thing.
            </li>
            <li className="text-muted-foreground leading-relaxed pl-2">
              <span className="text-foreground font-medium">Document and decide.</span>{" "}
              Record what was checked, what was found (including null results),
              and the rationale for the decision. This documentation is what makes
              the screening defensible under audit.
            </li>
          </ol>
        </section>

        {/* FAQ */}
        <FaqSection items={faqItems} />

        {/* CTA */}
        <CtaSection />
      </article>
    </PillarPageLayout>
  )
}
