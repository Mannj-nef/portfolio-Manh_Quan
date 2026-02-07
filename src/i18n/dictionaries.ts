import 'server-only'
import type { Locale } from './settings'
import { resourceKey } from '~/constants/env'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  vi: () => import('@/dictionaries/vi.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  const dictionary = await dictionaries[locale]()
  return (dictionary as any)[resourceKey]
}
