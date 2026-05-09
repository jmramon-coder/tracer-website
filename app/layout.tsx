import type { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/lib/theme-context'
import { LanguageProvider } from '@/lib/language-context'

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
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Analytics />
      </body>
    </html>
  )
}
