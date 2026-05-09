"use client"

import { useEffect } from "react"

export function HashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1)
      if (!id) return

      const scroll = () => {
        const element = document.getElementById(id)
        if (!element) return

        const top = element.getBoundingClientRect().top + window.scrollY - 112
        window.scrollTo({ top, behavior: "auto" })
      }

      ;[0, 120, 360, 800, 1400].forEach((delay) => {
        window.setTimeout(scroll, delay)
      })
    }

    scrollToHash()
    window.addEventListener("hashchange", scrollToHash)
    return () => window.removeEventListener("hashchange", scrollToHash)
  }, [])

  return null
}
