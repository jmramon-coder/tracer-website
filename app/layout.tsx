import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import { AnalyticsConsent } from '@/components/analytics-consent'
import { ThemeProvider } from '@/lib/theme-context'
import { LanguageProvider } from '@/lib/language-context'
import type { Language } from '@/lib/translations'
import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from '@/lib/metadata'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
    ],
    shortcut: [
      {
        url: '/favicon.ico',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: '/',
    images: [DEFAULT_OG_IMAGE],
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#050505' },
  ],
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const requestHeaders = await headers()
  const initialLanguage: Language =
    requestHeaders.get('x-tracer-locale') === 'fr' ? 'fr' : 'en'
  const host = requestHeaders.get('host')?.toLowerCase().split(':')[0] ?? ''
  const isAppHost = host === 'app.tracersecurity.ca' || host === 'www.app.tracersecurity.ca'

  return (
    <html lang={initialLanguage} className="light" suppressHydrationWarning>
      <head>
        {isAppHost ? <meta name="robots" content="noindex,nofollow,noarchive" /> : null}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){try{var t=localStorage.getItem('trace-theme');if(t==='light'||t==='dark'){document.documentElement.className=t;}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.className='dark';}else{document.documentElement.className='light';}}catch(e){}}());
        `}} />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LanguageProvider initialLanguage={initialLanguage}>
            {children}
            <AnalyticsConsent />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
