import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import { SITE } from '@/lib/data'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'], display: 'swap' })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:  `${SITE.name} — ${SITE.slogan}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'software empresarial México', 'ERP PyMEs México', 'ciberseguridad México',
    'desarrollo software Python', 'SaaS México', 'PyCore ERP', 'CyCo.tech',
  ],
  authors:  [{ name: SITE.legalName, url: SITE.url }],
  openGraph: {
    type: 'website', locale: 'es_MX', url: SITE.url,
    siteName: SITE.name,
    title:    `${SITE.name} — ${SITE.slogan}`,
    description: SITE.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.slogan}`,
    description: SITE.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  manifest: '/site.webmanifest',
  alternates: { canonical: SITE.url },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)',  color: '#0d0f14' },
    { media: '(prefers-color-scheme: light)', color: '#f7f8fc' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" suppressHydrationWarning>
      <head>
        {/* Anti-flash de tema */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){
          try{var t=localStorage.getItem('cyco-theme'),
          p=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';
          if((t||p)==='dark')document.documentElement.classList.add('dark');}catch(e){}
        })()` }} />
        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type':    'Organization',
          name:       SITE.legalName,
          alternateName: SITE.name,
          url:        SITE.url,
          logo:       `${SITE.url}/Logo_CyCo_tech.png`,
          description:SITE.description,
          email:      SITE.email,
          foundingDate: String(SITE.year),
          areaServed: 'MX',
          sameAs: [SITE.social.linkedin, SITE.social.github],
        })}} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
