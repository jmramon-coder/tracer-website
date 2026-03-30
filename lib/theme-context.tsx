"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const defaultContext: ThemeContextType = {
  theme: "dark",
  toggleTheme: () => {},
}

const ThemeContext = createContext<ThemeContextType>(defaultContext)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("trace-theme") as Theme | null
    if (stored === "light" || stored === "dark") {
      setTheme(stored)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.remove("light", "dark")
      document.documentElement.classList.add(theme)
      localStorage.setItem("trace-theme", theme)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark")
  }

  const value: ThemeContextType = mounted 
    ? { theme, toggleTheme }
    : { theme: "dark", toggleTheme }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextType {
  return useContext(ThemeContext)
}
