'use client'
import HeadingSection from '../HeadingSection'
import { ISkillCategory, ISkills } from '~/types'
import { motion } from 'framer-motion'
import { Monitor, Server, FlaskConical, Smile } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TechStackMarquee } from '../TechStackMarquee'

interface SkillSectionConfig {
  key: keyof ISkills
  icon: typeof Monitor
  color: string
  itemsType: 'list' | 'tags'
}

const SECTION_CONFIG: SkillSectionConfig[] = [
  {
    key: 'frontend',
    icon: Monitor,
    color: 'text-indigo-500',
    itemsType: 'list',
  },
  {
    key: 'backend',
    icon: Server,
    color: 'text-emerald-500',
    itemsType: 'list',
  },
  {
    key: 'methodologies',
    icon: FlaskConical,
    color: 'text-orange-500',
    itemsType: 'list',
  },
  {
    key: 'softSkills',
    icon: Smile,
    color: 'text-rose-500', // Choosing a friendly color for soft skills
    itemsType: 'tags',
  },
]

export function Skills({ dict }: { dict: ISkills }) {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 space-y-4">
          <HeadingSection
            title={dict.title}
            become={dict.myStack}
            subtitle={''}
            isIndigoColor={false}
          />
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {SECTION_CONFIG.map((section) => {
            const sectionData = dict[section.key as keyof ISkills]

            // Skip if data is missing or not in expected format
            if (!sectionData || typeof sectionData === 'string') return null

            // For 'softSkills', sectionData is { title: string, items: string[] }
            // For others, sectionData is { title: string, items: ISkillCategory[] }
            const title = sectionData.title
            const items = sectionData.items

            return (
              <div key={section.key} className="space-y-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-lg bg-card border border-border">
                    <section.icon className={cn('w-6 h-6', section.color)} />
                  </div>
                  <h3 className="text-2xl font-bold">{title}</h3>
                </div>

                <div
                  className={cn(
                    'space-y-8',
                    section.itemsType === 'tags' &&
                      'space-y-0 flex flex-wrap gap-3'
                  )}
                >
                  {section.itemsType === 'list'
                    ? (items as ISkillCategory[]).map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.3 }}
                          className="flex gap-4"
                        >
                          <span className="text-xl font-mono text-muted-foreground/40 font-bold">
                            0{index + 1}
                          </span>
                          <div>
                            <h4 className="text-lg font-bold mb-1">
                              {item.title}
                            </h4>
                            <p className="text-muted-foreground">{item.list}</p>
                          </div>
                        </motion.div>
                      ))
                    : (items as string[]).map((tag, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="px-4 py-2 rounded-full bg-card border border-border text-muted-foreground font-medium hover:border-foreground/50 transition-colors"
                        >
                          {tag}
                        </motion.div>
                      ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-24">
          <TechStackMarquee />
        </div>
      </div>
    </section>
  )
}
