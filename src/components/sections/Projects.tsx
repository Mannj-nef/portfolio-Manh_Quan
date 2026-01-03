'use client'

import { motion } from 'framer-motion'
import { CSSProperties } from 'react'
import { IProjects } from '~/types'
import HeadingSection from '~/components/HeadingSection'
import { TECHNICAL_LIST } from '~/constants'
import { highlightText } from '~/utils/text'

import { TECH_SWIPER_OPTIONS } from '~/constants/swiper'
import SwiperBase from '~/components/SwiperBase'
import { SwiperSlide } from 'swiper/react'
import IconBase from '~/components/IconBase'

interface Project {
  dict: IProjects
}

export function Projects({ dict }: Project) {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto  px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-8 md:mb-16 flex flex-col md:flex-row justify-between gap-4"
        >
          <div className="flex flex-col gap-2">
            <HeadingSection
              title={dict.titleSecond}
              subtitle={dict.practicalExperience}
              become={dict.titleFirst}
              isIndigoColor={true}
            />
          </div>
          <p className="text-muted-foreground whitespace-pre-line text-right hidden lg:block mt-auto">
            {dict.description}
            <br />
            {dict.subDescription}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {dict.projects.map((project, index) => {
            const projectMainColor = {
              'PRODUCT @ NAPA GLOBAL': 'var(--color-christine)',
              'Freelance project': 'var(--color-emerald)',
            }[project.company]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                style={{ '--accent': projectMainColor } as CSSProperties}
                className="shadow-lg rounded-2xl p-4 md:p-6 bg-card flex flex-col gap-6 w-full overflow-hidden"
              >
                <div>
                  <div className="flex flex-wrap gap-2 items-center text-xs mb-2">
                    <p className="text-[color:var(--accent)] px-4 py-1 rounded-full bg-[color-mix(in_srgb,var(--accent)_20%,transparent)] font-semibold uppercase">
                      {project.company}
                    </p>
                    <p className="text-muted-foreground">{project.dateTime}</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

                    <p className="font-bold text-muted-foreground text-xl">
                      {project.subTitle}
                    </p>

                    <p className="my-4">{project.description}</p>

                    <ul className="pl-5 space-y-3 list-disc marker:text-[color:var(--accent)]">
                      {project.features.map((feature, index) => (
                        <li key={index}>
                          {highlightText(feature, TECHNICAL_LIST)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-auto">
                  <SwiperBase options={TECH_SWIPER_OPTIONS}>
                    {project.technologies.map((tech) => (
                      <SwiperSlide
                        key={tech}
                        className="!w-auto py-1 px-4 rounded bg-muted"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground text-sm">
                            {tech}
                          </span>
                          <IconBase name={tech.toLowerCase()} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </SwiperBase>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
