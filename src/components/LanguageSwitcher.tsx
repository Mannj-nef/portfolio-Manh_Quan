'use client'

import { usePathname, useRouter } from 'next/navigation'
import type { Locale } from '@/i18n/settings'

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
    <div className="flex items-center space-x-1 border rounded-md p-1">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-2 py-1 text-xs rounded-sm transition-colors ${
          currentLang === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'hover:bg-accent'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('vi')}
        className={`px-2 py-1 text-xs rounded-sm transition-colors ${
          currentLang === 'vi'
            ? 'bg-primary text-primary-foreground'
            : 'hover:bg-accent'
        }`}
      >
        VI
      </button>
    </div>
  )
}
