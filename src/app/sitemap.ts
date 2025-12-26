import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vomanhquan.com' // Replace with actual domain

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
