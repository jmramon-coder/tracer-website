"use client"

import { TracerLogo } from "@/components/tracer-logo"
import { MapleLeaf } from "@/components/maple-leaf"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-20 md:py-32 bg-muted/20 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        {/* Logo & Tagline */}
        <div className="max-w-xs">
          <div className="flex items-center gap-3 mb-6">
            <TracerLogo size={32} animated={false} className="opacity-60" />
            <span className="text-sm font-medium tracking-[0.15em] uppercase text-foreground">
              Tracer
            </span>
          </div>
          <p className="text-muted-foreground font-light leading-relaxed mb-8">
            {t.footer.tagline}
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60 flex items-center gap-1.5">
            {t.footer.canadian} <MapleLeaf size={12} />
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-muted-foreground/60 tracking-wide">
            © {new Date().getFullYear()} Tracer. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-[11px] text-muted-foreground/60 hover:text-muted-foreground tracking-wide transition-colors duration-300"
            >
              {t.footer.privacy}
            </a>
            <p className="text-[11px] text-muted-foreground/60 tracking-wide">
              {t.footer.designed}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
