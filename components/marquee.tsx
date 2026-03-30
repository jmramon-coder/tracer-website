"use client"

export function Marquee() {
  const items = [
    "Research Security",
    "Due Diligence",
    "Partnership Screening",
    "Risk Assessment",
    "Compliance",
    "Intelligence",
  ]

  return (
    <div className="py-6 bg-muted/30 border-y border-border/40 overflow-hidden">
      <div className="flex animate-marquee">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground/50 px-8">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/20" />
          </div>
        ))}
      </div>
    </div>
  )
}
