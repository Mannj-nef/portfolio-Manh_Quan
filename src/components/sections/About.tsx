'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function About({
  dict,
  objDict,
}: {
  dict: Record<string, any>
  objDict: Record<string, any>
}) {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/assets/manh-quan-mac.webp"
              alt="Workspace"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold font-serif tracking-tight">
              Design has always been more than just a job.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {dict.title}. Unlocking new capabilities and building robust
              applications is my passion.
              {objDict.shortTermTitle} & {objDict.longTermTitle}.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t pt-8">
              <div>
                <div className="text-5xl font-bold mb-2">3+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">20+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest">
                  Projects Done
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
