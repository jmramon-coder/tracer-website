"use client"

import { useTheme } from "@/lib/theme-context"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-all duration-200 cursor-pointer
        hover:bg-foreground/10
        active:scale-95"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-foreground stroke-[1.5]" />
      ) : (
        <Moon className="h-5 w-5 text-foreground stroke-[1.5]" />
      )}
    </button>
  )
}
