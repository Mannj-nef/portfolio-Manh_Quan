'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface SplitSectionProps {
  title: string
  subtitle: string
  imageSrc: string
  children: React.ReactNode
  reverse?: boolean
  become: string
  isIndigoColor?: boolean
}

const SplitSection = ({
  title,
  imageSrc,
  children,
  subtitle,
  become,
  reverse,
  isIndigoColor,
}: SplitSectionProps) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ${
            reverse ? 'md:order-last' : ''
          }`}
        >
          <Image src={imageSrc} alt="Workspace" fill className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2">
            <span
              className={`w-8 h-[2px] ${
                isIndigoColor ? 'bg-indigo' : 'bg-emerald'
              }`}
            ></span>
            <span
              className={`uppercase font-semibold ${
                isIndigoColor ? 'text-indigo' : 'text-emerald'
              }`}
            >
              {subtitle}
            </span>
          </div>
          <h2 className="text-4xl font-bold font-serif tracking-tight">
            <span className="mb-1 block">{become}</span>
            <p className={`${isIndigoColor ? 'text-indigo' : 'text-emerald'} `}>
              {title}
            </p>
          </h2>
          {children}
        </motion.div>
      </div>
    </div>
  )
}

export default SplitSection
