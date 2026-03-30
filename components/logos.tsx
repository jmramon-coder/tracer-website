"use client"

import { useLanguage } from "@/lib/language-context"

export function Logos() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28 border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-[11px] uppercase tracking-[0.3em] text-muted-foreground/60 mb-12">
          {t.logos.title}
        </p>
        
        {/* University placeholders - minimal style */}
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {t.logos.types.map((type, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors duration-500"
            >
              <div className="h-8 w-8 border border-current flex items-center justify-center">
                <span className="text-[10px] font-medium">{type.charAt(0)}</span>
              </div>
              <span className="text-sm tracking-wide">{type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
