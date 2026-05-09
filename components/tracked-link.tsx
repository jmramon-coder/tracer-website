"use client"

import Link from "next/link"
import type { ComponentProps } from "react"
import {
  trackEvent,
  type AnalyticsEventName,
  type AnalyticsEventParams,
} from "@/lib/analytics"
import { useLanguage } from "@/lib/language-context"

type LinkHref = ComponentProps<typeof Link>["href"]

type TrackedLinkProps = ComponentProps<typeof Link> & {
  trackingEventName?: AnalyticsEventName
  trackingParams?: AnalyticsEventParams
}

function getHrefString(href: LinkHref) {
  if (typeof href === "string") {
    return href
  }

  return href.pathname?.toString() ?? ""
}

export function TrackedLink({
  href,
  onClick,
  trackingEventName = "navigation_click",
  trackingParams = {},
  ...props
}: TrackedLinkProps) {
  const { language } = useLanguage()

  return (
    <Link
      href={href}
      onClick={(event) => {
        trackEvent(trackingEventName, {
          link_url: getHrefString(href),
          language,
          ...trackingParams,
        })
        onClick?.(event)
      }}
      {...props}
    />
  )
}
