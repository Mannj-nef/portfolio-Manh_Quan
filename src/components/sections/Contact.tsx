'use client'

import { Mail } from 'lucide-react'
import { motion } from 'framer-motion'

interface ContactProps {
  dict: {
    title: string
    description: string
    email: string
    status: string
    links: {
      github: string
      linkedin: string
      resume: string
    }
    phone: string
  }
}

export function Contact({ dict }: ContactProps) {
  const socialLinks = [
    {
      name: dict.links.github,
      href: 'https://github.com/mannj-nef',
    },
    {
      name: dict.links.linkedin,
      href: 'https://linkedin.com/in/vmquan',
    },
    {
      name: dict.links.resume,
      href: '/assets/Vo_Manh_Quan_CV.pdf',
    },
  ]

  return (
    <section
      id="contact"
      className="bg-background py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary border border-border text-foreground shadow-lg"
          >
            <Mail className="h-5 w-5" />
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="max-w-2xl space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              {dict.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
              {dict.description}
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <a
              href={`mailto:${dict.email}`}
              className="text-3xl md:text-4xl font-bold text-foreground hover:text-muted-foreground transition-colors"
            >
              {dict.email}
            </a>
          </motion.div>

          {/* Status */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-emerald-500">
              {dict.status}
            </span>
          </motion.div>

          {/* Footer Links & Phone */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col items-center gap-6 pt-8"
          >
            <div className="flex flex-wrap justify-center gap-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href={`tel:${dict.phone.replace(/\s/g, '')}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {dict.phone}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
