'use client'

import { motion } from 'framer-motion'
import { IExperience } from '~/types'
import { cn } from '~/lib/utils'
import { Building, Globe } from 'lucide-react'

export function Experience({ dict }: { dict: IExperience }) {
  return (
    <section id="experience" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
              className="text-indigo-500 font-bold tracking-wider uppercase text-sm mb-2"
            >
              {dict.title}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
              className="text-4xl md:text-5xl font-bold flex flex-wrap gap-2 items-baseline font-serif"
            >
              <span className="">{dict.subtitle}</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className="bg-card/50 border border-muted-foreground/20 px-4 py-2 rounded-[10px]"
          >
            <span className="text-muted-foreground font-mono">
              Total Exp:{' '}
              <span className="text-foreground font-bold">{dict.totalExp}</span>
            </span>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative border-muted-foreground/20 ml-3 md:ml-6 space-y-12">
          {dict.list.map((job, index) => {
            const textClass =
              job.color === 'indigo'
                ? 'text-indigo-500'
                : job.color === 'emerald'
                ? 'text-emerald-500'
                : 'text-orange-500'

            const bgClass =
              job.color === 'indigo'
                ? 'bg-indigo-500/20'
                : job.color === 'emerald'
                ? 'bg-emerald-500/20'
                : 'bg-orange-500/20'

            const colorClass =
              job.color === 'indigo'
                ? 'text-indigo-500 bg-indigo-500'
                : job.color === 'emerald'
                ? 'text-emerald-500 bg-emerald-500'
                : 'text-orange-500 bg-orange-500'

            const borderClass =
              job.color === 'indigo'
                ? 'border-indigo-500/20'
                : job.color === 'emerald'
                ? 'border-emerald-500/20'
                : 'border-orange-500/20'

            const IconComponent =
              job.company === 'Freelancer' ? Globe : Building

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                className="relative pl-8 md:pl-12 border-l-2 border-muted-foreground/20"
              >
                {/* Timeline Dot */}
                <div
                  className={cn(
                    'absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-background',
                    colorClass
                  )}
                />

                {/* Date Label */}
                <div className="flex xl:flex-col items-center gap-2 xl:gap-0 xl:items-end absolute -top-8 -left-1 xl:-left-24 text-right">
                  <span
                    className={cn(
                      'font-bold font-mono text-sm',
                      colorClass.split(' ')[0]
                    )}
                  >
                    {job.period}
                  </span>

                  <span className="border-l px-2 xl:border-0 xl:px-0 text-muted-foreground/70 font-mono text-xs">
                    {job.timeDuration}
                  </span>
                </div>

                {/* Card */}
                <div
                  className={cn(
                    'bg-card/40 rounded-xl p-6 border transition-all hover:bg-card/60',
                    borderClass
                  )}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                    <div className="flex items-start md:items-center gap-4">
                      <div
                        className={cn(
                          'hidden md:flex items-center justify-center p-3 rounded-[10px]',
                          bgClass
                        )}
                      >
                        <IconComponent className={cn('w-6 h-6', textClass)} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{job.company}</h3>
                        <p className="text-muted-foreground">{job.role}</p>
                      </div>
                    </div>

                    <div className="px-3 py-1 mx-full rounded text-xs font-mono bg-muted text-muted-foreground border border-border">
                      {job.type}
                    </div>
                  </div>

                  <div className="lg:ml-14">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="space-y-6 mt-6">
                      {job.projects.map((project, pIndex) => (
                        <div
                          key={pIndex}
                          className="pl-4 border-l-2 border-muted-foreground/20"
                        >
                          <h4 className="font-bold mb-2 flex items-center gap-2">
                            <span
                              className={cn(
                                'w-2 h-2 rounded-full inline-block',
                                colorClass
                              )}
                            ></span>
                            {project.title}
                          </h4>

                          {project.role && project.client ? (
                            <p className="text-sm text-card-foreground mb-2">
                              {project.role} • {project.client}
                            </p>
                          ) : null}

                          <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                            <span>Stack:</span>
                            {project.stack.map((tech) => (
                              <span
                                key={tech}
                                className={cn(
                                  'transition-colors cursor-default',
                                  colorClass.split(' ')[0]
                                )}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
