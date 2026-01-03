import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import type { Locale } from '@/i18n/settings'

export function Header({
  lang,
  dict,
}: {
  lang: Locale
  dict: Record<string, any>
}) {
  return (
    <header className="sticky top-0 z-50 w-full shadow-2xs bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-8">
        <div className="mr-4 flex">
          <Link href={`/${lang}`} className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">VMQ</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href={`/${lang}#about`}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {dict.about}
            </Link>
            <Link
              href={`/${lang}#skills`}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {dict.skills}
            </Link>
            <Link
              href={`/${lang}#experience`}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {dict.experience}
            </Link>
            <Link
              href={`/${lang}#contact`}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {dict.contact}
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Mobile Menu Trigger could go here */}
          </div>
          <nav className="flex items-center space-x-2">
            <LanguageSwitcher currentLang={lang} />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
