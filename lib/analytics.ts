export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || ""

export type AnalyticsEventName =
  | "generate_lead"
  | "waitlist_open"
  | "waitlist_submit_error"
  | "navigation_click"
  | "tracer_app_click"
  | "language_change"
  | "theme_change"
  | "mobile_menu_toggle"
  | "platform_showcase_select"
  | "platform_showcase_autoplay_toggle"
  | "screening_cta_carousel_select"
  | "resource_select"
  | "resource_anchor_select"

export type AnalyticsEventParams = Record<
  string,
  string | number | boolean | null | undefined
>

type SanitizedEventParams = Record<string, string | number | boolean>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function sanitizeEventParams(params: AnalyticsEventParams): SanitizedEventParams {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== null && value !== undefined && value !== "")
  ) as SanitizedEventParams
}

export function trackEvent(
  eventName: AnalyticsEventName,
  params: AnalyticsEventParams = {}
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return
  }

  window.gtag(
    "event",
    eventName,
    sanitizeEventParams({
      page_path: window.location.pathname,
      ...params,
    })
  )
}
