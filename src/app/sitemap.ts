import { MetadataRoute } from 'next'
import { config } from '~/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = config.url

  const routes = ['', '/about', '/projects', '/contact']
  const languages = ['en', 'vi']

  const sitemap: MetadataRoute.Sitemap = []

  languages.forEach((lang) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })

  return sitemap
}
