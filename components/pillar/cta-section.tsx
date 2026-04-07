import Link from "next/link"

export function CtaSection() {
  return (
    <section className="mt-16 md:mt-24 rounded-xl border border-border bg-muted/30 p-8 md:p-12 text-center">
      <h2 className="font-serif text-2xl md:text-3xl font-normal mb-4">
        Screen research partnerships with confidence
      </h2>
      <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
        Tracer screens international collaborators across 14+ data sources covering 400M+ records.
        Every finding linked to its source, confidence level, and known limitations.
      </p>
      <Link
        href="/"
        className="inline-flex px-8 py-3 text-sm tracking-wide font-medium rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity duration-150"
      >
        Get Early Access
      </Link>
    </section>
  )
}
