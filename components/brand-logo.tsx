import Image from "next/image"
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
          <span className="text-sm font-semibold tracking-[0.14em] uppercase">
            Tracer
          </span>
          <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] opacity-70">
            Research Security
          </span>
        </div>
      )}
    </div>
  )
}
