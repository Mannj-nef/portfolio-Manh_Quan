'use client'

import { motion } from 'framer-motion'
import { IExperience } from '~/types'
import { cn } from '~/lib/utils'

export function Experience({ dict }: { dict: IExperience }) {
  return (
    <section id="experience" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-indigo-500 font-bold tracking-wider uppercase text-sm mb-2"
            >
              {dict.title}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold flex flex-wrap gap-2 items-baseline"
            >
              First{' '}
              <span className="text-muted-foreground/60">{dict.subtitle}</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card/50 border border-muted-foreground/20 px-4 py-2 rounded-lg"
          >
            <span className="text-muted-foreground font-mono">
              Total Exp:{' '}
              <span className="text-foreground font-bold">{dict.totalExp}</span>
            </span>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-muted-foreground/20 ml-3 md:ml-6 space-y-12">
          {dict.list.map((job, index) => {
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

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div
                  className={cn(
                    'absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 border-background',
                    colorClass
                  )}
                />

                {/* Date Label */}
                <span
                  className={cn(
                    'absolute -top-8 left-0 md:-left-24 font-bold font-mono text-sm',
                    colorClass.split(' ')[0]
                  )}
                >
                  {job.period}
                </span>

                {/* Card */}
                <div
                  className={cn(
                    'bg-card/40 rounded-xl p-6 border transition-all hover:bg-card/60',
                    borderClass
                  )}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold">{job.role}</h3>
                      <p className="text-muted-foreground">{job.company}</p>
                    </div>
                    <span className="px-3 py-1 rounded text-xs font-mono bg-muted text-muted-foreground border border-border">
                      {job.type}
                    </span>
                  </div>

                  {job.projects ? (
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
                          <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                            <span>Stack:</span>
                            {project.stack.map((tech) => (
                              <span
                                key={tech}
                                className={cn(
                                  'transition-colors hover:text-foreground cursor-default',
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
                  ) : (
                    <>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {job.description}
                      </p>
                      {job.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-md bg-muted/50 border border-border text-xs font-medium text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
