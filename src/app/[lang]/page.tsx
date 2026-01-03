import { getDictionary } from '@/i18n/dictionaries'
import type { Locale } from '@/i18n/settings'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'
import { Projects } from '@/components/sections/Projects'
import { config } from '~/constants'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)

  const jsonLd = {
    '@id': `${config.url}/#person`,
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vo Manh Quan',
    url: config.url,
    image: `${config.url}/assets/avatar.png`,
    sameAs: [
      'https://github.com/mannj-nef',
      'https://www.linkedin.com/in/mannj-neff/',
      'https://x.com/Mannj_nef',
    ],
    jobTitle: 'Full Stack Developer',
    description:
      'Full-stack software engineer specializing in React, Next.js, NestJS, and scalable web applications.',
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'NestJS',
      'Node.js',
      'Web Development',
    ],
  }

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero dict={dict.hero} />

      <About objectives={dict.objectives} growthRoadmap={dict.growthRoadmap} />
      <Skills dict={dict.skills} />
      <Experience dict={dict.experience} />
      <Projects dict={dict.project} />
      <Contact dict={dict.contact} />
    </div>
  )
}
