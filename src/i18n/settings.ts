export const defaultLocale = 'vi'
export const locales = ['en', 'vi'] as const
export const languages = locales

export type Locale = (typeof locales)[number]
