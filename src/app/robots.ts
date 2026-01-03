import { MetadataRoute } from 'next'
import { config } from '~/constants'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = config.url

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
