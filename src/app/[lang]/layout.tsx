import { Inter, Fraunces } from 'next/font/google'
import '@/app/globals.css'
import { languages } from '@/i18n/settings'
import { Providers } from '@/components/providers'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { getDictionary } from '@/i18n/dictionaries'
import type { Locale } from '@/i18n/settings'
import { Metadata, Viewport } from 'next'
import { config } from '~/constants'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
}

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-serif' })

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

// ... existing imports
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)

  const baseUrl = config.url

  return {
    title: {
      default: 'Vo Manh Quan | Full Stack Developer',
      template: '%s | Vo Manh Quan',
    },
    description: dict.about.title, // Using the about title as a short description/intro
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: '/en',
        vi: '/vi',
      },
    },
    openGraph: {
      title: 'Vo Manh Quan | Full Stack Developer',
      description: 'Professional Portfolio & Projects',
      url: `/${lang}`,
      siteName: 'Vo Manh Quan Portfolio',
      locale: lang,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/assets/manh-quan.jpeg`,
          width: 1200,
          height: 630,
          alt: 'Vo Manh Quan Portfolio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Vo Manh Quan | Full Stack Developer',
      description: 'Professional Portfolio & Projects',
      images: [`${baseUrl}/assets/manh-quan.jpeg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/mannjneff-logo.svg', type: 'image/svg+xml' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon.ico', sizes: 'any' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    manifest: '/site.webmanifest',
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: 'Manh Quan',
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang as Locale)

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${fraunces.variable} min-h-screen bg-background text-foreground antialiased font-sans overflow-x-hidden`}
      >
        <Providers>
          <AnimatedBackground />
          <div className="flex min-h-screen flex-col relative">
            <Header lang={lang as Locale} dict={dictionary.nav} />
            <main className="flex-1">{children}</main>
            <Footer copyright={dictionary.contact.copyright} />
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}
