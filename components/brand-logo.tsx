"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

type BrandLogoProps = {
  variant?: "auto" | "black" | "white"
  showText?: boolean
  className?: string
  markClassName?: string
  textClassName?: string
}

export function BrandLogo({
  variant = "auto",
  showText = true,
  className,
  markClassName,
  textClassName,
}: BrandLogoProps) {
  const { language } = useLanguage()

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {variant === "auto" ? (
        <>
          <Image
            src="/brand/tracer-logo-b-v1.png"
            alt=""
            width={363}
            height={318}
            className={cn("h-8 w-9 object-contain dark:hidden", markClassName)}
            priority
          />
          <Image
            src="/brand/tracer-logo-w-v1.png"
            alt=""
            width={363}
            height={318}
            className={cn("hidden h-8 w-9 object-contain dark:block", markClassName)}
            priority
          />
        </>
      ) : (
        <Image
          src={
            variant === "white"
              ? "/brand/tracer-logo-w-v1.png"
              : "/brand/tracer-logo-b-v1.png"
          }
          alt=""
          width={363}
          height={318}
          className={cn("h-8 w-9 object-contain", markClassName)}
          priority
        />
      )}
      {showText && (
        <div className={cn("flex flex-col leading-none", textClassName)}>
          <span className="text-xs font-semibold uppercase tracking-[0.13em] sm:text-sm sm:tracking-[0.14em]">
            Tracer
          </span>
          <span className="mt-1 text-[7px] font-medium uppercase tracking-[0.14em] opacity-70 sm:text-[9px] sm:tracking-[0.16em]">
            {language === "fr" ? "Sécurité de la recherche" : "Research Security"}
          </span>
        </div>
      )}
    </div>
  )
}
