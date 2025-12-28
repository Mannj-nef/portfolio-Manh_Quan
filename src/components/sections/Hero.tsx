'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, BookText } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { IHero } from '~/types'

export function Hero({ dict }: { dict: IHero }) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 gap-8 flex flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl md:max-w-2/3"
        >
          <h2 className="text-lg md:text-xl font-medium text-muted-foreground mb-4">
            <p>
              {dict.greeting}, {dict.introduction}
            </p>
            <p className="font-bold text-3xl">{dict.name}</p>
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-serif tracking-tight text-manhattan leading-[0.9] mb-12">
            Full Stack
            <br />
            Developer.
          </h1>

          <div className="mb-12">
            <p>{dict.description}</p>
          </div>

          <div className="flex gap-4 items-center">
            <a
              href="https://github.com/Mannj-nef"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 transition-colors hover:text-primary"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background shadow-sm transition-transform group-hover:scale-110">
                <Github className="h-6 w-6" />
              </div>
            </a>
            <a
              href="/assets/Vo_Manh_Quan_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 transition-colors hover:text-primary"
            >
              <Button
                className="cursor-pointer flex items-center gap-2 rounded-md"
                size="sm"
              >
                <BookText className="h-4 w-4" />
                <span>{dict.myCV}</span>
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-full max-w-xl"
        >
          <Image
            src="/assets/manh-quan.webp"
            alt="Hero Image"
            width={800}
            height={800}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
