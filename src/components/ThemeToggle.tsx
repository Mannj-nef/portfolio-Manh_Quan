'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="inline-flex items-center justify-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
    >
      <span className="h-[1.2rem] w-[1.2rem] flex items-center justify-center">
        <Moon className="block dark:hidden" />
        <Sun className="hidden dark:block" />
      </span>
    </button>
  )
}
