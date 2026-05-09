import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/lib/theme-context'
import { LanguageProvider } from '@/lib/language-context'
import { GA_MEASUREMENT_ID } from '@/lib/analytics'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://tracersecurity.ca'),
  title: {
    default: 'Tracer - Research Security Intelligence',
    template: '%s | Tracer',
  },
  description: 'Structured research security due diligence for Canadian research institutions. Tracer helps teams gather facts, synthesize findings, and render auditable screening reports.',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Tracer',
    title: 'Tracer - Research Security Intelligence',
    description: 'Research security due diligence platform for structured, auditable screening workflows.',
    url: 'https://tracersecurity.ca',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tracer - Research Security Intelligence',
    description: 'Research security due diligence platform for structured, auditable screening workflows.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}} />
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){try{var t=localStorage.getItem('trace-theme');if(t==='light'||t==='dark'){document.documentElement.className=t;}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.className='dark';}else{document.documentElement.className='light';}}catch(e){}}());
        `}} />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
