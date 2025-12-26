import { getDictionary } from '@/i18n/dictionaries'
import type { Locale } from '@/i18n/settings'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'
import { Projects } from '@/components/sections/Projects'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vo Manh Quan',
    url: 'https://vomanhquan.com',
    image: 'https://vomanhquan.com/assets/avatar.png',
    sameAs: [
      'https://github.com/vmquan',
      'https://linkedin.com/in/vmquan',
      'https://twitter.com/vmquan',
    ],
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
  }

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero dict={dict.hero} />
      <About dict={dict.about} objDict={dict.objectives} />
      <Projects />
      <Skills dict={dict.skills} />
      <Experience dict={dict.experience} />
      <Contact dict={dict.contact} />
    </div>
  )
}
