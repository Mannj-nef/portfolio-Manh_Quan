// Wait, I want UI Badge, but I don't have shadcn badge installed. I'll make a simple one.

'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function ServiceCard({
  title,
  items,
  delay,
}: {
  title: string
  items: string[]
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <Card className="bg-background border transition-colors hover:border-primary/50 h-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-medium">{title}</CardTitle>
          <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-rotate-45 group-hover:text-primary" />
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed mt-4">
            {items.join(', ')}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Skills({ dict }: { dict: Record<string, any> }) {
  return (
    <section id="skills" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16 text-3xl font-bold tracking-tight"
        >
          A comprehensive look at
          <br />
          what I offer.
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title={dict.technical}
            items={dict.technicalList}
            delay={0.1}
          />
          <ServiceCard
            title={dict.additional}
            items={dict.additionalList}
            delay={0.2}
          />
          <ServiceCard title={dict.soft} items={dict.softList} delay={0.3} />
        </div>
      </div>
    </section>
  )
}
