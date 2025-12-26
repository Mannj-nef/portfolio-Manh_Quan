'use client'

import { motion } from 'framer-motion'

export function Experience({ dict }: { dict: Record<string, any> }) {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-3xl font-bold tracking-tight"
        >
          A yearly snapshot of
          <br />
          my professional career.
        </motion.h2>
        <div className="mx-auto max-w-4xl space-y-12">
          {dict.list.map((job: Record<string, any>, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-b pb-12 last:border-0"
            >
              <div className="flex flex-col md:flex-row justify-between items-baseline mb-4">
                <h3 className="text-xl font-bold">
                  {job.role} at {job.company}
                </h3>
                <span className="text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors">
                  {job.period}
                </span>
              </div>
              <p className="max-w-xl text-muted-foreground">
                {job.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
