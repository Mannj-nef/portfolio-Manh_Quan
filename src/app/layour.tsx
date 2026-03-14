import { type Metadata } from 'next'
import React from 'react'
import { config } from '~/constants'
import { getDictionary } from '~/i18n/dictionaries'
import { Locale } from '~/i18n/settings'

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
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
