import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ValueProps } from "@/components/value-props"
import { CanadaSection } from "@/components/canada-section"
import { ResearchBrief } from "@/components/research-brief"
import { HowItWorks } from "@/components/how-it-works"
import { Footer } from "@/components/footer"
import { PageWrapper } from "@/components/page-wrapper"

export default function Home() {
  return (
    <>
      <Header />
      <PageWrapper>
        <main className="min-h-screen bg-background">
          <Hero />
          <ValueProps />
          <CanadaSection />
          <ResearchBrief />
          <HowItWorks />
          <Footer />
        </main>
      </PageWrapper>
    </>
  )
}
