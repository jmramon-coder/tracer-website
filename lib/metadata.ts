import type { Metadata } from "next"

const DEFAULT_SITE_URL = "https://tracersecurity.ca"

function normalizeMarketingSiteUrl(value?: string) {
  if (!value || value.includes("app.tracersecurity")) {
    return DEFAULT_SITE_URL
  }

  return value.replace(/\/$/, "")
}

export const SITE_NAME = "Tracer"
export const SITE_URL = normalizeMarketingSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)
export const SITE_TITLE = "Tracer | Research Security Intelligence"
export const SITE_DESCRIPTION =
  "Research security due diligence for Canadian institutions. Screen research partners, affiliations, networks, sanctions exposure, and risk signals with cited, auditable reports."

export const SITE_KEYWORDS = [
  "research security",
  "research security screening",
  "research partnership due diligence",
  "sanctions screening",
  "Canadian universities",
  "research compliance",
  "open-source intelligence",
]

export const DEFAULT_OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Tracer research security intelligence",
}

type MetadataOptions = {
  title?: string
  description?: string
  path?: string
  image?: string
  noIndex?: boolean
  languages?: NonNullable<Metadata["alternates"]>["languages"]
  locale?: string
}

type ArticleMetadataOptions = MetadataOptions & {
  publishedTime: string
  authors: string[]
}

function imageForMetadata(image?: string) {
  return image
    ? {
        url: image,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      }
    : DEFAULT_OG_IMAGE
}

function fullTitle(title?: string) {
  return title ? `${title} | ${SITE_NAME}` : SITE_TITLE
}

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) {
    return normalizeMarketingSiteUrl(path)
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

function absoluteLanguages(
  languages?: NonNullable<Metadata["alternates"]>["languages"]
) {
  if (!languages) {
    return undefined
  }

  return Object.fromEntries(
    Object.entries(languages).map(([locale, value]) => [
      locale,
      typeof value === "string" ? absoluteUrl(value) : value,
    ])
  )
}

export function createMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  image,
  noIndex = false,
  languages,
  locale = "en_CA",
}: MetadataOptions = {}): Metadata {
  const metadataTitle: Metadata["title"] = title ?? { absolute: SITE_TITLE }
  const openGraphTitle = fullTitle(title)
  const metadataImage = imageForMetadata(image)

  return {
    title: metadataTitle,
    description,
    alternates: {
      canonical: absoluteUrl(path),
      languages: absoluteLanguages(languages),
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : undefined,
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: openGraphTitle,
      description,
      url: absoluteUrl(path),
      images: [metadataImage],
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle,
      description,
      images: [metadataImage.url],
    },
  }
}

export function createArticleMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  image,
  publishedTime,
  authors,
  noIndex = false,
  languages,
  locale = "en_CA",
}: ArticleMetadataOptions): Metadata {
  const metadataImage = imageForMetadata(image)
  const openGraphTitle = fullTitle(title)

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
      languages: absoluteLanguages(languages),
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : undefined,
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      title: openGraphTitle,
      description,
      url: absoluteUrl(path),
      images: [metadataImage],
      publishedTime,
      authors,
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle,
      description,
      images: [metadataImage.url],
    },
  }
}
