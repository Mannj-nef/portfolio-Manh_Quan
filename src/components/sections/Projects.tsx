'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRight } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: 'Finance Dashboard',
      category: 'Web Application',
      image: '/assets/project_dashboard_mockup.jpg',
      tags: ['Next.js', 'Tailwind', 'Recharts'],
    },
    {
      title: 'Banking Mobile App',
      category: 'Mobile Design',
      image: '/assets/project_mobile_app_mockup.jpg',
      tags: ['React Native', 'Figma', 'iOS'],
    },
    {
      title: "L'Equilibre Fashion",
      category: 'E-Commerce',
      image: '/assets/project_ecommerce_mockup.jpg',
      tags: ['Shopify', 'Liquid', 'Minimal'],
    },
  ]

  return (
    <section id="portfolio" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end gap-4"
        >
          <h2 className="text-3xl font-bold font-serif tracking-tight">
            Selected Works
            <br />& Case Studies.
          </h2>
          <p className="text-muted-foreground whitespace-pre-line text-right hidden md:block">
            A selection of projects that
            <br />
            showcase my skills.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-2 rounded-full opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:underline decoration-1 underline-offset-4">
                {project.title}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">
                  {project.category}
                </span>
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs font-normal border-transparent bg-background/50 backdrop-blur-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
