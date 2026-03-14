'use client'

import { usePathname, useRouter } from 'next/navigation'
import type { Locale } from '@/i18n/settings'

const languages = ['en', 'vi']

export function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
  const pathname = usePathname()
  const router = useRouter()

  const switchLanguage = (newLang: string) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = newLang
    router.push(segments.join('/'))
  }

  return (
    <div className="flex items-center space-x-1 border p-1 rounded-[10px]">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => switchLanguage(lang)}
          className={`px-2 py-1 text-xs rounded-[6px] transition-colors cursor-pointer ${
            currentLang === lang
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-accent'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
