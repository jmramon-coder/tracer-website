"use client"

import { useTheme } from "@/lib/theme-context"
import { cn } from "@/lib/utils"
import { Sun, Moon } from "lucide-react"

type ThemeToggleProps = {
  className?: string
  tone?: "default" | "media"
}

export function ThemeToggle({ className, tone = "default" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isMedia = tone === "media"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition-all duration-200 active:scale-95",
        isMedia
          ? "border-white/18 bg-white/12 text-white hover:bg-white/20"
          : "border-border/70 bg-card/70 text-foreground hover:bg-muted",
        className
      )}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={theme === "dark"}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 stroke-[1.8]" />
      ) : (
        <Moon className="h-4 w-4 stroke-[1.8]" />
      )}
    </button>
  )
}
